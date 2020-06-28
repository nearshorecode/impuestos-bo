const validate = (amount) => {
  if (typeof amount !== 'number' && typeof amount !== 'string') {
    throw new TypeError('Amount should be a number')
  }

  let validAmount = amount

  if (typeof amount === 'string') {
    const value = parseInt(validAmount, 10)
    if (Number.isNaN(value)) {
      throw new TypeError('Amount should be a number')
    }
  }

  if (validAmount < 0) {
    validAmount *= -1
  }

  const safeAmount = validAmount.toString()

  return safeAmount
}

module.exports = {
  validate,
}
