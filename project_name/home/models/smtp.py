from django.db import models


class SMTP(models.Model):
    nome = models.CharField(
        verbose_name='Nome',
        max_length=100,
    )

    use_tls = models.BooleanField(
        verbose_name='Usar TLS?',
        default=True
    )

    host = models.CharField(
        verbose_name='Host',
        max_length=100
    )

    port = models.IntegerField(
        verbose_name='PORT',
    )

    host_user = models.CharField(
        verbose_name='Host User',
        max_length=100
    )

    host_password = models.CharField(
        verbose_name='Host Password',
        max_length=100
    )

    default_from_email = models.CharField(
        verbose_name='Default From E-mail',
        max_length=100
    )

    def __str__(self):
        '''Método que retorna a representação do objeto como string.'''
        return self.nome

    class Meta:
        '''Sub classe para definir meta atributos da classe principal.'''

        app_label = 'home'
        verbose_name = 'SMTP'
        verbose_name_plural = 'SMTPs'
