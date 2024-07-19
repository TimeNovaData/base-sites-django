from django.db import models
from django.contrib.auth.models import User
from .menu import Menu


class ItemMenu(models.Model):
    label = models.CharField(
        verbose_name="Label",
        max_length=100,
    )

    link = models.CharField(
        verbose_name="Link",
        max_length=100,
    )

    order = models.IntegerField(
        verbose_name="Ordem",
        default=0,
    )

    menu = models.ForeignKey(
        Menu,
        verbose_name="Menu",
        on_delete=models.CASCADE,
    )

    item_menu_pai = models.ForeignKey(
        "self",
        verbose_name="Item Menu Pai",
        on_delete=models.CASCADE,
        blank=True,
        null=True,
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
        related_name="usuario_criacao_item_menu",
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
    )

    usuario_atualizacao = models.ForeignKey(
        User,
        verbose_name="Usuário de Atualização",
        related_name="usuario_atualizacao_item_menu",
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
        return self.label

    class Meta:
        """Sub classe para definir meta atributos da classe principal."""

        app_label = "home"
        verbose_name = "Item menu"
        verbose_name_plural = "Items menu"
