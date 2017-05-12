/**
 * Created by Vindula on 2017-04-29.
 */
var colour_array =['red','yellow','orange','green'];
var map = L.map('map').setView([37.391942, -6.557898], 2);
var tiles = googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

for(i=0; i<falconGenePoints.length;i++){
    L.circle([falconGenePoints[i][1], falconGenePoints[i][2]], {
        radius: falconGenePoints[i][3]*1000,
        fillColor:colour_array[falconGenePoints[i][4]],
        opacity:0.5,
        color:colour_array[falconGenePoints[i][4]]

    }).addTo(map);
}

