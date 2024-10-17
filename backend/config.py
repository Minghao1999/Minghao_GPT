import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
    MONGO_URI = os.getenv('MONGO_URI')
    DEEPLAKE_API_KEY = os.getenv('DEEPLAKE_API_KEY')
    DEEPLAKE_DB_PATH = os.getenv('DEEPLAKE_DB_PATH')
