//not to be confused with Node.js
let svg = d3
  .select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('background-color', '#e9dcd2');

// build the arrow.
svg
  .append('svg:defs')
  .selectAll('marker')
  .data(['end']) // Different link/path types can be defined here
  .enter()
  .append('svg:marker') // This section adds in the arrows
  .attr('id', String)
  .attr('viewBox', '0 -5 10 10')
  .attr('refX', 20)
  .attr('refY', -0.0)
  .attr('markerWidth', 8)
  .attr('markerHeight', 8)
  .attr('orient', 'auto')
  .append('svg:path')
  .attr('d', 'M0,-5L10,0L0,5')
  .attr('fill', 'gray');

// add the links and the arrows
let path = svg
  .append('svg:g')
  .selectAll('path')
  .data(force.links())
  .enter()
  .append('svg:path')
  .attr('class', function (d) {
    return 'link ' + d.type;
  })
  .attr('marker-end', 'url(#end)');

const defs = svg.append('defs');

data.forEach(function (d, i) {
  defs
    .append('pattern')
    .attr('id', 'imageFill' + d.source)
    .attr('patternUnits', 'userSpaceOnUse') // Using userSpaceOnUse
    .attr('patternUnits', 'userSpaceOnUse') // Using userSpaceOnUse
    .attr('x', 50)
    .attr('y', 50)
    .attr('width', 100) // Assuming a circle of radius 35; hence diameter = 70
    .attr('height', 100) // Adjust these if your circle's radius changes
    .append('image')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 100) // Corresponding to the circle's diameter
    .attr('height', 100) // Corresponding to the circle's diameter
    .attr('preserveAspectRatio', 'xMidYMid slice')
    .attr('xlink:href', d.img); // replace with your image URL
});

// define the nodes
let node = svg
  .selectAll('.node')
  .data(force.nodes())
  .enter()
  .append('g')
  .attr('class', 'node')
  .on('click', click)
  .call(force.drag);

// add the nodes
node.append('circle').each(function (d) {
  const circleSelection = d3.select(this);
  if (data.some((obj) => obj.source === d.name)) {
    circleSelection.attr('r', 50).attr('fill', 'url(#imageFill' + d.name + ')');
  } else {
    circleSelection
      .attr('r', 15) // Example smaller radius for non-matching nodes
      .attr('fill', 'white');
  }
});

// add the text
node
  .append('text')
  .attr('x', 60)
  .attr('dy', '.35em')
  .style('font', '20px sans-serif')
  .text(function (d) {
    return d.name;
  });

node
  .append('text')
  .attr('x', 60)
  .attr('dy', 35)
  .style('font', '16px sans-serif')
  .text(function (d) {
    // Find the corresponding data entry for the node
    let entry = data.find((item) => item.source === d.name);
    // If found, return the type, otherwise return an empty string
    return entry ? '[' + entry.type + ']' : '';
  });
