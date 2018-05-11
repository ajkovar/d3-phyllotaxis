import * as d3 from 'd3';

const width = 300;
const height = 300;

const svg = d3
  .select('svg')
  .attr('width', width)
  .attr('height', height);

const data = () =>
  d3
    .range(10)
    .map(() => ({x: Math.random() * width, y: Math.random() * height}));

const circles = svg.selectAll('circle').data(data(), (d, i) => i);

circles
  .append('circle')
  .attr('r', 5)
  .attr('cx', d => d.x)
  .attr('cy', d => d.y);
