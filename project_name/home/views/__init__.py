from .base_novadata_view import BaseNovadataView
from .design_system import design_system
from .errors import error_403, error_404, error_500
from .home import home
from .manutencao import manutencao
from .coming_soon import coming_soon
from .svg_viewer import svg_viewer
from .aceitar_termo import aceitar_termo

errors_views = [
    error_403,
    error_404,
    error_500,
]

__all__ = [
    BaseNovadataView,
    home,
    manutencao,
    coming_soon,
    design_system,
    svg_viewer,
    aceitar_termo,
] + errors_views
