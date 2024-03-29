# Generated by Django 3.2.12 on 2023-03-28 11:09

from django.db import migrations, models
import django_quill.fields


class Migration(migrations.Migration):

    dependencies = [
        ('emails', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='mensagememail',
            name='assunto',
            field=models.CharField(max_length=200, null=True, verbose_name='Assunto'),
        ),
        migrations.AddField(
            model_name='mensagememail',
            name='codigo',
            field=models.CharField(max_length=50, null=True, unique=True, verbose_name='Código'),
        ),
        migrations.AddField(
            model_name='mensagememail',
            name='corpo_email',
            field=django_quill.fields.QuillField(null=True, verbose_name='Corpo do email'),
        ),
        migrations.AddField(
            model_name='mensagememail',
            name='destinatarios',
            field=models.ManyToManyField(blank=True, to='emails.Destinatario', verbose_name='Destinatários'),
        ),
        migrations.AddField(
            model_name='mensagememail',
            name='enviar_usuario_criacao',
            field=models.BooleanField(default=False, verbose_name='Enviar usuário de criação'),
        ),
        migrations.AddField(
            model_name='mensagememail',
            name='legenda_email',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Legenda do email'),
        ),
        migrations.AddField(
            model_name='mensagememail',
            name='titulo_alteracao_email',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Título alteração do email'),
        ),
        migrations.AddField(
            model_name='mensagememail',
            name='titulo_email',
            field=models.CharField(max_length=200, null=True, verbose_name='Título do email'),
        ),
    ]
