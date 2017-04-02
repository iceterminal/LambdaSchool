from flask import Flask
import sqlite3

connection = sqlite3.connect('database.db')
print ('We are connected!')

connection.execute('CREATE TABLE books (name TEXT, author TEXT, year_published INTEGER, pages INTEGER)')
print ('Table created')

connection.close()