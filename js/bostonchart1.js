
var dom = document.getElementById("chart1");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['Boston area crude rates','Massachusetts State crude rates']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['2008','2009','2010','2011','2012']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'Boston area crude rates',
            type:'line',
            color:'#f05f00',
            itemStyle:{
              normal:{
                lineStyle:{
                  color:'#f05f00',
                  width:3
                }
              }
            },
            data:[79.1, 64.5, 68.8, 67.1, 57.9]
        },
        {
            name:'Massachusetts State crude rates',
            type:'line',
            color:'#4b124e',
            itemStyle:{
              normal:{
                lineStyle:{
                  color:'#4b124e',
                  width:3
                }
              }
            },
            data:[26.1, 23.2, 24.9, 24.5, 20.7]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
