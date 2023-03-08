from django.contrib import admin

from ..models import MensagemEmail


@admin.register(MensagemEmail)
class MensagemEmailAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'template_email',
        'enviado',
        'created_by'
    ]

    search_fields = [
        'id',
        'template_email__assunto',
        'created_by__first_name',
        'created_by__last_name'
    ]

    list_filter = [
        'template_email',
        'enviado',
        'data_criacao',
        'created_by'
    ]

    autocomplete_fields = [
        'template_email',
        'created_by'
    ]

    readonly_fields = [
        'template_email',
        'enviado',
        'created_by'
    ]
    