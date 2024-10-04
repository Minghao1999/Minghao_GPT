import logging

from pymongo import MongoClient

class DataModel:
    def __init__(self, mongo_uri):
        try:
            self.client = MongoClient(mongo_uri)
            self.db = self.client['DC_GPT']
            self.collection = self.db['messages']
            logging.info("successfully connected to MongoDB")
        except Exception as e:
            logging.error("unable to connect to MongoDB: {e}")

    def insert_data(self, data):

        result = self.collection.insert_one(data)
        return str(result.inserted_id)

    def get_all_data(self):
        return list(self.collection.find())

