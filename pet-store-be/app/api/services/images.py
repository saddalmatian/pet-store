from fastapi import UploadFile, File
from typing import List
from app.db.image.upload_new_multiple_images import upload_new_multiple_images


def upload_multiple_images(
    product_id: str, service_id: str,
    image_file: List[UploadFile] = File(...)
) -> str:
    response = upload_new_multiple_images(
        product_id, service_id,
        image_file
    )
    return response
