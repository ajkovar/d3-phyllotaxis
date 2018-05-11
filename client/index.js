import * as d3 from 'd3';

const width = 300;
const height = 300;

const svg = d3
  .select('svg')
  .attr('width', width)
  .attr('height', height);

const data = count =>
  d3
    .range(count)
    .map(() => ({x: Math.random() * width, y: Math.random() * height}));

const transition = d3.transition().duration(1000);

document.querySelector('button').addEventListener('click', () => {
  const circles = svg
    .selectAll('circle')
    .data(data(Math.round(Math.random() * 10)), (d, i) => i);

  circles
    .transition(transition)
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('fill', 'blue');

  circles
    .enter()
    .append('circle')
    .attr('r', 5)
    .attr('cx', d => d.x)
    .attr('cy', d => d.y);

  circles.exit().remove();
});
