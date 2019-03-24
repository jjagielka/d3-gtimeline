import tooltip from "./tooltip";

function identity(x) {
    return x;
}

function max_text_width(selection) {
    return d3.max(selection.nodes().map(d => d.getComputedTextLength()));
}

function trim_long_string(value) {
    return function(d){
        return d.length > value? d.slice(0, value-1)+'\u2026': d
    }
}

const right = 1,
    left = 2;

function timelineAxis(orient, scale) {
    var colors = ['#FFF','#EEE'],
        padding = 5,
        range,
        line_color = '#AAA',
        trim = 40,
        width = 100;

    function axis(selection) {
        var domain = scale.domain(),
            tip = tooltip(identity),
            colorscale = d3.scaleOrdinal(colors),
            invertscale = d3.scaleOrdinal(colors.reverse()),
            labels = trim_long_string(trim),
            row = selection.selectAll('.row').data(domain, scale).order(),
            rowEnter = row.enter().append('g').attr('class', 'row'),
            rowExit = row.exit(),
            texts = row.select('text');

        row = row.merge(rowEnter)
            .attr("transform", (d)=>"translate(0," + scale(d) + ")");

        rowExit.remove();

        rowEnter.append('rect')
            .attr('y', 0.5)
            .attr('width', width)
            .attr('height', scale.bandwidth())
            .attr('stroke', line_color)
            .attr('stroke-width', 0.75)
            .attr('fill', colorscale);  // should be re-done if domain changed?

        rowEnter.append('path')
            .attr('stroke', invertscale);

        texts = texts.merge(rowEnter.append('text')
            .attr('y', scale.bandwidth()/2)
            .attr('dy', "0.32em")
            .on('mouseover', function(d) {
                if(d3.select(this).text() != d)
                    tip.show(d);
            })
            .on('mouseout', tip.hide))
        .text(labels);

        var offset = max_text_width(texts) + 2*padding;
        offset = orient === right ? width - offset: offset;

        range = orient === right ? [0, offset]: [offset, width];

        texts
            .attr("text-anchor", orient === right ? "start" : "end")
            .attr('dx', orient === right ? padding: -padding)
            .attr('x', offset);

        selection.append('path')
            .attr('stroke',  line_color)
            .attr('d','M'+(offset+.5)+',0.5V'+scale.range()[1]);
    }

    axis.draw_ticks = function(selection, ticks) {
        selection.selectAll('.row').select('path')
            .attr('d', ticks.map((t)=> 'M'+t+','+1+'v'+(scale.bandwidth()-1)).join(''));
    }

    axis.scale   = function(_) { return arguments.length? (scale   = _, axis): scale };
    axis.width   = function(_) { return arguments.length? (width   = _, axis): width };
    axis.colors  = function(_) { return arguments.length? (colors  = _, axis): colors };
    axis.padding = function(_) { return arguments.length? (padding = _, axis): padding };
    axis.range   = function(_) { return arguments.length? (range   = _, axis): range };
    axis.trim    = function(_) { return arguments.length? (trim    = _, axis): trim };

    return axis;
}

export function timelineAxisLeft(scale) {
  return timelineAxis(left, scale);
}

export function timelineAxisRight(scale) {
  return timelineAxis(right, scale);
}
