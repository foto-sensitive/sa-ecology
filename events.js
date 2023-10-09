// add the curvy lines
function tick() {
  path.attr('d', function (d) {
    let dx = d.target.x - d.source.x,
      dy = d.target.y - d.source.y,
      dr = Math.sqrt(dx * dx + dy * dy);
    return (
      'M' +
      d.source.x +
      ',' +
      d.source.y +
      'A' +
      dr +
      ',' +
      dr +
      ' 0 0,1 ' +
      d.target.x +
      ',' +
      d.target.y
    );
  });

  node.attr('transform', function (d) {
    return 'translate(' + d.x + ',' + d.y + ')';
  });
}

// Action to take on mouse click
function click() {
  const regularSize = 110;
  const largeSize = 300;
  const clickedNode = d3.select(this);
  const clickedName = clickedNode.data()[0].name;

  // Check if the clickedName matches a source in the data array
  const species = data.find(
    (item) => item.source.toLowerCase() === clickedName
  );

  if (!species) {
    // No matching source found in data array
    return;
  }

  // Reset all nodes to their regular size
  d3.selectAll('.node')
    .filter(function () {
      return data.some(
        (item) => item.source === d3.select(this).data()[0].name
      );
    })
    .select('circle')
    .transition()
    .duration(750)
    .attr('r', 50);

  // Reset all image patterns to their regular size
  svg
    .selectAll('defs > pattern')
    .transition()
    .duration(750)
    .attr('x', regularSize / 2)
    .attr('y', regularSize / 2)
    .attr('width', regularSize)
    .attr('height', regularSize)
    .select('image')
    .attr('width', regularSize)
    .attr('height', regularSize);

  // Enlarge clicked node's image pattern
  defs
    .select('#imageFill' + clickedName)
    .transition()
    .duration(750)
    .attr('x', largeSize / 2)
    .attr('y', largeSize / 2)
    .attr('width', largeSize)
    .attr('height', largeSize)
    .select('image')
    .attr('width', largeSize)
    .attr('height', largeSize);

  // Enlarge clicked node and possibly append a description
  clickedNode
    .select('circle')
    .transition()
    .duration(750)
    .attr('r', 150)
    .each('end', function () {
      const species = data.find(
        (item) => item.source.toLowerCase() === clickedName
      );

      if (species?.description) {
        const radius = 140;
        const side = 2 * radius * Math.cos(Math.PI / 4);

        d3.select(this.parentNode) // Go up one level to the node group
          .append('circle')
          .attr('class', 'tint-overlay')
          .attr('r', 150) // Radius matches the enlarged circle
          .style('fill', 'rgba(0, 0, 0, 0.4)'); // Semi-transparent black for tint

        d3.select(this.parentNode) // Go up one level to the node group
          .append('foreignObject')
          .attr('width', side)
          .attr('height', side)
          .attr('x', -side / 2)
          .attr('y', -side / 2)
          .append('xhtml:body')
          .style('color', 'white')
          .style('font-family', 'sans-serif') // Use a serif font
          .style('font-size', '18px') // Increase font size, adjust as needed
          .html(species.description);
      }
    });

  // Remove any existing foreignObject elements (previous descriptions)
  d3.select('foreignObject').remove();
  d3.selectAll('.tint-overlay').remove(); // Remove existing tints
}
