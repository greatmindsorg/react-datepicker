"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("react"),
  t = require("prop-types"),
  a = require("classnames"),
  r = require("date-fns/isDate"),
  n = require("date-fns/isValid"),
  o = require("date-fns/format"),
  s = require("date-fns/addMinutes"),
  l = require("date-fns/addHours"),
  i = require("date-fns/addDays"),
  u = require("date-fns/addWeeks"),
  d = require("date-fns/addMonths"),
  p = require("date-fns/addYears");
require("date-fns/subMinutes"), require("date-fns/subHours");
var c = require("date-fns/subDays"),
  f = require("date-fns/subWeeks"),
  h = require("date-fns/subMonths"),
  m = require("date-fns/subYears"),
  D = require("date-fns/getSeconds"),
  y = require("date-fns/getMinutes"),
  b = require("date-fns/getHours"),
  v = require("date-fns/getDay"),
  g = require("date-fns/getDate"),
  w = require("date-fns/getISOWeek"),
  k = require("date-fns/getMonth"),
  C = require("date-fns/getQuarter"),
  S = require("date-fns/getYear"),
  M = require("date-fns/getTime"),
  _ = require("date-fns/setSeconds"),
  O = require("date-fns/setMinutes"),
  P = require("date-fns/setHours"),
  N = require("date-fns/setMonth"),
  x = require("date-fns/setQuarter"),
  T = require("date-fns/setYear"),
  E = require("date-fns/min"),
  I = require("date-fns/max"),
  Y = require("date-fns/differenceInCalendarDays"),
  L = require("date-fns/differenceInCalendarMonths");
require("date-fns/differenceInCalendarWeeks");
var R = require("date-fns/differenceInCalendarYears"),
  F = require("date-fns/startOfDay"),
  A = require("date-fns/startOfWeek"),
  q = require("date-fns/startOfMonth"),
  B = require("date-fns/startOfQuarter"),
  K = require("date-fns/startOfYear"),
  j = require("date-fns/endOfDay");
require("date-fns/endOfWeek");
var W = require("date-fns/endOfMonth"),
  H = require("date-fns/endOfYear"),
  Q = require("date-fns/isEqual"),
  V = require("date-fns/isSameDay"),
  U = require("date-fns/isSameMonth"),
  $ = require("date-fns/isSameYear"),
  z = require("date-fns/isSameQuarter"),
  G = require("date-fns/isAfter"),
  J = require("date-fns/isBefore"),
  X = require("date-fns/isWithinInterval"),
  Z = require("date-fns/toDate"),
  ee = require("date-fns/parse"),
  te = require("date-fns/parseISO"),
  ae = require("react-onclickoutside"),
  re = require("react-dom"),
  ne = require("react-popper"),
  oe = require("date-fns/set");
function se(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var le = se(e),
  ie = se(t),
  ue = se(a),
  de = se(r),
  pe = se(n),
  ce = se(o),
  fe = se(s),
  he = se(l),
  me = se(i),
  De = se(u),
  ye = se(d),
  be = se(p),
  ve = se(c),
  ge = se(f),
  we = se(h),
  ke = se(m),
  Ce = se(D),
  Se = se(y),
  Me = se(b),
  _e = se(v),
  Oe = se(g),
  Pe = se(w),
  Ne = se(k),
  xe = se(C),
  Te = se(S),
  Ee = se(M),
  Ie = se(_),
  Ye = se(O),
  Le = se(P),
  Re = se(N),
  Fe = se(x),
  Ae = se(T),
  qe = se(E),
  Be = se(I),
  Ke = se(Y),
  je = se(L),
  We = se(R),
  He = se(F),
  Qe = se(A),
  Ve = se(q),
  Ue = se(B),
  $e = se(K),
  ze = se(j),
  Ge = se(W),
  Je = se(H),
  Xe = se(Q),
  Ze = se(V),
  et = se(U),
  tt = se($),
  at = se(z),
  rt = se(G),
  nt = se(J),
  ot = se(X),
  st = se(Z),
  lt = se(ee),
  it = se(te),
  ut = se(ae),
  dt = se(re),
  pt = se(oe);
function ct(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      a.push.apply(a, r);
  }
  return a;
}
function ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ct(Object(a), !0).forEach(function (t) {
          bt(e, t, a[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
      : ct(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
  }
  return e;
}
function ht(e) {
  return (ht =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function mt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dt(e, t) {
  for (var a = 0; a < t.length; a++) {
    var r = t[a];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Pt(r.key), r);
  }
}
function yt(e, t, a) {
  return (
    t && Dt(e.prototype, t),
    a && Dt(e, a),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function bt(e, t, a) {
  return (
    (t = Pt(t)) in e
      ? Object.defineProperty(e, t, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = a),
    e
  );
}
function vt() {
  return (vt = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = arguments[t];
          for (var r in a)
            Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
        }
        return e;
      }).apply(this, arguments);
}
function gt(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && kt(e, t);
}
function wt(e) {
  return (wt = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function kt(e, t) {
  return (kt = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
}
function Ct(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function St(e, t) {
  if (t && ("object" == typeof t || "function" == typeof t)) return t;
  if (void 0 !== t)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Ct(e);
}
function Mt(e) {
  var t = (function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  })();
  return function () {
    var a,
      r = wt(e);
    if (t) {
      var n = wt(this).constructor;
      a = Reflect.construct(r, arguments, n);
    } else a = r.apply(this, arguments);
    return St(this, a);
  };
}
function _t(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return Ot(e);
    })(e) ||
    (function (e) {
      if (
        ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e["@@iterator"]
      )
        return Array.from(e);
    })(e) ||
    (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return Ot(e, t);
      var a = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === a && e.constructor && (a = e.constructor.name);
      if ("Map" === a || "Set" === a) return Array.from(e);
      if (
        "Arguments" === a ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
      )
        return Ot(e, t);
    })(e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function Ot(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
  return r;
}
function Pt(e) {
  var t = (function (e, t) {
    if ("object" != typeof e || null === e) return e;
    var a = e[Symbol.toPrimitive];
    if (void 0 !== a) {
      var r = a.call(e, t || "default");
      if ("object" != typeof r) return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
  })(e, "string");
  return "symbol" == typeof t ? t : String(t);
}
function Nt(e, t) {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}
function xt(e, t) {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}
var Tt = {
    p: xt,
    P: function (e, t) {
      var a,
        r = e.match(/(P+)(p+)?/) || [],
        n = r[1],
        o = r[2];
      if (!o) return Nt(e, t);
      switch (n) {
        case "P":
          a = t.dateTime({ width: "short" });
          break;
        case "PP":
          a = t.dateTime({ width: "medium" });
          break;
        case "PPP":
          a = t.dateTime({ width: "long" });
          break;
        case "PPPP":
        default:
          a = t.dateTime({ width: "full" });
      }
      return a.replace("{{date}}", Nt(n, t)).replace("{{time}}", xt(o, t));
    },
  },
  Et = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function It(e) {
  var t = e
    ? "string" == typeof e || e instanceof String
      ? it.default(e)
      : st.default(e)
    : new Date();
  return Lt(t) ? t : null;
}
function Yt(e, t, a, r, n) {
  var o = null,
    s = Zt(a) || Zt(Xt()),
    l = !0;
  return Array.isArray(t)
    ? (t.forEach(function (t) {
        var i = lt.default(e, t, new Date(), { locale: s });
        r && (l = Lt(i, n) && e === Rt(i, t, a)), Lt(i, n) && l && (o = i);
      }),
      o)
    : ((o = lt.default(e, t, new Date(), { locale: s })),
      r
        ? (l = Lt(o) && e === Rt(o, t, a))
        : Lt(o) ||
          ((t = t
            .match(Et)
            .map(function (e) {
              var t = e[0];
              return "p" === t || "P" === t
                ? s
                  ? (0, Tt[t])(e, s.formatLong)
                  : t
                : e;
            })
            .join("")),
          e.length > 0 && (o = lt.default(e, t.slice(0, e.length), new Date())),
          Lt(o) || (o = new Date(e))),
      Lt(o) && l ? o : null);
}
function Lt(e, t) {
  return (t = t || new Date("1/1/1000")), pe.default(e) && !nt.default(e, t);
}
function Rt(e, t, a) {
  if ("en" === a) return ce.default(e, t, { awareOfUnicodeTokens: !0 });
  var r = Zt(a);
  return (
    a &&
      !r &&
      console.warn(
        'A locale object was not found for the provided string ["'.concat(
          a,
          '"].'
        )
      ),
    !r && Xt() && Zt(Xt()) && (r = Zt(Xt())),
    ce.default(e, t, { locale: r || null, awareOfUnicodeTokens: !0 })
  );
}
function Ft(e, t) {
  var a = t.dateFormat,
    r = t.locale;
  return (e && Rt(e, Array.isArray(a) ? a[0] : a, r)) || "";
}
function At(e, t) {
  var a = t.hour,
    r = void 0 === a ? 0 : a,
    n = t.minute,
    o = void 0 === n ? 0 : n,
    s = t.second,
    l = void 0 === s ? 0 : s;
  return Le.default(Ye.default(Ie.default(e, l), o), r);
}
function qt(e, t) {
  var a = (t && Zt(t)) || (Xt() && Zt(Xt()));
  return Pe.default(e, a ? { locale: a } : null);
}
function Bt(e) {
  return He.default(e);
}
function Kt(e, t, a) {
  var r = Zt(t || Xt());
  return Qe.default(e, { locale: r, weekStartsOn: a });
}
function jt(e) {
  return Ve.default(e);
}
function Wt(e) {
  return $e.default(e);
}
function Ht(e) {
  return Ue.default(e);
}
function Qt() {
  return He.default(It());
}
function Vt(e, t) {
  return e && t ? tt.default(e, t) : !e && !t;
}
function Ut(e, t) {
  return e && t ? et.default(e, t) : !e && !t;
}
function $t(e, t) {
  return e && t ? at.default(e, t) : !e && !t;
}
function zt(e, t) {
  return e && t ? Ze.default(e, t) : !e && !t;
}
function Gt(e, t) {
  return e && t ? Xe.default(e, t) : !e && !t;
}
function Jt(e, t, a) {
  var r,
    n = He.default(t),
    o = ze.default(a);
  try {
    r = ot.default(e, { start: n, end: o });
  } catch (e) {
    r = !1;
  }
  return r;
}
function Xt() {
  return ("undefined" != typeof window ? window : globalThis).__localeId__;
}
function Zt(e) {
  if ("string" == typeof e) {
    var t = "undefined" != typeof window ? window : globalThis;
    return t.__localeData__ ? t.__localeData__[e] : null;
  }
  return e;
}
function ea(e, t) {
  return Rt(Re.default(It(), e), "LLLL", t);
}
function ta(e, t) {
  return Rt(Re.default(It(), e), "LLL", t);
}
function aa(e, t) {
  return Rt(Fe.default(It(), e), "QQQ", t);
}
function ra(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.maxDate,
    n = t.excludeDates,
    o = t.excludeDateIntervals,
    s = t.includeDates,
    l = t.includeDateIntervals,
    i = t.filterDate;
  return (
    da(e, { minDate: a, maxDate: r }) ||
    (n &&
      n.some(function (t) {
        return zt(e, t);
      })) ||
    (o &&
      o.some(function (t) {
        var a = t.start,
          r = t.end;
        return ot.default(e, { start: a, end: r });
      })) ||
    (s &&
      !s.some(function (t) {
        return zt(e, t);
      })) ||
    (l &&
      !l.some(function (t) {
        var a = t.start,
          r = t.end;
        return ot.default(e, { start: a, end: r });
      })) ||
    (i && !i(It(e))) ||
    !1
  );
}
function na(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.excludeDates,
    r = t.excludeDateIntervals;
  return r && r.length > 0
    ? r.some(function (t) {
        var a = t.start,
          r = t.end;
        return ot.default(e, { start: a, end: r });
      })
    : (a &&
        a.some(function (t) {
          return zt(e, t);
        })) ||
        !1;
}
function oa(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.maxDate,
    n = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    da(e, { minDate: Ve.default(a), maxDate: Ge.default(r) }) ||
    (n &&
      n.some(function (t) {
        return Ut(e, t);
      })) ||
    (o &&
      !o.some(function (t) {
        return Ut(e, t);
      })) ||
    (s && !s(It(e))) ||
    !1
  );
}
function sa(e, t, a, r) {
  var n = Te.default(e),
    o = Ne.default(e),
    s = Te.default(t),
    l = Ne.default(t),
    i = Te.default(r);
  return n === s && n === i
    ? o <= a && a <= l
    : n < s
    ? (i === n && o <= a) || (i === s && l >= a) || (i < s && i > n)
    : void 0;
}
function la(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.maxDate,
    n = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    da(e, { minDate: a, maxDate: r }) ||
    (n &&
      n.some(function (t) {
        return $t(e, t);
      })) ||
    (o &&
      !o.some(function (t) {
        return $t(e, t);
      })) ||
    (s && !s(It(e))) ||
    !1
  );
}
function ia(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.maxDate,
    n = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate,
    l = new Date(e, 0, 1);
  return (
    da(l, { minDate: $e.default(a), maxDate: Je.default(r) }) ||
    (n &&
      n.some(function (e) {
        return Vt(l, e);
      })) ||
    (o &&
      !o.some(function (e) {
        return Vt(l, e);
      })) ||
    (s && !s(It(l))) ||
    !1
  );
}
function ua(e, t, a, r) {
  var n = Te.default(e),
    o = xe.default(e),
    s = Te.default(t),
    l = xe.default(t),
    i = Te.default(r);
  return n === s && n === i
    ? o <= a && a <= l
    : n < s
    ? (i === n && o <= a) || (i === s && l >= a) || (i < s && i > n)
    : void 0;
}
function da(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.maxDate;
  return (a && Ke.default(e, a) < 0) || (r && Ke.default(e, r) > 0);
}
function pa(e, t) {
  return t.some(function (t) {
    return Me.default(t) === Me.default(e) && Se.default(t) === Se.default(e);
  });
}
function ca(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.excludeTimes,
    r = t.includeTimes,
    n = t.filterTime;
  return (a && pa(e, a)) || (r && !pa(e, r)) || (n && !n(e)) || !1;
}
function fa(e, t) {
  var a = t.minTime,
    r = t.maxTime;
  if (!a || !r) throw new Error("Both minTime and maxTime props required");
  var n,
    o = It(),
    s = Le.default(Ye.default(o, Se.default(e)), Me.default(e)),
    l = Le.default(Ye.default(o, Se.default(a)), Me.default(a)),
    i = Le.default(Ye.default(o, Se.default(r)), Me.default(r));
  try {
    n = !ot.default(s, { start: l, end: i });
  } catch (e) {
    n = !1;
  }
  return n;
}
function ha(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.includeDates,
    n = we.default(e, 1);
  return (
    (a && je.default(a, n) > 0) ||
    (r &&
      r.every(function (e) {
        return je.default(e, n) > 0;
      })) ||
    !1
  );
}
function ma(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.maxDate,
    r = t.includeDates,
    n = ye.default(e, 1);
  return (
    (a && je.default(n, a) > 0) ||
    (r &&
      r.every(function (e) {
        return je.default(n, e) > 0;
      })) ||
    !1
  );
}
function Da(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.minDate,
    r = t.includeDates,
    n = ke.default(e, 1);
  return (
    (a && We.default(a, n) > 0) ||
    (r &&
      r.every(function (e) {
        return We.default(e, n) > 0;
      })) ||
    !1
  );
}
function ya(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = t.maxDate,
    r = t.includeDates,
    n = be.default(e, 1);
  return (
    (a && We.default(n, a) > 0) ||
    (r &&
      r.every(function (e) {
        return We.default(n, e) > 0;
      })) ||
    !1
  );
}
function ba(e) {
  var t = e.minDate,
    a = e.includeDates;
  if (a && t) {
    var r = a.filter(function (e) {
      return Ke.default(e, t) >= 0;
    });
    return qe.default(r);
  }
  return a ? qe.default(a) : t;
}
function va(e) {
  var t = e.maxDate,
    a = e.includeDates;
  if (a && t) {
    var r = a.filter(function (e) {
      return Ke.default(e, t) <= 0;
    });
    return Be.default(r);
  }
  return a ? Be.default(a) : t;
}
function ga() {
  for (
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "react-datepicker__day--highlighted",
      a = new Map(),
      r = 0,
      n = e.length;
    r < n;
    r++
  ) {
    var o = e[r];
    if (de.default(o)) {
      var s = Rt(o, "MM.dd.yyyy"),
        l = a.get(s) || [];
      l.includes(t) || (l.push(t), a.set(s, l));
    } else if ("object" === ht(o)) {
      var i = Object.keys(o),
        u = i[0],
        d = o[i[0]];
      if ("string" == typeof u && d.constructor === Array)
        for (var p = 0, c = d.length; p < c; p++) {
          var f = Rt(d[p], "MM.dd.yyyy"),
            h = a.get(f) || [];
          h.includes(u) || (h.push(u), a.set(f, h));
        }
    }
  }
  return a;
}
function wa(e, t, a, r, n) {
  for (var o = n.length, s = [], l = 0; l < o; l++) {
    var i = fe.default(he.default(e, Me.default(n[l])), Se.default(n[l])),
      u = fe.default(e, (a + 1) * r);
    rt.default(i, t) && nt.default(i, u) && s.push(n[l]);
  }
  return s;
}
function ka(e) {
  return e < 10 ? "0".concat(e) : "".concat(e);
}
function Ca(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12,
    a = Math.ceil(Te.default(e) / t) * t,
    r = a - (t - 1);
  return { startPeriod: r, endPeriod: a };
}
function Sa(e, t, a, r) {
  for (var n = [], o = 0; o < 2 * t + 1; o++) {
    var s = e + t - o,
      l = !0;
    a && (l = Te.default(a) <= s),
      r && l && (l = Te.default(r) >= s),
      l && n.push(s);
  }
  return n;
}
var Ma = (function (t) {
  gt(r, le["default"].Component);
  var a = Mt(r);
  function r(t) {
    var n;
    mt(this, r),
      bt(Ct((n = a.call(this, t))), "renderOptions", function () {
        var e = n.props.year,
          t = n.state.yearsList.map(function (t) {
            return le.default.createElement(
              "div",
              {
                className:
                  e === t
                    ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                    : "react-datepicker__year-option",
                key: t,
                onClick: n.onChange.bind(Ct(n), t),
                "aria-selected": e === t ? "true" : void 0,
              },
              e === t
                ? le.default.createElement(
                    "span",
                    { className: "react-datepicker__year-option--selected" },
                    "✓"
                  )
                : "",
              t
            );
          }),
          a = n.props.minDate ? Te.default(n.props.minDate) : null,
          r = n.props.maxDate ? Te.default(n.props.maxDate) : null;
        return (
          (r &&
            n.state.yearsList.find(function (e) {
              return e === r;
            })) ||
            t.unshift(
              le.default.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  key: "upcoming",
                  onClick: n.incrementYears,
                },
                le.default.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming",
                })
              )
            ),
          (a &&
            n.state.yearsList.find(function (e) {
              return e === a;
            })) ||
            t.push(
              le.default.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  key: "previous",
                  onClick: n.decrementYears,
                },
                le.default.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                })
              )
            ),
          t
        );
      }),
      bt(Ct(n), "onChange", function (e) {
        n.props.onChange(e);
      }),
      bt(Ct(n), "handleClickOutside", function () {
        n.props.onCancel();
      }),
      bt(Ct(n), "shiftYears", function (e) {
        var t = n.state.yearsList.map(function (t) {
          return t + e;
        });
        n.setState({ yearsList: t });
      }),
      bt(Ct(n), "incrementYears", function () {
        return n.shiftYears(1);
      }),
      bt(Ct(n), "decrementYears", function () {
        return n.shiftYears(-1);
      });
    var o = t.yearDropdownItemNumber,
      s = t.scrollableYearDropdown,
      l = o || (s ? 10 : 5);
    return (
      (n.state = {
        yearsList: Sa(n.props.year, l, n.props.minDate, n.props.maxDate),
      }),
      (n.dropdownRef = e.createRef()),
      n
    );
  }
  return (
    yt(r, [
      {
        key: "componentDidMount",
        value: function () {
          var e = this.dropdownRef.current;
          e && (e.scrollTop = e.scrollHeight / 2 - e.clientHeight / 2);
        },
      },
      {
        key: "render",
        value: function () {
          var e = ue.default({
            "react-datepicker__year-dropdown": !0,
            "react-datepicker__year-dropdown--scrollable":
              this.props.scrollableYearDropdown,
          });
          return le.default.createElement(
            "div",
            { className: e, ref: this.dropdownRef },
            this.renderOptions()
          );
        },
      },
    ]),
    r
  );
})();
bt(Ma, "propTypes", {
  minDate: ie.default.instanceOf(Date),
  maxDate: ie.default.instanceOf(Date),
  onCancel: ie.default.func.isRequired,
  onChange: ie.default.func.isRequired,
  scrollableYearDropdown: ie.default.bool,
  year: ie.default.number.isRequired,
  yearDropdownItemNumber: ie.default.number,
});
var _a = ut.default(Ma),
  Oa = (function (e) {
    gt(a, le["default"].Component);
    var t = Mt(a);
    function a() {
      var e;
      mt(this, a);
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return (
        bt(Ct((e = t.call.apply(t, [this].concat(n)))), "state", {
          dropdownVisible: !1,
        }),
        bt(Ct(e), "renderSelectOptions", function () {
          for (
            var t = e.props.minDate ? Te.default(e.props.minDate) : 1900,
              a = e.props.maxDate ? Te.default(e.props.maxDate) : 2100,
              r = [],
              n = t;
            n <= a;
            n++
          )
            r.push(le.default.createElement("option", { key: n, value: n }, n));
          return r;
        }),
        bt(Ct(e), "onSelectChange", function (t) {
          e.onChange(t.target.value);
        }),
        bt(Ct(e), "renderSelectMode", function () {
          return le.default.createElement(
            "select",
            {
              value: e.props.year,
              className: "react-datepicker__year-select",
              onChange: e.onSelectChange,
            },
            e.renderSelectOptions()
          );
        }),
        bt(Ct(e), "renderReadView", function (t) {
          return le.default.createElement(
            "div",
            {
              key: "read",
              style: { visibility: t ? "visible" : "hidden" },
              className: "react-datepicker__year-read-view",
              onClick: function (t) {
                return e.toggleDropdown(t);
              },
            },
            le.default.createElement("span", {
              className: "react-datepicker__year-read-view--down-arrow",
            }),
            le.default.createElement(
              "span",
              { className: "react-datepicker__year-read-view--selected-year" },
              e.props.year
            )
          );
        }),
        bt(Ct(e), "renderDropdown", function () {
          return le.default.createElement(_a, {
            key: "dropdown",
            year: e.props.year,
            onChange: e.onChange,
            onCancel: e.toggleDropdown,
            minDate: e.props.minDate,
            maxDate: e.props.maxDate,
            scrollableYearDropdown: e.props.scrollableYearDropdown,
            yearDropdownItemNumber: e.props.yearDropdownItemNumber,
          });
        }),
        bt(Ct(e), "renderScrollMode", function () {
          var t = e.state.dropdownVisible,
            a = [e.renderReadView(!t)];
          return t && a.unshift(e.renderDropdown()), a;
        }),
        bt(Ct(e), "onChange", function (t) {
          e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
        }),
        bt(Ct(e), "toggleDropdown", function (t) {
          e.setState(
            { dropdownVisible: !e.state.dropdownVisible },
            function () {
              e.props.adjustDateOnChange && e.handleYearChange(e.props.date, t);
            }
          );
        }),
        bt(Ct(e), "handleYearChange", function (t, a) {
          e.onSelect(t, a), e.setOpen();
        }),
        bt(Ct(e), "onSelect", function (t, a) {
          e.props.onSelect && e.props.onSelect(t, a);
        }),
        bt(Ct(e), "setOpen", function () {
          e.props.setOpen && e.props.setOpen(!0);
        }),
        e
      );
    }
    return (
      yt(a, [
        {
          key: "render",
          value: function () {
            var e;
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode();
                break;
              case "select":
                e = this.renderSelectMode();
            }
            return le.default.createElement(
              "div",
              {
                className:
                  "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                    this.props.dropdownMode
                  ),
              },
              e
            );
          },
        },
      ]),
      a
    );
  })();
