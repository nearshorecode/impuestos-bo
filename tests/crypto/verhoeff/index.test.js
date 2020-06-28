const { verhoeff } = require('../../../src/crypto/verhoeff')

describe.only('Verhoeff > encodes', () => {
  it('encodes example 1', () => {
    const value = 12083

    const enconded = verhoeff(value)

    expect(enconded).toBe(7)
  })
  it('encodes example 2', () => {
    const value = 0

    const enconded = verhoeff(value)

    expect(enconded).toBe(4)
  })
  it('encodes example 3', () => {
    const value = 1810

    const enconded = verhoeff(value)

    expect(enconded).toBe(8)
  })
  it('encodes example 4', () => {
    const value = '04'

    const enconded = verhoeff(value)

    expect(enconded).toBe(7)
  })
})
