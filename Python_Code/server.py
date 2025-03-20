from flask import Flask, send_from_directory
import os

app = Flask(__name__)

# Define the folder where images are stored
IMAGE_FOLDER = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'static', 'images')

@app.route('/images/<filename>')
def serve_image(filename):
    return send_from_directory(IMAGE_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