bt(Oa, "propTypes", {
  adjustDateOnChange: ie.default.bool,
  dropdownMode: ie.default.oneOf(["scroll", "select"]).isRequired,
  maxDate: ie.default.instanceOf(Date),
  minDate: ie.default.instanceOf(Date),
  onChange: ie.default.func.isRequired,
  scrollableYearDropdown: ie.default.bool,
  year: ie.default.number.isRequired,
  yearDropdownItemNumber: ie.default.number,
  date: ie.default.instanceOf(Date),
  onSelect: ie.default.func,
  setOpen: ie.default.func,
});
var Pa = (function (e) {
  gt(a, le["default"].Component);
  var t = Mt(a);
  function a() {
    var e;
    mt(this, a);
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      bt(
        Ct((e = t.call.apply(t, [this].concat(n)))),
        "isSelectedMonth",
        function (t) {
          return e.props.month === t;
        }
      ),
      bt(Ct(e), "renderOptions", function () {
        return e.props.monthNames.map(function (t, a) {
          return le.default.createElement(
            "div",
            {
              className: e.isSelectedMonth(a)
                ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                : "react-datepicker__month-option",
              key: t,
              onClick: e.onChange.bind(Ct(e), a),
              "aria-selected": e.isSelectedMonth(a) ? "true" : void 0,
            },
            e.isSelectedMonth(a)
              ? le.default.createElement(
                  "span",
                  { className: "react-datepicker__month-option--selected" },
                  "✓"
                )
              : "",
            t
          );
        });
      }),
      bt(Ct(e), "onChange", function (t) {
        return e.props.onChange(t);
      }),
      bt(Ct(e), "handleClickOutside", function () {
        return e.props.onCancel();
      }),
      e
    );
  }
  return (
    yt(a, [
      {
        key: "render",
        value: function () {
          return le.default.createElement(
            "div",
            { className: "react-datepicker__month-dropdown" },
            this.renderOptions()
          );
        },
      },
    ]),
    a
  );
})();
bt(Pa, "propTypes", {
  onCancel: ie.default.func.isRequired,
  onChange: ie.default.func.isRequired,
  month: ie.default.number.isRequired,
  monthNames: ie.default.arrayOf(ie.default.string.isRequired).isRequired,
});
var Na = ut.default(Pa),
  xa = (function (e) {
    gt(a, le["default"].Component);
    var t = Mt(a);
    function a() {
      var e;
      mt(this, a);
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return (
        bt(Ct((e = t.call.apply(t, [this].concat(n)))), "state", {
          dropdownVisible: !1,
        }),
        bt(Ct(e), "renderSelectOptions", function (e) {
          return e.map(function (e, t) {
            return le.default.createElement("option", { key: t, value: t }, e);
          });
        }),
        bt(Ct(e), "renderSelectMode", function (t) {
          return le.default.createElement(
            "select",
            {
              value: e.props.month,
              className: "react-datepicker__month-select",
              onChange: function (t) {
                return e.onChange(t.target.value);
              },
            },
            e.renderSelectOptions(t)
          );
        }),
        bt(Ct(e), "renderReadView", function (t, a) {
          return le.default.createElement(
            "div",
            {
              key: "read",
              style: { visibility: t ? "visible" : "hidden" },
              className: "react-datepicker__month-read-view",
              onClick: e.toggleDropdown,
            },
            le.default.createElement("span", {
              className: "react-datepicker__month-read-view--down-arrow",
            }),
            le.default.createElement(
              "span",
              {
                className: "react-datepicker__month-read-view--selected-month",
              },
              a[e.props.month]
            )
          );
        }),
        bt(Ct(e), "renderDropdown", function (t) {
          return le.default.createElement(Na, {
            key: "dropdown",
            month: e.props.month,
            monthNames: t,
            onChange: e.onChange,
            onCancel: e.toggleDropdown,
          });
        }),
        bt(Ct(e), "renderScrollMode", function (t) {
          var a = e.state.dropdownVisible,
            r = [e.renderReadView(!a, t)];
          return a && r.unshift(e.renderDropdown(t)), r;
        }),
        bt(Ct(e), "onChange", function (t) {
          e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
        }),
        bt(Ct(e), "toggleDropdown", function () {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      yt(a, [
        {
          key: "render",
          value: function () {
            var e,
              t = this,
              a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                this.props.useShortMonthInDropdown
                  ? function (e) {
                      return ta(e, t.props.locale);
                    }
                  : function (e) {
                      return ea(e, t.props.locale);
                    }
              );
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode(a);
                break;
              case "select":
                e = this.renderSelectMode(a);
            }
            return le.default.createElement(
              "div",
              {
                className:
                  "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                    this.props.dropdownMode
                  ),
              },
              e
            );
          },
        },
      ]),
      a
    );
  })();
