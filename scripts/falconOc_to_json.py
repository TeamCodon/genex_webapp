# -*- coding: utf-8 -*-
"""
Created on Sun Apr 30 20:35:43 2017

@author: Janaka
"""

import pandas as pd

df = pd.read_csv('../data/falcon.csv', low_memory=False)
print("loaded data")


file = open("../falconOc.js", 'w')
file.write("var falconOcPoints = [");

df = df[:]

#print(df.loc[:100,['timestamp','tag-local-identifier','individual-local-identifier']])

tags = ['eventdate','decimallatitude','decimallongitude'];
    
for index, point in df.iterrows():
    #print(point['location-lat'])
    
    entry = '['
    for tag in tags:
        txt = str(point[tag]);
        if(txt=='nan'):
            entry = ""
            break;
        entry+='\''+txt+'\', '
    if(entry!=""):
        file.write(entry[:-2]+"],\n");
    


file.write('];');
file.close();

