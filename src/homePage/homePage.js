window.onload = function() {
//  Highcharts.chart('chart-wrap', {
//  chart: {
//      type: 'spline'
//  },
//  title: {
//      text: ''
//  },
//  subtitle: {
//      text: ''
//  },
//  xAxis: {
//  	type:"datetime",
//      allowDecimals: true,
//      labels: {
//          formatter: function () {
//              return this.value; // clean, unformatted number for year
//          }
//      }
//  },
//  yAxis: {
//      title: {
//          text: ''
//      },
//      labels: {
//          formatter: function () {
//              return this.value / 1000 + 'k';
//          }
//      }
//  },
//  //点点
//  legend: {
//  	enabled: false
//  },
//	//  框架的名字
//  credits: {
//      enabled: false
//  },
//  tooltip: {
//      pointFormat: '{point.y:,.0f}元/克<br/>'
//  },
//  plotOptions: {
//      area: {
//      	pointInterval: 3600000, // one hour
//          pointStart: Date.UTC(2017, 2, 18, 0, 0, 0),
//         
//          marker: {
//              enabled: false,
//              symbol: 'circle',
//              radius: 2,
//              states: {
//                  hover: {
//                      enabled: true
//                  }
//              }
//          }
//      }
//  },
//  series: [{
//      name: ' ', 
//      data: [6, 11, 32, 110, 235, 369, 640,
//           1365, 15468, 20434, 24126]
//  }]
//});
	Highcharts.chart('chart-wrap', {
        chart: {
            type: 'spline'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            min: 0,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        tooltip: {
            valueSuffix: ' m/s'
        },
        plotOptions: {
            spline: {
                lineWidth: 4,
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 3600000, // one hour
                pointStart: Date.UTC(2009, 9, 6)
            }
        },
        series: [{
            name: 'Hestavoll',
            data: [4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 7.4, 6.9, 7.1,
                   7.9, 7.9]
        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
};