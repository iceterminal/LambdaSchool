#Request In Python
#Use the REQUEST package/library/module.

import requests

r = requests.get("http://google.com")

print(r.text)