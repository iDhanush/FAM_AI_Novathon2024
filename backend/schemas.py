import datetime

from pydantic import BaseModel


class AccountData(BaseModel):
    address: str
class ProfileData(BaseModel):
    address: str
    name: str
    dob: datetime.date
    gender: str
