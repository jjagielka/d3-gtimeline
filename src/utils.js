//import { createDuration } from 'moment/src/lib/duration/create';
//import {humanize} from 'moment/src/lib/duration/humanize';

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
