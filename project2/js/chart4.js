var dom = document.getElementById("chart4");
var myChart = echarts.init(dom);
var app = {};
option = null;

var hours = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.',
        'Aug.', 'Sep.', 'Oct.','Nov.','Dec.'];
var days = ['Vandalism', 'Drug violation', 'Larceny'];

var data = [[0,0,46],[0,1,52],[0,2,29],[0,3,39],[0,4,36],[0,5,55],[0,6,48],[0,7,82]
,[0,8,48],[0,9,57],[0,10,63],[0,11,48],
[1,0,54],[1,1,42],[1,2,47],[1,3,37],[1,4,39],[1,5,52],[1,6,60],[1,7,38],[1,8,51],
[1,9,68],[1,10,46],[1,11,38],
[2,0,54],[2,1,34],[2,2,25],[2,3,42],[2,4,30],[2,5,44],[2,6,38],[2,7,56],[2,8,60],
[2,9,48],[2,10,50],[2,11,53],];

data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    tooltip: {
        position: 'top',
        textStyle:{
            fontFamily:'BentonSansCond-regular'
        }
    },
    animation: false,
    grid: {
        height: '50%',
        x: '24%'
    },

    xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: true
        },
        axisLabel: {
        textStyle:{
             fontFamily:'BentonSansCond-regular'
         }
      }
    },
    yAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: false
        }

 },
    visualMap: {
        min: 25,
        max: 82,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '%'
    },
    series: [{
        name:'Number of records',
        type: 'heatmap',
        data: data,
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};;


if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
