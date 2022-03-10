from fastapi import APIRouter, UploadFile, File, Form
from typing import List, Optional
from app.api.services import images \
    as _service_image

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
