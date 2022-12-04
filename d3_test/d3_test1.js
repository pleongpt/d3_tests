var w = 400, h = 400, r = 200, color = d3.scale.category20c();
data = [{"label":"apples", "count":20},
        {"label":"bananas", "count":50},
        {"label":"pears", "count":30}];

var vis = d3.select("body")
    .append("svg:svg")
  .data([data])
    .attr("width", w)
    .attr("height", h)
  .append("svg:g")
    .attr("transform", "translate(" + r + "," + r + ")")
var arc = d3.svg.arc()
    .outerRadius(r);
var pie = d3.layout.pie()
  .value(function(d) { return d.count; });
var arcs = vis.selectAll("g.slice")
  .data(pie)
  .enter().append("svg:g")
        .attr("class", "slice");
arcs.append("svg:path")
  .attr("fill", function(d, i) { return color(i); } )
  .attr("d", arc)
  .append("svg:title") // TITLE APPENDED HERE
    .text(function(d) { return d.value; });
arcs.append("svg:text")
  .attr("transform", function(d) {
    d.innerRadius = 0;
    d.outerRadius = r;
    return "translate(" + arc.centroid(d) + ")";
    })
  .attr("text-anchor", "middle")
  .text(function(d, i) { return data[i].label; });
