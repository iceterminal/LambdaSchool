LambdaSchool Mini Bootcamp (second edition)
HTML / CSS / JavaScript
June 9th, 2017

-Week 4 / Lesson 1-

Arrays, Objects, Methods

www.repl.it website to let you test code and see results.

OBJECTS are made up of 2 diff types of properties.
raw values, or functions.

When an object has a property that is a 'function' it is called a METHOD 
	A named collection of data.
key: value
key: 'value'

person = {
	name: "Ryan",
	city: 'Dallas',
	job: 'developer',
	computer: true,
	favoriteColor: "blue",
	age: 30,
	size: 32
};

To call the value of this object:
	person.age //would print out 30.
	person.city //ould print out a string of "Dallas"

let person = {
	firstName: "David",
	lastName: "Bach",
	age: 50
	shoeSize: 8.5,
	fullName: function() {return this.firstName + ' ' + this.lastName}
};
person.fullName();  //will print out the full name of the person.
person["firstName"]; //will print out the first name. Can also put other things inside brackets like variables, etc.

You can add to the object on the fly.
	person['favoriteColor'] = 'brown'; //now when calling 'person' this key:value is listed


var firstName = "David"
var lastName = "Bach"
var howOld = 
person = {
	first: '',
	last: '',
	age: ,
	city: '',
	size: ''
}
person.firstName = first
person.lastName = last
person.age = howOld
person

To check a value:
	'leastFavSong' in person // will display False as this key does not exist in oject
	'age' in person //will display True

To delete/remove a key
	delete person.age //will delete the key and value
	person //will print out the object so you can see that the key is removed.

ARRAYS:
Just a list of things such as numbers, strings, objects...data
Very flexible. Used typically as a collection that you can iterate over or store values

[1, 2, 3, 4, 5, 6, 'string', 7, 8]
Can assign as a variable 
	numbers = [1, 2, 3, 4, 5]
Does not use . syntax. So use the [] to access the elements-data inside the array.
Array indexes start at 0...not 1.
	varname[element position]
	varname [6] //would give you 'string'
36:00 states he cannot use . syntax 
38:42 shows code of him using . syntax

numbers = [1, 2, 3, 4, 5]
numbers.map ( function(item) {
	return(item * 10);
});

Look up the .map Method

teams = ['Dolphins', 'Chiefs', 'Texans', 'Cowboys', 'Colts', 'Seahawks', 'Bears', ''];
teamsLength = teams.length;
var text = ''
for (i = 0; i < teamsLength; i++) {
	text += teams[i] + ' ';
}
teams.push('Bengals'); //will add this to the end of the array
teams
teams[3] = 'Raiders'; // will add the new element to the position states
teams
teams[teams.length] = 'Packers'; // will add to the end of the array
teams



function sumUserPostLikes(user) {
  //user has an array property called 'posts', posts is an array of post objects
  //each post object has an integer property called 'likes', sum together the likes from all the post objects
  var sum = 0;
  for (var i = 0; i < user.posts.length; i++) {
    sum += user.posts[i].likes;
  } return sum;
}

function addFriend(user, newFriend) {
  //user has a property called friends that is an array, add newFriend to the end of the friends array 
  user['friends'].push(newFriend);
  return user;