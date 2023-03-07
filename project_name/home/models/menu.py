from django.db import models
from .pagina import Pagina


class Menu(models.Model):
    nome = models.CharField(
        verbose_name="Nome",
        max_length=100,
    )

    codigo = models.CharField(
        verbose_name="Codígo",
        max_length=100,
    )

    pagina = models.ManyToManyField(Pagina)

    def __str__(self):
        """Método que retorna a representação do objeto como string."""
        return self.nome

    class Meta:
        """Sub classe para definir meta atributos da classe principal."""

        app_label = "home"
        verbose_name = "Menu"
        verbose_name_plural = "Menus"
