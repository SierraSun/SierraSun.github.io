var dom = document.getElementById("chart1");
var myChart = echarts.init(dom);
var app = {};

data = [["1985"	,48000],["1986"	,74200],["1987"	,93500],
["1988"	,118500],["1989"	,187450],["1990"	,181300],
["1991"	,183150],["1992"	,170000],["1993"	,146100],
["1994"	,138200],["1995"	,136500],["1996"	,140300],
["1997"	,134150],["1998"	,131600],["1999"	,136800],
["2000"	,145000],["2001"	,207200],["2002"	,236000],
["2003"	,271300],["2004"	,380400],["2005"	,392300],
["2006"	,420150],["2007",	526500],["2008",	510100],
["2009",	500000],["2010",	487000],["2011",	483500],
["2012",	517100],["2013",	550500],["2014",	606250],
["2015",	691441],["2016",	793050],["2017",	885500],
["2018",938700]];



var dateList = data.map(function (item) {
    return item[0];
});

var valueList = data.map(function (item) {
    return item[1];
});

option = {

    title: {
        left: 'center',
        text: 'Median Housing Price in Mission Hill, 1985-2018'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
          var result = '';
          params.forEach(function (item) {
              result +=item.marker+item.name + ":" +" $"+item.value
          });
          return result;
				},
},
    xAxis: {
        data: dateList,
        axisLabel: {
            interval:1,
            textStyle: {
               fontFamily:'BentonSansCond-regular'
                  }
          }
        },

    yAxis: {
        splitLine: {show: true},
        axisLabel: {
            textStyle: {
               fontFamily:'BentonSansCond-regular'
                  }
          }

    },

    series: {
        type: 'line',
        showAllSymbol: true,
        data: valueList,
        itemStyle:{
          normal:{
            lineStyle:{
              width:3
            }
          }
        }
          }
    };

;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
