const { verhoeff } = require('../../../crypto/verhoeff/index')

const appendVerhoeff = (number, amount) => {
  let temp = number
  let digits = amount
  while (digits > 0) {
    temp += verhoeff(temp)
    digits -= 1
  }
  return temp;
}

const stepOne = (data) => {
  const {
    number, nitci, date, amount, authorization,
  } = data

  if (!number || !nitci || !date || !amount || !authorization) {
    throw TypeError('number, nitci, date, amount and authorization are required for data in step 1')
  }

  const numberVerhoeff = appendVerhoeff(number, 2)
  const nitciVerhoeff = appendVerhoeff(nitci, 2)
  const dateVerhoeff = appendVerhoeff(date, 2)
  const amountVerhoeff = appendVerhoeff(amount, 2)

  const dataTotal = (
    parseInt(number, 10)
    + parseInt(nitci, 10)
    + parseInt(date, 10)
    + parseInt(amount, 10)
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
