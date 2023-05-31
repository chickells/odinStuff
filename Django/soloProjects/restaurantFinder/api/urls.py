from django.urls import path

# first iteration
# from .views import get_restaurants

# third iteration debugging
from . import views

# second iteration
# from .views import index

urlpatterns = [
    # 1st and 2nd iterations
    # path('get-restaurants/', get_restaurants, name='get_restaurants'),
    # path('', index),

    # 3rd iteration debugging
    path('', views.index, name='index'),
]
