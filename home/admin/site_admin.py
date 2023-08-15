from django.contrib import admin
from ..models import Site
from novadata_utils.admin import NovadataModelAdmin
from django_app_novadata.models import ConteudoCustom

admin.site.unregister(ConteudoCustom)


@admin.register(Site)
class SiteAdmin(NovadataModelAdmin):
    search_fields = [
        "id",
        "titulo_global",
    ]

    class Media:
        js = (
            'home/admin_conteudo_custom.js',  # app static folder
        )
