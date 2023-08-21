from django import template
from django.conf import settings
from home.models import Site

register = template.Library()

@register.simple_tag()
def custom_admin_color(parameter):
  site = Site.objects.first()

  if parameter == 'primary':
    color = site.cor_primario if site else '#00D77C'

  elif parameter == 'secondary':
    color = site.cor_secundario if site else '#121212'

  return color

@register.simple_tag()
def customizados_logo_admin():

    customizado_logo = Site.objects.first()
    
    return customizado_logo.logo if customizado_logo else ''
