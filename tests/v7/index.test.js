const { v7 } = require('../../src/v7')
const testCases = require('./test-cases.json')

describe.only('examples of v7 control code generation', () => {
  it('encodes 5000 testcases', () => {
    testCases.forEach((testcase) => {
      const data = {
        authorization: testcase.autorizacion,
        number: testcase.numeroFactura,
        nitci: testcase.nitci,
        date: testcase.fechaEmision.replace(/\//g, ''),
        amount: testcase.montoFacturado,
      }
      const dosificationKey = testcase.llaveDosificacion
      const enconded = v7(data, dosificationKey)

      expect(enconded).toBe(testcase.codigoControl)
    })
  })
})
