# Generated by Django 3.2.12 on 2023-03-08 14:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0024_alter_pagina_indexavel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comingsoon',
            name='imagem_fundo',
            field=models.ImageField(blank=True, null=True, upload_to='assets', verbose_name='Imagem Fundo'),
        ),
        migrations.AlterField(
            model_name='comingsoon',
            name='link_telefone',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Link Telefone'),
        ),
        migrations.AlterField(
            model_name='comingsoon',
            name='link_whatsapp',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Link Whatsapp'),
        ),
        migrations.AlterField(
            model_name='comingsoon',
            name='logo',
            field=models.FileField(blank=True, null=True, upload_to='assets', verbose_name='Logo'),
        ),
        migrations.AlterField(
            model_name='comingsoon',
            name='video_fundo',
            field=models.FileField(blank=True, null=True, upload_to='assets', verbose_name='Video Fundo'),
        ),
        migrations.AlterField(
            model_name='manutencao',
            name='imagem_fundo',
            field=models.ImageField(blank=True, null=True, upload_to='assets', verbose_name='Imagem Fundo'),
        ),
        migrations.AlterField(
            model_name='manutencao',
            name='link_telefone',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Link Telefone'),
        ),
        migrations.AlterField(
            model_name='manutencao',
            name='link_whatsapp',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Link Whatsapp'),
        ),
        migrations.AlterField(
            model_name='manutencao',
            name='logo',
            field=models.FileField(blank=True, null=True, upload_to='assets', verbose_name='Logo'),
        ),
        migrations.AlterField(
            model_name='manutencao',
            name='video_fundo',
            field=models.FileField(blank=True, null=True, upload_to='assets', verbose_name='Video Fundo'),
        ),
    ]
