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
    path("api/", include(home_router.urls)),
    path("", views.home, name="home"),
    path("manutencao/", views.manutencao, name="manutencao"),
    path("coming_soon/", views.coming_soon, name="coming_soon"),
<<<<<<< HEAD
    path('aceitar_termo/', views.aceitar_termo, name='aceitar_termo'),
    path('parceiros_teste/', views.ParceirosView.as_view(), name='parceiros_teste'),
    path('fale-conosco/', views.fale_conosco, name='fale_conosco'),
    path("<str:slug>/", views.home, name="home"),
=======
    path("aceitar_termo/", views.aceitar_termo, name="aceitar_termo"),
    path("fale-conosco/", views.fale_conosco, name="fale_conosco"),
>>>>>>> 6abea6a3cbbc5169e99bf9d93e3503ab4879180c
    path("design_system/", views.design_system, name="design_system"),
    path(
        "design_system/secoes/",
        views.design_system,
        name="design_system_secoes",
    ),
    path("svg_viewer/", views.svg_viewer, name="svg_viewer"),
    path("<str:slug>/", views.home, name="home"),  # colocar sempre no final
]
