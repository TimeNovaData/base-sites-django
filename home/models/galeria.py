from django.db import models
from django.utils.html import mark_safe
from .pagina import Pagina


class Galeria(models.Model):
    titulo = models.CharField(
        verbose_name="Título",
        max_length=100,
    )

    imagem = models.ImageField(
        verbose_name="Imagem",
        upload_to="galeria",
    )

    descricao = models.TextField(
        verbose_name="Descricação",
        max_length=300,
    )

    pagina = models.ManyToManyField(Pagina)

    @property
    def image_view(self):
        image = ""
        if self.imagem:
            image = mark_safe(f"<img src='{self.imagem.url}' width='60' height='60' />")
        return image

    def __str__(self):
        """Método que retorna a representação do objeto como string."""
        return self.titulo

    class Meta:
        """Sub classe para definir meta atributos da classe principal."""

        app_label = "home"
        verbose_name = "Galeria"
        verbose_name_plural = "Galerias"
