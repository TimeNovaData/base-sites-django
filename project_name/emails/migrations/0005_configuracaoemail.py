# Generated by Django 3.2.12 on 2023-06-01 13:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('novadata_utils', '0001_initial'),
        ('emails', '0004_mensagememail_corpo_email_text'),
    ]

    operations = [
        migrations.CreateModel(
            name='ConfiguracaoEmail',
            fields=[
                ('novadatamodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='novadata_utils.novadatamodel')),
                ('email_backend', models.CharField(default='django.core.mail.backends.smtp.EmailBackend', max_length=100, verbose_name='EMAIL_BACKEND')),
                ('email_use_tls', models.BooleanField(default=True, verbose_name='EMAIL_USE_TLS')),
                ('email_host', models.CharField(default='smtp.gmail.com', max_length=100, verbose_name='EMAIL_HOST')),
                ('email_port', models.IntegerField(default=587, verbose_name='EMAIL_PORT')),
                ('email_host_user', models.CharField(default='hub@novadata.com.br', max_length=100, verbose_name='EMAIL_HOST_USER')),
                ('email_host_password', models.CharField(default='senhadohub', max_length=100, verbose_name='EMAIL_HOST_PASSWORD')),
                ('default_from_email', models.CharField(default='Novadata <novadata@novadata.com.br>', max_length=100, verbose_name='DEFAULT_FROM_EMAIL')),
                ('email_name', models.CharField(default='Novadata', max_length=100, verbose_name='EMAIL_NAME')),
            ],
            options={
                'verbose_name': 'Configuração de e-mail',
                'verbose_name_plural': 'Configurações de e-mail',
            },
            bases=('novadata_utils.novadatamodel',),
        ),
    ]