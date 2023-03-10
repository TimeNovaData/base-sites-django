# Generated by Django 3.2.12 on 2023-03-06 13:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Galeria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=100, verbose_name='Título')),
                ('imagem', models.ImageField(upload_to='home/media/%Y/%m', verbose_name='Image')),
                ('descricao', models.TextField(max_length=300, verbose_name='Descricação')),
            ],
            options={
                'verbose_name': 'Galeria',
                'verbose_name_plural': 'Galerias',
            },
        ),
    ]
