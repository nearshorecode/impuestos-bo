const greet = (name) => {
  if (!name) {
    return 'Hello'
  }
  return `Hello ${name}`
}

module.exports = { greet }
