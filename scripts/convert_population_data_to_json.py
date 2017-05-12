# -*- coding: utf-8 -*-



import pandas as pd

df_pop = pd.read_csv('../../../data/population-density-3.csv-Sheet3-1.csv', low_memory=False)



file = open("../population.js", 'w')
file.write("var populations_points = [");

df = df_pop[:]

#print(df.loc[:100,['timestamp','tag-local-identifier','individual-local-identifier']])

    
for index, point in df.iterrows():
    #print(point['location-lat'])
    file.write('[\''+str(point['Year'])+'\', '+ str(point['Latitude'])+ ', '+str(point['Longitude'])+', '+str(point['Population Density'])+ '],\n')
    


file.write('];');
file.close();
