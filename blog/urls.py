from django.urls import path
from blog import views, viewsets


urlpatterns = [
    path("", views.PostView.as_view(), name="blog"),
    path("<str:slug>", views.PostDetail.as_view())
]
