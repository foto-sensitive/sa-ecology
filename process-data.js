// Extracting nodes
let nodesSet = new Set();

data.forEach((d) => {
  nodesSet.add(d.source);
  if (Array.isArray(d.target)) {
    d.target.forEach((t) => nodesSet.add(t));
  } else {
    nodesSet.add(d.target);
  }
});

let nodes = {};
Array.from(nodesSet).forEach((d) => {
  nodes[d] = { name: d };
});

// Extracting links
let links = [];

data.forEach((d) => {
  if (Array.isArray(d.target)) {
    d.target.forEach((t) => {
      links.push({ source: nodes[d.source], target: nodes[t] });
    });
  } else {
    if (d.target !== null)
      links.push({ source: nodes[d.source], target: nodes[d.target] });
  }
});

let width = window.innerWidth,
  height = window.innerHeight;

let force = d3.layout
  .force()
  .nodes(d3.values(nodes))
  .links(links)
  .size([width, height])
  .linkDistance(300)
  .charge(-1000)
  .on('tick', tick)
  .start();

// Set the range
let v = d3.scale.linear().range([0, 100]);
