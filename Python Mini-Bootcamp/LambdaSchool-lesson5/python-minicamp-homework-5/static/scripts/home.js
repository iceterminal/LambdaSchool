console.log ('Beginning of home.js');

document.getElementById('change_color').addEventListener('click', function() {
	var color = document.getElementById('background_color').value;
	var body = document.getElementById('body');
	body.style.background = color;
	console.log ('body', body);
	console.log('You clicked on the color change button!');
});

document.getElementById("hide_all").addEventListener('click', function() {
	document.getElementById('body').style.display="none";
});

document.getElementById("hide_button").addEventListener('click', function() {
	document.getElementById('hide_button').style.display="none";
});

function ValidateForm() {
	console.log('Validating input form')
	var name = document.getElementById('name_input').value;
	var species = document.getElementById('species_input').value;
	var age = document.getElementById('age_input').value;

	if(!name.length || !species.length || !age.length) {
		alert('All fields must be filled.');
		return false;
	}
	
	if (isNaN(parseInt(age)) || typeof parseInt(age) !== 'number') {
		alert ('The AGE field must be a number.');
		return false;
	}

	console.log('name, species, age');

	return true; 
}