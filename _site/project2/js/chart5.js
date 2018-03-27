// initialize the map
 var map = L.map('mapid').setView([42.374, -71.031], 14);

 // load a tile layer

 L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
   {
     attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
     maxZoom: 18,
     minZoom: 13
   }).addTo(map);

   d3.csv('../project2/data/crime(east boston).csv', function (err, data) {
     var newdata = data.map(function(t) {
       return {
         lat: t.Lat,
         lng: t.Long,
         offense: t['OFFENSE_CODE_GROUP']
       }

     });

     var nested_data = d3.nest()
     .key(function(t){return t.lat;})
     .key(function(t){return t.lng;})
     .key(function(t){return t.offense;})
     .rollup(function(leaves){return leaves.length;})
     .entries(newdata)



     console.log(nested_data);

     nested_data.forEach(function (t) {
       t.values[0].values.forEach(function(tt){
        L.circle([+t.key,+t.values[0].key],
         {radius: colorBySize(tt.value),
          fillColor: colorByCode(tt.key),
          fillOpacity: opacityByCode(tt.key),
          stroke:false
        }).bindPopup(function (layer) {
          return tt.key+":"+"&nbsp"+tt.value;}).addTo(map);
       })

        function opacityByCode(str) {
          if(str == 'Larceny' ){
            return 0.6;
          } else if ( str == 'Drug Violation') {
            return 0.6;
          } else if ( str == 'Vandalism') {
            return 0.6;
          } else{
            return 0;
          }
        };

         function colorByCode(str) {
           if(str == 'Larceny' ){
             return '#ef5209';
           } else if ( str == 'Drug Violation') {
             return "#ff9696";
           } else if ( str == 'Vandalism') {
             return "#660202";
           } else{
             return "#ffffff";
           }
         };

         function colorBySize(num) {
           if(num>=1 && num<=2){
             return 10;
           } else if (num>=3 && num<=4) {
             return 15;
           } else if (num>=5&& num<=6) {
             return 20;
           }else if (num>=7&& num<=8) {
             return 25;
           }else if (num>=9 && num<=10) {
             return 30;
           }else if (num>=11 && num<=12) {
             return 35;
           } else if (num>=13&& num<=14) {
             return 40;
           }else if (num>=15&& num<=16) {
             return 45;
           }else if (num>=17&& num<=18) {
             return 50;
           }else{
               return 55;
             }
         };

         // console.log(t.values[0].values)
     })

   });
