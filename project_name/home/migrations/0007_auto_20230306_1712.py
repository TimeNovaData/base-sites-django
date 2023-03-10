# Generated by Django 3.2.12 on 2023-03-06 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_auto_20230306_1625'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='pagina',
            options={'verbose_name': 'Pagina', 'verbose_name_plural': 'Paginas'},
        ),
        migrations.CreateModel(
            name='Depoimento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100, verbose_name='Nome')),
                ('cliente', models.CharField(max_length=100, verbose_name='Cliente')),
                ('cargo', models.CharField(max_length=100, verbose_name='Cargo')),
                ('depoimento', models.TextField(max_length=300, verbose_name='Depoimento')),
                ('foto', models.ImageField(upload_to='%Y/%m', verbose_name='foto')),
                ('pagina', models.ManyToManyField(to='home.Pagina')),
            ],
            options={
                'verbose_name': 'Depoimento',
                'verbose_name_plural': 'Depoimentos',
            },
        ),
    ]
