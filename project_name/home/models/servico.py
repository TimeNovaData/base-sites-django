from django.db import models
from .pagina import Pagina


class Servico(models.Model):
    titulo = models.CharField(
        verbose_name='Titulo',
        max_length=100,
    )

    icone = models.CharField(
        verbose_name='Icone',
        max_length=100,
    )

    descricao = models.TextField(
        verbose_name='Descrição',
        max_length=100,
    )
    
    foto = models.ImageField(
        verbose_name='Foto',
        upload_to='uploads/%Y/%m'
    )

    pagina = models.ManyToManyField(Pagina)

    def __str__(self):
        '''Método que retorna a representação do objeto como string.'''
        return self.titulo

    class Meta:
        '''Sub classe para definir meta atributos da classe principal.'''

        app_label = 'home'
        verbose_name = 'Serviço'
        verbose_name_plural = 'Serviços'
