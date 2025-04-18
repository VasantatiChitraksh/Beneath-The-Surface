from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder="static")

@app.route('/static/images/<path:filename>')
def serve_static(filename):
    image_dir = os.path.join(app.static_folder, 'images')
    return send_from_directory(image_dir, filename)
