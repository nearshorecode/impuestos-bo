const validate = (amount) => {
  if (typeof amount !== 'number') {
    throw new TypeError('Amount should be a number')
  }

  let safeAmount = amount

  if (amount !== parseInt(amount, 10)) {
    throw TypeError('Amount must be an integer')
  }

  if (safeAmount < 0) {
    safeAmount *= -1
  }

  return parseInt(safeAmount, 10)
}

module.exports = {
  validate,
}
