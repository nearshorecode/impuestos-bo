
[![Build Status](https://travis-ci.org/nearshorecode/impuestos-bo.svg?branch=master)](https://travis-ci.org/nearshorecode/impuestos-bo)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![codecov](https://codecov.io/gh/nearshorecode/impuestos-bo/branch/master/graph/badge.svg)](https://codecov.io/gh/nearshorecode/impuestos-bo)

# Utility Library for Impuestos Bolivia

# Usage

To use this library install it from npm:

```
npm i @nearshorecode/impuestos-bo
```

or

```
yarn add @nearshorecode/impuestos-bo
```

Then you can use it to generate V7 Control code, for example:

```
const { v7 } = require('@nearshorecode/impuestos-bo')

const data = {
  authorization: '29040011007',
  number: '1503',
  nitci: '4189179011',
  date: '2007/07/02',
  amount: '2500',
}

const controlCode = v7(data, '9rCB7Sv4X29d)5k7N%3ab89p-3(5[A') // returns control code string
```

You can convert a number to literal, for example:

```
const { literal } = require('@nearshorecode/impuestos-bo')

const data = '17'

const literal = literal(data) // returns 'DIECISIETE 00/100 BOLIVIANOS'
```

You can also request QR code string that you can later use it to render, for this you need to send it additional parameters:

```
const { v7 } = require('@nearshorecode/impuestos-bo')

const data = {
  authorization: '29040011007',
  number: '1503',
  nitci: '4189179011',
  date: '2007/07/02',
  amount: '2500',
  qr: {
    sellerNITCI: '1122332233',
    total: '2500',
    amounts: {
      'ice-iehd-tasas': '0', // defaults to 0
      gravado: '0', // defaults to 0
      'no-tax': '0' // defaults to 0
      discounts: '0' // defaults to 0
    }
  }
}

const result = v7(data, '9rCB7Sv4X29d)5k7N%3ab89p-3(5[A')

console.log(result.controlCode)
console.log(result.qrCode)
```

## QR Code Reference

Position | Field | Type | Mandatory | Max Length
--- | --- | --- | --- | ---
1 | NIT | Number | Y | 12
2 | Factura | Number | Y | 10
3 | Authorization | Number | Y | 15
4 | Date | DD/MM/AAAA | Y | 10
5 | Total | Number (decimal point) | Y | 11
6 | Amount | Number (decimal point) | Y | 11
7 | Codigo de Control | String | Y | 17
8 | Buyer NIT/CI/CEX/0 | String | Y | 12
9 | Amount ICE/IEHD/Tasas/0 | Number (decimal point) | N | 11
10 | Amount Gravado/0 | Number (decimal point) | N | 11
11 | Amount No-Tax/0 | Number (decimal point) | N | 11
12 | Discounts/Bonus | Number (decimal point) | N | 11



## Local Development

First clone this project and install dependencies using:

```bash
  git clone https://github.com/nearshorecode/impuestos-bo
  yarn install
```

We are using semantic-release and conventional commits for this project, once you want to submit a PR make sure to run linter and to run or add unit tests in the `tests` folder on the root level.