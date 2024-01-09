from django.views.generic import (
    ListView,
    DetailView
)
from ..models.post import Post
from django.core.paginator import Paginator


class PostView(ListView):
    model = Post
    post_per_page = 10
    template_name = 'blog/post.html'
    context_object_name = 'blog'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        
        paginator = Paginator(self.object_list, self.post_per_page)
        
        page_number = self.request.GET.get('page')
        
        page_obj = paginator.get_page(page_number)
        
        context['posts'] = page_obj
        
        return context
    

class PostDetail(DetailView):
    template_name = 'blog/post_detail.html'
    slug_field = 'slug'
    model = Post