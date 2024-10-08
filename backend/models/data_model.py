from collections import defaultdict
from datetime import datetime
import pytz
from pymongo import MongoClient

class DataModel:
    def __init__(self, mongo_uri):
        self.client = MongoClient(mongo_uri)
        self.db = self.client['DC_GPT']
        self.collection = self.db['messages']
        self.pacific_tz = pytz.timezone('America/Los_Angeles')

    def insert_data(self, data):
        utc_now = datetime.now(pytz.utc)
        data['timestamp'] = utc_now
        result = self.collection.insert_one(data)
        return str(result.inserted_id)

    def get_all_data(self):
        chats = list(self.collection.find())
        for chat in chats:
            if 'timestamp' in chat and isinstance(chat['timestamp'], datetime):
                chat['timestamp'] = chat['timestamp'].astimezone(self.pacific_tz)
        return chats

    def get_all_data_grouped_by_date(self):
        chats = list(self.collection.find())
        grouped_chats = defaultdict(list)

        for chat in chats:
            if 'timestamp' in chat and isinstance(chat['timestamp'], datetime):
                pacific_time = chat['timestamp'].astimezone(self.pacific_tz)
                chat_date = pacific_time.strftime('%Y-%m-%d')
                grouped_chats[chat_date].append({
                    'id': str(chat['_id']),
                    'text': chat.get('text', ''),
                    'sender': chat.get('sender', ''),
                    'timestamp': pacific_time.strftime('%Y-%m-%d %H:%M:%S')
                })
        return grouped_chats
