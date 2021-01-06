var numberFive = 5;
var numberEight = 8;
var numberThree = 3;
var maximumValue = Math.max(numberFive, numberEight, numberThree);
console.log('maximumValue:', maximumValue);

var heroes = ['Spider Man', 'Batman', 'Superman', 'Iron Man'];
var randomNumber = Math.random([heroes]);
randomNumber = (randomNumber * heroes.length);

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Clean Code',
    author: 'Robert Cecil Martin'
  },

  {
    title: 'Code Complete',
    author: 'Steve McConnell'
  },

  {
    title: 'Structure and Interpretation of Computer Programs',
    author: 'Hal Abelson'
  }];

var lastBook = library.pop(library);
console.log('lastBook:', lastBook);

var firstBook = library.shift(library);
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Anne Villarete';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase(firstName);
console.log('sayMyName:', sayMyName);
