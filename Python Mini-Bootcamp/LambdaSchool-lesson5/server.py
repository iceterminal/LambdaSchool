from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/')
def home():
	return render_template('home.html')

@app.route('/new_book', methods=["POST"])
def new_book():
	connection = sqlite3.connect('database.db')
	cursor = connection.cursor()

	name = request.form['name']
	author = request.form['author']
	year_published = request.form['year_published']
	pages = request.form['pages']

	try:
		cursor.execute('INSERT INTO books(name,author,year_published,pages) VALUES (?,?,?,?)', (name,author,year_published,pages))
		connection.commit()
		message = 'Successfully inserted data into books table of database.'
	except:
		connection.rollback()
		message = 'There was a problem inserting the data.'
	finally:
		connection.close()
		return message

@app.route('/books')
def books():
	connection = sqlite3.connect('database.db')
	cursor = connection.cursor()
	cursor.execute('SELECT * FROM books')
	booklist = cursor.fetchall()
	connection.close()
	return jsonify(booklist)


app.run(debug = True)