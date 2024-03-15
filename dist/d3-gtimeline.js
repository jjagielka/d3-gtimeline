import * as y from "d3";
import V from "dayjs";
const X = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function G(n) {
  y.select("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(X);
  const r = y.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return r.show = function(m) {
    r.transition().duration(100).style("opacity", 0.95), r.html(n.apply(null, arguments)).style("left", m.pageX + "px").style("top", m.pageY - 28 + "px");
  }, r.hide = function(m) {
    r.transition().duration(100).style("opacity", 0);
  }, r;
}
function Z(n) {
  return y.max(n.nodes().map((r) => r.getComputedTextLength()));
}
function q(n) {
  return function(r) {
    return r.length > n ? r.slice(0, n - 1) + "…" : r;
  };
}
const P = 1, K = 2;
function L(n, r) {
  let m = ["#FFF", "#EEE"], d = 5, $, k = "#AAA", S = 40, b = 100, c;
  function i(o) {
    let _ = r.domain(), A = G((f) => f), l = y.scaleOrdinal(m), D = y.scaleOrdinal(m.reverse()), a = q(S), h = o.selectAll(".row").data(_, r).order(), p = h.enter().append("g").attr("class", "row"), F = h.exit(), w = h.select("text");
    h = h.merge(p).attr("transform", (f) => "translate(0," + r(f) + ")"), F.remove(), p.append("rect").attr("y", 0.5).attr("width", b).attr("height", r.bandwidth()).attr("stroke", k).attr("stroke-width", 0.75).attr("fill", l), p.append("path").attr("stroke", D), w = w.merge(
      p.append("text").attr("y", r.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(f, s) {
        y.select(this).text() != s && A.show(s);
      }).on("mouseout", A.hide)
    ).text(a), c === void 0 && (c = Z(w) + 2 * d, c = n === P ? b - c : c), $ = n === P ? [0, c] : [c, b], w.attr("text-anchor", n === P ? "start" : "end").attr("dx", n === P ? d : -d).attr("x", c);
    const Y = function(f, s) {
      c = Math.max(10, Math.min(b - 10, c + f.dx)), y.select(this).attr("d", "M" + c + ",0.5V" + r.range()[1]), w.attr("x", c), $ = n === P ? [0, c] : [c, b], o.dispatch("offset", { detail: { offset: c } });
    };
    o.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", k).attr("stroke-width", 1.75).attr("d", "M" + (c + 0.5) + ",0.5V" + r.range()[1]).style("cursor", "ew-resize").call(y.drag().on("drag", Y));
  }
  return i.draw_ticks = function(o, _) {
    o.selectAll(".row").select("path").attr("d", _.map((A) => "M" + A + ",1v" + (r.bandwidth() - 1)).join(""));
  }, i.scale = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.width = function(o) {
    return arguments.length ? (b = o, i) : b;
  }, i.colors = function(o) {
    return arguments.length ? (m = o, i) : m;
  }, i.padding = function(o) {
    return arguments.length ? (d = o, i) : d;
  }, i.range = function(o) {
    return arguments.length ? ($ = o, i) : $;
  }, i.trim = function(o) {
    return arguments.length ? (S = o, i) : S;
  }, i.offset = function(o) {
    return arguments.length ? (c = o, i) : c;
  }, i;
}
function Q(n) {
  return L(K, n);
}
function U(n) {
  return L(P, n);
}
var I = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function R(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var W = { exports: {} };
(function(n, r) {
  (function(m, d) {
    n.exports = d();
  })(I, function() {
    var m, d, $ = 1e3, k = 6e4, S = 36e5, b = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, i = 31536e6, o = 2628e6, _ = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, A = { years: i, months: o, days: b, hours: S, minutes: k, seconds: $, milliseconds: 1, weeks: 6048e5 }, l = function(s) {
      return s instanceof Y;
    }, D = function(s, e, t) {
      return new Y(s, t, e.$l);
    }, a = function(s) {
      return d.p(s) + "s";
    }, h = function(s) {
      return s < 0;
    }, p = function(s) {
      return h(s) ? Math.ceil(s) : Math.floor(s);
    }, F = function(s) {
      return Math.abs(s);
    }, w = function(s, e) {
      return s ? h(s) ? { negative: !0, format: "" + F(s) + e } : { negative: !1, format: "" + s + e } : { negative: !1, format: "" };
    }, Y = function() {
      function s(t, u, v) {
        var g = this;
        if (this.$d = {}, this.$l = v, t === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), u)
          return D(t * A[a(u)], this);
        if (typeof t == "number")
          return this.$ms = t, this.parseFromMilliseconds(), this;
        if (typeof t == "object")
          return Object.keys(t).forEach(function(T) {
            g.$d[a(T)] = t[T];
          }), this.calMilliseconds(), this;
        if (typeof t == "string") {
          var M = t.match(_);
          if (M) {
            var x = M.slice(2).map(function(T) {
              return T != null ? Number(T) : 0;
            });
            return this.$d.years = x[0], this.$d.months = x[1], this.$d.weeks = x[2], this.$d.days = x[3], this.$d.hours = x[4], this.$d.minutes = x[5], this.$d.seconds = x[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var e = s.prototype;
      return e.calMilliseconds = function() {
        var t = this;
        this.$ms = Object.keys(this.$d).reduce(function(u, v) {
          return u + (t.$d[v] || 0) * A[v];
        }, 0);
      }, e.parseFromMilliseconds = function() {
        var t = this.$ms;
        this.$d.years = p(t / i), t %= i, this.$d.months = p(t / o), t %= o, this.$d.days = p(t / b), t %= b, this.$d.hours = p(t / S), t %= S, this.$d.minutes = p(t / k), t %= k, this.$d.seconds = p(t / $), t %= $, this.$d.milliseconds = t;
      }, e.toISOString = function() {
        var t = w(this.$d.years, "Y"), u = w(this.$d.months, "M"), v = +this.$d.days || 0;
        this.$d.weeks && (v += 7 * this.$d.weeks);
        var g = w(v, "D"), M = w(this.$d.hours, "H"), x = w(this.$d.minutes, "M"), T = this.$d.seconds || 0;
        this.$d.milliseconds && (T += this.$d.milliseconds / 1e3, T = Math.round(1e3 * T) / 1e3);
        var E = w(T, "S"), C = t.negative || u.negative || g.negative || M.negative || x.negative || E.negative, j = M.format || x.format || E.format ? "T" : "", H = (C ? "-" : "") + "P" + t.format + u.format + g.format + j + M.format + x.format + E.format;
        return H === "P" || H === "-P" ? "P0D" : H;
      }, e.toJSON = function() {
        return this.toISOString();
      }, e.format = function(t) {
        var u = t || "YYYY-MM-DDTHH:mm:ss", v = { Y: this.$d.years, YY: d.s(this.$d.years, 2, "0"), YYYY: d.s(this.$d.years, 4, "0"), M: this.$d.months, MM: d.s(this.$d.months, 2, "0"), D: this.$d.days, DD: d.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: d.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: d.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: d.s(this.$d.seconds, 2, "0"), SSS: d.s(this.$d.milliseconds, 3, "0") };
        return u.replace(c, function(g, M) {
          return M || String(v[g]);
        });
      }, e.as = function(t) {
        return this.$ms / A[a(t)];
      }, e.get = function(t) {
        var u = this.$ms, v = a(t);
        return v === "milliseconds" ? u %= 1e3 : u = v === "weeks" ? p(u / A[v]) : this.$d[v], u || 0;
      }, e.add = function(t, u, v) {
        var g;
        return g = u ? t * A[a(u)] : l(t) ? t.$ms : D(t, this).$ms, D(this.$ms + g * (v ? -1 : 1), this);
      }, e.subtract = function(t, u) {
        return this.add(t, u, !0);
      }, e.locale = function(t) {
        var u = this.clone();
        return u.$l = t, u;
      }, e.clone = function() {
        return D(this.$ms, this);
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
      m = t, d = t().$utils(), t.duration = function(g, M) {
        var x = t.locale();
        return D(g, { $l: x }, M);
      }, t.isDuration = l;
      var u = e.prototype.add, v = e.prototype.subtract;
      e.prototype.add = function(g, M) {
        return l(g) ? f(this, g, 1) : u.bind(this)(g, M);
      }, e.prototype.subtract = function(g, M) {
        return l(g) ? f(this, g, -1) : v.bind(this)(g, M);
      };
    };
  });
})(W);
var tt = W.exports;
const et = /* @__PURE__ */ R(tt);
var J = { exports: {} };
(function(n, r) {
  (function(m, d) {
    n.exports = d();
  })(I, function() {
    return function(m, d, $) {
      m = m || {};
      var k = d.prototype, S = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function b(i, o, _, A) {
        return k.fromToBase(i, o, _, A);
      }
      $.en.relativeTime = S, k.fromToBase = function(i, o, _, A, l) {
        for (var D, a, h, p = _.$locale().relativeTime || S, F = m.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], w = F.length, Y = 0; Y < w; Y += 1) {
          var f = F[Y];
          f.d && (D = A ? $(i).diff(_, f.d, !0) : _.diff(i, f.d, !0));
          var s = (m.rounding || Math.round)(Math.abs(D));
          if (h = D > 0, s <= f.r || !f.r) {
            s <= 1 && Y > 0 && (f = F[Y - 1]);
            var e = p[f.l];
            l && (s = l("" + s)), a = typeof e == "string" ? e.replace("%d", s) : e(s, o, f.l, h);
            break;
          }
        }
        if (o)
          return a;
        var t = h ? p.future : p.past;
        return typeof t == "function" ? t(a) : t.replace("%s", a);
      }, k.to = function(i, o) {
        return b(i, o, this, !0);
      }, k.from = function(i, o) {
        return b(i, o, this);
      };
      var c = function(i) {
        return i.$u ? $.utc() : $();
      };
      k.toNow = function(i) {
        return this.to(c(this), i);
      }, k.fromNow = function(i) {
        return this.from(c(this), i);
      };
    };
  });
})(J);
var nt = J.exports;
const rt = /* @__PURE__ */ R(nt);
V.extend(et);
V.extend(rt);
function st(n, r) {
  return V.duration(r - n).humanize();
}
function N() {
  const n = Array.prototype.slice.call(arguments, 0);
  return function(r) {
    return n.reduce((m, d) => d(m), r);
  };
}
function B(n) {
  return function(r) {
    return n === void 0 ? r : r[n];
  };
}
const it = [
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
function ot(n) {
  const r = window.getComputedStyle(n, null).getPropertyValue("font-size");
  return parseFloat(r);
}
function at(n) {
  return n.r * 0.299 + n.g * 0.587 + n.b * 0.114;
}
function ut(n) {
  return at(n) > 165;
}
function dt(n) {
  return ut(y.color(n)) ? "black" : "white";
}
function z(n, r) {
  return "translate(" + n + "," + r + ")";
}
function lt() {
  let n = it, r = 5, m = !1, d = !1, $, k, S = 0, b = B(0), c = B(1), i = B(2), o = B(3);
  function _(a) {
    a.each(function(h, p) {
      const F = y.select(this.parentNode), w = F.select("text"), Y = F.select("rect"), f = Y.attr("width") - 2 * r, s = c(h);
      w.text(s);
      let e = w.node().getComputedTextLength();
      if (e > f) {
        const t = f < 0 ? 0 : f / e, u = Math.floor(s.length * t);
        w.text(u > 2 ? s.slice(0, u - 2) + "…" : "");
      }
    });
  }
  function A(a, h) {
    y.active(this).tween("text", function() {
      return function(p) {
        _(y.select(this));
      };
    });
  }
  function l(a) {
    const h = a.datum(), p = new Set(y.map(h, b)), F = new G(D), w = y.scaleOrdinal(n);
    $ = $ || [y.min(h, i), y.max(h, o)], d && ($ = y.extent($.concat(/* @__PURE__ */ new Date()))), a.each(function(Y) {
      const f = k || this.getBoundingClientRect().width, s = p.size * (ot(this) + 4 * r), e = y.scaleBand().domain(p).range([0, s]), t = y.scaleTime().domain($), u = (m ? U : Q)(e).width(f), v = y.select(this).selectAll("svg").data([1]).join("svg");
      v.attr("class", "timeline").attr("width", f).attr("height", s + 20);
      const g = v.append("g"), M = g.append("g").attr("class", "y axis").call(u);
      let x = u.range();
      t.range([x[0] + r, x[1] - r]).clamp(!0);
      const T = y.axisBottom(t), E = g.append("g").attr("class", "x axis").attr("transform", z(0, s)).call(T);
      M.on("offset", () => {
        x = u.range(), t.range([x[0] + r, x[1] - r]).clamp(!0), T.ticks(Math.min((x[1] - x[0]) / 70, 10)), E.call(T), j.attr("transform", (O) => z(t(i(O)), e(b(O)))).selectAll("rect").attr("width", (O) => t(o(O)) - t(i(O))).call(_), M.call(u.draw_ticks, t.ticks().map(t));
      }), E.select(".domain").remove(), E.selectAll(".tick line").attr("stroke", "#AAA");
      const C = t.ticks().map(t);
      M.call(u.draw_ticks, C);
      let j = g.selectAll("g.task").data(Y);
      j.exit().remove();
      const H = j.enter().append("g").classed("task", !0);
      H.append("rect").attr("y", r).attr("height", e.bandwidth() - 2 * r).on("mouseover", F.show).on("mouseout", F.hide).style("fill", N(c, w)), H.append("text").attr("text-anchor", "start").attr("fill", N(c, w, dt)).attr("pointer-events", "none").attr("dx", r).attr("y", e.bandwidth() / 2).attr("dy", "0.32em").text(c), j = j.merge(H), j.attr("transform", (O) => z(x[0], e(b(O)))).selectAll("rect").attr("width", 0), j.transition().duration(S).attr("transform", (O) => z(t(i(O)), e(b(O)))).selectAll("rect").attr("width", (O) => t(o(O)) - t(i(O))).on("start", A), d && g.append("path").attr("stroke", "red").attr("d", "M" + t(/* @__PURE__ */ new Date()) + ",0.5V" + s);
    });
  }
  return l.dates = function(a) {
    return arguments.length ? ($ = a, l) : $;
  }, l.width = function(a) {
    return arguments.length ? (k = a, l) : k;
  }, l.today = function(a) {
    return arguments.length ? (d = a, l) : d;
  }, l.colors = function(a) {
    return arguments.length ? (n = a, l) : n;
  }, l.padding = function(a) {
    return arguments.length ? (r = a, l) : r;
  }, l.reversed = function(a) {
    return arguments.length ? (m = a, l) : m;
  }, l.duration = function(a) {
    return arguments.length ? (S = a, l) : S;
  }, l;
  function D(a, h) {
    const p = N(y.isoParse, y.timeFormat("%Y-%m-%d"));
    return "<b>" + c(h) + '</b><hr style="margin: 2px 0 2px 0">' + p(i(h)) + " - " + p(o(h)) + "<br>" + st(i(h), o(h));
  }
}
export {
  st as durationFormat,
  lt as timeline,
  Q as timelineAxisLeft,
  U as timelineAxisRight,
  G as tooltip
};
