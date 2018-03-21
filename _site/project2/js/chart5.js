// initialize the map
 var map = L.map('mapid').setView([42.37, -71.03], 14);

 // load a tile layer

 L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
   {
     attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
     maxZoom: 17,
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
     console.log(newdata);

     var nested_data = d3.nest()
     .key(function(t){return t.lat;})
     .key(function(t){return t.lng;})
     .key(function(t){return t.offense;})
     .rollup(function(leaves){return leaves.length;})
     .entries(newdata)

     console.log(nested_data);

     nested_data.forEach(function (t) {
       L.circle([+t.key,+t.values[0].key],
         {radius: colorBySize(t.values[0].values.length),
          color: colorByCode(t.values[0].values[0].key),
          opacity: 0.5,
        }).addTo(map);

         function colorByCode(str) {
           if(str == 'Larceny' ){
             return '#c12509'
           } else if ( str == 'Drug Violation') {
             return "#ffe81c"
           } else if ( str == 'Vandalism') {
             return "#7de07b"
           } else{
             return 'lightgray';
           }
         };

         function colorBySize(num) {
           if(num>=1 || num<50){
             return 10
           } else if (num>=50 || num<100) {
             return 30
           } else if (num>=100) {
             return 60
           } else{
             return 20;
           }
         };

         console.log(colorBySize());
     })

   })
