notes.txt
LambdaSchool Web Mini-Bootcamp 
HTML / CSS / JavaScript
May 26nd, 2017

-Week 2 / Lesson 2-

DOM is Document Object Model aka...basically a page

In a html page, drop the javascript at the bottom of the body. This allows the HTML to run even if there is 
an error in the javascript.

<script src="script.js"></script> 	#or whatever script name you have

Ini the script.js file /

document.getElementById("id-name").innerHTML = "whatever we want";

	this will inspect the html document, look for ID 'whatever' and then change that text to whatever we want
/

var el = document.createElement('div');
el.innerHTML = '<p>Hello World</p>';
document.body.appendChild(el);

var el2 = document.querySelector('div');
or
var el = document.querySelector('.classname');
var newEl = document.createElement('p');

document.querySelector('.classname').innerHTML = 'SSSSSssss'

//Change the background color of the entire document to red
document.body.style.backgroundColor = "red";

//Change the font-style of the entire document to sans-serif
document.body.style.fontFamily = "sans-serif,Impact,Charcoal";

//Change the background color of just the "about me" portion to blue
document.getElementById("head").style.backgroundColor = "blue";

//ADDS text to the end of the id element listed.
document.getElementById("nickname").innerHTML = "Mr. Awesome"

//Creates a new img element and set its src attribute to a picture. Appends this element to page.
var el = document.createElement('img');
el.setAttribute("src", "https://avatars0.githubusercontent.com/u/17530449");
document.body.appendChild(el);

//Iterate through each li and changes the class to "listitem".
//Adds a style tag that sets a rule for "listitem" to make the color red
document.getElementById('nickname').className = 'listItem';
document.getElementById('favorite').className = 'listItem';
document.getElementById('hometown').className = 'listItem';
document.querySelector('listItem').style.backgroundColor ='red';