from auth.auth import get_address
from fastapi import APIRouter, Depends, UploadFile

upload_router = APIRouter(prefix="/upload", tags=["upload"])


@upload_router.post("/upload")
async def upload_file(file: UploadFile, address=Depends(get_address)):
    print(file)
    return {"filename": file.filename}
