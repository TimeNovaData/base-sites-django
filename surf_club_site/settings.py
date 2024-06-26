import os
from pathlib import Path

from decouple import config
from dj_database_url import parse as dburl

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = config("SECRET_KEY", "")

DEBUG = config("DEBUG", default=False, cast=bool)

ALLOWED_HOSTS = [
    "localhost",
    "127.0.0.1",
    "surf_club_site.herokuapp.com",
    "seo-pro.dokku-sites.novadata.com.br",
]

INTERNAL_IPS = [
    "127.0.0.1",
]

INSTALLED_APPS = [
    "django_app_novadata",
    "django.contrib.admindocs",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.humanize",
    #
    # Apps
    "avatar",
    "home",
    "emails",
    "blog",
    #
    # Libs
    "advanced_filters",
    "colorfield",
    "debug_toolbar",
    # "django_browser_reload",
    "django_filters",
    "django_object_actions",
    "django_quill",
    "drf_spectacular",
    "drf_spectacular_sidecar",
    "import_export",
    "novadata_utils",
    "rest_framework",
    "widget_tweaks",
    "django_vite",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "home.middlewares.ModelAndAppNameMiddleware",
    "crum.CurrentRequestUserMiddleware",
]

DEV = config("DEV", default=False, cast=bool)
# if DEV:
#     MIDDLEWARE += [
#         "django_browser_reload.middleware.BrowserReloadMiddleware",
#         # 'debug_toolbar.middleware.DebugToolbarMiddleware',
#     ]

ROOT_URLCONF = "surf_club_site.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, "templates")],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "surf_club_site.wsgi.application"


default_dburl = "sqlite:///" + os.path.join(BASE_DIR, "db.sqlite3")
DATABASES = {
    "default": config("DATABASE_URL", default=default_dburl, cast=dburl)
}


USE_AWS = config("USE_AWS", default=False, cast=bool)
if USE_AWS:
    AWS_ACCESS_KEY_ID = config("AWS_ACCESS_KEY_ID")
    AWS_SECRET_ACCESS_KEY = config("AWS_SECRET_ACCESS_KEY")
    AWS_STORAGE_BUCKET_NAME = "django-seo-pro"
    AWS_S3_CUSTOM_DOMAIN = "%s.s3.amazonaws.com" % AWS_STORAGE_BUCKET_NAME
    AWS_S3_OBJECT_PARAMETERS = {
        "CacheControl": "max-age=86400",
    }
    AWS_LOCATION = "static"
    AWS_DEFAULT_ACL = None

    STATIC_URL = "https://%s/%s/" % (AWS_S3_CUSTOM_DOMAIN, AWS_LOCATION)
    STATICFILES_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"
    DEFAULT_FILE_STORAGE = "storages.backends.s3boto3.S3Boto3Storage"

    # s3 public media settings
    PUBLIC_MEDIA_LOCATION = "media"
    MEDIA_URL = "https://%s/%s/" % (
        AWS_S3_CUSTOM_DOMAIN,
        PUBLIC_MEDIA_LOCATION,
    )
    DEFAULT_FILE_STORAGE = "surf_club_site.storages_backends.PublicMediaStorage"
else:
    STATIC_URL = "/static/"
    MEDIA_URL = "/media/"


REST_FRAMEWORK = {
    "DEFAULT_FILTER_BACKENDS": [
        "django_filters.rest_framework.DjangoFilterBackend"
    ],
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.LimitOffsetPagination",  # noqa E501
    "PAGE_SIZE": 10,
    #
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
}

SPECTACULAR_SETTINGS = {
    "TITLE": "surf_club_site API",
    "DESCRIPTION": "surf_club_site description",
    "VERSION": "1.0.0",
    "SERVE_INCLUDE_SCHEMA": False,
    #
    "SWAGGER_UI_DIST": "SIDECAR",
    "SWAGGER_UI_FAVICON_HREF": "SIDECAR",
    "REDOC_DIST": "SIDECAR",
}

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",  # noqa E501
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",  # noqa E501
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",  # noqa E501
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",  # noqa E501
    },
]

AUTHENTICATION_BACKENDS = [
    "global_functions.authentication.LoginUsernameEmail",
]

LANGUAGE_CODE = "pt-br"

TIME_ZONE = "America/Sao_Paulo"

USE_I18N = True

USE_L10N = True

USE_TZ = False

LOGIN_REDIRECT_URL = "home"
LOGOUT_REDIRECT_URL = "login"
LOGIN_URL = "login"

# STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "static")

MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"


# ⚡VITE -----
DJANGO_VITE_ASSETS_PATH = BASE_DIR / "static" / "dist"
DJANGO_VITE_DEV_MODE = config("DEV", default=False, cast=bool)
DJANGO_VITE_MANIFEST_PATH = os.path.join(STATIC_URL, "manifest.json")
PUBLIC_FOLDER = BASE_DIR / "static" / "public"
STATICFILES_DIRS = [DJANGO_VITE_ASSETS_PATH, PUBLIC_FOLDER]
