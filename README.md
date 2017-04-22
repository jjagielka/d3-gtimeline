# d3-gtimeline

Google-like timeline chart.

## Installing

If you use NPM, `npm install d3-gtimeline`. Otherwise, download the [latest release](https://github.com/jjagielka/d3-gtimeline/releases/latest).

## API Reference

YOUR API DOCUMENTATION HERE. Use bold for symbols (such as constructor and method names) and italics for instances. See the other D3 modules for examples.

<a href="#timeline" name="timeline">#</a> <b>timeline</b>()

Creates a timeline chart.

```js
var chart = d3.timeline(),
	data = [
        [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
        [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
        [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]
    ];

d3.select('div').data().call(chart);
```


<img alt="Simple Chart" src="https://raw.githubusercontent.com/jjagielka/d3-gtimeline/master/img/simple.png" width="975" height="133">

aaaaa


[<img alt="Presidents Chart" src="https://raw.githubusercontent.com/jjagielka/d3-gtimeline/master/img/presidents.png" width="976" height="132">](link)

<script type="text/javascript" src="abd"></script>
<div id="chart"></div>
<script type="text/javascript">
var chart = d3.timeline(),
	data = [
        [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
        [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
        [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]
    ];

d3.select('div').data().call(chart);	
</script>
