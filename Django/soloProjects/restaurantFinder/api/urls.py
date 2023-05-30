from django.urls import path
from .views import get_restaurants

urlpatterns = [
    path('get-restaurants/', get_restaurants, name='get_restaurants'),
]
