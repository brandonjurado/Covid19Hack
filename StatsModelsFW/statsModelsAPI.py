import sys
from ModelBuilds.TestModel import test_model 

from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
	return "If you're reading this, you're in my waatteerrrsss."

@app.route("/test_model")
def tm():
	return test_model()

if __name__ == "__main__":
  app.run()
