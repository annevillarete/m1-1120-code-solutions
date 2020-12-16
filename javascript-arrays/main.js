var colors;
colors = ['red', 'white', 'blue'];

console.log('Value of colors:', colors);
console.log('Type of colors:', typeof colors);

console.log('Value of colors [0]:', colors[0]);
console.log('Value of colors [1]:', colors[1]);
console.log('Value of colors [2]:', colors[2]);

var americaIs = 'America is';
americaIs += ' ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(americaIs);

colors[2] = 'green';
console.log('Value of colors [2]:', colors[2]);

var mexicoIs = 'Mexico is';
mexicoIs += ' ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(mexicoIs);

console.log('Value of colors:', colors);

var students;
students = ['Anne', 'Murphy', 'Michael', 'Sarah'];

console.log('Value of students:', students);

var numberOfStudents;
numberOfStudents = students.length;
console.log('Value of numberOfStudent:', numberOfStudents);

var lastIndex;
lastIndex = numberOfStudents - 1;
console.log('Value of lastIndex:', lastIndex);

lastIndex = students[3];

var lastStudent = lastIndex;
console.log('The last student in the array is', lastStudent);

console.log(students);
