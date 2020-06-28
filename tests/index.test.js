const { greet } = require('../src/index')

describe('Greet', () => {
  it('should greet name', () => {
    const name = 'John'

    const result = greet(name)

    expect(result).toBe('Hello John')
  })
  it('should greet without name', () => {
    const name = undefined

    const result = greet(name)

    expect(result).toBe('Hello')
  })
})
