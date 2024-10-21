from flask import Flask, send_from_directory
from config import Config
from routes.chat_routes import chat_bp
import os
from flask_cors import CORS

app = Flask(__name__, static_folder='dist', static_url_path='/')

CORS(app, resources={r"/*": {
    "origins": "*",
    "methods": ["GET", "POST", "OPTIONS"],
    "allow_headers": ["Content-Type", "Authorization"]
}})
app.config.from_object(Config)

# Register blueprints
app.register_blueprint(chat_bp)

@app.route('/')
def serve_frontend():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001))
    app.run(host='0.0.0.0', port=port)
