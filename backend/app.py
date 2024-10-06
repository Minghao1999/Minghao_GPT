from flask import Flask
from config import Config
from routes.chat_routes import chat_bp
import logging
from flask_cors import CORS

app = Flask(__name__)
app.logger.setLevel(logging.INFO)
CORS(app, resources={r"/get": {"origins": "http://localhost:5173"}})
app.config.from_object(Config)

# Register blueprints
app.register_blueprint(chat_bp)

if __name__ == '__main__':
    app.run(debug=True)
