from django.db import models
from .pagina import Pagina


class Parceiro(models.Model):
    nome = models.CharField(
        verbose_name="Nome",
        max_length=100,
    )

    brand = models.FileField(
        verbose_name="Brand",
        upload_to="brand",
    )

    descricao = models.TextField(
        verbose_name="Descricao",
        max_length=300,
        null=True,
        blank=True,
    )

    pagina = models.ManyToManyField(Pagina)

    def __str__(self):
        """Método que retorna a representação do objeto como string."""
        return self.nome

    class Meta:
        """Sub classe para definir meta atributos da classe principal."""

        app_label = "home"
        verbose_name = "Parceiro"
        verbose_name_plural = "Parceiros"
