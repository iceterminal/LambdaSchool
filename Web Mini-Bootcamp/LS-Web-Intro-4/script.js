//Change the background color of the entire document to red
document.body.style.backgroundColor = "red";

//Change the font-style of the entire document to sans-serif
document.body.style.fontFamily = "sans-serif,Impact,Charcoal";

//Change the background color of just the "about me" portion to blue
document.getElementById("head").style.backgroundColor = "blue";

//ADDS text to the end of the id element listed.
document.getElementById("nickname").innerHTML = "Mr. Awesome"
document.getElementById("favorites").innerHTML = "Miami Dolphins"
document.getElementById("hometown").innerHTML = "Indiana (shut up..I know)"

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