from django.db import models
from .termo import Termo


class AceiteTermo(models.Model):
    termo = models.ForeignKey(
        Termo,
        verbose_name="Termo",
        on_delete=models.CASCADE,
    )

    data_criacao = models.DateTimeField(
        verbose_name="Data Criação",
        auto_now=True,
    )

    ip = models.CharField(
        verbose_name="IP",
        max_length=100
    )

    def __str__(self):
        '''Método que retorna a representação do objeto como string.'''
        return self.ip
    
    class Meta:
        '''Sub classe para definir meta atributos da classe principal.'''

        app_label = 'home'
        verbose_name = 'Aceite Termo'
        verbose_name_plural = 'Aceite Termos'
