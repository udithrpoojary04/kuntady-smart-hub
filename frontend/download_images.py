import urllib.request
import os

os.makedirs('d:/KSH/frontend/public/images', exist_ok=True)

urls = {
    'bus.jpg': 'https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'places.jpg': 'https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg?auto=compress&cs=tinysrgb&w=800',
    'transport.jpg': 'https://images.unsplash.com/photo-1591557009477-8d2a632ed67a?auto=format&fit=crop&q=80&w=800'
}

req_headers = {'User-Agent': 'Mozilla/5.0'}

for filename, url in urls.items():
    print(f"Downloading {filename}...")
    req = urllib.request.Request(url, headers=req_headers)
    with urllib.request.urlopen(req) as response, open(f'd:/KSH/frontend/public/images/{filename}', 'wb') as out_file:
        data = response.read()
        out_file.write(data)

print("Done")
