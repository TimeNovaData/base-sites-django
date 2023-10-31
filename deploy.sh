#!/bin/bash

# Defina o nome do aplicativo Dokku e o nome do branch do Git
APP_NAME="seo-pro"
GIT_BRANCH="main"
DOKKU_HOST="dokku-sites.novadata.com.br"
# Get the username
USERNAME=$(whoami)
echo "username: $USERNAME"
echo "os: $OSTYPE"

if ! git remote | grep -q "dokku"; then
    # Adicione o controle remoto do Dokku se não existir
    git remote add dokku dokku@$DOKKU_HOST:$APP_NAME
fi
git checkout main

git pull 
# Faça o push das alterações para o Dokku
git push dokku $GIT_BRANCH

# Execute as migrações do Django no Dokku
ssh root@$DOKKU_HOST dokku run $APP_NAME python manage.py migrate


# Execute a coleta de arquivos estáticos do Django no Dokku
ssh root@$DOKKU_HOST "dokku run $APP_NAME python manage.py collectstatic --noinput"



