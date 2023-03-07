from django.db import models
from .pagina import Pagina


class Portifolio(models.Model):

    nome = models.CharField(
        verbose_name='Nome',
        max_length=100,
    )

    cliente = models.CharField(
        verbose_name='Cliente',
        max_length=100
    )

    categoria = models.CharField(
        verbose_name='Categoria',
        max_length=100
    )

    descricao = models.TextField(
        verbose_name='Descrição',
        max_length=400
    )

    link = models.URLField(
        verbose_name='Link',
        max_length=200
    )

    imagem_destacada = models.ImageField(
        verbose_name='Imagem Destacada',
        upload_to='uploads/%Y/%m'
    )

    pagina = models.ManyToManyField(Pagina)

    def __str__(self):
        '''Método que retorna a representação do objeto como string.'''
        return self.nome

    class Meta:
        '''Sub classe para definir meta atributos da classe principal.'''
        app_label = 'home'
        verbose_name = 'Portifolio'
        verbose_name_plural = 'Portifolios'

