const { v7 } = require('./v7')
const { convertToLiteral } = require('./convert-to-literal')

module.exports = {
  v7,
  literal: convertToLiteral,
}
