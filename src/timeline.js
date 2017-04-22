import {timelineAxisLeft, timelineAxisRight} from "./timelineaxis";
import tooltip from "./tooltip";
import {durationFormat} from "./utils";

var google_colors = [ 
	"#4285f4", "#db4437", "#f4b400", "#0f9d58", "#ab47bc", "#5e97f5", "#e06055", 
	"#f5bf26", "#33ab71", "#b762c6", "#00acc1", "#ff855f", "#9e9d24", "#26b8ca", "#ff7043"];

function getFontSize(element){
    var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    return parseFloat(style); 
}

function luma_BT709(c) {
	return (c.r*0.299 + c.g*0.587 + c.b*0.114);
}

// if (red*0.299 + green*0.587 + blue*0.114) > 186 use #000000 else use #ffffff
function isBright(color) {
    return luma_BT709(color) > 165; // not as original above, but I prefer that value
}

function textColor(value) {
    return isBright(d3.color(value))? 'black': 'white';
}

export default function() {
    var colors = google_colors,
        padding = 5,
        reversed = false,
        dates,
        const_width,
        labels = (d) => d[0],
        names  = (d) => d[1],
        starts = (d) => d[2],
        ends   = (d) => d[3];

    function trim_texts(tasks) {
        tasks.each(function (d, i) {        
          var task = d3.select(this),
              width = task.select('rect').attr('width') - 2*padding,
              text = task.select('text'),
              ratio = width / text.node().getComputedTextLength(),
              string = text.text();

          if(ratio < 1)
              text.text(string.substring(0, Math.floor(string.length * ratio)));
        });
    }


    function chart(selection) {
        var 
            data = selection.datum(),
            rows = d3.map(data, labels).keys(),
            tip = new tooltip(tooltip_html),
            cScale = d3.scaleOrdinal(colors);

        dates = dates || [d3.min(data, starts), d3.max(data, ends)];

        selection.each(function(data){
            var width = const_width || this.getBoundingClientRect().width,
                height = rows.length * (getFontSize(this) + 4*padding),
                yScale = d3.scaleBand().domain(rows).range([0, height]), //.padding(0.1),
                xScale = d3.scaleTime().domain(dates),
                yAxis = (reversed? timelineAxisRight: timelineAxisLeft)(yScale).width(width),
                svg = d3.select(this).append('svg').attr('class', 'timeline');

            svg.attr('width', width);
            svg.attr('height', height + 20); // margin.bottom
            
            var g = svg.append('g');

            var yGroup = g.append('g')
                .attr('class', 'y axis')
                .call(yAxis);

            var range = yAxis.range();
            xScale.range([range[0]+padding, range[1]-padding]).clamp(true);
            var xAxis = d3.axisBottom(xScale);
            var xGroup = g.append('g')
                .attr('class', 'x axis')
                .attr("transform", "translate(0," + height + ")")
                  .call(xAxis);

            xGroup.select('.domain').remove();
            xGroup.selectAll('.tick line').attr('stroke', '#AAA');

            var ticks = xScale.ticks().map(xScale);        
            yGroup.call(yAxis.draw_ticks, ticks);

            var tasks = g.selectAll('g.task').data(data);

            tasks.exit().remove();

            var tasks_enter = tasks.enter()
                .append('g')
                .classed('task', true)
                .attr("transform", (d) => "translate(" + xScale(starts(d)) + "," + yScale(labels(d)) + ")");

            tasks_enter
                .append('rect')
                .attr('width', (d) => xScale(ends(d))-xScale(starts(d)))
                .attr('y', padding)
                .attr('height', yScale.bandwidth() - 2*padding)
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide)
                .style('fill', (d) => cScale(names(d)));

            tasks_enter
                .append('text')
                .attr("text-anchor", "start")
                .attr('fill', (d) => textColor(cScale(names(d))))
                .attr('pointer-events', 'none')
                .attr('dx', padding)
                .attr('y', yScale.bandwidth()/2)
                .attr('dy', "0.32em")
                .text(names);

            tasks = tasks.merge(tasks_enter);
            tasks.call(trim_texts, padding);
        });
    }

    //chart.axis     = function(_) { return arguments.length? (axis  = _, chart): axis ; };
    chart.dates    = function(_) { return arguments.length? (dates = _, chart): dates; };
    chart.width    = function(_) { return arguments.length? (const_width = _, chart): const_width; };
    chart.colors   = function(_) { return arguments.length? (colors = _, chart): colors; };
    chart.padding  = function(_) { return arguments.length? (padding = _, chart): padding; };
    chart.reversed = function(_) { return arguments.length? (reversed = _, chart): reversed; };

    return chart;

    function tooltip_html(d,i) {
        var format = (d)=>d3.timeFormat("%Y-%m-%d")(d3.isoParse(d));
		return  '<b>'+ names(d) + '</b>' + 
        '<hr style="margin: 2px 0 2px 0">' +
        format(starts(d)) + ' - ' + format(ends(d)) + '<br>' +
        durationFormat(starts(d), ends(d));
    }
}
