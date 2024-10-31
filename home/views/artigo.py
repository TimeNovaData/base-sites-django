from django.views.generic import ListView, DetailView

from ..models import Artigo
from home.models import Menu


class ArtigoList(ListView):
    template_name = "home/artigo_list.html"
    model = Artigo

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        menu = Menu.objects.first()
        secao_artigos = Artigo.objects.all().order_by("ordem")

        items_menu = None
        if menu:
            menu_codigo = menu.itemmenu_set.filter(
                item_menu_pai__isnull=True,
            ).order_by("order")
            menu_codigo = f"menus/{menu.codigo}.html"
        else:
            menu_codigo = None

        context.update(
            {
                "items_menu": items_menu,
                "menu_codigo": menu_codigo,
                "secao_artigos": secao_artigos,
            }
        )
        return context


class ArtigoDetail(DetailView):
    template_name = "home/artigo_detail.html"
    model = Artigo

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        menu = Menu.objects.first()
        secao_artigo = Artigo.objects.all().order_by("ordem")

        items_menu = None
        if menu:
            menu_codigo = menu.itemmenu_set.filter(
                item_menu_pai__isnull=True,
            ).order_by("order")
            menu_codigo = f"menus/{menu.codigo}.html"
        else:
            menu_codigo = None

        context.update(
            {
                "items_menu": items_menu,
                "menu_codigo": menu_codigo,
                "secao_artigo": secao_artigo,
            }
        )
        return context
