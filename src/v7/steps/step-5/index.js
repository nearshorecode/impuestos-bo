const { base64 } = require('../../../crypto/base-64')

const stepFive = (data = {}) => {
  const {
    verhoeff5, verhoeff, total, partialTotals,
  } = data

  if (!verhoeff5 || !verhoeff || !total || !partialTotals) {
    throw TypeError('data is required for step 5')
  }

  const mapper = (partial, idx) => parseInt((partial * total) / verhoeff[idx], 10)

  const result = partialTotals.map(mapper)

  const message = result.reduce((a, b) => a + b, 0)

  const encoded = base64(message)

  return {
    verhoeff5,
    encoded,
  }
}

module.exports = {
  stepFive,
}
