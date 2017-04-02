// Install NODE on system: apt-get install nodejs node-legacy npm
// Change to test directory: cd /xxx/xxx/xxx
// install npm into test directory: npm install

//Lambda School JavaScript Lesson 2

var food = 'Pizza'; // or var food === 'Steak'
if (food === 'Pizza') {  // the === means equal to
	console.log ('Yummy!');
} else if (food === 'Steak') { 
	console.log ('Super yummy!');
} else {
	console.log ('I would rather have pizza.');
}

var age = 16;
var hasDriversLicense = false;
if (age >= 16 && hasDriversLicense) { // the dual && means both results MUST BE TRUE
//if (age >= 16 || hasDriversLicense) { // the dual || (OR operator) means either result needs to be TRUE
	console.log ('You can drive.');
} else {
	console.log ('You cannot drive');
}

var isDrunk = false;
if (!isDrunk) {  //will invert the result i.e. now the isDrunk var is true
	console.log('You cannot drive');
} else {
	console.log('You can drive.')
}
//============================================================================================================
for (var i = 1; i <= 10; i++) { // sets i variable to 1, if true that i is less than 10, add 1 to i variable after each iteration
	console.log('Hello') // or console.log(i) will print out 1 thru 10
}

var favoriteFoods = ['steak', 'fruit', 'veggies']; // [] means an array
console.log(favoriteFoods); //or console.log(favoriteFoods.length) will count number of items in array
console.log(favoriteFoods[0]); //will print out the first item in array
console.log(favoriteFoods[favoriteFoods.length - 1]); //will always give the last item in the array

for (var i = 0; i < favoriteFoods.length; i++) { //var i is 0, if i is less than favFoods length, add 1 to i each iteration
	if (favoriteFoods[i] === 'fruit') { //if i equals fruit, change it to dessert
		favoriteFoods[i] = 'dessert';
	}
	console.log (favoriteFoods[i]); //print out the item in the position of the array that i is set to for this iteration
}
favoriteFoods.push('Ice Cream'); //this will add Ice Cream to the favoriteFoods array
console.log (favoriteFoods);
favoriteFoods.pop(); // will delete the item at the end of the array
console.log (favoriteFoods);




