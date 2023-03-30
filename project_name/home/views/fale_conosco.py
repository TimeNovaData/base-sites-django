import json
from collections import namedtuple

from django.http import JsonResponse
from emails.models import MensagemEmail, TemplateEmail


def fale_conosco(request):
    """View do fale conosco."""
    data = json.loads(request.body.decode("utf-8"))

    nome = data.get("nome", "-")
    email = data.get("email", "-")
    telefone = data.get("telefone", "-")
    mensagem = data.get("mensagem", "-")

    # print(nome, email, mensagem)

    FaleConosco = namedtuple(
        "fale_conosco_object", ["id", "nome", "email", "telefone", "mensagem"]
    )

    fale_conosco_object = FaleConosco(
        id=0,
        nome=nome,
        email=email,
        telefone=telefone,
        mensagem=mensagem,
    )

    try:
        template_email = TemplateEmail.objects.filter(
            codigo="fale_conosco"
        ).first()

        if not template_email:
            raise ValueError(
                "Serviço indisponível, contate seu administrador!"
            )

        mensagem_email = MensagemEmail.objects.create(
            template_email=template_email
        )
        mensagem_email.enviar(fale_conosco_object)

        return JsonResponse(
            {
                "status": "200",
                "message": "Email enviado com sucesso!",
            }
        )
    except Exception as error:
        return JsonResponse(
            {
                "status": "404",
                "message": error.args[0],
            }
        )
