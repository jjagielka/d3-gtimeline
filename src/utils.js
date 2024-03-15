import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(duration);
dayjs.extend(relativeTime);

export function durationFormat(start, end) {
  return dayjs.duration(end - start).humanize();
}

export function pipe() {
  const funcs = Array.prototype.slice.call(arguments, 0);
  return function (data) {
    return funcs.reduce((v, f) => f(v), data);
  };
}

export function f(value) {
  return function (d) {
    return value === undefined ? d : d[value];
  };
}
