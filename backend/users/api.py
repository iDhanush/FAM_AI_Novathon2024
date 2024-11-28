from global_vars import Var
from fastapi import APIRouter
from schemas import AccountData, ProfileData

user_router = APIRouter(prefix="/users", tags=["users"])


@user_router.post("/create_account")
async def create_user(account_data: AccountData):
    await Var.db.create_user(account_data)
    return account_data


@user_router.get("/get_account/{address}")
async def get_user(address: str):
    print(address)
    user = await Var.db.get_user(address)
    print(user)
    return user


@user_router.post("/create_profile")
async def create_profile(account_data: ProfileData):
    await Var.db.create_profile(account_data)
    return {'success': True}


@user_router.post("/get_profiles/{address}")
async def get_profiles(address: str):
    return await Var.db.get_profiles(address)
