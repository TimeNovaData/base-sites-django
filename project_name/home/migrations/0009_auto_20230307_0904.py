# Generated by Django 3.2.12 on 2023-03-07 09:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0008_auto_20230306_1728'),
    ]

    operations = [
        migrations.AlterField(
            model_name='depoimento',
            name='foto',
            field=models.ImageField(upload_to='uploads/%Y/%m', verbose_name='foto'),
        ),
        migrations.AlterField(
            model_name='galeria',
            name='imagem',
            field=models.ImageField(upload_to='uploads/%Y/%m', verbose_name='Imagem'),
        ),
        migrations.AlterField(
            model_name='pagina',
            name='indexavel',
            field=models.BooleanField(default=False, verbose_name='Indexável?'),
        ),
        migrations.AlterField(
            model_name='portifolio',
            name='imagem_destacada',
            field=models.ImageField(upload_to='uploads/%Y/%m', verbose_name='Imagem Destacada'),
        ),
        migrations.AlterField(
            model_name='servico',
            name='foto',
            field=models.ImageField(upload_to='uploads/%Y/%m', verbose_name='Foto'),
        ),
    ]
