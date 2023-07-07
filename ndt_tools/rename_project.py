from sys import (
    argv as parameter
)

from os.path import (
    dirname
)

from glob import (
    glob
)

from os import (
    rename
)

GREEN = '\033[92m'
YELLOW = '\033[93m'
RESET = '\033[0m'

file_directory = [
    'manage.py',
    '**/asgi.py',
    '**/settings.py',
    '**/wsgi.py',
    'Procfile',
]

PROJECT_NAME = glob('**/settings.py')[0].split('/')[0]

def rename_path(new_name):
    try:
        rename(PROJECT_NAME, new_name)
        print("Pasta renomeada com sucesso!")

    except OSError as error:
        print(f"Erro ao renomear a pasta: {error}")

def replace_name(file_path, project_name):
    with open(file_path, 'r') as file:
        lines = file.readlines()

    with open(file_path, 'w') as file:
        for line in lines:
            modified_line = line.replace(PROJECT_NAME, project_name)
            file.write(modified_line)


if len(parameter) > 1:
    project_name = parameter[1]
    
    print()
    for file in file_directory:
        files = glob(file)
        if files:
            file_path = files[0]
            replace_name(file_path, project_name)
            print(f'Arquivo {file_path} alterado com sucesso!')
        else:
            print(f'Não foi possivel alterar {file}')

    rename_path(project_name)

    print(GREEN)
    print('Nome do projeto alterado com sucesso!')
    print(RESET)

else:
    print()
    print('Use o nome do projeto como parametro, Exemplo:')
    print(YELLOW)
    print('python3 ndt_manage.py renameproject <nome_do_projeto>')
    print(RESET)
