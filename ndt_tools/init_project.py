import subprocess

from glob import (
    glob
)

from sys import (
    argv as parameter
)

import os


GREEN = '\033[92m'
YELLOW = '\033[93m'
RED = '\033[91m'

RESET = '\033[0m'

PROJECT_NAME = glob('**/settings.py')[0].split('/')[0]

# Comandos
create_env_command = [
    'python3', '-m', 'venv', '../.env_name'
]
npm_init_command = [
    'npm', 'install'
]
install_requirements_command = [
    'pip', 'install', '-r', 'requirements-dev.txt'
]

# Executar o comando
def create_env(name):
    command = subprocess.run(
        create_env_command, 
        capture_output=True, 
        text=True
    )

    if command.returncode == 0:
        print(GREEN)
        print('ENV criada com sucesso!')
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
        print('Setup do NPM concluído!')
        print(RESET)

    else:
        print(command.stderr)


def install_requirements():
    command = subprocess.run(
        install_requirements_command, 
    )

    if command.returncode == 0:
        return (
            GREEN+
            'As dependências do Django foram instaladas com sucesso!'
            +RESET
        )


if len(parameter) > 0 and 'help' not in parameter:
    
    project_name = PROJECT_NAME

    if len(parameter) > 1:
        project_name = parameter[1]

        command = subprocess.run(
            ['python3', 'ndt_manage.py', 'renameproject', project_name], 
            capture_output=True, 
            text=True
        )
        
    create_env_command[3] = f"../.env_{project_name}"
    
    result_env = create_env(project_name)
    
    if result_env:
        print('Execute o comando a seguir para habilitar a env:')
        print(YELLOW)
        print(f"source ../.env_{project_name}/bin/activate")
        print(RESET)

        # if "VIRTUAL_ENV" in os.environ:
        #     print("A env do Django está ativa!")
        # else:
        #     print("A env do Django não está ativa.")

else:
    print()
    print('Use o nome do projeto como parametro para iniciar um novo projeto, Exemplo:')
    print(YELLOW)
    print('python3 ndt_manage.py init <nome_do_projeto>')
    print(RESET)
    print('Ou apenas execute o comando para para criar o ambiente de um projeto existente, Exemplo:')
    print(YELLOW)
    print('python3 ndt_manage.py init')
    print(RESET)
    