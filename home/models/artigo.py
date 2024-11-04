from django.db import models
from django.contrib.auth.models import User


class Artigo(models.Model):
    titulo = models.CharField(
        verbose_name="Titulo Principal",
        max_length=255,
    )

    titulo_artigo = models.CharField(
        verbose_name="Titulo Artigo",
        max_length=255,
    )

    resumo = models.TextField(
        verbose_name="Resumo",
    )

    link_externo = models.URLField(
        verbose_name="Link Externo",
        blank=True,
    )

    imagem_capa = models.ImageField(
        upload_to="imagens/",
    )

    usuario = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )

    data = models.DateField(
        verbose_name="Data",
    )

    data_criacao = models.DateTimeField(
        verbose_name="Data de Criação",
        null=True,
        auto_now_add=True,
    )

    data_atualizacao = models.DateTimeField(
        verbose_name="Data de Atualização",
        null=True,
        auto_now=True,
    )

    usuario_criacao = models.ForeignKey(
        User,
        verbose_name="Usuário de Criação",
        related_name="usuario_criacao_titulo",
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
    )

    usuario_atualizacao = models.ForeignKey(
        User,
        verbose_name="Usuário de Atualização",
        related_name="usuario_atualizacao_titulo",
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
        return self.titulo

    class Meta:
        app_label = "home"
        verbose_name = "Seção Artigo"
        verbose_name_plural = "Seções Artigos"
