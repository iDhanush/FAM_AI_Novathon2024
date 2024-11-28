from fastapi import APIRouter

user_router = APIRouter(prefix="/users", tags=["users"])


@user_router.get("/")
async def get_users():
    return {}
