import aiofiles
from utils import invoke_uid
from auth.auth import get_address
from fastapi import APIRouter, Depends, UploadFile, HTTPException


upload_router = APIRouter(prefix="/upload", tags=["upload"])


@upload_router.post("/upload")
async def upload_file(file: UploadFile, address=Depends(get_address)):
    extension = file.filename.split('.')[-1]
    if extension not in ['jpg', 'png', 'jpeg']:
        raise HTTPException(status_code=400, detail="Invalid file type")
    file_name = invoke_uid(10) + '.' + extension
    async with aiofiles.open('assets/' + file_name, 'wb') as out_file:
        content = await file.read()  # async read
        await out_file.write(content)  # async write
    return {'filename': file_name}