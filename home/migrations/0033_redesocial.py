# Generated by Django 3.2.12 on 2024-06-24 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0032_alter_site_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='RedeSocial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=30, verbose_name='Nome')),
                ('icone_svg', models.FileField(upload_to='', verbose_name='Ícone SVG da rede social')),
                ('link', models.URLField(verbose_name='Link para o perfil na rede social')),
                ('ordem', models.IntegerField(default=0, verbose_name='Ordem')),
                ('paginas', models.ManyToManyField(to='home.Pagina', verbose_name='Páginas')),
            ],
            options={
                'verbose_name': 'Rede social',
                'verbose_name_plural': 'Redes sociais',
            },
        ),
    ]