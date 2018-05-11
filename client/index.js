import * as d3 from 'd3';

const width = 300;
const height = 300;

const svg = d3
  .select('svg')
  .attr('width', width)
  .attr('height', height);

function phyllotaxis(radius, theta) {
  return function(i) {
    var r = radius * Math.sqrt(i) / 2,
      a = theta * i;
    return {
      x: width / 2 + r * Math.cos(a),
      y: height / 2 + r * Math.sin(a)
    };
  };
}

const data = (count, f) => d3.range(count).map(f);

const transition = d3.transition().duration(1000);

let count = 0;

document.querySelector('button').addEventListener('click', () => {
  const circles = svg
    .selectAll('circle')
    .data(data(30, phyllotaxis(50, ++count)), (d, i) => i);

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
