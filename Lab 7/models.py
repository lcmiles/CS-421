from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstname=db.Column(db.String(50), unique=False, nullable=False)
    lastname=db.Column(db.String(50), unique=False, nullable=False)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)


def create_user(email, username, password):
    new_user = User(email=email, username=username, password=password)
    db.session.add(new_user)
    db.session.commit()


def get_user_by_email(email):
    return User.query.filter_by(email=email).first()


def get_user_by_username(username):
    return User.query.filter_by(username=username).first()


def get_user_by_id(user_id):
    return User.query.get(user_id)


def init_db():
    db.create_all()


def __repr__(self):
    return f"User('{self.username}', '{self.email}', '{self.profile_picture}')"


def __repr__(self):
    return f"Post('{self.content}', '{self.timestamp}')"
