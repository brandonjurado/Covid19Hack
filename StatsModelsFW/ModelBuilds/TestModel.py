import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
import matplotlib.pyplot as plt
import seaborn as sns
sns.set_context('paper')
import random
import os

def test_model():
    path = os.path.abspath(os.getcwd())

    #always use 'path + ModelBuilds\\your_file_here.wat'
    #the __file__ hook in is one level higher which is why you have to add
    #ModelBuilds even though we are in this directory
    data = pd.read_csv(path + '\\ModelBuilds\\2019_nCoV_data.csv')
    
    data['Last Update'] = pd.to_datetime(data['Last Update'])
    data['Day'] = data['Last Update'].apply(lambda x:x.day)
    data['Hour'] = data['Last Update'].apply(lambda x:x.hour)
    latest_data = data[data['Day'] == 30]

    return str('Globally Confirmed Cases: ' + str(latest_data['Confirmed'].sum()))