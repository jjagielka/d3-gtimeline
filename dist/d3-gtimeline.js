function en(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ur(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Vn(t) {
  let n, e, r;
  t.length !== 2 ? (n = en, e = (s, c) => en(t(s), c), r = (s, c) => t(s) - c) : (n = t === en || t === Ur ? t : Fr, e = t, r = t);
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
function Fr() {
  return 0;
}
function Yr(t) {
  return t === null ? NaN : +t;
}
const Hr = Vn(en), Or = Hr.right;
Vn(Yr).center;
class fe extends Map {
  constructor(n, e = Lr) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: e } }), n != null)
      for (const [r, i] of n)
        this.set(r, i);
  }
  get(n) {
    return super.get(le(this, n));
  }
  has(n) {
    return super.has(le(this, n));
  }
  set(n, e) {
    return super.set(Er(this, n), e);
  }
  delete(n) {
    return super.delete(Ir(this, n));
  }
}
function le({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : e;
}
function Er({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) ? t.get(r) : (t.set(r, e), e);
}
function Ir({ _intern: t, _key: n }, e) {
  const r = n(e);
  return t.has(r) && (e = t.get(r), t.delete(r)), e;
}
function Lr(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const Rr = Math.sqrt(50), Wr = Math.sqrt(10), Pr = Math.sqrt(2);
function qe(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), u = o >= Rr ? 10 : o >= Wr ? 5 : o >= Pr ? 2 : 1;
  let s, c, a;
  return i < 0 ? (a = Math.pow(10, -i) / u, s = Math.round(t * a), c = Math.round(n * a), s / a < t && ++s, c / a > n && --c, a = -a) : (a = Math.pow(10, i) * u, s = Math.round(t / a), c = Math.round(n / a), s * a < t && ++s, c * a > n && --c), c < s && 0.5 <= e && e < 2 ? qe(t, n, e * 2) : [s, c, a];
}
function he(t, n, e) {
  return n = +n, t = +t, e = +e, qe(t, n, e)[2];
}
function de(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? he(n, t, e) : he(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function ze(t, n) {
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
function Vr(t, n) {
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
function qr(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function zr(t, n) {
  if (typeof t[Symbol.iterator] != "function")
    throw new TypeError("values is not iterable");
  if (typeof n != "function")
    throw new TypeError("mapper is not a function");
  return Array.from(t, (e, r) => n(e, r, t));
}
function Xr(t) {
  return t;
}
var _n = 1, Mn = 2, Un = 3, Gt = 4, ge = 1e-6;
function Br(t) {
  return "translate(" + t + ",0)";
}
function Zr(t) {
  return "translate(0," + t + ")";
}
function Gr(t) {
  return (n) => +t(n);
}
function Jr(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function Qr() {
  return !this.__axis;
}
function Kr(t, n) {
  var e = [], r = null, i = null, o = 6, u = 6, s = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, a = t === _n || t === Gt ? -1 : 1, f = t === Gt || t === Mn ? "x" : "y", h = t === _n || t === Un ? Br : Zr;
  function l(d) {
    var C = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), k = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : Xr), F = Math.max(o, 0) + s, E = n.range(), R = +E[0] + c, Y = +E[E.length - 1] + c, y = (n.bandwidth ? Jr : Gr)(n.copy(), c), T = d.selection ? d.selection() : d, g = T.selectAll(".domain").data([null]), p = T.selectAll(".tick").data(C, n).order(), m = p.exit(), N = p.enter().append("g").attr("class", "tick"), A = p.select("line"), M = p.select("text");
    g = g.merge(g.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), p = p.merge(N), A = A.merge(N.append("line").attr("stroke", "currentColor").attr(f + "2", a * o)), M = M.merge(N.append("text").attr("fill", "currentColor").attr(f, a * F).attr("dy", t === _n ? "0em" : t === Un ? "0.71em" : "0.32em")), d !== T && (g = g.transition(d), p = p.transition(d), A = A.transition(d), M = M.transition(d), m = m.transition(d).attr("opacity", ge).attr("transform", function(I) {
      return isFinite(I = y(I)) ? h(I + c) : this.getAttribute("transform");
    }), N.attr("opacity", ge).attr("transform", function(I) {
      var L = this.parentNode.__axis;
      return h((L && isFinite(L = L(I)) ? L : y(I)) + c);
    })), m.remove(), g.attr("d", t === Gt || t === Mn ? u ? "M" + a * u + "," + R + "H" + c + "V" + Y + "H" + a * u : "M" + c + "," + R + "V" + Y : u ? "M" + R + "," + a * u + "V" + c + "H" + Y + "V" + a * u : "M" + R + "," + c + "H" + Y), p.attr("opacity", 1).attr("transform", function(I) {
      return h(y(I) + c);
    }), A.attr(f + "2", a * o), M.attr(f, a * F).text(k), T.filter(Qr).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Mn ? "start" : t === Gt ? "end" : "middle"), T.each(function() {
      this.__axis = y;
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
function jr(t) {
  return Kr(Un, t);
}
function qn(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Xe(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n)
    e[r] = n[r];
  return e;
}
function Xt() {
}
var Wt = 0.7, an = 1 / Wt, Dt = "\\s*([+-]?\\d+)\\s*", Pt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ot = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ti = /^#([0-9a-f]{3,8})$/, ni = new RegExp(`^rgb\\(${Dt},${Dt},${Dt}\\)$`), ei = new RegExp(`^rgb\\(${ot},${ot},${ot}\\)$`), ri = new RegExp(`^rgba\\(${Dt},${Dt},${Dt},${Pt}\\)$`), ii = new RegExp(`^rgba\\(${ot},${ot},${ot},${Pt}\\)$`), oi = new RegExp(`^hsl\\(${Pt},${ot},${ot}\\)$`), ui = new RegExp(`^hsla\\(${Pt},${ot},${ot},${Pt}\\)$`), me = {
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
qn(Xt, pt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: pe,
  // Deprecated! Use color.formatHex.
  formatHex: pe,
  formatHex8: ai,
  formatHsl: si,
  formatRgb: ye,
  toString: ye
});
function pe() {
  return this.rgb().formatHex();
}
function ai() {
  return this.rgb().formatHex8();
}
function si() {
  return Be(this).formatHsl();
}
function ye() {
  return this.rgb().formatRgb();
}
function pt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = ti.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? we(n) : e === 3 ? new Q(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? Jt(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? Jt(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = ni.exec(t)) ? new Q(n[1], n[2], n[3], 1) : (n = ei.exec(t)) ? new Q(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = ri.exec(t)) ? Jt(n[1], n[2], n[3], n[4]) : (n = ii.exec(t)) ? Jt(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = oi.exec(t)) ? _e(n[1], n[2] / 100, n[3] / 100, 1) : (n = ui.exec(t)) ? _e(n[1], n[2] / 100, n[3] / 100, n[4]) : me.hasOwnProperty(t) ? we(me[t]) : t === "transparent" ? new Q(NaN, NaN, NaN, 0) : null;
}
function we(t) {
  return new Q(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Jt(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new Q(t, n, e, r);
}
function ci(t) {
  return t instanceof Xt || (t = pt(t)), t ? (t = t.rgb(), new Q(t.r, t.g, t.b, t.opacity)) : new Q();
}
function Fn(t, n, e, r) {
  return arguments.length === 1 ? ci(t) : new Q(t, n, e, r ?? 1);
}
function Q(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
qn(Q, Fn, Xe(Xt, {
  brighter(t) {
    return t = t == null ? an : Math.pow(an, t), new Q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Wt : Math.pow(Wt, t), new Q(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Q(xt(this.r), xt(this.g), xt(this.b), sn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ve,
  // Deprecated! Use color.formatHex.
  formatHex: ve,
  formatHex8: fi,
  formatRgb: xe,
  toString: xe
}));
function ve() {
  return `#${vt(this.r)}${vt(this.g)}${vt(this.b)}`;
}
function fi() {
  return `#${vt(this.r)}${vt(this.g)}${vt(this.b)}${vt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function xe() {
  const t = sn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${xt(this.r)}, ${xt(this.g)}, ${xt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function sn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function xt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function vt(t) {
  return t = xt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function _e(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new rt(t, n, e, r);
}
function Be(t) {
  if (t instanceof rt)
    return new rt(t.h, t.s, t.l, t.opacity);
  if (t instanceof Xt || (t = pt(t)), !t)
    return new rt();
  if (t instanceof rt)
    return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), u = NaN, s = o - i, c = (o + i) / 2;
  return s ? (n === o ? u = (e - r) / s + (e < r) * 6 : e === o ? u = (r - n) / s + 2 : u = (n - e) / s + 4, s /= c < 0.5 ? o + i : 2 - o - i, u *= 60) : s = c > 0 && c < 1 ? 0 : u, new rt(u, s, c, t.opacity);
}
function li(t, n, e, r) {
  return arguments.length === 1 ? Be(t) : new rt(t, n, e, r ?? 1);
}
function rt(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
qn(rt, li, Xe(Xt, {
  brighter(t) {
    return t = t == null ? an : Math.pow(an, t), new rt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Wt : Math.pow(Wt, t), new rt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new Q(
      bn(t >= 240 ? t - 240 : t + 120, i, r),
      bn(t, i, r),
      bn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new rt(Me(this.h), Qt(this.s), Qt(this.l), sn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = sn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Me(this.h)}, ${Qt(this.s) * 100}%, ${Qt(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Me(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Qt(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function bn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
function zn(t, n) {
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
const be = Symbol("implicit");
function Vt() {
  var t = new fe(), n = [], e = [], r = be;
  function i(o) {
    let u = t.get(o);
    if (u === void 0) {
      if (r !== be)
        return r;
      t.set(o, u = n.push(o) - 1);
    }
    return e[u % e.length];
  }
  return i.domain = function(o) {
    if (!arguments.length)
      return n.slice();
    n = [], t = new fe();
    for (const u of o)
      t.has(u) || t.set(u, n.push(u) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (e = Array.from(o), i) : e.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return Vt(n, e).unknown(r);
  }, zn.apply(i, arguments), i;
}
function Ze() {
  var t = Vt().unknown(void 0), n = t.domain, e = t.range, r = 0, i = 1, o, u, s = !1, c = 0, a = 0, f = 0.5;
  delete t.unknown;
  function h() {
    var l = n().length, d = i < r, C = d ? i : r, k = d ? r : i;
    o = (k - C) / Math.max(1, l - c + a * 2), s && (o = Math.floor(o)), C += (k - C - o * (l - c)) * f, u = o * (1 - c), s && (C = Math.round(C), u = Math.round(u));
    var F = qr(l).map(function(E) {
      return C + o * E;
    });
    return e(d ? F.reverse() : F);
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
    return Ze(n(), [r, i]).round(s).paddingInner(c).paddingOuter(a).align(f);
  }, zn.apply(h(), arguments);
}
const Xn = (t) => () => t;
function hi(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function di(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function gi(t) {
  return (t = +t) == 1 ? Ge : function(n, e) {
    return e - n ? di(n, e, t) : Xn(isNaN(n) ? e : n);
  };
}
function Ge(t, n) {
  var e = n - t;
  return e ? hi(t, e) : Xn(isNaN(t) ? n : t);
}
const cn = function t(n) {
  var e = gi(n);
  function r(i, o) {
    var u = e((i = Fn(i)).r, (o = Fn(o)).r), s = e(i.g, o.g), c = e(i.b, o.b), a = Ge(i.opacity, o.opacity);
    return function(f) {
      return i.r = u(f), i.g = s(f), i.b = c(f), i.opacity = a(f), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function mi(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i)
      r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function pi(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function yi(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), u;
  for (u = 0; u < r; ++u)
    i[u] = Bn(t[u], n[u]);
  for (; u < e; ++u)
    o[u] = n[u];
  return function(s) {
    for (u = 0; u < r; ++u)
      o[u] = i[u](s);
    return o;
  };
}
function wi(t, n) {
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
function vi(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Bn(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e)
      r[i] = e[i](o);
    return r;
  };
}
var Yn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $n = new RegExp(Yn.source, "g");
function xi(t) {
  return function() {
    return t;
  };
}
function _i(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Je(t, n) {
  var e = Yn.lastIndex = $n.lastIndex = 0, r, i, o, u = -1, s = [], c = [];
  for (t = t + "", n = n + ""; (r = Yn.exec(t)) && (i = $n.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[u] ? s[u] += o : s[++u] = o), (r = r[0]) === (i = i[0]) ? s[u] ? s[u] += i : s[++u] = i : (s[++u] = null, c.push({ i: u, x: et(r, i) })), e = $n.lastIndex;
  return e < n.length && (o = n.slice(e), s[u] ? s[u] += o : s[++u] = o), s.length < 2 ? c[0] ? _i(c[0].x) : xi(n) : (n = c.length, function(a) {
    for (var f = 0, h; f < n; ++f)
      s[(h = c[f]).i] = h.x(a);
    return s.join("");
  });
}
function Bn(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? Xn(n) : (e === "number" ? et : e === "string" ? (r = pt(n)) ? (n = r, cn) : Je : n instanceof pt ? cn : n instanceof Date ? wi : pi(n) ? mi : Array.isArray(n) ? yi : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? vi : et)(t, n);
}
function Mi(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var $e = 180 / Math.PI, Hn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Qe(t, n, e, r, i, o) {
  var u, s, c;
  return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (c = t * e + n * r) && (e -= t * c, r -= n * c), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, c /= s), t * r < n * e && (t = -t, n = -n, c = -c, u = -u), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * $e,
    skewX: Math.atan(c) * $e,
    scaleX: u,
    scaleY: s
  };
}
var Kt;
function bi(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? Hn : Qe(n.a, n.b, n.c, n.d, n.e, n.f);
}
function $i(t) {
  return t == null || (Kt || (Kt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Kt.setAttribute("transform", t), !(t = Kt.transform.baseVal.consolidate())) ? Hn : (t = t.matrix, Qe(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Ke(t, n, e, r) {
  function i(a) {
    return a.length ? a.pop() + " " : "";
  }
  function o(a, f, h, l, d, C) {
    if (a !== h || f !== l) {
      var k = d.push("translate(", null, n, null, e);
      C.push({ i: k - 4, x: et(a, h) }, { i: k - 2, x: et(f, l) });
    } else
      (h || l) && d.push("translate(" + h + n + l + e);
  }
  function u(a, f, h, l) {
    a !== f ? (a - f > 180 ? f += 360 : f - a > 180 && (a += 360), l.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: et(a, f) })) : f && h.push(i(h) + "rotate(" + f + r);
  }
  function s(a, f, h, l) {
    a !== f ? l.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: et(a, f) }) : f && h.push(i(h) + "skewX(" + f + r);
  }
  function c(a, f, h, l, d, C) {
    if (a !== h || f !== l) {
      var k = d.push(i(d) + "scale(", null, ",", null, ")");
      C.push({ i: k - 4, x: et(a, h) }, { i: k - 2, x: et(f, l) });
    } else
      (h !== 1 || l !== 1) && d.push(i(d) + "scale(" + h + "," + l + ")");
  }
  return function(a, f) {
    var h = [], l = [];
    return a = t(a), f = t(f), o(a.translateX, a.translateY, f.translateX, f.translateY, h, l), u(a.rotate, f.rotate, h, l), s(a.skewX, f.skewX, h, l), c(a.scaleX, a.scaleY, f.scaleX, f.scaleY, h, l), a = f = null, function(d) {
      for (var C = -1, k = l.length, F; ++C < k; )
        h[(F = l[C]).i] = F.x(d);
      return h.join("");
    };
  };
}
var Ti = Ke(bi, "px, ", "px)", "deg)"), Si = Ke($i, ", ", ")", ")");
function ki(t) {
  return function() {
    return t;
  };
}
function Ci(t) {
  return +t;
}
var Te = [0, 1];
function kt(t) {
  return t;
}
function On(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : ki(isNaN(n) ? NaN : 0.5);
}
function Di(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Ai(t, n, e) {
  var r = t[0], i = t[1], o = n[0], u = n[1];
  return i < r ? (r = On(i, r), o = e(u, o)) : (r = On(r, i), o = e(o, u)), function(s) {
    return o(r(s));
  };
}
function Ni(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), u = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u < r; )
    i[u] = On(t[u], t[u + 1]), o[u] = e(n[u], n[u + 1]);
  return function(s) {
    var c = Or(t, s, 1, r) - 1;
    return o[c](i[c](s));
  };
}
function Ui(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Fi() {
  var t = Te, n = Te, e = Bn, r, i, o, u = kt, s, c, a;
  function f() {
    var l = Math.min(t.length, n.length);
    return u !== kt && (u = Di(t[0], t[l - 1])), s = l > 2 ? Ni : Ai, c = a = null, h;
  }
  function h(l) {
    return l == null || isNaN(l = +l) ? o : (c || (c = s(t.map(r), n, e)))(r(u(l)));
  }
  return h.invert = function(l) {
    return u(i((a || (a = s(n, t.map(r), et)))(l)));
  }, h.domain = function(l) {
    return arguments.length ? (t = Array.from(l, Ci), f()) : t.slice();
  }, h.range = function(l) {
    return arguments.length ? (n = Array.from(l), f()) : n.slice();
  }, h.rangeRound = function(l) {
    return n = Array.from(l), e = Mi, f();
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
function Yi() {
  return Fi()(kt, kt);
}
function Hi(t, n) {
  t = t.slice();
  var e = 0, r = t.length - 1, i = t[e], o = t[r], u;
  return o < i && (u = e, e = r, r = u, u = i, i = o, o = u), t[e] = n.floor(i), t[r] = n.ceil(o), t;
}
const Tn = /* @__PURE__ */ new Date(), Sn = /* @__PURE__ */ new Date();
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
  }), e && (i.count = (o, u) => (Tn.setTime(+o), Sn.setTime(+u), t(Tn), t(Sn), Math.floor(e(Tn, Sn))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? (u) => r(u) % o === 0 : (u) => i.count(0, u) % o === 0) : i)), i;
}
const fn = B(() => {
}, (t, n) => {
  t.setTime(+t + n);
}, (t, n) => n - t);
fn.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? B((n) => {
  n.setTime(Math.floor(n / t) * t);
}, (n, e) => {
  n.setTime(+n + e * t);
}, (n, e) => (e - n) / t) : fn);
fn.range;
const lt = 1e3, nt = lt * 60, ht = nt * 60, dt = ht * 24, Zn = dt * 7, Se = dt * 30, kn = dt * 365, Ct = B((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, n) => {
  t.setTime(+t + n * lt);
}, (t, n) => (n - t) / lt, (t) => t.getUTCSeconds());
Ct.range;
const Gn = B((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * lt);
}, (t, n) => {
  t.setTime(+t + n * nt);
}, (t, n) => (n - t) / nt, (t) => t.getMinutes());
Gn.range;
const Oi = B((t) => {
  t.setUTCSeconds(0, 0);
}, (t, n) => {
  t.setTime(+t + n * nt);
}, (t, n) => (n - t) / nt, (t) => t.getUTCMinutes());
Oi.range;
const Jn = B((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * lt - t.getMinutes() * nt);
}, (t, n) => {
  t.setTime(+t + n * ht);
}, (t, n) => (n - t) / ht, (t) => t.getHours());
Jn.range;
const Ei = B((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, n) => {
  t.setTime(+t + n * ht);
}, (t, n) => (n - t) / ht, (t) => t.getUTCHours());
Ei.range;
const Bt = B(
  (t) => t.setHours(0, 0, 0, 0),
  (t, n) => t.setDate(t.getDate() + n),
  (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * nt) / dt,
  (t) => t.getDate() - 1
);
Bt.range;
const Qn = B((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCDate(t.getUTCDate() + n);
}, (t, n) => (n - t) / dt, (t) => t.getUTCDate() - 1);
Qn.range;
const Ii = B((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCDate(t.getUTCDate() + n);
}, (t, n) => (n - t) / dt, (t) => Math.floor(t / dt));
Ii.range;
function bt(t) {
  return B((n) => {
    n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setDate(n.getDate() + e * 7);
  }, (n, e) => (e - n - (e.getTimezoneOffset() - n.getTimezoneOffset()) * nt) / Zn);
}
const yn = bt(0), ln = bt(1), Li = bt(2), Ri = bt(3), Nt = bt(4), Wi = bt(5), Pi = bt(6);
yn.range;
ln.range;
Li.range;
Ri.range;
Nt.range;
Wi.range;
Pi.range;
function $t(t) {
  return B((n) => {
    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
  }, (n, e) => {
    n.setUTCDate(n.getUTCDate() + e * 7);
  }, (n, e) => (e - n) / Zn);
}
const je = $t(0), hn = $t(1), Vi = $t(2), qi = $t(3), Ut = $t(4), zi = $t(5), Xi = $t(6);
je.range;
hn.range;
Vi.range;
qi.range;
Ut.range;
zi.range;
Xi.range;
const Kn = B((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setMonth(t.getMonth() + n);
}, (t, n) => n.getMonth() - t.getMonth() + (n.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
Kn.range;
const Bi = B((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCMonth(t.getUTCMonth() + n);
}, (t, n) => n.getUTCMonth() - t.getUTCMonth() + (n.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
Bi.range;
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
function Zi(t, n, e, r, i, o) {
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
    [e, 1, Zn],
    [n, 1, Se],
    [n, 3, 3 * Se],
    [t, 1, kn]
  ];
  function s(a, f, h) {
    const l = f < a;
    l && ([a, f] = [f, a]);
    const d = h && typeof h.range == "function" ? h : c(a, f, h), C = d ? d.range(a, +f + 1) : [];
    return l ? C.reverse() : C;
  }
  function c(a, f, h) {
    const l = Math.abs(f - a) / h, d = Vn(([, , F]) => F).right(u, l);
    if (d === u.length)
      return t.every(de(a / kn, f / kn, h));
    if (d === 0)
      return fn.every(Math.max(de(a, f, h), 1));
    const [C, k] = u[l / u[d - 1][2] < u[d][2] / l ? d - 1 : d];
    return C.every(k);
  }
  return [s, c];
}
const [Gi, Ji] = Zi(gt, Kn, yn, Bt, Jn, Gn);
function Cn(t) {
  if (0 <= t.y && t.y < 100) {
    var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return n.setFullYear(t.y), n;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function Dn(t) {
  if (0 <= t.y && t.y < 100) {
    var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return n.setUTCFullYear(t.y), n;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Ht(t, n, e) {
  return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
}
function Qi(t) {
  var n = t.dateTime, e = t.date, r = t.time, i = t.periods, o = t.days, u = t.shortDays, s = t.months, c = t.shortMonths, a = Ot(i), f = Et(i), h = Ot(o), l = Et(o), d = Ot(u), C = Et(u), k = Ot(s), F = Et(s), E = Ot(c), R = Et(c), Y = {
    a: $,
    A: x,
    b: D,
    B: H,
    c: null,
    d: Ue,
    e: Ue,
    f: _o,
    g: No,
    G: Fo,
    H: wo,
    I: vo,
    j: xo,
    L: tr,
    m: Mo,
    M: bo,
    p: P,
    q,
    Q: He,
    s: Oe,
    S: $o,
    u: To,
    U: So,
    V: ko,
    w: Co,
    W: Do,
    x: null,
    X: null,
    y: Ao,
    Y: Uo,
    Z: Yo,
    "%": Ye
  }, y = {
    a: z,
    A: Z,
    b: J,
    B: mt,
    c: null,
    d: Fe,
    e: Fe,
    f: Io,
    g: Zo,
    G: Jo,
    H: Ho,
    I: Oo,
    j: Eo,
    L: er,
    m: Lo,
    M: Ro,
    p: ct,
    q: yt,
    Q: He,
    s: Oe,
    S: Wo,
    u: Po,
    U: Vo,
    V: qo,
    w: zo,
    W: Xo,
    x: null,
    X: null,
    y: Bo,
    Y: Go,
    Z: Qo,
    "%": Ye
  }, T = {
    a: A,
    A: M,
    b: I,
    B: L,
    c: S,
    d: Ae,
    e: Ae,
    f: go,
    g: De,
    G: Ce,
    H: Ne,
    I: Ne,
    j: co,
    L: ho,
    m: so,
    M: fo,
    p: N,
    q: ao,
    Q: po,
    s: yo,
    S: lo,
    u: eo,
    U: ro,
    V: io,
    w: no,
    W: oo,
    x: _,
    X: v,
    y: De,
    Y: Ce,
    Z: uo,
    "%": mo
  };
  Y.x = g(e, Y), Y.X = g(r, Y), Y.c = g(n, Y), y.x = g(e, y), y.X = g(r, y), y.c = g(n, y);
  function g(b, U) {
    return function(O) {
      var w = [], X = -1, V = 0, K = b.length, j, wt, ce;
      for (O instanceof Date || (O = /* @__PURE__ */ new Date(+O)); ++X < K; )
        b.charCodeAt(X) === 37 && (w.push(b.slice(V, X)), (wt = ke[j = b.charAt(++X)]) != null ? j = b.charAt(++X) : wt = j === "e" ? " " : "0", (ce = U[j]) && (j = ce(O, wt)), w.push(j), V = X + 1);
      return w.push(b.slice(V, X)), w.join("");
    };
  }
  function p(b, U) {
    return function(O) {
      var w = Ht(1900, void 0, 1), X = m(w, b, O += "", 0), V, K;
      if (X != O.length)
        return null;
      if ("Q" in w)
        return new Date(w.Q);
      if ("s" in w)
        return new Date(w.s * 1e3 + ("L" in w ? w.L : 0));
      if (U && !("Z" in w) && (w.Z = 0), "p" in w && (w.H = w.H % 12 + w.p * 12), w.m === void 0 && (w.m = "q" in w ? w.q : 0), "V" in w) {
        if (w.V < 1 || w.V > 53)
          return null;
        "w" in w || (w.w = 1), "Z" in w ? (V = Dn(Ht(w.y, 0, 1)), K = V.getUTCDay(), V = K > 4 || K === 0 ? hn.ceil(V) : hn(V), V = Qn.offset(V, (w.V - 1) * 7), w.y = V.getUTCFullYear(), w.m = V.getUTCMonth(), w.d = V.getUTCDate() + (w.w + 6) % 7) : (V = Cn(Ht(w.y, 0, 1)), K = V.getDay(), V = K > 4 || K === 0 ? ln.ceil(V) : ln(V), V = Bt.offset(V, (w.V - 1) * 7), w.y = V.getFullYear(), w.m = V.getMonth(), w.d = V.getDate() + (w.w + 6) % 7);
      } else
        ("W" in w || "U" in w) && ("w" in w || (w.w = "u" in w ? w.u % 7 : "W" in w ? 1 : 0), K = "Z" in w ? Dn(Ht(w.y, 0, 1)).getUTCDay() : Cn(Ht(w.y, 0, 1)).getDay(), w.m = 0, w.d = "W" in w ? (w.w + 6) % 7 + w.W * 7 - (K + 5) % 7 : w.w + w.U * 7 - (K + 6) % 7);
      return "Z" in w ? (w.H += w.Z / 100 | 0, w.M += w.Z % 100, Dn(w)) : Cn(w);
    };
  }
  function m(b, U, O, w) {
    for (var X = 0, V = U.length, K = O.length, j, wt; X < V; ) {
      if (w >= K)
        return -1;
      if (j = U.charCodeAt(X++), j === 37) {
        if (j = U.charAt(X++), wt = T[j in ke ? U.charAt(X++) : j], !wt || (w = wt(b, O, w)) < 0)
          return -1;
      } else if (j != O.charCodeAt(w++))
        return -1;
    }
    return w;
  }
  function N(b, U, O) {
    var w = a.exec(U.slice(O));
    return w ? (b.p = f.get(w[0].toLowerCase()), O + w[0].length) : -1;
  }
  function A(b, U, O) {
    var w = d.exec(U.slice(O));
    return w ? (b.w = C.get(w[0].toLowerCase()), O + w[0].length) : -1;
  }
  function M(b, U, O) {
    var w = h.exec(U.slice(O));
    return w ? (b.w = l.get(w[0].toLowerCase()), O + w[0].length) : -1;
  }
  function I(b, U, O) {
    var w = E.exec(U.slice(O));
    return w ? (b.m = R.get(w[0].toLowerCase()), O + w[0].length) : -1;
  }
  function L(b, U, O) {
    var w = k.exec(U.slice(O));
    return w ? (b.m = F.get(w[0].toLowerCase()), O + w[0].length) : -1;
  }
  function S(b, U, O) {
    return m(b, n, U, O);
  }
  function _(b, U, O) {
    return m(b, e, U, O);
  }
  function v(b, U, O) {
    return m(b, r, U, O);
  }
  function $(b) {
    return u[b.getDay()];
  }
  function x(b) {
    return o[b.getDay()];
  }
  function D(b) {
    return c[b.getMonth()];
  }
  function H(b) {
    return s[b.getMonth()];
  }
  function P(b) {
    return i[+(b.getHours() >= 12)];
  }
  function q(b) {
    return 1 + ~~(b.getMonth() / 3);
  }
  function z(b) {
    return u[b.getUTCDay()];
  }
  function Z(b) {
    return o[b.getUTCDay()];
  }
  function J(b) {
    return c[b.getUTCMonth()];
  }
  function mt(b) {
    return s[b.getUTCMonth()];
  }
  function ct(b) {
    return i[+(b.getUTCHours() >= 12)];
  }
  function yt(b) {
    return 1 + ~~(b.getUTCMonth() / 3);
  }
  return {
    format: function(b) {
      var U = g(b += "", Y);
      return U.toString = function() {
        return b;
      }, U;
    },
    parse: function(b) {
      var U = p(b += "", !1);
      return U.toString = function() {
        return b;
      }, U;
    },
    utcFormat: function(b) {
      var U = g(b += "", y);
      return U.toString = function() {
        return b;
      }, U;
    },
    utcParse: function(b) {
      var U = p(b += "", !0);
      return U.toString = function() {
        return b;
      }, U;
    }
  };
}
var ke = { "-": "", _: " ", 0: "0" }, G = /^\s*\d+/, Ki = /^%/, ji = /[\\^$*+?|[\]().{}]/g;
function W(t, n, e) {
  var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", o = i.length;
  return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
}
function to(t) {
  return t.replace(ji, "\\$&");
}
function Ot(t) {
  return new RegExp("^(?:" + t.map(to).join("|") + ")", "i");
}
function Et(t) {
  return new Map(t.map((n, e) => [n.toLowerCase(), e]));
}
function no(t, n, e) {
  var r = G.exec(n.slice(e, e + 1));
  return r ? (t.w = +r[0], e + r[0].length) : -1;
}
function eo(t, n, e) {
  var r = G.exec(n.slice(e, e + 1));
  return r ? (t.u = +r[0], e + r[0].length) : -1;
}
function ro(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.U = +r[0], e + r[0].length) : -1;
}
function io(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.V = +r[0], e + r[0].length) : -1;
}
function oo(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.W = +r[0], e + r[0].length) : -1;
}
function Ce(t, n, e) {
  var r = G.exec(n.slice(e, e + 4));
  return r ? (t.y = +r[0], e + r[0].length) : -1;
}
function De(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
}
function uo(t, n, e) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
}
function ao(t, n, e) {
  var r = G.exec(n.slice(e, e + 1));
  return r ? (t.q = r[0] * 3 - 3, e + r[0].length) : -1;
}
function so(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.m = r[0] - 1, e + r[0].length) : -1;
}
function Ae(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.d = +r[0], e + r[0].length) : -1;
}
function co(t, n, e) {
  var r = G.exec(n.slice(e, e + 3));
  return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1;
}
function Ne(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.H = +r[0], e + r[0].length) : -1;
}
function fo(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.M = +r[0], e + r[0].length) : -1;
}
function lo(t, n, e) {
  var r = G.exec(n.slice(e, e + 2));
  return r ? (t.S = +r[0], e + r[0].length) : -1;
}
function ho(t, n, e) {
  var r = G.exec(n.slice(e, e + 3));
  return r ? (t.L = +r[0], e + r[0].length) : -1;
}
function go(t, n, e) {
  var r = G.exec(n.slice(e, e + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1;
}
function mo(t, n, e) {
  var r = Ki.exec(n.slice(e, e + 1));
  return r ? e + r[0].length : -1;
}
function po(t, n, e) {
  var r = G.exec(n.slice(e));
  return r ? (t.Q = +r[0], e + r[0].length) : -1;
}
function yo(t, n, e) {
  var r = G.exec(n.slice(e));
  return r ? (t.s = +r[0], e + r[0].length) : -1;
}
function Ue(t, n) {
  return W(t.getDate(), n, 2);
}
function wo(t, n) {
  return W(t.getHours(), n, 2);
}
function vo(t, n) {
  return W(t.getHours() % 12 || 12, n, 2);
}
function xo(t, n) {
  return W(1 + Bt.count(gt(t), t), n, 3);
}
function tr(t, n) {
  return W(t.getMilliseconds(), n, 3);
}
function _o(t, n) {
  return tr(t, n) + "000";
}
function Mo(t, n) {
  return W(t.getMonth() + 1, n, 2);
}
function bo(t, n) {
  return W(t.getMinutes(), n, 2);
}
function $o(t, n) {
  return W(t.getSeconds(), n, 2);
}
function To(t) {
  var n = t.getDay();
  return n === 0 ? 7 : n;
}
function So(t, n) {
  return W(yn.count(gt(t) - 1, t), n, 2);
}
function nr(t) {
  var n = t.getDay();
  return n >= 4 || n === 0 ? Nt(t) : Nt.ceil(t);
}
function ko(t, n) {
  return t = nr(t), W(Nt.count(gt(t), t) + (gt(t).getDay() === 4), n, 2);
}
function Co(t) {
  return t.getDay();
}
function Do(t, n) {
  return W(ln.count(gt(t) - 1, t), n, 2);
}
function Ao(t, n) {
  return W(t.getFullYear() % 100, n, 2);
}
function No(t, n) {
  return t = nr(t), W(t.getFullYear() % 100, n, 2);
}
function Uo(t, n) {
  return W(t.getFullYear() % 1e4, n, 4);
}
function Fo(t, n) {
  var e = t.getDay();
  return t = e >= 4 || e === 0 ? Nt(t) : Nt.ceil(t), W(t.getFullYear() % 1e4, n, 4);
}
function Yo(t) {
  var n = t.getTimezoneOffset();
  return (n > 0 ? "-" : (n *= -1, "+")) + W(n / 60 | 0, "0", 2) + W(n % 60, "0", 2);
}
function Fe(t, n) {
  return W(t.getUTCDate(), n, 2);
}
function Ho(t, n) {
  return W(t.getUTCHours(), n, 2);
}
function Oo(t, n) {
  return W(t.getUTCHours() % 12 || 12, n, 2);
}
function Eo(t, n) {
  return W(1 + Qn.count(_t(t), t), n, 3);
}
function er(t, n) {
  return W(t.getUTCMilliseconds(), n, 3);
}
function Io(t, n) {
  return er(t, n) + "000";
}
function Lo(t, n) {
  return W(t.getUTCMonth() + 1, n, 2);
}
function Ro(t, n) {
  return W(t.getUTCMinutes(), n, 2);
}
function Wo(t, n) {
  return W(t.getUTCSeconds(), n, 2);
}
function Po(t) {
  var n = t.getUTCDay();
  return n === 0 ? 7 : n;
}
function Vo(t, n) {
  return W(je.count(_t(t) - 1, t), n, 2);
}
function rr(t) {
  var n = t.getUTCDay();
  return n >= 4 || n === 0 ? Ut(t) : Ut.ceil(t);
}
function qo(t, n) {
  return t = rr(t), W(Ut.count(_t(t), t) + (_t(t).getUTCDay() === 4), n, 2);
}
function zo(t) {
  return t.getUTCDay();
}
function Xo(t, n) {
  return W(hn.count(_t(t) - 1, t), n, 2);
}
function Bo(t, n) {
  return W(t.getUTCFullYear() % 100, n, 2);
}
function Zo(t, n) {
  return t = rr(t), W(t.getUTCFullYear() % 100, n, 2);
}
function Go(t, n) {
  return W(t.getUTCFullYear() % 1e4, n, 4);
}
function Jo(t, n) {
  var e = t.getUTCDay();
  return t = e >= 4 || e === 0 ? Ut(t) : Ut.ceil(t), W(t.getUTCFullYear() % 1e4, n, 4);
}
function Qo() {
  return "+0000";
}
function Ye() {
  return "%";
}
function He(t) {
  return +t;
}
function Oe(t) {
  return Math.floor(+t / 1e3);
}
var Tt, jn, ir, or;
Ko({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Ko(t) {
  return Tt = Qi(t), jn = Tt.format, Tt.parse, ir = Tt.utcFormat, or = Tt.utcParse, Tt;
}
var ur = "%Y-%m-%dT%H:%M:%S.%LZ";
function jo(t) {
  return t.toISOString();
}
Date.prototype.toISOString || ir(ur);
function tu(t) {
  var n = new Date(t);
  return isNaN(n) ? null : n;
}
var nu = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? tu : or(ur);
const eu = nu;
function ru(t) {
  return new Date(t);
}
function iu(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function ar(t, n, e, r, i, o, u, s, c, a) {
  var f = Yi(), h = f.invert, l = f.domain, d = a(".%L"), C = a(":%S"), k = a("%I:%M"), F = a("%I %p"), E = a("%a %d"), R = a("%b %d"), Y = a("%B"), y = a("%Y");
  function T(g) {
    return (c(g) < g ? d : s(g) < g ? C : u(g) < g ? k : o(g) < g ? F : r(g) < g ? i(g) < g ? E : R : e(g) < g ? Y : y)(g);
  }
  return f.invert = function(g) {
    return new Date(h(g));
  }, f.domain = function(g) {
    return arguments.length ? l(Array.from(g, iu)) : l().map(ru);
  }, f.ticks = function(g) {
    var p = l();
    return t(p[0], p[p.length - 1], g ?? 10);
  }, f.tickFormat = function(g, p) {
    return p == null ? T : a(p);
  }, f.nice = function(g) {
    var p = l();
    return (!g || typeof g.range != "function") && (g = n(p[0], p[p.length - 1], g ?? 10)), g ? l(Hi(p, g)) : f;
  }, f.copy = function() {
    return Ui(f, ar(t, n, e, r, i, o, u, s, c, a));
  }, f;
}
function ou() {
  return zn.apply(ar(Gi, Ji, gt, Kn, yn, Bt, Jn, Gn, Ct, jn).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var En = "http://www.w3.org/1999/xhtml";
const Ee = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: En,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function wn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Ee.hasOwnProperty(n) ? { space: Ee[n], local: t } : t;
}
function uu(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === En && n.documentElement.namespaceURI === En ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function au(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function sr(t) {
  var n = wn(t);
  return (n.local ? au : uu)(n);
}
function su() {
}
function te(t) {
  return t == null ? su : function() {
    return this.querySelector(t);
  };
}
function cu(t) {
  typeof t != "function" && (t = te(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], u = o.length, s = r[i] = new Array(u), c, a, f = 0; f < u; ++f)
      (c = o[f]) && (a = t.call(c, c.__data__, f, o)) && ("__data__" in c && (a.__data__ = c.__data__), s[f] = a);
  return new tt(r, this._parents);
}
function fu(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function lu() {
  return [];
}
function cr(t) {
  return t == null ? lu : function() {
    return this.querySelectorAll(t);
  };
}
function hu(t) {
  return function() {
    return fu(t.apply(this, arguments));
  };
}
function du(t) {
  typeof t == "function" ? t = hu(t) : t = cr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var u = n[o], s = u.length, c, a = 0; a < s; ++a)
      (c = u[a]) && (r.push(t.call(c, c.__data__, a, u)), i.push(c));
  return new tt(r, i);
}
function fr(t) {
  return function() {
    return this.matches(t);
  };
}
function lr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var gu = Array.prototype.find;
function mu(t) {
  return function() {
    return gu.call(this.children, t);
  };
}
function pu() {
  return this.firstElementChild;
}
function yu(t) {
  return this.select(t == null ? pu : mu(typeof t == "function" ? t : lr(t)));
}
var wu = Array.prototype.filter;
function vu() {
  return Array.from(this.children);
}
function xu(t) {
  return function() {
    return wu.call(this.children, t);
  };
}
function _u(t) {
  return this.selectAll(t == null ? vu : xu(typeof t == "function" ? t : lr(t)));
}
function Mu(t) {
  typeof t != "function" && (t = fr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], u = o.length, s = r[i] = [], c, a = 0; a < u; ++a)
      (c = o[a]) && t.call(c, c.__data__, a, o) && s.push(c);
  return new tt(r, this._parents);
}
function hr(t) {
  return new Array(t.length);
}
function bu() {
  return new tt(this._enter || this._groups.map(hr), this._parents);
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
function $u(t) {
  return function() {
    return t;
  };
}
function Tu(t, n, e, r, i, o) {
  for (var u = 0, s, c = n.length, a = o.length; u < a; ++u)
    (s = n[u]) ? (s.__data__ = o[u], r[u] = s) : e[u] = new dn(t, o[u]);
  for (; u < c; ++u)
    (s = n[u]) && (i[u] = s);
}
function Su(t, n, e, r, i, o, u) {
  var s, c, a = /* @__PURE__ */ new Map(), f = n.length, h = o.length, l = new Array(f), d;
  for (s = 0; s < f; ++s)
    (c = n[s]) && (l[s] = d = u.call(c, c.__data__, s, n) + "", a.has(d) ? i[s] = c : a.set(d, c));
  for (s = 0; s < h; ++s)
    d = u.call(t, o[s], s, o) + "", (c = a.get(d)) ? (r[s] = c, c.__data__ = o[s], a.delete(d)) : e[s] = new dn(t, o[s]);
  for (s = 0; s < f; ++s)
    (c = n[s]) && a.get(l[s]) === c && (i[s] = c);
}
function ku(t) {
  return t.__data__;
}
function Cu(t, n) {
  if (!arguments.length)
    return Array.from(this, ku);
  var e = n ? Su : Tu, r = this._parents, i = this._groups;
  typeof t != "function" && (t = $u(t));
  for (var o = i.length, u = new Array(o), s = new Array(o), c = new Array(o), a = 0; a < o; ++a) {
    var f = r[a], h = i[a], l = h.length, d = Du(t.call(f, f && f.__data__, a, r)), C = d.length, k = s[a] = new Array(C), F = u[a] = new Array(C), E = c[a] = new Array(l);
    e(f, h, k, F, E, d, n);
    for (var R = 0, Y = 0, y, T; R < C; ++R)
      if (y = k[R]) {
        for (R >= Y && (Y = R + 1); !(T = F[Y]) && ++Y < C; )
          ;
        y._next = T || null;
      }
  }
  return u = new tt(u, r), u._enter = s, u._exit = c, u;
}
function Du(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Au() {
  return new tt(this._exit || this._groups.map(hr), this._parents);
}
function Nu(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Uu(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, u = Math.min(i, o), s = new Array(i), c = 0; c < u; ++c)
    for (var a = e[c], f = r[c], h = a.length, l = s[c] = new Array(h), d, C = 0; C < h; ++C)
      (d = a[C] || f[C]) && (l[C] = d);
  for (; c < i; ++c)
    s[c] = e[c];
  return new tt(s, this._parents);
}
function Fu() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], u; --i >= 0; )
      (u = r[i]) && (o && u.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(u, o), o = u);
  return this;
}
function Yu(t) {
  t || (t = Hu);
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
function Hu(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ou() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Eu() {
  return Array.from(this);
}
function Iu() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var u = r[i];
      if (u)
        return u;
    }
  return null;
}
function Lu() {
  let t = 0;
  for (const n of this)
    ++t;
  return t;
}
function Ru() {
  return !this.node();
}
function Wu(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, u = i.length, s; o < u; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Pu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Vu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function qu(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function zu(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Xu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Bu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Zu(t, n) {
  var e = wn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Vu : Pu : typeof n == "function" ? e.local ? Bu : Xu : e.local ? zu : qu)(e, n));
}
function dr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Gu(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ju(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function Qu(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Ku(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Gu : typeof n == "function" ? Qu : Ju)(t, n, e ?? "")) : Ft(this.node(), t);
}
function Ft(t, n) {
  return t.style.getPropertyValue(n) || dr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function ju(t) {
  return function() {
    delete this[t];
  };
}
function ta(t, n) {
  return function() {
    this[t] = n;
  };
}
function na(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function ea(t, n) {
  return arguments.length > 1 ? this.each((n == null ? ju : typeof n == "function" ? na : ta)(t, n)) : this.node()[t];
}
function gr(t) {
  return t.trim().split(/^|\s+/);
}
function ne(t) {
  return t.classList || new mr(t);
}
function mr(t) {
  this._node = t, this._names = gr(t.getAttribute("class") || "");
}
mr.prototype = {
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
function pr(t, n) {
  for (var e = ne(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function yr(t, n) {
  for (var e = ne(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function ra(t) {
  return function() {
    pr(this, t);
  };
}
function ia(t) {
  return function() {
    yr(this, t);
  };
}
function oa(t, n) {
  return function() {
    (n.apply(this, arguments) ? pr : yr)(this, t);
  };
}
function ua(t, n) {
  var e = gr(t + "");
  if (arguments.length < 2) {
    for (var r = ne(this.node()), i = -1, o = e.length; ++i < o; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? oa : n ? ra : ia)(e, n));
}
function aa() {
  this.textContent = "";
}
function sa(t) {
  return function() {
    this.textContent = t;
  };
}
function ca(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function fa(t) {
  return arguments.length ? this.each(t == null ? aa : (typeof t == "function" ? ca : sa)(t)) : this.node().textContent;
}
function la() {
  this.innerHTML = "";
}
function ha(t) {
  return function() {
    this.innerHTML = t;
  };
}
function da(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ga(t) {
  return arguments.length ? this.each(t == null ? la : (typeof t == "function" ? da : ha)(t)) : this.node().innerHTML;
}
function ma() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function pa() {
  return this.each(ma);
}
function ya() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function wa() {
  return this.each(ya);
}
function va(t) {
  var n = typeof t == "function" ? t : sr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function xa() {
  return null;
}
function _a(t, n) {
  var e = typeof t == "function" ? t : sr(t), r = n == null ? xa : typeof n == "function" ? n : te(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ma() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function ba() {
  return this.each(Ma);
}
function $a() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Ta() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Sa(t) {
  return this.select(t ? Ta : $a);
}
function ka(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Ca(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Da(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Aa(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Na(t, n, e) {
  return function() {
    var r = this.__on, i, o = Ca(n);
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
function Ua(t, n, e) {
  var r = Da(t + ""), i, o = r.length, u;
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
  for (s = n ? Na : Aa, i = 0; i < o; ++i)
    this.each(s(r[i], n, e));
  return this;
}
function wr(t, n, e) {
  var r = dr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Fa(t, n) {
  return function() {
    return wr(this, t, n);
  };
}
function Ya(t, n) {
  return function() {
    return wr(this, t, n.apply(this, arguments));
  };
}
function Ha(t, n) {
  return this.each((typeof n == "function" ? Ya : Fa)(t, n));
}
function* Oa() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, u; i < o; ++i)
      (u = r[i]) && (yield u);
}
var vr = [null];
function tt(t, n) {
  this._groups = t, this._parents = n;
}
function Zt() {
  return new tt([[document.documentElement]], vr);
}
function Ea() {
  return this;
}
tt.prototype = Zt.prototype = {
  constructor: tt,
  select: cu,
  selectAll: du,
  selectChild: yu,
  selectChildren: _u,
  filter: Mu,
  data: Cu,
  enter: bu,
  exit: Au,
  join: Nu,
  merge: Uu,
  selection: Ea,
  order: Fu,
  sort: Yu,
  call: Ou,
  nodes: Eu,
  node: Iu,
  size: Lu,
  empty: Ru,
  each: Wu,
  attr: Zu,
  style: Ku,
  property: ea,
  classed: ua,
  text: fa,
  html: ga,
  raise: pa,
  lower: wa,
  append: va,
  insert: _a,
  remove: ba,
  clone: Sa,
  datum: ka,
  on: Ua,
  dispatch: Ha,
  [Symbol.iterator]: Oa
};
function ut(t) {
  return typeof t == "string" ? new tt([[document.querySelector(t)]], [document.documentElement]) : new tt([[t]], vr);
}
function Ia(t) {
  let n;
  for (; n = t.sourceEvent; )
    t = n;
  return t;
}
function Ie(t, n) {
  if (t = Ia(t), n === void 0 && (n = t.currentTarget), n) {
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
var La = { value: () => {
} };
function ee() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new rn(e);
}
function rn(t) {
  this._ = t;
}
function Ra(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
rn.prototype = ee.prototype = {
  constructor: rn,
  on: function(t, n) {
    var e = this._, r = Ra(t + "", e), i, o = -1, u = r.length;
    if (arguments.length < 2) {
      for (; ++o < u; )
        if ((i = (t = r[o]).type) && (i = Wa(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++o < u; )
      if (i = (t = r[o]).type)
        e[i] = Le(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = Le(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new rn(t);
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
function Wa(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Le(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = La, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Yt = 0, Lt = 0, It = 0, xr = 1e3, gn, Rt, mn = 0, Mt = 0, vn = 0, qt = typeof performance == "object" && performance.now ? performance : Date, _r = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function re() {
  return Mt || (_r(Pa), Mt = qt.now() + vn);
}
function Pa() {
  Mt = 0;
}
function pn() {
  this._call = this._time = this._next = null;
}
pn.prototype = Mr.prototype = {
  constructor: pn,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? re() : +e) + (n == null ? 0 : +n), !this._next && Rt !== this && (Rt ? Rt._next = this : gn = this, Rt = this), this._call = t, this._time = e, In();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, In());
  }
};
function Mr(t, n, e) {
  var r = new pn();
  return r.restart(t, n, e), r;
}
function Va() {
  re(), ++Yt;
  for (var t = gn, n; t; )
    (n = Mt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Yt;
}
function Re() {
  Mt = (mn = qt.now()) + vn, Yt = Lt = 0;
  try {
    Va();
  } finally {
    Yt = 0, za(), Mt = 0;
  }
}
function qa() {
  var t = qt.now(), n = t - mn;
  n > xr && (vn -= n, mn = t);
}
function za() {
  for (var t, n = gn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : gn = e);
  Rt = t, In(r);
}
function In(t) {
  if (!Yt) {
    Lt && (Lt = clearTimeout(Lt));
    var n = t - Mt;
    n > 24 ? (t < 1 / 0 && (Lt = setTimeout(Re, t - qt.now() - vn)), It && (It = clearInterval(It))) : (It || (mn = qt.now(), It = setInterval(qa, xr)), Yt = 1, _r(Re));
  }
}
function We(t, n, e) {
  var r = new pn();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var Xa = ee("start", "end", "cancel", "interrupt"), Ba = [], br = 0, Ln = 1, Rn = 2, on = 3, Pe = 4, Wn = 5, un = 6;
function xn(t, n, e, r, i, o) {
  var u = t.__transition;
  if (!u)
    t.__transition = {};
  else if (e in u)
    return;
  Za(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Xa,
    tween: Ba,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: br
  });
}
function ie(t, n) {
  var e = it(t, n);
  if (e.state > br)
    throw new Error("too late; already scheduled");
  return e;
}
function st(t, n) {
  var e = it(t, n);
  if (e.state > on)
    throw new Error("too late; already running");
  return e;
}
function it(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function Za(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Mr(o, 0, e.time);
  function o(a) {
    e.state = Ln, e.timer.restart(u, e.delay, e.time), e.delay <= a && u(a - e.delay);
  }
  function u(a) {
    var f, h, l, d;
    if (e.state !== Ln)
      return c();
    for (f in r)
      if (d = r[f], d.name === e.name) {
        if (d.state === on)
          return We(u);
        d.state === Pe ? (d.state = un, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[f]) : +f < n && (d.state = un, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[f]);
      }
    if (We(function() {
      e.state === on && (e.state = Pe, e.timer.restart(s, e.delay, e.time), s(a));
    }), e.state = Rn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Rn) {
      for (e.state = on, i = new Array(l = e.tween.length), f = 0, h = -1; f < l; ++f)
        (d = e.tween[f].value.call(t, t.__data__, e.index, e.group)) && (i[++h] = d);
      i.length = h + 1;
    }
  }
  function s(a) {
    for (var f = a < e.duration ? e.ease.call(null, a / e.duration) : (e.timer.restart(c), e.state = Wn, 1), h = -1, l = i.length; ++h < l; )
      i[h].call(t, f);
    e.state === Wn && (e.on.call("end", t, t.__data__, e.index, e.group), c());
  }
  function c() {
    e.state = un, e.timer.stop(), delete r[n];
    for (var a in r)
      return;
    delete t.__transition;
  }
}
function Ga(t, n) {
  var e = t.__transition, r, i, o = !0, u;
  if (e) {
    n = n == null ? null : n + "";
    for (u in e) {
      if ((r = e[u]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Rn && r.state < Wn, r.state = un, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[u];
    }
    o && delete t.__transition;
  }
}
function Ja(t) {
  return this.each(function() {
    Ga(this, t);
  });
}
function Qa(t, n) {
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
function Ka(t, n, e) {
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
function ja(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = it(this.node(), e).tween, i = 0, o = r.length, u; i < o; ++i)
      if ((u = r[i]).name === t)
        return u.value;
    return null;
  }
  return this.each((n == null ? Qa : Ka)(e, t, n));
}
function oe(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = st(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return it(i, r).value[n];
  };
}
function $r(t, n) {
  var e;
  return (typeof n == "number" ? et : n instanceof pt ? cn : (e = pt(n)) ? (n = e, cn) : Je)(t, n);
}
function ts(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ns(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function es(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var u = this.getAttribute(t);
    return u === i ? null : u === r ? o : o = n(r = u, e);
  };
}
function rs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var u = this.getAttributeNS(t.space, t.local);
    return u === i ? null : u === r ? o : o = n(r = u, e);
  };
}
function is(t, n, e) {
  var r, i, o;
  return function() {
    var u, s = e(this), c;
    return s == null ? void this.removeAttribute(t) : (u = this.getAttribute(t), c = s + "", u === c ? null : u === r && c === i ? o : (i = c, o = n(r = u, s)));
  };
}
function os(t, n, e) {
  var r, i, o;
  return function() {
    var u, s = e(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (u = this.getAttributeNS(t.space, t.local), c = s + "", u === c ? null : u === r && c === i ? o : (i = c, o = n(r = u, s)));
  };
}
function us(t, n) {
  var e = wn(t), r = e === "transform" ? Si : $r;
  return this.attrTween(t, typeof n == "function" ? (e.local ? os : is)(e, r, oe(this, "attr." + t, n)) : n == null ? (e.local ? ns : ts)(e) : (e.local ? rs : es)(e, r, n));
}
function as(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function ss(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function cs(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && ss(t, o)), e;
  }
  return i._value = n, i;
}
function fs(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && as(t, o)), e;
  }
  return i._value = n, i;
}
function ls(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = wn(t);
  return this.tween(e, (r.local ? cs : fs)(r, n));
}
function hs(t, n) {
  return function() {
    ie(this, t).delay = +n.apply(this, arguments);
  };
}
function ds(t, n) {
  return n = +n, function() {
    ie(this, t).delay = n;
  };
}
function gs(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? hs : ds)(n, t)) : it(this.node(), n).delay;
}
function ms(t, n) {
  return function() {
    st(this, t).duration = +n.apply(this, arguments);
  };
}
function ps(t, n) {
  return n = +n, function() {
    st(this, t).duration = n;
  };
}
function ys(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ms : ps)(n, t)) : it(this.node(), n).duration;
}
function ws(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    st(this, t).ease = n;
  };
}
function vs(t) {
  var n = this._id;
  return arguments.length ? this.each(ws(n, t)) : it(this.node(), n).ease;
}
function xs(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    st(this, t).ease = e;
  };
}
function _s(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(xs(this._id, t));
}
function Ms(t) {
  typeof t != "function" && (t = fr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], u = o.length, s = r[i] = [], c, a = 0; a < u; ++a)
      (c = o[a]) && t.call(c, c.__data__, a, o) && s.push(c);
  return new at(r, this._parents, this._name, this._id);
}
function bs(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), s = 0; s < o; ++s)
    for (var c = n[s], a = e[s], f = c.length, h = u[s] = new Array(f), l, d = 0; d < f; ++d)
      (l = c[d] || a[d]) && (h[d] = l);
  for (; s < r; ++s)
    u[s] = n[s];
  return new at(u, this._parents, this._name, this._id);
}
function $s(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Ts(t, n, e) {
  var r, i, o = $s(n) ? ie : st;
  return function() {
    var u = o(this, t), s = u.on;
    s !== r && (i = (r = s).copy()).on(n, e), u.on = i;
  };
}
function Ss(t, n) {
  var e = this._id;
  return arguments.length < 2 ? it(this.node(), e).on.on(t) : this.each(Ts(e, t, n));
}
function ks(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function Cs() {
  return this.on("end.remove", ks(this._id));
}
function Ds(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = te(t));
  for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u)
    for (var s = r[u], c = s.length, a = o[u] = new Array(c), f, h, l = 0; l < c; ++l)
      (f = s[l]) && (h = t.call(f, f.__data__, l, s)) && ("__data__" in f && (h.__data__ = f.__data__), a[l] = h, xn(a[l], n, e, l, a, it(f, e)));
  return new at(o, this._parents, n, e);
}
function As(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = cr(t));
  for (var r = this._groups, i = r.length, o = [], u = [], s = 0; s < i; ++s)
    for (var c = r[s], a = c.length, f, h = 0; h < a; ++h)
      if (f = c[h]) {
        for (var l = t.call(f, f.__data__, h, c), d, C = it(f, e), k = 0, F = l.length; k < F; ++k)
          (d = l[k]) && xn(d, n, e, k, l, C);
        o.push(l), u.push(f);
      }
  return new at(o, u, n, e);
}
var Ns = Zt.prototype.constructor;
function Us() {
  return new Ns(this._groups, this._parents);
}
function Fs(t, n) {
  var e, r, i;
  return function() {
    var o = Ft(this, t), u = (this.style.removeProperty(t), Ft(this, t));
    return o === u ? null : o === e && u === r ? i : i = n(e = o, r = u);
  };
}
function Tr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ys(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var u = Ft(this, t);
    return u === i ? null : u === r ? o : o = n(r = u, e);
  };
}
function Hs(t, n, e) {
  var r, i, o;
  return function() {
    var u = Ft(this, t), s = e(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), Ft(this, t))), u === c ? null : u === r && c === i ? o : (i = c, o = n(r = u, s));
  };
}
function Os(t, n) {
  var e, r, i, o = "style." + n, u = "end." + o, s;
  return function() {
    var c = st(this, t), a = c.on, f = c.value[o] == null ? s || (s = Tr(n)) : void 0;
    (a !== e || i !== f) && (r = (e = a).copy()).on(u, i = f), c.on = r;
  };
}
function Es(t, n, e) {
  var r = (t += "") == "transform" ? Ti : $r;
  return n == null ? this.styleTween(t, Fs(t, r)).on("end.style." + t, Tr(t)) : typeof n == "function" ? this.styleTween(t, Hs(t, r, oe(this, "style." + t, n))).each(Os(this._id, t)) : this.styleTween(t, Ys(t, r, n), e).on("end.style." + t, null);
}
function Is(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Ls(t, n, e) {
  var r, i;
  function o() {
    var u = n.apply(this, arguments);
    return u !== i && (r = (i = u) && Is(t, u, e)), r;
  }
  return o._value = n, o;
}
function Rs(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, Ls(t, n, e ?? ""));
}
function Ws(t) {
  return function() {
    this.textContent = t;
  };
}
function Ps(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Vs(t) {
  return this.tween("text", typeof t == "function" ? Ps(oe(this, "text", t)) : Ws(t == null ? "" : t + ""));
}
function qs(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function zs(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && qs(i)), n;
  }
  return r._value = t, r;
}
function Xs(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, zs(t));
}
function Bs() {
  for (var t = this._name, n = this._id, e = Sr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var u = r[o], s = u.length, c, a = 0; a < s; ++a)
      if (c = u[a]) {
        var f = it(c, n);
        xn(c, t, e, a, u, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new at(r, this._parents, t, e);
}
function Zs() {
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
var Gs = 0;
function at(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Sr() {
  return ++Gs;
}
var ft = Zt.prototype;
at.prototype = {
  constructor: at,
  select: Ds,
  selectAll: As,
  selectChild: ft.selectChild,
  selectChildren: ft.selectChildren,
  filter: Ms,
  merge: bs,
  selection: Us,
  transition: Bs,
  call: ft.call,
  nodes: ft.nodes,
  node: ft.node,
  size: ft.size,
  empty: ft.empty,
  each: ft.each,
  on: Ss,
  attr: us,
  attrTween: ls,
  style: Es,
  styleTween: Rs,
  text: Vs,
  textTween: Xs,
  remove: Cs,
  tween: ja,
  delay: gs,
  duration: ys,
  ease: vs,
  easeVarying: _s,
  end: Zs,
  [Symbol.iterator]: ft[Symbol.iterator]
};
function Js(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Qs = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Js
};
function Ks(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function js(t) {
  var n, e;
  t instanceof at ? (n = t._id, t = t._name) : (n = Sr(), (e = Qs).time = re(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var u = r[o], s = u.length, c, a = 0; a < s; ++a)
      (c = u[a]) && xn(c, t, n, a, u, e || Ks(c, n));
  return new at(r, this._parents, t, n);
}
Zt.prototype.interrupt = Ja;
Zt.prototype.transition = js;
var tc = [null];
function nc(t, n) {
  var e = t.__transition, r, i;
  if (e) {
    n = n == null ? null : n + "";
    for (i in e)
      if ((r = e[i]).state > Ln && r.name === n)
        return new at([[t]], tc, n, +i);
  }
  return null;
}
const ec = { passive: !1 }, zt = { capture: !0, passive: !1 };
function An(t) {
  t.stopImmediatePropagation();
}
function At(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function rc(t) {
  var n = t.document.documentElement, e = ut(t).on("dragstart.drag", At, zt);
  "onselectstart" in n ? e.on("selectstart.drag", At, zt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function ic(t, n) {
  var e = t.document.documentElement, r = ut(t).on("dragstart.drag", null);
  n && (r.on("click.drag", At, zt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const jt = (t) => () => t;
function Pn(t, {
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
Pn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function oc(t) {
  return !t.ctrlKey && !t.button;
}
function uc() {
  return this.parentNode;
}
function ac(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function sc() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function cc() {
  var t = oc, n = uc, e = ac, r = sc, i = {}, o = ee("start", "drag", "end"), u = 0, s, c, a, f, h = 0;
  function l(y) {
    y.on("mousedown.drag", d).filter(r).on("touchstart.drag", F).on("touchmove.drag", E, ec).on("touchend.drag touchcancel.drag", R).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function d(y, T) {
    if (!(f || !t.call(this, y, T))) {
      var g = Y(this, n.call(this, y, T), y, T, "mouse");
      g && (ut(y.view).on("mousemove.drag", C, zt).on("mouseup.drag", k, zt), rc(y.view), An(y), a = !1, s = y.clientX, c = y.clientY, g("start", y));
    }
  }
  function C(y) {
    if (At(y), !a) {
      var T = y.clientX - s, g = y.clientY - c;
      a = T * T + g * g > h;
    }
    i.mouse("drag", y);
  }
  function k(y) {
    ut(y.view).on("mousemove.drag mouseup.drag", null), ic(y.view, a), At(y), i.mouse("end", y);
  }
  function F(y, T) {
    if (t.call(this, y, T)) {
      var g = y.changedTouches, p = n.call(this, y, T), m = g.length, N, A;
      for (N = 0; N < m; ++N)
        (A = Y(this, p, y, T, g[N].identifier, g[N])) && (An(y), A("start", y, g[N]));
    }
  }
  function E(y) {
    var T = y.changedTouches, g = T.length, p, m;
    for (p = 0; p < g; ++p)
      (m = i[T[p].identifier]) && (At(y), m("drag", y, T[p]));
  }
  function R(y) {
    var T = y.changedTouches, g = T.length, p, m;
    for (f && clearTimeout(f), f = setTimeout(function() {
      f = null;
    }, 500), p = 0; p < g; ++p)
      (m = i[T[p].identifier]) && (An(y), m("end", y, T[p]));
  }
  function Y(y, T, g, p, m, N) {
    var A = o.copy(), M = Ie(N || g, T), I, L, S;
    if ((S = e.call(y, new Pn("beforestart", {
      sourceEvent: g,
      target: l,
      identifier: m,
      active: u,
      x: M[0],
      y: M[1],
      dx: 0,
      dy: 0,
      dispatch: A
    }), p)) != null)
      return I = S.x - M[0] || 0, L = S.y - M[1] || 0, function _(v, $, x) {
        var D = M, H;
        switch (v) {
          case "start":
            i[m] = _, H = u++;
            break;
          case "end":
            delete i[m], --u;
          case "drag":
            M = Ie(x || $, T), H = u;
            break;
        }
        A.call(
          v,
          y,
          new Pn(v, {
            sourceEvent: $,
            subject: S,
            target: l,
            identifier: m,
            active: H,
            x: M[0] + I,
            y: M[1] + L,
            dx: M[0] - D[0],
            dy: M[1] - D[1],
            dispatch: A
          }),
          p
        );
      };
  }
  return l.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : jt(!!y), l) : t;
  }, l.container = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : jt(y), l) : n;
  }, l.subject = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : jt(y), l) : e;
  }, l.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : jt(!!y), l) : r;
  }, l.on = function() {
    var y = o.on.apply(o, arguments);
    return y === o ? l : y;
  }, l.clickDistance = function(y) {
    return arguments.length ? (h = (y = +y) * y, l) : Math.sqrt(h);
  }, l;
}
const Ve = { select: ut }, fc = "div.tooltip {        position: absolute;        text-align: center;        padding: 5px;        /* font: 12px sans-serif; */        background: white;        border: 1px solid #AAA;        border-radius: 2px;        pointer-events: none;      }";
function kr(t) {
  Ve.select("head").selectAll("#tooltip").data([1]).enter().append("style").attr("id", "tooltip").text(fc);
  const n = Ve.select("body").append("div").attr("class", "tooltip").style("opacity", 0);
  return n.show = function(e) {
    n.transition().duration(100).style("opacity", 0.95), n.html(t.apply(null, arguments)).style("left", e.pageX + "px").style("top", e.pageY - 28 + "px");
  }, n.hide = function(e) {
    n.transition().duration(100).style("opacity", 0);
  }, n;
}
function lc(t) {
  return ze(t.nodes().map((n) => n.getComputedTextLength()));
}
function hc(t) {
  return function(n) {
    return n.length > t ? n.slice(0, t - 1) + "…" : n;
  };
}
const St = 1, dc = 2;
function Cr(t, n) {
  let e = ["#FFF", "#EEE"], r = 5, i, o = "#AAA", u = 40, s = 100, c;
  function a(f) {
    let h = n.domain(), l = kr((T) => T), d = Vt(e), C = Vt(e.reverse()), k = hc(u), F = f.selectAll(".row").data(h, n).order(), E = F.enter().append("g").attr("class", "row"), R = F.exit(), Y = F.select("text");
    F = F.merge(E).attr("transform", (T) => "translate(0," + n(T) + ")"), R.remove(), E.append("rect").attr("y", 0.5).attr("width", s).attr("height", n.bandwidth()).attr("stroke", o).attr("stroke-width", 0.75).attr("fill", d), E.append("path").attr("stroke", C), Y = Y.merge(
      E.append("text").attr("y", n.bandwidth() / 2).attr("dy", "0.32em").on("mouseover", function(T, g) {
        ut(this).text() != g && l.show(g);
      }).on("mouseout", l.hide)
    ).text(k), c === void 0 && (c = lc(Y) + 2 * r, c = t === St ? s - c : c), i = t === St ? [0, c] : [c, s], Y.attr("text-anchor", t === St ? "start" : "end").attr("dx", t === St ? r : -r).attr("x", c);
    const y = function(T, g) {
      c = Math.max(10, Math.min(s - 10, c + T.dx)), ut(this).attr("d", "M" + c + ",0.5V" + n.range()[1]), Y.attr("x", c), i = t === St ? [0, c] : [c, s], f.dispatch("offset", { detail: { offset: c } });
    };
    f.selectAll("g.y.axis > path").data([1]).join("path").attr("stroke", o).attr("stroke-width", 1.75).attr("d", "M" + (c + 0.5) + ",0.5V" + n.range()[1]).style("cursor", "ew-resize").call(cc().on("drag", y));
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
function gc(t) {
  return Cr(dc, t);
}
function mc(t) {
  return Cr(St, t);
}
var ue = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ae(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Dr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(ue, function() {
    var e = 1e3, r = 6e4, i = 36e5, o = "millisecond", u = "second", s = "minute", c = "hour", a = "day", f = "week", h = "month", l = "quarter", d = "year", C = "date", k = "Invalid Date", F = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, E = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, R = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(S) {
      var _ = ["th", "st", "nd", "rd"], v = S % 100;
      return "[" + S + (_[(v - 20) % 10] || _[v] || _[0]) + "]";
    } }, Y = function(S, _, v) {
      var $ = String(S);
      return !$ || $.length >= _ ? S : "" + Array(_ + 1 - $.length).join(v) + S;
    }, y = { s: Y, z: function(S) {
      var _ = -S.utcOffset(), v = Math.abs(_), $ = Math.floor(v / 60), x = v % 60;
      return (_ <= 0 ? "+" : "-") + Y($, 2, "0") + ":" + Y(x, 2, "0");
    }, m: function S(_, v) {
      if (_.date() < v.date())
        return -S(v, _);
      var $ = 12 * (v.year() - _.year()) + (v.month() - _.month()), x = _.clone().add($, h), D = v - x < 0, H = _.clone().add($ + (D ? -1 : 1), h);
      return +(-($ + (v - x) / (D ? x - H : H - x)) || 0);
    }, a: function(S) {
      return S < 0 ? Math.ceil(S) || 0 : Math.floor(S);
    }, p: function(S) {
      return { M: h, y: d, w: f, d: a, D: C, h: c, m: s, s: u, ms: o, Q: l }[S] || String(S || "").toLowerCase().replace(/s$/, "");
    }, u: function(S) {
      return S === void 0;
    } }, T = "en", g = {};
    g[T] = R;
    var p = "$isDayjsObject", m = function(S) {
      return S instanceof I || !(!S || !S[p]);
    }, N = function S(_, v, $) {
      var x;
      if (!_)
        return T;
      if (typeof _ == "string") {
        var D = _.toLowerCase();
        g[D] && (x = D), v && (g[D] = v, x = D);
        var H = _.split("-");
        if (!x && H.length > 1)
          return S(H[0]);
      } else {
        var P = _.name;
        g[P] = _, x = P;
      }
      return !$ && x && (T = x), x || !$ && T;
    }, A = function(S, _) {
      if (m(S))
        return S.clone();
      var v = typeof _ == "object" ? _ : {};
      return v.date = S, v.args = arguments, new I(v);
    }, M = y;
    M.l = N, M.i = m, M.w = function(S, _) {
      return A(S, { locale: _.$L, utc: _.$u, x: _.$x, $offset: _.$offset });
    };
    var I = function() {
      function S(v) {
        this.$L = N(v.locale, null, !0), this.parse(v), this.$x = this.$x || v.x || {}, this[p] = !0;
      }
      var _ = S.prototype;
      return _.parse = function(v) {
        this.$d = function($) {
          var x = $.date, D = $.utc;
          if (x === null)
            return /* @__PURE__ */ new Date(NaN);
          if (M.u(x))
            return /* @__PURE__ */ new Date();
          if (x instanceof Date)
            return new Date(x);
          if (typeof x == "string" && !/Z$/i.test(x)) {
            var H = x.match(F);
            if (H) {
              var P = H[2] - 1 || 0, q = (H[7] || "0").substring(0, 3);
              return D ? new Date(Date.UTC(H[1], P, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, q)) : new Date(H[1], P, H[3] || 1, H[4] || 0, H[5] || 0, H[6] || 0, q);
            }
          }
          return new Date(x);
        }(v), this.init();
      }, _.init = function() {
        var v = this.$d;
        this.$y = v.getFullYear(), this.$M = v.getMonth(), this.$D = v.getDate(), this.$W = v.getDay(), this.$H = v.getHours(), this.$m = v.getMinutes(), this.$s = v.getSeconds(), this.$ms = v.getMilliseconds();
      }, _.$utils = function() {
        return M;
      }, _.isValid = function() {
        return this.$d.toString() !== k;
      }, _.isSame = function(v, $) {
        var x = A(v);
        return this.startOf($) <= x && x <= this.endOf($);
      }, _.isAfter = function(v, $) {
        return A(v) < this.startOf($);
      }, _.isBefore = function(v, $) {
        return this.endOf($) < A(v);
      }, _.$g = function(v, $, x) {
        return M.u(v) ? this[$] : this.set(x, v);
      }, _.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, _.valueOf = function() {
        return this.$d.getTime();
      }, _.startOf = function(v, $) {
        var x = this, D = !!M.u($) || $, H = M.p(v), P = function(b, U) {
          var O = M.w(x.$u ? Date.UTC(x.$y, U, b) : new Date(x.$y, U, b), x);
          return D ? O : O.endOf(a);
        }, q = function(b, U) {
          return M.w(x.toDate()[b].apply(x.toDate("s"), (D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(U)), x);
        }, z = this.$W, Z = this.$M, J = this.$D, mt = "set" + (this.$u ? "UTC" : "");
        switch (H) {
          case d:
            return D ? P(1, 0) : P(31, 11);
          case h:
            return D ? P(1, Z) : P(0, Z + 1);
          case f:
            var ct = this.$locale().weekStart || 0, yt = (z < ct ? z + 7 : z) - ct;
            return P(D ? J - yt : J + (6 - yt), Z);
          case a:
          case C:
            return q(mt + "Hours", 0);
          case c:
            return q(mt + "Minutes", 1);
          case s:
            return q(mt + "Seconds", 2);
          case u:
            return q(mt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, _.endOf = function(v) {
        return this.startOf(v, !1);
      }, _.$set = function(v, $) {
        var x, D = M.p(v), H = "set" + (this.$u ? "UTC" : ""), P = (x = {}, x[a] = H + "Date", x[C] = H + "Date", x[h] = H + "Month", x[d] = H + "FullYear", x[c] = H + "Hours", x[s] = H + "Minutes", x[u] = H + "Seconds", x[o] = H + "Milliseconds", x)[D], q = D === a ? this.$D + ($ - this.$W) : $;
        if (D === h || D === d) {
          var z = this.clone().set(C, 1);
          z.$d[P](q), z.init(), this.$d = z.set(C, Math.min(this.$D, z.daysInMonth())).$d;
        } else
          P && this.$d[P](q);
        return this.init(), this;
      }, _.set = function(v, $) {
        return this.clone().$set(v, $);
      }, _.get = function(v) {
        return this[M.p(v)]();
      }, _.add = function(v, $) {
        var x, D = this;
        v = Number(v);
        var H = M.p($), P = function(Z) {
          var J = A(D);
          return M.w(J.date(J.date() + Math.round(Z * v)), D);
        };
        if (H === h)
          return this.set(h, this.$M + v);
        if (H === d)
          return this.set(d, this.$y + v);
        if (H === a)
          return P(1);
        if (H === f)
          return P(7);
        var q = (x = {}, x[s] = r, x[c] = i, x[u] = e, x)[H] || 1, z = this.$d.getTime() + v * q;
        return M.w(z, this);
      }, _.subtract = function(v, $) {
        return this.add(-1 * v, $);
      }, _.format = function(v) {
        var $ = this, x = this.$locale();
        if (!this.isValid())
          return x.invalidDate || k;
        var D = v || "YYYY-MM-DDTHH:mm:ssZ", H = M.z(this), P = this.$H, q = this.$m, z = this.$M, Z = x.weekdays, J = x.months, mt = x.meridiem, ct = function(U, O, w, X) {
          return U && (U[O] || U($, D)) || w[O].slice(0, X);
        }, yt = function(U) {
          return M.s(P % 12 || 12, U, "0");
        }, b = mt || function(U, O, w) {
          var X = U < 12 ? "AM" : "PM";
          return w ? X.toLowerCase() : X;
        };
        return D.replace(E, function(U, O) {
          return O || function(w) {
            switch (w) {
              case "YY":
                return String($.$y).slice(-2);
              case "YYYY":
                return M.s($.$y, 4, "0");
              case "M":
                return z + 1;
              case "MM":
                return M.s(z + 1, 2, "0");
              case "MMM":
                return ct(x.monthsShort, z, J, 3);
              case "MMMM":
                return ct(J, z);
              case "D":
                return $.$D;
              case "DD":
                return M.s($.$D, 2, "0");
              case "d":
                return String($.$W);
              case "dd":
                return ct(x.weekdaysMin, $.$W, Z, 2);
              case "ddd":
                return ct(x.weekdaysShort, $.$W, Z, 3);
              case "dddd":
                return Z[$.$W];
              case "H":
                return String(P);
              case "HH":
                return M.s(P, 2, "0");
              case "h":
                return yt(1);
              case "hh":
                return yt(2);
              case "a":
                return b(P, q, !0);
              case "A":
                return b(P, q, !1);
              case "m":
                return String(q);
              case "mm":
                return M.s(q, 2, "0");
              case "s":
                return String($.$s);
              case "ss":
                return M.s($.$s, 2, "0");
              case "SSS":
                return M.s($.$ms, 3, "0");
              case "Z":
                return H;
            }
            return null;
          }(U) || H.replace(":", "");
        });
      }, _.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, _.diff = function(v, $, x) {
        var D, H = this, P = M.p($), q = A(v), z = (q.utcOffset() - this.utcOffset()) * r, Z = this - q, J = function() {
          return M.m(H, q);
        };
        switch (P) {
          case d:
            D = J() / 12;
            break;
          case h:
            D = J();
            break;
          case l:
            D = J() / 3;
            break;
          case f:
            D = (Z - z) / 6048e5;
            break;
          case a:
            D = (Z - z) / 864e5;
            break;
          case c:
            D = Z / i;
            break;
          case s:
            D = Z / r;
            break;
          case u:
            D = Z / e;
            break;
          default:
            D = Z;
        }
        return x ? D : M.a(D);
      }, _.daysInMonth = function() {
        return this.endOf(h).$D;
      }, _.$locale = function() {
        return g[this.$L];
      }, _.locale = function(v, $) {
        if (!v)
          return this.$L;
        var x = this.clone(), D = N(v, $, !0);
        return D && (x.$L = D), x;
      }, _.clone = function() {
        return M.w(this.$d, this);
      }, _.toDate = function() {
        return new Date(this.valueOf());
      }, _.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, _.toISOString = function() {
        return this.$d.toISOString();
      }, _.toString = function() {
        return this.$d.toUTCString();
      }, S;
    }(), L = I.prototype;
    return A.prototype = L, [["$ms", o], ["$s", u], ["$m", s], ["$H", c], ["$W", a], ["$M", h], ["$y", d], ["$D", C]].forEach(function(S) {
      L[S[1]] = function(_) {
        return this.$g(_, S[0], S[1]);
      };
    }), A.extend = function(S, _) {
      return S.$i || (S(_, I, A), S.$i = !0), A;
    }, A.locale = N, A.isDayjs = m, A.unix = function(S) {
      return A(1e3 * S);
    }, A.en = g[T], A.Ls = g, A.p = {}, A;
  });
})(Dr);
var pc = Dr.exports;
const se = /* @__PURE__ */ ae(pc);
var Ar = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(ue, function() {
    var e, r, i = 1e3, o = 6e4, u = 36e5, s = 864e5, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, f = 2628e6, h = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, l = { years: a, months: f, days: s, hours: u, minutes: o, seconds: i, milliseconds: 1, weeks: 6048e5 }, d = function(g) {
      return g instanceof y;
    }, C = function(g, p, m) {
      return new y(g, m, p.$l);
    }, k = function(g) {
      return r.p(g) + "s";
    }, F = function(g) {
      return g < 0;
    }, E = function(g) {
      return F(g) ? Math.ceil(g) : Math.floor(g);
    }, R = function(g) {
      return Math.abs(g);
    }, Y = function(g, p) {
      return g ? F(g) ? { negative: !0, format: "" + R(g) + p } : { negative: !1, format: "" + g + p } : { negative: !1, format: "" };
    }, y = function() {
      function g(m, N, A) {
        var M = this;
        if (this.$d = {}, this.$l = A, m === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), N)
          return C(m * l[k(N)], this);
        if (typeof m == "number")
          return this.$ms = m, this.parseFromMilliseconds(), this;
        if (typeof m == "object")
          return Object.keys(m).forEach(function(S) {
            M.$d[k(S)] = m[S];
          }), this.calMilliseconds(), this;
        if (typeof m == "string") {
          var I = m.match(h);
          if (I) {
            var L = I.slice(2).map(function(S) {
              return S != null ? Number(S) : 0;
            });
            return this.$d.years = L[0], this.$d.months = L[1], this.$d.weeks = L[2], this.$d.days = L[3], this.$d.hours = L[4], this.$d.minutes = L[5], this.$d.seconds = L[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var p = g.prototype;
      return p.calMilliseconds = function() {
        var m = this;
        this.$ms = Object.keys(this.$d).reduce(function(N, A) {
          return N + (m.$d[A] || 0) * l[A];
        }, 0);
      }, p.parseFromMilliseconds = function() {
        var m = this.$ms;
        this.$d.years = E(m / a), m %= a, this.$d.months = E(m / f), m %= f, this.$d.days = E(m / s), m %= s, this.$d.hours = E(m / u), m %= u, this.$d.minutes = E(m / o), m %= o, this.$d.seconds = E(m / i), m %= i, this.$d.milliseconds = m;
      }, p.toISOString = function() {
        var m = Y(this.$d.years, "Y"), N = Y(this.$d.months, "M"), A = +this.$d.days || 0;
        this.$d.weeks && (A += 7 * this.$d.weeks);
        var M = Y(A, "D"), I = Y(this.$d.hours, "H"), L = Y(this.$d.minutes, "M"), S = this.$d.seconds || 0;
        this.$d.milliseconds && (S += this.$d.milliseconds / 1e3, S = Math.round(1e3 * S) / 1e3);
        var _ = Y(S, "S"), v = m.negative || N.negative || M.negative || I.negative || L.negative || _.negative, $ = I.format || L.format || _.format ? "T" : "", x = (v ? "-" : "") + "P" + m.format + N.format + M.format + $ + I.format + L.format + _.format;
        return x === "P" || x === "-P" ? "P0D" : x;
      }, p.toJSON = function() {
        return this.toISOString();
      }, p.format = function(m) {
        var N = m || "YYYY-MM-DDTHH:mm:ss", A = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return N.replace(c, function(M, I) {
          return I || String(A[M]);
        });
      }, p.as = function(m) {
        return this.$ms / l[k(m)];
      }, p.get = function(m) {
        var N = this.$ms, A = k(m);
        return A === "milliseconds" ? N %= 1e3 : N = A === "weeks" ? E(N / l[A]) : this.$d[A], N || 0;
      }, p.add = function(m, N, A) {
        var M;
        return M = N ? m * l[k(N)] : d(m) ? m.$ms : C(m, this).$ms, C(this.$ms + M * (A ? -1 : 1), this);
      }, p.subtract = function(m, N) {
        return this.add(m, N, !0);
      }, p.locale = function(m) {
        var N = this.clone();
        return N.$l = m, N;
      }, p.clone = function() {
        return C(this.$ms, this);
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
    }(), T = function(g, p, m) {
      return g.add(p.years() * m, "y").add(p.months() * m, "M").add(p.days() * m, "d").add(p.hours() * m, "h").add(p.minutes() * m, "m").add(p.seconds() * m, "s").add(p.milliseconds() * m, "ms");
    };
    return function(g, p, m) {
      e = m, r = m().$utils(), m.duration = function(M, I) {
        var L = m.locale();
        return C(M, { $l: L }, I);
      }, m.isDuration = d;
      var N = p.prototype.add, A = p.prototype.subtract;
      p.prototype.add = function(M, I) {
        return d(M) ? T(this, M, 1) : N.bind(this)(M, I);
      }, p.prototype.subtract = function(M, I) {
        return d(M) ? T(this, M, -1) : A.bind(this)(M, I);
      };
    };
  });
})(Ar);
var yc = Ar.exports;
const wc = /* @__PURE__ */ ae(yc);
var Nr = { exports: {} };
(function(t, n) {
  (function(e, r) {
    t.exports = r();
  })(ue, function() {
    return function(e, r, i) {
      e = e || {};
      var o = r.prototype, u = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function s(a, f, h, l) {
        return o.fromToBase(a, f, h, l);
      }
      i.en.relativeTime = u, o.fromToBase = function(a, f, h, l, d) {
        for (var C, k, F, E = h.$locale().relativeTime || u, R = e.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], Y = R.length, y = 0; y < Y; y += 1) {
          var T = R[y];
          T.d && (C = l ? i(a).diff(h, T.d, !0) : h.diff(a, T.d, !0));
          var g = (e.rounding || Math.round)(Math.abs(C));
          if (F = C > 0, g <= T.r || !T.r) {
            g <= 1 && y > 0 && (T = R[y - 1]);
            var p = E[T.l];
            d && (g = d("" + g)), k = typeof p == "string" ? p.replace("%d", g) : p(g, f, T.l, F);
            break;
          }
        }
        if (f)
          return k;
        var m = F ? E.future : E.past;
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
})(Nr);
var vc = Nr.exports;
const xc = /* @__PURE__ */ ae(vc);
se.extend(wc);
se.extend(xc);
function _c(t, n) {
  return se.duration(n - t).humanize();
}
function Nn() {
  const t = Array.prototype.slice.call(arguments, 0);
  return function(n) {
    return t.reduce((e, r) => r(e), n);
  };
}
function tn(t) {
  return function(n) {
    return t === void 0 ? n : n[t];
  };
}
const Mc = [
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
function bc(t) {
  const n = window.getComputedStyle(t, null).getPropertyValue("font-size");
  return parseFloat(n);
}
function $c(t) {
  return t.r * 0.299 + t.g * 0.587 + t.b * 0.114;
}
function Tc(t) {
  return $c(t) > 165;
}
function Sc(t) {
  return Tc(pt(t)) ? "black" : "white";
}
function nn(t, n) {
  return "translate(" + t + "," + n + ")";
}
function kc() {
  let t = Mc, n = 5, e = !1, r = !1, i, o, u = 0, s = tn(0), c = tn(1), a = tn(2), f = tn(3);
  function h(k) {
    k.each(function(F, E) {
      const R = ut(this.parentNode), Y = R.select("text"), y = R.select("rect"), T = y.attr("width") - 2 * n, g = c(F);
      Y.text(g);
      let p = Y.node().getComputedTextLength();
      if (p > T) {
        const m = T < 0 ? 0 : T / p, N = Math.floor(g.length * m);
        Y.text(N > 2 ? g.slice(0, N - 2) + "…" : "");
      }
    });
  }
  function l(k, F) {
    nc(this).tween("text", function() {
      return function(E) {
        h(ut(this));
      };
    });
  }
  function d(k) {
    const F = k.datum(), E = new Set(zr(F, s)), R = new kr(C), Y = Vt(t);
    i = i || [Vr(F, a), ze(F, f)], r && (i = (void 0)(i.concat(/* @__PURE__ */ new Date()))), k.each(function(y) {
      const T = o || this.getBoundingClientRect().width, g = E.size * (bc(this) + 4 * n), p = Ze().domain(E).range([0, g]), m = ou().domain(i), N = (e ? mc : gc)(p).width(T), A = ut(this).selectAll("svg").data([1]).join("svg");
      A.attr("class", "timeline").attr("width", T).attr("height", g + 20);
      const M = A.append("g"), I = M.append("g").attr("class", "y axis").call(N);
      let L = N.range();
      m.range([L[0] + n, L[1] - n]).clamp(!0);
      const S = jr(m), _ = M.append("g").attr("class", "x axis").attr("transform", nn(0, g)).call(S);
      I.on("offset", () => {
        L = N.range(), m.range([L[0] + n, L[1] - n]).clamp(!0), S.ticks(Math.min((L[1] - L[0]) / 70, 10)), _.call(S), $.attr("transform", (D) => nn(m(a(D)), p(s(D)))).selectAll("rect").attr("width", (D) => m(f(D)) - m(a(D))).call(h), I.call(N.draw_ticks, m.ticks().map(m));
      }), _.select(".domain").remove(), _.selectAll(".tick line").attr("stroke", "#AAA");
      const v = m.ticks().map(m);
      I.call(N.draw_ticks, v);
      let $ = M.selectAll("g.task").data(y);
      $.exit().remove();
      const x = $.enter().append("g").classed("task", !0);
      x.append("rect").attr("y", n).attr("height", p.bandwidth() - 2 * n).on("mouseover", R.show).on("mouseout", R.hide).style("fill", Nn(c, Y)), x.append("text").attr("text-anchor", "start").attr("fill", Nn(c, Y, Sc)).attr("pointer-events", "none").attr("dx", n).attr("y", p.bandwidth() / 2).attr("dy", "0.32em").text(c), $ = $.merge(x), $.attr("transform", (D) => nn(L[0], p(s(D)))).selectAll("rect").attr("width", 0), $.transition().duration(u).attr("transform", (D) => nn(m(a(D)), p(s(D)))).selectAll("rect").attr("width", (D) => m(f(D)) - m(a(D))).on("start", l), r && M.append("path").attr("stroke", "red").attr("d", "M" + m(/* @__PURE__ */ new Date()) + ",0.5V" + g);
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
  function C(k, F) {
    const E = Nn(eu, jn("%Y-%m-%d"));
    return "<b>" + c(F) + '</b><hr style="margin: 2px 0 2px 0">' + E(a(F)) + " - " + E(f(F)) + "<br>" + _c(a(F), f(F));
  }
}
export {
  _c as durationFormat,
  kc as timeline,
  gc as timelineAxisLeft,
  mc as timelineAxisRight,
  kr as tooltip
};
