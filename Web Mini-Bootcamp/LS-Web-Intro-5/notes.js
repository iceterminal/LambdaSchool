in javascript console.log will print this thing to the console (ie. chrome inspect console tab)
console.log(5); will print 5 in the console
console.log(40 / 2); will print out 20

document.write('hello'); will print out to the html page
document.write("<h1>Hello there</h1>");

prompt("What is your name?");
or
var myName = prompt ("What is your name?");
console.log(myName);
	or
document.write("Hello I am " + myName ". how are you?");

Modulus (%) = is the number left over after a division
	9 / 5 = has a remainder of 4
	so it would be like 9 % 5
	9 % 3 is 0
	10 % 3 is 1 (3 goes into 10 3 times but leaves 1 left over)
	console.log(50 % 30); would have a console print out of 20

example:
if(5 === 3); {
	console.log("5 is the same as 3");
} else {
		console.log("They're different.")
}

var somevar = 15;
somevar = somevar + 5;
console.log (somevar);  //will print out 20 in console

= assigns
== test equivolence. type doesn't matter'
===  test equivolence. type matters (ie string vs int)

var myName = prompt ("What is your name?");
console.log ("The person set their name to " + myName);
if(myName === "David") {
	document.write("Hey there David");
} else if (myName === "Bob") {
	document.write("Well hello Bob!");
} else{
	document.write("Who be you?");
}


var counter = 1 ;
document.write(counter);
counter = counter + 1;
document.write(counter);
counter = counter + 1;
document.write(counter);
counter = counter + 1;

A FOR loop fixes this

for(var i = 1; i < 10; i++); {
// for(var i = 1; i < 10; i+= 2);  this will add 2 to each iteration
	document.write(i);
	document.write(i + "<br />");
}

// for(start;stop;how we get there){
//			do this each time
// }

for(var i = 100; i > 3; i--) {
// for(var i = 100; i >= 32; i-=5);
	document.write(i + "<br />");
}

// start with one
// skip a line and then keep adding as many as our interator
// up until we're at 8

var someNumber = 8; // var someNumber = 800 % 3
var line = "";
for( var i = 0; i <= someNumber; i++) {
	// print someNumber of #'s
	// then skip a line
	document.write(line);
	line += "#";
	document.write("<br>");
}
document.write(line);

// #
// ##
// ###
// ####
// #####
// ######
// #######
// ########

if (something % somethingelse === -){

} else if {

} else {

}