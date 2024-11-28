import aiofiles
import requests

from global_vars import Var
from schemas import DocData
from utils import invoke_uid
from auth.auth import get_address
from fastapi import APIRouter, Depends, UploadFile, HTTPException

doc_router = APIRouter(prefix="/document", tags=["document"])

def get_response(prompt, context):
    res = requests.post('https://aecc-35-231-142-90.ngrok-free.app/chat',
                        json={'prompt': prompt, 'context': context})
    res =  res.json()
    if not res:
        return False
    res = res.get('llm_response')
    return res
@doc_router.post("/upload")
async def upload_file(file: UploadFile, prfid: str, address=Depends(get_address)):
    extension = file.filename.split('.')[-1]
    if extension not in ['jpg', 'png', 'jpeg']:
        raise HTTPException(status_code=400, detail="Invalid file type")
    file_name = invoke_uid(10) + '.' + extension
    async with aiofiles.open('assets/' + file_name, 'wb') as out_file:
        content = await file.read()
        await out_file.write(content)

    doc_data = DocData(filename=file_name, inferences='', address=address, prfid=prfid)
    res = get_response()
    await Var.db.add_document(doc_data)
    return {'filename': file_name}
