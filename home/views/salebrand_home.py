from django.shortcuts import render, redirect, get_object_or_404
from ..models import Pagina, Site


def salebrand_home(request, slug=None):
    # pagina solicitada pela url
    pagina = get_object_or_404(Pagina, slug=slug)

    # config global
    site = Site.objects.all().first()

    template_name = pagina.template

    menu = pagina.menu_set.first()
    if menu:
        items_menu = menu.itemmenu_set.filter(
            item_menu_pai__isnull=True,
        ).order_by("order")
        menu_codigo = f"menus/{menu.codigo}.html"
    else:
        items_menu = None
        menu_codigo = None
    # menu = pagina.menu_set.menu.codigo

    context = {
        "pagina": pagina,
        "site": site,
        "items_menu": items_menu,
        "menu_codigo": menu_codigo,
    }

    em_manutencao = site.ativar_manutencao
    em_coming_soon = site.ativar_coming_soon

    if em_manutencao and not request.user.is_authenticated:
        return redirect("manutencao")

    if em_coming_soon and not request.user.is_authenticated:
        return redirect("coming_soon")

    return render(
        request,
        template_name,
        context,
    )


def split_query_in_x_parts(query, parts):
    """Divide uma query em x partes."""
    media = query.count() / parts

    minor = math.floor(media)
    major = math.ceil(media)
    lines = {}
    for i in range(0, parts):
        new_major = i * major
        amount = new_major + minor
        lines[i + 1] = query[new_major:amount]

    return lines
