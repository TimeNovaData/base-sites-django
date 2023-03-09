from django.db import models
from colorfield.fields import ColorField
from emails.models import TemplateEmail


class Manutencao(models.Model):

    imagem_fundo = models.ImageField(
        verbose_name='Imagem Fundo',
        upload_to='assets',
        null=True,
        blank=True,
    )

    video_fundo = models.FileField(
        verbose_name='Video Fundo',
        upload_to='assets',
        null=True,
        blank=True,
    )

    logo = models.FileField(
        verbose_name='Logo',
        upload_to='assets',
        null=True,
        blank=True,
    )

    background_cor1 = ColorField(
        verbose_name='Background Cor 1',
        default='#FF0000',
    )

    background_cor2 = ColorField(
        verbose_name='Background Cor 2',
        default='#FF0000',
    )
    
    link_telefone = models.CharField(
        verbose_name='Link Telefone',
        max_length=100,
        null=True,
        blank=True,
    )

    link_whatsapp = models.CharField(
        verbose_name='Link Whatsapp',
        max_length=100,
        null=True,
        blank=True,
    )

    template_email = models.ForeignKey(
        TemplateEmail,
        verbose_name="Template Email",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    def __str__(self):
        '''Método que retorna a representação do objeto como string.'''
        return 'Config. de Manutenção'

    class Meta:
        '''Sub classe para definir meta atributos da classe principal.'''

        app_label = 'home'
        verbose_name = 'Manutenção'
        verbose_name_plural = 'Manutenção'
