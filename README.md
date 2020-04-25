# Covid19Hack

### Earth Hack 2020 - [Project Name]

Description of our project.

## Building & Running
```
$ cd javascripts
$ npm install
$ npm run-script build
$ cd ..
$ npm install
$ npm start
# open your browser and go to https://localhost:3000
```
## Easy Lambdas:
#### This has been set up to act a versatile way to quickly develop and deploy AWS lambda functions so that we can quickly send information between services, and has the ability to hook into DynamoDB to store information to S3.
##### Setting up and deploying:
```
mkdir name
cd name
npm init -f
npm install --save-dev serverless-wsgi serverless-python-requirements
```
Inside StatsModelsFW grab either the app.py and serverless.yml file or their \_db equivalents and put them in your directory, making sure to remove \_db if you use them. Also grab and copy the gitignore.
Then:
```
virtualenv venv --python=python3
venv\Scripts\activate.bat (or the unix equivalent)
pip install flask
pip freeze > requirements.txt
```
At this point, if you don't need the database, you are done and can run:
`sls deploy`
This will automatically deploy to AWS and set up everything you need.

If you do want to keep information:
```
pip install boto3
pip freeze > requirements.txt
sls deploy (done)
```
You will now be able to store information in DynamoDB, a NoSQL solution.

#### Setting up local:
If you need faster turn around time for quick development, you can set up locally, however this can make your functions to large.  Make sure you save a copy of the ready to deploy version before continuing.
Once you have your copy, take a replace the plugins and custom decorators in your .yml:
```
plugins:
  - serverless-python-requirements
  - serverless-wsgi
  - serverless-dynamodb-local

custom:
  tableName: 'users-table-${self:provider.stage}'
  wsgi:
    app: app.app
    packRequirements: false
  pythonRequirements:
    dockerizePip: non-linux
  dynamodb:
    stages:
      - ${self:provider.stage}
```
and in your app.py:
'''
import os
import boto3

from flask import Flask, jsonify, request
app = Flask(__name__)

USERS_TABLE = os.environ['USERS_TABLE']
IS_OFFLINE = os.environ.get('IS_OFFLINE')

if IS_OFFLINE:
    client = boto3.client(
        'dynamodb',
        region_name='localhost',
        endpoint_url='http://localhost:8000'
    )
else:
    client = boto3.client('dynamodb')

@app.route("/")
def hello():
... rest of application code ...
'''
Finally:
```
npm install --save serverless-dynamodb-local
sls dynamodb install
sls dynamodb start (in one terminal)
sls wsgi serve (in another)
```
## Contributors

[Armando Soriano](https://github.com/ArmSoriano)

[Brandon Jurado](https://github.com/brandonjurado)

[Michael Osei](https://github.com/mike168m)

[Preston Ward](https://github.com/psward)

## Libraries used

[react-css-grid](https://github.com/jxnblk/react-css-grid)

[styled-components](https://styled-components.com/)

[react-flexbox-grid](https://roylee0704.github.io/react-flexbox-grid/)
