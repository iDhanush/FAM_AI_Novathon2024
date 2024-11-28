from server import app
from uploads.api import upload_router
from users.api import user_router

app.include_router(user_router)
app.include_router(upload_router)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, port=8000)
