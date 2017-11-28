d3.select ("body").style("margin","0px");


var svg=d3.select ("#mysvg3")
 .style("background-color","white")
 .attr("width", window.innerWidth - margin*2)
 .attr("height",window.innerHeight-margin*0.2)
 .attr("margin-left","0px")
 .attr("transform","translate(" - margin - ", " + margin + ")")
 .attr("align","left");

d3.json("json/world.json", function(error, data) {

 var geoJSON = topojson.feature(data, data.objects.countries);

 console.log(geoJSON);

 var proj = d3.geoOrthographic()
   .fitSize([window.innerWidth - margin, window.innerHeight-margin*0.2], geoJSON);
 var path = d3.geoPath()
   .projection(proj);

 var countries = svg.selectAll("path")
   .data(geoJSON.features);

 countries = countries.enter().append("path")
   .attr("d", function(d) {
     return path(d);
   })
   .attr("id", function(d){
     return d.id;
   })
   .attr("fill",function(d){
     if (d.id == "US"){
       return"#800000";
     }
     else if(d.id == "IN"){
       return "#330000";
     }
     else if(d.id == "JP"){
       return "#ff0000";
     }
     else if(d.id == "FR"){
       return "#ff3333";
     }
     else if(d.id == "CA"){
       return "#ff4d4d";
     }
     else if(d.id == "DE"){
       return "#ff6666";
     }
     else if(d.id == "KP"){
       return "#ff6666";
     }
     else if(d.id == "CN"){
       return "#ff9999";
     }
     else if(d.id == "RU"){
       return "#ff8080";
     }
     else if(d.id == "ES"){
       return "#ffcccc";
     }
     else {
       return "lightgray";
     }
   });

 // var points = [
 //       {"name": "Boston", "coords": [-71.0589, 42.3601]},
 //       {"name": "London", "coords": [-0.1278, 51.5074]}
 //     ];
 //
 // var points = svg.selectAll("circle")
 //     .data(points);
 //
 // points.enter().append("circle")
 //     .attr("transform", function(d){
 //         return "translate(" + proj(d.coords) + ")";
 //       })
 //     .attr("fill","red")
 //     .attr("r","10px")


   var speed = 0.01,
       start = Date.now();

   d3.timer(function() {
     proj.rotate([speed * (Date.now() - start), -15]);
     countries
       .attr("d", function(d) {
         return path(d);
       })
   });

 });
