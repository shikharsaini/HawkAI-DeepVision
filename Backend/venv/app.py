from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from API.HelloApiHandler import HelloApiHandler
from API.Image import mask_image
app = Flask(__name__, static_url_path='', static_folder='Backend/build')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

api.add_resource(HelloApiHandler, '/flask/hello')
api.add_resource(mask_image, '/Mask')
#api.add_resource(ClickHandler, '/check')