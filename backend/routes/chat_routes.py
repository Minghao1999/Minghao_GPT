from flask import Blueprint, request, jsonify, current_app
from services.chat_service import chat_with_assistant
from models.data_model import DataModel

chat_bp = Blueprint('chat', __name__)


@chat_bp.route('/post', methods=['POST', 'OPTIONS'])
def chat():
    try:
        data_model = DataModel(current_app.config['MONGO_URI'])
        data = request.json
        user_message = data.get('text')
        current_app.logger.info(f'Received message: {user_message}')

        user_data = {'text': user_message, 'sender': 'user'}
        data_model.insert_data(user_data)

        assistant_message = chat_with_assistant(user_message)

        assistant_data = {'text': assistant_message, 'sender': 'bot'}
        data_model.insert_data(assistant_data)

        return jsonify({'text': assistant_message})

    except Exception as e:
        current_app.logger.error(f'Error in /post: {str(e)}')
        return jsonify({'error': str(e)}), 500


@chat_bp.route('/message', methods=['GET'])
def get_all_chats():
    data_model = DataModel(current_app.config['MONGO_URI'])
    grouped_chats = data_model.get_all_data_grouped_by_date()

    return jsonify(grouped_chats)
