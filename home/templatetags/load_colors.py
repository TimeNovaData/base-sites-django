from django import template
from django.conf import settings
from home.models import Site

register = template.Library()

@register.simple_tag()
def custom_admin_color(parameter):
  site = Site.objects.first()

  if parameter == 'primary':
    color = site.cor_primario

  elif parameter == 'secondary':
    color = site.cor_secundario

  return color
