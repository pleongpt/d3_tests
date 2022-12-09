function showToolTip() {
    var data = [4, 8, 15, 16, 23, 42];

    var x = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, 400]);

    // Cannot have a div as a child of a svg

    var tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .style("background", "green")
        .text("a simple tooltip");

    d3.select("body")
      .selectAll("div")
        .data(data)
      .enter().append("div")
        .style("width", function(d) { return x(d) + "px"; })
        .text(function(d) { return d; })
        .on("mouseover", function(d){tooltip.text(d); return tooltip.style("visibility", "visible");})
          .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
          .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
}