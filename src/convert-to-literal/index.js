const units = (number) => {
  switch (number) {
    case 1:
      return 'UN';
    case 2:
      return 'DOS';
    case 3:
      return 'TRES';
    case 4:
      return 'CUATRO';
    case 5:
      return 'CINCO';
    case 6:
      return 'SEIS';
    case 7:
      return 'SIETE';
    case 8:
      return 'OCHO';
    case 9:
      return 'NUEVE';
    default:
      return '';
  }
};

const getAndDozens = (singularString, numberUnits) => (numberUnits > 0
  ? `${singularString} Y ${units(numberUnits)}` : singularString);

const getDozens = (number) => {
  const dozens = Math.floor(number / 10);
  const unit = number - (dozens * 10);
  switch (dozens) {
    case 1:
      switch (unit) {
        case 0:
          return 'DIEZ';
        case 1:
          return 'ONCE';
        case 2:
          return 'DOCE';
        case 3:
          return 'TRECE';
        case 4:
          return 'CATORCE';
        case 5:
          return 'QUINCE';
        default:
          return `DIECI${units(unit)}`;
      }
    case 2:
      switch (unit) {
        case 0:
          return 'VEINTE';
        default:
          return `VEINTI${units(unit)}`;
      }
    case 3:
      return getAndDozens('TREINTA', unit);
    case 4:
      return getAndDozens('CUARENTA', unit);
    case 5:
      return getAndDozens('CINCUENTA', unit);
    case 6:
      return getAndDozens('SESENTA', unit);
    case 7:
      return getAndDozens('SETENTA', unit);
    case 8:
      return getAndDozens('OCHENTA', unit);
    case 9:
      return getAndDozens('NOVENTA', unit);
    case 0:
      return units(unit);
    default:
      return '';
  }
};

const getHundreds = (number) => {
  const hundreds = Math.floor(number / 100);
  const dozens = number - (hundreds * 100);
  switch (hundreds) {
    case 1:
      if (dozens > 0) {
        return `CIENTO ${getDozens(dozens)}`;
      }
      return 'CIEN';
    case 2:
      return `DOSCIENTOS ${getDozens(dozens)}`;
    case 3:
      return `TRESCIENTOS ${getDozens(dozens)}`;
    case 4:
      return `CUATROCIENTOS ${getDozens(dozens)}`;
    case 5:
      return `QUINIENTOS ${getDozens(dozens)}`;
    case 6:
      return `SEISCIENTOS ${getDozens(dozens)}`;
    case 7:
      return `SETECIENTOS ${getDozens(dozens)}`;
    case 8:
      return `OCHOCIENTOS ${getDozens(dozens)}`;
    case 9:
      return `NOVECIENTOS ${getDozens(dozens)}`;
    default:
      return getDozens(dozens);
  }
};

const section = (number, divider, singularString, pluralString) => {
  const hundreds = Math.floor(number / divider)
  const rest = number - (hundreds * divider)
  let letters = '';
  if (hundreds > 0) {
    letters = hundreds > 1 ? `${getHundreds(hundreds)} ${pluralString}` : singularString;
  } else {
    letters = singularString;
  }
  if (rest > 0) {
    letters += '';
  }
  return letters;
}

const getThousands = (number) => {
  const divider = 1000;
  const hundreds = Math.floor(number / divider)
  const rest = number - (hundreds * divider)
  const thousandsString = section(number, divider, 'UN MIL', 'MIL');
  const hundredsString = getHundreds(rest);
  return thousandsString === '' || hundreds === 0 ? hundredsString
    : `${thousandsString} ${hundredsString}`;
};

const getMillion = (number, singular) => {
  let millionLetter = singular ? 'UN MILLON' : 'MILLONES';
  if (number % 1000000 === 0) {
    millionLetter += ' DE'
  }
  return millionLetter;
};

const getMillions = (number) => {
  const divider = 1000000;
  const hundreds = Math.floor(number / divider)
  const rest = number - (hundreds * divider)
  const millionString = section(number, divider, getMillion(number, true), getMillion(number,
    false));
  const thousandsString = getThousands(rest);
  return millionString === '' || hundreds === 0 ? thousandsString
    : `${millionString} ${thousandsString}`;
};

const splitDecimalToIntegers = (amount) => {
  let safeAmount = amount
  if (typeof safeAmount === 'number') {
    safeAmount = safeAmount.toString()
  }
  if (safeAmount.includes(',')) {
    safeAmount = safeAmount.replace(',', '.')
  }
  const splitAmount = safeAmount.split('.')
  if (parseInt(splitAmount[1], 10) > 99) {
    throw new TypeError('Decimals can not be higher than 99')
  }
  if (parseInt(splitAmount[1], 10) < 0) {
    throw new TypeError('Decimals can not be negative')
  }
  if (parseInt(splitAmount[0], 10) < 0) {
    throw new TypeError('Integers can not be negative')
  }
  return splitAmount
}

const convertToLiteral = (amount) => {
  const safeCompleteAmount = splitDecimalToIntegers(amount)
  const safeIntegers = safeCompleteAmount[0]
  let safeCents = safeCompleteAmount[1]
  if (typeof safeCents === 'undefined') {
    safeCents = ''
  }

  const data = {
    integers: safeIntegers,
    cents: safeCents,
    coinLettersPlural: 'BOLIVIANOS',
    coinLettersSingular: 'BOLIVIANO',
  }

  if (data.cents === '00') {
    if (data.integers === '0') {
      return `CERO 00/100 ${data.coinLettersPlural}`
    }
    if (data.integers === '1') {
      return `UN 00/100 ${data.coinLettersSingular}`
    }
    return `${getMillions(data.integers)} 00/100 ${data.coinLettersPlural}`
  }

  if (data.integers === '0') {
    if (data.cents > '0' && data.cents < '10') {
      return `CERO 0${data.cents}/100 ${data.coinLettersPlural}`
    }
    return `CERO 00/100 ${data.coinLettersPlural}`
  }

  if (data.integers === '1') {
    if (data.cents > '0' && data.cents < '10') {
      return `UN 0${data.cents}/100 ${data.coinLettersSingular}`
    }
    return `UN 00/100 ${data.coinLettersSingular}`
  }

  if (data.integers > '1') {
    if (data.cents === '') {
      return `${getMillions(data.integers)} 00/100 ${data.coinLettersPlural}`
    }
    if (data.cents > '0' && data.cents < '10') {
      return `${getMillions(data.integers)} 0${data.cents}/100 ${data.coinLettersPlural}`
    }
  }

  return `${getMillions(data.integers)} ${data.cents}/100 ${data.coinLettersPlural}`;
}

module.exports = {
  convertToLiteral,
}
