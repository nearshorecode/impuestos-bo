const { allegedRC4 } = require('../../../src/crypto/rc4')

describe.only('allegedRC4 > encodes', () => {
  describe('Throws errors when', () => {
    it('is undefined', () => {
      const t = () => {
        allegedRC4()
      };

      expect(t).toThrow(TypeError);
    })
    it('is a string', () => {
      const t = () => {
        allegedRC4(1, [])
      };

      expect(t).toThrow(TypeError);
    })
  })

  it('encodes example 1', () => {
    const enconded = allegedRC4('d3Ir6', 'sesamo')

    expect(enconded).toBe('EB-06-AE-F8-92')
  })
  it('encodes example 2', () => {
    const enconded = allegedRC4('piWCp', 'Aa1-bb2-Cc3-Dd4')

    expect(enconded).toBe('37-71-2E-14-A0')
  })
  it('encodes example 3', () => {
    const enconded = allegedRC4('IUKYo', 'XBCPY-GKGX4-PGK44-8B632-X9P33')

    expect(enconded).toBe('83-62-FC-B0-F0')
  })
})
