const { allegedRC4 } = require('../../../crypto/rc4')

const stepThree = (data = {}, dosification) => {
  const key = dosification
  const {
    verhoeff5, verhoeff, authorization, number, nitci, date, amount,
  } = data

  if (!verhoeff5 || !verhoeff || !key) {
    throw TypeError('data and dosification are required for step 3')
  }

  const value = authorization + number + nitci + date + amount
  const encoder = dosification + verhoeff5

  const encoded = allegedRC4(value, encoder, '')

  return {
    verhoeff5,
    verhoeff,
    encoded,
  }
}

module.exports = {
  stepThree,
}
