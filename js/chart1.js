d3.select ("body").style("margin","0px");

var margin =100;

var svg=d3.select ("#mysvg")
 .style("background-color","ghost-white")
 .attr("width", window.innerWidth - margin*1.3)
 .attr("height",window.innerHeight - margin)

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
  console.log(finaldata);

   finaldata.forEach(function(d){
    d.release_date = new Date(d.release_date)

  });



  var svg = d3.select("#mysvg"),
      margin = {top: 20, right: 20, bottom: 60, left: 60},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom;

  var div = d3.select("body").append("div")
    	.attr("class", "tooltip")
    	.style("opacity", 1);

  // Set the ranges
  var x = d3.scaleTime().rangeRound([0, width]);
      y = d3.scaleLinear().rangeRound([height, 0]);
      r = d3.scaleLinear().domain([d3.min(finaldata,function(d){return d.vote_average;}),d3.max(finaldata,function(d){return d.vote_average;})])
      .range([4,15]);
      color = d3.scaleSequential()
  .domain([0, 25])
  .interpolator(d3.interpolateRainbow);

  // Append the SVG element with a g element
  // to offset the origin of the chart area by
  // the top-left margin
  var g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // USGS Real-Time Earthquake Feed

  x.domain(d3.extent(finaldata, function(d){ return d.release_date;}));
  y.domain(d3.extent(finaldata, function(d){ return d.vote_average;}));

  console.log(data);


  // Add the X-Axis
  g.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add a label for the X-Axis
  g.append("text")
    .attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
    .style("text-anchor", "middle")
    .style("font-size", "15px")
    .text("Releasetime");

  // Add the Y-Axis
  g.append("g")
    .attr("class", "axis axis--y")
    .call(d3.axisLeft(y));

  // Add a label for the Y-Axis
  g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height / 2))
    .attr("dy", ".75em")
    .style("text-anchor", "middle")
    .style("font-size", "15px")
    .style("font-variant","smallcape")
    .text("Voteaverage");

  // Add the dots to the scatterplot with the tooltip
  g.selectAll("circle")
    .data(finaldata)
    .enter().append("circle")
      .attr("class", "circle")
      .style("fill",function(d){return color(d.vote_average);})
      .style("fill-opacity",1)
      .attr("r", function(d)  {return r(d.vote_average);})
      .attr("cx", function(d) { return x(d.release_date); })
      .attr("cy", function(d) { return y(d.vote_average); })
      .on("mouseover", function(d) {

        div.transition()
          .duration(200)
          .style("font-variant","normal")
          .style("line-height","60%")
          .style("stroke", "black")
          .style("opacity",1)

        var dpath= d.poster_path;

        var url= "http://image.tmdb.org/t/p/w154"+dpath
        console.log(url)


        div.html(
          "<b><u>Popularity</b></u>: " + d.vote_average + "<br/>" + "<br/>" + "<br/>"+ "<b><u>Name</b></u>: " +d.title+ "<br/>" +"<br/>" +"<br/>"+"<b><u>Poster</b></u>: "+ "<img src='" + url + "' />")
          .style("left", (d3.event.pageX - 300) + "px")
          .style("top", (d3.event.pageY - 100) + "px");

      g.selectAll("circle").transition().duration(200)
            .style("fill-opacity",0.2)

      })

      .on("mouseout", function(d) {
        div.transition()
          .duration(500)
          .style("opacity", 0);

        g.selectAll("circle").transition().duration(200)
          .style("fill-opacity",1)
      });

      });
