# Generated by Django 3.2.12 on 2023-03-08 08:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('emails', '0001_initial'),
        ('home', '0018_aceitetermo_comingsoon_termo'),
    ]

    operations = [
        migrations.AddField(
            model_name='comingsoon',
            name='template_email',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='emails.templateemail', verbose_name='Template Email'),
        ),
        migrations.AddField(
            model_name='manutencao',
            name='template_email',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='emails.templateemail', verbose_name='Template Email'),
        ),
    ]