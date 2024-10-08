from collections import defaultdict
from datetime import datetime

from pymongo import MongoClient

class DataModel:
    def __init__(self, mongo_uri):
        self.client = MongoClient(mongo_uri)
        self.db = self.client['DC_GPT']
        self.collection = self.db['messages']

    def insert_data(self, data):
        data['timestamp'] = datetime.utcnow()
        result = self.collection.insert_one(data)
        return str(result.inserted_id)

    def get_all_data(self):
        return list(self.collection.find())

    def get_all_data_grouped_by_date(self):
        chats = list(self.collection.find())
        grouped_chats = defaultdict(list)

        for chat in chats:
            chat_date = chat['timestamp'].strftime('%Y-%m-%d')
            grouped_chats[chat_date].append({
                'id': str(chat['_id']),
                'text': chat['text'],
                'sender': chat['sender'],
                'timestamp': chat['timestamp'].strftime('%Y-%m-%d %H:%M:%S')
            })
        return grouped_chats

