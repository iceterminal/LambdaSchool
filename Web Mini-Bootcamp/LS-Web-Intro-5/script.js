//1. print the number 5 to the console
console.log (5)
//2. Print your name to the console
console.log('David')
//3. Store your age as a variable called "myAge"
var myAge = 500
//4. Print to the console how old you will be in 5 years
console.log(myAge + 5)
//5. Store your favorite food as a variable called "myFavoriteFood"
var myFavoriteFood = "Steak"
//6. Publish your favorite food to `index.html` using `document.write()`
document.write(myFavoriteFood)
document.write("<br>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-<br>")
//7. Print the remainder of 14 / 3 to the console
document.write(14 % 3)
document.write("<br>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-<br>")
//8. Print the remainder of 829 / 13 to the console
document.write(829 % 13)
document.write("<br>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-<br>")
//9. Create a for loop that counts from 0 to 130 by 3s
for (var i = 0; i < 130; i+=3) {
	document.write(i + " ");
}
document.write("<br>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-<br>")
//10. Create a for loop that counts from 3 to 17 by 2s
for (var i = 3; i < 17; i+=2) {
	document.write(i + " ");
}
document.write("<br>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-<br>")
//11. Create a for loop that counts from 100 to 3 by -1
for(var i = 100; i > 3; i--) {
// for(var i = 100; i >= 32; i-=5);
	document.write(i + " ");
}
document.write("<br>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-<br>")
//12. Create a for loop that counts from 1 to 100 by 1s
for (var i = 1; i < 100; i++) {
	document.write(i + " ")
}
document.write("<br>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-<br>")
//13. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `fizz` if the number is divisible by 5
for (var i = 1; i < 100; i++) {
	if(i % 5 === 0 ) {
	document.write("Fizz ");
	} else {
	document.write(i + " ")
	}
}
document.write("<br>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-<br>")
//14. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `buzz` if the number is divisible by 3
for (var i = 1; i < 100; i++) {
	if(i % 3 === 0 ) {
	document.write("Buzz ");
	} else {
	document.write(i + " ")
	}
}
document.write("<br>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-<br>")
//15. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `fizzbuzz` if the number is divisible by 15
for (var i = 1; i < 100; i++) {
	if(i % 15 === 0 ) {
	document.write("FIZZBUZZ ");
	} else {
	document.write(i + " ")
	}
}
document.write("<br>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-<br>")
document.write("<br>-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-<br>")

document.write("<br> EXTRA CREDIT: Fizzbuzz <br>")

/*

The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates who can't seem to program their way out of a wet paper bag. The text of the programming assignment is as follows:

"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

Hint: Use your last three loops and if/then/else statements. You can learn about those here https://www.w3schools.com/js/js_if_else.asp

*/

for (var i = 1; i < 100; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		document.write(" FIZZY-BUZZY ");
	} else if (i % 5 === 0 ) {
				document.write(" buzz ");
	} else if (i % 3 === 0) {
				document.write(" fizz ");
	} else {
		document.write(i + " ");
	}
}
document.write("<br>")