from flask import Flask
import sqlite3

connection = sqlite3.connect('homework4.db')
print ('We are connected!')

connection.execute('CREATE TABLE movies (name TEXT, description TEXT)')
print ('Table created')

connection.close()