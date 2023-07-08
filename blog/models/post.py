from django.db import models
from django_quill.fields import QuillField
from django.contrib.auth.models import User
from .categoria import Categoria
from .tag import Tag


class Post(models.Model):
    titulo = models.CharField(
        verbose_name="Ttitulo",
        max_length=100,
    )

    slug = models.SlugField(
        verbose_name="Slug",
        max_length=100,
        null=True,
        blank=False,
        unique=True,
    )

    conteudo = QuillField(
        verbose_name="Conteúdo",
        null=True,
        blank=True,
    )

    resumo = models.TextField(
        verbose_name="Resumo",
        max_length=300,
    )

    banner = models.ImageField(
        verbose_name="Banner",
        blank=True,
        upload_to="banner/",
    )

    thumbnail = models.ImageField(
        verbose_name="Thumbnail",
        blank=True,
        upload_to="thumbnail/",
    )

    tag = models.ManyToManyField(
        Tag,
        verbose_name="Tags",
        blank=True,
    )

    categoria = models.ManyToManyField(
        Categoria,
        verbose_name="Categoria",
        blank=True,
    )

    data_alteracao = models.DateTimeField(
        verbose_name="Data de Alteração", auto_now=True
    )

    data_criacao = models.DateTimeField(
        verbose_name="Data de Criação", auto_now_add=True
    )

    usuario_criacao = models.ForeignKey(
        User,
        verbose_name="Usúario de Criação",
        related_name="usuario_criacao",
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
    )

    usuario_atualizacao = models.ForeignKey(
        User,
        verbose_name="Usúario de Atualização",
        related_name="usuario_atualizacao",
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
    )

    def save(self, *args, **kwargs):
        '''Sobrescrita do método save para realizarmos ações personalizadas.'''
        from crum import get_current_user
    
        user = get_current_user()
        if user and not user.pk:
            user = None
        if not self.pk:
            self.usuario_criacao = user
        self.usuario_atualizacao = user
   
        super().save(*args, **kwargs)
    
    def __str__(self):
        """Método que retorna a representação do objeto como string."""
        return self.titulo

    class Meta:
        """Sub classe para definir meta atributos da classe principal."""

        app_label = "blog"
        verbose_name = "Post"
        verbose_name_plural = "Posts"
