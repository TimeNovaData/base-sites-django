from django.db import models
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
        verbose_name='Order',
    )

    menu = models.ForeignKey(
        Menu,
        verbose_name="Menu",
        on_delete=models.CASCADE,
    )

    item_menu_pai = models.ForeignKey(
        'self',
        verbose_name="Item Menu Pai",
        on_delete=models.CASCADE,
        blank=True,
        null=True
    )

    def __str__(self):
        """Método que retorna a representação do objeto como string."""
        return self.label

    class Meta:
        """Sub classe para definir meta atributos da classe principal."""

        app_label = "home"
        verbose_name = "Item menu"
        verbose_name_plural = "Items menu"
