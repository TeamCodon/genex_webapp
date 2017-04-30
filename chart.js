var myChart;

function initChart(min, max, points)
{
    //console.log(points);
    const gap = (max - min)/100;
    const labels = [];
    const values = [];
    for(var i = min; i<=max; i+=gap)
    {
        labels.push(i);
        values.push(0);
    }
    for (var i=0; i<points.length;i++)
    {
        var point=points[i];
        //console.log(max);
        //console.log(point[0]);
        //console.log(Date.parse(point[0]));
        //console.log(Date.parse(point[0]));
        const index = Math.floor((Date.parse(point[0])-min)/gap)
        values[index]++;

        //break;
    }
    //console.log(labels);
    //console.log(values);
    var ctx = document.getElementById("chartCanvas");
    myChart = new Chart(ctx, {
        type: 'line',
		animation: false,
        data: {
            labels: labels,//.map(function(item){return new Date(item)}),//["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Occurrences',
                data: values,//[12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                //    'rgba(255, 99, 132, 0.2)',
                //    'rgba(54, 162, 235, 0.2)',
                //    'rgba(255, 206, 86, 0.2)',
                //    'rgba(75, 192, 192, 0.2)',
                //    'rgba(153, 102, 255, 0.2)',
                //    'rgba(255, 159, 64, 0.2)'
                //],
                borderColor: 'rgba(255,99,132,1)',
                //    'rgba(54, 162, 235, 1)',
                //    'rgba(255, 206, 86, 1)',
                //    'rgba(75, 192, 192, 1)',
                //    'rgba(153, 102, 255, 1)',
                //    'rgba(255, 159, 64, 1)'
                //],
                borderWidth: 1
            }]
        },
        options: {
            responsive:false,
			animation: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }],
                xAxes: [{
                    type: 'time',
                    time: {
                        displayFormats: {
                            'year': 'YYYY',
                        }}}],
                barPercentage: 0.05
            }
        }
    });
}


function updateChart(timeRange){
    const labels = myChart.data.labels;
    const values = [];
	console.log(labels.length);
	marker_added = false;
    for(var i=0; i<labels.length; i++ )
    {
        if(labels[i]>timeRange[0] )
		{
			if (!marker_added)
			{
				values.push(40000);
				values.push(40000);
				marker_added = true;
			}
			
		}
        else
		{
            values.push(0);
		}
    }
    myChart.data.datasets = [myChart.data.datasets[0],{
        label: '# of time',
        data: values,
		backgroundColor:'rgba(0,0,255,0.2)'
    }]
    myChart.update();
}
