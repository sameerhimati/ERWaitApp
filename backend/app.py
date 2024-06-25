from flask import Flask
from flask_cors import CORS
from config import config
from models import db, HospitalWaitTimes
from routes import main

def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    db.init_app(app)
    CORS(app)

    app.register_blueprint(main)

    return app

if __name__ == '__main__':
    app = create_app('development')
    app.run(debug=True, port=5000)