function Ta(e, t) {
  for (var a = [], r = jt(e), n = jt(t); !rt.default(r, n); )
    a.push(It(r)), (r = ye.default(r, 1));
  return a;
}
bt(xa, "propTypes", {
  dropdownMode: ie.default.oneOf(["scroll", "select"]).isRequired,
  locale: ie.default.string,
  month: ie.default.number.isRequired,
  onChange: ie.default.func.isRequired,
  useShortMonthInDropdown: ie.default.bool,
});
var Ea = (function (e) {
  gt(a, le["default"].Component);
  var t = Mt(a);
  function a(e) {
    var r;
    return (
      mt(this, a),
      bt(Ct((r = t.call(this, e))), "renderOptions", function () {
        return r.state.monthYearsList.map(function (e) {
          var t = Ee.default(e),
            a = Vt(r.props.date, e) && Ut(r.props.date, e);
          return le.default.createElement(
            "div",
            {
              className: a
                ? "react-datepicker__month-year-option--selected_month-year"
                : "react-datepicker__month-year-option",
              key: t,
              onClick: r.onChange.bind(Ct(r), t),
              "aria-selected": a ? "true" : void 0,
            },
            a
              ? le.default.createElement(
                  "span",
                  {
                    className: "react-datepicker__month-year-option--selected",
                  },
                  "✓"
                )
              : "",
            Rt(e, r.props.dateFormat, r.props.locale)
          );
        });
      }),
      bt(Ct(r), "onChange", function (e) {
        return r.props.onChange(e);
      }),
      bt(Ct(r), "handleClickOutside", function () {
        r.props.onCancel();
      }),
      (r.state = { monthYearsList: Ta(r.props.minDate, r.props.maxDate) }),
      r
    );
  }
  return (
    yt(a, [
      {
        key: "render",
        value: function () {
          var e = ue.default({
            "react-datepicker__month-year-dropdown": !0,
            "react-datepicker__month-year-dropdown--scrollable":
              this.props.scrollableMonthYearDropdown,
          });
          return le.default.createElement(
            "div",
            { className: e },
            this.renderOptions()
          );
        },
      },
    ]),
    a
  );
})();
bt(Ea, "propTypes", {
  minDate: ie.default.instanceOf(Date).isRequired,
  maxDate: ie.default.instanceOf(Date).isRequired,
  onCancel: ie.default.func.isRequired,
  onChange: ie.default.func.isRequired,
  scrollableMonthYearDropdown: ie.default.bool,
  date: ie.default.instanceOf(Date).isRequired,
  dateFormat: ie.default.string.isRequired,
  locale: ie.default.string,
});
var Ia = ut.default(Ea),
  Ya = (function (e) {
    gt(a, le["default"].Component);
    var t = Mt(a);
    function a() {
      var e;
      mt(this, a);
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return (
        bt(Ct((e = t.call.apply(t, [this].concat(n)))), "state", {
          dropdownVisible: !1,
        }),
        bt(Ct(e), "renderSelectOptions", function () {
          for (
            var t = jt(e.props.minDate), a = jt(e.props.maxDate), r = [];
            !rt.default(t, a);

          ) {
            var n = Ee.default(t);
            r.push(
              le.default.createElement(
                "option",
                { key: n, value: n },
                Rt(t, e.props.dateFormat, e.props.locale)
              )
            ),
              (t = ye.default(t, 1));
          }
          return r;
        }),
        bt(Ct(e), "onSelectChange", function (t) {
          e.onChange(t.target.value);
        }),
        bt(Ct(e), "renderSelectMode", function () {
          return le.default.createElement(
            "select",
            {
              value: Ee.default(jt(e.props.date)),
              className: "react-datepicker__month-year-select",
              onChange: e.onSelectChange,
            },
            e.renderSelectOptions()
          );
        }),
        bt(Ct(e), "renderReadView", function (t) {
          var a = Rt(e.props.date, e.props.dateFormat, e.props.locale);
          return le.default.createElement(
            "div",
            {
              key: "read",
              style: { visibility: t ? "visible" : "hidden" },
              className: "react-datepicker__month-year-read-view",
              onClick: function (t) {
                return e.toggleDropdown(t);
              },
            },
            le.default.createElement("span", {
              className: "react-datepicker__month-year-read-view--down-arrow",
            }),
            le.default.createElement(
              "span",
              {
                className:
                  "react-datepicker__month-year-read-view--selected-month-year",
              },
              a
            )
          );
        }),
        bt(Ct(e), "renderDropdown", function () {
          return le.default.createElement(Ia, {
            key: "dropdown",
            date: e.props.date,
            dateFormat: e.props.dateFormat,
            onChange: e.onChange,
            onCancel: e.toggleDropdown,
            minDate: e.props.minDate,
            maxDate: e.props.maxDate,
            scrollableMonthYearDropdown: e.props.scrollableMonthYearDropdown,
            locale: e.props.locale,
          });
        }),
        bt(Ct(e), "renderScrollMode", function () {
          var t = e.state.dropdownVisible,
            a = [e.renderReadView(!t)];
          return t && a.unshift(e.renderDropdown()), a;
        }),
        bt(Ct(e), "onChange", function (t) {
          e.toggleDropdown();
          var a = It(parseInt(t));
          (Vt(e.props.date, a) && Ut(e.props.date, a)) || e.props.onChange(a);
        }),
        bt(Ct(e), "toggleDropdown", function () {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      yt(a, [
        {
          key: "render",
          value: function () {
            var e;
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode();
                break;
              case "select":
                e = this.renderSelectMode();
            }
            return le.default.createElement(
              "div",
              {
                className:
                  "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                    this.props.dropdownMode
                  ),
              },
              e
            );
          },
        },
      ]),
      a
    );
  })();
bt(Ya, "propTypes", {
  dropdownMode: ie.default.oneOf(["scroll", "select"]).isRequired,
  dateFormat: ie.default.string.isRequired,
  locale: ie.default.string,
  maxDate: ie.default.instanceOf(Date).isRequired,
  minDate: ie.default.instanceOf(Date).isRequired,
  date: ie.default.instanceOf(Date).isRequired,
  onChange: ie.default.func.isRequired,
  scrollableMonthYearDropdown: ie.default.bool,
});
var La = (function (e) {
  gt(a, le["default"].Component);
  var t = Mt(a);
  function a(e) {
    var r;
    return (
      mt(this, a),
      bt(Ct((r = t.call(this, e))), "dayEl", le.default.createRef()),
      bt(Ct(r), "handleClick", function (e) {
        !r.isDisabled() && r.props.onClick && r.props.onClick(e);
      }),
      bt(Ct(r), "handleMouseEnter", function (e) {
        !r.isDisabled() && r.props.onMouseEnter && r.props.onMouseEnter(e);
      }),
      bt(Ct(r), "handleOnKeyDown", function (e) {
        " " === e.key && (e.preventDefault(), (e.key = "Enter")),
          r.props.handleOnKeyDown(e);
      }),
      bt(Ct(r), "isSameDay", function (e) {
        return zt(r.props.day, e);
      }),
      bt(Ct(r), "isKeyboardSelected", function () {
        return (
          !r.props.disabledKeyboardNavigation &&
          !r.isSameDay(r.props.selected) &&
          r.isSameDay(r.props.preSelection)
        );
      }),
      bt(Ct(r), "isDisabled", function () {
        return ra(r.props.day, r.props);
      }),
      bt(Ct(r), "isExcluded", function () {
        return na(r.props.day, r.props);
      }),
      bt(Ct(r), "getHighLightedClass", function (e) {
        var t = r.props,
          a = t.day,
          n = t.highlightDates;
        if (!n) return !1;
        var o = Rt(a, "MM.dd.yyyy");
        return n.get(o);
      }),
      bt(Ct(r), "isInRange", function () {
        var e = r.props,
          t = e.day,
          a = e.startDate,
          n = e.endDate;
        return !(!a || !n) && Jt(t, a, n);
      }),
      bt(Ct(r), "isInSelectingRange", function () {
        var e,
          t = r.props,
          a = t.day,
          n = t.selectsStart,
          o = t.selectsEnd,
          s = t.selectsRange,
          l = t.selectsDisabledDaysInRange,
          i = t.startDate,
          u = t.endDate,
          d =
            null !== (e = r.props.selectingDate) && void 0 !== e
              ? e
              : r.props.preSelection;
        return (
          !(!(n || o || s) || !d || (!l && r.isDisabled())) &&
          (n && u && (nt.default(d, u) || Gt(d, u))
            ? Jt(a, d, u)
            : ((o && i && (rt.default(d, i) || Gt(d, i))) ||
                !(!s || !i || u || (!rt.default(d, i) && !Gt(d, i)))) &&
              Jt(a, i, d))
        );
      }),
      bt(Ct(r), "isSelectingRangeStart", function () {
        var e;
        if (!r.isInSelectingRange()) return !1;
        var t = r.props,
          a = t.day,
          n = t.startDate,
          o = t.selectsStart,
          s =
            null !== (e = r.props.selectingDate) && void 0 !== e
              ? e
              : r.props.preSelection;
        return zt(a, o ? s : n);
      }),
      bt(Ct(r), "isSelectingRangeEnd", function () {
        var e;
        if (!r.isInSelectingRange()) return !1;
        var t = r.props,
          a = t.day,
          n = t.endDate,
          o = t.selectsEnd,
          s = t.selectsRange,
          l =
            null !== (e = r.props.selectingDate) && void 0 !== e
              ? e
              : r.props.preSelection;
        return zt(a, o || s ? l : n);
      }),
      bt(Ct(r), "isRangeStart", function () {
        var e = r.props,
          t = e.day,
          a = e.startDate,
          n = e.endDate;
        return !(!a || !n) && zt(a, t);
      }),
      bt(Ct(r), "isRangeEnd", function () {
        var e = r.props,
          t = e.day,
          a = e.startDate,
          n = e.endDate;
        return !(!a || !n) && zt(n, t);
      }),
      bt(Ct(r), "isWeekend", function () {
        var e = _e.default(r.props.day);
        return 0 === e || 6 === e;
      }),
      bt(Ct(r), "isAfterMonth", function () {
        return (
          void 0 !== r.props.month &&
          (r.props.month + 1) % 12 === Ne.default(r.props.day)
        );
      }),
      bt(Ct(r), "isBeforeMonth", function () {
        return (
          void 0 !== r.props.month &&
          (Ne.default(r.props.day) + 1) % 12 === r.props.month
        );
      }),
      bt(Ct(r), "isCurrentDay", function () {
        return r.isSameDay(It());
      }),
      bt(Ct(r), "isSelected", function () {
        return r.isSameDay(r.props.selected);
      }),
      bt(Ct(r), "getClassNames", function (e) {
        var t,
          a = r.props.dayClassName ? r.props.dayClassName(e) : void 0;
        return ue.default(
          "react-datepicker__day",
          a,
          "react-datepicker__day--" + Rt(r.props.day, "ddd", t),
          {
            "react-datepicker__day--disabled": r.isDisabled(),
            "react-datepicker__day--excluded": r.isExcluded(),
            "react-datepicker__day--selected": r.isSelected(),
            "react-datepicker__day--keyboard-selected": r.isKeyboardSelected(),
            "react-datepicker__day--range-start": r.isRangeStart(),
            "react-datepicker__day--range-end": r.isRangeEnd(),
            "react-datepicker__day--in-range": r.isInRange(),
            "react-datepicker__day--in-selecting-range": r.isInSelectingRange(),
            "react-datepicker__day--selecting-range-start":
              r.isSelectingRangeStart(),
            "react-datepicker__day--selecting-range-end":
              r.isSelectingRangeEnd(),
            "react-datepicker__day--today": r.isCurrentDay(),
            "react-datepicker__day--weekend": r.isWeekend(),
            "react-datepicker__day--outside-month":
              r.isAfterMonth() || r.isBeforeMonth(),
          },
          r.getHighLightedClass("react-datepicker__day--highlighted")
        );
      }),
      bt(Ct(r), "getAriaLabel", function () {
        var e = r.props,
          t = e.day,
          a = e.selectsRange,
          n = e.startDate,
          o = e.endDate,
          s = e.selected,
          l = e.ariaLabelPrefixWhenEnabled,
          i = void 0 === l ? "Single date" : l,
          u = e.ariaLabelPrefixWhenDisabled,
          d = void 0 === u ? "Not available" : u,
          p = function (e) {
            return Rt(e, "PPPP", r.props.locale);
          };
        if (a)
          n || o
            ? n && !o
              ? r.setState({
                  labelDay: ""
                    .concat(p(t), " Date range, selected start date ")
                    .concat(p(n), ", end date not selected"),
                })
              : r.setState({
                  labelDay: ""
                    .concat(p(t), " Date range, selected start date ")
                    .concat(p(n), ", selected end date ")
                    .concat(p(o)),
                })
            : r.setState({
                labelDay: "".concat(
                  p(t),
                  " Choose date range, nothing selected"
                ),
              });
        else {
          var c =
            r.isDisabled() || r.isExcluded()
              ? d
              : r.isSameDay(s)
              ? "Selected single date"
              : i;
          r.setState({ labelDay: "".concat(c, ", ").concat(p(t)) });
        }
      }),
      bt(Ct(r), "getTabIndex", function (e, t) {
        var a = e || r.props.selected,
          n = t || r.props.preSelection;
        return r.isKeyboardSelected() || (r.isSameDay(a) && zt(n, a)) ? 0 : -1;
      }),
      bt(Ct(r), "handleFocusDay", function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = !1;
        0 === r.getTabIndex() &&
          !e.isInputFocused &&
          r.isSameDay(r.props.preSelection) &&
          ((document.activeElement &&
            document.activeElement !== document.body) ||
            (t = !0),
          r.props.inline && !r.props.shouldFocusDayInline && (t = !1),
          r.props.containerRef &&
            r.props.containerRef.current &&
            r.props.containerRef.current.contains(document.activeElement) &&
            document.activeElement.classList.contains(
              "react-datepicker__day"
            ) &&
            (t = !0)),
          t && r.dayEl.current.focus({ preventScroll: !0 });
      }),
      bt(Ct(r), "renderDayContents", function () {
        return (r.props.monthShowsDuplicateDaysEnd && r.isAfterMonth()) ||
          (r.props.monthShowsDuplicateDaysStart && r.isBeforeMonth())
          ? null
          : r.props.renderDayContents
          ? r.props.renderDayContents(Oe.default(r.props.day), r.props.day)
          : Oe.default(r.props.day);
      }),
      bt(Ct(r), "render", function () {
        return le.default.createElement(
          "div",
          {
            ref: r.dayEl,
            className: r.getClassNames(r.props.day),
            onKeyDown: r.handleOnKeyDown,
            onClick: r.handleClick,
            onMouseEnter: r.handleMouseEnter,
            tabIndex: r.getTabIndex(),
            "aria-label": r.state.labelDay,
            role: "button",
            "aria-disabled": r.isDisabled(),
            "aria-current": r.isCurrentDay() ? "date" : void 0,
          },
          r.renderDayContents()
        );
      }),
      (r.state = { labelDay: "" }),
      r
    );
  }
  return (
    yt(a, [
      {
        key: "componentDidMount",
        value: function () {
          this.handleFocusDay(), this.getAriaLabel();
        },
      },
      {
        key: "componentDidUpdate",
        value: function (e) {
          var t = this.props,
            a = t.startDate,
            r = t.endDate,
            n = t.selected;
          this.handleFocusDay(e),
            (a === e.startDate && r === e.endDate && n === e.selected) ||
              this.getAriaLabel();
        },
      },
    ]),
    a
  );
})();
bt(La, "propTypes", {
  ariaLabelPrefixWhenEnabled: ie.default.string,
  ariaLabelPrefixWhenDisabled: ie.default.string,
  disabledKeyboardNavigation: ie.default.bool,
  day: ie.default.instanceOf(Date).isRequired,
  dayClassName: ie.default.func,
  endDate: ie.default.instanceOf(Date),
  highlightDates: ie.default.instanceOf(Map),
  inline: ie.default.bool,
  shouldFocusDayInline: ie.default.bool,
  month: ie.default.number,
  onClick: ie.default.func,
  onMouseEnter: ie.default.func,
  preSelection: ie.default.instanceOf(Date),
  selected: ie.default.object,
  selectingDate: ie.default.instanceOf(Date),
  selectsEnd: ie.default.bool,
  selectsStart: ie.default.bool,
  selectsRange: ie.default.bool,
  selectsDisabledDaysInRange: ie.default.bool,
  startDate: ie.default.instanceOf(Date),
  renderDayContents: ie.default.func,
  handleOnKeyDown: ie.default.func,
  containerRef: ie.default.oneOfType([
    ie.default.func,
    ie.default.shape({ current: ie.default.instanceOf(Element) }),
  ]),
  monthShowsDuplicateDaysEnd: ie.default.bool,
  monthShowsDuplicateDaysStart: ie.default.bool,
  locale: ie.default.oneOfType([
    ie.default.string,
    ie.default.shape({ locale: ie.default.object }),
  ]),
});
var Ra = (function (e) {
  gt(a, le["default"].Component);
  var t = Mt(a);
  function a() {
    var e;
    mt(this, a);
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      bt(
        Ct((e = t.call.apply(t, [this].concat(n)))),
        "handleClick",
        function (t) {
          e.props.onClick && e.props.onClick(t);
        }
      ),
      e
    );
  }
  return (
    yt(a, [
      {
        key: "render",
        value: function () {
          var e = this.props,
            t = e.weekNumber,
            a = e.ariaLabelPrefix,
            r = void 0 === a ? "week " : a,
            n = {
              "react-datepicker__week-number": !0,
              "react-datepicker__week-number--clickable": !!e.onClick,
            };
          return le.default.createElement(
            "div",
            {
              className: ue.default(n),
              "aria-label": "".concat(r, " ").concat(this.props.weekNumber),
              onClick: this.handleClick,
            },
            t
          );
        },
      },
    ]),
    a
  );
})();
bt(Ra, "propTypes", {
  weekNumber: ie.default.number.isRequired,
  onClick: ie.default.func,
});
var Fa = (function (e) {
  gt(a, le["default"].Component);
  var t = Mt(a);
  function a() {
    var e;
    mt(this, a);
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      bt(
        Ct((e = t.call.apply(t, [this].concat(n)))),
        "handleDayClick",
        function (t, a) {
          e.props.onDayClick && e.props.onDayClick(t, a);
        }
      ),
      bt(Ct(e), "handleDayMouseEnter", function (t) {
        e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
      }),
      bt(Ct(e), "handleWeekClick", function (t, a, r) {
        "function" == typeof e.props.onWeekSelect &&
          e.props.onWeekSelect(t, a, r),
          e.props.shouldCloseOnSelect && e.props.setOpen(!1);
      }),
      bt(Ct(e), "formatWeekNumber", function (t) {
        return e.props.formatWeekNumber ? e.props.formatWeekNumber(t) : qt(t);
      }),
      bt(Ct(e), "renderDays", function () {
        var t = Kt(e.props.day, e.props.locale, e.props.calendarStartDay),
          a = [],
          r = e.formatWeekNumber(t);
        if (e.props.showWeekNumber) {
          var n = e.props.onWeekSelect
            ? e.handleWeekClick.bind(Ct(e), t, r)
            : void 0;
          a.push(
            le.default.createElement(Ra, {
              key: "W",
              weekNumber: r,
              onClick: n,
              ariaLabelPrefix: e.props.ariaLabelPrefix,
            })
          );
        }
        return a.concat(
          [0, 1, 2, 3, 4, 5, 6].map(function (a) {
            var r = me.default(t, a);
            return le.default.createElement(La, {
              ariaLabelPrefixWhenEnabled: e.props.chooseDayAriaLabelPrefix,
              ariaLabelPrefixWhenDisabled: e.props.disabledDayAriaLabelPrefix,
              key: r.valueOf(),
              day: r,
              month: e.props.month,
              onClick: e.handleDayClick.bind(Ct(e), r),
              onMouseEnter: e.handleDayMouseEnter.bind(Ct(e), r),
              minDate: e.props.minDate,
              maxDate: e.props.maxDate,
              excludeDates: e.props.excludeDates,
              excludeDateIntervals: e.props.excludeDateIntervals,
              includeDates: e.props.includeDates,
              includeDateIntervals: e.props.includeDateIntervals,
              highlightDates: e.props.highlightDates,
              selectingDate: e.props.selectingDate,
              filterDate: e.props.filterDate,
              preSelection: e.props.preSelection,
              selected: e.props.selected,
              selectsStart: e.props.selectsStart,
              selectsEnd: e.props.selectsEnd,
              selectsRange: e.props.selectsRange,
              selectsDisabledDaysInRange: e.props.selectsDisabledDaysInRange,
              startDate: e.props.startDate,
              endDate: e.props.endDate,
              dayClassName: e.props.dayClassName,
              renderDayContents: e.props.renderDayContents,
              disabledKeyboardNavigation: e.props.disabledKeyboardNavigation,
              handleOnKeyDown: e.props.handleOnKeyDown,
              isInputFocused: e.props.isInputFocused,
              containerRef: e.props.containerRef,
              inline: e.props.inline,
              shouldFocusDayInline: e.props.shouldFocusDayInline,
              monthShowsDuplicateDaysEnd: e.props.monthShowsDuplicateDaysEnd,
              monthShowsDuplicateDaysStart:
                e.props.monthShowsDuplicateDaysStart,
              locale: e.props.locale,
            });
          })
        );
      }),
      e
    );
  }
  return (
    yt(
      a,
      [
        {
          key: "render",
          value: function () {
            return le.default.createElement(
              "div",
              { className: "react-datepicker__week" },
              this.renderDays()
            );
          },
        },
      ],
      [
        {
          key: "defaultProps",
          get: function () {
            return { shouldCloseOnSelect: !0 };
          },
        },
      ]
    ),
    a
  );
})();
bt(Fa, "propTypes", {
  ariaLabelPrefix: ie.default.string,
  disabledKeyboardNavigation: ie.default.bool,
  day: ie.default.instanceOf(Date).isRequired,
  dayClassName: ie.default.func,
  disabledDayAriaLabelPrefix: ie.default.string,
  chooseDayAriaLabelPrefix: ie.default.string,
  endDate: ie.default.instanceOf(Date),
  excludeDates: ie.default.array,
  excludeDateIntervals: ie.default.arrayOf(
    ie.default.shape({
      start: ie.default.instanceOf(Date),
      end: ie.default.instanceOf(Date),
    })
  ),
  filterDate: ie.default.func,
  formatWeekNumber: ie.default.func,
  highlightDates: ie.default.instanceOf(Map),
  includeDates: ie.default.array,
  includeDateIntervals: ie.default.array,
  inline: ie.default.bool,
  shouldFocusDayInline: ie.default.bool,
  locale: ie.default.oneOfType([
    ie.default.string,
    ie.default.shape({ locale: ie.default.object }),
  ]),
  maxDate: ie.default.instanceOf(Date),
  calendarStartDay: ie.default.number,
  minDate: ie.default.instanceOf(Date),
  month: ie.default.number,
  onDayClick: ie.default.func,
  onDayMouseEnter: ie.default.func,
  onWeekSelect: ie.default.func,
  preSelection: ie.default.instanceOf(Date),
  selected: ie.default.instanceOf(Date),
  selectingDate: ie.default.instanceOf(Date),
  selectsEnd: ie.default.bool,
  selectsStart: ie.default.bool,
  selectsRange: ie.default.bool,
  selectsDisabledDaysInRange: ie.default.bool,
  showWeekNumber: ie.default.bool,
  startDate: ie.default.instanceOf(Date),
  setOpen: ie.default.func,
  shouldCloseOnSelect: ie.default.bool,
  renderDayContents: ie.default.func,
  handleOnKeyDown: ie.default.func,
  isInputFocused: ie.default.bool,
  containerRef: ie.default.oneOfType([
    ie.default.func,
    ie.default.shape({ current: ie.default.instanceOf(Element) }),
  ]),
  monthShowsDuplicateDaysEnd: ie.default.bool,
  monthShowsDuplicateDaysStart: ie.default.bool,
});
var Aa = (function (e) {
  gt(a, le["default"].Component);
  var t = Mt(a);
  function a() {
    var e;
    mt(this, a);
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      bt(
        Ct((e = t.call.apply(t, [this].concat(n)))),
        "MONTH_REFS",
        _t(Array(12)).map(function () {
          return le.default.createRef();
        })
      ),
      bt(Ct(e), "isDisabled", function (t) {
        return ra(t, e.props);
      }),
      bt(Ct(e), "isExcluded", function (t) {
        return na(t, e.props);
      }),
      bt(Ct(e), "handleDayClick", function (t, a) {
        e.props.onDayClick && e.props.onDayClick(t, a, e.props.orderInDisplay);
      }),
      bt(Ct(e), "handleDayMouseEnter", function (t) {
        e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
      }),
      bt(Ct(e), "handleMouseLeave", function () {
        e.props.onMouseLeave && e.props.onMouseLeave();
      }),
      bt(Ct(e), "isRangeStartMonth", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate;
        return !(!n || !o) && Ut(Re.default(r, t), n);
      }),
      bt(Ct(e), "isRangeStartQuarter", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate;
        return !(!n || !o) && $t(Fe.default(r, t), n);
      }),
      bt(Ct(e), "isRangeEndMonth", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate;
        return !(!n || !o) && Ut(Re.default(r, t), o);
      }),
      bt(Ct(e), "isRangeEndQuarter", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate;
        return !(!n || !o) && $t(Fe.default(r, t), o);
      }),
      bt(Ct(e), "isWeekInMonth", function (t) {
        var a = e.props.day,
          r = me.default(t, 6);
        return Ut(t, a) || Ut(r, a);
      }),
      bt(Ct(e), "isCurrentMonth", function (e, t) {
        return Te.default(e) === Te.default(It()) && t === Ne.default(It());
      }),
      bt(Ct(e), "isSelectedMonth", function (e, t, a) {
        return Ne.default(e) === t && Te.default(e) === Te.default(a);
      }),
      bt(Ct(e), "isSelectedQuarter", function (e, t, a) {
        return xe.default(e) === t && Te.default(e) === Te.default(a);
      }),
      bt(Ct(e), "renderWeeks", function () {
        for (
          var t = [],
            a = e.props.fixedHeight,
            r = 0,
            n = !1,
            o = Kt(jt(e.props.day), e.props.locale, e.props.calendarStartDay);
          t.push(
            le.default.createElement(Fa, {
              ariaLabelPrefix: e.props.weekAriaLabelPrefix,
              chooseDayAriaLabelPrefix: e.props.chooseDayAriaLabelPrefix,
              disabledDayAriaLabelPrefix: e.props.disabledDayAriaLabelPrefix,
              key: r,
              day: o,
              month: Ne.default(e.props.day),
              onDayClick: e.handleDayClick,
              onDayMouseEnter: e.handleDayMouseEnter,
              onWeekSelect: e.props.onWeekSelect,
              formatWeekNumber: e.props.formatWeekNumber,
              locale: e.props.locale,
              minDate: e.props.minDate,
              maxDate: e.props.maxDate,
              excludeDates: e.props.excludeDates,
              excludeDateIntervals: e.props.excludeDateIntervals,
              includeDates: e.props.includeDates,
              includeDateIntervals: e.props.includeDateIntervals,
              inline: e.props.inline,
              shouldFocusDayInline: e.props.shouldFocusDayInline,
              highlightDates: e.props.highlightDates,
              selectingDate: e.props.selectingDate,
              filterDate: e.props.filterDate,
              preSelection: e.props.preSelection,
              selected: e.props.selected,
              selectsStart: e.props.selectsStart,
              selectsEnd: e.props.selectsEnd,
              selectsRange: e.props.selectsRange,
              selectsDisabledDaysInRange: e.props.selectsDisabledDaysInRange,
              showWeekNumber: e.props.showWeekNumbers,
              startDate: e.props.startDate,
              endDate: e.props.endDate,
              dayClassName: e.props.dayClassName,
              setOpen: e.props.setOpen,
              shouldCloseOnSelect: e.props.shouldCloseOnSelect,
              disabledKeyboardNavigation: e.props.disabledKeyboardNavigation,
              renderDayContents: e.props.renderDayContents,
              handleOnKeyDown: e.props.handleOnKeyDown,
              isInputFocused: e.props.isInputFocused,
              containerRef: e.props.containerRef,
              calendarStartDay: e.props.calendarStartDay,
              monthShowsDuplicateDaysEnd: e.props.monthShowsDuplicateDaysEnd,
              monthShowsDuplicateDaysStart:
                e.props.monthShowsDuplicateDaysStart,
            })
          ),
            !n;

        ) {
          r++, (o = De.default(o, 1));
          var s = a && r >= 6,
            l = !a && !e.isWeekInMonth(o);
          if (s || l) {
            if (!e.props.peekNextMonth) break;
            n = !0;
          }
        }
        return t;
      }),
      bt(Ct(e), "onMonthClick", function (t, a) {
        e.handleDayClick(jt(Re.default(e.props.day, a)), t);
      }),
      bt(Ct(e), "handleMonthNavigation", function (t, a) {
        e.isDisabled(a) ||
          e.isExcluded(a) ||
          (e.props.setPreSelection(a),
          e.MONTH_REFS[t].current && e.MONTH_REFS[t].current.focus());
      }),
      bt(Ct(e), "onMonthKeyDown", function (t, a) {
        t.preventDefault();
        var r = t.key;
        if (!e.props.disabledKeyboardNavigation)
          switch (r) {
            case "Enter":
              e.onMonthClick(t, a), e.props.setPreSelection(e.props.selected);
              break;
            case "ArrowRight":
              e.handleMonthNavigation(
                11 === a ? 0 : a + 1,
                ye.default(e.props.preSelection, 1)
              );
              break;
            case "ArrowLeft":
              e.handleMonthNavigation(
                0 === a ? 11 : a - 1,
                we.default(e.props.preSelection, 1)
              );
              break;
            case "ArrowUp":
              e.handleMonthNavigation(
                a >= 0 && a <= 2 ? a + 9 : a - 3,
                we.default(e.props.preSelection, 3)
              );
              break;
            case "ArrowDown":
              e.handleMonthNavigation(
                a >= 9 && a <= 11 ? a - 9 : a + 3,
                ye.default(e.props.preSelection, 3)
              );
          }
      }),
      bt(Ct(e), "onQuarterClick", function (t, a) {
        e.handleDayClick(Ht(Fe.default(e.props.day, a)), t);
      }),
      bt(Ct(e), "getMonthClassNames", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate,
          s = a.selected,
          l = a.minDate,
          i = a.maxDate,
          u = a.preSelection,
          d = a.monthClassName,
          p = a.excludeDates,
          c = a.includeDates,
          f = d ? d(r) : void 0,
          h = Re.default(r, t);
        return ue.default(
          "react-datepicker__month-text",
          "react-datepicker__month-".concat(t),
          f,
          {
            "react-datepicker__month--disabled":
              (l || i || p || c) && oa(h, e.props),
            "react-datepicker__month--selected": e.isSelectedMonth(r, t, s),
            "react-datepicker__month-text--keyboard-selected":
              !e.props.disabledKeyboardNavigation && Ne.default(u) === t,
            "react-datepicker__month--in-range": sa(n, o, t, r),
            "react-datepicker__month--range-start": e.isRangeStartMonth(t),
            "react-datepicker__month--range-end": e.isRangeEndMonth(t),
            "react-datepicker__month-text--today": e.isCurrentMonth(r, t),
          }
        );
      }),
      bt(Ct(e), "getTabIndex", function (t) {
        var a = Ne.default(e.props.preSelection);
        return e.props.disabledKeyboardNavigation || t !== a ? "-1" : "0";
      }),
      bt(Ct(e), "getAriaLabel", function (t) {
        var a = e.props,
          r = a.chooseDayAriaLabelPrefix,
          n = void 0 === r ? "Choose" : r,
          o = a.disabledDayAriaLabelPrefix,
          s = void 0 === o ? "Not available" : o,
          l = a.day,
          i = Re.default(l, t),
          u = e.isDisabled(i) || e.isExcluded(i) ? s : n;
        return "".concat(u, " ").concat(Rt(i, "MMMM yyyy"));
      }),
      bt(Ct(e), "getQuarterClassNames", function (t) {
        var a = e.props,
          r = a.day,
          n = a.startDate,
          o = a.endDate,
          s = a.selected,
          l = a.minDate,
          i = a.maxDate;
        return ue.default(
          "react-datepicker__quarter-text",
          "react-datepicker__quarter-".concat(t),
          {
            "react-datepicker__quarter--disabled":
              (l || i) && la(Fe.default(r, t), e.props),
            "react-datepicker__quarter--selected": e.isSelectedQuarter(r, t, s),
            "react-datepicker__quarter--in-range": ua(n, o, t, r),
            "react-datepicker__quarter--range-start": e.isRangeStartQuarter(t),
            "react-datepicker__quarter--range-end": e.isRangeEndQuarter(t),
          }
        );
      }),
      bt(Ct(e), "renderMonths", function () {
        var t = e.props,
          a = t.showFullMonthYearPicker,
          r = t.showTwoColumnMonthYearPicker,
          n = t.showFourColumnMonthYearPicker,
          o = t.locale,
          s = t.day,
          l = t.selected;
        return (
          n
            ? [
                [0, 1, 2, 3],
                [4, 5, 6, 7],
                [8, 9, 10, 11],
              ]
            : r
            ? [
                [0, 1],
                [2, 3],
                [4, 5],
                [6, 7],
                [8, 9],
                [10, 11],
              ]
            : [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [9, 10, 11],
              ]
        ).map(function (t, r) {
          return le.default.createElement(
            "div",
            { className: "react-datepicker__month-wrapper", key: r },
            t.map(function (t, r) {
              return le.default.createElement(
                "div",
                {
                  ref: e.MONTH_REFS[t],
                  key: r,
                  onClick: function (a) {
                    e.onMonthClick(a, t);
                  },
                  onKeyDown: function (a) {
                    e.onMonthKeyDown(a, t);
                  },
                  tabIndex: e.getTabIndex(t),
                  className: e.getMonthClassNames(t),
                  role: "option",
                  "aria-label": e.getAriaLabel(t),
                  "aria-current": e.isCurrentMonth(s, t) ? "date" : void 0,
                  "aria-selected": e.isSelectedMonth(s, t, l),
                },
                a ? ea(t, o) : ta(t, o)
              );
            })
          );
        });
      }),
      bt(Ct(e), "renderQuarters", function () {
        var t = e.props,
          a = t.day,
          r = t.selected;
        return le.default.createElement(
          "div",
          { className: "react-datepicker__quarter-wrapper" },
          [1, 2, 3, 4].map(function (t, n) {
            return le.default.createElement(
              "div",
              {
                key: n,
                role: "option",
                onClick: function (a) {
                  e.onQuarterClick(a, t);
                },
                className: e.getQuarterClassNames(t),
                "aria-selected": e.isSelectedQuarter(a, t, r),
              },
              aa(t, e.props.locale)
            );
          })
        );
      }),
      bt(Ct(e), "getClassNames", function () {
        var t = e.props;
        t.day;
        var a = t.selectingDate,
          r = t.selectsStart,
          n = t.selectsEnd,
          o = t.showMonthYearPicker,
          s = t.showQuarterYearPicker;
        return ue.default(
          "react-datepicker__month",
          { "react-datepicker__month--selecting-range": a && (r || n) },
          { "react-datepicker__monthPicker": o },
          { "react-datepicker__quarterPicker": s }
        );
      }),
      e
    );
  }
  return (
    yt(a, [
      {
        key: "render",
        value: function () {
          var e = this.props,
            t = e.showMonthYearPicker,
            a = e.showQuarterYearPicker,
            r = e.day,
            n = e.ariaLabelPrefix,
            o = void 0 === n ? "month " : n;
          return le.default.createElement(
            "div",
            {
              className: this.getClassNames(),
              onMouseLeave: this.handleMouseLeave,
              "aria-label": "".concat(o, " ").concat(Rt(r, "yyyy-MM")),
            },
            t
              ? this.renderMonths()
              : a
              ? this.renderQuarters()
              : this.renderWeeks()
          );
        },
      },
    ]),
    a
  );
})();
bt(Aa, "propTypes", {
  ariaLabelPrefix: ie.default.string,
  chooseDayAriaLabelPrefix: ie.default.string,
  disabledDayAriaLabelPrefix: ie.default.string,
  disabledKeyboardNavigation: ie.default.bool,
  day: ie.default.instanceOf(Date).isRequired,
  dayClassName: ie.default.func,
  monthClassName: ie.default.func,
  endDate: ie.default.instanceOf(Date),
  orderInDisplay: ie.default.number,
  excludeDates: ie.default.array,
  excludeDateIntervals: ie.default.arrayOf(
    ie.default.shape({
      start: ie.default.instanceOf(Date),
      end: ie.default.instanceOf(Date),
    })
  ),
  filterDate: ie.default.func,
  fixedHeight: ie.default.bool,
  formatWeekNumber: ie.default.func,
  highlightDates: ie.default.instanceOf(Map),
  includeDates: ie.default.array,
  includeDateIntervals: ie.default.array,
  inline: ie.default.bool,
  shouldFocusDayInline: ie.default.bool,
  locale: ie.default.oneOfType([
    ie.default.string,
    ie.default.shape({ locale: ie.default.object }),
  ]),
  maxDate: ie.default.instanceOf(Date),
  minDate: ie.default.instanceOf(Date),
  onDayClick: ie.default.func,
  onDayMouseEnter: ie.default.func,
  onMouseLeave: ie.default.func,
  onWeekSelect: ie.default.func,
  peekNextMonth: ie.default.bool,
  preSelection: ie.default.instanceOf(Date),
  setPreSelection: ie.default.func,
  selected: ie.default.instanceOf(Date),
  selectingDate: ie.default.instanceOf(Date),
  calendarStartDay: ie.default.number,
  selectsEnd: ie.default.bool,
  selectsStart: ie.default.bool,
  selectsRange: ie.default.bool,
  selectsDisabledDaysInRange: ie.default.bool,
  showWeekNumbers: ie.default.bool,
  startDate: ie.default.instanceOf(Date),
  setOpen: ie.default.func,
  shouldCloseOnSelect: ie.default.bool,
  renderDayContents: ie.default.func,
  showMonthYearPicker: ie.default.bool,
  showFullMonthYearPicker: ie.default.bool,
  showTwoColumnMonthYearPicker: ie.default.bool,
  showFourColumnMonthYearPicker: ie.default.bool,
  showQuarterYearPicker: ie.default.bool,
  handleOnKeyDown: ie.default.func,
  isInputFocused: ie.default.bool,
  weekAriaLabelPrefix: ie.default.string,
  containerRef: ie.default.oneOfType([
    ie.default.func,
    ie.default.shape({ current: ie.default.instanceOf(Element) }),
  ]),
  monthShowsDuplicateDaysEnd: ie.default.bool,
  monthShowsDuplicateDaysStart: ie.default.bool,
});
var qa = (function (e) {
  gt(a, le["default"].Component);
  var t = Mt(a);
  function a() {
    var e;
    mt(this, a);
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      bt(Ct((e = t.call.apply(t, [this].concat(n)))), "state", {
        height: null,
      }),
      bt(Ct(e), "handleClick", function (t) {
        ((e.props.minTime || e.props.maxTime) && fa(t, e.props)) ||
          ((e.props.excludeTimes ||
            e.props.includeTimes ||
            e.props.filterTime) &&
            ca(t, e.props)) ||
          e.props.onChange(t);
      }),
      bt(Ct(e), "isSelectedTime", function (t, a, r) {
        return e.props.selected && a === Me.default(t) && r === Se.default(t);
      }),
      bt(Ct(e), "liClasses", function (t, a, r) {
        var n = [
          "react-datepicker__time-list-item",
          e.props.timeClassName ? e.props.timeClassName(t, a, r) : void 0,
        ];
        return (
          e.isSelectedTime(t, a, r) &&
            n.push("react-datepicker__time-list-item--selected"),
          (((e.props.minTime || e.props.maxTime) && fa(t, e.props)) ||
            ((e.props.excludeTimes ||
              e.props.includeTimes ||
              e.props.filterTime) &&
              ca(t, e.props))) &&
            n.push("react-datepicker__time-list-item--disabled"),
          e.props.injectTimes &&
            (60 * Me.default(t) + Se.default(t)) % e.props.intervals != 0 &&
            n.push("react-datepicker__time-list-item--injected"),
          n.join(" ")
        );
      }),
      bt(Ct(e), "handleOnKeyDown", function (t, a) {
        " " === t.key && (t.preventDefault(), (t.key = "Enter")),
          "Enter" === t.key && e.handleClick(a),
          e.props.handleOnKeyDown(t);
      }),
      bt(Ct(e), "renderTimes", function () {
        for (
          var t = [],
            a = e.props.format ? e.props.format : "p",
            r = e.props.intervals,
            n = Bt(It(e.props.selected)),
            o = 1440 / r,
            s =
              e.props.injectTimes &&
              e.props.injectTimes.sort(function (e, t) {
                return e - t;
              }),
            l = e.props.selected || e.props.openToDate || It(),
            i = Me.default(l),
            u = Se.default(l),
            d = Le.default(Ye.default(n, u), i),
            p = 0;
          p < o;
          p++
        ) {
          var c = fe.default(n, p * r);
          if ((t.push(c), s)) {
            var f = wa(n, c, p, r, s);
            t = t.concat(f);
          }
        }
        return t.map(function (t, r) {
          return le.default.createElement(
            "li",
            {
              key: r,
              onClick: e.handleClick.bind(Ct(e), t),
              className: e.liClasses(t, i, u),
              ref: function (a) {
                (nt.default(t, d) || Gt(t, d)) && (e.centerLi = a);
              },
              onKeyDown: function (a) {
                e.handleOnKeyDown(a, t);
              },
              tabIndex: "0",
              "aria-selected": e.isSelectedTime(t, i, u) ? "true" : void 0,
            },
            Rt(t, a, e.props.locale)
          );
        });
      }),
      e
    );
  }
  return (
    yt(
      a,
      [
        {
          key: "componentDidMount",
          value: function () {
            (this.list.scrollTop =
              this.centerLi &&
              a.calcCenterPosition(
                this.props.monthRef
                  ? this.props.monthRef.clientHeight - this.header.clientHeight
                  : this.list.clientHeight,
                this.centerLi
              )),
              this.props.monthRef &&
                this.header &&
                this.setState({
                  height:
                    this.props.monthRef.clientHeight - this.header.clientHeight,
                });
          },
        },
        {
          key: "render",
          value: function () {
            var e = this,
              t = this.state.height;
            return le.default.createElement(
              "div",
              {
                className: "react-datepicker__time-container ".concat(
                  this.props.todayButton
                    ? "react-datepicker__time-container--with-today-button"
                    : ""
                ),
              },
              le.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker__header--time ".concat(
                      this.props.showTimeSelectOnly
                        ? "react-datepicker__header--time--only"
                        : ""
                    ),
                  ref: function (t) {
                    e.header = t;
                  },
                },
                le.default.createElement(
                  "div",
                  { className: "react-datepicker-time__header" },
                  this.props.timeCaption
                )
              ),
              le.default.createElement(
                "div",
                { className: "react-datepicker__time" },
                le.default.createElement(
                  "div",
                  { className: "react-datepicker__time-box" },
                  le.default.createElement(
                    "ul",
                    {
                      className: "react-datepicker__time-list",
                      ref: function (t) {
                        e.list = t;
                      },
                      style: t ? { height: t } : {},
                      tabIndex: "0",
                    },
                    this.renderTimes()
                  )
                )
              )
            );
          },
        },
      ],
      [
        {
          key: "defaultProps",
          get: function () {
            return {
              intervals: 30,
              onTimeChange: function () {},
              todayButton: null,
              timeCaption: "Time",
            };
          },
        },
      ]
    ),
    a
  );
})();
bt(qa, "calcCenterPosition", function (e, t) {
  return t.offsetTop - (e / 2 - t.clientHeight / 2);
}),
  bt(qa, "propTypes", {
    format: ie.default.string,
    includeTimes: ie.default.array,
    intervals: ie.default.number,
    selected: ie.default.instanceOf(Date),
    openToDate: ie.default.instanceOf(Date),
    onChange: ie.default.func,
    timeClassName: ie.default.func,
    todayButton: ie.default.node,
    minTime: ie.default.instanceOf(Date),
    maxTime: ie.default.instanceOf(Date),
    excludeTimes: ie.default.array,
    filterTime: ie.default.func,
    monthRef: ie.default.object,
    timeCaption: ie.default.string,
    injectTimes: ie.default.array,
    handleOnKeyDown: ie.default.func,
    locale: ie.default.oneOfType([
      ie.default.string,
      ie.default.shape({ locale: ie.default.object }),
    ]),
    showTimeSelectOnly: ie.default.bool,
  });
