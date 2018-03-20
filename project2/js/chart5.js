// initialize the map
 var map = L.map('mapid').setView([42.37, -71.03], 14);

 // load a tile layer
 L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',
   {
     attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
     maxZoom: 17,
     minZoom: 9
   }).addTo(map);

$.get('data/crime(east boston).csv', function(csvContents) {
   var geoLayer = L.geoCsv(csvContents, {firstLineTitles: true, fieldSeparator: ','});
   map.addLayer(geoLayer);
 });
