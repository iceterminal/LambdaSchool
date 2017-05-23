from flask import Flask, jsonify, render_template, request
import sqlite3

app = Flask (__name__)

@app.route('/')
def home():
	return render_template('home.html')

@app.route('/new-post', methods=['POST'])
def new_post():
	connection = sqlite3.connect ('database.db')
	cursor = connection.cursor()

	author = request.form['author']
	title = request.form['title']
	body = request.form['body']
	likes = 0
	id = request.form['id']

	try:
		cursor.execute('INSERT INTO posts(author, title, body, likes, id) VALUES (?, ?, ?, ?, ?)', (author, title, body, likes, id))
		connection.commit()
		message = 'Successfully added post'
	except Exception as err:
		print (err)
		connection.rollback()
		message = 'An error occured'
	finally:
		connection.close()
		return message

@app.route('/posts')
def get_posts():
	connection = sqlite3.connect('database.db')
	cursor = connection.cursor()
	cursor.execute('SELECT * FROM posts')
	posts_list = cursor.fetchall()
	connection.close()
	return jsonify(posts_list)

@app.route('/like/<post_id>')
def like_post(post_id):
	connection = sqlite3.connect('database.db')
	cursor = connection.cursor()
	cursor.execute('UPDATE posts SET likes = likes + 1 WHERE id=?', (post_id))
	connection.commit()
	connection.close()
	return post_id + ' successfully updated'

app.run(debug = True)