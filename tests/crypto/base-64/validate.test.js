const { validate } = require('../../../src/crypto/base-64/validate')

describe('Base-64 > validate', () => {
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
    it('is a string number', () => {
      const value = '10'
  
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
    it('is not an integer', () => {
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

    expect(result).toBe(10)
  })
  it('and return positive', () => {
    const value = -10

    const result = validate(value)

    expect(result).toBe(10)
  })
})
