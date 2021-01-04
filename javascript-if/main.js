/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  let result;
  var underFive = number < 5;
  if ((number < 5)) {
    result = underFive;
  } else {
    result = underFive;
  }
  return result;
}

function isEven(number) {
  let result;
  var even = (number % 2 === 0);
  if ((number % 2 === 0)) {
    result = even;
  } else {
    result = even;
  }
  return result;
}

function startsWithJ(string) {
  let result;
  var withJ = (string[0] === 'J');
  if ((string[0] === 'J')) {
    result = withJ;
  } else {
    result = withJ;
  }
  return result;
}

function isOldEnoughToDrink(person) {
  let result;
  var oldEnoughToDrink = (person.age >= 21);
  if ((person.age >= 21)) {
    result = oldEnoughToDrink;
  } else if ((person.age < 21)) {
    result = oldEnoughToDrink;
  }
  return result;
}

function isOldEnoughToDrive(person) {
  let result;
  var oldEnoughToDrive = (person.age >= 16);
  if ((person.age >= 16)) {
    result = oldEnoughToDrive;
  } else if ((person.age < 16)) {
    result = oldEnoughToDrive;
  }
  return result;
}

function isOldEnoughToDrinkAndDrive(person) {
  var oldEnoughToDrinkAndDrive = 'false';
  return oldEnoughToDrinkAndDrive;
}

function categorizeAcidity(pH) {
  let result;
  if ((pH === 7)) {
    result = 'neutral';
  } else if ((pH >= 0 && pH < 7)) {
    result = 'acid';
  } else if ((pH > 7 && pH <= 14)) {
    result = 'base';
  } else {
    result = 'invalid pH level';
  }
  return result;
}

function introduceWarnerBro(name) {
  let result;
  if (name === 'wakko') {
    result = "We're the Warner Brothers!";
  } else if (name === 'yakko') {
    result = "We're the Warner Brothers!";
  } else if (name === 'dot') {
    result = "I'm cute~";
  } else {
    result = 'Goodnight everybody!';
  }
  return result;
}
