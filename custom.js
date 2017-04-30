/**
 * Created by Janaka on 2017-04-29.
 */
var map = L.map('map').setView([37.391942, -6.557898], 1);
var tiles = googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);



var heatLayer = [null]
var dPoints = [[],[],[],[],[],[],[],[]];
var drawingPoints = falconOcPoints;
for (var i = 0; i < falconOcPoints.length;i++)
{
	dPoints[falconOcPoints[i][3]].push([falconOcPoints[i][0],falconOcPoints[i][1], falconOcPoints[i][2]]);
}
console.log(dPoints);
var heatPoints = [[],[],[],[],[],[],[],[]];
function setPointsForTime(timeRange){
	for (var i = 0; i < 8; i++)
	{
     heatPoints[i] = dPoints[i]
        .filter(function(point){
            const t = new Date(point[0]);
            return t>timeRange[0]&&t<timeRange[1];
        })
        .map(function (p) {
            return [p[1], p[2],10000]; });
	}
    if(heatLayer[0])
    {
		for (var i = 0; i < 8; i++)
			map.removeLayer(heatLayer[i]);

    }
	heatLayer.push( L.heatLayer(heatPoints[0], {
        radius:4,
        blur:10,
		gradient: {
			1: '#edf8fb',
			0.8: '#b2e2e2',
			0.6: '#66c2a4',
			0.4: '#2ca25f',
			0.2: '#006d2c'
		}
    }).addTo(map));
	heatLayer.push( L.heatLayer(heatPoints[3], {
        radius:4,
        blur:10,
		gradient: {
			1: '#edf8fb',
			0.8: '#b3cde3',
			0.6: '#8c96c6',
			0.4: '#8856a7',
			0.2: '#810f7c'}
    }).addTo(map));

    updateChart(timeRange);
}

min_date =  Date.parse('9/6/1985 8:19 PM'); // Date.parse('1929-12-16 09:00:00.000');
max_date = Date.parse('11/11/17 11:07 PM');
const gap = 1000*60*60*24*7* 4;//*12*2; //(max_date-min_date)/100//1000*60*60*24*7*4*12;
const play_gap = gap/2;
var playing = false;
var currentValue = min_date;
$( function() {
    $( "#slider" ).slider({
        max: max_date,
        min: min_date,
        value:min_date,
        change: function( event, ui ) {
            var timeRange = [new Date(ui.value-gap/2), new Date(ui.value+gap/2)]
            setPointsForTime(timeRange);
            currentValue = ui.value;
        }
    });
} );

function play(){
    playing = true;
}

function pause(){
    playing = false;
}

function reset(){
    currentValue = min_date;
    playing = false;
    $( "#slider" ).slider("value", currentValue );
}

function playMethod(){
    if(playing && currentValue<=max_date)
    {
        currentValue+= play_gap;
        $( "#slider" ).slider("value", currentValue );
        updateChart([currentValue-gap/2,currentValue+gap/2]);
    }
    if(playing && currentValue>max_date)
    {
        pause();
    }
    setTimeout(playMethod, 50);

}
playMethod();
initChart(min_date, max_date, drawingPoints);

L.marker([51.5, -0.09]).addTo(map);
L.circle([51.5, -0.09], {
    radius: 500000,
    fillColor:'red',
    opacity:0.5,
    color:'red'

}).addTo(map);
