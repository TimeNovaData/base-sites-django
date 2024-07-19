from django.db import models
from django.contrib.auth.models import User
from .pagina import Pagina


class Servico(models.Model):
    titulo = models.CharField(
        verbose_name="Titulo",
        max_length=100,
    )

    icone = models.CharField(
        verbose_name="Icone",
        max_length=100,
    )

    descricao = models.TextField(
        verbose_name="Descrição",
        max_length=100,
    )

    imagem = models.ImageField(
        verbose_name="Imagem",
        upload_to="servico",
    )

    pagina = models.ManyToManyField(Pagina)

    data_criacao = models.DateTimeField(
        verbose_name="Data de criação",
        auto_now_add=True,
    )

    data_atualizacao = models.DateTimeField(
        verbose_name="Data de atualização",
        auto_now=True,
    )

    usuario_criacao = models.ForeignKey(
        User,
        verbose_name="Usuário de Criação",
        related_name="usuario_criacao_servico",
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
    )

    usuario_atualizacao = models.ForeignKey(
        User,
        verbose_name="Usuário de Atualização",
        related_name="usuario_atualizacao_servico",
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
        verbose_name = "Serviço"
        verbose_name_plural = "Serviços"
