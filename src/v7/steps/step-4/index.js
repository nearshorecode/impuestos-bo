const stepFour = (data = {}) => {
  const {
    verhoeff5, verhoeff, encoded,
  } = data

  if (!verhoeff5 || !verhoeff || !encoded) {
    throw TypeError('data is required for step 4')
  }

  const total = encoded.split('').reduce((a, b) => a + b.toString().charCodeAt(0), 0)
  const partialTotals = [0, 0, 0, 0, 0]

  for (let i = 0; i < encoded.length; i += 1) {
    partialTotals[i % 5] += encoded.charCodeAt(i)
  }

  return {
    verhoeff5,
    verhoeff,
    total,
    partialTotals,
  }
}

module.exports = {
  stepFour,
}
