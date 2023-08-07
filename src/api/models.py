from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    name = db.Column(db.String(250), unique=False, nullable=False)
    dob = db.Column(db.String(100), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, default=False)
    appointments = db.relationship('Appointment', backref='user', lazy=True)

    def __init__(self, email, password, name, dob):
        self.email = email
        self.password = password
        self.name = name 
        self.dob =dob

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "dob": self.dob,
            # do not serialize the password, its a security breach
        }
    
class Doctor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=False, nullable=False)
    specialty = db.Column(db.String(250), unique=False, nullable=False)
    price = db.Column(db.Float, unique=False, nullable=True)
    picture = db.Column(db.String(250), unique=False, nullable=True)
    appointments = db.relationship('Appointment', backref='doctor', lazy=True)

    def __init__(self, name, specialty):
        self.name = name
        self.specialty = specialty

    def __repr__(self):
        return f'<Doctor {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "specialty": self.specialty,
            "price": self.price,
            "picture": self.picture,
            # do not serialize the password, its a security breach
        }
    
class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    doctor_id = db.Column(db.Integer, db.ForeignKey("doctor.id"), nullable=False)
    time = db.Column(db.DateTime, unique=False, nullable=False)
    user_comment = db.Column(db.String(250), unique=False, nullable=True)
    report = db.relationship('Report', backref='appointment', lazy=True, uselist=False)
    appointment_doctor= db.relationship("Doctor")
    appointment_user= db.relationship("User")
    
    def __init__(self, user_id, doctor_id, doctor, user, time):
        self.user_id = user_id
        self.doctor_id = doctor_id
        self.doctor= doctor
        self.user= user
        self.time= time

    def __repr__(self):
        return f'<Appointment {self.user_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "time": self.time,
            "doctor": self.doctor.serialize(),
            "user": self.user.serialize(),
            # do not serialize the password, its a security breach
        }
    
class Report(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    appointment_id = db.Column(db.Integer, db.ForeignKey("appointment.id"), nullable=False)
    time = db.Column(db.DateTime, unique=False, nullable=False)
    doctor_comment = db.Column(db.String(250), unique=False, nullable=False)
    height = db.Column(db.Float, unique=False, nullable=True)
    weight = db.Column(db.Float, unique=False, nullable=True)
    blood_pressure = db.Column(db.String(250), unique=False, nullable=True)
    vo2_max = db.Column(db.Float, unique=False, nullable=True)
    cholesterol = db.Column(db.Float, unique=False, nullable=True)
    appointments = db.relationship("Appointment")
    

    def __init__(self, appointment_id, date, appointments, doctor_comment):
        self.appointment_id = appointment_id
        self.date = date
        self.appointments = appointments
        self.doctor_comment= doctor_comment

    def __repr__(self):
        return f'<Report {self.appointment_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "appointment_id": self.appointment_id,
            "doctor_comment": self.doctor_comment,
            "appointments": self.appointments.serialize(),
            # do not serialize the password, its a security breach
        }