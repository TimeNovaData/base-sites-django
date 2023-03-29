from django.http import JsonResponse
from ..models import Termo

def aceitar_termo(request): 

    try:
        ip = get_ip_address(request)

        termo = Termo.objects.first()

        print(termo)

        if not termo.aceitetermo_set.filter(ip=ip):
            termo.aceitetermo_set.create(
                ip=ip
            )

            termo.save()

            return JsonResponse({
                'success': True,
                'message': 'Requisição processada com sucesso.',
                'ip': ip
            })

        return JsonResponse({
            'success': True,
            'message': 'IP já existente.'
        })
    
    except Exception as error:
        return JsonResponse({
            'success': False,
            'message': error
        })

    

def get_ip_address(request):
    user_ip_address = request.META.get('HTTP_X_FORWARDED_FOR')

    if user_ip_address:
        return user_ip_address.split(',')[-1].strip()

    else:
        return request.META.get('REMOTE_ADDR')
