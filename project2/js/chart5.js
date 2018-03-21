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
     console.log(data);
     var newdata = data.map(function(t) {
       return {
         lat: t.Lat,
         lng: t.Long,
         offense: t['OFFENSE_CODE_GROUP'],
       }
     });
     console.log(newdata);

     newdata.forEach(function (t) {
       L.circle([+t.lat, +t.lng],
         {radius: 5,
          color: colorByCode(t.offense),
          opacity: 0.5
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

     })


   })
