from django.shortcuts import render, redirect
from ..models import Site, ComingSoon


def coming_soon(request):
    pagina = {
        "titulo": "Coming Soon",
        "indexavel": False,
    }

    site = Site.objects.all().first()
    content = ComingSoon.objects.all().first()

    context = {
        "pagina": pagina,
        "site": site,
        "content": content,
    }

    if not site.ativar_coming_soon:
        return redirect("home")

    return render(
        request,
        "home/coming_soon.html",
        context,
    )
