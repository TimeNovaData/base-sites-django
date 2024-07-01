from django.db import models
from django.contrib.auth.models import User

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

    data_criacao = models.DateTimeField(
        verbose_name="Data de criação",
        null=True,
        auto_now_add=True,
    )

    data_atualizacao = models.DateTimeField(
        verbose_name="Data de atualização",
        null=True,
        auto_now=True,
    )

    usuario_criacao = models.ForeignKey(
        User,
        verbose_name="Usuário de Criação",
        related_name="usuario_criacao_rede_social",
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
    )

    usuario_atualizacao = models.ForeignKey(
        User,
        verbose_name="Usuário de Atualização",
        related_name="usuario_atualizacao_rede_social",
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
        return self.nome

    class Meta:
        app_label = "home"
        verbose_name = "Rede social"
        verbose_name_plural = "Redes sociais"
