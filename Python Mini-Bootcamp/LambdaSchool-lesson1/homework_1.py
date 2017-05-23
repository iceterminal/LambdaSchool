import requests
get_url = "https://google.com"
post_url = "https://lambdaschool.com/contact-form"

# This is a dictionary
post_lambda = {
	"name" : 'First',
	"lastname" : 'Last',
	"email" : 'address@email.com',
	"message" : 'Um yeah, about the free beer we were promised',
}

req = requests.get(get_url)
post_up = requests.post(post_url, json=post_lambda)

print (req.text)
print(req.status_code)
print (post_up.text)
print (post_up.status_code)
