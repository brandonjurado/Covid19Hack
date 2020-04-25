# Covid19Hack

### Earth Hack 2020 - [Project Name]

Description of our project.

## Building & Running

```
cd  backend
npm install
npm start
# open your browser and go to https://localhost:3000
```
# Starting the Stats/ML Models Frame Work:
```
cd StatsModelsFW
pip install -r requirements.txt
python statsModelsAPI.py
=======
$ cd  backend
$ npm install
$ npm start
# open your browser and go to https://localhost:3000
```

### Starting the Stats/ML Models Frame Work
```
$ cd StatsModelsFW
$ pip install -r requirements.txt
$ python statsModelsAPI.py
# open your browser and go to https://localhost:5000
```
Build all of your models in BuildModels as separate python files
Then in statsModelsAPI.py
- import the new function as `from ModelBuilds.my_file import my_function`
- define a new route with `@app.route("/endpoint")`  
- have that route define a function that simply returns `my_function`

To test the homepage will automatically launch and /test_model will run through basic functionality and return a statistic.
AWS deployment instructions to come soon.

## Contributors

[Armando Soriano](https://github.com/ArmSoriano)

[Brandon Jurado](https://github.com/brandonjurado)

[Michael Osei](https://github.com/mike168m)

[Preston Ward](https://github.com/psward)

## Libraries used

[react-css-grid](https://github.com/jxnblk/react-css-grid)

[styled-components](https://styled-components.com/)

[react-flexbox-grid](https://roylee0704.github.io/react-flexbox-grid/)
