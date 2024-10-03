from flask import Blueprint, request, jsonify, current_app
from services.chat_service import chat_with_assistant
from models.data_model import DataModel

chat_bp = Blueprint('chat', __name__)


@chat_bp.route('/post', methods=['POST'])
def chat():
    try:
        data_model = DataModel(current_app.config['MONGO_URI'])
        data = request.json
        user_message = data.get('text')
        current_app.logger.info(f'Received message: {user_message}')

    # Store user message in MongoDB
        user_data = {'text': user_message, 'sender': 'user'}
        data_model.insert_data(user_data)

    # Get assistant's reply
        assistant_message = chat_with_assistant(user_message)

    # Store assistant reply in MongoDB
        assistant_data = {'text': assistant_message, 'sender': 'bot'}
        data_model.insert_data(assistant_data)

        return jsonify({'reply': assistant_message})

    except Exception as e:
        current_app.logger.error(f'Error in /post: {str(e)}')
        return jsonify({'error': str(e)}), 500


@chat_bp.route('/get', methods=['GET'])
def get_all_chats():
    data_model = DataModel(current_app.config['MONGO_URI'])
    chats = data_model.get_all_data()
    chat_list = []
    for chat in chats:
        chat_list.append({'id': str(chat['_id']), 'text': chat['text'], 'sender': chat['sender']})

    return jsonify(chat_list)