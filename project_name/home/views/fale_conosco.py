import json
from django.http import JsonResponse
from emails.models import MensagemEmail, TemplateEmail
from collections import namedtuple


def fale_conosco(request):
    data = json.loads(
        request.body.decode("utf-8")
    )

    nome = data.get("nome", "-")
    email = data.get("email", "-")
    telefone = data.get("telefone", "-")
    mensagem = data.get("mensagem", "-")

    print(nome, email, mensagem)

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
        template_email = TemplateEmail.objects.get(codigo="fale_conosco")
        mensagem_email = MensagemEmail.objects.create(
            template_email=template_email
        )
        mensagem_email.enviar(fale_conosco_object)

        return JsonResponse(
            {
                "status": "200",
                "message": "Email enviado com sucesso!"
            }
        )
    except Exception as error:
        return JsonResponse(
            {
                "status": "404",
                "message": "Não foi possivel enviar o email!"
            }
        )