var Ba = (function (e) {
  gt(a, le["default"].Component);
  var t = Mt(a);
  function a(e) {
    var r;
    return (
      mt(this, a),
      bt(
        Ct((r = t.call(this, e))),
        "YEAR_REFS",
        _t(Array(r.props.yearItemNumber)).map(function () {
          return le.default.createRef();
        })
      ),
      bt(Ct(r), "isDisabled", function (e) {
        return ra(e, r.props);
      }),
      bt(Ct(r), "isExcluded", function (e) {
        return na(e, r.props);
      }),
      bt(Ct(r), "updateFocusOnPaginate", function (e) {
        var t = function () {
          this.YEAR_REFS[e].current.focus();
        }.bind(Ct(r));
        window.requestAnimationFrame(t);
      }),
      bt(Ct(r), "handleYearClick", function (e, t) {
        r.props.onDayClick && r.props.onDayClick(e, t);
      }),
      bt(Ct(r), "handleYearNavigation", function (e, t) {
        var a = r.props,
          n = a.date,
          o = a.yearItemNumber,
          s = Ca(n, o).startPeriod;
        r.isDisabled(t) ||
          r.isExcluded(t) ||
          (r.props.setPreSelection(t),
          e - s == -1
            ? r.updateFocusOnPaginate(o - 1)
            : e - s === o
            ? r.updateFocusOnPaginate(0)
            : r.YEAR_REFS[e - s].current.focus());
      }),
      bt(Ct(r), "isSameDay", function (e, t) {
        return zt(e, t);
      }),
      bt(Ct(r), "isCurrentYear", function (e) {
        return e === Te.default(It());
      }),
      bt(Ct(r), "isKeyboardSelected", function (e) {
        var t = Wt(Ae.default(r.props.date, e));
        return (
          !r.props.disabledKeyboardNavigation &&
          !r.props.inline &&
          !zt(t, Wt(r.props.selected)) &&
          zt(t, Wt(r.props.preSelection))
        );
      }),
      bt(Ct(r), "onYearClick", function (e, t) {
        var a = r.props.date;
        r.handleYearClick(Wt(Ae.default(a, t)), e);
      }),
      bt(Ct(r), "onYearKeyDown", function (e, t) {
        var a = e.key;
        if (!r.props.disabledKeyboardNavigation)
          switch (a) {
            case "Enter":
              r.onYearClick(e, t), r.props.setPreSelection(r.props.selected);
              break;
            case "ArrowRight":
              r.handleYearNavigation(
                t + 1,
                be.default(r.props.preSelection, 1)
              );
              break;
            case "ArrowLeft":
              r.handleYearNavigation(
                t - 1,
                ke.default(r.props.preSelection, 1)
              );
          }
      }),
      bt(Ct(r), "getYearClassNames", function (e) {
        var t = r.props,
          a = t.minDate,
          n = t.maxDate,
          o = t.selected,
          s = t.excludeDates,
          l = t.includeDates,
          i = t.filterDate;
        return ue.default("react-datepicker__year-text", {
          "react-datepicker__year-text--selected": e === Te.default(o),
          "react-datepicker__year-text--disabled":
            (a || n || s || l || i) && ia(e, r.props),
          "react-datepicker__year-text--keyboard-selected":
            r.isKeyboardSelected(e),
          "react-datepicker__year-text--today": r.isCurrentYear(e),
        });
      }),
      bt(Ct(r), "getYearTabIndex", function (e) {
        return r.props.disabledKeyboardNavigation
          ? "-1"
          : e === Te.default(r.props.preSelection)
          ? "0"
          : "-1";
      }),
      r
    );
  }
  return (
    yt(a, [
      {
        key: "render",
        value: function () {
          for (
            var e = this,
              t = [],
              a = this.props,
              r = Ca(a.date, a.yearItemNumber),
              n = r.startPeriod,
              o = r.endPeriod,
              s = function (a) {
                t.push(
                  le.default.createElement(
                    "div",
                    {
                      ref: e.YEAR_REFS[a - n],
                      onClick: function (t) {
                        e.onYearClick(t, a);
                      },
                      onKeyDown: function (t) {
                        e.onYearKeyDown(t, a);
                      },
                      tabIndex: e.getYearTabIndex(a),
                      className: e.getYearClassNames(a),
                      key: a,
                      "aria-current": e.isCurrentYear(a) ? "date" : void 0,
                    },
                    a
                  )
                );
              },
              l = n;
            l <= o;
            l++
          )
            s(l);
          return le.default.createElement(
            "div",
            { className: "react-datepicker__year" },
            le.default.createElement(
              "div",
              { className: "react-datepicker__year-wrapper" },
              t
            )
          );
        },
      },
    ]),
    a
  );
})();
bt(Ba, "propTypes", {
  date: ie.default.string,
  disabledKeyboardNavigation: ie.default.bool,
  onDayClick: ie.default.func,
  preSelection: ie.default.instanceOf(Date),
  setPreSelection: ie.default.func,
  selected: ie.default.object,
  inline: ie.default.bool,
  maxDate: ie.default.instanceOf(Date),
  minDate: ie.default.instanceOf(Date),
  excludeDates: ie.default.array,
  includeDates: ie.default.array,
  filterDate: ie.default.func,
  yearItemNumber: ie.default.number,
});
var Ka = (function (e) {
  gt(a, le["default"].Component);
  var t = Mt(a);
  function a(e) {
    var r;
    return (
      mt(this, a),
      bt(Ct((r = t.call(this, e))), "onTimeChange", function (e) {
        r.setState({ time: e });
        var t = new Date();
        t.setHours(e.split(":")[0]),
          t.setMinutes(e.split(":")[1]),
          r.props.onChange(t);
      }),
      bt(Ct(r), "renderTimeInput", function () {
        var e = r.state.time,
          t = r.props,
          a = t.date,
          n = t.timeString,
          o = t.customTimeInput;
        return o
          ? le.default.cloneElement(o, {
              date: a,
              value: e,
              onChange: r.onTimeChange,
            })
          : le.default.createElement("input", {
              type: "time",
              className: "react-datepicker-time__input",
              placeholder: "Time",
              name: "time-input",
              required: !0,
              value: e,
              onChange: function (e) {
                r.onTimeChange(e.target.value || n);
              },
            });
      }),
      (r.state = { time: r.props.timeString }),
      r
    );
  }
  return (
    yt(
      a,
      [
        {
          key: "render",
          value: function () {
            return le.default.createElement(
              "div",
              { className: "react-datepicker__input-time-container" },
              le.default.createElement(
                "div",
                { className: "react-datepicker-time__caption" },
                this.props.timeInputLabel
              ),
              le.default.createElement(
                "div",
                { className: "react-datepicker-time__input-container" },
                le.default.createElement(
                  "div",
                  { className: "react-datepicker-time__input" },
                  this.renderTimeInput()
                )
              )
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (e, t) {
            return e.timeString !== t.time ? { time: e.timeString } : null;
          },
        },
      ]
    ),
    a
  );
})();
function ja(e) {
  var t = e.className,
    a = e.children,
    r = e.showPopperArrow,
    n = e.arrowProps,
    o = void 0 === n ? {} : n;
  return le.default.createElement(
    "div",
    { className: t },
    r &&
      le.default.createElement(
        "div",
        vt({ className: "react-datepicker__triangle" }, o)
      ),
    a
  );
}
bt(Ka, "propTypes", {
  onChange: ie.default.func,
  date: ie.default.instanceOf(Date),
  timeString: ie.default.string,
  timeInputLabel: ie.default.string,
  customTimeInput: ie.default.element,
}),
  (ja.propTypes = {
    className: ie.default.string,
    children: ie.default.node,
    arrowProps: ie.default.object,
    showPopperArrow: ie.default.bool,
  });
var Wa = [
    "react-datepicker__year-select",
    "react-datepicker__month-select",
    "react-datepicker__month-year-select",
  ],
  Ha = (function (e) {
    gt(a, le["default"].Component);
    var t = Mt(a);
    function a(e) {
      var r;
      return (
        mt(this, a),
        bt(Ct((r = t.call(this, e))), "handleClickOutside", function (e) {
          r.props.onClickOutside(e);
        }),
        bt(Ct(r), "setClickOutsideRef", function () {
          return r.containerRef.current;
        }),
        bt(Ct(r), "handleDropdownFocus", function (e) {
          (function () {
            var e = (
              (arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
              ).className || ""
            ).split(/\s+/);
            return Wa.some(function (t) {
              return e.indexOf(t) >= 0;
            });
          })(e.target) && r.props.onDropdownFocus();
        }),
        bt(Ct(r), "getDateInView", function () {
          var e = r.props,
            t = e.preSelection,
            a = e.selected,
            n = e.openToDate,
            o = ba(r.props),
            s = va(r.props),
            l = It(),
            i = n || a || t;
          return (
            i || (o && nt.default(l, o) ? o : s && rt.default(l, s) ? s : l)
          );
        }),
        bt(Ct(r), "increaseMonth", function () {
          r.setState(
            function (e) {
              var t = e.date;
              return { date: ye.default(t, 1) };
            },
            function () {
              return r.handleMonthChange(r.state.date);
            }
          );
        }),
        bt(Ct(r), "decreaseMonth", function () {
          r.setState(
            function (e) {
              var t = e.date;
              return { date: we.default(t, 1) };
            },
            function () {
              return r.handleMonthChange(r.state.date);
            }
          );
        }),
        bt(Ct(r), "handleDayClick", function (e, t, a) {
          r.props.onSelect(e, t, a),
            r.props.setPreSelection && r.props.setPreSelection(e);
        }),
        bt(Ct(r), "handleDayMouseEnter", function (e) {
          r.setState({ selectingDate: e }),
            r.props.onDayMouseEnter && r.props.onDayMouseEnter(e);
        }),
        bt(Ct(r), "handleMonthMouseLeave", function () {
          r.setState({ selectingDate: null }),
            r.props.onMonthMouseLeave && r.props.onMonthMouseLeave();
        }),
        bt(Ct(r), "handleYearChange", function (e) {
          r.props.onYearChange && r.props.onYearChange(e),
            r.props.adjustDateOnChange &&
              (r.props.onSelect && r.props.onSelect(e),
              r.props.setOpen && r.props.setOpen(!0)),
            r.props.setPreSelection && r.props.setPreSelection(e);
        }),
        bt(Ct(r), "handleMonthChange", function (e) {
          r.props.onMonthChange && r.props.onMonthChange(e),
            r.props.adjustDateOnChange &&
              (r.props.onSelect && r.props.onSelect(e),
              r.props.setOpen && r.props.setOpen(!0)),
            r.props.setPreSelection && r.props.setPreSelection(e);
        }),
        bt(Ct(r), "handleMonthYearChange", function (e) {
          r.handleYearChange(e), r.handleMonthChange(e);
        }),
        bt(Ct(r), "changeYear", function (e) {
          r.setState(
            function (t) {
              var a = t.date;
              return { date: Ae.default(a, e) };
            },
            function () {
              return r.handleYearChange(r.state.date);
            }
          );
        }),
        bt(Ct(r), "changeMonth", function (e) {
          r.setState(
            function (t) {
              var a = t.date;
              return { date: Re.default(a, e) };
            },
            function () {
              return r.handleMonthChange(r.state.date);
            }
          );
        }),
        bt(Ct(r), "changeMonthYear", function (e) {
          r.setState(
            function (t) {
              var a = t.date;
              return {
                date: Ae.default(Re.default(a, Ne.default(e)), Te.default(e)),
              };
            },
            function () {
              return r.handleMonthYearChange(r.state.date);
            }
          );
        }),
        bt(Ct(r), "header", function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.state.date,
            t = Kt(e, r.props.locale, r.props.calendarStartDay),
            a = [];
          return (
            r.props.showWeekNumbers &&
              a.push(
                le.default.createElement(
                  "div",
                  { key: "W", className: "react-datepicker__day-name" },
                  r.props.weekLabel || "#"
                )
              ),
            a.concat(
              [0, 1, 2, 3, 4, 5, 6].map(function (e) {
                var a = me.default(t, e),
                  n = r.formatWeekday(a, r.props.locale),
                  o = r.props.weekDayClassName
                    ? r.props.weekDayClassName(a)
                    : void 0;
                return le.default.createElement(
                  "div",
                  {
                    key: e,
                    className: ue.default("react-datepicker__day-name", o),
                  },
                  n
                );
              })
            )
          );
        }),
        bt(Ct(r), "formatWeekday", function (e, t) {
          return r.props.formatWeekDay
            ? (function (e, t, a) {
                return "function" == typeof t ? t(e, a) : Rt(e, "EEEE", a);
              })(e, r.props.formatWeekDay, t)
            : r.props.useWeekdaysShort
            ? (function (e, t) {
                return Rt(e, "EEE", t);
              })(e, t)
            : (function (e, t) {
                return Rt(e, "EEEEEE", t);
              })(e, t);
        }),
        bt(Ct(r), "decreaseYear", function () {
          r.setState(
            function (e) {
              var t = e.date;
              return {
                date: ke.default(
                  t,
                  r.props.showYearPicker ? r.props.yearItemNumber : 1
                ),
              };
            },
            function () {
              return r.handleYearChange(r.state.date);
            }
          );
        }),
        bt(Ct(r), "renderPreviousButton", function () {
          if (!r.props.renderCustomHeader) {
            var e;
            switch (!0) {
              case r.props.showMonthYearPicker:
                e = Da(r.state.date, r.props);
                break;
              case r.props.showYearPicker:
                e = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    a = t.minDate,
                    r = t.yearItemNumber,
                    n = void 0 === r ? 12 : r,
                    o = Ca(Wt(ke.default(e, n)), n).endPeriod,
                    s = a && Te.default(a);
                  return (s && s > o) || !1;
                })(r.state.date, r.props);
                break;
              default:
                e = ha(r.state.date, r.props);
            }
            if (
              (r.props.forceShowMonthNavigation ||
                r.props.showDisabledMonthNavigation ||
                !e) &&
              !r.props.showTimeSelectOnly
            ) {
              var t = [
                  "react-datepicker__navigation",
                  "react-datepicker__navigation--previous",
                ],
                a = r.decreaseMonth;
              (r.props.showMonthYearPicker ||
                r.props.showQuarterYearPicker ||
                r.props.showYearPicker) &&
                (a = r.decreaseYear),
                e &&
                  r.props.showDisabledMonthNavigation &&
                  (t.push("react-datepicker__navigation--previous--disabled"),
                  (a = null));
              var n =
                  r.props.showMonthYearPicker ||
                  r.props.showQuarterYearPicker ||
                  r.props.showYearPicker,
                o = r.props,
                s = o.previousMonthButtonLabel,
                l = o.previousYearButtonLabel,
                i = r.props,
                u = i.previousMonthAriaLabel,
                d =
                  void 0 === u
                    ? "string" == typeof s
                      ? s
                      : "Previous Month"
                    : u,
                p = i.previousYearAriaLabel,
                c =
                  void 0 === p
                    ? "string" == typeof l
                      ? l
                      : "Previous Year"
                    : p;
              return le.default.createElement(
                "button",
                {
                  type: "button",
                  className: t.join(" "),
                  onClick: a,
                  onKeyDown: r.props.handleOnKeyDown,
                  "aria-label": n ? c : d,
                },
                le.default.createElement(
                  "span",
                  {
                    className: [
                      "react-datepicker__navigation-icon",
                      "react-datepicker__navigation-icon--previous",
                    ].join(" "),
                  },
                  n
                    ? r.props.previousYearButtonLabel
                    : r.props.previousMonthButtonLabel
                )
              );
            }
          }
        }),
        bt(Ct(r), "increaseYear", function () {
          r.setState(
            function (e) {
              var t = e.date;
              return {
                date: be.default(
                  t,
                  r.props.showYearPicker ? r.props.yearItemNumber : 1
                ),
              };
            },
            function () {
              return r.handleYearChange(r.state.date);
            }
          );
        }),
        bt(Ct(r), "renderNextButton", function () {
          if (!r.props.renderCustomHeader) {
            var e;
            switch (!0) {
              case r.props.showMonthYearPicker:
                e = ya(r.state.date, r.props);
                break;
              case r.props.showYearPicker:
                e = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    a = t.maxDate,
                    r = t.yearItemNumber,
                    n = void 0 === r ? 12 : r,
                    o = Ca(be.default(e, n), n).startPeriod,
                    s = a && Te.default(a);
                  return (s && s < o) || !1;
                })(r.state.date, r.props);
                break;
              default:
                e = ma(r.state.date, r.props);
            }
            if (
              (r.props.forceShowMonthNavigation ||
                r.props.showDisabledMonthNavigation ||
                !e) &&
              !r.props.showTimeSelectOnly
            ) {
              var t = [
                "react-datepicker__navigation",
                "react-datepicker__navigation--next",
              ];
              r.props.showTimeSelect &&
                t.push("react-datepicker__navigation--next--with-time"),
                r.props.todayButton &&
                  t.push(
                    "react-datepicker__navigation--next--with-today-button"
                  );
              var a = r.increaseMonth;
              (r.props.showMonthYearPicker ||
                r.props.showQuarterYearPicker ||
                r.props.showYearPicker) &&
                (a = r.increaseYear),
                e &&
                  r.props.showDisabledMonthNavigation &&
                  (t.push("react-datepicker__navigation--next--disabled"),
                  (a = null));
              var n =
                  r.props.showMonthYearPicker ||
                  r.props.showQuarterYearPicker ||
                  r.props.showYearPicker,
                o = r.props,
                s = o.nextMonthButtonLabel,
                l = o.nextYearButtonLabel,
                i = r.props,
                u = i.nextMonthAriaLabel,
                d =
                  void 0 === u ? ("string" == typeof s ? s : "Next Month") : u,
                p = i.nextYearAriaLabel,
                c = void 0 === p ? ("string" == typeof l ? l : "Next Year") : p;
              return le.default.createElement(
                "button",
                {
                  type: "button",
                  className: t.join(" "),
                  onClick: a,
                  onKeyDown: r.props.handleOnKeyDown,
                  "aria-label": n ? c : d,
                },
                le.default.createElement(
                  "span",
                  {
                    className: [
                      "react-datepicker__navigation-icon",
                      "react-datepicker__navigation-icon--next",
                    ].join(" "),
                  },
                  n ? r.props.nextYearButtonLabel : r.props.nextMonthButtonLabel
                )
              );
            }
          }
        }),
        bt(Ct(r), "renderCurrentMonth", function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : r.state.date,
            t = ["react-datepicker__current-month"];
          return (
            r.props.showYearDropdown &&
              t.push("react-datepicker__current-month--hasYearDropdown"),
            r.props.showMonthDropdown &&
              t.push("react-datepicker__current-month--hasMonthDropdown"),
            r.props.showMonthYearDropdown &&
              t.push("react-datepicker__current-month--hasMonthYearDropdown"),
            le.default.createElement(
              "div",
              { className: t.join(" ") },
              Rt(e, r.props.dateFormat, r.props.locale)
            )
          );
        }),
        bt(Ct(r), "renderYearDropdown", function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (r.props.showYearDropdown && !e)
            return le.default.createElement(Oa, {
              adjustDateOnChange: r.props.adjustDateOnChange,
              date: r.state.date,
              onSelect: r.props.onSelect,
              setOpen: r.props.setOpen,
              dropdownMode: r.props.dropdownMode,
              onChange: r.changeYear,
              minDate: r.props.minDate,
              maxDate: r.props.maxDate,
              year: Te.default(r.state.date),
              scrollableYearDropdown: r.props.scrollableYearDropdown,
              yearDropdownItemNumber: r.props.yearDropdownItemNumber,
            });
        }),
        bt(Ct(r), "renderMonthDropdown", function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (r.props.showMonthDropdown && !e)
            return le.default.createElement(xa, {
              dropdownMode: r.props.dropdownMode,
              locale: r.props.locale,
              onChange: r.changeMonth,
              month: Ne.default(r.state.date),
              useShortMonthInDropdown: r.props.useShortMonthInDropdown,
            });
        }),
        bt(Ct(r), "renderMonthYearDropdown", function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (r.props.showMonthYearDropdown && !e)
            return le.default.createElement(Ya, {
              dropdownMode: r.props.dropdownMode,
              locale: r.props.locale,
              dateFormat: r.props.dateFormat,
              onChange: r.changeMonthYear,
              minDate: r.props.minDate,
              maxDate: r.props.maxDate,
              date: r.state.date,
              scrollableMonthYearDropdown: r.props.scrollableMonthYearDropdown,
            });
        }),
        bt(Ct(r), "handleTodayButtonClick", function (e) {
          r.props.onSelect(Qt(), e),
            r.props.setPreSelection && r.props.setPreSelection(Qt());
        }),
        bt(Ct(r), "renderTodayButton", function () {
          if (r.props.todayButton && !r.props.showTimeSelectOnly)
            return le.default.createElement(
              "div",
              {
                className: "react-datepicker__today-button",
                onClick: function (e) {
                  return r.handleTodayButtonClick(e);
                },
              },
              r.props.todayButton
            );
        }),
        bt(Ct(r), "renderDefaultHeader", function (e) {
          var t = e.monthDate,
            a = e.i;
          return le.default.createElement(
            "div",
            {
              className: "react-datepicker__header ".concat(
                r.props.showTimeSelect
                  ? "react-datepicker__header--has-time-select"
                  : ""
              ),
            },
            r.renderCurrentMonth(t),
            le.default.createElement(
              "div",
              {
                className:
                  "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                    r.props.dropdownMode
                  ),
                onFocus: r.handleDropdownFocus,
              },
              r.renderMonthDropdown(0 !== a),
              r.renderMonthYearDropdown(0 !== a),
              r.renderYearDropdown(0 !== a)
            ),
            le.default.createElement(
              "div",
              { className: "react-datepicker__day-names" },
              r.header(t)
            )
          );
        }),
        bt(Ct(r), "renderCustomHeader", function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.monthDate,
            a = e.i;
          if (
            (r.props.showTimeSelect && !r.state.monthContainer) ||
            r.props.showTimeSelectOnly
          )
            return null;
          var n = ha(r.state.date, r.props),
            o = ma(r.state.date, r.props),
            s = Da(r.state.date, r.props),
            l = ya(r.state.date, r.props),
            i =
              !r.props.showMonthYearPicker &&
              !r.props.showQuarterYearPicker &&
              !r.props.showYearPicker;
          return le.default.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker__header--custom",
              onFocus: r.props.onDropdownFocus,
            },
            r.props.renderCustomHeader(
              ft(
                ft({}, r.state),
                {},
                {
                  customHeaderCount: a,
                  monthDate: t,
                  changeMonth: r.changeMonth,
                  changeYear: r.changeYear,
                  decreaseMonth: r.decreaseMonth,
                  increaseMonth: r.increaseMonth,
                  decreaseYear: r.decreaseYear,
                  increaseYear: r.increaseYear,
                  prevMonthButtonDisabled: n,
                  nextMonthButtonDisabled: o,
                  prevYearButtonDisabled: s,
                  nextYearButtonDisabled: l,
                }
              )
            ),
            i &&
              le.default.createElement(
                "div",
                { className: "react-datepicker__day-names" },
                r.header(t)
              )
          );
        }),
        bt(Ct(r), "renderYearHeader", function () {
          var e = r.state.date,
            t = r.props,
            a = t.showYearPicker,
            n = Ca(e, t.yearItemNumber),
            o = n.startPeriod,
            s = n.endPeriod;
          return le.default.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker-year-header",
            },
            a ? "".concat(o, " - ").concat(s) : Te.default(e)
          );
        }),
        bt(Ct(r), "renderHeader", function (e) {
          switch (!0) {
            case void 0 !== r.props.renderCustomHeader:
              return r.renderCustomHeader(e);
            case r.props.showMonthYearPicker ||
              r.props.showQuarterYearPicker ||
              r.props.showYearPicker:
              return r.renderYearHeader(e);
            default:
              return r.renderDefaultHeader(e);
          }
        }),
        bt(Ct(r), "renderMonths", function () {
          if (!r.props.showTimeSelectOnly && !r.props.showYearPicker) {
            for (
              var e = [],
                t = r.props.showPreviousMonths ? r.props.monthsShown - 1 : 0,
                a = we.default(r.state.date, t),
                n = 0;
              n < r.props.monthsShown;
              ++n
            ) {
              var o = n - r.props.monthSelectedIn,
                s = ye.default(a, o),
                l = "month-".concat(n),
                i = n < r.props.monthsShown - 1,
                u = n > 0;
              e.push(
                le.default.createElement(
                  "div",
                  {
                    key: l,
                    ref: function (e) {
                      r.monthContainer = e;
                    },
                    className: "react-datepicker__month-container",
                  },
                  r.renderHeader({ monthDate: s, i: n }),
                  le.default.createElement(Aa, {
                    chooseDayAriaLabelPrefix: r.props.chooseDayAriaLabelPrefix,
                    disabledDayAriaLabelPrefix:
                      r.props.disabledDayAriaLabelPrefix,
                    weekAriaLabelPrefix: r.props.weekAriaLabelPrefix,
                    ariaLabelPrefix: r.props.monthAriaLabelPrefix,
                    onChange: r.changeMonthYear,
                    day: s,
                    dayClassName: r.props.dayClassName,
                    calendarStartDay: r.props.calendarStartDay,
                    monthClassName: r.props.monthClassName,
                    onDayClick: r.handleDayClick,
                    handleOnKeyDown: r.props.handleOnDayKeyDown,
                    onDayMouseEnter: r.handleDayMouseEnter,
                    onMouseLeave: r.handleMonthMouseLeave,
                    onWeekSelect: r.props.onWeekSelect,
                    orderInDisplay: n,
                    formatWeekNumber: r.props.formatWeekNumber,
                    locale: r.props.locale,
                    minDate: r.props.minDate,
                    maxDate: r.props.maxDate,
                    excludeDates: r.props.excludeDates,
                    excludeDateIntervals: r.props.excludeDateIntervals,
                    highlightDates: r.props.highlightDates,
                    selectingDate: r.state.selectingDate,
                    includeDates: r.props.includeDates,
                    includeDateIntervals: r.props.includeDateIntervals,
                    inline: r.props.inline,
                    shouldFocusDayInline: r.props.shouldFocusDayInline,
                    fixedHeight: r.props.fixedHeight,
                    filterDate: r.props.filterDate,
                    preSelection: r.props.preSelection,
                    setPreSelection: r.props.setPreSelection,
                    selected: r.props.selected,
                    selectsStart: r.props.selectsStart,
                    selectsEnd: r.props.selectsEnd,
                    selectsRange: r.props.selectsRange,
                    selectsDisabledDaysInRange:
                      r.props.selectsDisabledDaysInRange,
                    showWeekNumbers: r.props.showWeekNumbers,
                    startDate: r.props.startDate,
                    endDate: r.props.endDate,
                    peekNextMonth: r.props.peekNextMonth,
                    setOpen: r.props.setOpen,
                    shouldCloseOnSelect: r.props.shouldCloseOnSelect,
                    renderDayContents: r.props.renderDayContents,
                    disabledKeyboardNavigation:
                      r.props.disabledKeyboardNavigation,
                    showMonthYearPicker: r.props.showMonthYearPicker,
                    showFullMonthYearPicker: r.props.showFullMonthYearPicker,
                    showTwoColumnMonthYearPicker:
                      r.props.showTwoColumnMonthYearPicker,
                    showFourColumnMonthYearPicker:
                      r.props.showFourColumnMonthYearPicker,
                    showYearPicker: r.props.showYearPicker,
                    showQuarterYearPicker: r.props.showQuarterYearPicker,
                    isInputFocused: r.props.isInputFocused,
                    containerRef: r.containerRef,
                    monthShowsDuplicateDaysEnd: i,
                    monthShowsDuplicateDaysStart: u,
                  })
                )
              );
            }
            return e;
          }
        }),
        bt(Ct(r), "renderYears", function () {
          if (!r.props.showTimeSelectOnly)
            return r.props.showYearPicker
              ? le.default.createElement(
                  "div",
                  { className: "react-datepicker__year--container" },
                  r.renderHeader(),
                  le.default.createElement(
                    Ba,
                    vt(
                      { onDayClick: r.handleDayClick, date: r.state.date },
                      r.props
                    )
                  )
                )
              : void 0;
        }),
        bt(Ct(r), "renderTimeSection", function () {
          if (
            r.props.showTimeSelect &&
            (r.state.monthContainer || r.props.showTimeSelectOnly)
          )
            return le.default.createElement(qa, {
              selected: r.props.selected,
              openToDate: r.props.openToDate,
              onChange: r.props.onTimeChange,
              timeClassName: r.props.timeClassName,
              format: r.props.timeFormat,
              includeTimes: r.props.includeTimes,
              intervals: r.props.timeIntervals,
              minTime: r.props.minTime,
              maxTime: r.props.maxTime,
              excludeTimes: r.props.excludeTimes,
              filterTime: r.props.filterTime,
              timeCaption: r.props.timeCaption,
              todayButton: r.props.todayButton,
              showMonthDropdown: r.props.showMonthDropdown,
              showMonthYearDropdown: r.props.showMonthYearDropdown,
              showYearDropdown: r.props.showYearDropdown,
              withPortal: r.props.withPortal,
              monthRef: r.state.monthContainer,
              injectTimes: r.props.injectTimes,
              locale: r.props.locale,
              handleOnKeyDown: r.props.handleOnKeyDown,
              showTimeSelectOnly: r.props.showTimeSelectOnly,
            });
        }),
        bt(Ct(r), "renderInputTimeSection", function () {
          var e = new Date(r.props.selected),
            t =
              Lt(e) && Boolean(r.props.selected)
                ? "".concat(ka(e.getHours()), ":").concat(ka(e.getMinutes()))
                : "";
          if (r.props.showTimeInput)
            return le.default.createElement(Ka, {
              date: e,
              timeString: t,
              timeInputLabel: r.props.timeInputLabel,
              onChange: r.props.onTimeChange,
              customTimeInput: r.props.customTimeInput,
            });
        }),
        bt(Ct(r), "renderChildren", function () {
          if (r.props.children)
            return le.default.createElement(
              "div",
              { className: "react-datepicker__children-container" },
              r.props.children
            );
        }),
        (r.containerRef = le.default.createRef()),
        (r.state = {
          date: r.getDateInView(),
          selectingDate: null,
          monthContainer: null,
        }),
        r
      );
    }
    return (
      yt(
        a,
        [
          {
            key: "componentDidMount",
            value: function () {
              var e = this;
              this.props.showTimeSelect &&
                (this.assignMonthContainer = void e.setState({
                  monthContainer: e.monthContainer,
                }));
            },
          },
          {
            key: "componentDidUpdate",
            value: function (e) {
              this.props.preSelection &&
              !zt(this.props.preSelection, e.preSelection)
                ? this.setState({ date: this.props.preSelection })
                : this.props.openToDate &&
                  !zt(this.props.openToDate, e.openToDate) &&
                  this.setState({ date: this.props.openToDate });
            },
          },
          {
            key: "render",
            value: function () {
              var e = this.props.container || ja;
              return le.default.createElement(
                "div",
                { ref: this.containerRef },
                le.default.createElement(
                  e,
                  {
                    className: ue.default(
                      "react-datepicker",
                      this.props.className,
                      {
                        "react-datepicker--time-only":
                          this.props.showTimeSelectOnly,
                      }
                    ),
                    showPopperArrow: this.props.showPopperArrow,
                    arrowProps: this.props.arrowProps,
                  },
                  this.renderPreviousButton(),
                  this.renderNextButton(),
                  this.renderMonths(),
                  this.renderYears(),
                  this.renderTodayButton(),
                  this.renderTimeSection(),
                  this.renderInputTimeSection(),
                  this.renderChildren()
                )
              );
            },
          },
        ],
        [
          {
            key: "defaultProps",
            get: function () {
              return {
                onDropdownFocus: function () {},
                monthsShown: 1,
                monthSelectedIn: 0,
                forceShowMonthNavigation: !1,
                timeCaption: "Time",
                previousYearButtonLabel: "Previous Year",
                nextYearButtonLabel: "Next Year",
                previousMonthButtonLabel: "Previous Month",
                nextMonthButtonLabel: "Next Month",
                customTimeInput: null,
                yearItemNumber: 12,
              };
            },
          },
        ]
      ),
      a
    );
  })();
