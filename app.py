from flask import Flask, request, url_for, render_template, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
ENV = 'prod'

if ENV == 'dev':
    app.debug = true
    app.config['SQLALCHEMY_DATABASE_URI'] = ''
else:
    app.debug = False
    app.config['SQLALCHEMY_DATABASE_URI'] = ''

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()