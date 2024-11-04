from django import forms
from .artigo_form import Artigo


class ArtigoForm(forms.ModelForm):
    class Meta:
        model = Artigo
        fields = [
            "titulo",
            "titulo_artigo",
            "resumo",
            "link_externo",
            "imagem_capa",
            "usuario",
            "data",
            "ordem",
        ]
