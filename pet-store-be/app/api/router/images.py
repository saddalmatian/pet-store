from fastapi import APIRouter, UploadFile, File, Form
from typing import List, Optional
from app.api.services import images \
    as _service_image
import os
from fastapi.responses import FileResponse


router = APIRouter(
    prefix="/images",
    tags=["Image"]
)


@router.post("/upload-multiple-images")
async def upload_multiple_images(
    product_id: Optional[str] = Form(default=''),
    image_file: List[UploadFile] = File(...)
) -> str:
    response = _service_image.upload_multiple_images(
        product_id, image_file
    )
    return response


@router.get(
    "/get-image",
)
def get_image(
    image_path: str
):
    if os.path.exists(image_path):
        return FileResponse(image_path, media_type="image/png")
    return {"error": "File not found!"}
