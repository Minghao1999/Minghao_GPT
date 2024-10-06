from pymongo import MongoClient

class DataModel:
    def __init__(self, mongo_uri):
        self.client = MongoClient(mongo_uri)
        self.db = self.client['DC_GPT']
        self.collection = self.db['messages']

    def insert_data(self, data):

        result = self.collection.insert_one(data)
        return str(result.inserted_id)

    def get_all_data(self):
        return list(self.collection.find())

