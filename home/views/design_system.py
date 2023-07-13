from django.shortcuts import render
from django.urls import resolve


def design_system(request):
    context = {}
    current_name = resolve(request.path_info).url_name

    if current_name == "design_system_secoes":
        template_name = "Design_system/secoes/secoes.html"
    else:
        template_name = "Design_system/Design_system.html"

    return render(
        request,
        template_name,
        context,
    )
