import subprocess

import secrets

from sys import argv as parameter

import os

GREEN = "\033[92m"
YELLOW = "\033[93m"
RED = "\033[91m"
RESET = "\033[0m"


# Gerar um valor aleatório para a chave secreta
secret_key = secrets.token_urlsafe(50)
env_content = f"""SECRET_KEY='{secret_key}'
DEBUG=True
DEV=True
ENVIAR_EMAIL=True

EMAIL_HOST_USER=
EMAIL_HOST_PASSWORD=
EMAIL_NAME=

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
USE_AWS=
"""

# Comandos
create_env_command = ["python3", "-m", "venv", "../env"]
npm_init_command = ["npm", "install"]
install_requirements_command = ["pip", "install", "-r", "requirements-dev.txt"]
make_migrations_command = ["python3", "manage.py", "makemigrations"]
migrate_command = ["python3", "manage.py", "migrate"]


# Executar o comando
def create_env(name):
    command = subprocess.run(
        create_env_command, capture_output=True, text=True
    )

    print(create_env_command)

    if command.returncode == 0:
        print(GREEN)
        print("ENV criada com sucesso!")
        print(RESET)
        return True
    else:
        print(command.stderr)


def npm_init():
    command = subprocess.run(
        npm_init_command,
    )

    if command.returncode == 0:
        print(GREEN)
        print("Setup do NPM concluído!")
        print(RESET)

    else:
        print(command.stderr)


def make_migrations():
    command = subprocess.run(
        make_migrations_command,
    )

    if command.returncode == 0:
        print(GREEN)
        print("As migrações foram criadas!")
        print(RESET)

    else:
        print(command.stderr)


def migrate():
    command = subprocess.run(
        migrate_command,
    )

    if command.returncode == 0:
        print(GREEN)
        print("As migrações feitas com sucesso!")
        print(RESET)

    else:
        print(command.stderr)


def install_requirements():
    command = subprocess.run(
        install_requirements_command,
    )

    if command.returncode == 0:
        return (
            GREEN
            + "As dependências do Django foram instaladas com sucesso!"
            + RESET
        )


def generate_env_file():
    env_example_path = ".env_example"
    env_file_path = ".env"

    if not os.path.exists(env_example_path):
        print(f"O arquivo .env_example não existe")
        return

    if os.path.exists(env_file_path):
        print(f"O arquivo .env já existe")
        return

    try:
        with open(env_file_path, "w") as env_file:
            env_file.write(env_content)

        print(f"O arquivo {env_file_path} foi gerado com sucesso.")

    except IOError as e:
        print(f"Erro ao gerar o arquivo {env_file_path}: {e}")


if len(parameter) > 0 and "help" not in parameter:
    if "VIRTUAL_ENV" in os.environ:
        #     print("A env do Django está ativa!")
        # else:
        command_3 = install_requirements()
        print(command_3)
        npm_init()
        generate_env_file()
        make_migrations()
        migrate()

        print(GREEN)
        print("Setup concluido com sucesso!")
        print(RESET)
        print("Crie um novo usuário com o comando:")
        print(YELLOW + "python3 manage.py createsuperuser" + RESET)
        print()
        print("Inicíe o servidor com o comando: ")
        print(YELLOW + "python3 manage.py runserver" + RESET)
        print()

    else:
        print(YELLOW)
        print("A env do Django não está ativa.")
        print(RESET)


else:
    # show_layout()
    pass
    # command_3 = install_requirements()
    # print(command_3)
