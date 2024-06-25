from flask import Blueprint, jsonify
from models import HospitalWaitTimes

main = Blueprint('main', __name__)

@main.route('/api/hospitals', methods=['GET'])
def get_hospitals():
    hospitals = HospitalWaitTimes.query.all()
    hospital_list = [
        {
            'id': hospital.id,
            'name': hospital.hospital_name,
            'address': hospital.hospital_address,
            'wait_time': hospital.wait_time,
            'extracted_at': hospital.extracted_at
        } for hospital in hospitals
    ]
    return jsonify(hospital_list)
