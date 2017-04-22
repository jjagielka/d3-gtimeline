# d3-gtimeline

Google-like timeline chart.

## Installing

If you use NPM, `npm install d3-gtimeline`. Otherwise, download the [latest release](https://github.com/jjagielka/d3-gtimeline/releases/latest).

## API Reference

<a href="#timeline" name="timeline">#</a> <b>timeline</b>()

Example of the simple chart copied from google timeline chart manual:

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

More advanced example (as well from google timeline chart manual)

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


YOUR API DOCUMENTATION HERE. Use bold for symbols (such as constructor and method names) and italics for instances. See the other D3 modules for examples.
