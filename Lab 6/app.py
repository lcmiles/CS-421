from flask import Flask, render_template, request, redirect, url_for
import re
app = Flask(__name__)

def check_password_strength(password):
    """Checks the strength of a password and returns all failure reasons."""
    reasons = []
    if len(password) < 8:
        reasons.append("Password must be at least 8 characters long.")
    if not re.search(r"[a-z]", password):
        reasons.append("Password must contain at least one lowercase letter.")
    if not re.search(r"[A-Z]", password):
        reasons.append("Password must contain at least one uppercase letter.")
    if not password[-1].isnumeric():
        reasons.append("Password must end in a number.")
    if not reasons:
        return ["Strong password!"]
    else:
        return reasons

@app.route("/", methods=["GET", "POST"])
def index():
    """Renders the main page."""
    return render_template("index.html")

@app.route("/report", methods=["POST"])
def report():
    """Renders the report page with the password strength results."""
    password = request.form["password"]
    result = check_password_strength(password)
    return render_template("report.html", result=result)

if __name__ == "__main__":
    app.run(debug=True)
 