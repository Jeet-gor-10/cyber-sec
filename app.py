from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/greet', methods=['GET'])
def greet():
    return jsonify({"message": "Hello, Welcome to the Flask API!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)  # Listen on all network interfaces
