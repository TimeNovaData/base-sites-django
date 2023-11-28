# Boilerplate
Um boilerplate é um projeto de modelo, criado para facilitar a configuração inicial dos nossos sitemas, trazendo algumas coisas já pré-configuradas,
assim nós só precisamos nos preocupar em desenvolver de fato o sistema.


Esse modelo conta com as seguintes features:
- Configuração do Heroku.
- Configuração do Django Admin Docs.
- Configuração do Django Rest Framework.
- Configuração do Django Spectacular.
- Configuração do Django Debug Toolbar.
- Design system.
- SVG viewer.
- Autenticação de login por user e e-mail simultaneamente.


## Instalação
Para o passo a passo é importante que esteja em um ambiente linux ou WSL.

### Instalação de um projeto do zero

Muita atenção, esse passo a passo é para um projeto que ainda não foi ao git, ou seja, um projeto novo.

Em sua pasta de desenvolvimento de projetos, execute:

```bash
  mkdir nome_projeto_workspace
  cd nome_projeto_workspace
```

Em seguida clone o repositório:

```bash
  git clone --depth 1 https://github.com/TimeNovaData/base-sites-django
```

Mude o nome da pasta:

```bash
  mv base-sites-django nome_projeto
  cd nome_projeto
```

#### Setup do projeto

Para renomear as variáveis do django necessárias do Django conforme o projeto, execute:

```bash
  python3 ndt_manage.py initproject nome_projeto
```

Ative o ambiente, e execute o comando a seguir para realizar todo processo de instalação de dependências e migrações das tabelas do banco de dados: 

```bash
  python3 ndt_manage.py setup
```

Crie um super usuário utilizando:

```bash
  python3 manage.py createsuperuser
```

Por fim, execute o servidor:

```bash
  python3 manage.py runserver
```

### Instalação de um projeto existente
Em sua pasta de desenvolvimento de projetos, execute:

```bash
  mkdir nome_projeto_workspace
  cd nome_projeto_workspace
```

Em seguida clone o repositório:

```bash
  git clone <url_do_repositorio>
```

Entre na pasta:

```bash
  cd nome_projeto
```

#### Setup do projeto

Para renomear as variáveis do django necessárias do Django conforme o projeto, execute:

```bash
  python3 ndt_manage.py initproject
```

Ative o ambiente, e execute o comando a seguir para realizar todo processo de instalação de dependências e migrações das tabelas do banco de dados: 

```bash
  python3 ndt_manage.py setup
```

Crie um super usuário utilizando:

```bash
  python3 manage.py createsuperuser
```

Por fim, execute o servidor:

```bash
  python3 manage.py runserver
```

Feito! Seu projeto está rodando com diversas coisas úteis já configuradas.
Agora é só codar!!

## Deseja fazer modificações?
Basta baixar o projeto em sua máquina, modificar o que desejar, apagar e recriar o arquivo .zip e fazer o pull request como de costume!

Obrigado por contribuir! o/
# Canal-A
