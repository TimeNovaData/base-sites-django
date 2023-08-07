from typing import List
from django.http import HttpResponse
from django.views.generic import TemplateView

class NDTBasePageView(TemplateView):
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['ndt'] = 'alow alow'
        return context
    
    def get_template_names(self):
        template_name = 'home/coming_soon.html'
        
    
    