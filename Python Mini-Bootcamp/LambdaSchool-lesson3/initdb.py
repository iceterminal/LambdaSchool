from flask import Flask, render_template
import sqlite3

app = Flask (__name__)

connection = sqlite3.connect('database.db')
print ('Opened database successfully')

connection.execute('CREATE TABLE IF NOT EXISTS foods (name TEXT, calories TEXT, cuisine TEXT, is_vegetarian TEXT, is_gluten_free TEXT)')
print ('Table created successfully')

connection.close()


@app.route ('/')
def home():
	return render_template ('home.html')

@app.route('/enternew')
def enternew():
	return render_template('food.html')

