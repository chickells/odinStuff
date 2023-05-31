from django.shortcuts import render
import requests
from django.http import JsonResponse

# Create your views here.
def index(request):
  return render(request, 'index.html')






















#  PREVIOUS ITERATION OF GENIE GPT'S WORK, CURRENT ITERATION
#  HAS THE FUNCTIONALITY DONE IN THE APP.JS REACT PAGE
# def get_restaurants(request):
#     # Get the zip code from the request
#     zip_code = request.GET.get('zip_code')

#     # Make a request to the Google Places API
#     url = f'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+{zip_code}&radius=4828&key=AIzaSyCp4-mmKHxrs1OCIgd4y_qOERMgzPA2wIc'
#     response = requests.get(url)

#     # Extract the relevant data from the API response
#     results = response.json().get('results')
#     restaurants = []
#     for result in results:
#         restaurant = {
#             'name': result.get('name'),
#             'address': result.get('formatted_address'),
#             'rating': result.get('rating'),
#             'phone_number': result.get('formatted_phone_number')
#         }
#         restaurants.append(restaurant)

#     # Return the list of restaurants as a JSON response
#     return JsonResponse(restaurants, safe=False)
