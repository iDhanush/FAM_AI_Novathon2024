from fastapi import Header, HTTPException


def get_address(address: str = Header(...)):
    if not address:
        raise HTTPException(status_code=400, detail="Address header missing")
    return address