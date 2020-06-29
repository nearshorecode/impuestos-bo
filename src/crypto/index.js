const { base64 } = require('./base-64')
const { allegedRC4 } = require('./rc4')
const { verhoeff } = require('./verhoeff')

const crypto = {
  base64,
  allegedRC4,
  verhoeff,
}

module.exports = {
  crypto,
}
