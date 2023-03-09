from django.db import models


class Pagina(models.Model):
    titulo = models.CharField(
        verbose_name='Título',
        max_length=100,
    )

    slug = models.SlugField(
        verbose_name='Slug',
        max_length=100,
        null=True,
        blank=True,
        unique=True
    )

    template = models.CharField(
        verbose_name='Nome do Template',
        max_length=100,
    )

    custom_description = models.TextField(
        verbose_name='Descrição',
        max_length=400,
    )

    js_adicional = models.TextField(
        verbose_name='JS Adicional',
        max_length=400,
        null=True,
        blank=True,
    )

    css_adicional = models.TextField(
        verbose_name='CSS Adicional',
        max_length=400,
        null=True,
        blank=True,
    )

    indexavel = models.BooleanField(
        verbose_name='Indexável?',
        default=True
    )

    def __str__(self):
        '''Método que retorna a representação do objeto como string.'''
        return self.titulo

    class Meta:
        '''Sub classe para definir meta atributos da classe principal.'''

        app_label = 'home'
        verbose_name = 'Pagina'
        verbose_name_plural = 'Paginas'
