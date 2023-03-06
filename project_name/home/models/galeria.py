from django.db import models


class Galeria(models.Model):
    titulo = models.CharField(
        verbose_name='Título',
        max_length=100,
    )

    imagem = models.ImageField(
        verbose_name='Image',
        upload_to='%Y/%m'
    ) 

    descricao = models.TextField(
        verbose_name='Descricação',
        max_length=300
    )

    def __str__(self):
        '''Método que retorna a representação do objeto como string.'''
        return self.titulo

    class Meta:
        '''Sub classe para definir meta atributos da classe principal.'''

        app_label = 'home'
        verbose_name = 'Galeria'
        verbose_name_plural = 'Galerias'
