from flask import Flask, request
from openai import OpenAI
import json
import os

app = Flask(__name__)

client = OpenAI(api_key = os.getenv("apikey"))
model = "gpt-3.5-turbo"

def generate_openai_response(question):
    response = client.chat.completions.create(
        model = model,
        messages = [
            {
                "role": "system",
                "content": "You can only answer in json format like {technique one name as key : short description about the technique as value, technique two name as key : ...}"
            },
            {
                "role": "system",
                "content": "When answering, please state the key value in English and the value value in Korean."
            },
            {
                "role": "system",
                "content": "Please focus on technologies that the author did not mention."
            },
            {
                "role": "user",
                "content": question
            }
        ]
    )

    return response.choices[0].message.content

@app.route("/", methods = ['POST'])
def openai_response():
    try:
        req = request.get_json()
        print(req)
        content = req['content']

        message = "Recommend three development-related learning techniques that this developer would like to study next. The following is what the developer posted on his blog about the study material he learned today. This developer organized the main content is as follows: " + content + ""

        response = generate_openai_response(message)

        response_body = {
            'message': response
        }

        return {
            'question': message,
            'statusCode': 200,
            'body': json.dumps(response_body)
        }
    except Exception as e:
        return {
            'statusCode': 400,
            'body': json.dumps({'args': request, 'error': str(e)})
        }