bt(Ha, "propTypes", {
  adjustDateOnChange: ie.default.bool,
  arrowProps: ie.default.object,
  chooseDayAriaLabelPrefix: ie.default.string,
  className: ie.default.string,
  children: ie.default.node,
  container: ie.default.func,
  dateFormat: ie.default.oneOfType([ie.default.string, ie.default.array])
    .isRequired,
  dayClassName: ie.default.func,
  weekDayClassName: ie.default.func,
  disabledDayAriaLabelPrefix: ie.default.string,
  monthClassName: ie.default.func,
  timeClassName: ie.default.func,
  disabledKeyboardNavigation: ie.default.bool,
  calendarStartDay: ie.default.number,
  dropdownMode: ie.default.oneOf(["scroll", "select"]),
  endDate: ie.default.instanceOf(Date),
  excludeDates: ie.default.array,
  excludeDateIntervals: ie.default.arrayOf(
    ie.default.shape({
      start: ie.default.instanceOf(Date),
      end: ie.default.instanceOf(Date),
    })
  ),
  filterDate: ie.default.func,
  fixedHeight: ie.default.bool,
  formatWeekNumber: ie.default.func,
  highlightDates: ie.default.instanceOf(Map),
  includeDates: ie.default.array,
  includeDateIntervals: ie.default.arrayOf(
    ie.default.shape({
      start: ie.default.instanceOf(Date),
      end: ie.default.instanceOf(Date),
    })
  ),
  includeTimes: ie.default.array,
  injectTimes: ie.default.array,
  inline: ie.default.bool,
  shouldFocusDayInline: ie.default.bool,
  locale: ie.default.oneOfType([
    ie.default.string,
    ie.default.shape({ locale: ie.default.object }),
  ]),
  maxDate: ie.default.instanceOf(Date),
  minDate: ie.default.instanceOf(Date),
  monthsShown: ie.default.number,
  monthSelectedIn: ie.default.number,
  nextMonthAriaLabel: ie.default.string,
  nextYearAriaLabel: ie.default.string,
  onClickOutside: ie.default.func.isRequired,
  onMonthChange: ie.default.func,
  onYearChange: ie.default.func,
  forceShowMonthNavigation: ie.default.bool,
  onDropdownFocus: ie.default.func,
  onSelect: ie.default.func.isRequired,
  onWeekSelect: ie.default.func,
  showTimeSelect: ie.default.bool,
  showTimeInput: ie.default.bool,
  showMonthYearPicker: ie.default.bool,
  showFullMonthYearPicker: ie.default.bool,
  showTwoColumnMonthYearPicker: ie.default.bool,
  showFourColumnMonthYearPicker: ie.default.bool,
  showYearPicker: ie.default.bool,
  showQuarterYearPicker: ie.default.bool,
  showTimeSelectOnly: ie.default.bool,
  timeFormat: ie.default.string,
  timeIntervals: ie.default.number,
  onTimeChange: ie.default.func,
  timeInputLabel: ie.default.string,
  minTime: ie.default.instanceOf(Date),
  maxTime: ie.default.instanceOf(Date),
  excludeTimes: ie.default.array,
  filterTime: ie.default.func,
  timeCaption: ie.default.string,
  openToDate: ie.default.instanceOf(Date),
  peekNextMonth: ie.default.bool,
  previousMonthAriaLabel: ie.default.string,
  previousYearAriaLabel: ie.default.string,
  scrollableYearDropdown: ie.default.bool,
  scrollableMonthYearDropdown: ie.default.bool,
  preSelection: ie.default.instanceOf(Date),
  selected: ie.default.instanceOf(Date),
  selectsEnd: ie.default.bool,
  selectsStart: ie.default.bool,
  selectsRange: ie.default.bool,
  selectsDisabledDaysInRange: ie.default.bool,
  showMonthDropdown: ie.default.bool,
  showPreviousMonths: ie.default.bool,
  showMonthYearDropdown: ie.default.bool,
  showWeekNumbers: ie.default.bool,
  showYearDropdown: ie.default.bool,
  startDate: ie.default.instanceOf(Date),
  todayButton: ie.default.string,
  useWeekdaysShort: ie.default.bool,
  formatWeekDay: ie.default.func,
  withPortal: ie.default.bool,
  weekLabel: ie.default.string,
  yearItemNumber: ie.default.number,
  yearDropdownItemNumber: ie.default.number,
  setOpen: ie.default.func,
  shouldCloseOnSelect: ie.default.bool,
  useShortMonthInDropdown: ie.default.bool,
  showDisabledMonthNavigation: ie.default.bool,
  previousMonthButtonLabel: ie.default.oneOfType([
    ie.default.string,
    ie.default.node,
  ]),
  nextMonthButtonLabel: ie.default.oneOfType([
    ie.default.string,
    ie.default.node,
  ]),
  previousYearButtonLabel: ie.default.string,
  nextYearButtonLabel: ie.default.string,
  renderCustomHeader: ie.default.func,
  renderDayContents: ie.default.func,
  onDayMouseEnter: ie.default.func,
  onMonthMouseLeave: ie.default.func,
  showPopperArrow: ie.default.bool,
  handleOnKeyDown: ie.default.func,
  handleOnDayKeyDown: ie.default.func,
  isInputFocused: ie.default.bool,
  customTimeInput: ie.default.element,
  weekAriaLabelPrefix: ie.default.string,
  monthAriaLabelPrefix: ie.default.string,
  setPreSelection: ie.default.func,
});
var Qa = (function (e) {
  gt(a, le["default"].Component);
  var t = Mt(a);
  function a(e) {
    var r;
    return (
      mt(this, a), ((r = t.call(this, e)).el = document.createElement("div")), r
    );
  }
  return (
    yt(a, [
      {
        key: "componentDidMount",
        value: function () {
          (this.portalRoot = (this.props.portalHost || document).getElementById(
            this.props.portalId
          )),
            this.portalRoot ||
              ((this.portalRoot = document.createElement("div")),
              this.portalRoot.setAttribute("id", this.props.portalId),
              (this.props.portalHost || document.body).appendChild(
                this.portalRoot
              )),
            this.portalRoot.appendChild(this.el);
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this.portalRoot.removeChild(this.el);
        },
      },
      {
        key: "render",
        value: function () {
          return dt.default.createPortal(this.props.children, this.el);
        },
      },
    ]),
    a
  );
})();
bt(Qa, "propTypes", {
  children: ie.default.any,
  portalId: ie.default.string,
  portalHost: ie.default.instanceOf(ShadowRoot),
});
var Va = []
    .concat(["top", "bottom", "right", "left"], ["auto"])
    .reduce(function (e, t) {
      return e.concat([t, t + "-start", t + "-end"]);
    }, []),
  Ua = function (e) {
    return !e.disabled && -1 !== e.tabIndex;
  },
  $a = (function (e) {
    gt(a, le["default"].Component);
    var t = Mt(a);
    function a(e) {
      var r;
      return (
        mt(this, a),
        bt(Ct((r = t.call(this, e))), "getTabChildren", function () {
          return Array.prototype.slice
            .call(
              r.tabLoopRef.current.querySelectorAll(
                "[tabindex], a, button, input, select, textarea"
              ),
              1,
              -1
            )
            .filter(Ua);
        }),
        bt(Ct(r), "handleFocusStart", function (e) {
          var t = r.getTabChildren();
          t && t.length > 1 && t[t.length - 1].focus();
        }),
        bt(Ct(r), "handleFocusEnd", function (e) {
          var t = r.getTabChildren();
          t && t.length > 1 && t[0].focus();
        }),
        (r.tabLoopRef = le.default.createRef()),
        r
      );
    }
    return (
      yt(
        a,
        [
          {
            key: "render",
            value: function () {
              return this.props.enableTabLoop
                ? le.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__tab-loop",
                      ref: this.tabLoopRef,
                    },
                    le.default.createElement("div", {
                      className: "react-datepicker__tab-loop__start",
                      tabIndex: "0",
                      onFocus: this.handleFocusStart,
                    }),
                    this.props.children,
                    le.default.createElement("div", {
                      className: "react-datepicker__tab-loop__end",
                      tabIndex: "0",
                      onFocus: this.handleFocusEnd,
                    })
                  )
                : this.props.children;
            },
          },
        ],
        [
          {
            key: "defaultProps",
            get: function () {
              return { enableTabLoop: !0 };
            },
          },
        ]
      ),
      a
    );
  })();
