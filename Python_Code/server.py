from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder="static")

# Route to serve static files (images) from the 'static/images/' directory
@app.route('/static/images/<path:filename>')
def serve_static(filename):
    # Ensure that the static directory exists
    image_dir = os.path.join(app.static_folder, 'images')
    return send_from_directory(image_dir, filename)

if __name__ == "__main__":
    # Use the PORT environment variable provided by Render (or fallback to 5000 if not set)
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
