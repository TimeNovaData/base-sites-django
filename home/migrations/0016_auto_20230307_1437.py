# Generated by Django 3.2.12 on 2023-03-07 14:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0015_alter_itemmenu_item_menu_pai'),
    ]

    operations = [
        migrations.AlterField(
            model_name='site',
            name='favicon',
            field=models.FileField(upload_to='assets', verbose_name='Favicon'),
        ),
        migrations.AlterField(
            model_name='site',
            name='logo',
            field=models.FileField(upload_to='assets', verbose_name='Logo'),
        ),
    ]
