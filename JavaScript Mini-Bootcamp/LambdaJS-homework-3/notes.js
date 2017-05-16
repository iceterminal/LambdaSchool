// Install NODE on system: apt-get install nodejs node-legacy npm
// Change to test directory: cd /xxx/xxx/xxx
// install npm into test directory: npm install

var x =5; //normal variable
var likesIceCream = true; //normal variable with boolean value
var arr = ['hi', 'there']; //variable that is an array, holds many values, can be numerical or null or boolean or string
	// to access 'hi' we'd use arr[0]

var user = {  //with an object you have named keys
	username: 'David',  //to access the value you use the word on the left of the colon. That word is considered the 'method'
	password: 'password',  // of the object i.e. console.log(user.username);  = David
	age: 50,  //this is user.age
	likesIceCream: true,
	sayHi: function() { //can even add a function into an object. This is a anon func as it has no name (sayHi is the method)
		console.log('Hello World');
		return ('Hello World');
	}
};

user.isPremium = true; //this will add the .isPremium to the user object if it does not exist with the key listed
						// known as dot notation

user.age++; //this will increase user.age by 1
console.log(user.username);
console.log(user); //this will print out the entire object of the var user
user.sayHi(); //this invokes the var user with the function of sayHi

function addProperty(object, newProperty, newValue) {
	object[newProperty] = newValue; //will set the newProperty object to the newvalue which is false
									// known as bracket notation
	return object;
}
addProperty(user, 'livesInUS', false); //will get function and add to the 'user' var. user=object, liveinus=method false=value

delete user.likesIceCream; //will delete the property from the object

for (var key in user) { //goes key by key in the user object
	console.log('>>>key', key);
	console.log('>>>value', user[key]) //bracet notation. allows to dynamically access the property on the object as we iterate over it
}

var coordinates = {
	100:'100',
	200:'350'
};
coordinates.[100];

var squares = {};
squares[2] = 4; //keys get turned into strings...2 becomes a string, not an int
squares[5] = 5;