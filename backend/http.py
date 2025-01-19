from typing import Union

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route('/upload_audio', methods=['POST'])
def upload_audio():
    request.files.get('file').save("b.mp3", buffer_size=16384)
    return 'OK'

if __name__ == '__main__':
    app.run()