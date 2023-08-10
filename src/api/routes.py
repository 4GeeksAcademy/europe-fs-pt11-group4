"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Doctor, Report, Appointment
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def create_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    name = request.json.get("name", None)
    dob = request.json.get("dob", None)

    if not email or not password or not name or not dob:
        return jsonify({ "msg": "No password or email or name or dob present." }), 400
    
    new_user = User(email=email, password=password, name= name, dob=dob)
    db.session.add(new_user)
    db.session.commit()

    response_body = {
        "msg": "User created"
    }
    return jsonify(response_body), 201

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # Query your database for email and password
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad email or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id, "email": user.email, "name": user.name, "dob": user.dob })

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    return jsonify({"id": user.id, "email": user.email, }), 200

@api.route('/report', methods=['GET'])
def handle_get_all_report():
    all_report = Report.query.all()
    print(all_report)
    result = list(map(lambda item: item.serialize(), all_report))
    return jsonify(result), 200

@api.route('/report/<int:id>', methods=['GET'])
def handle_get_one_report(id):
    report = Report.query.get(id)
    if Report:
        return jsonify (report.serialize()), 200
    else:
        return jsonify ({"message" : "Report not found"}), 404
      
@api.route('/doctors', methods=['GET'])
def handle_doctors():

    doctors = Doctor.query.all()
    all_doctors = list(map(lambda x: x.serialize(), doctors))

    return jsonify(all_doctors), 200

@api.route('/booking', methods=['POST'])
def create_appointment():
    user_id = request.json.get("user_id", None)
    doctor_id = request.json.get("doctor_id", None)
    time = request.json.get("time", None)
    user_comment = request.json.get("user_comment", None)

    if not user_id or not doctor_id or not time or not user_comment:
        return jsonify({ "msg": "No doctor_id or user_id or time or user_comment present." }), 400
    
    new_appointment = Appointment(user_id=user_id, doctor_id=int(doctor_id), time= time, user_comment=user_comment)
    db.session.add(new_appointment)
    db.session.commit()

    response_body = {
        "msg": "Appointment created"
    }
    return jsonify(response_body), 201