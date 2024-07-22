from django.db import models


class Termo(models.Model):
    titulo = models.CharField(
        verbose_name="Título",
        max_length=100,
    )

    descricao = models.TextField(
        verbose_name="Descrição",
        max_length=400,
    )

    def __str__(self):
        """Método que retorna a representação do objeto como string."""
        return self.titulo

    class Meta:
        """Sub classe para definir meta atributos da classe principal."""

        app_label = "home"
        verbose_name = "Termo"
        verbose_name_plural = "Termos"
