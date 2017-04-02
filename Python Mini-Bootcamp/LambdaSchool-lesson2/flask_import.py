from flask import Flask

app = Flask (__name__) # two underscores are called dunder

#requests in flask are called routes
# start up the flask server process
# export FLASK_APP=flask_import.py
# flask run

# to use static files you MUST have a static/ subdir with specified files in it
@app.route('/') # http://site.com/
def index():
#	return 'Hello World!'
	return app.send_static_file ('home.html') # sends file in the static directory

@app.route('/about')  # http://site.com/about
def about():
#	return 'This is my about page!'
	return app.send_static_file ('about.html')

@app.route('/something')  # http://site.com/something
def something():
	return '<h1>This is a big H1 header</h1>'

@app.route('/post/<postnum>')
def post1(postnum):
	return '<h3>This is a post</h3>' + postnum