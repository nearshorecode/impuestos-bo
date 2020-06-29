const { base64 } = require('../base-64')

const buffer = 256

const pad = (num, size) => {
  let s = num
  while (s.length < size) s = `0${s}`
  return s
}

const rc4 = (message, key) => {
  const state = []
  for (let i = 0; i < buffer; i += 1) {
    state.push(i)
  }

  let idx1 = 0
  let idx2 = 0
  for (let i = 0; i < buffer; i += 1) {
    const ascii = key.charCodeAt(idx1) + state[i] + idx2

    idx2 = parseInt(ascii % buffer, 10)

    const temp = state[idx2]
    state[idx2] = state[i]
    state[i] = temp

    idx1 = parseInt((idx1 + 1) % key.length, 10)
  }

  let x = 0
  let y = 0
  let nmen = 0
  const cyfered = []
  for (let i = 0; i < message.length; i += 1) {
    x = parseInt((x + 1) % buffer, 10)
    y = parseInt((state[x] + y) % buffer, 10)
    const idx = state[x] + state[y]
    // eslint-disable-next-line no-bitwise
    nmen = message.charCodeAt(i) ^ state[parseInt(idx % buffer, 10)]
    const temp = pad(base64(nmen), 2)
    cyfered.push(temp)
  }

  return cyfered.join('-')
}

console.log(rc4('d3Ir6', 'sesamo'))
