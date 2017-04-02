//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  var number = num * 10;
  return number;
}

function subtractFive(num) {
  //return num after subtracting five
  var number = num - 5;
  return number;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  if (str1.length == str2.length){
    return true;
  }
  return false;
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  if (x === y){
    return true;
  }
  return false;
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  if (num < 90) {
    return true;
   }
   return false; 
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  if (num > 50) {
    return true;
  }
  return false;
}

function add(x, y) {
  //add x and y together and return the value
  var sum = x + y;
  return sum;
}

function subtract(x, y) {
  //subtract y from x and return the value
  var subnum = x - y;
  return subnum;
}

function divide(x, y) {
  //divide x by y and return the value
  var div = x / y;
  return div;
}

function multiply(x, y) {
  //multiply x by y and return the value
  var mult = x * y;
  return mult;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  var remainder = x % y;
  return remainder;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  var total = num % 2;
  if (total === 0) {
    return true;
  }
  return false;
}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  var total = num % 2;
  if (total === 0) {
    return false;
  }
  return true;
}

function square(num) {
  //square num and return the new value
  var sqr = Math.pow(num, 2); //or var sqr = num * num;
  return sqr;
}

function cube(num) {
  //cube num and return the new value
  var cubed = Math.pow(num, 3);
  return cubed;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  var raised = Math.pow(num, exponent);
  return raised;
}

function roundNumber(num) {
  //round num and return it
  var round = Math.round (num);
  return round;
}

function roundUp(num) {
  //round num up and return it
  var roundUp = Math.ceil(num);
  return roundUp;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  var exclam = (str) + '!';
  return exclam;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  var comb = firstName + ' ' + lastName;
  return comb;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  var greet = 'Hello ' + name + '!';
  return greet;
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  var rect = length * width;
  return rect;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  var triangle = base * height / 2;
  return triangle;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  var circle = Math.PI * (radius * radius);
  return Math.round(circle);
}

function getRectangularPrismVolume(length, width, height) {
  //return the volume of the 3D rectangular prism given the length, width, and height
  var prism = length * width * height;
  return prism;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
