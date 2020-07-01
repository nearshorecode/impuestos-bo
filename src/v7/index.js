const { stepOne } = require('./steps/step-1')
const { stepTwo } = require('./steps/step-2')
const { stepThree } = require('./steps/step-3')
const { stepFour } = require('./steps/step-4')
const { stepFive } = require('./steps/step-5')
const { stepSix } = require('./steps/step-6')

const v7 = (data, dosification) => {
  const key = dosification
  const safeData = {
    authorization: data.authorization.toString(),
    number: data.number.toString(),
    nitci: data.nitci.toString(),
    date: data.date.toString().replace(/\//g, ''),
    amount: data.amount.toString(),
  }
  const firstStep = stepOne(safeData)
  const secondStep = stepTwo(firstStep, key)
  const thirdStep = stepThree(secondStep, key)
  const fourthStep = stepFour(thirdStep)
  const fifthStep = stepFive(fourthStep)
  const sixthStep = stepSix(fifthStep, key)

  if (data.qr) {
    const { sellerNITCI, total, amounts } = data.qr

    let ice = 0
    let g = 0
    let noTax = 0
    let discounts = 0

    if (amounts) {
      ice = amounts['ice-iehd-tasas'] || 0
      g = amounts.gravado || 0
      noTax = amounts['no-tax'] || 0
      discounts = amounts.discounts || 0
    }

    const qrCode = []
    qrCode.push(sellerNITCI)
    qrCode.push(safeData.number)
    qrCode.push(safeData.authorization)
    qrCode.push(safeData.date)
    qrCode.push(total)
    qrCode.push(safeData.amount)
    qrCode.push(sixthStep)
    qrCode.push(safeData.nitci)
    qrCode.push(ice)
    qrCode.push(g)
    qrCode.push(noTax)
    qrCode.push(discounts)

    return {
      controlCode: sixthStep,
      qrCode: qrCode.join('|'),
    }
  }

  return sixthStep
}

module.exports = {
  v7,
}
