 from django.http import JsonResponse


def aceitar_termo(request):
    response_data = {
        'success': True, 
        'message': 'Requisição processada com sucesso.'
    }
    
    return JsonResponse(response_data)
