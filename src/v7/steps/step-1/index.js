const { verhoeff } = require('../../../crypto/verhoeff/index')

const appendVerhoeff = (number, amount) => {
  let temp = number.toString()
  let digits = amount
  while (digits > 0) {
    temp += verhoeff(temp)
    digits -= 1
  }
  return temp;
}

const stepOne = (data) => {
  const {
    authorization, number, nitci, date, amount,
  } = data
  if (!authorization || !number || !nitci || !date || !amount) {
    throw TypeError('authorization, number, nitci, date and amount and  are required for data in step 1')
  }

  const numberVerhoeff = appendVerhoeff(number, 2)
  const nitciVerhoeff = appendVerhoeff(nitci, 2)
  const dateVerhoeff = appendVerhoeff(date, 2)
  const amountVerhoeff = appendVerhoeff(Math.round(amount.replace(',', '.')).toString(), 2)

  const dataTotal = (
    parseInt(numberVerhoeff, 10)
    + parseInt(nitciVerhoeff, 10)
    + parseInt(dateVerhoeff, 10)
    + parseInt(amountVerhoeff, 10)
  )

  const totalSumString = dataTotal.toString()

  return {
    verhoeff5: appendVerhoeff(totalSumString, 5).slice(-5),
    verhoeff2: {
      authorization,
      number: numberVerhoeff,
      nitci: nitciVerhoeff,
      date: dateVerhoeff,
      amount: amountVerhoeff,
    },
  }
}

module.exports = {
  stepOne,
}
