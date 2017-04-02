from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/')
def home():
	return render_template('home.html')

@app.route('/new_friend', methods=['POST'])
def new_friend():
	connection = sqlite3.connect('database.db')
	cursor = connection.cursor()

	name = request.form['name']
	age = request.form['age']

	try:
		cursor.execute('INSERT INTO friends(name,age) VALUES (?,?)', (name,age))
		connection.commit()
		message = 'Successfully inserted data into friends table of database.'
	except:
		connection.rollback()
		message = 'There was a problem inserting the data.'
	finally:
		connection.close()
		return message

@app.route('/friends')
def friends():
	connection = sqlite3.connect('database.db')
	cursor = connection.cursor()
	cursor.execute('SELECT * FROM friends')
	friendslist = cursor.fetchall()
	connection.close()
	return jsonify(friendslist)

app.run(debug = True)
