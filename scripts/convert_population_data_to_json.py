# -*- coding: utf-8 -*-



import pandas as pd
import math

df_pop = pd.read_csv('../../../data/population-density-3.csv-Sheet3-1.csv', low_memory=False)



file = open("../population.js", 'w')
file.write("var populations_points = [");

df = df_pop[:]

#print(df.loc[:100,['timestamp','tag-local-identifier','individual-local-identifier']])
labels = 'Year','Latitude','Longitude','Population Density'
    
for index, point in df.iterrows():
    #print(point['location-lat'])
    skip = False
    for l in labels:
        if math.isnan(point[l]):
            skip =True
            continue
    if not skip:
        file.write('[\''+str(point['Year'])+'\', '+ str(point['Latitude'])+ ', '+str(point['Longitude'])+', '+str(point['Population Density'])+ '],\n')
    


file.write('];');
file.close();
