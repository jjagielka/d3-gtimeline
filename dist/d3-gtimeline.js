import * as x from "d3";
export * from "d3";
import L from "dayjs";
const K = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function I(s) {
  x.select("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(K);
  const r = x.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return r.show = function(f) {
    r.transition().duration(100).style("opacity", 0.95), r.html(s.apply(null, arguments)).style("left", f.pageX + "px").style("top", f.pageY - 28 + "px");
  }, r.hide = function(f) {
    r.transition().duration(100).style("opacity", 0);
  }, r;
}
function Q(s) {
  return x.max(s.nodes().map((r) => r.getComputedTextLength()));
}
function U(s) {
  return function(r) {
    return r.length > s ? r.slice(0, s - 1) + "…" : r;
  };
}
const P = 1, tt = 2;
function R(s, r) {
  let f = ["#FFF", "#EEE"], p = x.scaleOrdinal(f), v = 5, $, j = "#AAA", Y = 40, k = 100, i;
  function o(u) {
    let A = r.domain(), T = I((n) => n), D = x.scaleOrdinal(f), O = x.scaleOrdinal(f.reverse()), g = U(Y), b = u.selectAll(".row").data(A, r).order(), a = b.enter().append("g").attr("class", "row"), h = b.exit(), c = b.select("text");
    b = b.merge(a).attr("transform", (n) => "translate(0," + r(n) + ")"), h.remove(), a.append("rect").attr("y", 0.5).attr("width", k).attr("height", r.bandwidth()).attr("stroke", j).attr("stroke-width", 0.75).attr("fill", D), a.append("path").attr("stroke", O), c = c.merge(
      a.append("text").attr("y", r.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(n, e) {
        x.select(this).text() != e && T.show(e);
      }).on("mouseout", T.hide)
    ).text(g), i === void 0 && (i = Q(c) + 2 * v, i = s === P ? k - i : i), $ = s === P ? [0, i] : [i, k], c.attr("text-anchor", s === P ? "start" : "end").attr("dx", s === P ? v : -v).attr("x", i);
    const y = function(n, e) {
      i = Math.max(10, Math.min(k - 10, i + n.dx)), x.select(this).attr("d", "M" + i + ",0.5V" + r.range()[1]), c.attr("x", i), $ = s === P ? [0, i] : [i, k], u.dispatch("offset", { detail: { offset: i } });
    };
    u.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", j).attr("stroke-width", 1.75).attr("d", "M" + (i + 0.5) + ",0.5V" + r.range()[1]).style("cursor", "ew-resize").call(x.drag().on("drag", y));
  }
  return o.draw_ticks = function(u, A) {
    u.selectAll(".row").select("path").attr("d", A.map((T) => "M" + T + ",1v" + (r.bandwidth() - 1)).join(""));
  }, o.scale = function(u) {
    return arguments.length ? (r = u, o) : r;
  }, o.width = function(u) {
    return arguments.length ? (k = u, o) : k;
  }, o.colors = function(u) {
    return arguments.length ? (f = u, o) : f;
  }, o.padding = function(u) {
    return arguments.length ? (v = u, o) : v;
  }, o.range = function(u) {
    return arguments.length ? ($ = u, o) : $;
  }, o.trim = function(u) {
    return arguments.length ? (Y = u, o) : Y;
  }, o.offset = function(u) {
    return arguments.length ? (i = u, o) : i;
  }, o.colorscale = function(u) {
    return arguments.length ? (p = u, o) : p;
  }, o;
}
function et(s) {
  return R(tt, s);
}
function nt(s) {
  return R(P, s);
}
var W = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function J(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var X = { exports: {} };
(function(s, r) {
  (function(f, p) {
    s.exports = p();
  })(W, function() {
    var f, p, v = 1e3, $ = 6e4, j = 36e5, Y = 864e5, k = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, i = 31536e6, o = 2628e6, u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, A = { years: i, months: o, days: Y, hours: j, minutes: $, seconds: v, milliseconds: 1, weeks: 6048e5 }, T = function(n) {
      return n instanceof c;
    }, D = function(n, e, t) {
      return new c(n, t, e.$l);
    }, O = function(n) {
      return p.p(n) + "s";
    }, g = function(n) {
      return n < 0;
    }, b = function(n) {
      return g(n) ? Math.ceil(n) : Math.floor(n);
    }, a = function(n) {
      return Math.abs(n);
    }, h = function(n, e) {
      return n ? g(n) ? { negative: !0, format: "" + a(n) + e } : { negative: !1, format: "" + n + e } : { negative: !1, format: "" };
    }, c = function() {
      function n(t, l, m) {
        var d = this;
        if (this.$d = {}, this.$l = m, t === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), l) return D(t * A[O(l)], this);
        if (typeof t == "number") return this.$ms = t, this.parseFromMilliseconds(), this;
        if (typeof t == "object") return Object.keys(t).forEach(function(S) {
          d.$d[O(S)] = t[S];
        }), this.calMilliseconds(), this;
        if (typeof t == "string") {
          var w = t.match(u);
          if (w) {
            var _ = w.slice(2).map(function(S) {
              return S != null ? Number(S) : 0;
            });
            return this.$d.years = _[0], this.$d.months = _[1], this.$d.weeks = _[2], this.$d.days = _[3], this.$d.hours = _[4], this.$d.minutes = _[5], this.$d.seconds = _[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var e = n.prototype;
      return e.calMilliseconds = function() {
        var t = this;
        this.$ms = Object.keys(this.$d).reduce(function(l, m) {
          return l + (t.$d[m] || 0) * A[m];
        }, 0);
      }, e.parseFromMilliseconds = function() {
        var t = this.$ms;
        this.$d.years = b(t / i), t %= i, this.$d.months = b(t / o), t %= o, this.$d.days = b(t / Y), t %= Y, this.$d.hours = b(t / j), t %= j, this.$d.minutes = b(t / $), t %= $, this.$d.seconds = b(t / v), t %= v, this.$d.milliseconds = t;
      }, e.toISOString = function() {
        var t = h(this.$d.years, "Y"), l = h(this.$d.months, "M"), m = +this.$d.days || 0;
        this.$d.weeks && (m += 7 * this.$d.weeks);
        var d = h(m, "D"), w = h(this.$d.hours, "H"), _ = h(this.$d.minutes, "M"), S = this.$d.seconds || 0;
        this.$d.milliseconds && (S += this.$d.milliseconds / 1e3, S = Math.round(1e3 * S) / 1e3);
        var B = h(S, "S"), F = t.negative || l.negative || d.negative || w.negative || _.negative || B.negative, z = w.format || _.format || B.format ? "T" : "", E = (F ? "-" : "") + "P" + t.format + l.format + d.format + z + w.format + _.format + B.format;
        return E === "P" || E === "-P" ? "P0D" : E;
      }, e.toJSON = function() {
        return this.toISOString();
      }, e.format = function(t) {
        var l = t || "YYYY-MM-DDTHH:mm:ss", m = { Y: this.$d.years, YY: p.s(this.$d.years, 2, "0"), YYYY: p.s(this.$d.years, 4, "0"), M: this.$d.months, MM: p.s(this.$d.months, 2, "0"), D: this.$d.days, DD: p.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: p.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: p.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: p.s(this.$d.seconds, 2, "0"), SSS: p.s(this.$d.milliseconds, 3, "0") };
        return l.replace(k, function(d, w) {
          return w || String(m[d]);
        });
      }, e.as = function(t) {
        return this.$ms / A[O(t)];
      }, e.get = function(t) {
        var l = this.$ms, m = O(t);
        return m === "milliseconds" ? l %= 1e3 : l = m === "weeks" ? b(l / A[m]) : this.$d[m], l || 0;
      }, e.add = function(t, l, m) {
        var d;
        return d = l ? t * A[O(l)] : T(t) ? t.$ms : D(t, this).$ms, D(this.$ms + d * (m ? -1 : 1), this);
      }, e.subtract = function(t, l) {
        return this.add(t, l, !0);
      }, e.locale = function(t) {
        var l = this.clone();
        return l.$l = t, l;
      }, e.clone = function() {
        return D(this.$ms, this);
      }, e.humanize = function(t) {
        return f().add(this.$ms, "ms").locale(this.$l).fromNow(!t);
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
      }, n;
    }(), y = function(n, e, t) {
      return n.add(e.years() * t, "y").add(e.months() * t, "M").add(e.days() * t, "d").add(e.hours() * t, "h").add(e.minutes() * t, "m").add(e.seconds() * t, "s").add(e.milliseconds() * t, "ms");
    };
    return function(n, e, t) {
      f = t, p = t().$utils(), t.duration = function(d, w) {
        var _ = t.locale();
        return D(d, { $l: _ }, w);
      }, t.isDuration = T;
      var l = e.prototype.add, m = e.prototype.subtract;
      e.prototype.add = function(d, w) {
        return T(d) ? y(this, d, 1) : l.bind(this)(d, w);
      }, e.prototype.subtract = function(d, w) {
        return T(d) ? y(this, d, -1) : m.bind(this)(d, w);
      };
    };
  });
})(X);
var rt = X.exports;
const st = /* @__PURE__ */ J(rt);
var Z = { exports: {} };
(function(s, r) {
  (function(f, p) {
    s.exports = p();
  })(W, function() {
    return function(f, p, v) {
      f = f || {};
      var $ = p.prototype, j = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function Y(i, o, u, A) {
        return $.fromToBase(i, o, u, A);
      }
      v.en.relativeTime = j, $.fromToBase = function(i, o, u, A, T) {
        for (var D, O, g, b = u.$locale().relativeTime || j, a = f.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], h = a.length, c = 0; c < h; c += 1) {
          var y = a[c];
          y.d && (D = A ? v(i).diff(u, y.d, !0) : u.diff(i, y.d, !0));
          var n = (f.rounding || Math.round)(Math.abs(D));
          if (g = D > 0, n <= y.r || !y.r) {
            n <= 1 && c > 0 && (y = a[c - 1]);
            var e = b[y.l];
            T && (n = T("" + n)), O = typeof e == "string" ? e.replace("%d", n) : e(n, o, y.l, g);
            break;
          }
        }
        if (o) return O;
        var t = g ? b.future : b.past;
        return typeof t == "function" ? t(O) : t.replace("%s", O);
      }, $.to = function(i, o) {
        return Y(i, o, this, !0);
      }, $.from = function(i, o) {
        return Y(i, o, this);
      };
      var k = function(i) {
        return i.$u ? v.utc() : v();
      };
      $.toNow = function(i) {
        return this.to(k(this), i);
      }, $.fromNow = function(i) {
        return this.from(k(this), i);
      };
    };
  });
})(Z);
var it = Z.exports;
const ot = /* @__PURE__ */ J(it);
L.extend(st);
L.extend(ot);
function at(s, r) {
  return L.duration(r - s).humanize();
}
function G() {
  const s = Array.prototype.slice.call(arguments, 0);
  return function(r) {
    return s.reduce((f, p) => p(f), r);
  };
}
function C(s) {
  return function(r) {
    return s === void 0 ? r : r[s];
  };
}
const ut = [
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
function dt(s) {
  const r = window.getComputedStyle(s, null).getPropertyValue("font-size");
  return parseFloat(r);
}
function ct(s) {
  return s.r * 0.299 + s.g * 0.587 + s.b * 0.114;
}
function lt(s) {
  return ct(s) > 165;
}
function ht(s) {
  return lt(x.color(s)) ? "black" : "white";
}
function N(s, r) {
  return "translate(" + s + "," + r + ")";
}
function mt() {
  let s = ut, r = 5, f = 2, p = !1, v = !1, $, j, Y = 0, k = C(0), i = C(1), o = C(2), u = C(3);
  function A(a, h) {
    const c = a.select("text"), y = a.select("rect"), n = y.attr("width") - 2 * r, e = i(h);
    c.text(e);
    let t = c.node().getComputedTextLength();
    if (t > n) {
      const l = n < 0 ? 0 : n / t, m = Math.floor(e.length * l);
      c.text(m > 2 ? e.slice(0, m - 2) + "…" : "");
    }
  }
  function T(a, h, c) {
    const y = a.select("text").node(), n = y.getBBox(), e = c.scale().domain().indexOf(k(h)), t = c.colorscale()(e), l = a.selectAll("rect.bckg").data([h]).join("rect").attr("class", "bckg").attr("fill", t).attr("x", n.x - r + f).attr("y", n.y - 2).attr("width", n.width + r - f).attr("height", n.height);
    a.node().insertBefore(l.node(), y);
  }
  function D(a, h) {
    a.each(function(c, y) {
      const n = x.select(this.parentNode);
      u(c) - o(c) ? A(n, c) : T(n, c, h);
    });
  }
  function O(a) {
    return function(h, c) {
      x.active(this).tween("text", function() {
        return function(y) {
          D(x.select(this), a);
        };
      });
    };
  }
  function g(a) {
    const h = a.datum(), c = new Set(x.map(h, k)), y = new I(b), n = x.scaleOrdinal(s);
    $ = $ || [x.min(h, o), x.max(h, u)], v && ($ = x.extent($.concat(/* @__PURE__ */ new Date()))), a.each(function(e) {
      const t = j || this.getBoundingClientRect().width, l = c.size * (dt(this) + 4 * r), m = x.scaleBand().domain(c).range([0, l]), d = x.scaleTime().domain($), w = (p ? nt : et)(m).width(t), _ = x.select(this).selectAll("svg").data([1]).join("svg");
      _.attr("class", "timeline").attr("width", t).attr("height", l + 20);
      const S = _.append("g"), B = S.append("g").attr("class", "y axis").call(w);
      let F = w.range();
      d.range([F[0] + r, F[1] - r]).clamp(!0);
      const z = x.axisBottom(d), E = S.append("g").attr("class", "x axis").attr("transform", N(0, l)).call(z);
      B.on("offset", () => {
        F = w.range(), d.range([F[0] + r, F[1] - r]).clamp(!0), z.ticks(Math.min((F[1] - F[0]) / 70, 10)), E.call(z), H.attr("transform", (M) => N(d(o(M)), m(k(M)))).selectAll("rect").attr("width", (M) => d(u(M)) - d(o(M)) || f).call((M) => D(M, w)), B.call(w.draw_ticks, d.ticks().map(d));
      }), E.select(".domain").remove(), E.selectAll(".tick line").attr("stroke", "#AAA");
      const q = d.ticks().map(d);
      B.call(w.draw_ticks, q);
      let H = S.selectAll("g.task").data(e);
      H.exit().remove();
      const V = H.enter().append("g").classed("task", !0);
      V.append("rect").attr("y", r).attr("height", m.bandwidth() - 2 * r).on("mouseover", y.show).on("mouseout", y.hide).style("fill", G(i, n)), V.append("text").attr("text-anchor", "start").attr("fill", (M) => u(M) - o(M) ? G(i, n, ht)(M) : "black").attr("pointer-events", "none").attr("dx", r).attr("y", m.bandwidth() / 2).attr("dy", "0.32em").text(i), H = H.merge(V), H.attr("transform", (M) => N(F[0], m(k(M)))).selectAll("rect").attr("width", 0), H.transition().duration(Y).attr("transform", (M) => N(d(o(M)), m(k(M)))).selectAll("rect").attr("width", (M) => d(u(M)) - d(o(M)) || f).on("start", O(w)), v && S.append("path").attr("stroke", "red").attr("d", "M" + d(/* @__PURE__ */ new Date()) + ",0.5V" + l);
    });
  }
  return g.dates = function(a) {
    return arguments.length ? ($ = a, g) : $;
  }, g.width = function(a) {
    return arguments.length ? (j = a, g) : j;
  }, g.today = function(a) {
    return arguments.length ? (v = a, g) : v;
  }, g.colors = function(a) {
    return arguments.length ? (s = a, g) : s;
  }, g.padding = function(a) {
    return arguments.length ? (r = a, g) : r;
  }, g.milestone_width = function(a) {
    return arguments.length ? (f = a, g) : f;
  }, g.reversed = function(a) {
    return arguments.length ? (p = a, g) : p;
  }, g.duration = function(a) {
    return arguments.length ? (Y = a, g) : Y;
  }, g;
  function b(a, h) {
    const c = G(x.isoParse, x.timeFormat("%Y-%m-%d")), y = `<b>${i(h)}</b><hr style="margin: 2px 0 2px 0">${c(o(h))}`, n = u(h) - o(h) ? ` - ${c(u(h))}<br>${at(o(h), u(h))}` : "";
    return y + n;
  }
}
export {
  at as durationFormat,
  mt as timeline,
  et as timelineAxisLeft,
  nt as timelineAxisRight,
  I as tooltip
};
