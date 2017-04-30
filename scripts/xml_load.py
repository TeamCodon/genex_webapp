# -*- coding: utf-8 -*-
"""
Created on Sat Apr 29 23:02:15 2017

@author: Janaka
"""

import xml.etree.ElementTree


e = xml.etree.ElementTree.parse('../data/bold_data.xml').getroot()
entries = []
for record in e.findall('record'):
    id = record.find('record_id').text
    bin = record.find('bin_uri').text
    lat, lon = "NULL", "NULL"
    try:
        coordinates = record.find('collection_event').find('coordinates');
        lat,lon = coordinates.find('lat').text,coordinates.find('lon').text
        code = record.find('sequences').find('sequence').find("nucleotides").text;
    except:
        print("Error");
    entries.append([id,bin, lat, lon, code]);
                  
                  