function convertMinutesToSeconds(minutes) {
  var minutesToSeconds = 60 * minutes;
  return minutesToSeconds;
}

console.log(convertMinutesToSeconds(5));

function greet(name) {
  var greetUser = 'Hey, ' + name;
  return greetUser;
}

console.log(greet('Beavis'));

function getArea(width, height) {
  var area = width * height;
  console.log(area);
}

getArea(17, 42);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var numberOfArray = array.length;
  var lastIndex = numberOfArray - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
