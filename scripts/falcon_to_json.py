# -*- coding: utf-8 -*-
"""
Created on Sun Apr 30 20:10:31 2017

@author: Janaka
"""

# -*- coding: utf-8 -*-
"""
Created on Sun Apr 30 17:37:58 2017

@author: Janaka
"""

# -*- coding: utf-8 -*-
"""
Created on Sun Apr 30 10:46:26 2017

@author: Janaka
"""


import pandas as pd

df = pd.read_csv('../data/falcon-tracked.csv', low_memory=False)
print("loaded data")


file = open("../falcon.js", 'w')
file.write("var falconPoints = [");

df = df[:]

#print(df.loc[:100,['timestamp','tag-local-identifier','individual-local-identifier']])

    
for index, point in df.iterrows():
    #print(point['location-lat'])
    file.write('[\''+str(point['timestamp'])+'\', '+ str(point['location-lat'])+ ', '+str(point['location-long'])+ '],\n')
    


file.write('];');
file.close();

