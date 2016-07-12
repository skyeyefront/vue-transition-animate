from flask import Flask, render_template
import sys, json

reload(sys)
sys.setdefaultencoding("utf-8")

app = Flask(__name__)

@app.route('/')
@app.route('/page')
@app.route('/page/')
@app.route('/page/<path:uri>')
def index(uri=None):
    return render_template('index.html')

if __name__ == '__main__':
	app.debug = True
	app.run(host='127.0.0.1', port=5000)

