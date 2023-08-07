from .ndt_base_page import NDTBasePageView

class ParceirosView(NDTBasePageView):

    def get_context_data(self, **kwargs):
        return super().get_context_data(**kwargs)