
var css = 'div.tooltip {\
        position: absolute;\
        text-align: center;\
        padding: 5px;\
        /* font: 12px sans-serif; */\
        background: white;\
        border: 1px solid #AAA;\
        border-radius: 2px;\
        pointer-events: none;\
      }';

export default function (html_func) {

    d3.select('head')
        .selectAll('#tooltip').data([1]).enter()
            .append('style')
            .attr('id', 'tooltip')
            .text(css);

    var selection = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
  
    selection.show = function(){
        selection.transition()
            .duration(100)
            .style("opacity", .95);
        selection.html(html_func.apply(null, arguments))
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
    };

    selection.hide = function(d){
        selection.transition()
            .duration(100)
            .style("opacity", 0);
    }

    return selection;
}
