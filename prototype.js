function showDialogs() {
    // circle radius
    const circleRadius = 10;

    // Define the arrowhead marker variables
    const markerBoxWidth = 4;
    const markerBoxHeight = 4;
    const refX = markerBoxWidth / 2 + circleRadius - 2;
    const refY = markerBoxHeight / 2;
    const markerWidth = markerBoxWidth / 2;
    const markerHeight = markerBoxHeight / 2;
    const arrowPoints = [[0, 0], [0, 4], [4, 2]];

    var nodes = [
        {id: "1", group: 0, label: "Introduction", level: 1},
        {id: "2", group: 1, label: "Identify as seller", level: 1},
        {id: "3", group: 0, label: "Anything to help", level: 1},
        {id: "4a", group: 1, label: "Bring me a buyer", level: 1},
        {id: "4b", group: 1, label: "Don't need an agent", level: 1},
        {id: "5", group: 0, label: "Where seller is moving to", level: 1},
        {id: "6a", group: 1, label: "Moving to somewhere specific", level: 1},
        {id: "6b", group: 1, label: "Not your business", level: 1},
        {id: "7", group: 0, label: "Moving time frame", level: 1},
        {id: "8a", group: 1, label: "Seller indicates a time frame", level: 1},
        {id: "8b", group: 1, label: "No specific time frame", level: 1},
        {id: "9", group: 0, label: "Guess seller's motivation to sell", level: 1},
        {id: "10a", group: 1, label: "Seller agrees on motivation level", level: 1},
        {id: "10b", group: 1, label: "Seller disagree on motivation level", level: 1},
        {id: "11", group: 0, label: "Ask seller's motivation level", level: 1},
        {id: "12", group: 1, label: "Seller's motivation level", level: 1},
        {id: "13", group: 0, label: "Marketing Methods", level: 1},
        {id: "14a", group: 1, label: "Seller mentions marketing methods", level: 1},
        {id: "14b", group: 1, label: "Seller didn't mention marketing methods", level: 1},
        {id: "15", group: 0, label: "How sales price was determined", level: 1},
        {id: "16a", group: 1, label: "Seller did research on sales price", level: 1},
        {id: "16b", group: 1, label: "Someone helped seller to set the sales price", level: 1},
        {id: "17", group: 0, label: "Price Flexibility", level: 1},
        {id: "18a", group: 1, label: "Some price flexibility", level: 1},
        {id: "18b", group: 1, label: "No price flexibility", level: 1},
        {id: "19", group: 0, label: "Why selling by owner?", level: 1},
        {id: "20", group: 1, label: "Seller wants to save commission", level: 1},
        {id: "21", group: 0, label: "Which agent to list with?"  , level: 1},
        {id: "22a", group: 1, label: "Seller has nobody in mind yet", level: 1},
        {id: "22b", group: 1, label: "Seller knows some agent", level: 1},
        {id: "23", group: 0, label: "Expectation on the agent", level: 1},
        {id: "24", group: 1, label: "Seller's expectation on an agent", level: 1},
        {id: "25", group: 0, label: "Timeframe to engage agent", level: 1},
        {id: "26a", group: 1, label: "Seller's timeframe to engage agent", level: 1},
        {id: "26b", group: 1, label: "Seller has no timeframe to engage agent", level: 1},
        {id: "27", group: 0, label: "Under what situation to hire an agent", level: 1},
        {id: "28a", group: 1, label: "Seller's condition to hire an agent", level: 1},
        {id: "28b", group: 1, label: "Seller will never hire an agent", level: 1},
        {id: "29", group: 0, label: "Familiar with selling techniques", level: 1},
        {id: "30", group: 1, label: "Seller not familiar", level: 1},
        {id: "31", group: 0, label: "When to meet?", level: 1},
        {id: "32a", group: 1, label: "Confirmed a time to meet", level: 1},
        {id: "32b", group: 1, label: "Seller does not want to meet", level: 1},
        {id: "33", group: 0, label: "Thanks and end the conversation", level: 1},
    ]

    var links = [
        { target: "2", source: "1", strength: 0.7 },
        { target: "3", source: "2", strength: 0.7 },
        { target: "4a", source: "3", strength: 0.7 },
        { target: "4b", source: "3", strength: 0.7 },
        { target: "5", source: "4a", strength: 0.7 },
        { target: "5", source: "4b", strength: 0.7 },
        { target: "6a", source: "5", strength: 0.7 },
        { target: "6b", source: "5", strength: 0.7 },
        { target: "7", source: "6a", strength: 0.7 },
        { target: "7", source: "6b", strength: 0.7 },
        { target: "8a", source: "7", strength: 0.7 },
        { target: "8b", source: "7", strength: 0.7 },
        { target: "9", source: "8a", strength: 0.7 },
        { target: "9", source: "8b", strength: 0.7 },
        { target: "10a", source: "9", strength: 0.7 },
        { target: "10b", source: "9", strength: 0.7 },
        { target: "11", source: "10a", strength: 0.7 },
        { target: "11", source: "10b", strength: 0.7 },
        { target: "12", source: "11", strength: 0.7 },
        { target: "13", source: "12", strength: 0.7 },
        { target: "14a", source: "13", strength: 0.7 },
        { target: "14b", source: "13", strength: 0.7 },
        { target: "15", source: "14a", strength: 0.7 },
        { target: "15", source: "14b", strength: 0.7 },
        { target: "16a", source: "15", strength: 0.7 },
        { target: "16b", source: "15", strength: 0.7 },
        { target: "17", source: "16a", strength: 0.7 },
        { target: "17", source: "16b", strength: 0.7 },
        { target: "18a", source: "17", strength: 0.7 },
        { target: "18b", source: "17", strength: 0.7 },
        { target: "19", source: "18a", strength: 0.7 },
        { target: "19", source: "18b", strength: 0.7 },
        { target: "20", source: "19", strength: 0.7 },
        { target: "21", source: "20", strength: 0.7 },
        { target: "22a", source: "21", strength: 0.7 },
        { target: "22b", source: "21", strength: 0.7 },
        { target: "23", source: "22a", strength: 0.7 },
        { target: "23", source: "22b", strength: 0.7 },
        { target: "24", source: "23", strength: 0.7 },
        { target: "25", source: "24", strength: 0.7 },
        { target: "26a", source: "25", strength: 0.7 },
        { target: "26b", source: "25", strength: 0.7 },
        { target: "27", source: "26a", strength: 0.7 },
        { target: "27", source: "26b", strength: 0.7 },
        { target: "28a", source: "27", strength: 0.7 },
        { target: "28b", source: "27", strength: 0.7 },
        { target: "29", source: "28a", strength: 0.7 },
        { target: "29", source: "28b", strength: 0.7 },
        { target: "30", source: "29", strength: 0.7 },
        { target: "31", source: "30", strength: 0.7 },
        { target: "32a", source: "31", strength: 0.7 },
        { target: "32b", source: "31", strength: 0.7 },
        { target: "33", source: "32a", strength: 0.7 },
        { target: "33", source: "32b", strength: 0.7 },
    ]

    function getNeighbors(node) {
      return links.reduce(function (neighbors, link) {
          if (link.target.id === node.id) {
            neighbors.push(link.source.id)
          } else if (link.source.id === node.id) {
            neighbors.push(link.target.id)
          }
          return neighbors
        },
        [node.id]
      )
    }

    function isNeighborLink(node, link) {
      return link.target.id === node.id || link.source.id === node.id
    }

    function getNodeColor(node, neighbors) {
      if (Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1) {
        return node.group == 0 ? 'blue' : 'red'
      }

      return node.group === 0 ? 'blue' : 'red'
    }

    function getLinkColor(node, link) {
      // return isNeighborLink(node, link) ? 'green' : '#E5E5E5'
        return '#E5E5E5';
    }

    function getTextColor(node, neighbors) {
      return Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1 ? 'green' : 'black'
    }

    var width = window.innerWidth
    var height = window.innerHeight

    console.log(`window.innerWidth=${width} window.innerHeight=${height}`);

    var svg = d3.select('svg')
    svg.attr('width', width).attr('height', height)

    // simulation setup with all forces
    var linkForce = d3
      .forceLink()
      .id(function (link) { return link.id})
      .strength(function (link) { return link.strength})

    var simulation = d3
      .forceSimulation()
      .force('link', linkForce)
      .force('charge', d3.forceManyBody().strength(-50))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(function(d) {
        return d.radius + 2
        })
      )

    function validate(x, a, b) {
        if (x < a) x = a;
        if (x > b) x = b;
        return x;
    }

    var dragDrop = d3.drag().on('start', function (node) {
      node.fx = node.x
      node.fy = node.y
    }).on('drag', function (node) {
      simulation.alphaTarget(0.7).restart()
      node.fx = d3.event.x
      node.fy = d3.event.y
    }).on('end', function (node) {
      if (!d3.event.active) {
        simulation.alphaTarget(0)
      }
      node.fx = null
      node.fy = null
    })

    function selectNode(selectedNode) {
      var neighbors = getNeighbors(selectedNode)

      // we modify the styles to highlight selected nodes
      nodeElements.attr('fill', function (node) { return getNodeColor(node, neighbors) })
      textElements.attr('fill', function (node) { return getTextColor(node, neighbors) })
      linkElements.attr('stroke', function (link) { return getLinkColor(selectedNode, link) })
    }

    var linkElements = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links)
      .enter().append("line")
        .attr("stroke-width", 2)
          .attr("stroke", "rgba(50, 50, 50, 0.2)")

    var nodeElements = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes)
      .enter().append("circle")
        .attr("r", circleRadius)
        .attr("fill", getNodeColor)
        .call(dragDrop)
        .on('click', selectNode)

    var textElements = svg.append("g")
      .attr("class", "texts")
      .selectAll("text")
      .data(nodes)
      .enter().append("text")
        .text(function (node) { return  node.label })
          .attr("font-size", 15)
          .attr("dx", 15)
        .attr("dy", 4)

    // Add the arrowhead marker definition to the svg element
    var arrowHeadElements = svg
        .append('defs')
        .append('marker')
        .attr('id', 'arrow')
        .attr('viewBox', [0, 0, markerBoxWidth, markerBoxHeight])
        .attr('refX', refX)
        .attr('refY', refY)
        .attr('markerWidth', markerBoxWidth)
        .attr('markerHeight', markerBoxHeight)
        .attr('orient', 'auto-start-reverse')
        .append('path')
        .attr('d', d3.line()(arrowPoints))
        .attr('stroke', 'black');

    simulation.nodes(nodes).on('tick', () => {
      nodeElements
        .attr('cx', function (node) { return node.x })
        .attr('cy', function (node) { return node.y })
      textElements
        .attr('x', function (node) { return node.x })
        .attr('y', function (node) { return node.y })
      linkElements
        .attr('x1', function (link) { return link.source.x })
        .attr('y1', function (link) { return link.source.y })
        .attr('x2', function (link) { return link.target.x })
        .attr('y2', function (link) { return link.target.y })
        .attr('marker-end', 'url(#arrow)')
        .attr('stroke', 'black')
        .attr('fill', 'none')
    })

    simulation.force("link").links(links)
}
