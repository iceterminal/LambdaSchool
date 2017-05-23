from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/')
def homework4():
	return render_template('homework4.html')

@app.route('/movie', methods=['POST'])
def movie():
	connection = sqlite3.connect('homework4.db')
	cursor = connection.cursor()

	name = request.form['name']
	description = request.form['description']

	try:
		cursor.execute('INSERT INTO movies(name,description) VALUES (?,?)', (name,description))
		connection.commit()
		message = 'Successfully inserted data into movies table of database.'
	except:
		connection.rollback()
		message = 'There was a problem inserting the data.'
	finally:
		connection.close()
		return message

@app.route('/movies')
def movies():
	connection = sqlite3.connect('homework4.db')
	cursor = connection.cursor()
	cursor.execute('SELECT * FROM movies')
	friendslist = cursor.fetchall()
	connection.close()
	return jsonify(friendslist)

@app.route('/search', methods=['GET'])
def search():
	connection = sqlite3.connect('homework4.db')
	cursor = connection.cursor()
	cursor.execute ('SELECT * FROM movies WHERE name = "die hard"')
	data = cursor.fetchall()
	return jsonify(data)

app.run(debug = True)