bt($a, "propTypes", {
  children: ie.default.any,
  enableTabLoop: ie.default.bool,
});
var za = Va,
  Ga = (function (e) {
    gt(a, le["default"].Component);
    var t = Mt(a);
    function a() {
      return mt(this, a), t.apply(this, arguments);
    }
    return (
      yt(
        a,
        [
          {
            key: "render",
            value: function () {
              var e,
                t = this.props,
                a = t.className,
                r = t.wrapperClassName,
                n = t.hidePopper,
                o = t.popperComponent,
                s = t.popperModifiers,
                l = t.popperPlacement,
                i = t.popperProps,
                u = t.targetComponent,
                d = t.enableTabLoop,
                p = t.popperOnKeyDown,
                c = t.portalId,
                f = t.portalHost;
              if (!n) {
                var h = ue.default("react-datepicker-popper", a);
                e = le.default.createElement(
                  ne.Popper,
                  vt({ modifiers: s, placement: l }, i),
                  function (e) {
                    var t = e.ref,
                      a = e.style,
                      r = e.placement,
                      n = e.arrowProps;
                    return le.default.createElement(
                      $a,
                      { enableTabLoop: d },
                      le.default.createElement(
                        "div",
                        {
                          ref: t,
                          style: a,
                          className: h,
                          "data-placement": r,
                          onKeyDown: p,
                        },
                        le.default.cloneElement(o, { arrowProps: n })
                      )
                    );
                  }
                );
              }
              this.props.popperContainer &&
                (e = le.default.createElement(
                  this.props.popperContainer,
                  {},
                  e
                )),
                c &&
                  !n &&
                  (e = le.default.createElement(
                    Qa,
                    { portalId: c, portalHost: f },
                    e
                  ));
              var m = ue.default("react-datepicker-wrapper", r);
              return le.default.createElement(
                ne.Manager,
                { className: "react-datepicker-manager" },
                le.default.createElement(ne.Reference, null, function (e) {
                  var t = e.ref;
                  return le.default.createElement(
                    "div",
                    { ref: t, className: m },
                    u
                  );
                }),
                e
              );
            },
          },
        ],
        [
          {
            key: "defaultProps",
            get: function () {
              return {
                hidePopper: !0,
                popperModifiers: [],
                popperProps: {},
                popperPlacement: "bottom-start",
              };
            },
          },
        ]
      ),
      a
    );
  })();
