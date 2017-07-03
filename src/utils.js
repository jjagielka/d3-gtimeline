//var moment = require("moment"),
//    d3 = require("d3");
    
//import { createDuration } from 'moment/src/lib/duration/create';
//import {humanize} from 'moment/src/lib/duration/humanize';

import {default as moment} from 'moment/moment';

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

//
// Function composition
//
Function.prototype.wrap = function(g) {
     var fn = this;
     return function() {
         return g.call(this, fn.apply(this, arguments));
     };
};

Function.prototype.compose = function(g) {
     var fn = this;
     return function() {
         return fn.call(this, g.apply(this, arguments));
     };
};

export function compose() {
    var funcs = [].slice.call(arguments, 1),
        first = arguments[0];
    return function () {
        return funcs.reduce(function(value, fn) {
            return fn.call(this, value);
        }, first.apply(this, arguments));
    }
}

export function f(value) {
    return function(d) {
        return value === undefined? d: d[value];
    }
}