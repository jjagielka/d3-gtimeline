//import { createDuration } from 'moment/src/lib/duration/create';
//import {humanize} from 'moment/src/lib/duration/humanize';



export function f(value) {
    return function(d) {
        return value === undefined? d: d[value];
    }
}

//
// Function composition
//
Function.prototype.wrap = function(g) {
     var fn = this;
     return function() {
         return g.call(this, fn.apply(this, arguments));
     };
};


export function pipe(first) {
    const fns = Array.prototype.slice.call(arguments, 1);
    return function() {
        return fns.reduce(function(prevResult, fn) {
            return fn.call(this, prevResult)
        },first.apply(this, arguments))
    }
}

export function compose() {
    return pipe.apply(this, Array.prototype.slice.call(arguments).reverse());
}

export function curry(fn) {
    const args = Array.prototype.slice.call(arguments, 1);
    return function() {
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
    }
}

// https://zpao.com/posts/calling-an-array-of-functions-in-javascript/
// callbacks.forEach(Function.prototype.call, Function.prototype.call);

function map(func) {
    return function(array) { 
        return array.map(func)
    }
}

function apply(fn) {
    return function(array) {
        return fn.apply(this, array);
    }
}

//const results = (...fns) => (...args) => fns.map((fn) => fn.apply(this, args));

function results(...fns) {
    return function(...args) {
        return fns.map(function(fn) {
            return fn.apply(this, args);
        })
    }
}

function wrapEach(fn) {
    return function(...fns) {
        return results(fns).map(fn)
    }
}
 
// https://bjouhier.wordpress.com/2011/04/04/currying-the-callback-or-the-essence-of-futures/
   
export function durationFormat(start, end) {
    //return createDuration(end-start).humanize();
	if(moment)
    	return moment.duration(end-start).humanize();
		
    var seconds = d3.timeSecond.count(start,end),
        cut_off = 2;
    if (seconds < cut_off*60)
        return seconds + 's'
    else if (seconds < cut_off*60*60)
        return d3.timeMinute.count(start, end) + ' min'
    else if (seconds < cut_off*60*60*24)
        return d3.timeHour.count(start, end) + ' hours'
    else if (seconds < cut_off * 3600 * 24 * 30)
        return d3.timeDay.count(start, end) + ' day(s)'
    else if (seconds < cut_off * 3600 * 24 * 365)
        return d3.timeMonth.count(start, end) + ' month(s)'
    else 
        return d3.timeYear.count(start, end) + ' year(s)';

}
