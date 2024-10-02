from pymongo import MongoClient


class DataModel:
    def __init__(self, mongo_uri):
        # 连接到 MongoDB
        self.client = MongoClient(mongo_uri)
        self.db = self.client['DC_GPT']
        self.collection = self.db['messages']

    def insert_data(self, data):
        # 将数据插入到 MongoDB
        result = self.collection.insert_one(data)
        return str(result.inserted_id)

    def get_all_data(self):
        # 从 MongoDB 中获取所有数据
        return list(self.collection.find())
