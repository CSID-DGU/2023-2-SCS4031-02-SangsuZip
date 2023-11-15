from flask import Flask, jsonify, make_response
from transformers import pipeline

app = Flask(__name__)

generator = pipeline('text-generation', model='gpt3.5')

@app.route("/")
def hello_from_root():
    return jsonify(message='Hello from root!')


@app.route("/hello")
def hello():
    return jsonify(message='Hello from path!')

@app.route('/generate_text', methods=['POST'])
def generate_text():
    data = request.get_json()
    prompt = data['prompt']
    generated_text = generator(prompt, max_length=100)[0]['generated_text']
    
    response = {'generated_text': generated_text}
    return jsonify(response)

@app.errorhandler(404)
def resource_not_found(e):
    return make_response(jsonify(error='Not found!'), 404)

