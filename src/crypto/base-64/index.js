const { validate } = require('./validate')

const availableChars = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z', '+', '/'
]

const BASE_64 = 64

const base64 = (amount) => {
  let safeAmount = validate(amount)

  let divisor = 1
  let module = 0

  let encoded = ''

  while (divisor > 0)
  {
    divisor = parseInt(safeAmount / BASE_64, 10)
    module = safeAmount % BASE_64
    encoded = availableChars[module] + encoded
    safeAmount = divisor
  }

  return encoded;
}

module.exports = {
  base64
}