# numbers-to-strings
This was a coding challenge at local "Coding Jam" meetup event.I was successful in completing the challenge with the giving time and learned few things while there.

One of the things I learned specifically is that the 'in' operator in javascript only compares index values as opposed to the values themselves. 

```
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
  if (string in alphaNumKeys) {
    for (i = 0; i < alphaNumKeys.length; i++) {
      if (i === string) {
        return alphaNumValues[i];
      }
    }
  } else {
    console.log('fails')
  }
};

convertToNumber('eight');

```
Will be attending more of these events in the future!
