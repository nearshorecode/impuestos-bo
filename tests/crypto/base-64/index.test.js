const { base64 } = require('../../../src/crypto/base-64')

describe.only('Base64 > encodes', () => {
  it('encodes example 1', () => {
    const value = 934598591

    const enconded = base64(value)

    expect(enconded).toBe('tjDU/')
  })
  it('encodes example 2', () => {
    const value = 434376710

    const enconded = base64(value)

    expect(enconded).toBe('Pv106')
  })
  it('encodes example 3', () => {
    const value = 204986118

    const enconded = base64(value)

    expect(enconded).toBe('CDzS6')
  })
})
