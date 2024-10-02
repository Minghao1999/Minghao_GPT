from flask import Flask
from config import Config
from routes.chat_routes import chat_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config.from_object(Config)

# Register blueprints
app.register_blueprint(chat_bp)

if __name__ == '__main__':
    app.run(debug=True)
