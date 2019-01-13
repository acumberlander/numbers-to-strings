const numAlpha = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
}

const convertToString = (num) => {
  const numAlphaKeys = Object.keys(numAlpha);
  const numAlphaValues = Object.values(numAlpha);
  if (num in numAlphaKeys) {
    for (i = 0; i < numAlphaKeys.length; i++) {
      if (i === num) {
        return numAlphaValues[i];
      }
    }
  }
};

console.log(convertToString(3));

const alphaNum = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
}

const convertToNumber = (string) => {
  const alphaNumKeys = Object.keys(alphaNum);
  const alphaNumValues = Object.values(alphaNum);
  // the 'in' operator does not look at value.. EVER.
  // it only pays attention to index value
  for (i = 0; i < alphaNumKeys.length; i++) {
    if (alphaNumKeys[i] === string) {
      return alphaNumValues[i];
    }
  }
};

console.log(convertToNumber('nine'));


// console.log(Object.values(alphaNum));