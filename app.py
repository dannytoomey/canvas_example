from flask import Flask, flash, render_template, request, jsonify, Response, redirect, url_for
from flask_cache_buster import CacheBuster

# configure cachebuster 
config = {
     'extensions': ['.js', '.css', '.csv'],
     'hash_size': 10
}
# configure an extension used to bust caches
# this ensures that the app uses the most up-to-date resources in 
# the static folder if they have changed
cache_buster = CacheBuster(config=config)

app = Flask(__name__, template_folder='./templates', static_folder='./static')

cache_buster.register_cache_buster(app)

@app.route('/')
def home():
    return render_template('home.html')

# to run this in the browser