export default function (func) {

  const selection = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
  
  this.show = function(){
     selection.transition()
         .duration(100)
         .style("opacity", .95);
     selection.html(func.apply(null, arguments))
         .style("left", (d3.event.pageX) + "px")
         .style("top", (d3.event.pageY - 28) + "px");
  };

  this.hide = function(d){
    selection.transition()
       .duration(100)
       .style("opacity", 0);
  }
}

