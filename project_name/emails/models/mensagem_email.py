
from crum import get_current_user
from decouple import config
from django.core.mail import EmailMessage
from django.db import models
from django.template import Context, Template
from django.template.loader import render_to_string

from .template_email import TemplateEmail


class MensagemEmail(models.Model):
    '''
    Classe que serve de fato para enviar os emails
    '''
    template_email = models.ForeignKey(
        TemplateEmail,
        verbose_name='Template do email',
        on_delete=models.CASCADE
    )

    enviado = models.BooleanField(
        verbose_name='Enviado',
        default=False
    )

    data_criacao = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Data de criação'
    )

    created_by = models.ForeignKey(
		'auth.User', 
		related_name='%(class)s_requests_created',
		blank=True, null=True,
		default=None,
		on_delete=models.SET_NULL
	)

    def save(self, *args, **kwargs):
        user = get_current_user()
        if user and not user.pk:
            user = None
        if not self.pk:
            self.created_by = user
        super(MensagemEmail, self).save(*args, **kwargs)

    def enviar(self, objeto=None, destinatarios_extra=[]):
        if not self.enviado:
            ENVIAR_EMAIL = config('ENVIAR_EMAIL', default = True, cast = bool)
            template_renderizado = Template(self.template_email.corpo_email)
            assunto_renderizado = Template(self.template_email.assunto)
            context = Context({
                'objeto':  objeto
            })

            html_text = template_renderizado.render(context)
            assunto_text = assunto_renderizado.render(context)
            nome = objeto.__str__ if objeto.__str__ else ''

            if nome and type(nome) == str:
                nome = nome.replace(' ', '-')
            objeto.id if objeto and objeto.id else ''

            html_email = render_to_string(
                'emails/base.html',
                {
                    'titulo_email': self.template_email.titulo_email,
                    'legenda_email': self.template_email.legenda_email,
                    'titulo_alteracao_email': self.template_email.titulo_alteracao_email,
                    'html_text': html_text,
                    'nome': nome,
                    'id': id
                }
            )
            
            destinatarios = [destinatario.email for destinatario in self.template_email.destinatarios.all()]
            destinatarios += destinatarios_extra
            
            try:
                if self.template_email.enviar_usuario_criacao:
                    destinatarios.append(objeto.usuario_criacao.email)
            except:
                pass
            
            email = EmailMessage(
                assunto_text, html_email,
                '{} <{}>'.format(config('EMAIL_NAME'), config('EMAIL_HOST_USER')), destinatarios)
            email.content_subtype = 'html'

            if ENVIAR_EMAIL:
                email.send()
                self.enviado = True
                self.save()

    def __str__(self):
        return self.template_email.assunto
        
    class Meta:
        app_label = 'emails'
        verbose_name='Mensagem do email'
        verbose_name_plural = 'Mensagens dos emails'
