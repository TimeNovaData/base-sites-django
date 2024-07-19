from django.db import models
from django.contrib.auth.models import User


class Pagina(models.Model):
    titulo = models.CharField(
        verbose_name="Título",
        max_length=100,
    )

    slug = models.SlugField(
        verbose_name="Slug",
        max_length=100,
        null=True,
        blank=True,
        unique=True,
    )

    arquivo_banner = models.FileField(
        verbose_name="Arquivo do banner",
        upload_to="pagina",
        null=True,
        blank=True,
    )

    thumbail_banner = models.FileField(
        verbose_name="Thumbnail do banner",
        upload_to="pagina",
        help_text="Só será usado quando o banner for um vídeo.",
        null=True,
        blank=True,
    )

    template = models.CharField(
        verbose_name="Nome do Template",
        max_length=100,
    )

    custom_description = models.TextField(
        verbose_name="Descrição",
        max_length=400,
    )

    js_adicional = models.TextField(
        verbose_name="JS Adicional",
        max_length=400,
        null=True,
        blank=True,
    )

    css_adicional = models.TextField(
        verbose_name="CSS Adicional",
        max_length=400,
        null=True,
        blank=True,
    )

    indexavel = models.BooleanField(
        verbose_name="Indexável?",
        default=True,
    )

    data_criacao = models.DateTimeField(
        verbose_name="Data de criação",
        auto_now_add=True,
        null=True,
    )

    data_atualizacao = models.DateTimeField(
        verbose_name="Data de atualização",
        auto_now=True,
        null=True,
    )

    usuario_criacao = models.ForeignKey(
        User,
        verbose_name="Usuário de Criação",
        related_name="usuario_criacao_pagina",
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
    )

    usuario_atualizacao = models.ForeignKey(
        User,
        verbose_name="Usuário de Atualização",
        related_name="usuario_atualizacao_pagina",
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
    )

    def save(self, *args, **kwargs):
        from crum import get_current_user

        user = get_current_user()
        if user and not user.pk:
            user = None
        if not self.pk:
            self.usuario_criacao = user
        self.usuario_atualizacao = user

        super().save(*args, **kwargs)

    def __str__(self):
        """Método que retorna a representação do objeto como string."""
        return self.titulo

    class Meta:
        """Sub classe para definir meta atributos da classe principal."""

        app_label = "home"
        verbose_name = "Pagina"
        verbose_name_plural = "Paginas"
