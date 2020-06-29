const { allegedRC4 } = require('../../../crypto/rc4')

const stepSix = (data = {}, dosification) => {
  const key = dosification
  const {
    verhoeff5, encoded,
  } = data

  if (!verhoeff5 || !encoded) {
    throw TypeError('data is required for step 6')
  }

  const result = allegedRC4(encoded, key + verhoeff5)

  return result
}

module.exports = {
  stepSix,
}
