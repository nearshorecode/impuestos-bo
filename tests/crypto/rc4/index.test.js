const { rc4 } = require('../../../src/crypto/rc4')

describe.only('rc4 > encodes', () => {
  it('encodes example 1', () => {
    const value = ['d3Ir6', 'sesamo']

    const enconded = rc4(value)

    expect(enconded).toBe(4)
  })
  it('encodes example 2', () => {
    const value = ['piWCp', 'Aa1-bb2-Cc3-Dd4']

    const enconded = rc4(value)

    expect(enconded).toBe(8)
  })
  it('encodes example 3', () => {
    const value = ['IUKYo', 'XBCPY-GKGX4-PGK44-8B632-X9P33']

    const enconded = rc4(value)

    expect(enconded).toBe(7)
  })
})
