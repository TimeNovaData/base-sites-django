from django.urls import include, path
from home import views, viewsets
from rest_framework import routers

home_router = routers.DefaultRouter()
home_router.register(
    "user",
    viewsets.UserViewSet,
    basename="user",
)

home_router.register(
    "profile",
    viewsets.ProfileViewSet,
    basename="profile",
)

urlpatterns = [
    path("home/api/", include(home_router.urls)),
    path("", views.home, name="home"), 
    path("manutencao/", views.manutencao, name="manutencao"),
    path("coming_soon/", views.coming_soon, name="coming_soon"),
    path('aceitar_termo/', views.aceitar_termo, name='aceitar_termo'),
    path("<str:slug>/", views.home, name="home"),
    path("design_system/", views.design_system, name="design_system"),
    path("svg_viewer/", views.svg_viewer, name="svg_viewer"),
]
