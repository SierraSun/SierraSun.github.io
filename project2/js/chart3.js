var dom = document.getElementById("chart3");
var myChart = echarts.init(dom);
var app = {};
option = {
    // title: {
    //     text: 'Vandalism comparison',
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
          "Hyde Park",
          "Jamaica Plains",
    "Brighton/Allston",
    "South Boston",
    "Downtown",
    "South End",
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
            data: [78, 114, 133, 125, 148, 213, 219, 309, 356,403, 473, 127],
            itemStyle: {
                normal:{
                    color:'#e69796'
                }
            }
        },
        {
            name: '2017',
            type: 'bar',
            data: [121, 198, 216, 286, 374, 359, 358, 553, 616, 738, 765, 243],
            itemStyle: {
                normal:{
                    color:'#a9302f'
                }
            }
        }
    ]
};

;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
