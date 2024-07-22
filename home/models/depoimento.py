from django.db import models
from .pagina import Pagina


class Depoimento(models.Model):
    nome = models.CharField(
        verbose_name="Nome",
        max_length=100,
    )

    cliente = models.CharField(
        verbose_name="Cliente",
        max_length=100,
    )

    cargo = models.CharField(
        verbose_name="Cargo",
        max_length=100,
    )

    depoimento = models.TextField(verbose_name="Depoimento", max_length=600)

    foto = models.ImageField(verbose_name="foto", upload_to="depoimento")

    pagina = models.ManyToManyField(Pagina)

    def __str__(self):
        """Método que retorna a representação do objeto como string."""
        return self.nome

    class Meta:
        """Sub classe para definir meta atributos da classe principal."""

        app_label = "home"
        verbose_name = "Depoimento"
        verbose_name_plural = "Depoimentos"
