from django.urls import path
from builder import views


urlpatterns = [
    path('', views.index),
]