bt(Ga, "propTypes", {
  className: ie.default.string,
  wrapperClassName: ie.default.string,
  hidePopper: ie.default.bool,
  popperComponent: ie.default.element,
  popperModifiers: ie.default.arrayOf(ie.default.object),
  popperPlacement: ie.default.oneOf(za),
  popperContainer: ie.default.func,
  popperProps: ie.default.object,
  targetComponent: ie.default.element,
  enableTabLoop: ie.default.bool,
  popperOnKeyDown: ie.default.func,
  portalId: ie.default.string,
  portalHost: ie.default.instanceOf(ShadowRoot),
});
var Ja = ut.default(Ha);
var Xa = (function (e) {
  gt(a, le["default"].Component);
  var t = Mt(a);
  function a(e) {
    var r;
    return (
      mt(this, a),
      bt(Ct((r = t.call(this, e))), "getPreSelection", function () {
        return r.props.openToDate
          ? r.props.openToDate
          : r.props.selectsEnd && r.props.startDate
          ? r.props.startDate
          : r.props.selectsStart && r.props.endDate
          ? r.props.endDate
          : It();
      }),
      bt(Ct(r), "calcInitialState", function () {
        var e,
          t = r.getPreSelection(),
          a = ba(r.props),
          n = va(r.props),
          o =
            a && nt.default(t, He.default(a))
              ? a
              : n && rt.default(t, ze.default(n))
              ? n
              : t;
        return {
          open: r.props.startOpen || !1,
          preventFocus: !1,
          preSelection:
            null !==
              (e = r.props.selectsRange
                ? r.props.startDate
                : r.props.selected) && void 0 !== e
              ? e
              : o,
          highlightDates: ga(r.props.highlightDates),
          focused: !1,
          shouldFocusDayInline: !1,
        };
      }),
      bt(Ct(r), "clearPreventFocusTimeout", function () {
        r.preventFocusTimeout && clearTimeout(r.preventFocusTimeout);
      }),
      bt(Ct(r), "setFocus", function () {
        r.input && r.input.focus && r.input.focus({ preventScroll: !0 });
      }),
      bt(Ct(r), "setBlur", function () {
        r.input && r.input.blur && r.input.blur(), r.cancelFocusInput();
      }),
      bt(Ct(r), "setOpen", function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        r.setState(
          {
            open: e,
            preSelection:
              e && r.state.open
                ? r.state.preSelection
                : r.calcInitialState().preSelection,
            lastPreSelectChange: er,
          },
          function () {
            e ||
              r.setState(
                function (e) {
                  return { focused: !!t && e.focused };
                },
                function () {
                  !t && r.setBlur(), r.setState({ inputValue: null });
                }
              );
          }
        );
      }),
      bt(Ct(r), "inputOk", function () {
        return de.default(r.state.preSelection);
      }),
      bt(Ct(r), "isCalendarOpen", function () {
        return void 0 === r.props.open
          ? r.state.open && !r.props.disabled && !r.props.readOnly
          : r.props.open;
      }),
      bt(Ct(r), "handleFocus", function (e) {
        r.state.preventFocus ||
          (r.props.onFocus(e),
          r.props.preventOpenOnFocus || r.props.readOnly || r.setOpen(!0)),
          r.setState({ focused: !0 });
      }),
      bt(Ct(r), "cancelFocusInput", function () {
        clearTimeout(r.inputFocusTimeout), (r.inputFocusTimeout = null);
      }),
      bt(Ct(r), "deferFocusInput", function () {
        r.cancelFocusInput(),
          (r.inputFocusTimeout = setTimeout(function () {
            return r.setFocus();
          }, 1));
      }),
      bt(Ct(r), "handleDropdownFocus", function () {
        r.cancelFocusInput();
      }),
      bt(Ct(r), "handleBlur", function (e) {
        (!r.state.open || r.props.withPortal || r.props.showTimeInput) &&
          r.props.onBlur(e),
          r.setState({ focused: !1 });
      }),
      bt(Ct(r), "handleCalendarClickOutside", function (e) {
        r.props.inline || r.setOpen(!1),
          r.props.onClickOutside(e),
          r.props.withPortal && e.preventDefault();
      }),
      bt(Ct(r), "handleChange", function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        var n = t[0];
        if (
          !r.props.onChangeRaw ||
          (r.props.onChangeRaw.apply(Ct(r), t),
          "function" == typeof n.isDefaultPrevented && !n.isDefaultPrevented())
        ) {
          r.setState({ inputValue: n.target.value, lastPreSelectChange: Za });
          var o = Yt(
            n.target.value,
            r.props.dateFormat,
            r.props.locale,
            r.props.strictParsing,
            r.props.minDate
          );
          r.props.showTimeSelectOnly &&
            !zt(o, r.props.selected) &&
            (o = pt.default(r.props.selected, {
              hours: Me.default(o),
              minutes: Se.default(o),
              seconds: Ce.default(o),
            })),
            (!o && n.target.value) || r.setSelected(o, n, !0);
        }
      }),
      bt(Ct(r), "handleSelect", function (e, t, a) {
        if (
          (r.setState({ preventFocus: !0 }, function () {
            return (
              (r.preventFocusTimeout = setTimeout(function () {
                return r.setState({ preventFocus: !1 });
              }, 50)),
              r.preventFocusTimeout
            );
          }),
          r.props.onChangeRaw && r.props.onChangeRaw(t),
          r.setSelected(e, t, !1, a),
          !r.props.shouldCloseOnSelect || r.props.showTimeSelect)
        )
          r.setPreSelection(e);
        else if (!r.props.inline) {
          r.props.selectsRange ||
            setTimeout(function () {
              return r.setOpen(!1);
            }, 100);
          var n = r.props,
            o = n.startDate,
            s = n.endDate;
          !o ||
            s ||
            nt.default(e, o) ||
            setTimeout(function () {
              return r.setOpen(!1);
            }, 100);
        }
      }),
      bt(Ct(r), "setSelected", function (e, t, a, n) {
        var o = e;
        if (r.props.showYearPicker) {
          if (null !== o && ia(Te.default(o), r.props)) return;
        } else if (r.props.showMonthYearPicker) {
          if (null !== o && oa(o, r.props)) return;
        } else if (null !== o && ra(o, r.props)) return;
        var s = r.props,
          l = s.onChange,
          i = s.selectsRange,
          u = s.startDate,
          d = s.endDate;
        if (!Gt(r.props.selected, o) || r.props.allowSameDay || i)
          if (
            (null !== o &&
              (!r.props.selected ||
                (a &&
                  (r.props.showTimeSelect ||
                    r.props.showTimeSelectOnly ||
                    r.props.showTimeInput)) ||
                (o = At(o, {
                  hour: Me.default(r.props.selected),
                  minute: Se.default(r.props.selected),
                  second: Ce.default(r.props.selected),
                })),
              r.props.inline || r.setState({ preSelection: o }),
              r.props.focusSelectedMonth || r.setState({ monthSelectedIn: n })),
            i)
          ) {
            var p = u && !d,
              c = u && d;
            !u && !d
              ? l([o, null], t)
              : p && (nt.default(o, u) ? l([o, null], t) : l([u, o], t)),
              c && l([o, null], t);
          } else l(o, t);
        a || (r.props.onSelect(o, t), r.setState({ inputValue: null }));
      }),
      bt(Ct(r), "setPreSelection", function (e) {
        var t = void 0 !== r.props.minDate,
          a = void 0 !== r.props.maxDate,
          n = !0;
        if (e) {
          var o = He.default(e);
          if (t && a) n = Jt(e, r.props.minDate, r.props.maxDate);
          else if (t) {
            var s = He.default(r.props.minDate);
            n = rt.default(e, s) || Gt(o, s);
          } else if (a) {
            var l = ze.default(r.props.maxDate);
            n = nt.default(e, l) || Gt(o, l);
          }
        }
        n && r.setState({ preSelection: e });
      }),
      bt(Ct(r), "handleTimeChange", function (e) {
        var t = At(r.props.selected ? r.props.selected : r.getPreSelection(), {
          hour: Me.default(e),
          minute: Se.default(e),
        });
        r.setState({ preSelection: t }),
          r.props.onChange(t),
          r.props.shouldCloseOnSelect && r.setOpen(!1),
          r.props.showTimeInput && r.setOpen(!0),
          r.setState({ inputValue: null });
      }),
      bt(Ct(r), "onInputClick", function () {
        r.props.disabled || r.props.readOnly || r.setOpen(!0),
          r.props.onInputClick();
      }),
      bt(Ct(r), "onInputKeyDown", function (e) {
        r.props.onKeyDown(e);
        var t = e.key;
        if (r.state.open || r.props.inline || r.props.preventOpenOnFocus) {
          if (r.state.open) {
            if ("ArrowDown" === t || "ArrowUp" === t) {
              e.preventDefault();
              var a =
                r.calendar.componentNode &&
                r.calendar.componentNode.querySelector(
                  '.react-datepicker__day[tabindex="0"]'
                );
              return void (a && a.focus({ preventScroll: !0 }));
            }
            var n = It(r.state.preSelection);
            "Enter" === t
              ? (e.preventDefault(),
                r.inputOk() && r.state.lastPreSelectChange === er
                  ? (r.handleSelect(n, e),
                    !r.props.shouldCloseOnSelect && r.setPreSelection(n))
                  : r.setOpen(!1))
              : "Escape" === t && (e.preventDefault(), r.setOpen(!1)),
              r.inputOk() ||
                r.props.onInputError({ code: 1, msg: "Date input not valid." });
          }
        } else ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) || r.onInputClick();
      }),
      bt(Ct(r), "onPortalKeyDown", function (e) {
        "Escape" === e.key &&
          (e.preventDefault(),
          r.setState({ preventFocus: !0 }, function () {
            r.setOpen(!1),
              setTimeout(function () {
                r.setFocus(), r.setState({ preventFocus: !1 });
              });
          }));
      }),
      bt(Ct(r), "onDayKeyDown", function (e) {
        r.props.onKeyDown(e);
        var t = e.key,
          a = It(r.state.preSelection);
        if ("Enter" === t)
          e.preventDefault(),
            r.handleSelect(a, e),
            !r.props.shouldCloseOnSelect && r.setPreSelection(a);
        else if ("Escape" === t)
          e.preventDefault(),
            r.setOpen(!1),
            r.inputOk() ||
              r.props.onInputError({ code: 1, msg: "Date input not valid." });
        else if (!r.props.disabledKeyboardNavigation) {
          var n;
          switch (t) {
            case "ArrowLeft":
              n = ve.default(a, 1);
              break;
            case "ArrowRight":
              n = me.default(a, 1);
              break;
            case "ArrowUp":
              n = ge.default(a, 1);
              break;
            case "ArrowDown":
              n = De.default(a, 1);
              break;
            case "PageUp":
              n = we.default(a, 1);
              break;
            case "PageDown":
              n = ye.default(a, 1);
              break;
            case "Home":
              n = ke.default(a, 1);
              break;
            case "End":
              n = be.default(a, 1);
          }
          if (!n)
            return void (
              r.props.onInputError &&
              r.props.onInputError({ code: 1, msg: "Date input not valid." })
            );
          if (
            (e.preventDefault(),
            r.setState({ lastPreSelectChange: er }),
            r.props.adjustDateOnChange && r.setSelected(n),
            r.setPreSelection(n),
            r.props.inline)
          ) {
            var o = Ne.default(a),
              s = Ne.default(n),
              l = Te.default(a),
              i = Te.default(n);
            o !== s || l !== i
              ? r.setState({ shouldFocusDayInline: !0 })
              : r.setState({ shouldFocusDayInline: !1 });
          }
        }
      }),
      bt(Ct(r), "onPopperKeyDown", function (e) {
        "Escape" === e.key &&
          (e.preventDefault(),
          r.setState({ preventFocus: !0 }, function () {
            r.setOpen(!1),
              setTimeout(function () {
                r.setFocus(), r.setState({ preventFocus: !1 });
              });
          }));
      }),
      bt(Ct(r), "onClearClick", function (e) {
        e && e.preventDefault && e.preventDefault(),
          r.props.selectsRange
            ? r.props.onChange([null, null], e)
            : r.props.onChange(null, e),
          r.setState({ inputValue: null });
      }),
      bt(Ct(r), "clear", function () {
        r.onClearClick();
      }),
      bt(Ct(r), "onScroll", function (e) {
        "boolean" == typeof r.props.closeOnScroll && r.props.closeOnScroll
          ? (e.target !== document &&
              e.target !== document.documentElement &&
              e.target !== document.body) ||
            r.setOpen(!1)
          : "function" == typeof r.props.closeOnScroll &&
            r.props.closeOnScroll(e) &&
            r.setOpen(!1);
      }),
      bt(Ct(r), "renderCalendar", function () {
        return r.props.inline || r.isCalendarOpen()
          ? le.default.createElement(
              Ja,
              {
                ref: function (e) {
                  r.calendar = e;
                },
                locale: r.props.locale,
                calendarStartDay: r.props.calendarStartDay,
                chooseDayAriaLabelPrefix: r.props.chooseDayAriaLabelPrefix,
                disabledDayAriaLabelPrefix: r.props.disabledDayAriaLabelPrefix,
                weekAriaLabelPrefix: r.props.weekAriaLabelPrefix,
                monthAriaLabelPrefix: r.props.monthAriaLabelPrefix,
                adjustDateOnChange: r.props.adjustDateOnChange,
                setOpen: r.setOpen,
                shouldCloseOnSelect: r.props.shouldCloseOnSelect,
                dateFormat: r.props.dateFormatCalendar,
                useWeekdaysShort: r.props.useWeekdaysShort,
                formatWeekDay: r.props.formatWeekDay,
                dropdownMode: r.props.dropdownMode,
                selected: r.props.selected,
                preSelection: r.state.preSelection,
                onSelect: r.handleSelect,
                onWeekSelect: r.props.onWeekSelect,
                openToDate: r.props.openToDate,
                minDate: r.props.minDate,
                maxDate: r.props.maxDate,
                selectsStart: r.props.selectsStart,
                selectsEnd: r.props.selectsEnd,
                selectsRange: r.props.selectsRange,
                startDate: r.props.startDate,
                endDate: r.props.endDate,
                excludeDates: r.props.excludeDates,
                excludeDateIntervals: r.props.excludeDateIntervals,
                filterDate: r.props.filterDate,
                onClickOutside: r.handleCalendarClickOutside,
                formatWeekNumber: r.props.formatWeekNumber,
                highlightDates: r.state.highlightDates,
                includeDates: r.props.includeDates,
                includeDateIntervals: r.props.includeDateIntervals,
                includeTimes: r.props.includeTimes,
                injectTimes: r.props.injectTimes,
                inline: r.props.inline,
                shouldFocusDayInline: r.state.shouldFocusDayInline,
                peekNextMonth: r.props.peekNextMonth,
                showMonthDropdown: r.props.showMonthDropdown,
                showPreviousMonths: r.props.showPreviousMonths,
                useShortMonthInDropdown: r.props.useShortMonthInDropdown,
                showMonthYearDropdown: r.props.showMonthYearDropdown,
                showWeekNumbers: r.props.showWeekNumbers,
                showYearDropdown: r.props.showYearDropdown,
                withPortal: r.props.withPortal,
                forceShowMonthNavigation: r.props.forceShowMonthNavigation,
                showDisabledMonthNavigation:
                  r.props.showDisabledMonthNavigation,
                scrollableYearDropdown: r.props.scrollableYearDropdown,
                scrollableMonthYearDropdown:
                  r.props.scrollableMonthYearDropdown,
                todayButton: r.props.todayButton,
                weekLabel: r.props.weekLabel,
                outsideClickIgnoreClass:
                  "react-datepicker-ignore-onclickoutside",
                fixedHeight: r.props.fixedHeight,
                monthsShown: r.props.monthsShown,
                monthSelectedIn: r.state.monthSelectedIn,
                onDropdownFocus: r.handleDropdownFocus,
                onMonthChange: r.props.onMonthChange,
                onYearChange: r.props.onYearChange,
                dayClassName: r.props.dayClassName,
                weekDayClassName: r.props.weekDayClassName,
                monthClassName: r.props.monthClassName,
                timeClassName: r.props.timeClassName,
                showTimeSelect: r.props.showTimeSelect,
                showTimeSelectOnly: r.props.showTimeSelectOnly,
                onTimeChange: r.handleTimeChange,
                timeFormat: r.props.timeFormat,
                timeIntervals: r.props.timeIntervals,
                minTime: r.props.minTime,
                maxTime: r.props.maxTime,
                excludeTimes: r.props.excludeTimes,
                filterTime: r.props.filterTime,
                timeCaption: r.props.timeCaption,
                className: r.props.calendarClassName,
                container: r.props.calendarContainer,
                yearItemNumber: r.props.yearItemNumber,
                yearDropdownItemNumber: r.props.yearDropdownItemNumber,
                previousMonthAriaLabel: r.props.previousMonthAriaLabel,
                previousMonthButtonLabel: r.props.previousMonthButtonLabel,
                nextMonthAriaLabel: r.props.nextMonthAriaLabel,
                nextMonthButtonLabel: r.props.nextMonthButtonLabel,
                previousYearAriaLabel: r.props.previousYearAriaLabel,
                previousYearButtonLabel: r.props.previousYearButtonLabel,
                nextYearAriaLabel: r.props.nextYearAriaLabel,
                nextYearButtonLabel: r.props.nextYearButtonLabel,
                timeInputLabel: r.props.timeInputLabel,
                disabledKeyboardNavigation: r.props.disabledKeyboardNavigation,
                renderCustomHeader: r.props.renderCustomHeader,
                popperProps: r.props.popperProps,
                renderDayContents: r.props.renderDayContents,
                onDayMouseEnter: r.props.onDayMouseEnter,
                onMonthMouseLeave: r.props.onMonthMouseLeave,
                selectsDisabledDaysInRange: r.props.selectsDisabledDaysInRange,
                showTimeInput: r.props.showTimeInput,
                showMonthYearPicker: r.props.showMonthYearPicker,
                showFullMonthYearPicker: r.props.showFullMonthYearPicker,
                showTwoColumnMonthYearPicker:
                  r.props.showTwoColumnMonthYearPicker,
                showFourColumnMonthYearPicker:
                  r.props.showFourColumnMonthYearPicker,
                showYearPicker: r.props.showYearPicker,
                showQuarterYearPicker: r.props.showQuarterYearPicker,
                showPopperArrow: r.props.showPopperArrow,
                excludeScrollbar: r.props.excludeScrollbar,
                handleOnKeyDown: r.props.onKeyDown,
                handleOnDayKeyDown: r.onDayKeyDown,
                isInputFocused: r.state.focused,
                customTimeInput: r.props.customTimeInput,
                setPreSelection: r.setPreSelection,
              },
              r.props.children
            )
          : null;
      }),
      bt(Ct(r), "renderDateInput", function () {
        var e,
          t = ue.default(
            r.props.className,
            bt({}, "react-datepicker-ignore-onclickoutside", r.state.open)
          ),
          a =
            r.props.customInput ||
            le.default.createElement("input", { type: "text" }),
          n = r.props.customInputRef || "ref",
          o =
            "string" == typeof r.props.value
              ? r.props.value
              : "string" == typeof r.state.inputValue
              ? r.state.inputValue
              : r.props.selectsRange
              ? (function (e, t, a) {
                  if (!e) return "";
                  var r = Ft(e, a),
                    n = t ? Ft(t, a) : "";
                  return "".concat(r, " - ").concat(n);
                })(r.props.startDate, r.props.endDate, r.props)
              : Ft(r.props.selected, r.props);
        return le.default.cloneElement(
          a,
          (bt((e = {}), n, function (e) {
            r.input = e;
          }),
          bt(e, "value", o),
          bt(e, "onBlur", r.handleBlur),
          bt(e, "onChange", r.handleChange),
          bt(e, "onClick", r.onInputClick),
          bt(e, "onFocus", r.handleFocus),
          bt(e, "onKeyDown", r.onInputKeyDown),
          bt(e, "id", r.props.id),
          bt(e, "name", r.props.name),
          bt(e, "autoFocus", r.props.autoFocus),
          bt(e, "placeholder", r.props.placeholderText),
          bt(e, "disabled", r.props.disabled),
          bt(e, "autoComplete", r.props.autoComplete),
          bt(e, "className", ue.default(a.props.className, t)),
          bt(e, "title", r.props.title),
          bt(e, "readOnly", r.props.readOnly),
          bt(e, "required", r.props.required),
          bt(e, "tabIndex", r.props.tabIndex),
          bt(e, "aria-describedby", r.props.ariaDescribedBy),
          bt(e, "aria-invalid", r.props.ariaInvalid),
          bt(e, "aria-labelledby", r.props.ariaLabelledBy),
          bt(e, "aria-required", r.props.ariaRequired),
          e)
        );
      }),
      bt(Ct(r), "renderClearButton", function () {
        var e = r.props,
          t = e.isClearable,
          a = e.selected,
          n = e.startDate,
          o = e.endDate,
          s = e.clearButtonTitle,
          l = e.clearButtonClassName,
          i = void 0 === l ? "" : l,
          u = e.ariaLabelClose,
          d = void 0 === u ? "Close" : u;
        return !t || (null == a && null == n && null == o)
          ? null
          : le.default.createElement("button", {
              type: "button",
              className: "react-datepicker__close-icon ".concat(i).trim(),
              "aria-label": d,
              onClick: r.onClearClick,
              title: s,
              tabIndex: -1,
            });
      }),
      (r.state = r.calcInitialState()),
      r
    );
  }
  return (
    yt(
      a,
      [
        {
          key: "componentDidMount",
          value: function () {
            window.addEventListener("scroll", this.onScroll, !0);
          },
        },
        {
          key: "componentDidUpdate",
          value: function (e, t) {
            var a, r;
            e.inline &&
              ((a = e.selected),
              (r = this.props.selected),
              a && r
                ? Ne.default(a) !== Ne.default(r) ||
                  Te.default(a) !== Te.default(r)
                : a !== r) &&
              this.setPreSelection(this.props.selected),
              void 0 !== this.state.monthSelectedIn &&
                e.monthsShown !== this.props.monthsShown &&
                this.setState({ monthSelectedIn: 0 }),
              e.highlightDates !== this.props.highlightDates &&
                this.setState({
                  highlightDates: ga(this.props.highlightDates),
                }),
              t.focused ||
                Gt(e.selected, this.props.selected) ||
                this.setState({ inputValue: null }),
              t.open !== this.state.open &&
                (!1 === t.open &&
                  !0 === this.state.open &&
                  this.props.onCalendarOpen(),
                !0 === t.open &&
                  !1 === this.state.open &&
                  this.props.onCalendarClose());
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this.clearPreventFocusTimeout(),
              window.removeEventListener("scroll", this.onScroll, !0);
          },
        },
        {
          key: "renderInputContainer",
          value: function () {
            return le.default.createElement(
              "div",
              { className: "react-datepicker__input-container" },
              this.renderDateInput(),
              this.renderClearButton()
            );
          },
        },
        {
          key: "render",
          value: function () {
            var e = this.renderCalendar();
            if (this.props.inline) return e;
            if (this.props.withPortal) {
              var t = this.state.open
                ? le.default.createElement(
                    $a,
                    { enableTabLoop: this.props.enableTabLoop },
                    le.default.createElement(
                      "div",
                      {
                        className: "react-datepicker__portal",
                        tabIndex: -1,
                        onKeyDown: this.onPortalKeyDown,
                      },
                      e
                    )
                  )
                : null;
              return (
                this.state.open &&
                  this.props.portalId &&
                  (t = le.default.createElement(
                    Qa,
                    {
                      portalId: this.props.portalId,
                      portalHost: this.props.portalHost,
                    },
                    t
                  )),
                le.default.createElement(
                  "div",
                  null,
                  this.renderInputContainer(),
                  t
                )
              );
            }
            return le.default.createElement(Ga, {
              className: this.props.popperClassName,
              wrapperClassName: this.props.wrapperClassName,
              hidePopper: !this.isCalendarOpen(),
              portalId: this.props.portalId,
              portalHost: this.props.portalHost,
              popperModifiers: this.props.popperModifiers,
              targetComponent: this.renderInputContainer(),
              popperContainer: this.props.popperContainer,
              popperComponent: e,
              popperPlacement: this.props.popperPlacement,
              popperProps: this.props.popperProps,
              popperOnKeyDown: this.onPopperKeyDown,
              enableTabLoop: this.props.enableTabLoop,
            });
          },
        },
      ],
      [
        {
          key: "defaultProps",
          get: function () {
            return {
              allowSameDay: !1,
              dateFormat: "MM/dd/yyyy",
              dateFormatCalendar: "LLLL yyyy",
              onChange: function () {},
              disabled: !1,
              disabledKeyboardNavigation: !1,
              dropdownMode: "scroll",
              onFocus: function () {},
              onBlur: function () {},
              onKeyDown: function () {},
              onInputClick: function () {},
              onSelect: function () {},
              onClickOutside: function () {},
              onMonthChange: function () {},
              onCalendarOpen: function () {},
              onCalendarClose: function () {},
              preventOpenOnFocus: !1,
              onYearChange: function () {},
              onInputError: function () {},
              monthsShown: 1,
              readOnly: !1,
              withPortal: !1,
              selectsDisabledDaysInRange: !1,
              shouldCloseOnSelect: !0,
              showTimeSelect: !1,
              showTimeInput: !1,
              showPreviousMonths: !1,
              showMonthYearPicker: !1,
              showFullMonthYearPicker: !1,
              showTwoColumnMonthYearPicker: !1,
              showFourColumnMonthYearPicker: !1,
              showYearPicker: !1,
              showQuarterYearPicker: !1,
              strictParsing: !1,
              timeIntervals: 30,
              timeCaption: "Time",
              previousMonthAriaLabel: "Previous Month",
              previousMonthButtonLabel: "Previous Month",
              nextMonthAriaLabel: "Next Month",
              nextMonthButtonLabel: "Next Month",
              previousYearAriaLabel: "Previous Year",
              previousYearButtonLabel: "Previous Year",
              nextYearAriaLabel: "Next Year",
              nextYearButtonLabel: "Next Year",
              timeInputLabel: "Time",
              enableTabLoop: !0,
              yearItemNumber: 12,
              renderDayContents: function (e) {
                return e;
              },
              focusSelectedMonth: !1,
              showPopperArrow: !0,
              excludeScrollbar: !0,
              customTimeInput: null,
              calendarStartDay: void 0,
            };
          },
        },
      ]
    ),
    a
  );
})();
bt(Xa, "propTypes", {
  adjustDateOnChange: ie.default.bool,
  allowSameDay: ie.default.bool,
  ariaDescribedBy: ie.default.string,
  ariaInvalid: ie.default.string,
  ariaLabelClose: ie.default.string,
  ariaLabelledBy: ie.default.string,
  ariaRequired: ie.default.string,
  autoComplete: ie.default.string,
  autoFocus: ie.default.bool,
  calendarClassName: ie.default.string,
  calendarContainer: ie.default.func,
  children: ie.default.node,
  chooseDayAriaLabelPrefix: ie.default.string,
  closeOnScroll: ie.default.oneOfType([ie.default.bool, ie.default.func]),
  className: ie.default.string,
  customInput: ie.default.element,
  customInputRef: ie.default.string,
  calendarStartDay: ie.default.number,
  dateFormat: ie.default.oneOfType([ie.default.string, ie.default.array]),
  dateFormatCalendar: ie.default.string,
  dayClassName: ie.default.func,
  weekDayClassName: ie.default.func,
  disabledDayAriaLabelPrefix: ie.default.string,
  monthClassName: ie.default.func,
  timeClassName: ie.default.func,
  disabled: ie.default.bool,
  disabledKeyboardNavigation: ie.default.bool,
  dropdownMode: ie.default.oneOf(["scroll", "select"]).isRequired,
  endDate: ie.default.instanceOf(Date),
  excludeDates: ie.default.array,
  excludeDateIntervals: ie.default.arrayOf(
    ie.default.shape({
      start: ie.default.instanceOf(Date),
      end: ie.default.instanceOf(Date),
    })
  ),
  filterDate: ie.default.func,
  fixedHeight: ie.default.bool,
  formatWeekNumber: ie.default.func,
  highlightDates: ie.default.array,
  id: ie.default.string,
  includeDates: ie.default.array,
  includeDateIntervals: ie.default.array,
  includeTimes: ie.default.array,
  injectTimes: ie.default.array,
  inline: ie.default.bool,
  isClearable: ie.default.bool,
  locale: ie.default.oneOfType([
    ie.default.string,
    ie.default.shape({ locale: ie.default.object }),
  ]),
  maxDate: ie.default.instanceOf(Date),
  minDate: ie.default.instanceOf(Date),
  monthsShown: ie.default.number,
  name: ie.default.string,
  onBlur: ie.default.func,
  onChange: ie.default.func.isRequired,
  onSelect: ie.default.func,
  onWeekSelect: ie.default.func,
  onClickOutside: ie.default.func,
  onChangeRaw: ie.default.func,
  onFocus: ie.default.func,
  onInputClick: ie.default.func,
  onKeyDown: ie.default.func,
  onMonthChange: ie.default.func,
  onYearChange: ie.default.func,
  onInputError: ie.default.func,
  open: ie.default.bool,
  onCalendarOpen: ie.default.func,
  onCalendarClose: ie.default.func,
  openToDate: ie.default.instanceOf(Date),
  peekNextMonth: ie.default.bool,
  placeholderText: ie.default.string,
  popperContainer: ie.default.func,
  popperClassName: ie.default.string,
  popperModifiers: ie.default.arrayOf(ie.default.object),
  popperPlacement: ie.default.oneOf(za),
  popperProps: ie.default.object,
  preventOpenOnFocus: ie.default.bool,
  readOnly: ie.default.bool,
  required: ie.default.bool,
  scrollableYearDropdown: ie.default.bool,
  scrollableMonthYearDropdown: ie.default.bool,
  selected: ie.default.instanceOf(Date),
  selectsEnd: ie.default.bool,
  selectsStart: ie.default.bool,
  selectsRange: ie.default.bool,
  selectsDisabledDaysInRange: ie.default.bool,
  showMonthDropdown: ie.default.bool,
  showPreviousMonths: ie.default.bool,
  showMonthYearDropdown: ie.default.bool,
  showWeekNumbers: ie.default.bool,
  showYearDropdown: ie.default.bool,
  strictParsing: ie.default.bool,
  forceShowMonthNavigation: ie.default.bool,
  showDisabledMonthNavigation: ie.default.bool,
  startDate: ie.default.instanceOf(Date),
  startOpen: ie.default.bool,
  tabIndex: ie.default.number,
  timeCaption: ie.default.string,
  title: ie.default.string,
  todayButton: ie.default.node,
  useWeekdaysShort: ie.default.bool,
  formatWeekDay: ie.default.func,
  value: ie.default.string,
  weekLabel: ie.default.string,
  withPortal: ie.default.bool,
  portalId: ie.default.string,
  portalHost: ie.default.instanceOf(ShadowRoot),
  yearItemNumber: ie.default.number,
  yearDropdownItemNumber: ie.default.number,
  shouldCloseOnSelect: ie.default.bool,
  showTimeInput: ie.default.bool,
  showMonthYearPicker: ie.default.bool,
  showFullMonthYearPicker: ie.default.bool,
  showTwoColumnMonthYearPicker: ie.default.bool,
  showFourColumnMonthYearPicker: ie.default.bool,
  showYearPicker: ie.default.bool,
  showQuarterYearPicker: ie.default.bool,
  showTimeSelect: ie.default.bool,
  showTimeSelectOnly: ie.default.bool,
  timeFormat: ie.default.string,
  timeIntervals: ie.default.number,
  minTime: ie.default.instanceOf(Date),
  maxTime: ie.default.instanceOf(Date),
  excludeTimes: ie.default.array,
  filterTime: ie.default.func,
  useShortMonthInDropdown: ie.default.bool,
  clearButtonTitle: ie.default.string,
  clearButtonClassName: ie.default.string,
  previousMonthAriaLabel: ie.default.string,
  previousMonthButtonLabel: ie.default.oneOfType([
    ie.default.string,
    ie.default.node,
  ]),
  nextMonthAriaLabel: ie.default.string,
  nextMonthButtonLabel: ie.default.oneOfType([
    ie.default.string,
    ie.default.node,
  ]),
  previousYearAriaLabel: ie.default.string,
  previousYearButtonLabel: ie.default.string,
  nextYearAriaLabel: ie.default.string,
  nextYearButtonLabel: ie.default.string,
  timeInputLabel: ie.default.string,
  renderCustomHeader: ie.default.func,
  renderDayContents: ie.default.func,
  wrapperClassName: ie.default.string,
  focusSelectedMonth: ie.default.bool,
  onDayMouseEnter: ie.default.func,
  onMonthMouseLeave: ie.default.func,
  showPopperArrow: ie.default.bool,
  excludeScrollbar: ie.default.bool,
  enableTabLoop: ie.default.bool,
  customTimeInput: ie.default.element,
  weekAriaLabelPrefix: ie.default.string,
  monthAriaLabelPrefix: ie.default.string,
});
var Za = "input",
  er = "navigate";
(exports.CalendarContainer = ja),
  (exports.default = Xa),
  (exports.getDefaultLocale = Xt),
  (exports.registerLocale = function (e, t) {
    var a = "undefined" != typeof window ? window : globalThis;
    a.__localeData__ || (a.__localeData__ = {}), (a.__localeData__[e] = t);
  }),
  (exports.setDefaultLocale = function (e) {
    ("undefined" != typeof window ? window : globalThis).__localeId__ = e;
  });
