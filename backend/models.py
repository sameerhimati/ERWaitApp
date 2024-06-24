from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class HospitalWaitTime(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hospital_name = db.Column(db.String(255), nullable=False)
    hospital_address = db.Column(db.String(255), nullable=False)
    wait_time = db.Column(db.String(255), nullable=False)
    extracted_at = db.Column(db.DateTime, default=db.func.current_timestamp())
