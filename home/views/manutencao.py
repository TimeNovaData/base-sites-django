from django.shortcuts import render, redirect
from ..models import Site, Manutencao


def manutencao(request):
    pagina = {
        "titulo": "Manutenção",
        "indexavel": False,
    }

    site = Site.objects.all().first()
    content = Manutencao.objects.all().first()

    context = {
        "pagina": pagina,
        "site": site,
        "content": content,
    }

    if not site.ativar_manutencao:
        return redirect("home")

    return render(
        request,
        "home/manutencao.html",
        context,
    )
