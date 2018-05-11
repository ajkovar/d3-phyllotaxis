import * as d3 from 'd3';

const width = 300;
const height = 300;

const svg = d3
  .select('svg')
  .attr('width', width)
  .attr('height', height);

svg
  .append('circle')
  .attr('r', 5)
  .attr('cx', width / 2)
  .attr('cy', height / 2);

const circles = svg.selectAll('circle');
console.log(circles.size());
