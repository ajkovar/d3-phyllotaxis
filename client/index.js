import * as d3 from "d3";

const width = 600;
const height = 600;

const svg = d3.select("svg").attr("width", width).attr("height", height);

function phyllotaxis(radius, theta) {
  return function (i) {
    var r = (radius * Math.sqrt(i)) / 2,
      a = theta * i;
    return {
      x: width / 2 + r * Math.cos(a),
      y: height / 2 + r * Math.sin(a),
    };
  };
}
const data = (count, f) => d3.range(count).map(f);

const transition = d3.transition().duration(1000);

let count = 200;

const color = d3
  .scaleLinear()
  .domain([0, count])
  .interpolate(d3.interpolateRgb.gamma(3))
  .range([d3.rgb("#f00"), d3.rgb("#00f")]);

let angle = 0;

document.querySelector("button").addEventListener("click", () => {
  const circles = svg
    .selectAll("circle")
    .data(data(count, phyllotaxis(40, ++angle)), (d, i) => i);

  circles
    .interrupt()
    .transition(transition)
    .style("fill", (d, i) => color(i))
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y);

  circles
    .enter()
    .append("circle")
    .style("fill", (d, i) => color(i))
    .attr("r", 5)
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y);

  circles.exit().remove();
});
