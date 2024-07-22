from django import template
from django.conf import settings
from home.models import Site

register = template.Library()


@register.simple_tag()
def is_dev():
    return settings.DEV


@register.simple_tag()
def get_site():
    # config global
    site = Site.objects.all().first()
    return site


@register.filter()
def type_file(file):
    """Retorna o tipo do arquivo."""
    if file:
        name = file.name
        first_split = name.split("/")[-1]
        second_split = first_split.split(".")[-1]
        return second_split

    return None
