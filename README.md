# d3-gtimeline

Google-like timeline chart.

## Installing

If you use NPM, `npm install d3-gtimeline`. Otherwise, download the [latest release](https://github.com/jjagielka/d3-gtimeline/releases/latest).

## API Reference


<a href="#timeline" name="timeline">#</a> d3.<b>timeline</b>() [<>](https://github.com/jjagielka/d3-gtimeline/blob/master/src/timeline.js "Source")

Creates a function to generate charts on the selection. Use the standard D3 <i>selection</i>.<b>call</b> with <i>datum</i>.

Example below shows how to create the simple chart similar to the one from Google timeline chart manual:

```js
var chart = d3.timeline(),
    data = [
        [ 'Washington', '', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
        [ 'Adams',      '', new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
        [ 'Jefferson',  '', new Date(1801, 2, 4),  new Date(1809, 2, 4) ]
    ];

d3.select('div').datum(data).call(chart);
```

<img alt="Simple Chart" src="https://raw.githubusercontent.com/jjagielka/d3-gtimeline/master/img/simple.png" width="975" height="133">

More advanced example (as well based on the data from Google timeline chart manual)

```js
var chart = d3.timeline(),
    data = [
      [ 'President', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ 'President', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4) ],
      [ 'President', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4) ],
      [ 'Vice President', 'John Adams', new Date(1789, 3, 21), new Date(1797, 2, 4)],
      [ 'Vice President', 'Thomas Jefferson', new Date(1797, 2, 4), new Date(1801, 2, 4)],
      [ 'Vice President', 'Aaron Burr', new Date(1801, 2, 4), new Date(1805, 2, 4)],
      [ 'Vice President', 'George Clinton', new Date(1805, 2, 4), new Date(1812, 3, 20)],
      [ 'Secretary of State', 'John Jay', new Date(1789, 8, 25), new Date(1790, 2, 22)],
      [ 'Secretary of State', 'Thomas Jefferson', new Date(1790, 2, 22), new Date(1793, 11, 31)],
      [ 'Secretary of State', 'Edmund Randolph', new Date(1794, 0, 2), new Date(1795, 7, 20)],
      [ 'Secretary of State', 'Timothy Pickering', new Date(1795, 7, 20), new Date(1800, 4, 12)],
      [ 'Secretary of State', 'Charles Lee', new Date(1800, 4, 13), new Date(1800, 5, 5)],
      [ 'Secretary of State', 'John Marshall', new Date(1800, 5, 13), new Date(1801, 2, 4)],
      [ 'Secretary of State', 'Levi Lincoln', new Date(1801, 2, 5), new Date(1801, 4, 1)],
      [ 'Secretary of State', 'James Madison', new Date(1801, 4, 2), new Date(1809, 2, 3)]
    ];

d3.select('div').datum(data).call(chart);
```

<img alt="Presidents Chart" src="https://raw.githubusercontent.com/jjagielka/d3-gtimeline/master/img/presidents.png" width="976" height="132">

<a name="timeline_width" href="#timeline_width">#</a> <i>timeline</i>.<b>width</b>([<i>value</i>]) [<>](https://github.com/jjagielka/d3-gtimeline/blob/master/src/timeline.js#L152 "Source")

Returns or sets explicit width of the chart. If this value is <i>null</i>, width of the chart is adapted to the width of the parent node.

<a name="timeline_padding" href="#timeline_padding">#</a> <i>timeline</i>.<b>padding</b>([<i>value</i>]) [<>](https://github.com/jjagielka/d3-gtimeline/blob/master/src/timeline.js#L151 "Source")

Returns or sets padding value for elements in the timeline.

<a name="timeline_today" href="#timeline_today">#</a> <i>timeline</i>.<b>today</b>([<i>value</i>]) [<>](https://github.com/jjagielka/d3-gtimeline/blob/master/src/timeline.js#L151 "Source")

Returns or sets a boolean value to show/hide the today line on the timescale. Default: <i>false</i>.

<a name="timeline_duration" href="#timeline_duration">#</a> <i>timeline</i>.<b>duration</b>([<i>value</i>]) [<>](https://github.com/jjagielka/d3-gtimeline/blob/master/src/timeline.js#L151 "Source")

Returns or sets the duration of the horizontal animation. Default: <i>0</i>.

<a name="timeline_colors" href="#timeline_colors">#</a> <i>timeline</i>.<b>colors</b>([<i>array</i>]) [<>](https://github.com/jjagielka/d3-gtimeline/blob/master/src/timeline.js#L152 "Source")

Returns or sets array containing colors to be used. Default colorset contains Google colors.

<a name="timeline_reversed" href="#timeline_reversed">#</a> <i>timeline</i>.<b>reversed</b>([<i>boolean</i>]) [<>](https://github.com/jjagielka/d3-gtimeline/blob/master/src/timeline.js#L152 "Source")

If <i>true</i> flips the chart and shows the labels on the right side. Default value is <i>false</i> i.e. left side labels.

<img alt="Reversed Chart" src="https://raw.githubusercontent.com/jjagielka/d3-gtimeline/master/img/reversed.png" width="971" height="130">
