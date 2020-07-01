const { v7 } = require('../../src/v7')
const testCases = require('./test-cases.json')

describe.only('examples of v7 control code generation', () => {
  it('encodes 5000 testcases', () => {
    testCases.forEach((testcase) => {
      const data = {
        authorization: testcase.autorizacion,
        number: testcase.numeroFactura,
        nitci: testcase.nitci,
        date: testcase.fechaEmision,
        amount: testcase.montoFacturado,
      }
      const dosificationKey = testcase.llaveDosificacion
      const enconded = v7(data, dosificationKey)

      expect(enconded).toBe(testcase.codigoControl)
    })
  })
  it('encodes and creates QR code', () => {
    const testcase = testCases[0]
    const data = {
      authorization: testcase.autorizacion,
      number: testcase.numeroFactura,
      nitci: testcase.nitci,
      date: testcase.fechaEmision,
      amount: testcase.montoFacturado,
      qr: {
        sellerNITCI: '1122332233',
        total: '2500',
        amounts: {
          'ice-iehd-tasas': '0',
          gravado: '0',
          'no-tax': '0',
          discounts: '0',
        },
      },
    }
    const dosificationKey = testcase.llaveDosificacion
    const result = v7(data, dosificationKey)

    expect(result.controlCode).toBe(testcase.codigoControl)
    expect(result.qrCode).toBe('1122332233|876814|7904006306693|20080519|2500|35958,6|7B-F3-48-A8|1665979|0|0|0|0')
  })
  it('encodes and creates QR code without extra amounts', () => {
    const testcase = testCases[0]
    const data = {
      authorization: testcase.autorizacion,
      number: testcase.numeroFactura,
      nitci: testcase.nitci,
      date: testcase.fechaEmision,
      amount: testcase.montoFacturado,
      qr: {
        sellerNITCI: '1122332233',
        total: '2500',
      },
    }
    const dosificationKey = testcase.llaveDosificacion
    const result = v7(data, dosificationKey)

    expect(result.controlCode).toBe(testcase.codigoControl)
    expect(result.qrCode).toBe('1122332233|876814|7904006306693|20080519|2500|35958,6|7B-F3-48-A8|1665979|0|0|0|0')
  })
})
