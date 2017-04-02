console.log('Hello World');

document.getElementById('changeColor').addEventListener('click', function() {
	var color = document.getElementById('backgroundColor').value;
	var body = document.getElementById('body');
	body.style.background = color;
	console.log ('body', body);
	console.log('You clicked on the button!');
});

function ValidateForm() {
console.log('validating form')
	var name = document.getElementById('name_input').value;
	var author = document.getElementById('author_input').value;
	var year_published = document.getElementById('year_published').value;
	var pages = document.getElementById('pages_input').value;

	if(!name.length || !author.length || !year_published.length || !pages.length) {
		alert('Field must not be blank');
		return false;
	}
	
	if (isNan(parseInt(year_published)) || typeof parseInt(year_published) !== 'number') {
		alert ('Field must be a number')
		return false;
	}

	console.log('name, author, year_published, pages');

	return true; 
}