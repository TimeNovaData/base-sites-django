from django.db import models


class Categoria(models.Model):
    nome = models.CharField(
        verbose_name="Nome",
        max_length=100,
    )

    slug = models.SlugField(
        verbose_name="Slug",
        max_length=100,
        null=True,
        blank=False,
        unique=True,
    )

    descricao = models.TextField(
        verbose_name="Descrição",
        max_length=200,
    )

    def __str__(self):
        """Método que retorna a representação do objeto como string."""
        return self.nome

    class Meta:
        """Sub classe para definir meta atributos da classe principal."""

        app_label = "blog"
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"
