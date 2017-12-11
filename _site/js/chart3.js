d3.select ("body").style("margin","0px");

var width = parseFloat(d3.select(".chart3").style("width"));
console.log(width);

var height = parseFloat(d3.select(".chart3").style("height"));
console.log(height);

var svg=d3.select ("#mysvg3")
 .style("background-color","white")
 .attr("width", width*0.55)
 .attr("height",height)
 .attr("margin-left","-50%")
 .attr("transform","translate(" - margin - ", " + margin + ")")
 .attr("align","left");

 var q = d3.queue()
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=1")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=2")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=3")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=3")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=4")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=5")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=6")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=7")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=8")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=9")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=10")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=11")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=12")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=13")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=14")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=15")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=16")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=17")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=18")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=19")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=20")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=21")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=22")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=23")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=24")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=25")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=26")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=27")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=28")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=29")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=30")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=31")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=32")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=33")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=34")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=35")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=36")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=37")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=38")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=39")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=40")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=41")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=42")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=43")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=44")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=45")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=46")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=47")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=48")
   .defer(d3.json, "https://api.themoviedb.org/3/movie/top_rated?api_key=55602ab6a865d4f67ef22e188f6ce063&language=en-US&page=49")

   .awaitAll(function(error, data) {
       if (error) throw error;
       var finaldata = d3.merge(data.map(function(d) {
         return d.results;}))

   });

d3.json("json/world.json", function(error, data) {

 var geoJSON = topojson.feature(data, data.objects.countries);

 console.log(geoJSON);

 var proj = d3.geoOrthographic()
   .fitSize([width, width], geoJSON);
 var path = d3.geoPath()
   .projection(proj);

 var countries = svg.selectAll("path")
   .data(geoJSON.features);

 var div = d3.select("body").append("div")
     .attr("class", "tooltip")
     .style("opacity", 1);

 countries = countries.enter().append("path")
   .on("mouseover", function(d) {
     div.transition()
       .duration(500)
       .style("font-variant","normal")
       .style("line-height","60%")
       .style("opacity", 1)
       .style("stroke", "black");

       div.html(
          "<h5>"+d.id+ "</h5>" )
         .style("left", (d3.event.pageX) + "px")
         .style("top", (d3.event.pageY) + "px");})

   .on("mouseout", function(d) {
     div.transition()
       .duration(200)
       .style("opacity", 0);})


   .attr("d", function(d) {
     return path(d);
   })
   .attr("id", function(d){
     return d.id;
   })
   .attr("fill",function(d){
     if (d.id == "IN"){
       return"#800000";
     }
     else if(d.id == "US"){
       return "#330000";
     }
     else if(d.id == "CN"){
       return "#ff0000";
     }
     else if(d.id == "JP"){
       return "#ff3333";
     }
     else if(d.id == "FR"){
       return "#ff4d4d";
     }
     else if(d.id == "UK"){
       return "#ff6666";
     }
     else if(d.id == "SK"){
       return "#ff6666";
     }
     else if(d.id == "ES"){
       return "#ff9999";
     }
     else if(d.id == "DE"){
       return "#ff8080";
     }
     else if(d.id == "IT"){
       return "#ffcccc";
     }
     else {
       return "lightgray";
     }
   });

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
