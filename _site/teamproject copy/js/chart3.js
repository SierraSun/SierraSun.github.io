var dom = document.getElementById("chart3");
var myChart = echarts.init(dom);
var app = {};

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['Subway Avg Weekday ridership', 'Adding 50000 people'],
        textStyle:{
            fontFamily:'BentonSansCond-regular'
        }
    },
    grid: {
        left: '0%',
        right: '3%',
        bottom: '0%',
        containLabel: false
    },
    xAxis: {
        type: 'value',
        axisLabel:{
          interval:3,
          textStyle:{
            fontFamily:'BentonSansCond-regular'
        }
     }
    },
    yAxis: {
        type: 'category',
        data: [''],
        axisLabel:{
     textStyle:{
            fontFamily:'BentonSansCond-regular'
        }
     }
    },
    series: [
        {
            name: 'Subway Avg Weekday ridership',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [63000],
            itemStyle:{
                color:'#89b3ff'
            }
        },
        {
            name: 'Adding 50000 people',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [50000],
            itemStyle:{
                color:'#6495ED'
            }
        }
    ]}
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
