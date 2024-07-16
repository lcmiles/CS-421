from flask import Flask, render_template, request, redirect, url_for, session, flash

from flask_cors import CORS

from models import *

from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

app.config["SECRET_KEY"] = "your_secret_key"

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"

CORS(app)

db.init_app(app)

@app.route("/", methods=["GET", "POST"])

def index():

    if "user_id" not in session:

        return redirect(url_for("login"))

    user = get_user_by_id(session["user_id"])

    if request.method == "POST":

        user_id = session["user_id"]

    return render_template("secretPage.html")

@app.route("/register", methods=["GET", "POST"])

def register():

    if request.method == "POST":

        firstname = request.form.get("firstname")

        lastname = request.form.get("lastname")

        username = request.form.get("username")

        email = request.form.get("email")

        password = request.form.get("password")

        existing_user = User.query.filter_by(username=username).first()

        if existing_user:

            flash("Username already taken. Please choose a different username.", "error")

            return redirect(url_for("register"))

        new_user = User(firstname=firstname, lastname=lastname, username=username, email=email, password=generate_password_hash(password))

        db.session.add(new_user)

        db.session.commit()

        return redirect(url_for("thankyou"))

    return render_template("register.html")

@app.route("/login", methods=["GET", "POST"])

def login():

    if request.method == "POST":

        email = request.form.get("email")

        password = request.form.get("password")

        user = get_user_by_email(email)

        if user:

            if check_password_hash(user.password, password):

                session["user_id"] = user.id

                session["username"] = user.username

                return redirect(url_for("index"))

            else:

                flash("Incorrect password. Please try again.", "error")

        else:

            flash("Unrecognized email. Please try again.", "error")

    return render_template("login.html")

@app.route("/logout", methods=["POST"])

def logout():

    session.pop("user_id", None)

    session.pop("username", None)

    session.pop("profile_picture", None)

    return redirect(url_for("login"))

@app.route("/thankyou", methods=["GET", "POST"])

def thankyou():
    return render_template("thankyou.html")

if __name__ == "__main__":

    with app.app_context():

        db.create_all()

    app.run(debug=True)