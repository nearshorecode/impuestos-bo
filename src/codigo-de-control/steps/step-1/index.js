/* eslint-disable no-unused-vars */
const { verhoeff } = require('../../../crypto/verhoeff/index')

const addRecursive = (number, digits) => {
  let temp = number
  while (digits > 0) {
    temp += verhoeff(temp)
    // eslint-disable-next-line no-param-reassign
    digits -= 1
  }
  return temp;
}

const stepOne = (data) => {
  const {
    number = null, nitci = null, date = null, amount = null,
  } = data

  if (!number || !nitci || !date || !amount) { throw TypeError('Missing parameters') }
  const number2verhoeff = addRecursive(number, 2)
  const nitci2verhoeff = addRecursive(nitci, 2)
  const date2verhoeff = addRecursive(date, 2)
  const amount2verhoeff = addRecursive(amount, 2)

  const totalSum = parseInt(number, 10)
  + parseInt(nitci, 10)
  + parseInt(date, 10)
  + parseInt(amount, 10)

  const totalSumString = totalSum.toString()
  return addRecursive(totalSumString, 5).slice(-5)
}

module.exports = {
  stepOne,
}
