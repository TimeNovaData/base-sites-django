from django.db import models
from django.contrib.auth.models import User


class Artigo(models.Model):

    titulo = models.CharField(
        verbose_name="Titulo",
        max_length=255,
        null=True,
    )

    imagem_capa = models.ImageField(
        verbose_name="Imagem",
        upload_to="Imagens/",
        null=True,
    )

    resumo = models.TextField(
        verbose_name="Resumo",
        null=True,
    )

    link_externo = models.URLField(
        verbose_name="Link",
        null=True,
    )

    usuario = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name="Usuário",
    )

    data = models.DateField(
        verbose_name="Data",
        null=True,
    )

    ordem = models.IntegerField(
        verbose_name="Ordem",
        default=0,
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
        related_name="usuario_criacao_artigo",
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
    )

    usuario_atualizacao = models.ForeignKey(
        User,
        verbose_name="Usuário de Atualização",
        related_name="usuario_atualizacao_artigo",
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
