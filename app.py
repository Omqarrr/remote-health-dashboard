from flask import Flask,redirect,render_template,url_for, request, flash
from flask_sqlalchemy import SQLAlchemy
import os, smtplib

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(16)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///remotehealthplus.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

app.config["EMAIL"] = os.getenv("EMAIL")
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

def send_mail(recipient, subject, body):
	FROM = app.config["EMAIL"]
	TO = recipient if isinstance(recipient, list) else [recipient]
	SUBJECT = subject
	TEXT = body + "\n\nThanks & Regards,\nTeam RemoteHealth+"
	message = """From: %s\nTo: %s\nSubject: %s\n\n%s
	""" % (
        FROM,
        ", ".join(TO),
        SUBJECT,
        TEXT,
    )
	try:
		server = smtplib.SMTP("smtp.gmail.com", 587)
		server.ehlo()
		server.starttls()
		server.login(app.config["EMAIL"], app.config["SECRET_KEY"])
		server.sendmail(FROM, TO, message)
		server.close()
	except:
		flash("Check your internet connection", "error")
		return redirect(url_for("home"))

class Doctors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(60), unique=True, nullable=False)
    phone = db.Column(db.String(15), unique=True, nullable=False)
    clinic_name = db.Column(db.String(100), nullable=False)
    specialization = db.Column(db.String(50), nullable=False)
    availability = db.Column(db.String(20), nullable=False)
    bio = db.Column(db.String(250))

    def __repr__(self):
        return "<Doctor %r>" % self.full_name

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/symptomsInput")
def symptomsInput():
    return render_template("symptomsInput.html")

@app.route("/doctorSignup")
def doctorSignup():
	doctors = Doctors.query.all()
	return render_template("doctorSignup.html",doctors=doctors)

@app.route("/doctor_signup", methods=['POST'])
def doctor_signup():
    if request.method == 'POST':
        full_name = request.form['full_name']
        email = request.form['email']
        phone = request.form['phone']
        clinic_name = request.form['clinic_name']
        specialization = request.form['specialization']
        availability = request.form['availability']
        bio = request.form['bio']

        email_check = Doctors.query.filter_by(email=email).first()
        if not email_check:
            phone_check = Doctors.query.filter_by(phone=phone).first()
            if not phone_check:
                doctor = Doctors(
                    full_name=full_name,
                    email=email,
                    phone=phone,
                    clinic_name=clinic_name,
                    specialization=specialization,
                    availability=availability,
                    bio=bio
                )
                db.session.add(doctor)
                db.session.commit()

                send_mail(
                    email,
                    "Doctor Signup Confirmation",
                    f"Hi {full_name},\nThank you for signing up as a doctor on our platform! "
                    "We appreciate your willingness to support our patients. "
                    "You will receive further details about your registration soon."
                )

                flash("Signup successful", "success")
                return redirect(url_for("doctorSignup"))
            else:
                flash("Phone Number already in use", "error")
                return redirect(url_for("doctorSignup"))
        else:
            flash("Email ID already in use", "error")
            return redirect(url_for("doctorSignup"))

if __name__ == '__main__':
	with app.app_context():
		db.create_all()
	app.run(debug=True)