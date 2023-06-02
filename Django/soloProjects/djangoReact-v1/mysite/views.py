import requests
from django.http import JsonResponse


def google_maps_proxy(request):
    zip_code = request.GET.get('zip_code')
    geocoding_url = f"https://maps.googleapis.com/maps/api/geocode/json?address={zip_code}&key=AIzaSyCp4-mmKHxrs1OCIgd4y_qOERMgzPA2wIc"
    geocoding_response = requests.get(geocoding_url)
    geocoding_data = geocoding_response.json()
    lat_long = geocoding_data['results'][0]['geometry']['location']
    lat = lat_long['lat']
    lng = lat_long['lng']
    url = 'https://maps.googleapis.com/maps/api/place/textsearch/json'
    params = {
        'query': 'restaurants',
        'location': f"{lat},{lng}",
        'radius': '4828.03',
        'key': 'AIzaSyCp4-mmKHxrs1OCIgd4y_qOERMgzPA2wIc'
    }
    response = requests.get(url, params=params)
    data = response.json()
    return JsonResponse(data)




# APPARENTLY GOOGLE'S API NEEDS LAT/LONG COORDINATES FOR LOCATION
# def google_maps_proxy(request):
#     zip_code = request.GET.get('zip_code') # Get the zip_code parameter from the request -> `../?zip_code=${zipCode}`, where zipCode is from the App.js file
#     url = 'https://maps.googleapis.com/maps/api/place/textsearch/json'
#     params = {
#         'query': 'restaurants',
#         'location': f'{zip_code}', # Use the zip_code variable in the request
#         'radius': '4828.03',
#         'key': 'AIzaSyCp4-mmKHxrs1OCIgd4y_qOERMgzPA2wIc'
#     }
#     response = requests.get(url, params=params)
#     data = response.json()
#     return JsonResponse(data)
