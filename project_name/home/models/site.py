from django.db import models


class Site(models.Model):
    titulo_global = models.CharField(
        verbose_name='Título Global',
        max_length=100,
    )

    descricao_global = models.TextField(
        verbose_name='Descrição Global',
        max_length=500,
    )

    js_global = models.TextField(
        verbose_name='JS Global',
        null=True,
        blank=True,
    )

    css_global = models.TextField(
        verbose_name='CSS Global',
        null=True,
        blank=True,
    )

    meta_tag_facebook = models.TextField(
        verbose_name='Meta Tag Facebook',
        null=True,
        blank=True,
    )

    meta_tag_google = models.TextField(
        verbose_name='Meta Tag Google',
        null=True,
        blank=True,
    )

    favicon = models.FileField(
        verbose_name='Favicon',
        upload_to='assets'
    )

    logo = models.FileField(
        verbose_name='Logo',
        upload_to='assets'
    )

    ativar_coming_soon = models.BooleanField(
        verbose_name='Ativar Coming Soon?',
        default=False
    )

    ativar_manutencao = models.BooleanField(
        verbose_name='Ativar Manutenção?',
        default=False
    )

    def __str__(self):
        '''Método que retorna a representação do objeto como string.'''
        return self.titulo_global

    class Meta:
        '''Sub classe para definir meta atributos da classe principal.'''

        app_label = 'home'
        verbose_name = 'Site'
        verbose_name_plural = 'Site'
