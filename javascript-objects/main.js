var student = {
  firstName: 'Anne',
  lastName: 'Villarete',
  age: '30'
};

console.log('Value of student:', student);
console.log('Type of student:', typeof student);

var fullName = student.firstName + student.lastName;
console.log('Value of fullName:', fullName);
console.log('Type of fullName:', typeof fullName);

student.livesInIrvine = false;
console.log('Value of livesInIrvine:', student.livesInIrvine);
console.log('Type of livesInIrvine:', typeof student.livesInIrvine);

student.previousOccupation = 'Technical Account Manager';
console.log('Value of previousOccupation:', student.previousOccupation);
console.log('Type of previousOccupation:', typeof student.previousOccupation);

console.log('Value of student:', student);
console.log('Type of student:', typeof student);

var vehicle = {
  make: 'Lexus',
  model: 'RC 350',
  year: '2015'
};
console.log('Value of vehicle:', vehicle);
console.log('Type of vehicle:', typeof vehicle);

vehicle['color'] = 'Gray';
console.log('Value of color:', vehicle.color);
console.log('Type of color:', typeof vehicle.color);

vehicle['isConvertible'] = 'false';
console.log('Value of isConvertible:', vehicle.isConvertible);
console.log('Type of isConveritble:', typeof vehicle.isConvertible);

console.log('Value of vehicle:', vehicle);
console.log('Type of vehicle:', typeof vehicle);

var pet = {
  name: 'Murphy',
  type: 'Dog Shihtzu'
};

console.log('Value of pet:', pet);
console.log('Type of pet:', typeof pet);

delete pet.name;
delete pet.type;

console.log('Value of pet:', pet);
console.log('Type of pet:', typeof pet);
