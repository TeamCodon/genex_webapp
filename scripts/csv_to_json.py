# -*- coding: utf-8 -*-
"""
Created on Sun Apr 30 10:46:26 2017

@author: Janaka
"""


import pandas as pd

df = pd.read_csv('../data/White Stork Bulgaria.csv', low_memory=False)
print("loaded data")


file = open("../birds.js", 'w')
file.write("var birdPoints = [");

df = df[:]

#print(df.loc[:100,['timestamp','tag-local-identifier','individual-local-identifier']])

    
for index, point in df.iterrows():
    #print(point['location-lat'])
    file.write('[\''+str(point['timestamp'])+'\', '+ str(point['location-lat'])+ ', '+str(point['location-long'])+ '],\n')
    

n
file.write('];');
file.close();

