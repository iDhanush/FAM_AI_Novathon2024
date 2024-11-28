from contextlib import asynccontextmanager

from fastapi import FastAPI

from database import FamAIDataBase
from global_vars import Var


# ON STARTUP FUNCTION
@asynccontextmanager
async def lifespan(_fastapi: FastAPI):
    Var.db = FamAIDataBase()
    yield


app = FastAPI(lifespan=lifespan)
