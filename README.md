# Covid19Hack
===
Earth Hack 2020

# Building & Running
===
```
cd  backend
npm install
npm start
# open your browser and go to https://localhost:3000
```
# Starting the Stats/ML Models Frame Work:
===
```
cd StatsModelsFW
pip install -r requirements.txt
python statsModelsAPI.py
# open your browser and go to https://localhost:5000
```
Build all of your models in BuildModels as separate python files
Then in statsModelsAPI.py
- import the new function as `from ModelBuilds.my_file import my_function`
- define a new route with `@app.route("/endpoint")`  
- have that route define a function that simply returns `my_function`

To test the homepage will automatically launch and /test_model will run through basic functionality and return a statistic.
AWS deployment instructions to come soon.