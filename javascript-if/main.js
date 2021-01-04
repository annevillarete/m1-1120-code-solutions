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
  var underFive = number < 5;
  if ((number < 5)) {
    return underFive;
  } else if ((number > 5)) {
    return underFive;
  }
}

function isEven(number) {
  var even = (number % 2 === 0);
  if ((number % 2 === 0)) {
    return even;
  } else if ((number % 2 !== 0)) {
    return even;
  }
}

function startsWithJ(string) {
  var withJ = (string[0] === 'J');
  if ((string[0] === 'J')) {
    return withJ;
  } else if ((string[0] !== 'J')) {
    return withJ;
  }

}

function isOldEnoughToDrink(person) {
  var oldEnoughToDrink = (person.age >= 21);
  if ((person.age >= 21)) {
    return oldEnoughToDrink;
  } else if ((person.age < 21)) {
    return oldEnoughToDrink;
  }
}

function isOldEnoughToDrive(person) {
  var oldEnoughToDrive = (person.age >= 16);
  if ((person.age >= 16)) {
    return oldEnoughToDrive;
  } else if ((person.age < 16)) {
    return oldEnoughToDrive;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  var oldEnoughToDrinkAndDrive = 'false';
  return oldEnoughToDrinkAndDrive;
}

function categorizeAcidity(pH) {
  if ((pH === 7)) {
    return 'neutral';
  } else if ((pH >= 0 && pH < 7)) {
    return 'acid';
  } else if ((pH > 7 && pH <= 14)) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'wakko') {
    return "We're the Warner Brothers!";
  } else if (name === 'yakko') {
    return "We're the Warner Brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }

}
