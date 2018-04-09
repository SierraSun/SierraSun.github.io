var dom = document.getElementById("chart2");
var myChart = echarts.init(dom);
var app = {};
option = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        y:10,
        right: '20%',
        left:'20%'

    },
    xAxis: {
        type: 'category',
        data: [ '2007', '2008', '2009', '2013'],
        textStyle:{
          fontFamily:'BentonSansCond-regular'
      }
    },
    yAxis: {
        type: 'value',
        textStyle:{
          fontFamily:'BentonSansCond-regular'
      }
    },
    series: [{
        data: [41661, 42308,  44233,  50477],
        type: 'line',
        areaStyle: {},
        color:'#89b3ff'
    }]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
