from server import app
from users.api import user_router

app.include_router(user_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, port=8000)
