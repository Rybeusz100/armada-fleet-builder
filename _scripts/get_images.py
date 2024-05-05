import re
import requests

with open('./site/templates/js/cards.js') as f:
    content = f.read()

matches = re.findall(r'image:\s*"([^"]+)"', content)

for index, match in enumerate(matches):
    print(f'Downloading {match}, {index + 1} of {len(matches)}')
    response = requests.get(f'https://armada.ryankingston.com/img/cards/{match}')
    if response.ok:
        with open(f'img-download/{match}', 'wb') as f:
            f.write(response.content)
