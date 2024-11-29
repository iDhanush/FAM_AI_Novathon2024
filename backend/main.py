import nest_asyncio
from server import app
from docs.api import doc_router
from users.api import user_router
from pyngrok import ngrok
app.include_router(user_router)
app.include_router(doc_router)


# Get your authtoken from https://dashboard.ngrok.com/get-started/your-authtoken
auth_token = "2pUW2VxHEwxbxL3YM2YeJY3RIu2_31fXoDAHaH3rF2WpBPRuz"
ngrok.set_auth_token(auth_token)
ngrok_tunnel = ngrok.connect(8000, hostname='thoroughly-lasting-ladybug.ngrok-free.app')
print('Public URL:', ngrok_tunnel.public_url)
nest_asyncio.apply()

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, port=8000)
