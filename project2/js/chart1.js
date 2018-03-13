var dom = document.getElementById("chart1");
var myChart = echarts.init(dom);
var app = {};
option = {
    // title: {
    //     text: 'Larceny comparison',
    //     subtext: 'Data source: Analyze Boston',
    //     textStyle:{
    //         fontFamily:'BentonSansCond-bold'
    //     },
    //     subtextStyle:{
    //         fontFamily:'BentonSansCond-regular'
    //     }
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2015', '2017'],
        textStyle:{
            fontFamily:'BentonSansCond-regular'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel:{
     textStyle:{
            fontFamily:'BentonSansCond-regular'
        }
     }
    },
    yAxis: {
        type: 'category',
        data: ["Charlestown",
    "West Roxbury",
    "Jamaica Plains",
    "Hyde Park",
    "Downtown",
    "South Boston",
    "South End",
    "Brighton/Allston",
    "Mattapan",
    "Dorchester",
    "Roxbury",
    "East Boston"],
    axisLabel:{
     textStyle:{
            fontFamily:'BentonSansCond-regular'
        }
     }
    },
    series: [
        {
            name: '2015',
            type: 'bar',
            data: [55, 147, 141, 165, 186, 214, 275, 236, 258,424, 442, 99],
            itemStyle: {
                normal:{
                    color:'#ea8686'
                }
            }
        },
        {
            name: '2017',
            type: 'bar',
            data: [124, 272, 288,337,388, 405, 401, 446,558, 863, 909, 155],
            itemStyle: {
                normal:{
                    color:'#701f1e'
                }
            }
        }
    ]
};

;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
