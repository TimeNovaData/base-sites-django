# Generated by Django 3.2.12 on 2023-03-08 11:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0022_auto_20230308_1056'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='site',
            name='indexavel',
        ),
    ]
