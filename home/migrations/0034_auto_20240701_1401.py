# Generated by Django 3.2.12 on 2024-07-01 14:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0033_redesocial'),
    ]

    operations = [
        migrations.AddField(
            model_name='redesocial',
            name='data_atualizacao',
            field=models.DateTimeField(auto_now=True, null=True, verbose_name='Data de atualização'),
        ),
        migrations.AddField(
            model_name='redesocial',
            name='data_criacao',
            field=models.DateTimeField(auto_now_add=True, null=True, verbose_name='Data de criação'),
        ),
        migrations.AddField(
            model_name='redesocial',
            name='usuario_atualizacao',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='usuario_atualizacao_rede_social', to=settings.AUTH_USER_MODEL, verbose_name='Usúario de Atualização'),
        ),
        migrations.AddField(
            model_name='redesocial',
            name='usuario_criacao',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='usuario_criacao_rede_social', to=settings.AUTH_USER_MODEL, verbose_name='Usúario de Criação'),
        ),
    ]