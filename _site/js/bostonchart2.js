var dom = document.getElementById("chart2");
var myChart = echarts.init(dom);
var app = {};
option = null;

var exposureIcons = {
    'High_exposure': 'css/images/high.svg',
    'Medium_exposure': 'css/images/medium.svg',
    'Low_exposure': 'css/images/low.svg'
};

var seriesLabel = {
    normal: {
        show: true,
        textBorderColor: '#333',
        textBorderWidth: 2
    }
}

option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Probable Asthma', 'Chronic Bronchitis', 'Current Asthma']
    },
    grid: {
        left:65
    },

    xAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    yAxis: {
        type: 'category',
        inverse:true,
        data: ['__High__exposure', '_Medium_exposure', '__Low___exposure'],
        axisLabel: {
          interval:0,
          formatter: function (params) {
            return params.replace(/.{8}(?!$)/g, (a) => a + '\n')

            },
            margin: 8,
            rich: {
                value: {
                    lineHeight: 30,
                    align: 'center'
                },
                h: {
                    height: 40,
                    align: 'center',
                    backgroundColor: {
                        image: exposureIcons.High_exposure
                    }
                },
                Cloudy: {
                    height: 40,
                    align: 'center',
                    backgroundColor: {
                        image: exposureIcons.Medium_exposure
                    }
                },
                Showers: {
                    height: 40,
                    align: 'center',
                    backgroundColor: {
                        image: exposureIcons.Low_exposure
                    }
                }
            }
        }
    },
    series: [
        {
            name: 'Probable Asthma',
            type: 'bar',
            data: [7.3, 3.4, 3.3],
            label: seriesLabel,
            itemStyle:{
              normal:{
                color:'#f05f00',
              }
            },
            markPoint: {
                symbolSize: 0,
                symbolOffset: [0, '50%'],
                label: {
                   // normal: {
                   //      formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                   //      backgroundColor: 'rgb(242,242,242)',
                   //      borderColor: '#fff',
                   //      borderWidth: 0,
                   //      borderRadius: 4,
                   //      padding: [4, 10],
                   //      lineHeight: 26,
                   //      // shadowBlur: 5,
                   //      // shadowColor: '#000',
                   //      // shadowOffsetX: 0,
                   //      // shadowOffsetY: 1,
                   //      position: 'right',
                   //      distance: 100,
                   //      rich: {
                   //          a: {
                   //              align: 'center',
                   //              color: 'black',
                   //              fontSize: 18,
                   //              // textShadowBlur: 2,
                   //              // textShadowColor: '#000',
                   //              // textShadowOffsetX: 0,
                   //              // textShadowOffsetY: 1,
                   //              // textBorderColor: '#333',
                   //              // textBorderWidth: 2
                   //          },
                   //          b: {
                   //               color: '#333'
                   //          },
                   //          c: {
                   //              color: '#f05f00',
                   //              // textBorderColor: '#000',
                   //              // textBorderWidth: 1,
                   //              fontSize: 22
                   //          }
                   //      }
                   // }
                },
                data: [
                    {type: 'max', name: 'max rate: '}
                ]
            }
        },
        {
            name: 'Chronic Bronchitis',
            type: 'bar',
            label: seriesLabel,
            itemStyle:{
              normal:{
                color:'#c23632',
              }
            },
            data: [8.4, 7.1, 5.9]
        },
        {
            name: 'Current Asthma',
            type: 'bar',
            label: seriesLabel,
            itemStyle:{
              normal:{
                color:'#4b124e',
              }
            },
            data: [14.4, 13.7, 15.2]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
