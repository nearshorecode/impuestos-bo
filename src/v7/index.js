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
    date: data.date.toString(),
    amount: data.amount.toString(),
  }
  const firstStep = stepOne(safeData)
  const secondStep = stepTwo(firstStep, key)
  const thirdStep = stepThree(secondStep, key)
  const fourthStep = stepFour(thirdStep)
  const fifthStep = stepFive(fourthStep)
  const sixthStep = stepSix(fifthStep, key)

  return sixthStep
}

module.exports = {
  v7,
}
