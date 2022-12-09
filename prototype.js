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

    const nodes = [
        {id: "1", group: 0, label: "Introduction"},
        {id: "2", group: 1, label: "Identify as seller"},
        {id: "3", group: 0, label: "Anything to help"},
        {id: "4a", group: 1, label: "Bring me a buyer"},
        {id: "4b", group: 1, label: "Don't need an agent"},
        {id: "5", group: 0, label: "Where seller is moving to"},
        {id: "6a", group: 1, label: "Moving to somewhere specific"},
        {id: "6b", group: 1, label: "Not your business"},
        {id: "7", group: 0, label: "Moving time frame"},
        {id: "8a", group: 1, label: "Seller indicates a time frame"},
        {id: "8b", group: 1, label: "No specific time frame"},
        {id: "9", group: 0, label: "Guess seller's motivation to sell"},
        {id: "10a", group: 1, label: "Seller agrees on motivation level"},
        {id: "10b", group: 1, label: "Seller disagree on motivation level"},
        {id: "11", group: 0, label: "Ask seller's motivation level"},
        {id: "12", group: 1, label: "Seller's motivation level"},
        {id: "13", group: 0, label: "Marketing Methods"},
        {id: "14a", group: 1, label: "Seller mentions marketing methods"},
        {id: "14b", group: 1, label: "Seller didn't mention marketing methods"},
        {id: "15", group: 0, label: "How sales price was determined"},
        {id: "16a", group: 1, label: "Seller did research on sales price"},
        {id: "16b", group: 1, label: "Someone helped seller to set the sales price"},
        {id: "17", group: 0, label: "Price Flexibility"},
        {id: "18a", group: 1, label: "Some price flexibility"},
        {id: "18b", group: 1, label: "No price flexibility"},
        {id: "19", group: 0, label: "Why selling by owner?"},
        {id: "20", group: 1, label: "Seller wants to save commission"},
        {id: "21", group: 0, label: "Which agent to list with?"  },
        {id: "22a", group: 1, label: "Seller has nobody in mind yet"},
        {id: "22b", group: 1, label: "Seller knows some agent"},
        {id: "23", group: 0, label: "Expectation on the agent"},
        {id: "24", group: 1, label: "Seller's expectation on an agent"},
        {id: "25", group: 0, label: "Timeframe to engage agent"},
        {id: "26a", group: 1, label: "Seller's timeframe to engage agent"},
        {id: "26b", group: 1, label: "Seller has no timeframe to engage agent"},
        {id: "27", group: 0, label: "Under what situation to hire an agent"},
        {id: "28a", group: 1, label: "Seller's condition to hire an agent"},
        {id: "28b", group: 1, label: "Seller will never hire an agent"},
        {id: "29", group: 0, label: "Familiar with selling techniques"},
        {id: "30", group: 1, label: "Seller not familiar"},
        {id: "31", group: 0, label: "When to meet?"},
        {id: "32a", group: 1, label: "Confirmed a time to meet"},
        {id: "32b", group: 1, label: "Seller does not want to meet"},
        {id: "33", group: 0, label: "Thanks and end the conversation"},
    ]

    const links = [
        { target: "2", source: "1", strength: 0.7 },
        { target: "3", source: "2", strength: 0.7 },
        { target: "4a", source: "3", strength: 0.7 },
        { target: "4b", source: "3", strength: 0.7 },
        { target: "4b", source: "4a", strength: 0.7},
        { target: "5", source: "4a", strength: 0.7 },
        { target: "5", source: "4b", strength: 0.7 },
        { target: "6a", source: "5", strength: 0.7 },
        { target: "6b", source: "5", strength: 0.7 },
        { target: "6b", source: "6a", strength: 0.7},
        { target: "7", source: "6a", strength: 0.7 },
        { target: "7", source: "6b", strength: 0.7 },
        { target: "8a", source: "7", strength: 0.7 },
        { target: "8b", source: "7", strength: 0.7 },
        { target: "8b", source: "8a", strength: 0.7},
        { target: "9", source: "8a", strength: 0.7 },
        { target: "9", source: "8b", strength: 0.7 },
        { target: "10a", source: "9", strength: 0.7 },
        { target: "10b", source: "9", strength: 0.7 },
        { target: "10b", source: "10a", strength: 0.7},
        { target: "11", source: "10a", strength: 0.7 },
        { target: "11", source: "10b", strength: 0.7 },
        { target: "12", source: "11", strength: 0.7 },
        { target: "13", source: "12", strength: 0.7 },
        { target: "14a", source: "13", strength: 0.7 },
        { target: "14b", source: "13", strength: 0.7 },
        { target: "14b", source: "14a", strength: 0.7},
        { target: "15", source: "14a", strength: 0.7 },
        { target: "15", source: "14b", strength: 0.7 },
        { target: "16a", source: "15", strength: 0.7 },
        { target: "16b", source: "15", strength: 0.7 },
        { target: "16b", source: "16a", strength: 0.7},
        { target: "17", source: "16a", strength: 0.7 },
        { target: "17", source: "16b", strength: 0.7 },
        { target: "18a", source: "17", strength: 0.7 },
        { target: "18b", source: "17", strength: 0.7 },
        { target: "18b", source: "18a", strength: 0.7},
        { target: "19", source: "18a", strength: 0.7 },
        { target: "19", source: "18b", strength: 0.7 },
        { target: "20", source: "19", strength: 0.7 },
        { target: "21", source: "20", strength: 0.7 },
        { target: "22a", source: "21", strength: 0.7 },
        { target: "22b", source: "21", strength: 0.7 },
        { target: "22b", source: "22a", strength: 0.7},
        { target: "23", source: "22a", strength: 0.7 },
        { target: "23", source: "22b", strength: 0.7 },
        { target: "24", source: "23", strength: 0.7 },
        { target: "25", source: "24", strength: 0.7 },
        { target: "26a", source: "25", strength: 0.7 },
        { target: "26b", source: "25", strength: 0.7 },
        { target: "26b", source: "26a", strength: 0.7},
        { target: "27", source: "26a", strength: 0.7 },
        { target: "27", source: "26b", strength: 0.7 },
        { target: "28a", source: "27", strength: 0.7 },
        { target: "28b", source: "27", strength: 0.7 },
        { target: "28b", source: "28a", strength: 0.7},
        { target: "29", source: "28a", strength: 0.7 },
        { target: "29", source: "28b", strength: 0.7 },
        { target: "30", source: "29", strength: 0.7 },
        { target: "31", source: "30", strength: 0.7 },
        { target: "32a", source: "31", strength: 0.7 },
        { target: "32b", source: "31", strength: 0.7 },
        { target: "32b", source: "32a", strength: 0.7},
        { target: "33", source: "32a", strength: 0.7 },
        { target: "33", source: "32b", strength: 0.7 },
        { target: "1", source: "33", strength: 0.8 },
    ]
    
    const utterances = [
        {id: "1", group: 0, utterances: [
            "Hello, my name is Jeff Henriques with Corcoran Global Living. I am calling about the home for sale.  May I speak to the owner?",
            "Hello, my name is Jeff Henriques with CGL. I am calling about the home for sale.  May I speak to the owner?",
            "Hello, my name is Jeff Henriques with Corcoran Global Living. I am calling about the home for sale. Is this the owner?",
            "Hello, my name is Jeff Henriques with CGL. I am calling about the home for sale. Is this the owner?",
            "Hi, my name is Jeff Henriques with Corcoran Global Living. I am calling for the home for sale.  Is this the owner?",
            "Hi, my name is Jeff Henriques with CGL. I am calling for the home for sale.  Is this the owner?",
            "Hi, I am Jeff Henriques with Corcoran Global Living. Are you the owner of the property for sale?",
            "Hi, I am Jeff Henriques with CGL. Are you the owner of the property for sale?",
            "Hi, This is Jeff Henriques with Corcoran Global Living. May I speak to the owner of the property?",
            "Hi, This is Jeff Henriques with CGL. May I speak to the owner of the property?",
            "Hi, This is Jeff Henriques with Corcoran Global Living. May I speak to the owner of the house?",
            "Hi, This is Jeff Henriques with CGL. May I speak to the owner of the house?",
            "Hi there,  This is Jeff Henriques with Corcoran Global Living. Are you the owner of the property for sale?",
            "Hi there,  This is Jeff Henriques with CGL. Are you the owner of the property for sale?",
            "Hi, my name is Jeff Henriques with Corcoran Global Living and I'm calling about the home for sale. Is this the owner I'm speaking with?",
            "Hi, my name is Jeff Henriques and I'm calling about the home for sale. Is this the owner?",
            "Hi, It's Jeff Henriques and I'm calling about the home for sale. Is this the owner?",
            "Hi, Jeff Henriques with Corcoran Global Living and I'm calling about the home for sale. Is this the owner?",
            "Hello, Jeff Henriques with Corcoran Global Living and I'm calling about the home for sale. Is this the owner I am speaking with?",
            "Hi, my name is Jeff Henriques with Corcoran Global Living.  I am calling about the home you have for sale.  Is this the owner?"
            ]},
        {id: "2", group: 1, utterances: [
            "This is he.",
            "This is she.",
            "Yes, speaking...",
            "Yes, this is the owner.",
            "Yes, this is the owner of the property.",
            "Yes, I am the owner.",
            "Yes, it is."
            ]},
        {id: "3", group: 0, utterances: []},
        {id: "4a", group: 1, utterances: []},
        {id: "4b", group: 1, utterances: []},
        {id: "5", group: 0, utterances: []},
        {id: "6a", group: 1, utterances: []},
        {id: "6b", group: 1, utterances: []},
        {id: "7", group: 0, utterances: []},
        {id: "8a", group: 1, utterances: []},
        {id: "8b", group: 1, utterances: []},
        {id: "9", group: 0, utterances: []},
        {id: "10a", group: 1, utterances: []},
        {id: "10b", group: 1, utterances: []},
        {id: "11", group: 0, utterances: []},
        {id: "12", group: 1, utterances: []},
        {id: "13", group: 0, utterances: []},
        {id: "14a", group: 1, utterances: []},
        {id: "14b", group: 1, utterances: []},
        {id: "15", group: 0, utterances: []},
        {id: "16a", group: 1, utterances: []},
        {id: "16b", group: 1, utterances: []},
        {id: "17", group: 0, utterances: []},
        {id: "18a", group: 1, utterances: []},
        {id: "18b", group: 1, utterances: []},
        {id: "19", group: 0, utterances: []},
        {id: "20", group: 1, utterances: []},
        {id: "21", group: 0, utterances: []},
        {id: "22a", group: 1, utterances: []},
        {id: "22b", group: 1, utterances: []},
        {id: "23", group: 0, utterances: []},
        {id: "24", group: 1, utterances: []},
        {id: "25", group: 0, utterances: []},
        {id: "26a", group: 1, utterances: []},
        {id: "26b", group: 1, utterances: []},
        {id: "27", group: 0, utterances: []},
        {id: "28a", group: 1, utterances: []},
        {id: "28b", group: 1, utterances: []},
        {id: "29", group: 0, utterances: []},
        {id: "30", group: 1, utterances: []},
        {id: "31", group: 0, utterances: []},
        {id: "32a", group: 1, utterances: []},
        {id: "32b", group: 1, utterances: []},
        {id: "33", group: 0, utterances: []},
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
      // if (Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1) {
      //   return node.group == 0 ? 'blue' : 'red'
      // }

      return node.group === 0 ? 'blue' : 'red'
    }

    function getLinkColor(node, link) {
      // return isNeighborLink(node, link) ? 'green' : '#E5E5E5'
        return 'black';
    }

    function getTextColor(node, neighbors) {
      // return Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1 ? 'green' : 'black'
        return 'black';
    }

    const width = window.innerWidth
    const height = window.innerHeight

    console.log(`window.innerWidth=${width} window.innerHeight=${height}`);

    const svg = d3.select('svg')
    svg.attr('width', width).attr('height', height)

    // simulation setup with all forces
    const linkForce = d3
      .forceLink()
      .id(function (link) { return link.id})
      .strength(function (link) { return link.strength})

    const simulation = d3
      .forceSimulation()
      .force('link', linkForce)
      .force('charge', d3.forceManyBody().strength(-50))
      .force('center', d3.forceCenter(width / 2, height / 2))
      // .force('collision', d3.forceCollide().radius(function(d) {
      //   return d.radius + 2
      //   })
      // )

    function validate(x, a, b) {
        if (x < a) x = a;
        if (x > b) x = b;
        return x;
    }

    const dragDrop = d3.drag().on('start', function (node) {
      node.fx = node.x
      node.fy = node.y
    }).on('drag', function (node) {
      simulation.alphaTarget(0.4).restart()
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
      const neighbors = getNeighbors(selectedNode)

      // we modify the styles to highlight selected nodes
      nodeElements.attr('fill', function (node) { return getNodeColor(node, neighbors) })
      textElements.attr('fill', function (node) { return getTextColor(node, neighbors) })
      linkElements.attr('stroke', function (link) { return getLinkColor(selectedNode, link) })
    }

    const linkElements = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links)
      .enter().append("line")
      .attr("stroke-width", 2)
      .attr("stroke", "rgba(50, 50, 50, 0.2)")
      .attr("visibility", d => d.target == "1" || (d.source.slice(-1) == "a" && d.target.slice(-1) == "b") ? "hidden" : "visible")

    const nodeElements = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(nodes)
      .enter().append("circle")
        .attr("r", circleRadius)
        .attr("fill", getNodeColor)
        .call(dragDrop)
        .on('click', selectNode)

    const textElements = svg.append("g")
      .attr("class", "texts")
      .selectAll("text")
      .data(nodes)
      .enter().append("text")
        .text(function (node) { return  node.label })
          .attr("font-size", 15)
          .attr("dx", d => d.id.slice(-1) == "b" ? -120 : 15)
        .attr("dy", d => d.id.slice(-1) == "b" ? -10: 4)

    // Add the arrowhead marker definition to the svg element
    const arrowHeadElements = svg
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
