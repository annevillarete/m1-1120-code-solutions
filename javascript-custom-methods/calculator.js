/* exported calculator */
var calculator = {
  add: function (x, y) {
    var sum = (x + y);
    return sum;
  },
  subtract: function (x, y) {
    var difference = (x - y);
    return difference;
  },
  multiply: function (x, y) {
    var product = (x * y);
    return product;
  },
  divide: function (x, y) {
    var quotient = (x / y);
    return quotient;
  },
  square: function (x) {
    var numberSquared = (x ** 2);
    return numberSquared;
  },
  sumAll: function (numbers) {
    var totalSum = 0;
    for (var i = 0; i < numbers.length; i++) {
      totalSum += numbers[i];
    }
    return totalSum;
  },
  getAverage: function (numbers) {
    var average = 0;
    for (var i = 0; i < numbers.length; i++) {
      average += numbers[i] / numbers.length;
    }
    return average;
  }

};
