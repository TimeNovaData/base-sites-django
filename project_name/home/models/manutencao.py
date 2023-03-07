# from django.db import models


# class Manutencao(models.Model):

    
#     imagem_fundo = models.ImageField(
#         verbose_name='Imagem Fundo',
#         upload_to='assets'
#     )

#     video_fundo = models.FileField(
#         verbose_name='Video Fundo',
#         upload_to='assets'
#     )

#     logo = models.FileField(
#         verbose_name='Logo',
#         upload_to='assets'
#     )

#     background_cor1 = models.FileField(
#         verbose_name='Background Cor',
#         upload_to='assets'
#     )

#     logo = models.FileField(
#         verbose_name='Logo',
#         upload_to='assets'
#     )

#     + logo: ImageField
#     + background_cor1: ColorField
#     + background_cor2: ColorField
#     + link_telefone: CharField
#     + link_whatsapp: CharField
#     + template_email: FK (TemplateEmail)


#     def __str__(self):
#         '''Método que retorna a representação do objeto como string.'''
#         return 'Config. de Manutenção'

#     class Meta:
#         '''Sub classe para definir meta atributos da classe principal.'''

#         app_label = 'nome_app'
#         verbose_name = 'Nome da sua model no singular'
#         verbose_name_plural = 'Nome da sua model no plural'
