import motor.motor_asyncio

from schemas import AccountData, ProfileData


class FamAIDataBase:
    def __init__(self):
        self._client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
        self.db = self._client["FamAIDataBase"]
        self.usrDB = self.db["usrDB"]
        self.prfDB = self.db["prfDB"]

    async def create_user(self, user: AccountData):
        return await self.usrDB.insert_one(user.model_dump())

    async def get_user(self, address: str):
        return await self.usrDB.find_one({"address": address}, {'_id': 0})

    async def create_profile(self, profile: ProfileData):
        return await self.prfDB.insert_one(profile.model_dump())

    async def get_profiles(self, address: str):
        return await self.prfDB.find({'address', address}, {'_id': 0}).to_list(None)
