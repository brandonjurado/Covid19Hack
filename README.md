# Covid19Hack

### Earth Hack 2020 - [Project Name]

Description of our project.

## Building & Running
```
$ cd  public/javascripts
$ npm install
$ npm run-script build
$ cd ..
$ npm install
$ npm start
# open your browser and go to https://localhost:3000
```

## Setting up the Stats/ML Models API and user store:
```
cd StatsModelsFW\flaskapp
Windows: venv\Scripts\activate.bat
Mac/Linux: source something, don't know
npm install -g serverless
npm install --save-dev serverless-dynamodb-local
npm install serverless-offline --save-dev
sls dynamodb install --localPath ./bin
sls dynamodb install
```

### Starting the Stats/ML Models Frame Work
To start a local dev instance:
First, download and setup docker.
```
$ cd StatsModelsFW/flaskapp
$ sls wsgi serve
$ sls dynamodb start
```
Build all of your models in StatsModelsFW/flaskapp/BuildModels as separate python files
Then in statsModelsAPI.py
- import the new function as `from ModelBuilds.my_file import my_function`
- define a new route with `@app.route("/endpoint")`  
- have that route define a function that simply returns `my_function`

To test the endpoints, you all have a received a link to postman.  There is a collection setup demonstrating the user store functionality as well as a test model that returns an image.

### Deploying with AWS Lambdas and DynamoDB
If you have installed any packages to the venv then you need to run
```
cd StatsModelsFW/flaskapp
pip freeze > requirements.txt
```
After that you simply run sls deploy, and you're done!
The first time can take a while btw.

## Contributors

[Armando Soriano](https://github.com/ArmSoriano)

[Brandon Jurado](https://github.com/brandonjurado)

[Michael Osei](https://github.com/mike168m)

[Preston Ward](https://github.com/psward)

## Libraries used

[react-css-grid](https://github.com/jxnblk/react-css-grid)

[styled-components](https://styled-components.com/)

[react-flexbox-grid](https://roylee0704.github.io/react-flexbox-grid/)
