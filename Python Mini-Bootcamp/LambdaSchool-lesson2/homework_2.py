from flask import Flask, render_template, jsonify

snapp = Flask (__name__)

@snapp.route ('/')
def index():
#	return ('Hello World')
	return render_template('home.html')

@snapp.route ('/birthday')
def bday():
	return ('24 November 1966')

@snapp.route ('/greeting/<name>')
def greeting(name):
	return ('Hello there ') + name

@snapp.route ('/add/<num1>/<num2>')
def addl(num1, num2):
	ber1 = int(num1)
	ber2 = int(num2)
	tots = ber1 + ber2
	return ('The numbers added together are: ') + str(tots)

@snapp.route ('/multiply/<mult1>/<mult2>')
def multi(mult1, mult2):
	ply1 = int(mult1)
	ply2 = int(mult2)
	tote = ply1 * ply2
	return ('The numbers given multiplied together equal: ') + str(tote)

@snapp.route ('/divide/<div1>/<div2>')
def divi(div1, div2):
	ide1 = int(div1)
	ide2 = int(div2)
	totals=ide1/ide2
	return ('The numbers given divided equal: ') + str(totals)

@snapp.route ('/beers')
def flavors():
	favors = ['Lite', 'Kolsch', 'Stout', 'Pils']
	return jsonify(favors)