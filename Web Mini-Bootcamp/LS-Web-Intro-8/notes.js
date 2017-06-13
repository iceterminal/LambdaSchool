LambdaSchool Mini Bootcamp (second edition)
HTML / CSS / JavaScript
June 12th, 2017

-Week 4 / Lesson 2-


Callback function
	can pass functions around

named function declaration
anonymous function is the function inside of a higher function
//cb = callback

function sayHi(cb) {
	cb();
	cb();
}

sayHi(function(){
	console.log('hello');
});

// [1,2,3]
function sum(numbers, cb) {
	var result = numbers.reduce(function(acc, val) {
		return acc + value;
	});  //reduce is a built in method and has to be a callback function
	cb(result);
}
console.log (sum([1,2,3]));
sum([1,2,3]);

//common pattern
sum([1,2,3], function(result) {
	console.log(result);
});


// [1,2,3,4,5] -> 5  This will print out the last item
function last(arr, cb) {
	cb(arr[arr.length - 1]);
}
last([1,2,3,4,5, 'hello', {}], function (lastItem) {
	console.log(lastItem);
});

http://www.underscorejs.org

callback is passing a function into another function
higher order functions return other functions


function foo() {
	//var message = 'hi';
	return function () {
		console.log('hi');
		//console.log(message);
	}
}
foo()(); // will return function (unanswered state) and then immediately call it
------or------
var bar = foo();
// is the same as:
// var bar = function () {
// 		console.log('hi');
// 	}
bar();

Can call it out 
	console.log(foo()); //and in chrome inspect it will show it as a function

function foo() {
	function bar() {
		function baz() {
			var topLevelVar = 'hello';
			console.log(topLevelVar);
		}
		baz();
	}
	bar();
}
foo();	

Higher functions cannot see into sibling functions. 

Recursion
a function can call itself from inside of itself from the outside
function foo() {
	foo ();   // THIS WILL CREATE AN INFINITE LOOP
}
	Can do this in a loop.

function factorial (num) {  // factorial of 5 is 5*4*3*2*1
	if (num <=1) return 1;
	return num * factorial(num - 1);
}
console.log(factorial(5));


debugger; in chrome will pause the script where it lists it so you can debug.

