from django.contrib import admin

from ..models import AceiteTermo


class AceiteTermoInline(admin.TabularInline):
    model = AceiteTermo

    extra = 0
