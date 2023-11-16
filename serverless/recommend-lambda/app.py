from flask import Flask
import openai

app = Flask(__name__)  

@app.route("/")  
def hello():
    return "Hello, World!"