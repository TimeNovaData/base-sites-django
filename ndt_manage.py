import subprocess

from sys import argv as parameter

YELLOW = "\033[93m"
GREEN = "\033[92m"
RED = "\033[91m"
RESET = "\033[0m"


def call_script(script_name, *args):
    subprocess.call(["python3", f"{script_name}", *args])


command_descriptions = {
    "initproject  ": "Inicia o projeto com o nome especificado.",
    "setup        ": "Realiza o setup",
    "renameproject": "Renomeia o projeto atual com o novo nome especificado.",
}

options = {
    "renameproject": "ndt_tools/rename_project.py",
    "initproject": "ndt_tools/init_project.py",
    "convert_webp": "ndt_tools/img_convert_webp.py",
    "setup": "ndt_tools/setup.py",
    "help": "ndt_manage.py",
}


def show_layout():
    print(YELLOW)
    print('Digite "python3 ndt_manage.py help <subcomando>" para obter ajuda.')
    print(RESET)
    print("Comandos disponiveis:")
    print()
    print(f"{GREEN}[ndt]{RESET}")
    # print(f"    renameproject | Renomeia")
    for command, description in command_descriptions.items():
        print(f"    {command} | {description}")
    print()
    print(f"Powered by {GREEN}.{RESET}NDT ©")
    print()


if len(parameter) > 1:
    option = parameter[1]
    if option in options:
        file = options[option]
        additional_params = parameter[2:]
        additional_params = parameter[2:]

        call_script(file, *additional_params)
    else:
        print(RED)
        print(f"Opção '{option}' não encontrada!")
        print(RESET)
        show_layout()

else:
    show_layout()
