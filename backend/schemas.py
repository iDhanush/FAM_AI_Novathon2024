from typing import Union

from pydantic import BaseModel


class AccountData(BaseModel):
    address: str
class ProfileUID(BaseModel):
    prfid: str

class ProfileData(BaseModel):
    address:  Union[str, None] = None
    prfid: Union[str, None] = None
    name: str
    dob: str
    gender: str
    blood: str
