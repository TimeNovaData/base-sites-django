from django.db.models.signals import pre_save
from django.dispatch import receiver
from global_functions.utils import convert_img_to_webp
from ..models import (
    Galeria,
    Depoimento,
    Parceiro,
    ComingSoon,
    Portifolio,
    Servico,
    Pagina,
)


@receiver(pre_save, sender=Galeria)
def converter_para_webp_galeria(sender, instance, **kwargs):
    convert_img_to_webp(instance)


@receiver(pre_save, sender=Depoimento)
def converter_para_webp_depoimento(sender, instance, **kwargs):
    convert_img_to_webp(instance)


@receiver(pre_save, sender=Parceiro)
def converter_para_webp_parceiro(sender, instance, **kwargs):
    convert_img_to_webp(instance)


@receiver(pre_save, sender=ComingSoon)
def converter_para_webp_coming_soon(sender, instance, **kwargs):
    convert_img_to_webp(instance)


@receiver(pre_save, sender=Portifolio)
def converter_para_webp_portifolio(sender, instance, **kwargs):
    convert_img_to_webp(instance)


@receiver(pre_save, sender=Servico)
def converter_para_webp_servico(sender, instance, **kwargs):
    convert_img_to_webp(instance)


@receiver(pre_save, sender=Pagina)
def converter_para_webp_pagina(sender, instance, **kwargs):
    convert_img_to_webp(instance)
