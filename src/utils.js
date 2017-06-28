//import { createDuration } from 'moment/src/lib/duration/create';
//import {humanize} from 'moment/src/lib/duration/humanize';


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
