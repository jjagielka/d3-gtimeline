export * from "d3";
import N from "dayjs";
const J = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function V(n) {
  d3.select("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(J);
  const r = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return r.show = function(m) {
    r.transition().duration(100).style("opacity", 0.95), r.html(n.apply(null, arguments)).style("left", m.pageX + "px").style("top", m.pageY - 28 + "px");
  }, r.hide = function(m) {
    r.transition().duration(100).style("opacity", 0);
  }, r;
}
function X(n) {
  return d3.max(n.nodes().map((r) => r.getComputedTextLength()));
}
function Z(n) {
  return function(r) {
    return r.length > n ? r.slice(0, n - 1) + "…" : r;
  };
}
const H = 1, q = 2;
function G(n, r) {
  let m = ["#FFF", "#EEE"], u = 5, x, M = "#AAA", A = 40, v = 100, c;
  function i(o) {
    let S = r.domain(), k = V((f) => f), l = d3.scaleOrdinal(m), T = d3.scaleOrdinal(m.reverse()), a = Z(A), h = o.selectAll(".row").data(S, r).order(), p = h.enter().append("g").attr("class", "row"), D = h.exit(), $ = h.select("text");
    h = h.merge(p).attr("transform", (f) => "translate(0," + r(f) + ")"), D.remove(), p.append("rect").attr("y", 0.5).attr("width", v).attr("height", r.bandwidth()).attr("stroke", M).attr("stroke-width", 0.75).attr("fill", l), p.append("path").attr("stroke", T), $ = $.merge(
      p.append("text").attr("y", r.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(f, s) {
        d3.select(this).text() != s && k.show(s);
      }).on("mouseout", k.hide)
    ).text(a), c === void 0 && (c = X($) + 2 * u, c = n === H ? v - c : c), x = n === H ? [0, c] : [c, v], $.attr("text-anchor", n === H ? "start" : "end").attr("dx", n === H ? u : -u).attr("x", c);
    const _ = function(f, s) {
      c = Math.max(10, Math.min(v - 10, c + f.dx)), d3.select(this).attr("d", "M" + c + ",0.5V" + r.range()[1]), $.attr("x", c), x = n === H ? [0, c] : [c, v], o.dispatch("offset", { detail: { offset: c } });
    };
    o.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", M).attr("stroke-width", 1.75).attr("d", "M" + (c + 0.5) + ",0.5V" + r.range()[1]).style("cursor", "ew-resize").call(d3.drag().on("drag", _));
  }
  return i.draw_ticks = function(o, S) {
    o.selectAll(".row").select("path").attr("d", S.map((k) => "M" + k + ",1v" + (r.bandwidth() - 1)).join(""));
  }, i.scale = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.width = function(o) {
    return arguments.length ? (v = o, i) : v;
  }, i.colors = function(o) {
    return arguments.length ? (m = o, i) : m;
  }, i.padding = function(o) {
    return arguments.length ? (u = o, i) : u;
  }, i.range = function(o) {
    return arguments.length ? (x = o, i) : x;
  }, i.trim = function(o) {
    return arguments.length ? (A = o, i) : A;
  }, i.offset = function(o) {
    return arguments.length ? (c = o, i) : c;
  }, i;
}
function K(n) {
  return G(q, n);
}
function Q(n) {
  return G(H, n);
}
var L = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function I(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var R = { exports: {} };
(function(n, r) {
  (function(m, u) {
    n.exports = u();
  })(L, function() {
    var m, u, x = 1e3, M = 6e4, A = 36e5, v = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, i = 31536e6, o = 2628e6, S = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, k = { years: i, months: o, days: v, hours: A, minutes: M, seconds: x, milliseconds: 1, weeks: 6048e5 }, l = function(s) {
      return s instanceof _;
    }, T = function(s, e, t) {
      return new _(s, t, e.$l);
    }, a = function(s) {
      return u.p(s) + "s";
    }, h = function(s) {
      return s < 0;
    }, p = function(s) {
      return h(s) ? Math.ceil(s) : Math.floor(s);
    }, D = function(s) {
      return Math.abs(s);
    }, $ = function(s, e) {
      return s ? h(s) ? { negative: !0, format: "" + D(s) + e } : { negative: !1, format: "" + s + e } : { negative: !1, format: "" };
    }, _ = function() {
      function s(t, d, w) {
        var g = this;
        if (this.$d = {}, this.$l = w, t === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), d)
          return T(t * k[a(d)], this);
        if (typeof t == "number")
          return this.$ms = t, this.parseFromMilliseconds(), this;
        if (typeof t == "object")
          return Object.keys(t).forEach(function(Y) {
            g.$d[a(Y)] = t[Y];
          }), this.calMilliseconds(), this;
        if (typeof t == "string") {
          var b = t.match(S);
          if (b) {
            var y = b.slice(2).map(function(Y) {
              return Y != null ? Number(Y) : 0;
            });
            return this.$d.years = y[0], this.$d.months = y[1], this.$d.weeks = y[2], this.$d.days = y[3], this.$d.hours = y[4], this.$d.minutes = y[5], this.$d.seconds = y[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var e = s.prototype;
      return e.calMilliseconds = function() {
        var t = this;
        this.$ms = Object.keys(this.$d).reduce(function(d, w) {
          return d + (t.$d[w] || 0) * k[w];
        }, 0);
      }, e.parseFromMilliseconds = function() {
        var t = this.$ms;
        this.$d.years = p(t / i), t %= i, this.$d.months = p(t / o), t %= o, this.$d.days = p(t / v), t %= v, this.$d.hours = p(t / A), t %= A, this.$d.minutes = p(t / M), t %= M, this.$d.seconds = p(t / x), t %= x, this.$d.milliseconds = t;
      }, e.toISOString = function() {
        var t = $(this.$d.years, "Y"), d = $(this.$d.months, "M"), w = +this.$d.days || 0;
        this.$d.weeks && (w += 7 * this.$d.weeks);
        var g = $(w, "D"), b = $(this.$d.hours, "H"), y = $(this.$d.minutes, "M"), Y = this.$d.seconds || 0;
        this.$d.milliseconds && (Y += this.$d.milliseconds / 1e3, Y = Math.round(1e3 * Y) / 1e3);
        var j = $(Y, "S"), z = t.negative || d.negative || g.negative || b.negative || y.negative || j.negative, O = b.format || y.format || j.format ? "T" : "", E = (z ? "-" : "") + "P" + t.format + d.format + g.format + O + b.format + y.format + j.format;
        return E === "P" || E === "-P" ? "P0D" : E;
      }, e.toJSON = function() {
        return this.toISOString();
      }, e.format = function(t) {
        var d = t || "YYYY-MM-DDTHH:mm:ss", w = { Y: this.$d.years, YY: u.s(this.$d.years, 2, "0"), YYYY: u.s(this.$d.years, 4, "0"), M: this.$d.months, MM: u.s(this.$d.months, 2, "0"), D: this.$d.days, DD: u.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: u.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: u.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: u.s(this.$d.seconds, 2, "0"), SSS: u.s(this.$d.milliseconds, 3, "0") };
        return d.replace(c, function(g, b) {
          return b || String(w[g]);
        });
      }, e.as = function(t) {
        return this.$ms / k[a(t)];
      }, e.get = function(t) {
        var d = this.$ms, w = a(t);
        return w === "milliseconds" ? d %= 1e3 : d = w === "weeks" ? p(d / k[w]) : this.$d[w], d || 0;
      }, e.add = function(t, d, w) {
        var g;
        return g = d ? t * k[a(d)] : l(t) ? t.$ms : T(t, this).$ms, T(this.$ms + g * (w ? -1 : 1), this);
      }, e.subtract = function(t, d) {
        return this.add(t, d, !0);
      }, e.locale = function(t) {
        var d = this.clone();
        return d.$l = t, d;
      }, e.clone = function() {
        return T(this.$ms, this);
      }, e.humanize = function(t) {
        return m().add(this.$ms, "ms").locale(this.$l).fromNow(!t);
      }, e.valueOf = function() {
        return this.asMilliseconds();
      }, e.milliseconds = function() {
        return this.get("milliseconds");
      }, e.asMilliseconds = function() {
        return this.as("milliseconds");
      }, e.seconds = function() {
        return this.get("seconds");
      }, e.asSeconds = function() {
        return this.as("seconds");
      }, e.minutes = function() {
        return this.get("minutes");
      }, e.asMinutes = function() {
        return this.as("minutes");
      }, e.hours = function() {
        return this.get("hours");
      }, e.asHours = function() {
        return this.as("hours");
      }, e.days = function() {
        return this.get("days");
      }, e.asDays = function() {
        return this.as("days");
      }, e.weeks = function() {
        return this.get("weeks");
      }, e.asWeeks = function() {
        return this.as("weeks");
      }, e.months = function() {
        return this.get("months");
      }, e.asMonths = function() {
        return this.as("months");
      }, e.years = function() {
        return this.get("years");
      }, e.asYears = function() {
        return this.as("years");
      }, s;
    }(), f = function(s, e, t) {
      return s.add(e.years() * t, "y").add(e.months() * t, "M").add(e.days() * t, "d").add(e.hours() * t, "h").add(e.minutes() * t, "m").add(e.seconds() * t, "s").add(e.milliseconds() * t, "ms");
    };
    return function(s, e, t) {
      m = t, u = t().$utils(), t.duration = function(g, b) {
        var y = t.locale();
        return T(g, { $l: y }, b);
      }, t.isDuration = l;
      var d = e.prototype.add, w = e.prototype.subtract;
      e.prototype.add = function(g, b) {
        return l(g) ? f(this, g, 1) : d.bind(this)(g, b);
      }, e.prototype.subtract = function(g, b) {
        return l(g) ? f(this, g, -1) : w.bind(this)(g, b);
      };
    };
  });
})(R);
var U = R.exports;
const tt = /* @__PURE__ */ I(U);
var W = { exports: {} };
(function(n, r) {
  (function(m, u) {
    n.exports = u();
  })(L, function() {
    return function(m, u, x) {
      m = m || {};
      var M = u.prototype, A = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function v(i, o, S, k) {
        return M.fromToBase(i, o, S, k);
      }
      x.en.relativeTime = A, M.fromToBase = function(i, o, S, k, l) {
        for (var T, a, h, p = S.$locale().relativeTime || A, D = m.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], $ = D.length, _ = 0; _ < $; _ += 1) {
          var f = D[_];
          f.d && (T = k ? x(i).diff(S, f.d, !0) : S.diff(i, f.d, !0));
          var s = (m.rounding || Math.round)(Math.abs(T));
          if (h = T > 0, s <= f.r || !f.r) {
            s <= 1 && _ > 0 && (f = D[_ - 1]);
            var e = p[f.l];
            l && (s = l("" + s)), a = typeof e == "string" ? e.replace("%d", s) : e(s, o, f.l, h);
            break;
          }
        }
        if (o)
          return a;
        var t = h ? p.future : p.past;
        return typeof t == "function" ? t(a) : t.replace("%s", a);
      }, M.to = function(i, o) {
        return v(i, o, this, !0);
      }, M.from = function(i, o) {
        return v(i, o, this);
      };
      var c = function(i) {
        return i.$u ? x.utc() : x();
      };
      M.toNow = function(i) {
        return this.to(c(this), i);
      }, M.fromNow = function(i) {
        return this.from(c(this), i);
      };
    };
  });
})(W);
var et = W.exports;
const nt = /* @__PURE__ */ I(et);
N.extend(tt);
N.extend(nt);
function rt(n, r) {
  return N.duration(r - n).humanize();
}
function C() {
  const n = Array.prototype.slice.call(arguments, 0);
  return function(r) {
    return n.reduce((m, u) => u(m), r);
  };
}
function P(n) {
  return function(r) {
    return n === void 0 ? r : r[n];
  };
}
const st = [
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
  "#ff7043"
];
function it(n) {
  const r = window.getComputedStyle(n, null).getPropertyValue("font-size");
  return parseFloat(r);
}
function ot(n) {
  return n.r * 0.299 + n.g * 0.587 + n.b * 0.114;
}
function at(n) {
  return ot(n) > 165;
}
function dt(n) {
  return at(d3.color(n)) ? "black" : "white";
}
function B(n, r) {
  return "translate(" + n + "," + r + ")";
}
function ct() {
  let n = st, r = 5, m = !1, u = !1, x, M, A = 0, v = P(0), c = P(1), i = P(2), o = P(3);
  function S(a) {
    a.each(function(h, p) {
      const D = d3.select(this.parentNode), $ = D.select("text"), _ = D.select("rect"), f = _.attr("width") - 2 * r, s = c(h);
      $.text(s);
      let e = $.node().getComputedTextLength();
      if (e > f) {
        const t = f < 0 ? 0 : f / e, d = Math.floor(s.length * t);
        $.text(d > 2 ? s.slice(0, d - 2) + "…" : "");
      }
    });
  }
  function k(a, h) {
    d3.active(this).tween("text", function() {
      return function(p) {
        S(d3.select(this));
      };
    });
  }
  function l(a) {
    const h = a.datum(), p = new Set(d3.map(h, v)), D = new V(T), $ = d3.scaleOrdinal(n);
    x = x || [d3.min(h, i), d3.max(h, o)], u && (x = d3.extent(x.concat(/* @__PURE__ */ new Date()))), a.each(function(_) {
      const f = M || this.getBoundingClientRect().width, s = p.size * (it(this) + 4 * r), e = d3.scaleBand().domain(p).range([0, s]), t = d3.scaleTime().domain(x), d = (m ? Q : K)(e).width(f), w = d3.select(this).selectAll("svg").data([1]).join("svg");
      w.attr("class", "timeline").attr("width", f).attr("height", s + 20);
      const g = w.append("g"), b = g.append("g").attr("class", "y axis").call(d);
      let y = d.range();
      t.range([y[0] + r, y[1] - r]).clamp(!0);
      const Y = d3.axisBottom(t), j = g.append("g").attr("class", "x axis").attr("transform", B(0, s)).call(Y);
      b.on("offset", () => {
        y = d.range(), t.range([y[0] + r, y[1] - r]).clamp(!0), Y.ticks(Math.min((y[1] - y[0]) / 70, 10)), j.call(Y), O.attr("transform", (F) => B(t(i(F)), e(v(F)))).selectAll("rect").attr("width", (F) => t(o(F)) - t(i(F))).call(S), b.call(d.draw_ticks, t.ticks().map(t));
      }), j.select(".domain").remove(), j.selectAll(".tick line").attr("stroke", "#AAA");
      const z = t.ticks().map(t);
      b.call(d.draw_ticks, z);
      let O = g.selectAll("g.task").data(_);
      O.exit().remove();
      const E = O.enter().append("g").classed("task", !0);
      E.append("rect").attr("y", r).attr("height", e.bandwidth() - 2 * r).on("mouseover", D.show).on("mouseout", D.hide).style("fill", C(c, $)), E.append("text").attr("text-anchor", "start").attr("fill", C(c, $, dt)).attr("pointer-events", "none").attr("dx", r).attr("y", e.bandwidth() / 2).attr("dy", "0.32em").text(c), O = O.merge(E), O.attr("transform", (F) => B(y[0], e(v(F)))).selectAll("rect").attr("width", 0), O.transition().duration(A).attr("transform", (F) => B(t(i(F)), e(v(F)))).selectAll("rect").attr("width", (F) => t(o(F)) - t(i(F))).on("start", k), u && g.append("path").attr("stroke", "red").attr("d", "M" + t(/* @__PURE__ */ new Date()) + ",0.5V" + s);
    });
  }
  return l.dates = function(a) {
    return arguments.length ? (x = a, l) : x;
  }, l.width = function(a) {
    return arguments.length ? (M = a, l) : M;
  }, l.today = function(a) {
    return arguments.length ? (u = a, l) : u;
  }, l.colors = function(a) {
    return arguments.length ? (n = a, l) : n;
  }, l.padding = function(a) {
    return arguments.length ? (r = a, l) : r;
  }, l.reversed = function(a) {
    return arguments.length ? (m = a, l) : m;
  }, l.duration = function(a) {
    return arguments.length ? (A = a, l) : A;
  }, l;
  function T(a, h) {
    const p = C(d3.isoParse, d3.timeFormat("%Y-%m-%d"));
    return "<b>" + c(h) + '</b><hr style="margin: 2px 0 2px 0">' + p(i(h)) + " - " + p(o(h)) + "<br>" + rt(i(h), o(h));
  }
}
export {
  rt as durationFormat,
  ct as timeline,
  K as timelineAxisLeft,
  Q as timelineAxisRight,
  V as tooltip
};
