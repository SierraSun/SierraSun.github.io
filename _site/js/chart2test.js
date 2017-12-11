d3.select ("body").style("margin","0px");

var margin=100

var svg=d3.select ("#mysvg2")
 .style("background-color","white")
 .attr("width", window.innerWidth)
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

 var div = d3.select("body").append("div")
       .attr("class", "tooltip")
       .style("opacity", 1);

 var countries = svg.selectAll("path")
   .data(geoJSON.features);


 countries = countries.enter().append("path")
   .on("mouseover", function(d) {
   div.transition()
     .duration(100)
     .style("font-variant","normal")
     .style("background-color","rgba(255,255,255,0.6)")
     .style("line-height","60%")
     .style("opacity", 1)
     .style("stroke", "black");

     div.html(
        "<h6>"+"d"+ "</h6>" + "<div>"+ "text" + "</div>" + "<h4>"+ "text"+"</h4>"
     )
       .style("left", (300) + "px")
       .style("top", (100) + "px"); })

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
   })

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
