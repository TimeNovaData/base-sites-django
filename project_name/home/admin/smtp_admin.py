from django.contrib import admin
from ..models import SMTP
from novadata_utils.admin import NovadataModelAdmin


@admin.register(SMTP)
class SMTPAdmin(NovadataModelAdmin):
    # list_display = [
    #     'id',
    #     'campos_importantes'
    # ]

    search_fields = [
        "id",
        "nome",
    ]

    # list_filter = [
    #     'campos_fk_e_booleanos
    # ]

    # list_select_related = [
    #     'campos_dos_campos_fk
    # ]

    # autocomplete_fields = [
    #     'campos_fk
    # ]
