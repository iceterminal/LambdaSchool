notes.js

prompt("Hello")
alert("hello") //will pop open a window saying "Hello" on the browser
return num * 10; //will return the answer to the screen (CLI)

function can be called any time. 
either 
var varName = function()
	or
function funcName(argument);

var addTwoFives = function () {
	document.write (5+5);
}
addTwoFives();

var sayHello = function () {
	alert('hello');
}
sayHello();

var addTwoNumbers = function() {
	document.write(8+8);
}
addTwoNumbers();

var addNumbers = function(x, y) {
	document.write(x + y);
}
addNumbers(5, 6);

var multiply3Numbers = function (num1, num2, num3) {
	document.write(num1 * num2 * num3);
}
multiply3Numbers(1 ,2, 3);
multiply3Numbers(5, 4, 3);
multiply3Numbers(10, 2, 10);

var fourCheck = function (num) {

	if (num <= 4){
		doccument.write("The number is less than 4");
	} else { 
		document.write("Its not")}if(num <= 4){
		return "Its less than or equal to four"; // or document.write("Its less than 4");
		} else {
			return "Its greater than four"; // or document.write("Its greater than 4");
		}
}
fourCheck(3);

var sayHello = function() {
	var name ="David" // this variable is not in the global scope. Only local.
	alert("Hello " + name);
}
sayHello();

fourCheck = function (num) {
	// body...
	blah blah
}

var lessthanFour= fourCheck(5);
console.log(fourCheck(15));

Homework:
@CLI, # npm install
 To run tests, # npm test
