const { convertToLiteral } = require('../../src/convert-to-literal')

describe.only('examples convert to literal', () => {
  it('converts unit 0', () => {
    const data = '0'

    const literal = convertToLiteral(data)

    expect(literal).toBe('CERO 00/100 BOLIVIANOS')
  })
  it('converts unit 1', () => {
    const data = '1'

    const literal = convertToLiteral(data)

    expect(literal).toBe('UN 00/100 BOLIVIANO')
  })
  it('converts dozen 17', () => {
    const data = '17'

    const literal = convertToLiteral(data)

    expect(literal).toBe('DIECISIETE 00/100 BOLIVIANOS')
  })
  it('converts hundred 997', () => {
    const data = '997'

    const literal = convertToLiteral(data)

    expect(literal).toBe('NOVECIENTOS NOVENTA Y SIETE 00/100 BOLIVIANOS')
  })
  it('converts thousand 2020', () => {
    const data = '2020'

    const literal = convertToLiteral(data)

    expect(literal).toBe('DOS MIL VEINTE 00/100 BOLIVIANOS')
  })
  it('converts 37093', () => {
    const data = '37093'

    const literal = convertToLiteral(data)

    expect(literal).toBe('TREINTA Y SIETE MIL NOVENTA Y TRES 00/100 BOLIVIANOS')
  })
  it('converts 527465', () => {
    const data = '527465'

    const literal = convertToLiteral(data)

    expect(literal).toBe('QUINIENTOS VEINTISIETE MIL CUATROCIENTOS SESENTA Y CINCO 00/100 BOLIVIANOS')
  })
  it('converts million 1522020', () => {
    const data = '1522020'

    const literal = convertToLiteral(data)

    expect(literal).toBe('UN MILLON QUINIENTOS VEINTIDOS MIL VEINTE 00/100 BOLIVIANOS')
  })
  it('converts millions 4522020', () => {
    const data = '4522020'

    const literal = convertToLiteral(data)

    expect(literal).toBe('CUATRO MILLONES QUINIENTOS VEINTIDOS MIL VEINTE 00/100 BOLIVIANOS')
  })
  it('converts 0.0', () => {
    const data = '0.0'

    const literal = convertToLiteral(data)

    expect(literal).toBe('CERO 00/100 BOLIVIANOS')
  })
  it('converts 0.1', () => {
    const data = '0.1'

    const literal = convertToLiteral(data)

    expect(literal).toBe('CERO 01/100 BOLIVIANOS')
  })
  it('converts 0.00', () => {
    const data = '0.00'

    const literal = convertToLiteral(data)

    expect(literal).toBe('CERO 00/100 BOLIVIANOS')
  })
  it('converts 1.00', () => {
    const data = '1.00'

    const literal = convertToLiteral(data)

    expect(literal).toBe('UN 00/100 BOLIVIANO')
  })
  it('converts 0.20', () => {
    const data = '0.20'

    const literal = convertToLiteral(data)

    expect(literal).toBe('CERO 00/100 BOLIVIANOS')
  })
  it('converts 20.00', () => {
    const data = '20.00'

    const literal = convertToLiteral(data)

    expect(literal).toBe('VEINTE 00/100 BOLIVIANOS')
  })
  it('converts 20.20', () => {
    const data = '20.20'

    const literal = convertToLiteral(data)

    expect(literal).toBe('VEINTE 20/100 BOLIVIANOS')
  })
  it('converts if mistakenly amount was sent of type number', () => {
    const data = 4522020

    const literal = convertToLiteral(data)

    expect(literal).toBe('CUATRO MILLONES QUINIENTOS VEINTIDOS MIL VEINTE 00/100 BOLIVIANOS')
  })
  it('converts 0,1 if mistakenly amount was sent with a comma', () => {
    const data = '0,1'

    const literal = convertToLiteral(data)

    expect(literal).toBe('CERO 01/100 BOLIVIANOS')
  })
})
