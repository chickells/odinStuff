import requests
from django.http import JsonResponse

def google_maps_proxy(request):
    url = 'https://maps.googleapis.com/maps/api/place/textsearch/json'
    params = {
        'query': 'restaurants',
        'location': '$90018',
        'radius': '4828.03',
        'key': 'AIzaSyCp4-mmKHxrs1OCIgd4y_qOERMgzPA2wIc'
    }
    response = requests.get(url, params=params)
    data = response.json()
    return JsonResponse(data)
