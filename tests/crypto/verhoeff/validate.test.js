const { validate } = require('../../../src/crypto/verhoeff/validate')

describe('Verhoeff > validate', () => {
  describe('Throws errors when', () => {
    it('is undefined', () => {
      const value = undefined

      const t = () => {
        validate(value)
      };

      expect(t).toThrow(TypeError);
    })
    it('is a string', () => {
      const value = 'john'

      const t = () => {
        validate(value)
      };

      expect(t).toThrow(TypeError);
    })
    it('is an array', () => {
      const value = [10, 10]

      const t = () => {
        validate(value)
      };

      expect(t).toThrow(Error);
    })
    xit('is not an integer', () => {
      const value1 = 10.49
      const value2 = 10.50
      const value3 = 10.51

      const t1 = () => {
        validate(value1)
      };

      const t2 = () => {
        validate(value2)
      };

      const t3 = () => {
        validate(value3)
      };

      expect(t1).toThrow(TypeError);
      expect(t2).toThrow(TypeError);
      expect(t3).toThrow(TypeError);
    })
  })
  it('is a number', () => {
    const value = 10

    const result = validate(value)

    expect(result).toBe('10')
  })
  xit('is a string number', () => {
    const value = '04'

    const result = validate(value)

    expect(result).toBe('04')
  })
  it('and return positive', () => {
    const value = -10

    const result = validate(value)

    expect(result).toBe('10')
  })
  xit('and return positive when negative string number', () => {
    const value = '-10'

    const result = validate(value)

    expect(result).toBe('10')
  })
  it('should allow 0', () => {
    const value = 0

    const result = validate(value)

    expect(result).toBe('0')
  })
})
