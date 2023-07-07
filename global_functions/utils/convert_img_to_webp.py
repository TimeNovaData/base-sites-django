import os
from io import BytesIO

from PIL import Image


def convert_img_to_webp(instance):
    # pega todos os campos
    fields = instance._meta.get_fields()

    # filtra os campos pelo tipo
    file_fields = list(
        filter(
            lambda x: x.get_internal_type() == "FileField",
            fields,
        )
    )

    img_types = (
        'png',
        'jpeg',
        'jpg',
    )

    # executa a conversão para as imagens
    for field in file_fields:

        # pega o campo real atravez do atributo
        file = getattr(instance, field.name)

        is_webp = file.name.endswith(".webp")
        in_img_types = file.name.endswith(img_types)

        if not is_webp and in_img_types:
            
            parse_image = Image.open(file)

            buffer = BytesIO()

            parse_image.save(buffer, format="webp")

            file.name = f"{os.path.splitext(file.name)[0]}.webp"

            file.file = buffer
