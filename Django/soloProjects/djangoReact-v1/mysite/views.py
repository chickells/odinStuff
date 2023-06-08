import requests
from django.http import JsonResponse


# def google_maps_proxy(request):
#     zip_code = request.GET.get('zip_code')
#     geocoding_url = f"https://maps.googleapis.com/maps/api/geocode/json?address={zip_code}&key=AIzaSyCp4-mmKHxrs1OCIgd4y_qOERMgzPA2wIc"
#     geocoding_response = requests.get(geocoding_url)
#     geocoding_data = geocoding_response.json()
    
#     # Check if there are any results
#     if geocoding_data['results']:
#         lat_long = geocoding_data['results'][0]['geometry']['location']
#         lat = lat_long['lat']
#         lng = lat_long['lng']
#         print(lat)
#         print(lng)
#         url = 'https://maps.googleapis.com/maps/api/place/textsearch/json'
#         params = {
#             'query': 'restaurants',
#             'location': f"{lat},{lng}",
#             'radius': '4828.03',
#             'key': 'AIzaSyCp4-mmKHxrs1OCIgd4y_qOERMgzPA2wIc',
#         }
#         response = requests.get(url, params=params)
#         data = response.json()
#         # EVERYTHING UP HERE IS WORKING AS EXPECTED, TESTED WITH PRINT()'S

#         # Get details for each restaurant
#         results = []
#         if data['results']:
#             for result in data['results']:
#                 place_id = result['place_id']
#                 details_url = 'https://maps.googleapis.com/maps/api/place/details/json'
#                 details_params = {
#                     'place_id': place_id,
#                     'fields': 'name,website',
#                     'key': 'AIzaSyCp4-mmKHxrs1OCIgd4y_qOERMgzPA2wIc'
#                 }
#                 details_response = requests.get(details_url, params=details_params)
#                 details_data = details_response.json()
#                 name = details_data['result']['name']
#                 # print(name) # THIS WORKS AS EXPECTED
#                 website = details_data['result'].get('website', '')
#                 # print(website)
#                 results.append({'name': name, 'website': website})
#         print(results) # THIS WORKS

#         return JsonResponse({results})  # THIS IS WHERE THE ISSUE LIES I THINK, HAVE TO FORMAT DATA PROPERLY FOR RESPONSE TO REACT APP.JS
#     else:
#         return JsonResponse({"error": "No results found for the provided zip code."})




# GOING TO TEST OUT GENIE'S METHOD TO EXTRACT THE WEBSITE FROM GOOGLE PLACES DETAILS API
# BELOW IS THE OG FUNCTIONING STUFF
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
        'key': 'AIzaSyCp4-mmKHxrs1OCIgd4y_qOERMgzPA2wIc',
    }
    response = requests.get(url, params=params)
    data = response.json()
    return JsonResponse(data)