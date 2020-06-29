const stepTwo = (verhoeffData = {}, dosification) => {
  const key = dosification
  const {
    verhoeff5, verhoeff2,
  } = verhoeffData

  if (!verhoeff5 || !verhoeff2 || !key) {
    throw TypeError('verhoeffData and dosification are required for step 2')
  }

  const verhoeff = verhoeff5.split('').map((d) => Number.parseInt(d, 10) + 1)
  let idx = 0
  const data = []

  verhoeff.forEach((digit) => {
    data.push(key.substring(idx, digit + idx))
    idx += digit
  })

  return {
    authorization: verhoeff2.authorization + data[0],
    number: verhoeff2.number + data[1],
    nitci: verhoeff2.nitci + data[2],
    date: verhoeff2.date + data[3],
    amount: verhoeff2.amount + data[4],
    verhoeff5,
    verhoeff,
  }
}

module.exports = {
  stepTwo,
}
