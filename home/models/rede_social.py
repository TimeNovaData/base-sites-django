from django.db import models
from .pagina import Pagina


class RedeSocial(models.Model):
    nome = models.CharField(
        verbose_name="Nome",
        max_length=30
    )

    icone_svg = models.FileField(
        verbose_name="Ícone SVG da rede social"
    )

    link = models.URLField(
        verbose_name="Link para o perfil na rede social"
    )

    ordem = models.IntegerField(
        verbose_name="Ordem",
        default=0
    )

    paginas = models.ManyToManyField(
        Pagina,
        verbose_name="Páginas",
    )

    def __str__(self):
        return self.nome

    class Meta:
        app_label = "home"
        verbose_name = "Rede social"
        verbose_name_plural = "Redes sociais"
