// https://observablehq.com/@d3/circle-dragging-i@125
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Drag (SVG)

Each circle’s datum is an object with *x* and *y* properties. The circle is raised to the foreground at the start of a drag, and a temporary stroke is applied during drag for visual feedback.`
)});
  main.variable(observer("chart")).define("chart", ["d3","width","height","radius","drag"], function(d3,width,height,radius,drag)
{
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .attr("stroke-width", 2);

  const circles = d3.range(20).map(i => ({
    x: Math.random() * (width - radius * 2) + radius,
    y: Math.random() * (height - radius * 2) + radius,
  }));

  svg.selectAll("circle")
    .data(circles)
    .join("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", radius)
      .attr("fill", (d, i) => d3.schemeCategory10[i % 10])
      .call(drag);

  return svg.node();
}
);
  main.variable(observer("drag")).define("drag", ["d3"], function(d3)
{

  function dragstarted(event, d) {
    d3.select(this).raise().attr("stroke", "black");
  }

  function dragged(event, d) {
    d3.select(this).attr("cx", d.x = event.x).attr("cy", d.y = event.y);
  }

  function dragended(event, d) {
    d3.select(this).attr("stroke", null);
  }

  return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
}
);
  main.variable(observer("height")).define("height", function(){return(
600
)});
  main.variable(observer("radius")).define("radius", function(){return(
32
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@6")
)});
  return main;
}
