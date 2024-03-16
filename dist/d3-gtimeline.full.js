function on(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Br(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Qn(t) {
  let n, e, r;
  t.length !== 2 ? (n = on, e = (s, c) => on(t(s), c), r = (s, c) => t(s) - c) : (n = t === on || t === Br ? t : Zr, e = t, r = t);
  function i(s, c, a = 0, f = s.length) {
    if (a < f) {
      if (n(c, c) !== 0)
        return f;
      do {
        const h = a + f >>> 1;
        e(s[h], c) < 0 ? a = h + 1 : f = h;
      } while (a < f);
    }
    return a;
  }
  function o(s, c, a = 0, f = s.length) {
    if (a < f) {
      if (n(c, c) !== 0)
        return f;
      do {
        const h = a + f >>> 1;
        e(s[h], c) <= 0 ? a = h + 1 : f = h;
      } while (a < f);
    }
    return a;
  }
  function u(s, c, a = 0, f = s.length) {
    const h = i(s, c, a, f - 1);
    return h > a && r(s[h - 1], c) > -r(s[h], c) ? h - 1 : h;
  }
  return { left: i, center: u, right: o };
}
function Zr() {
  return 0;
}
function Gr(t) {
  return t === null ? NaN : +t;
}
const Jr = Qn(on), Qr = Jr.right;
Qn(Gr).center;
function Kr(t, n) {
  let e, r;
  if (n === void 0)
    for (const i of t)
      i != null && (e === void 0 ? i >= i && (e = r = i) : (e > i && (e = i), r < i && (r = i)));
  else {
    let i = -1;
    for (let o of t)
      (o = n(o, ++i, t)) != null && (e === void 0 ? o >= o && (e = r = o) : (e > o && (e = o), r < o && (r = o)));
  }
  return [e, r];
}
class ve extends Map {
  constructor(n, e = ni) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null)
      for (const [r, i] of n)
        this.set(r, i);
  }
  get(n) {
    return super.get(xe(this, n));
  }
  has(n) {
    return super.has(xe(this, n));
  }
  set(n, e) {
    return super.set(jr(this, n), e);
  }
  delete(n) {
    return super.delete(ti(this, n));
  }
}
function xe({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function jr({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function ti({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function ni(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const ei = Math.sqrt(50), ri = Math.sqrt(10), ii = Math.sqrt(2);
function fn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), u = o >= ei ? 10 : o >= ri ? 5 : o >= ii ? 2 : 1;
  let s, c, a;
  return i < 0 ? (a = Math.pow(10, -i) / u, s = Math.round(t * a), c = Math.round(n * a), s / a < t && ++s, c / a > n && --c, a = -a) : (a = Math.pow(10, i) * u, s = Math.round(t / a), c = Math.round(n / a), s * a < t && ++s, c * a > n && --c), c < s && 0.5 <= e && e < 2 ? fn(t, n, e * 2) : [s, c, a];
}
function oi(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0))
    return [];
  if (t === n)
    return [t];
  const r = n < t, [i, o, u] = r ? fn(n, t, e) : fn(t, n, e);
  if (!(o >= i))
    return [];
  const s = o - i + 1, c = new Array(s);
  if (r)
    if (u < 0)
      for (let a = 0; a < s; ++a)
        c[a] = (o - a) / -u;
    else
      for (let a = 0; a < s; ++a)
        c[a] = (o - a) * u;
  else if (u < 0)
    for (let a = 0; a < s; ++a)
      c[a] = (i + a) / -u;
  else
    for (let a = 0; a < s; ++a)
      c[a] = (i + a) * u;
  return c;
}
function In(t, n, e) {
  return n = +n, t = +t, e = +e, fn(t, n, e)[2];
}
function Ln(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? In(n, t, e) : In(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function nr(t, n) {
  let e;
  if (n === void 0)
    for (const r of t)
      r != null && (e < r || e === void 0 && r >= r) && (e = r);
  else {
    let r = -1;
    for (let i of t)
      (i = n(i, ++r, t)) != null && (e < i || e === void 0 && i >= i) && (e = i);
  }
  return e;
}
function ui(t, n) {
  let e;
  if (n === void 0)
    for (const r of t)
      r != null && (e > r || e === void 0 && r >= r) && (e = r);
  else {
    let r = -1;
    for (let i of t)
      (i = n(i, ++r, t)) != null && (e > i || e === void 0 && i >= i) && (e = i);
  }
  return e;
}
function ai(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function si(t, n) {
  if (typeof t[Symbol.iterator] != "function")
    throw new TypeError("values is not iterable");
  if (typeof n != "function")
    throw new TypeError("mapper is not a function");
  return Array.from(t, (e, r) => n(e, r, t));
}
function ci(t) {
  return t;
}
var Cn = 1, un = 2, Rn = 3, Rt = 4, _e = 1e-6;
function fi(t) {
  return "translate(" + t + ",0)";
}
function li(t) {
  return "translate(0," + t + ")";
}
function hi(t) {
  return (n) => +t(n);
}
function di(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function gi() {
  return !this.__axis;
}
function Kn(t, n) {
  var e = [], r = null, i = null, o = 6, u = 6, s = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, a = t === Cn || t === Rt ? -1 : 1, f = t === Rt || t === un ? "x" : "y", h = t === Cn || t === Rn ? fi : li;
  function l(d) {
    var S = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), k = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : ci), N = Math.max(o, 0) + s, O = n.range(), R = +O[0] + c, U = +O[O.length - 1] + c, w = (n.bandwidth ? di : hi)(n.copy(), c), M = d.selection ? d.selection() : d, g = M.selectAll(".domain").data([null]), p = M.selectAll(".tick").data(S, n).order(), m = p.exit(), F = p.enter().append("g").attr("class", "tick"), A = p.select("line"), y = p.select("text");
    g = g.merge(g.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), p = p.merge(F), A = A.merge(F.append("line").attr("stroke", "currentColor").attr(f + "2", a * o)), y = y.merge(F.append("text").attr("fill", "currentColor").attr(f, a * N).attr("dy", t === Cn ? "0em" : t === Rn ? "0.71em" : "0.32em")), d !== M && (g = g.transition(d), p = p.transition(d), A = A.transition(d), y = y.transition(d), m = m.transition(d).attr("opacity", _e).attr("transform", function(I) {
      return isFinite(I = w(I)) ? h(I + c) : this.getAttribute("transform");
    }), F.attr("opacity", _e).attr("transform", function(I) {
      var H = this.parentNode.__axis;
      return h((H && isFinite(H = H(I)) ? H : w(I)) + c);
    })), m.remove(), g.attr("d", t === Rt || t === un ? u ? "M" + a * u + "," + R + "H" + c + "V" + U + "H" + a * u : "M" + c + "," + R + "V" + U : u ? "M" + R + "," + a * u + "V" + c + "H" + U + "V" + a * u : "M" + R + "," + c + "H" + U), p.attr("opacity", 1).attr("transform", function(I) {
      return h(w(I) + c);
    }), A.attr(f + "2", a * o), y.attr(f, a * N).text(k), M.filter(gi).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === un ? "start" : t === Rt ? "end" : "middle"), M.each(function() {
      this.__axis = w;
    });
  }
  return l.scale = function(d) {
    return arguments.length ? (n = d, l) : n;
  }, l.ticks = function() {
    return e = Array.from(arguments), l;
  }, l.tickArguments = function(d) {
    return arguments.length ? (e = d == null ? [] : Array.from(d), l) : e.slice();
  }, l.tickValues = function(d) {
    return arguments.length ? (r = d == null ? null : Array.from(d), l) : r && r.slice();
  }, l.tickFormat = function(d) {
    return arguments.length ? (i = d, l) : i;
  }, l.tickSize = function(d) {
    return arguments.length ? (o = u = +d, l) : o;
  }, l.tickSizeInner = function(d) {
    return arguments.length ? (o = +d, l) : o;
  }, l.tickSizeOuter = function(d) {
    return arguments.length ? (u = +d, l) : u;
  }, l.tickPadding = function(d) {
    return arguments.length ? (s = +d, l) : s;
  }, l.offset = function(d) {
    return arguments.length ? (c = +d, l) : c;
  }, l;
}
function nf(t) {
  return Kn(un, t);
}
function mi(t) {
  return Kn(Rn, t);
}
function ef(t) {
  return Kn(Rt, t);
}
function jn(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function er(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function Zt() {
}
var zt = 0.7, ln = 1 / zt, Dt = "\\s*([+-]?\\d+)\\s*", Vt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ut = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", pi = /^#([0-9a-f]{3,8})$/, yi = new RegExp(`^rgb\\(${Dt},${Dt},${Dt}\\)$`), wi = new RegExp(`^rgb\\(${ut},${ut},${ut}\\)$`), vi = new RegExp(`^rgba\\(${Dt},${Dt},${Dt},${Vt}\\)$`), xi = new RegExp(`^rgba\\(${ut},${ut},${ut},${Vt}\\)$`), _i = new RegExp(`^hsl\\(${Vt},${ut},${ut}\\)$`), Mi = new RegExp(`^hsla\\(${Vt},${ut},${ut},${Vt}\\)$`), Me = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
jn(Zt, pt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: be,
  // Deprecated! Use color.formatHex.
  formatHex: be,
  formatHex8: bi,
  formatHsl: $i,
  formatRgb: $e,
  toString: $e
});
function be() {
  return this.rgb().formatHex();
}
function bi() {
  return this.rgb().formatHex8();
}
function $i() {
  return rr(this).formatHsl();
}
function $e() {
  return this.rgb().formatRgb();
}
function pt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = pi.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Te(n) : e === 3 ? new Q(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Qt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Qt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = yi.exec(t)) ? new Q(n[1], n[2], n[3], 1) : (n = wi.exec(t)) ? new Q(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = vi.exec(t)) ? Qt(n[1], n[2], n[3], n[4]) : (n = xi.exec(t)) ? Qt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = _i.exec(t)) ? Ce(n[1], n[2] / 100, n[3] / 100, 1) : (n = Mi.exec(t)) ? Ce(n[1], n[2] / 100, n[3] / 100, n[4]) : Me.hasOwnProperty(t) ? Te(Me[t]) : t === "transparent" ? new Q(NaN, NaN, NaN, 0) : null;
}
function Te(t) {
  return new Q(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Qt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new Q(t, n, e, r);
}
function Ti(t) {
  return t instanceof Zt || (t = pt(t)), t ? (t = t.rgb(), new Q(t.r, t.g, t.b, t.opacity)) : new Q();
}
function Pn(t, n, e, r) {
  return arguments.length === 1 ? Ti(t) : new Q(t, n, e, r ?? 1);
}
function Q(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
jn(Q, Pn, er(Zt, {
  brighter(t) {
    return t = t == null ? ln : Math.pow(ln, t), new Q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? zt : Math.pow(zt, t), new Q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Q(xt(this.r), xt(this.g), xt(this.b), hn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Se,
  // Deprecated! Use color.formatHex.
  formatHex: Se,
  formatHex8: Si,
  formatRgb: ke,
  toString: ke
}));
function Se() {
  return `#${vt(this.r)}${vt(this.g)}${vt(this.b)}`;
}
function Si() {
  return `#${vt(this.r)}${vt(this.g)}${vt(this.b)}${vt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ke() {
  const t = hn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${xt(this.r)}, ${xt(this.g)}, ${xt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function hn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function xt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function vt(t) {
  return t = xt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ce(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new rt(t, n, e, r);
}
function rr(t) {
  if (t instanceof rt)
    return new rt(t.h, t.s, t.l, t.opacity);
  if (t instanceof Zt || (t = pt(t)), !t)
    return new rt();
  if (t instanceof rt)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), u = NaN, s = o - i, c = (o + i) / 2;
  return s ? (n === o ? u = (e - r) / s + (e < r) * 6 : e === o ? u = (r - n) / s + 2 : u = (n - e) / s + 4, s /= c < 0.5 ? o + i : 2 - o - i, u *= 60) : s = c > 0 && c < 1 ? 0 : u, new rt(u, s, c, t.opacity);
}
function ki(t, n, e, r) {
  return arguments.length === 1 ? rr(t) : new rt(t, n, e, r ?? 1);
}
function rt(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
jn(rt, ki, er(Zt, {
  brighter(t) {
    return t = t == null ? ln : Math.pow(ln, t), new rt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? zt : Math.pow(zt, t), new rt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new Q(
      Dn(t >= 240 ? t - 240 : t + 120, i, r),
      Dn(t, i, r),
      Dn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new rt(De(this.h), Kt(this.s), Kt(this.l), hn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = hn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${De(this.h)}, ${Kt(this.s) * 100}%, ${Kt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function De(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Kt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Dn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
var Ci = { value: () => {
} };
function te() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new an(e);
}
function an(t) {
  this._ = t;
}
function Di(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
an.prototype = te.prototype = {
  constructor: an,
  on: function(t, n) {
    var e = this._, r = Di(t + "", e), i, o = -1, u = r.length;
    if (arguments.length < 2) {
      for (; ++o < u; )
        if ((i = (t = r[o]).type) && (i = Ai(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++o < u; )
      if (i = (t = r[o]).type)
        e[i] = Ae(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = Ae(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new an(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0)
      for (var e = new Array(i), r = 0, i, o; r < i; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r)
      o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(n, e);
  }
};
function Ai(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Ae(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Ci, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Wn = "http://www.w3.org/1999/xhtml";
const Ne = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Wn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function bn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Ne.hasOwnProperty(n) ? { space: Ne[n], local: t } : t;
}
function Ni(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Wn && n.documentElement.namespaceURI === Wn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Ui(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ir(t) {
  var n = bn(t);
  return (n.local ? Ui : Ni)(n);
}
function Fi() {
}
function ne(t) {
  return t == null ? Fi : function() {
    return this.querySelector(t);
  };
}
function Yi(t) {
  typeof t != "function" && (t = ne(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], u = o.length, s = r[i] = new Array(u), c, a, f = 0; f < u; ++f)
      (c = o[f]) && (a = t.call(c, c.__data__, f, o)) && ("__data__" in c && (a.__data__ = c.__data__), s[f] = a);
  return new tt(r, this._parents);
}
function Hi(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Ei() {
  return [];
}
function or(t) {
  return t == null ? Ei : function() {
    return this.querySelectorAll(t);
  };
}
function Oi(t) {
  return function() {
    return Hi(t.apply(this, arguments));
  };
}
function Ii(t) {
  typeof t == "function" ? t = Oi(t) : t = or(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var u = n[o], s = u.length, c, a = 0; a < s; ++a)
      (c = u[a]) && (r.push(t.call(c, c.__data__, a, u)), i.push(c));
  return new tt(r, i);
}
function ur(t) {
  return function() {
    return this.matches(t);
  };
}
function ar(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Li = Array.prototype.find;
function Ri(t) {
  return function() {
    return Li.call(this.children, t);
  };
}
function Pi() {
  return this.firstElementChild;
}
function Wi(t) {
  return this.select(t == null ? Pi : Ri(typeof t == "function" ? t : ar(t)));
}
var zi = Array.prototype.filter;
function Vi() {
  return Array.from(this.children);
}
function qi(t) {
  return function() {
    return zi.call(this.children, t);
  };
}
function Xi(t) {
  return this.selectAll(t == null ? Vi : qi(typeof t == "function" ? t : ar(t)));
}
function Bi(t) {
  typeof t != "function" && (t = ur(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], u = o.length, s = r[i] = [], c, a = 0; a < u; ++a)
      (c = o[a]) && t.call(c, c.__data__, a, o) && s.push(c);
  return new tt(r, this._parents);
}
function sr(t) {
  return new Array(t.length);
}
function Zi() {
  return new tt(this._enter || this._groups.map(sr), this._parents);
}
function dn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
dn.prototype = {
  constructor: dn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Gi(t) {
  return function() {
    return t;
  };
}
function Ji(t, n, e, r, i, o) {
  for (var u = 0, s, c = n.length, a = o.length; u < a; ++u)
    (s = n[u]) ? (s.__data__ = o[u], r[u] = s) : e[u] = new dn(t, o[u]);
  for (; u < c; ++u)
    (s = n[u]) && (i[u] = s);
}
function Qi(t, n, e, r, i, o, u) {
  var s, c, a = /* @__PURE__ */ new Map(), f = n.length, h = o.length, l = new Array(f), d;
  for (s = 0; s < f; ++s)
    (c = n[s]) && (l[s] = d = u.call(c, c.__data__, s, n) + "", a.has(d) ? i[s] = c : a.set(d, c));
  for (s = 0; s < h; ++s)
    d = u.call(t, o[s], s, o) + "", (c = a.get(d)) ? (r[s] = c, c.__data__ = o[s], a.delete(d)) : e[s] = new dn(t, o[s]);
  for (s = 0; s < f; ++s)
    (c = n[s]) && a.get(l[s]) === c && (i[s] = c);
}
function Ki(t) {
  return t.__data__;
}
function ji(t, n) {
  if (!arguments.length)
    return Array.from(this, Ki);
  var e = n ? Qi : Ji, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Gi(t));
  for (var o = i.length, u = new Array(o), s = new Array(o), c = new Array(o), a = 0; a < o; ++a) {
    var f = r[a], h = i[a], l = h.length, d = to(t.call(f, f && f.__data__, a, r)), S = d.length, k = s[a] = new Array(S), N = u[a] = new Array(S), O = c[a] = new Array(l);
    e(f, h, k, N, O, d, n);
    for (var R = 0, U = 0, w, M; R < S; ++R)
      if (w = k[R]) {
        for (R >= U && (U = R + 1); !(M = N[U]) && ++U < S; )
          ;
        w._next = M || null;
      }
  }
  return u = new tt(u, r), u._enter = s, u._exit = c, u;
}
function to(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function no() {
  return new tt(this._exit || this._groups.map(sr), this._parents);
}
function eo(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function ro(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, u = Math.min(i, o), s = new Array(i), c = 0; c < u; ++c)
    for (var a = e[c], f = r[c], h = a.length, l = s[c] = new Array(h), d, S = 0; S < h; ++S)
      (d = a[S] || f[S]) && (l[S] = d);
  for (; c < i; ++c)
    s[c] = e[c];
  return new tt(s, this._parents);
}
function io() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], u; --i >= 0; )
      (u = r[i]) && (o && u.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(u, o), o = u);
  return this;
}
function oo(t) {
  t || (t = uo);
  function n(h, l) {
    return h && l ? t(h.__data__, l.__data__) : !h - !l;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var u = e[o], s = u.length, c = i[o] = new Array(s), a, f = 0; f < s; ++f)
      (a = u[f]) && (c[f] = a);
    c.sort(n);
  }
  return new tt(i, this._parents).order();
}
function uo(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function ao() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function so() {
  return Array.from(this);
}
function co() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var u = r[i];
      if (u)
        return u;
    }
  return null;
}
function fo() {
  let t = 0;
  for (const n of this)
    ++t;
  return t;
}
function lo() {
  return !this.node();
}
function ho(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, u = i.length, s; o < u; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function go(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function mo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function po(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function yo(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function wo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function vo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function xo(t, n) {
  var e = bn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? mo : go : typeof n == "function" ? e.local ? vo : wo : e.local ? yo : po)(e, n));
}
function cr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function _o(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Mo(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function bo(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function $o(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? _o : typeof n == "function" ? bo : Mo)(t, n, e ?? "")) : Nt(this.node(), t);
}
function Nt(t, n) {
  return t.style.getPropertyValue(n) || cr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function To(t) {
  return function() {
    delete this[t];
  };
}
function So(t, n) {
  return function() {
    this[t] = n;
  };
}
function ko(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Co(t, n) {
  return arguments.length > 1 ? this.each((n == null ? To : typeof n == "function" ? ko : So)(t, n)) : this.node()[t];
}
function fr(t) {
  return t.trim().split(/^|\s+/);
}
function ee(t) {
  return t.classList || new lr(t);
}
function lr(t) {
  this._node = t, this._names = fr(t.getAttribute("class") || "");
}
lr.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function hr(t, n) {
  for (var e = ee(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function dr(t, n) {
  for (var e = ee(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function Do(t) {
  return function() {
    hr(this, t);
  };
}
function Ao(t) {
  return function() {
    dr(this, t);
  };
}
function No(t, n) {
  return function() {
    (n.apply(this, arguments) ? hr : dr)(this, t);
  };
}
function Uo(t, n) {
  var e = fr(t + "");
  if (arguments.length < 2) {
    for (var r = ee(this.node()), i = -1, o = e.length; ++i < o; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? No : n ? Do : Ao)(e, n));
}
function Fo() {
  this.textContent = "";
}
function Yo(t) {
  return function() {
    this.textContent = t;
  };
}
function Ho(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function Eo(t) {
  return arguments.length ? this.each(t == null ? Fo : (typeof t == "function" ? Ho : Yo)(t)) : this.node().textContent;
}
function Oo() {
  this.innerHTML = "";
}
function Io(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Lo(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Ro(t) {
  return arguments.length ? this.each(t == null ? Oo : (typeof t == "function" ? Lo : Io)(t)) : this.node().innerHTML;
}
function Po() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Wo() {
  return this.each(Po);
}
function zo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Vo() {
  return this.each(zo);
}
function qo(t) {
  var n = typeof t == "function" ? t : ir(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Xo() {
  return null;
}
function Bo(t, n) {
  var e = typeof t == "function" ? t : ir(t), r = n == null ? Xo : typeof n == "function" ? n : ne(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Zo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Go() {
  return this.each(Zo);
}
function Jo() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Qo() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ko(t) {
  return this.select(t ? Qo : Jo);
}
function jo(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function tu(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function nu(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function eu(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function ru(t, n, e) {
  return function() {
    var r = this.__on, i, o = tu(n);
    if (r) {
      for (var u = 0, s = r.length; u < s; ++u)
        if ((i = r[u]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function iu(t, n, e) {
  var r = nu(t + ""), i, o = r.length, u;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, a = s.length, f; c < a; ++c)
        for (i = 0, f = s[c]; i < o; ++i)
          if ((u = r[i]).type === f.type && u.name === f.name)
            return f.value;
    }
    return;
  }
  for (s = n ? ru : eu, i = 0; i < o; ++i)
    this.each(s(r[i], n, e));
  return this;
}
function gr(t, n, e) {
  var r = cr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function ou(t, n) {
  return function() {
    return gr(this, t, n);
  };
}
function uu(t, n) {
  return function() {
    return gr(this, t, n.apply(this, arguments));
  };
}
function au(t, n) {
  return this.each((typeof n == "function" ? uu : ou)(t, n));
}
function* su() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, u; i < o; ++i)
      (u = r[i]) && (yield u);
}
var mr = [null];
function tt(t, n) {
  this._groups = t, this._parents = n;
}
function Gt() {
  return new tt([[document.documentElement]], mr);
}
function cu() {
  return this;
}
tt.prototype = Gt.prototype = {
  constructor: tt,
  select: Yi,
  selectAll: Ii,
  selectChild: Wi,
  selectChildren: Xi,
  filter: Bi,
  data: ji,
  enter: Zi,
  exit: no,
  join: eo,
  merge: ro,
  selection: cu,
  order: io,
  sort: oo,
  call: ao,
  nodes: so,
  node: co,
  size: fo,
  empty: lo,
  each: ho,
  attr: xo,
  style: $o,
  property: Co,
  classed: Uo,
  text: Eo,
  html: Ro,
  raise: Wo,
  lower: Vo,
  append: qo,
  insert: Bo,
  remove: Go,
  clone: Ko,
  datum: jo,
  on: iu,
  dispatch: au,
  [Symbol.iterator]: su
};
function it(t) {
  return typeof t == "string" ? new tt([[document.querySelector(t)]], [document.documentElement]) : new tt([[t]], mr);
}
function fu(t) {
  let n;
  for (; n = t.sourceEvent; )
    t = n;
  return t;
}
function Ue(t, n) {
  if (t = fu(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const lu = { passive: !1 }, qt = { capture: !0, passive: !1 };
function An(t) {
  t.stopImmediatePropagation();
}
function At(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function hu(t) {
  var n = t.document.documentElement, e = it(t).on("dragstart.drag", At, qt);
  "onselectstart" in n ? e.on("selectstart.drag", At, qt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function du(t, n) {
  var e = t.document.documentElement, r = it(t).on("dragstart.drag", null);
  n && (r.on("click.drag", At, qt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const jt = (t) => () => t;
function zn(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: u,
  y: s,
  dx: c,
  dy: a,
  dispatch: f
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: u, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: c, enumerable: !0, configurable: !0 },
    dy: { value: a, enumerable: !0, configurable: !0 },
    _: { value: f }
  });
}
zn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function gu(t) {
  return !t.ctrlKey && !t.button;
}
function mu() {
  return this.parentNode;
}
function pu(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function yu() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function wu() {
  var t = gu, n = mu, e = pu, r = yu, i = {}, o = te("start", "drag", "end"), u = 0, s, c, a, f, h = 0;
  function l(w) {
    w.on("mousedown.drag", d).filter(r).on("touchstart.drag", N).on("touchmove.drag", O, lu).on("touchend.drag touchcancel.drag", R).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function d(w, M) {
    if (!(f || !t.call(this, w, M))) {
      var g = U(this, n.call(this, w, M), w, M, "mouse");
      g && (it(w.view).on("mousemove.drag", S, qt).on("mouseup.drag", k, qt), hu(w.view), An(w), a = !1, s = w.clientX, c = w.clientY, g("start", w));
    }
  }
  function S(w) {
    if (At(w), !a) {
      var M = w.clientX - s, g = w.clientY - c;
      a = M * M + g * g > h;
    }
    i.mouse("drag", w);
  }
  function k(w) {
    it(w.view).on("mousemove.drag mouseup.drag", null), du(w.view, a), At(w), i.mouse("end", w);
  }
  function N(w, M) {
    if (t.call(this, w, M)) {
      var g = w.changedTouches, p = n.call(this, w, M), m = g.length, F, A;
      for (F = 0; F < m; ++F)
        (A = U(this, p, w, M, g[F].identifier, g[F])) && (An(w), A("start", w, g[F]));
    }
  }
  function O(w) {
    var M = w.changedTouches, g = M.length, p, m;
    for (p = 0; p < g; ++p)
      (m = i[M[p].identifier]) && (At(w), m("drag", w, M[p]));
  }
  function R(w) {
    var M = w.changedTouches, g = M.length, p, m;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), p = 0; p < g; ++p)
      (m = i[M[p].identifier]) && (An(w), m("end", w, M[p]));
  }
  function U(w, M, g, p, m, F) {
    var A = o.copy(), y = Ue(F || g, M), I, H, $;
    if (($ = e.call(w, new zn("beforestart", {
      sourceEvent: g,
      target: l,
      identifier: m,
      active: u,
      x: y[0],
      y: y[1],
      dx: 0,
      dy: 0,
      dispatch: A
    }), p)) != null)
      return I = $.x - y[0] || 0, H = $.y - y[1] || 0, function b(x, T, _) {
        var C = y, E;
        switch (x) {
          case "start":
            i[m] = b, E = u++;
            break;
          case "end":
            delete i[m], --u;
          case "drag":
            y = Ue(_ || T, M), E = u;
            break;
        }
        A.call(
          x,
          w,
          new zn(x, {
            sourceEvent: T,
            subject: $,
            target: l,
            identifier: m,
            active: E,
            x: y[0] + I,
            y: y[1] + H,
            dx: y[0] - C[0],
            dy: y[1] - C[1],
            dispatch: A
          }),
          p
        );
      };
  }
  return l.filter = function(w) {
    return arguments.length ? (t = typeof w == "function" ? w : jt(!!w), l) : t;
  }, l.container = function(w) {
    return arguments.length ? (n = typeof w == "function" ? w : jt(w), l) : n;
  }, l.subject = function(w) {
    return arguments.length ? (e = typeof w == "function" ? w : jt(w), l) : e;
  }, l.touchable = function(w) {
    return arguments.length ? (r = typeof w == "function" ? w : jt(!!w), l) : r;
  }, l.on = function() {
    var w = o.on.apply(o, arguments);
    return w === o ? l : w;
  }, l.clickDistance = function(w) {
    return arguments.length ? (h = (w = +w) * w, l) : Math.sqrt(h);
  }, l;
}
function $n(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
const Fe = Symbol("implicit");
function Xt() {
  var t = new ve(), n = [], e = [], r = Fe;
  function i(o) {
    let u = t.get(o);
    if (u === void 0) {
      if (r !== Fe)
        return r;
      t.set(o, u = n.push(o) - 1);
    }
    return e[u % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length)
      return n.slice();
    n = [], t = new ve();
    for (const u of o)
      t.has(u) || t.set(u, n.push(u) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return Xt(n, e).unknown(r);
  }, $n.apply(i, arguments), i;
}
function pr() {
  var t = Xt().unknown(void 0), n = t.domain, e = t.range, r = 0, i = 1, o, u, s = !1, c = 0, a = 0, f = 0.5;
  delete t.unknown;
  function h() {
    var l = n().length, d = i < r, S = d ? i : r, k = d ? r : i;
    o = (k - S) / Math.max(1, l - c + a * 2), s && (o = Math.floor(o)), S += (k - S - o * (l - c)) * f, u = o * (1 - c), s && (S = Math.round(S), u = Math.round(u));
    var N = ai(l).map(function(O) {
      return S + o * O;
    });
    return e(d ? N.reverse() : N);
  }
  return t.domain = function(l) {
    return arguments.length ? (n(l), h()) : n();
  }, t.range = function(l) {
    return arguments.length ? ([r, i] = l, r = +r, i = +i, h()) : [r, i];
  }, t.rangeRound = function(l) {
    return [r, i] = l, r = +r, i = +i, s = !0, h();
  }, t.bandwidth = function() {
    return u;
  }, t.step = function() {
    return o;
  }, t.round = function(l) {
    return arguments.length ? (s = !!l, h()) : s;
  }, t.padding = function(l) {
    return arguments.length ? (c = Math.min(1, a = +l), h()) : c;
  }, t.paddingInner = function(l) {
    return arguments.length ? (c = Math.min(1, l), h()) : c;
  }, t.paddingOuter = function(l) {
    return arguments.length ? (a = +l, h()) : a;
  }, t.align = function(l) {
    return arguments.length ? (f = Math.max(0, Math.min(1, l)), h()) : f;
  }, t.copy = function() {
    return pr(n(), [r, i]).round(s).paddingInner(c).paddingOuter(a).align(f);
  }, $n.apply(h(), arguments);
}
const re = (t) => () => t;
function vu(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function xu(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function _u(t) {
  return (t = +t) == 1 ? yr : function(n, e) {
    return e - n ? xu(n, e, t) : re(isNaN(n) ? e : n);
  };
}
function yr(t, n) {
  var e = n - t;
  return e ? vu(t, e) : re(isNaN(t) ? n : t);
}
const gn = function t(n) {
  var e = _u(n);
  function r(i, o) {
    var u = e((i = Pn(i)).r, (o = Pn(o)).r), s = e(i.g, o.g), c = e(i.b, o.b), a = yr(i.opacity, o.opacity);
    return function(f) {
      return i.r = u(f), i.g = s(f), i.b = c(f), i.opacity = a(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Mu(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i)
      r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function bu(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function $u(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), u;
  for (u = 0; u < r; ++u)
    i[u] = ie(t[u], n[u]);
  for (; u < e; ++u)
    o[u] = n[u];
  return function(s) {
    for (u = 0; u < r; ++u)
      o[u] = i[u](s);
    return o;
  };
}
function Tu(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function et(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Su(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = ie(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e)
      r[i] = e[i](o);
    return r;
  };
}
var Vn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Nn = new RegExp(Vn.source, "g");
function ku(t) {
  return function() {
    return t;
  };
}
function Cu(t) {
  return function(n) {
    return t(n) + "";
  };
}
function wr(t, n) {
  var e = Vn.lastIndex = Nn.lastIndex = 0, r, i, o, u = -1, s = [], c = [];
  for (t = t + "", n = n + ""; (r = Vn.exec(t)) && (i = Nn.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[u] ? s[u] += o : s[++u] = o), (r = r[0]) === (i = i[0]) ? s[u] ? s[u] += i : s[++u] = i : (s[++u] = null, c.push({ i: u, x: et(r, i) })), e = Nn.lastIndex;
  return e < n.length && (o = n.slice(e), s[u] ? s[u] += o : s[++u] = o), s.length < 2 ? c[0] ? Cu(c[0].x) : ku(n) : (n = c.length, function(a) {
    for (var f = 0, h; f < n; ++f)
      s[(h = c[f]).i] = h.x(a);
    return s.join("");
  });
}
function ie(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? re(n) : (e === "number" ? et : e === "string" ? (r = pt(n)) ? (n = r, gn) : wr : n instanceof pt ? gn : n instanceof Date ? Tu : bu(n) ? Mu : Array.isArray(n) ? $u : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Su : et)(t, n);
}
function Du(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Ye = 180 / Math.PI, qn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function vr(t, n, e, r, i, o) {
  var u, s, c;
  return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (c = t * e + n * r) && (e -= t * c, r -= n * c), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, c /= s), t * r < n * e && (t = -t, n = -n, c = -c, u = -u), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Ye,
    skewX: Math.atan(c) * Ye,
    scaleX: u,
    scaleY: s
  };
}
var tn;
function Au(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? qn : vr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Nu(t) {
  return t == null || (tn || (tn = document.createElementNS("http://www.w3.org/2000/svg", "g")), tn.setAttribute("transform", t), !(t = tn.transform.baseVal.consolidate())) ? qn : (t = t.matrix, vr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function xr(t, n, e, r) {
  function i(a) {
    return a.length ? a.pop() + " " : "";
  }
  function o(a, f, h, l, d, S) {
    if (a !== h || f !== l) {
      var k = d.push("translate(", null, n, null, e);
      S.push({ i: k - 4, x: et(a, h) }, { i: k - 2, x: et(f, l) });
    } else
      (h || l) && d.push("translate(" + h + n + l + e);
  }
  function u(a, f, h, l) {
    a !== f ? (a - f > 180 ? f += 360 : f - a > 180 && (a += 360), l.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: et(a, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function s(a, f, h, l) {
    a !== f ? l.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: et(a, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function c(a, f, h, l, d, S) {
    if (a !== h || f !== l) {
      var k = d.push(i(d) + "scale(", null, ",", null, ")");
      S.push({ i: k - 4, x: et(a, h) }, { i: k - 2, x: et(f, l) });
    } else
      (h !== 1 || l !== 1) && d.push(i(d) + "scale(" + h + "," + l + ")");
  }
  return function(a, f) {
    var h = [], l = [];
    return a = t(a), f = t(f), o(a.translateX, a.translateY, f.translateX, f.translateY, h, l), u(a.rotate, f.rotate, h, l), s(a.skewX, f.skewX, h, l), c(a.scaleX, a.scaleY, f.scaleX, f.scaleY, h, l), a = f = null, function(d) {
      for (var S = -1, k = l.length, N; ++S < k; )
        h[(N = l[S]).i] = N.x(d);
      return h.join("");
    };
  };
}
var Uu = xr(Au, "px, ", "px)", "deg)"), Fu = xr(Nu, ", ", ")", ")");
function Yu(t) {
  return function() {
    return t;
  };
}
function Hu(t) {
  return +t;
}
var He = [0, 1];
function kt(t) {
  return t;
}
function Xn(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Yu(isNaN(n) ? NaN : 0.5);
}
function Eu(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Ou(t, n, e) {
  var r = t[0], i = t[1], o = n[0], u = n[1];
  return i < r ? (r = Xn(i, r), o = e(u, o)) : (r = Xn(r, i), o = e(o, u)), function(s) {
    return o(r(s));
  };
}
function Iu(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), u = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u < r; )
    i[u] = Xn(t[u], t[u + 1]), o[u] = e(n[u], n[u + 1]);
  return function(s) {
    var c = Qr(t, s, 1, r) - 1;
    return o[c](i[c](s));
  };
}
function _r(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Lu() {
  var t = He, n = He, e = ie, r, i, o, u = kt, s, c, a;
  function f() {
    var l = Math.min(t.length, n.length);
    return u !== kt && (u = Eu(t[0], t[l - 1])), s = l > 2 ? Iu : Ou, c = a = null, h;
  }
  function h(l) {
    return l == null || isNaN(l = +l) ? o : (c || (c = s(t.map(r), n, e)))(r(u(l)));
  }
  return h.invert = function(l) {
    return u(i((a || (a = s(n, t.map(r), et)))(l)));
  }, h.domain = function(l) {
    return arguments.length ? (t = Array.from(l, Hu), f()) : t.slice();
  }, h.range = function(l) {
    return arguments.length ? (n = Array.from(l), f()) : n.slice();
  }, h.rangeRound = function(l) {
    return n = Array.from(l), e = Du, f();
  }, h.clamp = function(l) {
    return arguments.length ? (u = l ? !0 : kt, f()) : u !== kt;
  }, h.interpolate = function(l) {
    return arguments.length ? (e = l, f()) : e;
  }, h.unknown = function(l) {
    return arguments.length ? (o = l, h) : o;
  }, function(l, d) {
    return r = l, i = d, f();
  };
}
function Mr() {
  return Lu()(kt, kt);
}
function Ru(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function mn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Ut(t) {
  return t = mn(Math.abs(t)), t ? t[1] : NaN;
}
function Pu(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], u = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), o.push(e.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[u = (u + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Wu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var zu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function pn(t) {
  if (!(n = zu.exec(t)))
    throw new Error("invalid format: " + t);
  var n;
  return new oe({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
pn.prototype = oe.prototype;
function oe(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
oe.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Vu(t) {
  t:
    for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
      switch (t[e]) {
        case ".":
          r = i = e;
          break;
        case "0":
          r === 0 && (r = e), i = e;
          break;
        default:
          if (!+t[e])
            break t;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var br;
function qu(t, n) {
  var e = mn(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1], o = i - (br = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, u = r.length;
  return o === u ? r : o > u ? r + new Array(o - u + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + mn(t, Math.max(0, n + o - 1))[0];
}
function Ee(t, n) {
  var e = mn(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Oe = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Ru,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Ee(t * 100, n),
  r: Ee,
  s: qu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Ie(t) {
  return t;
}
var Le = Array.prototype.map, Re = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Xu(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Ie : Pu(Le.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Ie : Wu(Le.call(t.numerals, String)), u = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function a(h) {
    h = pn(h);
    var l = h.fill, d = h.align, S = h.sign, k = h.symbol, N = h.zero, O = h.width, R = h.comma, U = h.precision, w = h.trim, M = h.type;
    M === "n" ? (R = !0, M = "g") : Oe[M] || (U === void 0 && (U = 12), w = !0, M = "g"), (N || l === "0" && d === "=") && (N = !0, l = "0", d = "=");
    var g = k === "$" ? e : k === "#" && /[boxX]/.test(M) ? "0" + M.toLowerCase() : "", p = k === "$" ? r : /[%p]/.test(M) ? u : "", m = Oe[M], F = /[defgprs%]/.test(M);
    U = U === void 0 ? 6 : /[gprs]/.test(M) ? Math.max(1, Math.min(21, U)) : Math.max(0, Math.min(20, U));
    function A(y) {
      var I = g, H = p, $, b, x;
      if (M === "c")
        H = m(y) + H, y = "";
      else {
        y = +y;
        var T = y < 0 || 1 / y < 0;
        if (y = isNaN(y) ? c : m(Math.abs(y), U), w && (y = Vu(y)), T && +y == 0 && S !== "+" && (T = !1), I = (T ? S === "(" ? S : s : S === "-" || S === "(" ? "" : S) + I, H = (M === "s" ? Re[8 + br / 3] : "") + H + (T && S === "(" ? ")" : ""), F) {
          for ($ = -1, b = y.length; ++$ < b; )
            if (x = y.charCodeAt($), 48 > x || x > 57) {
              H = (x === 46 ? i + y.slice($ + 1) : y.slice($)) + H, y = y.slice(0, $);
              break;
            }
        }
      }
      R && !N && (y = n(y, 1 / 0));
      var _ = I.length + y.length + H.length, C = _ < O ? new Array(O - _ + 1).join(l) : "";
      switch (R && N && (y = n(C + y, C.length ? O - H.length : 1 / 0), C = ""), d) {
        case "<":
          y = I + y + H + C;
          break;
        case "=":
          y = I + C + y + H;
          break;
        case "^":
          y = C.slice(0, _ = C.length >> 1) + I + y + H + C.slice(_);
          break;
        default:
          y = C + I + y + H;
          break;
      }
      return o(y);
    }
    return A.toString = function() {
      return h + "";
    }, A;
  }
  function f(h, l) {
    var d = a((h = pn(h), h.type = "f", h)), S = Math.max(-8, Math.min(8, Math.floor(Ut(l) / 3))) * 3, k = Math.pow(10, -S), N = Re[8 + S / 3];
    return function(O) {
      return d(k * O) + N;
    };
  }
  return {
    format: a,
    formatPrefix: f
  };
}
var nn, $r, Tr;
Bu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Bu(t) {
  return nn = Xu(t), $r = nn.format, Tr = nn.formatPrefix, nn;
}
function Zu(t) {
  return Math.max(0, -Ut(Math.abs(t)));
}
function Gu(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ut(n) / 3))) * 3 - Ut(Math.abs(t)));
}
function Ju(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Ut(n) - Ut(t)) + 1;
}
function Qu(t, n, e, r) {
  var i = Ln(t, n, e), o;
  switch (r = pn(r ?? ",f"), r.type) {
    case "s": {
      var u = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Gu(i, u)) && (r.precision = o), Tr(r, u);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Ju(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Zu(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return $r(r);
}
function Ku(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return oi(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Qu(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, u = r[i], s = r[o], c, a, f = 10;
    for (s < u && (a = u, u = s, s = a, a = i, i = o, o = a); f-- > 0; ) {
      if (a = In(u, s, e), a === c)
        return r[i] = u, r[o] = s, n(r);
      if (a > 0)
        u = Math.floor(u / a) * a, s = Math.ceil(s / a) * a;
      else if (a < 0)
        u = Math.ceil(u * a) / a, s = Math.floor(s * a) / a;
      else
        break;
      c = a;
    }
    return t;
  }, t;
}
function ju() {
  var t = Mr();
  return t.copy = function() {
    return _r(t, ju());
  }, $n.apply(t, arguments), Ku(t);
}
function ta(t, n) {
  t = t.slice();
  var e = 0, r = t.length - 1, i = t[e], o = t[r], u;
  return o < i && (u = e, e = r, r = u, u = i, i = o, o = u), t[e] = n.floor(i), t[r] = n.ceil(o), t;
}
const Un = /* @__PURE__ */ new Date(), Fn = /* @__PURE__ */ new Date();
function B(t, n, e, r) {
  function i(o) {
    return t(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return i.floor = (o) => (t(o = /* @__PURE__ */ new Date(+o)), o), i.ceil = (o) => (t(o = new Date(o - 1)), n(o, 1), t(o), o), i.round = (o) => {
    const u = i(o), s = i.ceil(o);
    return o - u < s - o ? u : s;
  }, i.offset = (o, u) => (n(o = /* @__PURE__ */ new Date(+o), u == null ? 1 : Math.floor(u)), o), i.range = (o, u, s) => {
    const c = [];
    if (o = i.ceil(o), s = s == null ? 1 : Math.floor(s), !(o < u) || !(s > 0))
      return c;
    let a;
    do
      c.push(a = /* @__PURE__ */ new Date(+o)), n(o, s), t(o);
    while (a < o && o < u);
    return c;
  }, i.filter = (o) => B((u) => {
    if (u >= u)
      for (; t(u), !o(u); )
        u.setTime(u - 1);
  }, (u, s) => {
    if (u >= u)
      if (s < 0)
        for (; ++s <= 0; )
          for (; n(u, -1), !o(u); )
            ;
      else
        for (; --s >= 0; )
          for (; n(u, 1), !o(u); )
            ;
  }), e && (i.count = (o, u) => (Un.setTime(+o), Fn.setTime(+u), t(Un), t(Fn), Math.floor(e(Un, Fn))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? (u) => r(u) % o === 0 : (u) => i.count(0, u) % o === 0) : i)), i;
}
const yn = B(() => {
}, (t, n) => {
  t.setTime(+t + n);
}, (t, n) => n - t);
yn.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? B((n) => {
  n.setTime(Math.floor(n / t) * t);
}, (n, e) => {
  n.setTime(+n + e * t);
}, (n, e) => (e - n) / t) : yn);
yn.range;
const lt = 1e3, nt = lt * 60, ht = nt * 60, dt = ht * 24, ue = dt * 7, Pe = dt * 30, Yn = dt * 365, Ct = B((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, n) => {
  t.setTime(+t + n * lt);
}, (t, n) => (n - t) / lt, (t) => t.getUTCSeconds());
Ct.range;
const ae = B((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * lt);
}, (t, n) => {
  t.setTime(+t + n * nt);
}, (t, n) => (n - t) / nt, (t) => t.getMinutes());
ae.range;
const na = B((t) => {
  t.setUTCSeconds(0, 0);
}, (t, n) => {
  t.setTime(+t + n * nt);
}, (t, n) => (n - t) / nt, (t) => t.getUTCMinutes());
na.range;
const se = B((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * lt - t.getMinutes() * nt);
}, (t, n) => {
  t.setTime(+t + n * ht);
}, (t, n) => (n - t) / ht, (t) => t.getHours());
se.range;
const ea = B((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, n) => {
  t.setTime(+t + n * ht);
}, (t, n) => (n - t) / ht, (t) => t.getUTCHours());
ea.range;
const Jt = B(
  (t) => t.setHours(0, 0, 0, 0),
  (t, n) => t.setDate(t.getDate() + n),
  (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * nt) / dt,
  (t) => t.getDate() - 1
);
Jt.range;
const ce = B((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCDate(t.getUTCDate() + n);
}, (t, n) => (n - t) / dt, (t) => t.getUTCDate() - 1);
ce.range;
const ra = B((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCDate(t.getUTCDate() + n);
}, (t, n) => (n - t) / dt, (t) => Math.floor(t / dt));
ra.range;
function bt(t) {
  return B((n) => {
    n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setDate(n.getDate() + e * 7);
  }, (n, e) => (e - n - (e.getTimezoneOffset() - n.getTimezoneOffset()) * nt) / ue);
}
const Tn = bt(0), wn = bt(1), ia = bt(2), oa = bt(3), Ft = bt(4), ua = bt(5), aa = bt(6);
Tn.range;
wn.range;
ia.range;
oa.range;
Ft.range;
ua.range;
aa.range;
function $t(t) {
  return B((n) => {
    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setUTCDate(n.getUTCDate() + e * 7);
  }, (n, e) => (e - n) / ue);
}
const Sr = $t(0), vn = $t(1), sa = $t(2), ca = $t(3), Yt = $t(4), fa = $t(5), la = $t(6);
Sr.range;
vn.range;
sa.range;
ca.range;
Yt.range;
fa.range;
la.range;
const fe = B((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setMonth(t.getMonth() + n);
}, (t, n) => n.getMonth() - t.getMonth() + (n.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
fe.range;
const ha = B((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCMonth(t.getUTCMonth() + n);
}, (t, n) => n.getUTCMonth() - t.getUTCMonth() + (n.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
ha.range;
const gt = B((t) => {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n);
}, (t, n) => n.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
gt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : B((n) => {
  n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
}, (n, e) => {
  n.setFullYear(n.getFullYear() + e * t);
});
gt.range;
const _t = B((t) => {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n);
}, (t, n) => n.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
_t.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : B((n) => {
  n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
}, (n, e) => {
  n.setUTCFullYear(n.getUTCFullYear() + e * t);
});
_t.range;
function da(t, n, e, r, i, o) {
  const u = [
    [Ct, 1, lt],
    [Ct, 5, 5 * lt],
    [Ct, 15, 15 * lt],
    [Ct, 30, 30 * lt],
    [o, 1, nt],
    [o, 5, 5 * nt],
    [o, 15, 15 * nt],
    [o, 30, 30 * nt],
    [i, 1, ht],
    [i, 3, 3 * ht],
    [i, 6, 6 * ht],
    [i, 12, 12 * ht],
    [r, 1, dt],
    [r, 2, 2 * dt],
    [e, 1, ue],
    [n, 1, Pe],
    [n, 3, 3 * Pe],
    [t, 1, Yn]
  ];
  function s(a, f, h) {
    const l = f < a;
    l && ([a, f] = [f, a]);
    const d = h && typeof h.range == "function" ? h : c(a, f, h), S = d ? d.range(a, +f + 1) : [];
    return l ? S.reverse() : S;
  }
  function c(a, f, h) {
    const l = Math.abs(f - a) / h, d = Qn(([, , N]) => N).right(u, l);
    if (d === u.length)
      return t.every(Ln(a / Yn, f / Yn, h));
    if (d === 0)
      return yn.every(Math.max(Ln(a, f, h), 1));
    const [S, k] = u[l / u[d - 1][2] < u[d][2] / l ? d - 1 : d];
    return S.every(k);
  }
  return [s, c];
}
const [ga, ma] = da(gt, fe, Tn, Jt, se, ae);
function Hn(t) {
  if (0 <= t.y && t.y < 100) {
    var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return n.setFullYear(t.y), n;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function En(t) {
  if (0 <= t.y && t.y < 100) {
    var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return n.setUTCFullYear(t.y), n;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Et(t, n, e) {
  return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
}
function pa(t) {
  var n = t.dateTime, e = t.date, r = t.time, i = t.periods, o = t.days, u = t.shortDays, s = t.months, c = t.shortMonths, a = Ot(i), f = It(i), h = Ot(o), l = It(o), d = Ot(u), S = It(u), k = Ot(s), N = It(s), O = Ot(c), R = It(c), U = {
    a: T,
    A: _,
    b: C,
    B: E,
    c: null,
    d: Be,
    e: Be,
    f: La,
    g: Ga,
    G: Qa,
    H: Ea,
    I: Oa,
    j: Ia,
    L: kr,
    m: Ra,
    M: Pa,
    p: W,
    q: V,
    Q: Je,
    s: Qe,
    S: Wa,
    u: za,
    U: Va,
    V: qa,
    w: Xa,
    W: Ba,
    x: null,
    X: null,
    y: Za,
    Y: Ja,
    Z: Ka,
    "%": Ge
  }, w = {
    a: q,
    A: Z,
    b: J,
    B: mt,
    c: null,
    d: Ze,
    e: Ze,
    f: es,
    g: hs,
    G: gs,
    H: ja,
    I: ts,
    j: ns,
    L: Dr,
    m: rs,
    M: is,
    p: ct,
    q: yt,
    Q: Je,
    s: Qe,
    S: os,
    u: us,
    U: as,
    V: ss,
    w: cs,
    W: fs,
    x: null,
    X: null,
    y: ls,
    Y: ds,
    Z: ms,
    "%": Ge
  }, M = {
    a: A,
    A: y,
    b: I,
    B: H,
    c: $,
    d: qe,
    e: qe,
    f: Ua,
    g: Ve,
    G: ze,
    H: Xe,
    I: Xe,
    j: Ca,
    L: Na,
    m: ka,
    M: Da,
    p: F,
    q: Sa,
    Q: Ya,
    s: Ha,
    S: Aa,
    u: _a,
    U: Ma,
    V: ba,
    w: xa,
    W: $a,
    x: b,
    X: x,
    y: Ve,
    Y: ze,
    Z: Ta,
    "%": Fa
  };
  U.x = g(e, U), U.X = g(r, U), U.c = g(n, U), w.x = g(e, w), w.X = g(r, w), w.c = g(n, w);
  function g(D, Y) {
    return function(L) {
      var v = [], X = -1, z = 0, K = D.length, j, wt, we;
      for (L instanceof Date || (L = /* @__PURE__ */ new Date(+L)); ++X < K; )
        D.charCodeAt(X) === 37 && (v.push(D.slice(z, X)), (wt = We[j = D.charAt(++X)]) != null ? j = D.charAt(++X) : wt = j === "e" ? " " : "0", (we = Y[j]) && (j = we(L, wt)), v.push(j), z = X + 1);
      return v.push(D.slice(z, X)), v.join("");
    };
  }
  function p(D, Y) {
    return function(L) {
      var v = Et(1900, void 0, 1), X = m(v, D, L += "", 0), z, K;
      if (X != L.length)
        return null;
      if ("Q" in v)
        return new Date(v.Q);
      if ("s" in v)
        return new Date(v.s * 1e3 + ("L" in v ? v.L : 0));
      if (Y && !("Z" in v) && (v.Z = 0), "p" in v && (v.H = v.H % 12 + v.p * 12), v.m === void 0 && (v.m = "q" in v ? v.q : 0), "V" in v) {
        if (v.V < 1 || v.V > 53)
          return null;
        "w" in v || (v.w = 1), "Z" in v ? (z = En(Et(v.y, 0, 1)), K = z.getUTCDay(), z = K > 4 || K === 0 ? vn.ceil(z) : vn(z), z = ce.offset(z, (v.V - 1) * 7), v.y = z.getUTCFullYear(), v.m = z.getUTCMonth(), v.d = z.getUTCDate() + (v.w + 6) % 7) : (z = Hn(Et(v.y, 0, 1)), K = z.getDay(), z = K > 4 || K === 0 ? wn.ceil(z) : wn(z), z = Jt.offset(z, (v.V - 1) * 7), v.y = z.getFullYear(), v.m = z.getMonth(), v.d = z.getDate() + (v.w + 6) % 7);
      } else
        ("W" in v || "U" in v) && ("w" in v || (v.w = "u" in v ? v.u % 7 : "W" in v ? 1 : 0), K = "Z" in v ? En(Et(v.y, 0, 1)).getUTCDay() : Hn(Et(v.y, 0, 1)).getDay(), v.m = 0, v.d = "W" in v ? (v.w + 6) % 7 + v.W * 7 - (K + 5) % 7 : v.w + v.U * 7 - (K + 6) % 7);
      return "Z" in v ? (v.H += v.Z / 100 | 0, v.M += v.Z % 100, En(v)) : Hn(v);
    };
  }
  function m(D, Y, L, v) {
    for (var X = 0, z = Y.length, K = L.length, j, wt; X < z; ) {
      if (v >= K)
        return -1;
      if (j = Y.charCodeAt(X++), j === 37) {
        if (j = Y.charAt(X++), wt = M[j in We ? Y.charAt(X++) : j], !wt || (v = wt(D, L, v)) < 0)
          return -1;
      } else if (j != L.charCodeAt(v++))
        return -1;
    }
    return v;
  }
  function F(D, Y, L) {
    var v = a.exec(Y.slice(L));
    return v ? (D.p = f.get(v[0].toLowerCase()), L + v[0].length) : -1;
  }
  function A(D, Y, L) {
    var v = d.exec(Y.slice(L));
    return v ? (D.w = S.get(v[0].toLowerCase()), L + v[0].length) : -1;
  }
  function y(D, Y, L) {
    var v = h.exec(Y.slice(L));
    return v ? (D.w = l.get(v[0].toLowerCase()), L + v[0].length) : -1;
  }
  function I(D, Y, L) {
    var v = O.exec(Y.slice(L));
    return v ? (D.m = R.get(v[0].toLowerCase()), L + v[0].length) : -1;
  }
  function H(D, Y, L) {
    var v = k.exec(Y.slice(L));
    return v ? (D.m = N.get(v[0].toLowerCase()), L + v[0].length) : -1;
  }
  function $(D, Y, L) {
    return m(D, n, Y, L);
  }
  function b(D, Y, L) {
    return m(D, e, Y, L);
  }
  function x(D, Y, L) {
    return m(D, r, Y, L);
  }
  function T(D) {
    return u[D.getDay()];
  }
  function _(D) {
    return o[D.getDay()];
  }
  function C(D) {
    return c[D.getMonth()];
  }
  function E(D) {
    return s[D.getMonth()];
  }
  function W(D) {
    return i[+(D.getHours() >= 12)];
  }
  function V(D) {
    return 1 + ~~(D.getMonth() / 3);
  }
  function q(D) {
    return u[D.getUTCDay()];
  }
  function Z(D) {
    return o[D.getUTCDay()];
  }
  function J(D) {
    return c[D.getUTCMonth()];
  }
  function mt(D) {
    return s[D.getUTCMonth()];
  }
  function ct(D) {
    return i[+(D.getUTCHours() >= 12)];
  }
  function yt(D) {
    return 1 + ~~(D.getUTCMonth() / 3);
  }
  return {
    format: function(D) {
      var Y = g(D += "", U);
      return Y.toString = function() {
        return D;
      }, Y;
    },
    parse: function(D) {
      var Y = p(D += "", !1);
      return Y.toString = function() {
        return D;
      }, Y;
    },
    utcFormat: function(D) {
      var Y = g(D += "", w);
      return Y.toString = function() {
        return D;
      }, Y;
    },
    utcParse: function(D) {
      var Y = p(D += "", !0);
      return Y.toString = function() {
        return D;
      }, Y;
    }
  };
}
var We = { "-": "", _: " ", 0: "0" }, G = /^\s*\d+/, ya = /^%/, wa = /[\\^$*+?|[\]().{}]/g;
function P(t, n, e) {
  var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", o = i.length;
  return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
}
function va(t) {
  return t.replace(wa, "\\$&");
}
function Ot(t) {
  return new RegExp("^(?:" + t.map(va).join("|") + ")", "i");
}
function It(t) {
  return new Map(t.map((n, e) => [n.toLowerCase(), e]));
}
function xa(t, n, e) {
  var r = G.exec(n.slice(e, e + 1));
  return r ? (t.w = +r[0], e + r[0].length) : -1;
}
function _a(t, n, e) {
  var r = G.exec(n.slice(e, e + 1));
  return r ? (t.u = +r[0], e + r[0].length) : -1;
}
function Ma(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.U = +r[0], e + r[0].length) : -1;
}
function ba(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.V = +r[0], e + r[0].length) : -1;
}
function $a(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.W = +r[0], e + r[0].length) : -1;
}
function ze(t, n, e) {
  var r = G.exec(n.slice(e, e + 4));
  return r ? (t.y = +r[0], e + r[0].length) : -1;
}
function Ve(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
}
function Ta(t, n, e) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
}
function Sa(t, n, e) {
  var r = G.exec(n.slice(e, e + 1));
  return r ? (t.q = r[0] * 3 - 3, e + r[0].length) : -1;
}
function ka(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.m = r[0] - 1, e + r[0].length) : -1;
}
function qe(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.d = +r[0], e + r[0].length) : -1;
}
function Ca(t, n, e) {
  var r = G.exec(n.slice(e, e + 3));
  return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1;
}
function Xe(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.H = +r[0], e + r[0].length) : -1;
}
function Da(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.M = +r[0], e + r[0].length) : -1;
}
function Aa(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.S = +r[0], e + r[0].length) : -1;
}
function Na(t, n, e) {
  var r = G.exec(n.slice(e, e + 3));
  return r ? (t.L = +r[0], e + r[0].length) : -1;
}
function Ua(t, n, e) {
  var r = G.exec(n.slice(e, e + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1;
}
function Fa(t, n, e) {
  var r = ya.exec(n.slice(e, e + 1));
  return r ? e + r[0].length : -1;
}
function Ya(t, n, e) {
  var r = G.exec(n.slice(e));
  return r ? (t.Q = +r[0], e + r[0].length) : -1;
}
function Ha(t, n, e) {
  var r = G.exec(n.slice(e));
  return r ? (t.s = +r[0], e + r[0].length) : -1;
}
function Be(t, n) {
  return P(t.getDate(), n, 2);
}
function Ea(t, n) {
  return P(t.getHours(), n, 2);
}
function Oa(t, n) {
  return P(t.getHours() % 12 || 12, n, 2);
}
function Ia(t, n) {
  return P(1 + Jt.count(gt(t), t), n, 3);
}
function kr(t, n) {
  return P(t.getMilliseconds(), n, 3);
}
function La(t, n) {
  return kr(t, n) + "000";
}
function Ra(t, n) {
  return P(t.getMonth() + 1, n, 2);
}
function Pa(t, n) {
  return P(t.getMinutes(), n, 2);
}
function Wa(t, n) {
  return P(t.getSeconds(), n, 2);
}
function za(t) {
  var n = t.getDay();
  return n === 0 ? 7 : n;
}
function Va(t, n) {
  return P(Tn.count(gt(t) - 1, t), n, 2);
}
function Cr(t) {
  var n = t.getDay();
  return n >= 4 || n === 0 ? Ft(t) : Ft.ceil(t);
}
function qa(t, n) {
  return t = Cr(t), P(Ft.count(gt(t), t) + (gt(t).getDay() === 4), n, 2);
}
function Xa(t) {
  return t.getDay();
}
function Ba(t, n) {
  return P(wn.count(gt(t) - 1, t), n, 2);
}
function Za(t, n) {
  return P(t.getFullYear() % 100, n, 2);
}
function Ga(t, n) {
  return t = Cr(t), P(t.getFullYear() % 100, n, 2);
}
function Ja(t, n) {
  return P(t.getFullYear() % 1e4, n, 4);
}
function Qa(t, n) {
  var e = t.getDay();
  return t = e >= 4 || e === 0 ? Ft(t) : Ft.ceil(t), P(t.getFullYear() % 1e4, n, 4);
}
function Ka(t) {
  var n = t.getTimezoneOffset();
  return (n > 0 ? "-" : (n *= -1, "+")) + P(n / 60 | 0, "0", 2) + P(n % 60, "0", 2);
}
function Ze(t, n) {
  return P(t.getUTCDate(), n, 2);
}
function ja(t, n) {
  return P(t.getUTCHours(), n, 2);
}
function ts(t, n) {
  return P(t.getUTCHours() % 12 || 12, n, 2);
}
function ns(t, n) {
  return P(1 + ce.count(_t(t), t), n, 3);
}
function Dr(t, n) {
  return P(t.getUTCMilliseconds(), n, 3);
}
function es(t, n) {
  return Dr(t, n) + "000";
}
function rs(t, n) {
  return P(t.getUTCMonth() + 1, n, 2);
}
function is(t, n) {
  return P(t.getUTCMinutes(), n, 2);
}
function os(t, n) {
  return P(t.getUTCSeconds(), n, 2);
}
function us(t) {
  var n = t.getUTCDay();
  return n === 0 ? 7 : n;
}
function as(t, n) {
  return P(Sr.count(_t(t) - 1, t), n, 2);
}
function Ar(t) {
  var n = t.getUTCDay();
  return n >= 4 || n === 0 ? Yt(t) : Yt.ceil(t);
}
function ss(t, n) {
  return t = Ar(t), P(Yt.count(_t(t), t) + (_t(t).getUTCDay() === 4), n, 2);
}
function cs(t) {
  return t.getUTCDay();
}
function fs(t, n) {
  return P(vn.count(_t(t) - 1, t), n, 2);
}
function ls(t, n) {
  return P(t.getUTCFullYear() % 100, n, 2);
}
function hs(t, n) {
  return t = Ar(t), P(t.getUTCFullYear() % 100, n, 2);
}
function ds(t, n) {
  return P(t.getUTCFullYear() % 1e4, n, 4);
}
function gs(t, n) {
  var e = t.getUTCDay();
  return t = e >= 4 || e === 0 ? Yt(t) : Yt.ceil(t), P(t.getUTCFullYear() % 1e4, n, 4);
}
function ms() {
  return "+0000";
}
function Ge() {
  return "%";
}
function Je(t) {
  return +t;
}
function Qe(t) {
  return Math.floor(+t / 1e3);
}
var Tt, le, Nr, Ur;
ps({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ps(t) {
  return Tt = pa(t), le = Tt.format, Tt.parse, Nr = Tt.utcFormat, Ur = Tt.utcParse, Tt;
}
var Fr = "%Y-%m-%dT%H:%M:%S.%LZ";
function ys(t) {
  return t.toISOString();
}
Date.prototype.toISOString || Nr(Fr);
function ws(t) {
  var n = new Date(t);
  return isNaN(n) ? null : n;
}
var vs = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? ws : Ur(Fr);
const xs = vs;
function _s(t) {
  return new Date(t);
}
function Ms(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function Yr(t, n, e, r, i, o, u, s, c, a) {
  var f = Mr(), h = f.invert, l = f.domain, d = a(".%L"), S = a(":%S"), k = a("%I:%M"), N = a("%I %p"), O = a("%a %d"), R = a("%b %d"), U = a("%B"), w = a("%Y");
  function M(g) {
    return (c(g) < g ? d : s(g) < g ? S : u(g) < g ? k : o(g) < g ? N : r(g) < g ? i(g) < g ? O : R : e(g) < g ? U : w)(g);
  }
  return f.invert = function(g) {
    return new Date(h(g));
  }, f.domain = function(g) {
    return arguments.length ? l(Array.from(g, Ms)) : l().map(_s);
  }, f.ticks = function(g) {
    var p = l();
    return t(p[0], p[p.length - 1], g ?? 10);
  }, f.tickFormat = function(g, p) {
    return p == null ? M : a(p);
  }, f.nice = function(g) {
    var p = l();
    return (!g || typeof g.range != "function") && (g = n(p[0], p[p.length - 1], g ?? 10)), g ? l(ta(p, g)) : f;
  }, f.copy = function() {
    return _r(f, Yr(t, n, e, r, i, o, u, s, c, a));
  }, f;
}
function bs() {
  return $n.apply(Yr(ga, ma, gt, fe, Tn, Jt, se, ae, Ct, le).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var Ht = 0, Pt = 0, Lt = 0, Hr = 1e3, xn, Wt, _n = 0, Mt = 0, Sn = 0, Bt = typeof performance == "object" && performance.now ? performance : Date, Er = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function he() {
  return Mt || (Er($s), Mt = Bt.now() + Sn);
}
function $s() {
  Mt = 0;
}
function Mn() {
  this._call = this._time = this._next = null;
}
Mn.prototype = Or.prototype = {
  constructor: Mn,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? he() : +e) + (n == null ? 0 : +n), !this._next && Wt !== this && (Wt ? Wt._next = this : xn = this, Wt = this), this._call = t, this._time = e, Bn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Bn());
  }
};
function Or(t, n, e) {
  var r = new Mn();
  return r.restart(t, n, e), r;
}
function Ts() {
  he(), ++Ht;
  for (var t = xn, n; t; )
    (n = Mt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Ht;
}
function Ke() {
  Mt = (_n = Bt.now()) + Sn, Ht = Pt = 0;
  try {
    Ts();
  } finally {
    Ht = 0, ks(), Mt = 0;
  }
}
function Ss() {
  var t = Bt.now(), n = t - _n;
  n > Hr && (Sn -= n, _n = t);
}
function ks() {
  for (var t, n = xn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : xn = e);
  Wt = t, Bn(r);
}
function Bn(t) {
  if (!Ht) {
    Pt && (Pt = clearTimeout(Pt));
    var n = t - Mt;
    n > 24 ? (t < 1 / 0 && (Pt = setTimeout(Ke, t - Bt.now() - Sn)), Lt && (Lt = clearInterval(Lt))) : (Lt || (_n = Bt.now(), Lt = setInterval(Ss, Hr)), Ht = 1, Er(Ke));
  }
}
function je(t, n, e) {
  var r = new Mn();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var Cs = te("start", "end", "cancel", "interrupt"), Ds = [], Ir = 0, Zn = 1, Gn = 2, sn = 3, tr = 4, Jn = 5, cn = 6;
function kn(t, n, e, r, i, o) {
  var u = t.__transition;
  if (!u)
    t.__transition = {};
  else if (e in u)
    return;
  As(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Cs,
    tween: Ds,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Ir
  });
}
function de(t, n) {
  var e = ot(t, n);
  if (e.state > Ir)
    throw new Error("too late; already scheduled");
  return e;
}
function st(t, n) {
  var e = ot(t, n);
  if (e.state > sn)
    throw new Error("too late; already running");
  return e;
}
function ot(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function As(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Or(o, 0, e.time);
  function o(a) {
    e.state = Zn, e.timer.restart(u, e.delay, e.time), e.delay <= a && u(a - e.delay);
  }
  function u(a) {
    var f, h, l, d;
    if (e.state !== Zn)
      return c();
    for (f in r)
      if (d = r[f], d.name === e.name) {
        if (d.state === sn)
          return je(u);
        d.state === tr ? (d.state = cn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[f]) : +f < n && (d.state = cn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[f]);
      }
    if (je(function() {
      e.state === sn && (e.state = tr, e.timer.restart(s, e.delay, e.time), s(a));
    }), e.state = Gn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Gn) {
      for (e.state = sn, i = new Array(l = e.tween.length), f = 0, h = -1; f < l; ++f)
        (d = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function s(a) {
    for (var f = a < e.duration ? e.ease.call(null, a / e.duration) : (e.timer.restart(c), e.state = Jn, 1), h = -1, l = i.length; ++h < l; )
      i[h].call(t, f);
    e.state === Jn && (e.on.call("end", t, t.__data__, e.index, e.group), c());
  }
  function c() {
    e.state = cn, e.timer.stop(), delete r[n];
    for (var a in r)
      return;
    delete t.__transition;
  }
}
function Ns(t, n) {
  var e = t.__transition, r, i, o = !0, u;
  if (e) {
    n = n == null ? null : n + "";
    for (u in e) {
      if ((r = e[u]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Gn && r.state < Jn, r.state = cn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[u];
    }
    o && delete t.__transition;
  }
}
function Us(t) {
  return this.each(function() {
    Ns(this, t);
  });
}
function Fs(t, n) {
  var e, r;
  return function() {
    var i = st(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var u = 0, s = r.length; u < s; ++u)
        if (r[u].name === n) {
          r = r.slice(), r.splice(u, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Ys(t, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var o = st(this, t), u = o.tween;
    if (u !== r) {
      i = (r = u).slice();
      for (var s = { name: n, value: e }, c = 0, a = i.length; c < a; ++c)
        if (i[c].name === n) {
          i[c] = s;
          break;
        }
      c === a && i.push(s);
    }
    o.tween = i;
  };
}
function Hs(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = ot(this.node(), e).tween, i = 0, o = r.length, u; i < o; ++i)
      if ((u = r[i]).name === t)
        return u.value;
    return null;
  }
  return this.each((n == null ? Fs : Ys)(e, t, n));
}
function ge(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = st(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return ot(i, r).value[n];
  };
}
function Lr(t, n) {
  var e;
  return (typeof n == "number" ? et : n instanceof pt ? gn : (e = pt(n)) ? (n = e, gn) : wr)(t, n);
}
function Es(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Os(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Is(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var u = this.getAttribute(t);
    return u === i ? null : u === r ? o : o = n(r = u, e);
  };
}
function Ls(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var u = this.getAttributeNS(t.space, t.local);
    return u === i ? null : u === r ? o : o = n(r = u, e);
  };
}
function Rs(t, n, e) {
  var r, i, o;
  return function() {
    var u, s = e(this), c;
    return s == null ? void this.removeAttribute(t) : (u = this.getAttribute(t), c = s + "", u === c ? null : u === r && c === i ? o : (i = c, o = n(r = u, s)));
  };
}
function Ps(t, n, e) {
  var r, i, o;
  return function() {
    var u, s = e(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (u = this.getAttributeNS(t.space, t.local), c = s + "", u === c ? null : u === r && c === i ? o : (i = c, o = n(r = u, s)));
  };
}
function Ws(t, n) {
  var e = bn(t), r = e === "transform" ? Fu : Lr;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Ps : Rs)(e, r, ge(this, "attr." + t, n)) : n == null ? (e.local ? Os : Es)(e) : (e.local ? Ls : Is)(e, r, n));
}
function zs(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Vs(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function qs(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Vs(t, o)), e;
  }
  return i._value = n, i;
}
function Xs(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && zs(t, o)), e;
  }
  return i._value = n, i;
}
function Bs(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = bn(t);
  return this.tween(e, (r.local ? qs : Xs)(r, n));
}
function Zs(t, n) {
  return function() {
    de(this, t).delay = +n.apply(this, arguments);
  };
}
function Gs(t, n) {
  return n = +n, function() {
    de(this, t).delay = n;
  };
}
function Js(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Zs : Gs)(n, t)) : ot(this.node(), n).delay;
}
function Qs(t, n) {
  return function() {
    st(this, t).duration = +n.apply(this, arguments);
  };
}
function Ks(t, n) {
  return n = +n, function() {
    st(this, t).duration = n;
  };
}
function js(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Qs : Ks)(n, t)) : ot(this.node(), n).duration;
}
function tc(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    st(this, t).ease = n;
  };
}
function nc(t) {
  var n = this._id;
  return arguments.length ? this.each(tc(n, t)) : ot(this.node(), n).ease;
}
function ec(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    st(this, t).ease = e;
  };
}
function rc(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(ec(this._id, t));
}
function ic(t) {
  typeof t != "function" && (t = ur(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], u = o.length, s = r[i] = [], c, a = 0; a < u; ++a)
      (c = o[a]) && t.call(c, c.__data__, a, o) && s.push(c);
  return new at(r, this._parents, this._name, this._id);
}
function oc(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), s = 0; s < o; ++s)
    for (var c = n[s], a = e[s], f = c.length, h = u[s] = new Array(f), l, d = 0; d < f; ++d)
      (l = c[d] || a[d]) && (h[d] = l);
  for (; s < r; ++s)
    u[s] = n[s];
  return new at(u, this._parents, this._name, this._id);
}
function uc(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function ac(t, n, e) {
  var r, i, o = uc(n) ? de : st;
  return function() {
    var u = o(this, t), s = u.on;
    s !== r && (i = (r = s).copy()).on(n, e), u.on = i;
  };
}
function sc(t, n) {
  var e = this._id;
  return arguments.length < 2 ? ot(this.node(), e).on.on(t) : this.each(ac(e, t, n));
}
function cc(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function fc() {
  return this.on("end.remove", cc(this._id));
}
function lc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = ne(t));
  for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u)
    for (var s = r[u], c = s.length, a = o[u] = new Array(c), f, h, l = 0; l < c; ++l)
      (f = s[l]) && (h = t.call(f, f.__data__, l, s)) && ("__data__" in f && (h.__data__ = f.__data__), a[l] = h, kn(a[l], n, e, l, a, ot(f, e)));
  return new at(o, this._parents, n, e);
}
function hc(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = or(t));
  for (var r = this._groups, i = r.length, o = [], u = [], s = 0; s < i; ++s)
    for (var c = r[s], a = c.length, f, h = 0; h < a; ++h)
      if (f = c[h]) {
        for (var l = t.call(f, f.__data__, h, c), d, S = ot(f, e), k = 0, N = l.length; k < N; ++k)
          (d = l[k]) && kn(d, n, e, k, l, S);
        o.push(l), u.push(f);
      }
  return new at(o, u, n, e);
}
var dc = Gt.prototype.constructor;
function gc() {
  return new dc(this._groups, this._parents);
}
function mc(t, n) {
  var e, r, i;
  return function() {
    var o = Nt(this, t), u = (this.style.removeProperty(t), Nt(this, t));
    return o === u ? null : o === e && u === r ? i : i = n(e = o, r = u);
  };
}
function Rr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function pc(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var u = Nt(this, t);
    return u === i ? null : u === r ? o : o = n(r = u, e);
  };
}
function yc(t, n, e) {
  var r, i, o;
  return function() {
    var u = Nt(this, t), s = e(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), Nt(this, t))), u === c ? null : u === r && c === i ? o : (i = c, o = n(r = u, s));
  };
}
function wc(t, n) {
  var e, r, i, o = "style." + n, u = "end." + o, s;
  return function() {
    var c = st(this, t), a = c.on, f = c.value[o] == null ? s || (s = Rr(n)) : void 0;
    (a !== e || i !== f) && (r = (e = a).copy()).on(u, i = f), c.on = r;
  };
}
function vc(t, n, e) {
  var r = (t += "") == "transform" ? Uu : Lr;
  return n == null ? this.styleTween(t, mc(t, r)).on("end.style." + t, Rr(t)) : typeof n == "function" ? this.styleTween(t, yc(t, r, ge(this, "style." + t, n))).each(wc(this._id, t)) : this.styleTween(t, pc(t, r, n), e).on("end.style." + t, null);
}
function xc(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function _c(t, n, e) {
  var r, i;
  function o() {
    var u = n.apply(this, arguments);
    return u !== i && (r = (i = u) && xc(t, u, e)), r;
  }
  return o._value = n, o;
}
function Mc(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, _c(t, n, e ?? ""));
}
function bc(t) {
  return function() {
    this.textContent = t;
  };
}
function $c(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Tc(t) {
  return this.tween("text", typeof t == "function" ? $c(ge(this, "text", t)) : bc(t == null ? "" : t + ""));
}
function Sc(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function kc(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Sc(i)), n;
  }
  return r._value = t, r;
}
function Cc(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, kc(t));
}
function Dc() {
  for (var t = this._name, n = this._id, e = Pr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var u = r[o], s = u.length, c, a = 0; a < s; ++a)
      if (c = u[a]) {
        var f = ot(c, n);
        kn(c, t, e, a, u, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new at(r, this._parents, t, e);
}
function Ac() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, u) {
    var s = { value: u }, c = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var a = st(this, r), f = a.on;
      f !== t && (n = (t = f).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(c)), a.on = n;
    }), i === 0 && o();
  });
}
var Nc = 0;
function at(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Pr() {
  return ++Nc;
}
var ft = Gt.prototype;
at.prototype = {
  constructor: at,
  select: lc,
  selectAll: hc,
  selectChild: ft.selectChild,
  selectChildren: ft.selectChildren,
  filter: ic,
  merge: oc,
  selection: gc,
  transition: Dc,
  call: ft.call,
  nodes: ft.nodes,
  node: ft.node,
  size: ft.size,
  empty: ft.empty,
  each: ft.each,
  on: sc,
  attr: Ws,
  attrTween: Bs,
  style: vc,
  styleTween: Mc,
  text: Tc,
  textTween: Cc,
  remove: fc,
  tween: Hs,
  delay: Js,
  duration: js,
  ease: nc,
  easeVarying: rc,
  end: Ac,
  [Symbol.iterator]: ft[Symbol.iterator]
};
function Uc(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Fc = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Uc
};
function Yc(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Hc(t) {
  var n, e;
  t instanceof at ? (n = t._id, t = t._name) : (n = Pr(), (e = Fc).time = he(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var u = r[o], s = u.length, c, a = 0; a < s; ++a)
      (c = u[a]) && kn(c, t, n, a, u, e || Yc(c, n));
  return new at(r, this._parents, t, n);
}
Gt.prototype.interrupt = Us;
Gt.prototype.transition = Hc;
var Ec = [null];
function Oc(t, n) {
  var e = t.__transition, r, i;
  if (e) {
    n = n == null ? null : n + "";
    for (i in e)
      if ((r = e[i]).state > Zn && r.name === n)
        return new at([[t]], Ec, n, +i);
  }
  return null;
}
const Ic = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function Wr(t) {
  it("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(Ic);
  const n = it("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return n.show = function(e) {
    n.transition().duration(100).style("opacity", 0.95), n.html(t.apply(null, arguments)).style("left", e.pageX + "px").style("top", e.pageY - 28 + "px");
  }, n.hide = function(e) {
    n.transition().duration(100).style("opacity", 0);
  }, n;
}
function Lc(t) {
  return nr(t.nodes().map((n) => n.getComputedTextLength()));
}
function Rc(t) {
  return function(n) {
    return n.length > t ? n.slice(0, t - 1) + "…" : n;
  };
}
const St = 1, Pc = 2;
function zr(t, n) {
  let e = ["#FFF", "#EEE"], r = 5, i, o = "#AAA", u = 40, s = 100, c;
  function a(f) {
    let h = n.domain(), l = Wr((M) => M), d = Xt(e), S = Xt(e.reverse()), k = Rc(u), N = f.selectAll(".row").data(h, n).order(), O = N.enter().append("g").attr("class", "row"), R = N.exit(), U = N.select("text");
    N = N.merge(O).attr("transform", (M) => "translate(0," + n(M) + ")"), R.remove(), O.append("rect").attr("y", 0.5).attr("width", s).attr("height", n.bandwidth()).attr("stroke", o).attr("stroke-width", 0.75).attr("fill", d), O.append("path").attr("stroke", S), U = U.merge(
      O.append("text").attr("y", n.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(M, g) {
        it(this).text() != g && l.show(g);
      }).on("mouseout", l.hide)
    ).text(k), c === void 0 && (c = Lc(U) + 2 * r, c = t === St ? s - c : c), i = t === St ? [0, c] : [c, s], U.attr("text-anchor", t === St ? "start" : "end").attr("dx", t === St ? r : -r).attr("x", c);
    const w = function(M, g) {
      c = Math.max(10, Math.min(s - 10, c + M.dx)), it(this).attr("d", "M" + c + ",0.5V" + n.range()[1]), U.attr("x", c), i = t === St ? [0, c] : [c, s], f.dispatch("offset", { detail: { offset: c } });
    };
    f.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", o).attr("stroke-width", 1.75).attr("d", "M" + (c + 0.5) + ",0.5V" + n.range()[1]).style("cursor", "ew-resize").call(wu().on("drag", w));
  }
  return a.draw_ticks = function(f, h) {
    f.selectAll(".row").select("path").attr("d", h.map((l) => "M" + l + ",1v" + (n.bandwidth() - 1)).join(""));
  }, a.scale = function(f) {
    return arguments.length ? (n = f, a) : n;
  }, a.width = function(f) {
    return arguments.length ? (s = f, a) : s;
  }, a.colors = function(f) {
    return arguments.length ? (e = f, a) : e;
  }, a.padding = function(f) {
    return arguments.length ? (r = f, a) : r;
  }, a.range = function(f) {
    return arguments.length ? (i = f, a) : i;
  }, a.trim = function(f) {
    return arguments.length ? (u = f, a) : u;
  }, a.offset = function(f) {
    return arguments.length ? (c = f, a) : c;
  }, a;
}
function Wc(t) {
  return zr(Pc, t);
}
function zc(t) {
  return zr(St, t);
}
var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pe(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Vr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(me, function() {
    var e = 1e3, r = 6e4, i = 36e5, o = "millisecond", u = "second", s = "minute", c = "hour", a = "day", f = "week", h = "month", l = "quarter", d = "year", S = "date", k = "Invalid Date", N = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, R = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function($) {
      var b = ["th", "st", "nd", "rd"], x = $ % 100;
      return "[" + $ + (b[(x - 20) % 10] || b[x] || b[0]) + "]";
    } }, U = function($, b, x) {
      var T = String($);
      return !T || T.length >= b ? $ : "" + Array(b + 1 - T.length).join(x) + $;
    }, w = { s: U, z: function($) {
      var b = -$.utcOffset(), x = Math.abs(b), T = Math.floor(x / 60), _ = x % 60;
      return (b <= 0 ? "+" : "-") + U(T, 2, "0") + ":" + U(_, 2, "0");
    }, m: function $(b, x) {
      if (b.date() < x.date())
        return -$(x, b);
      var T = 12 * (x.year() - b.year()) + (x.month() - b.month()), _ = b.clone().add(T, h), C = x - _ < 0, E = b.clone().add(T + (C ? -1 : 1), h);
      return +(-(T + (x - _) / (C ? _ - E : E - _)) || 0);
    }, a: function($) {
      return $ < 0 ? Math.ceil($) || 0 : Math.floor($);
    }, p: function($) {
      return { M: h, y: d, w: f, d: a, D: S, h: c, m: s, s: u, ms: o, Q: l }[$] || String($ || "").toLowerCase().replace(/s$/, "");
    }, u: function($) {
      return $ === void 0;
    } }, M = "en", g = {};
    g[M] = R;
    var p = "$isDayjsObject", m = function($) {
      return $ instanceof I || !(!$ || !$[p]);
    }, F = function $(b, x, T) {
      var _;
      if (!b)
        return M;
      if (typeof b == "string") {
        var C = b.toLowerCase();
        g[C] && (_ = C), x && (g[C] = x, _ = C);
        var E = b.split("-");
        if (!_ && E.length > 1)
          return $(E[0]);
      } else {
        var W = b.name;
        g[W] = b, _ = W;
      }
      return !T && _ && (M = _), _ || !T && M;
    }, A = function($, b) {
      if (m($))
        return $.clone();
      var x = typeof b == "object" ? b : {};
      return x.date = $, x.args = arguments, new I(x);
    }, y = w;
    y.l = F, y.i = m, y.w = function($, b) {
      return A($, { locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset });
    };
    var I = function() {
      function $(x) {
        this.$L = F(x.locale, null, !0), this.parse(x), this.$x = this.$x || x.x || {}, this[p] = !0;
      }
      var b = $.prototype;
      return b.parse = function(x) {
        this.$d = function(T) {
          var _ = T.date, C = T.utc;
          if (_ === null)
            return /* @__PURE__ */ new Date(NaN);
          if (y.u(_))
            return /* @__PURE__ */ new Date();
          if (_ instanceof Date)
            return new Date(_);
          if (typeof _ == "string" && !/Z$/i.test(_)) {
            var E = _.match(N);
            if (E) {
              var W = E[2] - 1 || 0, V = (E[7] || "0").substring(0, 3);
              return C ? new Date(Date.UTC(E[1], W, E[3] || 1, E[4] || 0, E[5] || 0, E[6] || 0, V)) : new Date(E[1], W, E[3] || 1, E[4] || 0, E[5] || 0, E[6] || 0, V);
            }
          }
          return new Date(_);
        }(x), this.init();
      }, b.init = function() {
        var x = this.$d;
        this.$y = x.getFullYear(), this.$M = x.getMonth(), this.$D = x.getDate(), this.$W = x.getDay(), this.$H = x.getHours(), this.$m = x.getMinutes(), this.$s = x.getSeconds(), this.$ms = x.getMilliseconds();
      }, b.$utils = function() {
        return y;
      }, b.isValid = function() {
        return this.$d.toString() !== k;
      }, b.isSame = function(x, T) {
        var _ = A(x);
        return this.startOf(T) <= _ && _ <= this.endOf(T);
      }, b.isAfter = function(x, T) {
        return A(x) < this.startOf(T);
      }, b.isBefore = function(x, T) {
        return this.endOf(T) < A(x);
      }, b.$g = function(x, T, _) {
        return y.u(x) ? this[T] : this.set(_, x);
      }, b.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, b.valueOf = function() {
        return this.$d.getTime();
      }, b.startOf = function(x, T) {
        var _ = this, C = !!y.u(T) || T, E = y.p(x), W = function(D, Y) {
          var L = y.w(_.$u ? Date.UTC(_.$y, Y, D) : new Date(_.$y, Y, D), _);
          return C ? L : L.endOf(a);
        }, V = function(D, Y) {
          return y.w(_.toDate()[D].apply(_.toDate("s"), (C ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Y)), _);
        }, q = this.$W, Z = this.$M, J = this.$D, mt = "set" + (this.$u ? "UTC" : "");
        switch (E) {
          case d:
            return C ? W(1, 0) : W(31, 11);
          case h:
            return C ? W(1, Z) : W(0, Z + 1);
          case f:
            var ct = this.$locale().weekStart || 0, yt = (q < ct ? q + 7 : q) - ct;
            return W(C ? J - yt : J + (6 - yt), Z);
          case a:
          case S:
            return V(mt + "Hours", 0);
          case c:
            return V(mt + "Minutes", 1);
          case s:
            return V(mt + "Seconds", 2);
          case u:
            return V(mt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, b.endOf = function(x) {
        return this.startOf(x, !1);
      }, b.$set = function(x, T) {
        var _, C = y.p(x), E = "set" + (this.$u ? "UTC" : ""), W = (_ = {}, _[a] = E + "Date", _[S] = E + "Date", _[h] = E + "Month", _[d] = E + "FullYear", _[c] = E + "Hours", _[s] = E + "Minutes", _[u] = E + "Seconds", _[o] = E + "Milliseconds", _)[C], V = C === a ? this.$D + (T - this.$W) : T;
        if (C === h || C === d) {
          var q = this.clone().set(S, 1);
          q.$d[W](V), q.init(), this.$d = q.set(S, Math.min(this.$D, q.daysInMonth())).$d;
        } else
          W && this.$d[W](V);
        return this.init(), this;
      }, b.set = function(x, T) {
        return this.clone().$set(x, T);
      }, b.get = function(x) {
        return this[y.p(x)]();
      }, b.add = function(x, T) {
        var _, C = this;
        x = Number(x);
        var E = y.p(T), W = function(Z) {
          var J = A(C);
          return y.w(J.date(J.date() + Math.round(Z * x)), C);
        };
        if (E === h)
          return this.set(h, this.$M + x);
        if (E === d)
          return this.set(d, this.$y + x);
        if (E === a)
          return W(1);
        if (E === f)
          return W(7);
        var V = (_ = {}, _[s] = r, _[c] = i, _[u] = e, _)[E] || 1, q = this.$d.getTime() + x * V;
        return y.w(q, this);
      }, b.subtract = function(x, T) {
        return this.add(-1 * x, T);
      }, b.format = function(x) {
        var T = this, _ = this.$locale();
        if (!this.isValid())
          return _.invalidDate || k;
        var C = x || "YYYY-MM-DDTHH:mm:ssZ", E = y.z(this), W = this.$H, V = this.$m, q = this.$M, Z = _.weekdays, J = _.months, mt = _.meridiem, ct = function(Y, L, v, X) {
          return Y && (Y[L] || Y(T, C)) || v[L].slice(0, X);
        }, yt = function(Y) {
          return y.s(W % 12 || 12, Y, "0");
        }, D = mt || function(Y, L, v) {
          var X = Y < 12 ? "AM" : "PM";
          return v ? X.toLowerCase() : X;
        };
        return C.replace(O, function(Y, L) {
          return L || function(v) {
            switch (v) {
              case "YY":
                return String(T.$y).slice(-2);
              case "YYYY":
                return y.s(T.$y, 4, "0");
              case "M":
                return q + 1;
              case "MM":
                return y.s(q + 1, 2, "0");
              case "MMM":
                return ct(_.monthsShort, q, J, 3);
              case "MMMM":
                return ct(J, q);
              case "D":
                return T.$D;
              case "DD":
                return y.s(T.$D, 2, "0");
              case "d":
                return String(T.$W);
              case "dd":
                return ct(_.weekdaysMin, T.$W, Z, 2);
              case "ddd":
                return ct(_.weekdaysShort, T.$W, Z, 3);
              case "dddd":
                return Z[T.$W];
              case "H":
                return String(W);
              case "HH":
                return y.s(W, 2, "0");
              case "h":
                return yt(1);
              case "hh":
                return yt(2);
              case "a":
                return D(W, V, !0);
              case "A":
                return D(W, V, !1);
              case "m":
                return String(V);
              case "mm":
                return y.s(V, 2, "0");
              case "s":
                return String(T.$s);
              case "ss":
                return y.s(T.$s, 2, "0");
              case "SSS":
                return y.s(T.$ms, 3, "0");
              case "Z":
                return E;
            }
            return null;
          }(Y) || E.replace(":", "");
        });
      }, b.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, b.diff = function(x, T, _) {
        var C, E = this, W = y.p(T), V = A(x), q = (V.utcOffset() - this.utcOffset()) * r, Z = this - V, J = function() {
          return y.m(E, V);
        };
        switch (W) {
          case d:
            C = J() / 12;
            break;
          case h:
            C = J();
            break;
          case l:
            C = J() / 3;
            break;
          case f:
            C = (Z - q) / 6048e5;
            break;
          case a:
            C = (Z - q) / 864e5;
            break;
          case c:
            C = Z / i;
            break;
          case s:
            C = Z / r;
            break;
          case u:
            C = Z / e;
            break;
          default:
            C = Z;
        }
        return _ ? C : y.a(C);
      }, b.daysInMonth = function() {
        return this.endOf(h).$D;
      }, b.$locale = function() {
        return g[this.$L];
      }, b.locale = function(x, T) {
        if (!x)
          return this.$L;
        var _ = this.clone(), C = F(x, T, !0);
        return C && (_.$L = C), _;
      }, b.clone = function() {
        return y.w(this.$d, this);
      }, b.toDate = function() {
        return new Date(this.valueOf());
      }, b.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, b.toISOString = function() {
        return this.$d.toISOString();
      }, b.toString = function() {
        return this.$d.toUTCString();
      }, $;
    }(), H = I.prototype;
    return A.prototype = H, [["$ms", o], ["$s", u], ["$m", s], ["$H", c], ["$W", a], ["$M", h], ["$y", d], ["$D", S]].forEach(function($) {
      H[$[1]] = function(b) {
        return this.$g(b, $[0], $[1]);
      };
    }), A.extend = function($, b) {
      return $.$i || ($(b, I, A), $.$i = !0), A;
    }, A.locale = F, A.isDayjs = m, A.unix = function($) {
      return A(1e3 * $);
    }, A.en = g[M], A.Ls = g, A.p = {}, A;
  });
})(Vr);
var Vc = Vr.exports;
const ye = /* @__PURE__ */ pe(Vc);
var qr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(me, function() {
    var e, r, i = 1e3, o = 6e4, u = 36e5, s = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, f = 2628e6, h = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, l = { years: a, months: f, days: s, hours: u, minutes: o, seconds: i, milliseconds: 1, weeks: 6048e5 }, d = function(g) {
      return g instanceof w;
    }, S = function(g, p, m) {
      return new w(g, m, p.$l);
    }, k = function(g) {
      return r.p(g) + "s";
    }, N = function(g) {
      return g < 0;
    }, O = function(g) {
      return N(g) ? Math.ceil(g) : Math.floor(g);
    }, R = function(g) {
      return Math.abs(g);
    }, U = function(g, p) {
      return g ? N(g) ? { negative: !0, format: "" + R(g) + p } : { negative: !1, format: "" + g + p } : { negative: !1, format: "" };
    }, w = function() {
      function g(m, F, A) {
        var y = this;
        if (this.$d = {}, this.$l = A, m === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), F)
          return S(m * l[k(F)], this);
        if (typeof m == "number")
          return this.$ms = m, this.parseFromMilliseconds(), this;
        if (typeof m == "object")
          return Object.keys(m).forEach(function($) {
            y.$d[k($)] = m[$];
          }), this.calMilliseconds(), this;
        if (typeof m == "string") {
          var I = m.match(h);
          if (I) {
            var H = I.slice(2).map(function($) {
              return $ != null ? Number($) : 0;
            });
            return this.$d.years = H[0], this.$d.months = H[1], this.$d.weeks = H[2], this.$d.days = H[3], this.$d.hours = H[4], this.$d.minutes = H[5], this.$d.seconds = H[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var p = g.prototype;
      return p.calMilliseconds = function() {
        var m = this;
        this.$ms = Object.keys(this.$d).reduce(function(F, A) {
          return F + (m.$d[A] || 0) * l[A];
        }, 0);
      }, p.parseFromMilliseconds = function() {
        var m = this.$ms;
        this.$d.years = O(m / a), m %= a, this.$d.months = O(m / f), m %= f, this.$d.days = O(m / s), m %= s, this.$d.hours = O(m / u), m %= u, this.$d.minutes = O(m / o), m %= o, this.$d.seconds = O(m / i), m %= i, this.$d.milliseconds = m;
      }, p.toISOString = function() {
        var m = U(this.$d.years, "Y"), F = U(this.$d.months, "M"), A = +this.$d.days || 0;
        this.$d.weeks && (A += 7 * this.$d.weeks);
        var y = U(A, "D"), I = U(this.$d.hours, "H"), H = U(this.$d.minutes, "M"), $ = this.$d.seconds || 0;
        this.$d.milliseconds && ($ += this.$d.milliseconds / 1e3, $ = Math.round(1e3 * $) / 1e3);
        var b = U($, "S"), x = m.negative || F.negative || y.negative || I.negative || H.negative || b.negative, T = I.format || H.format || b.format ? "T" : "", _ = (x ? "-" : "") + "P" + m.format + F.format + y.format + T + I.format + H.format + b.format;
        return _ === "P" || _ === "-P" ? "P0D" : _;
      }, p.toJSON = function() {
        return this.toISOString();
      }, p.format = function(m) {
        var F = m || "YYYY-MM-DDTHH:mm:ss", A = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return F.replace(c, function(y, I) {
          return I || String(A[y]);
        });
      }, p.as = function(m) {
        return this.$ms / l[k(m)];
      }, p.get = function(m) {
        var F = this.$ms, A = k(m);
        return A === "milliseconds" ? F %= 1e3 : F = A === "weeks" ? O(F / l[A]) : this.$d[A], F || 0;
      }, p.add = function(m, F, A) {
        var y;
        return y = F ? m * l[k(F)] : d(m) ? m.$ms : S(m, this).$ms, S(this.$ms + y * (A ? -1 : 1), this);
      }, p.subtract = function(m, F) {
        return this.add(m, F, !0);
      }, p.locale = function(m) {
        var F = this.clone();
        return F.$l = m, F;
      }, p.clone = function() {
        return S(this.$ms, this);
      }, p.humanize = function(m) {
        return e().add(this.$ms, "ms").locale(this.$l).fromNow(!m);
      }, p.valueOf = function() {
        return this.asMilliseconds();
      }, p.milliseconds = function() {
        return this.get("milliseconds");
      }, p.asMilliseconds = function() {
        return this.as("milliseconds");
      }, p.seconds = function() {
        return this.get("seconds");
      }, p.asSeconds = function() {
        return this.as("seconds");
      }, p.minutes = function() {
        return this.get("minutes");
      }, p.asMinutes = function() {
        return this.as("minutes");
      }, p.hours = function() {
        return this.get("hours");
      }, p.asHours = function() {
        return this.as("hours");
      }, p.days = function() {
        return this.get("days");
      }, p.asDays = function() {
        return this.as("days");
      }, p.weeks = function() {
        return this.get("weeks");
      }, p.asWeeks = function() {
        return this.as("weeks");
      }, p.months = function() {
        return this.get("months");
      }, p.asMonths = function() {
        return this.as("months");
      }, p.years = function() {
        return this.get("years");
      }, p.asYears = function() {
        return this.as("years");
      }, g;
    }(), M = function(g, p, m) {
      return g.add(p.years() * m, "y").add(p.months() * m, "M").add(p.days() * m, "d").add(p.hours() * m, "h").add(p.minutes() * m, "m").add(p.seconds() * m, "s").add(p.milliseconds() * m, "ms");
    };
    return function(g, p, m) {
      e = m, r = m().$utils(), m.duration = function(y, I) {
        var H = m.locale();
        return S(y, { $l: H }, I);
      }, m.isDuration = d;
      var F = p.prototype.add, A = p.prototype.subtract;
      p.prototype.add = function(y, I) {
        return d(y) ? M(this, y, 1) : F.bind(this)(y, I);
      }, p.prototype.subtract = function(y, I) {
        return d(y) ? M(this, y, -1) : A.bind(this)(y, I);
      };
    };
  });
})(qr);
var qc = qr.exports;
const Xc = /* @__PURE__ */ pe(qc);
var Xr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(me, function() {
    return function(e, r, i) {
      e = e || {};
      var o = r.prototype, u = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function s(a, f, h, l) {
        return o.fromToBase(a, f, h, l);
      }
      i.en.relativeTime = u, o.fromToBase = function(a, f, h, l, d) {
        for (var S, k, N, O = h.$locale().relativeTime || u, R = e.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], U = R.length, w = 0; w < U; w += 1) {
          var M = R[w];
          M.d && (S = l ? i(a).diff(h, M.d, !0) : h.diff(a, M.d, !0));
          var g = (e.rounding || Math.round)(Math.abs(S));
          if (N = S > 0, g <= M.r || !M.r) {
            g <= 1 && w > 0 && (M = R[w - 1]);
            var p = O[M.l];
            d && (g = d("" + g)), k = typeof p == "string" ? p.replace("%d", g) : p(g, f, M.l, N);
            break;
          }
        }
        if (f)
          return k;
        var m = N ? O.future : O.past;
        return typeof m == "function" ? m(k) : m.replace("%s", k);
      }, o.to = function(a, f) {
        return s(a, f, this, !0);
      }, o.from = function(a, f) {
        return s(a, f, this);
      };
      var c = function(a) {
        return a.$u ? i.utc() : i();
      };
      o.toNow = function(a) {
        return this.to(c(this), a);
      }, o.fromNow = function(a) {
        return this.from(c(this), a);
      };
    };
  });
})(Xr);
var Bc = Xr.exports;
const Zc = /* @__PURE__ */ pe(Bc);
ye.extend(Xc);
ye.extend(Zc);
function Gc(t, n) {
  return ye.duration(n - t).humanize();
}
function On() {
  const t = Array.prototype.slice.call(arguments, 0);
  return function(n) {
    return t.reduce((e, r) => r(e), n);
  };
}
function en(t) {
  return function(n) {
    return t === void 0 ? n : n[t];
  };
}
const Jc = [
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
function Qc(t) {
  const n = window.getComputedStyle(t, null).getPropertyValue("font-size");
  return parseFloat(n);
}
function Kc(t) {
  return t.r * 0.299 + t.g * 0.587 + t.b * 0.114;
}
function jc(t) {
  return Kc(t) > 165;
}
function tf(t) {
  return jc(pt(t)) ? "black" : "white";
}
function rn(t, n) {
  return "translate(" + t + "," + n + ")";
}
function rf() {
  let t = Jc, n = 5, e = !1, r = !1, i, o, u = 0, s = en(0), c = en(1), a = en(2), f = en(3);
  function h(k) {
    k.each(function(N, O) {
      const R = it(this.parentNode), U = R.select("text"), w = R.select("rect"), M = w.attr("width") - 2 * n, g = c(N);
      U.text(g);
      let p = U.node().getComputedTextLength();
      if (p > M) {
        const m = M < 0 ? 0 : M / p, F = Math.floor(g.length * m);
        U.text(F > 2 ? g.slice(0, F - 2) + "…" : "");
      }
    });
  }
  function l(k, N) {
    Oc(this).tween("text", function() {
      return function(O) {
        h(it(this));
      };
    });
  }
  function d(k) {
    const N = k.datum(), O = new Set(si(N, s)), R = new Wr(S), U = Xt(t);
    i = i || [ui(N, a), nr(N, f)], r && (i = Kr(i.concat(/* @__PURE__ */ new Date()))), k.each(function(w) {
      const M = o || this.getBoundingClientRect().width, g = O.size * (Qc(this) + 4 * n), p = pr().domain(O).range([0, g]), m = bs().domain(i), F = (e ? zc : Wc)(p).width(M), A = it(this).selectAll("svg").data([1]).join("svg");
      A.attr("class", "timeline").attr("width", M).attr("height", g + 20);
      const y = A.append("g"), I = y.append("g").attr("class", "y axis").call(F);
      let H = F.range();
      m.range([H[0] + n, H[1] - n]).clamp(!0);
      const $ = mi(m), b = y.append("g").attr("class", "x axis").attr("transform", rn(0, g)).call($);
      I.on("offset", () => {
        H = F.range(), m.range([H[0] + n, H[1] - n]).clamp(!0), $.ticks(Math.min((H[1] - H[0]) / 70, 10)), b.call($), T.attr("transform", (C) => rn(m(a(C)), p(s(C)))).selectAll("rect").attr("width", (C) => m(f(C)) - m(a(C))).call(h), I.call(F.draw_ticks, m.ticks().map(m));
      }), b.select(".domain").remove(), b.selectAll(".tick line").attr("stroke", "#AAA");
      const x = m.ticks().map(m);
      I.call(F.draw_ticks, x);
      let T = y.selectAll("g.task").data(w);
      T.exit().remove();
      const _ = T.enter().append("g").classed("task", !0);
      _.append("rect").attr("y", n).attr("height", p.bandwidth() - 2 * n).on("mouseover", R.show).on("mouseout", R.hide).style("fill", On(c, U)), _.append("text").attr("text-anchor", "start").attr("fill", On(c, U, tf)).attr("pointer-events", "none").attr("dx", n).attr("y", p.bandwidth() / 2).attr("dy", "0.32em").text(c), T = T.merge(_), T.attr("transform", (C) => rn(H[0], p(s(C)))).selectAll("rect").attr("width", 0), T.transition().duration(u).attr("transform", (C) => rn(m(a(C)), p(s(C)))).selectAll("rect").attr("width", (C) => m(f(C)) - m(a(C))).on("start", l), r && y.append("path").attr("stroke", "red").attr("d", "M" + m(/* @__PURE__ */ new Date()) + ",0.5V" + g);
    });
  }
  return d.dates = function(k) {
    return arguments.length ? (i = k, d) : i;
  }, d.width = function(k) {
    return arguments.length ? (o = k, d) : o;
  }, d.today = function(k) {
    return arguments.length ? (r = k, d) : r;
  }, d.colors = function(k) {
    return arguments.length ? (t = k, d) : t;
  }, d.padding = function(k) {
    return arguments.length ? (n = k, d) : n;
  }, d.reversed = function(k) {
    return arguments.length ? (e = k, d) : e;
  }, d.duration = function(k) {
    return arguments.length ? (u = k, d) : u;
  }, d;
  function S(k, N) {
    const O = On(xs, le("%Y-%m-%d"));
    return "<b>" + c(N) + '</b><hr style="margin: 2px 0 2px 0">' + O(a(N)) + " - " + O(f(N)) + "<br>" + Gc(a(N), f(N));
  }
}
export {
  Oc as active,
  mi as axisBottom,
  ef as axisLeft,
  nf as axisRight,
  pt as color,
  wu as drag,
  Gc as durationFormat,
  Kr as extent,
  xs as isoParse,
  si as map,
  nr as max,
  ui as min,
  pr as scaleBand,
  ju as scaleLinear,
  Xt as scaleOrdinal,
  bs as scaleTime,
  it as select,
  le as timeFormat,
  rf as timeline,
  Wc as timelineAxisLeft,
  zc as timelineAxisRight,
  Wr as tooltip
};
