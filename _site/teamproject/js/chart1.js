var dom = document.getElementById("chart1");
var myChart = echarts.init(dom);
var app = {};

var colors = ['#89b3ff', '', '#6495ed'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        y:100,
        right: '30%',
        left:'30%',
        y2:110
    },
    toolbox: {
    },
    legend: {
        data:['Rider per mile','Avg. weekday ridership']
    },
    xAxis: {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['New York City Subway','Chicago "L"','Washington Metro','MBTA Subway'],
            axisLabel: {
                interval:0,
                rotate:50,
                textStyle: {
                   fontFamily:'BentonSansCond-regular'
                }
            }
    },
    yAxis: [
        {
            type: 'value',
            name: 'Rider per mile',
            min: 0,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {

            }
        },
        {},
        {
            type: 'value',
            name: 'Avg. weekday ridership',
            min: 0,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {

            }
        }
    ],
    series: [
        {
            name:'Rider per mile',
            type:'bar',
            data:[38276, 7292, 6400, 14539]
        },
        {
            name:'Avg. weekday ridership',
            type:'line',
            yAxisIndex: 2,
            data:[8918400, 749700, 748800, 552500]
        }
    ]
};

;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
