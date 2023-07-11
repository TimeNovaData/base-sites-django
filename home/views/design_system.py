from django.shortcuts import render


def design_system(request):
    context = {}

    return render(
        request,
        "Design_system/Design_system.html",
        context,
    )
