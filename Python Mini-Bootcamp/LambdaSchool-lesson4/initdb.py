from flask import Flask
import sqlite3

connection = sqlite3.connect('database.db')
print ('We are connected!')

connection.execute('CREATE TABLE friends (name TEXT, age INTEGER)')
print ('Table created')

connection.close()