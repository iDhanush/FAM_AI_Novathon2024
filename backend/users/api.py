from fastapi import APIRouter

from global_vars import Var
from schemas import AccountData

user_router = APIRouter(prefix="/users", tags=["users"])


@user_router.post("/create_account")
async def create_user(account_data: AccountData):
    await Var.db.create_user(account_data)
    return account_data


@user_router.get("/get_account")
async def get_user():
    user = await Var.db.get_user()
    return user
