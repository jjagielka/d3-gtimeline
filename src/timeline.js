import * as d3 from "./d3";
import { timelineAxisLeft, timelineAxisRight } from "./timelineaxis";
import tooltip from "./tooltip";
import { durationFormat, f, pipe } from "./utils";

const google_colors = [
  "#4285f4",
  "#db4437",
  "#f4b400",
  "#0f9d58",
  "#ab47bc",
  "#5e97f5",
  "#e06055",
  "#f5bf26",
  "#33ab71",
  "#b762c6",
  "#00acc1",
  "#ff855f",
  "#9e9d24",
  "#26b8ca",
  "#ff7043",
];

function getFontSize(element) {
  const style = window.getComputedStyle(element, null).getPropertyValue("font-size");
  return parseFloat(style);
}

function luma_BT709(c) {
  return c.r * 0.299 + c.g * 0.587 + c.b * 0.114;
}

function isBright(color) {
  return luma_BT709(color) > 165; // original is 186, but I prefer that value
}

function textColor(value) {
  return isBright(d3.color(value)) ? "black" : "white";
}

function translate(x, y) {
  return "translate(" + x + "," + y + ")";
}

export default function () {
  let colors = google_colors,
    padding = 5,
    reversed = false,
    today = false,
    dates,
    const_width,
    duration = 0,
    labels = f(0),
    names = f(1),
    starts = f(2),
    ends = f(3);

  function trim_text(selection) {
    selection.each(function (d, i) {
      const task = d3.select(this.parentNode),
        text = task.select("text"),
        rect = task.select("rect"),
        rect_width = rect.attr("width") - 2 * padding,
        string = names(d);

      text.text(string);
      let text_width = text.node().getComputedTextLength();

      if (text_width > rect_width) {
        const ratio = rect_width < 0 ? 0 : rect_width / text_width,
          length = Math.floor(string.length * ratio);

        text.text(length > 2 ? string.slice(0, length - 2) + "…" : "");
      }
    });
  }
  function tween_text(d, i) {
    // this is overkill if duration is 0
    d3.active(this).tween("text", function () {
      return function (t) {
        trim_text(d3.select(this));
      };
    });
  }

  function chart(selection) {
    const data = selection.datum(),
      rows = new Set(d3.map(data, labels)),
      tip = new tooltip(tooltip_html),
      cScale = d3.scaleOrdinal(colors);
    dates = dates || [d3.min(data, starts), d3.max(data, ends)];

    if (today) dates = d3.extent(dates.concat(new Date()));

    selection.each(function (data) {
      const width = const_width || this.getBoundingClientRect().width,
        height = rows.size * (getFontSize(this) + 4 * padding),
        yScale = d3.scaleBand().domain(rows).range([0, height]), //.padding(0.1),
        xScale = d3.scaleTime().domain(dates),
        yAxis = (reversed ? timelineAxisRight : timelineAxisLeft)(yScale).width(width),
        svg = d3.select(this).selectAll("svg").data([1]).join("svg");

      svg
        .attr("class", "timeline")
        .attr("width", width)
        .attr("height", height + 20); // margin.bottom

      const g = svg.append("g");

      const yGroup = g.append("g").attr("class", "y axis").call(yAxis);

      let range = yAxis.range();
      xScale.range([range[0] + padding, range[1] - padding]).clamp(true);

      const xAxis = d3.axisBottom(xScale);
      const xGroup = g
        .append("g")
        .attr("class", "x axis")
        .attr("transform", translate(0, height))
        .call(xAxis);

      yGroup.on("offset", () => {
        range = yAxis.range();
        xScale.range([range[0] + padding, range[1] - padding]).clamp(true);
        xAxis.ticks(Math.min((range[1] - range[0]) / 70, 10));
        xGroup.call(xAxis);
        tasks
          .attr("transform", (d) => translate(xScale(starts(d)), yScale(labels(d))))
          .selectAll("rect")
          .attr("width", (d) => xScale(ends(d)) - xScale(starts(d)))
          .call(trim_text);

        yGroup.call(yAxis.draw_ticks, xScale.ticks().map(xScale));
      });

      xGroup.select(".domain").remove();
      xGroup.selectAll(".tick line").attr("stroke", "#AAA");

      const ticks = xScale.ticks().map(xScale);
      yGroup.call(yAxis.draw_ticks, ticks);

      let tasks = g.selectAll("g.task").data(data);

      tasks.exit().remove();

      const tasks_enter = tasks.enter().append("g").classed("task", true);

      tasks_enter
        .append("rect")
        .attr("y", padding)
        .attr("height", yScale.bandwidth() - 2 * padding)
        .on("mouseover", tip.show)
        .on("mouseout", tip.hide)
        .style("fill", pipe(names, cScale));

      tasks_enter
        .append("text")
        .attr("text-anchor", "start")
        // .attr('fill', d => textColor(cScale(names(d))))
        // .attr('fill', compose(textColor, cScale, names))
        .attr("fill", pipe(names, cScale, textColor))
        .attr("pointer-events", "none")
        .attr("dx", padding)
        .attr("y", yScale.bandwidth() / 2)
        .attr("dy", "0.32em")
        .text(names);

      tasks = tasks.merge(tasks_enter);

      tasks
        .attr("transform", (d) => translate(range[0], yScale(labels(d))))
        .selectAll("rect")
        .attr("width", 0);

      tasks
        .transition()
        .duration(duration)
        .attr("transform", (d) => translate(xScale(starts(d)), yScale(labels(d))))
        .selectAll("rect")
        .attr("width", (d) => xScale(ends(d)) - xScale(starts(d)))
        .on("start", tween_text);

      if (today)
        g.append("path")
          .attr("stroke", "red")
          .attr("d", "M" + xScale(new Date()) + ",0.5V" + height);
    });
  }

  //chart.axis     = function(_) { return arguments.length? (axis  = _, chart): axis ; };
  chart.dates = function (_) {
    return arguments.length ? ((dates = _), chart) : dates;
  };
  chart.width = function (_) {
    return arguments.length ? ((const_width = _), chart) : const_width;
  };
  chart.today = function (_) {
    return arguments.length ? ((today = _), chart) : today;
  };
  chart.colors = function (_) {
    return arguments.length ? ((colors = _), chart) : colors;
  };
  chart.padding = function (_) {
    return arguments.length ? ((padding = _), chart) : padding;
  };
  chart.reversed = function (_) {
    return arguments.length ? ((reversed = _), chart) : reversed;
  };
  chart.duration = function (_) {
    return arguments.length ? ((duration = _), chart) : duration;
  };

  return chart;

  function tooltip_html(event, d) {
    const format = pipe(d3.isoParse, d3.timeFormat("%Y-%m-%d"));
    return (
      "<b>" +
      names(d) +
      "</b>" +
      '<hr style="margin: 2px 0 2px 0">' +
      format(starts(d)) +
      " - " +
      format(ends(d)) +
      "<br>" +
      durationFormat(starts(d), ends(d))
    );
  }
}
