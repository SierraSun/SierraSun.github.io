var dom = document.getElementById("chart2");
var myChart = echarts.init(dom);
var app = {};
option = {
    // title: {
    //     text: 'Drug Violation comparison',
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
    "Brighton/Allston",
    "West Roxbury",
    "Hyde Park",
    "Jamaica Plains",
    "Mattapan",
    "South Boston",
    "Downtown",
    "South End",
    "Roxbury",
    "Dorchester",
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
            data: [76, 94, 112, 202, 217, 289, 363, 423, 329,454, 525, 210],
            itemStyle: {
                normal:{
                    color:'#7592b1'
                }
            }
        },
        {
            name: '2017',
            type: 'bar',
            data: [72, 266, 230, 188, 331, 403, 469, 574, 721, 628, 593, 246],
            itemStyle: {
                normal:{
                    color:'#2d3d4e'
                }
            }
        }
    ]
};

;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
