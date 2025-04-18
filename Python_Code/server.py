from flask import Flask, send_from_directory
from flask_cors import CORS  # Import CORS to handle cross-origin requests
import os

app = Flask(__name__, static_folder="static")

# Enable CORS for all routes
CORS(app)

@app.route('/static/images/<path:filename>')
def serve_static(filename):
    image_dir = os.path.join(app.static_folder, 'images')
    return send_from_directory(image_dir, filename)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)  # ✅ bind to 0.0.0.0
