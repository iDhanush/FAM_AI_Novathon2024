import motor.motor_asyncio


class FamAIDataBase:
    def __init__(self):
        self._client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
        self.db = self._client["FamAIDataBase"]
        self.usrDB = self.db["usrDB"]
