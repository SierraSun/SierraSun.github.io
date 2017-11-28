d3.select ("body").style("margin","0px");

var svg=d3.select ("#mysvg2")
 .style("background-color","white")
 .attr("width", 650)
 .attr("height",650)
 .attr("align","right");

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

    finaldata.forEach(function(d){
     d.release_date = new Date(d.release_date)
   });

// Define the tooltip for hover-over info windows
var div = d3.select("body").append("div")
  	.attr("class", "tooltip")
  	.style("opacity", 1);

// Set the dimensions and margins of the graph
var svg = d3.select("#mysvg2"),
    margin = {top: 20, right: 20, bottom: 60, left: 90},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;

// Set the ranges
var x = d3.scaleTime().rangeRound([0, width]),
    y = d3.scaleLinear().rangeRound([height, 0])
    r = d3.scaleLinear().domain([d3.min(finaldata,function(d){return d.vote_average;}),d3.max(finaldata,function(d){return d.vote_average;})])
    .range([1,20])
    color = d3.scaleSequential().domain([10, 1]).interpolator(d3.interpolateRainbow);

// Append the SVG element with a g element
// to offset the origin of the chart area by
// the top-left margin
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// USGS Real-Time Earthquake Feed
// Create the scatterplot with the api data
d3.json("https://api.themoviedb.org/3/configuration?api_key=55602ab6a865d4f67ef22e188f6ce063", function(error, data){
  console.log(error, data);})




  // Filter and format the data for use in the range
  // popularity = data.results.map(function(d) { return d.popularity; });
  // release_date = data.results.map(function(d) { return d.release_date; });

  // Scale the range of the data from the minimum value
  // to the maximum value
  x.domain(d3.extent(finaldata, function(d){ return d.release_date;}));
  y.domain([0,72]);

  console.log(data);

  g.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add a label for the X-Axis
  g.append("text")
    .attr("transform", "translate(" + (width/2) + " ,610)")
    .style("text-anchor", "middle")
    .style("font-size", "13px")
    .text("Releasetime");

  // Add the Y-Axis
  g.append("g")
    .attr("class", "axis axis--y")
    .call(d3.axisLeft(y));

  // Add a label for the Y-Axis
  g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -50)
    .attr("x", 0 - (height / 2))
    .attr("dy", ".75em")
    .style("text-anchor", "middle")
    .style("font-size", "13px")
    .text("Popularity");

  // Add the dots to the scatterplot with the tooltip
  g.selectAll(".dot")
    .data(finaldata)
    .enter().append("circle")
      .attr("class", "dot")
      .style("fill",function(d){return color(d.vote_average);})
      .style("fill-opacity",0.7)
      .attr("r",  function(d) {return r(d.vote_average);})
      .attr("cx", function(d) { return x(d.release_date); })
      .attr("cy", function(d) { return y(d.popularity); })
      .on("mouseover", function(d) {


        div.transition()
          .duration(200)
          .style("font-variant","normal")
          .style("background-color","rgba(255,255,255,0.6)")
          .style("line-height","60%")
          .style("opacity", 1)
          .style("stroke", "black");

        var dpath= d.poster_path;

        var url= "http://image.tmdb.org/t/p/w154"+dpath
        console.log(url)


        div.html(
           "<h6>"+d.title+ "</h6>" + "<div>"+"<img src='" + url + "' align='middle'/>"+ "</div>" + "<h4>"+d.popularity +"</h4>"
        )
          .style("left", (d3.event.pageX - 300) + "px")
          .style("top", (d3.event.pageY - 100) + "px");

          g.selectAll("circle").transition().duration(200)
                .style("fill-opacity", function(dd) {
                  if (dd === d) {
                    return 1;
                  }
                  else {
                    return 0.1;
                  }
                })
      })

      .on("mouseout", function(d) {
        div.transition()
          .duration(500)
          .style("opacity", 0);

          g.selectAll("circle").transition().duration(200)
            .style("fill-opacity",0.7)

      });
      });
