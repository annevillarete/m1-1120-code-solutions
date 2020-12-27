function convertMinutesToSeconds(minutes) {
  var minutesToSeconds = 60 * minutes;
  return minutesToSeconds;
}

var convertMinutesToSecondsResults = convertMinutesToSeconds(5);
console.log('Value of 5 Minutes to Seconds:', convertMinutesToSecondsResults);

function greet(name) {
  var greetUser = 'Hey, ' + name;
  return greetUser;
}

var greetresults = greet('Beavis');
console.log('Value of Greeting:', greetresults);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResults = getArea(17, 42);
console.log('Area of 17x42:', getAreaResults);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var getFirstNameResults = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('Value of First Name:', getFirstNameResults);

function getLastElement(array) {
  var numberOfArray = array.length;
  var lastIndex = numberOfArray - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Value of Last Element:', getLastElementResult);
