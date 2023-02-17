import e, { createRef as t } from "react";
import r from "prop-types";
import n from "classnames";
import o from "date-fns/isDate";
import a from "date-fns/isValid";
import s from "date-fns/format";
import i from "date-fns/addMinutes";
import p from "date-fns/addHours";
import c from "date-fns/addDays";
import l from "date-fns/addWeeks";
import d from "date-fns/addMonths";
import u from "date-fns/addYears";
import "date-fns/subMinutes";
import "date-fns/subHours";
import h from "date-fns/subDays";
import m from "date-fns/subWeeks";
import f from "date-fns/subMonths";
import D from "date-fns/subYears";
import y from "date-fns/getSeconds";
import b from "date-fns/getMinutes";
import v from "date-fns/getHours";
import g from "date-fns/getDay";
import w from "date-fns/getDate";
import k from "date-fns/getISOWeek";
import C from "date-fns/getMonth";
import S from "date-fns/getQuarter";
import M from "date-fns/getYear";
import _ from "date-fns/getTime";
import O from "date-fns/setSeconds";
import P from "date-fns/setMinutes";
import N from "date-fns/setHours";
import x from "date-fns/setMonth";
import T from "date-fns/setQuarter";
import E from "date-fns/setYear";
import I from "date-fns/min";
import Y from "date-fns/max";
import L from "date-fns/differenceInCalendarDays";
import R from "date-fns/differenceInCalendarMonths";
import "date-fns/differenceInCalendarWeeks";
import F from "date-fns/differenceInCalendarYears";
import A from "date-fns/startOfDay";
import B from "date-fns/startOfWeek";
import K from "date-fns/startOfMonth";
import j from "date-fns/startOfQuarter";
import W from "date-fns/startOfYear";
import H from "date-fns/endOfDay";
import "date-fns/endOfWeek";
import q from "date-fns/endOfMonth";
import Q from "date-fns/endOfYear";
import V from "date-fns/isEqual";
import U from "date-fns/isSameDay";
import $ from "date-fns/isSameMonth";
import z from "date-fns/isSameYear";
import G from "date-fns/isSameQuarter";
import J from "date-fns/isAfter";
import X from "date-fns/isBefore";
import Z from "date-fns/isWithinInterval";
import ee from "date-fns/toDate";
import te from "date-fns/parse";
import re from "date-fns/parseISO";
import ne from "react-onclickoutside";
import oe from "react-dom";
import { Popper as ae, Manager as se, Reference as ie } from "react-popper";
import pe from "date-fns/set";
function ce(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ce(Object(r), !0).forEach(function (t) {
          fe(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ce(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
  }
  return e;
}
function de(e) {
  return (de =
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
function ue(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function he(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Me(n.key), n);
  }
}
function me(e, t, r) {
  return (
    t && he(e.prototype, t),
    r && he(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function fe(e, t, r) {
  return (
    (t = Me(t)) in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function De() {
  return (De = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
}
function ye(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ve(e, t);
}
function be(e) {
  return (be = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function ve(e, t) {
  return (ve = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
}
function ge(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function we(e, t) {
  if (t && ("object" == typeof t || "function" == typeof t)) return t;
  if (void 0 !== t)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return ge(e);
}
function ke(e) {
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
    var r,
      n = be(e);
    if (t) {
      var o = be(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return we(this, r);
  };
}
function Ce(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return Se(e);
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
      if ("string" == typeof e) return Se(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === r && e.constructor && (r = e.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(e);
      if (
        "Arguments" === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return Se(e, t);
    })(e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function Se(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Me(e) {
  var t = (function (e, t) {
    if ("object" != typeof e || null === e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(e, t || "default");
      if ("object" != typeof n) return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
  })(e, "string");
  return "symbol" == typeof t ? t : String(t);
}
function _e(e, t) {
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
function Oe(e, t) {
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
var Pe = {
    p: Oe,
    P: function (e, t) {
      var r,
        n = e.match(/(P+)(p+)?/) || [],
        o = n[1],
        a = n[2];
      if (!a) return _e(e, t);
      switch (o) {
        case "P":
          r = t.dateTime({ width: "short" });
          break;
        case "PP":
          r = t.dateTime({ width: "medium" });
          break;
        case "PPP":
          r = t.dateTime({ width: "long" });
          break;
        case "PPPP":
        default:
          r = t.dateTime({ width: "full" });
      }
      return r.replace("{{date}}", _e(o, t)).replace("{{time}}", Oe(a, t));
    },
  },
  Ne = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function xe(e) {
  var t = e
    ? "string" == typeof e || e instanceof String
      ? re(e)
      : ee(e)
    : new Date();
  return Ee(t) ? t : null;
}
function Te(e, t, r, n, o) {
  var a = null,
    s = Xe(r) || Xe(Je()),
    i = !0;
  return Array.isArray(t)
    ? (t.forEach(function (t) {
        var p = te(e, t, new Date(), { locale: s });
        n && (i = Ee(p, o) && e === Ie(p, t, r)), Ee(p, o) && i && (a = p);
      }),
      a)
    : ((a = te(e, t, new Date(), { locale: s })),
      n
        ? (i = Ee(a) && e === Ie(a, t, r))
        : Ee(a) ||
          ((t = t
            .match(Ne)
            .map(function (e) {
              var t = e[0];
              return "p" === t || "P" === t
                ? s
                  ? (0, Pe[t])(e, s.formatLong)
                  : t
                : e;
            })
            .join("")),
          e.length > 0 && (a = te(e, t.slice(0, e.length), new Date())),
          Ee(a) || (a = new Date(e))),
      Ee(a) && i ? a : null);
}
function Ee(e, t) {
  return (t = t || new Date("1/1/1000")), a(e) && !X(e, t);
}
function Ie(e, t, r) {
  if ("en" === r) return s(e, t, { awareOfUnicodeTokens: !0 });
  var n = Xe(r);
  return (
    r &&
      !n &&
      console.warn(
        'A locale object was not found for the provided string ["'.concat(
          r,
          '"].'
        )
      ),
    !n && Je() && Xe(Je()) && (n = Xe(Je())),
    s(e, t, { locale: n || null, awareOfUnicodeTokens: !0 })
  );
}
function Ye(e, t) {
  var r = t.dateFormat,
    n = t.locale;
  return (e && Ie(e, Array.isArray(r) ? r[0] : r, n)) || "";
}
function Le(e, t) {
  var r = t.hour,
    n = void 0 === r ? 0 : r,
    o = t.minute,
    a = void 0 === o ? 0 : o,
    s = t.second;
  return N(P(O(e, void 0 === s ? 0 : s), a), n);
}
function Re(e, t) {
  var r = (t && Xe(t)) || (Je() && Xe(Je()));
  return k(e, r ? { locale: r } : null);
}
function Fe(e) {
  return A(e);
}
function Ae(e, t, r) {
  var n = Xe(t || Je());
  return B(e, { locale: n, weekStartsOn: r });
}
function Be(e) {
  return K(e);
}
function Ke(e) {
  return W(e);
}
function je(e) {
  return j(e);
}
function We() {
  return A(xe());
}
function He(e, t) {
  return e && t ? z(e, t) : !e && !t;
}
function qe(e, t) {
  return e && t ? $(e, t) : !e && !t;
}
function Qe(e, t) {
  return e && t ? G(e, t) : !e && !t;
}
function Ve(e, t) {
  return e && t ? U(e, t) : !e && !t;
}
function Ue(e, t) {
  return e && t ? V(e, t) : !e && !t;
}
function $e(e, t, r) {
  var n,
    o = A(t),
    a = H(r);
  try {
    n = Z(e, { start: o, end: a });
  } catch (e) {
    n = !1;
  }
  return n;
}
function ze(e, t) {
  var r = "undefined" != typeof window ? window : globalThis;
  r.__localeData__ || (r.__localeData__ = {}), (r.__localeData__[e] = t);
}
function Ge(e) {
  ("undefined" != typeof window ? window : globalThis).__localeId__ = e;
}
function Je() {
  return ("undefined" != typeof window ? window : globalThis).__localeId__;
}
function Xe(e) {
  if ("string" == typeof e) {
    var t = "undefined" != typeof window ? window : globalThis;
    return t.__localeData__ ? t.__localeData__[e] : null;
  }
  return e;
}
function Ze(e, t) {
  return Ie(x(xe(), e), "LLLL", t);
}
function et(e, t) {
  return Ie(x(xe(), e), "LLL", t);
}
function tt(e, t) {
  return Ie(T(xe(), e), "QQQ", t);
}
function rt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    o = t.excludeDates,
    a = t.excludeDateIntervals,
    s = t.includeDates,
    i = t.includeDateIntervals,
    p = t.filterDate;
  return (
    ct(e, { minDate: r, maxDate: n }) ||
    (o &&
      o.some(function (t) {
        return Ve(e, t);
      })) ||
    (a &&
      a.some(function (t) {
        var r = t.start,
          n = t.end;
        return Z(e, { start: r, end: n });
      })) ||
    (s &&
      !s.some(function (t) {
        return Ve(e, t);
      })) ||
    (i &&
      !i.some(function (t) {
        var r = t.start,
          n = t.end;
        return Z(e, { start: r, end: n });
      })) ||
    (p && !p(xe(e))) ||
    !1
  );
}
function nt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.excludeDates,
    n = t.excludeDateIntervals;
  return n && n.length > 0
    ? n.some(function (t) {
        var r = t.start,
          n = t.end;
        return Z(e, { start: r, end: n });
      })
    : (r &&
        r.some(function (t) {
          return Ve(e, t);
        })) ||
        !1;
}
function ot(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    o = t.excludeDates,
    a = t.includeDates,
    s = t.filterDate;
  return (
    ct(e, { minDate: K(r), maxDate: q(n) }) ||
    (o &&
      o.some(function (t) {
        return qe(e, t);
      })) ||
    (a &&
      !a.some(function (t) {
        return qe(e, t);
      })) ||
    (s && !s(xe(e))) ||
    !1
  );
}
function at(e, t, r, n) {
  var o = M(e),
    a = C(e),
    s = M(t),
    i = C(t),
    p = M(n);
  return o === s && o === p
    ? a <= r && r <= i
    : o < s
    ? (p === o && a <= r) || (p === s && i >= r) || (p < s && p > o)
    : void 0;
}
function st(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    o = t.excludeDates,
    a = t.includeDates,
    s = t.filterDate;
  return (
    ct(e, { minDate: r, maxDate: n }) ||
    (o &&
      o.some(function (t) {
        return Qe(e, t);
      })) ||
    (a &&
      !a.some(function (t) {
        return Qe(e, t);
      })) ||
    (s && !s(xe(e))) ||
    !1
  );
}
function it(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    o = t.excludeDates,
    a = t.includeDates,
    s = t.filterDate,
    i = new Date(e, 0, 1);
  return (
    ct(i, { minDate: W(r), maxDate: Q(n) }) ||
    (o &&
      o.some(function (e) {
        return He(i, e);
      })) ||
    (a &&
      !a.some(function (e) {
        return He(i, e);
      })) ||
    (s && !s(xe(i))) ||
    !1
  );
}
function pt(e, t, r, n) {
  var o = M(e),
    a = S(e),
    s = M(t),
    i = S(t),
    p = M(n);
  return o === s && o === p
    ? a <= r && r <= i
    : o < s
    ? (p === o && a <= r) || (p === s && i >= r) || (p < s && p > o)
    : void 0;
}
function ct(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate;
  return (r && L(e, r) < 0) || (n && L(e, n) > 0);
}
function lt(e, t) {
  return t.some(function (t) {
    return v(t) === v(e) && b(t) === b(e);
  });
}
function dt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.excludeTimes,
    n = t.includeTimes,
    o = t.filterTime;
  return (r && lt(e, r)) || (n && !lt(e, n)) || (o && !o(e)) || !1;
}
function ut(e, t) {
  var r = t.minTime,
    n = t.maxTime;
  if (!r || !n) throw new Error("Both minTime and maxTime props required");
  var o,
    a = xe(),
    s = N(P(a, b(e)), v(e)),
    i = N(P(a, b(r)), v(r)),
    p = N(P(a, b(n)), v(n));
  try {
    o = !Z(s, { start: i, end: p });
  } catch (e) {
    o = !1;
  }
  return o;
}
function ht(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.includeDates,
    o = f(e, 1);
  return (
    (r && R(r, o) > 0) ||
    (n &&
      n.every(function (e) {
        return R(e, o) > 0;
      })) ||
    !1
  );
}
function mt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.maxDate,
    n = t.includeDates,
    o = d(e, 1);
  return (
    (r && R(o, r) > 0) ||
    (n &&
      n.every(function (e) {
        return R(o, e) > 0;
      })) ||
    !1
  );
}
function ft(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.includeDates,
    o = D(e, 1);
  return (
    (r && F(r, o) > 0) ||
    (n &&
      n.every(function (e) {
        return F(e, o) > 0;
      })) ||
    !1
  );
}
function Dt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.maxDate,
    n = t.includeDates,
    o = u(e, 1);
  return (
    (r && F(o, r) > 0) ||
    (n &&
      n.every(function (e) {
        return F(o, e) > 0;
      })) ||
    !1
  );
}
function yt(e) {
  var t = e.minDate,
    r = e.includeDates;
  if (r && t) {
    var n = r.filter(function (e) {
      return L(e, t) >= 0;
    });
    return I(n);
  }
  return r ? I(r) : t;
}
function bt(e) {
  var t = e.maxDate,
    r = e.includeDates;
  if (r && t) {
    var n = r.filter(function (e) {
      return L(e, t) <= 0;
    });
    return Y(n);
  }
  return r ? Y(r) : t;
}
function vt() {
  for (
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "react-datepicker__day--highlighted",
      r = new Map(),
      n = 0,
      a = e.length;
    n < a;
    n++
  ) {
    var s = e[n];
    if (o(s)) {
      var i = Ie(s, "MM.dd.yyyy"),
        p = r.get(i) || [];
      p.includes(t) || (p.push(t), r.set(i, p));
    } else if ("object" === de(s)) {
      var c = Object.keys(s),
        l = c[0],
        d = s[c[0]];
      if ("string" == typeof l && d.constructor === Array)
        for (var u = 0, h = d.length; u < h; u++) {
          var m = Ie(d[u], "MM.dd.yyyy"),
            f = r.get(m) || [];
          f.includes(l) || (f.push(l), r.set(m, f));
        }
    }
  }
  return r;
}
function gt(e, t, r, n, o) {
  for (var a = o.length, s = [], c = 0; c < a; c++) {
    var l = i(p(e, v(o[c])), b(o[c])),
      d = i(e, (r + 1) * n);
    J(l, t) && X(l, d) && s.push(o[c]);
  }
  return s;
}
function wt(e) {
  return e < 10 ? "0".concat(e) : "".concat(e);
}
function kt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12,
    r = Math.ceil(M(e) / t) * t,
    n = r - (t - 1);
  return { startPeriod: n, endPeriod: r };
}
function Ct(e, t, r, n) {
  for (var o = [], a = 0; a < 2 * t + 1; a++) {
    var s = e + t - a,
      i = !0;
    r && (i = M(r) <= s), n && i && (i = M(n) >= s), i && o.push(s);
  }
  return o;
}
var St = (function (r) {
  ye(a, e.Component);
  var o = ke(a);
  function a(r) {
    var n;
    ue(this, a),
      fe(ge((n = o.call(this, r))), "renderOptions", function () {
        var t = n.props.year,
          r = n.state.yearsList.map(function (r) {
            return e.createElement(
              "div",
              {
                className:
                  t === r
                    ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                    : "react-datepicker__year-option",
                key: r,
                onClick: n.onChange.bind(ge(n), r),
                "aria-selected": t === r ? "true" : void 0,
              },
              t === r
                ? e.createElement(
                    "span",
                    { className: "react-datepicker__year-option--selected" },
                    "✓"
                  )
                : "",
              r
            );
          }),
          o = n.props.minDate ? M(n.props.minDate) : null,
          a = n.props.maxDate ? M(n.props.maxDate) : null;
        return (
          (a &&
            n.state.yearsList.find(function (e) {
              return e === a;
            })) ||
            r.unshift(
              e.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  key: "upcoming",
                  onClick: n.incrementYears,
                },
                e.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming",
                })
              )
            ),
          (o &&
            n.state.yearsList.find(function (e) {
              return e === o;
            })) ||
            r.push(
              e.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  key: "previous",
                  onClick: n.decrementYears,
                },
                e.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                })
              )
            ),
          r
        );
      }),
      fe(ge(n), "onChange", function (e) {
        n.props.onChange(e);
      }),
      fe(ge(n), "handleClickOutside", function () {
        n.props.onCancel();
      }),
      fe(ge(n), "shiftYears", function (e) {
        var t = n.state.yearsList.map(function (t) {
          return t + e;
        });
        n.setState({ yearsList: t });
      }),
      fe(ge(n), "incrementYears", function () {
        return n.shiftYears(1);
      }),
      fe(ge(n), "decrementYears", function () {
        return n.shiftYears(-1);
      });
    var s = r.yearDropdownItemNumber,
      i = r.scrollableYearDropdown,
      p = s || (i ? 10 : 5);
    return (
      (n.state = {
        yearsList: Ct(n.props.year, p, n.props.minDate, n.props.maxDate),
      }),
      (n.dropdownRef = t()),
      n
    );
  }
  return (
    me(a, [
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
          var t = n({
            "react-datepicker__year-dropdown": !0,
            "react-datepicker__year-dropdown--scrollable":
              this.props.scrollableYearDropdown,
          });
          return e.createElement(
            "div",
            { className: t, ref: this.dropdownRef },
            this.renderOptions()
          );
        },
      },
    ]),
    a
  );
})();
fe(St, "propTypes", {
  minDate: r.instanceOf(Date),
  maxDate: r.instanceOf(Date),
  onCancel: r.func.isRequired,
  onChange: r.func.isRequired,
  scrollableYearDropdown: r.bool,
  year: r.number.isRequired,
  yearDropdownItemNumber: r.number,
});
var Mt = ne(St),
  _t = (function (t) {
    ye(n, e.Component);
    var r = ke(n);
    function n() {
      var t;
      ue(this, n);
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s];
      return (
        fe(ge((t = r.call.apply(r, [this].concat(a)))), "state", {
          dropdownVisible: !1,
        }),
        fe(ge(t), "renderSelectOptions", function () {
          for (
            var r = t.props.minDate ? M(t.props.minDate) : 1900,
              n = t.props.maxDate ? M(t.props.maxDate) : 2100,
              o = [],
              a = r;
            a <= n;
            a++
          )
            o.push(e.createElement("option", { key: a, value: a }, a));
          return o;
        }),
        fe(ge(t), "onSelectChange", function (e) {
          t.onChange(e.target.value);
        }),
        fe(ge(t), "renderSelectMode", function () {
          return e.createElement(
            "select",
            {
              value: t.props.year,
              className: "react-datepicker__year-select",
              onChange: t.onSelectChange,
            },
            t.renderSelectOptions()
          );
        }),
        fe(ge(t), "renderReadView", function (r) {
          return e.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
              className: "react-datepicker__year-read-view",
              onClick: function (e) {
                return t.toggleDropdown(e);
              },
            },
            e.createElement("span", {
              className: "react-datepicker__year-read-view--down-arrow",
            }),
            e.createElement(
              "span",
              { className: "react-datepicker__year-read-view--selected-year" },
              t.props.year
            )
          );
        }),
        fe(ge(t), "renderDropdown", function () {
          return e.createElement(Mt, {
            key: "dropdown",
            year: t.props.year,
            onChange: t.onChange,
            onCancel: t.toggleDropdown,
            minDate: t.props.minDate,
            maxDate: t.props.maxDate,
            scrollableYearDropdown: t.props.scrollableYearDropdown,
            yearDropdownItemNumber: t.props.yearDropdownItemNumber,
          });
        }),
        fe(ge(t), "renderScrollMode", function () {
          var e = t.state.dropdownVisible,
            r = [t.renderReadView(!e)];
          return e && r.unshift(t.renderDropdown()), r;
        }),
        fe(ge(t), "onChange", function (e) {
          t.toggleDropdown(), e !== t.props.year && t.props.onChange(e);
        }),
        fe(ge(t), "toggleDropdown", function (e) {
          t.setState(
            { dropdownVisible: !t.state.dropdownVisible },
            function () {
              t.props.adjustDateOnChange && t.handleYearChange(t.props.date, e);
            }
          );
        }),
        fe(ge(t), "handleYearChange", function (e, r) {
          t.onSelect(e, r), t.setOpen();
        }),
        fe(ge(t), "onSelect", function (e, r) {
          t.props.onSelect && t.props.onSelect(e, r);
        }),
        fe(ge(t), "setOpen", function () {
          t.props.setOpen && t.props.setOpen(!0);
        }),
        t
      );
    }
    return (
      me(n, [
        {
          key: "render",
          value: function () {
            var t;
            switch (this.props.dropdownMode) {
              case "scroll":
                t = this.renderScrollMode();
                break;
              case "select":
                t = this.renderSelectMode();
            }
            return e.createElement(
              "div",
              {
                className:
                  "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                    this.props.dropdownMode
                  ),
              },
              t
            );
          },
        },
      ]),
      n
    );
  })();
fe(_t, "propTypes", {
  adjustDateOnChange: r.bool,
  dropdownMode: r.oneOf(["scroll", "select"]).isRequired,
  maxDate: r.instanceOf(Date),
  minDate: r.instanceOf(Date),
  onChange: r.func.isRequired,
  scrollableYearDropdown: r.bool,
  year: r.number.isRequired,
  yearDropdownItemNumber: r.number,
  date: r.instanceOf(Date),
  onSelect: r.func,
  setOpen: r.func,
});
var Ot = (function (t) {
  ye(n, e.Component);
  var r = ke(n);
  function n() {
    var t;
    ue(this, n);
    for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    return (
      fe(
        ge((t = r.call.apply(r, [this].concat(a)))),
        "isSelectedMonth",
        function (e) {
          return t.props.month === e;
        }
      ),
      fe(ge(t), "renderOptions", function () {
        return t.props.monthNames.map(function (r, n) {
          return e.createElement(
            "div",
            {
              className: t.isSelectedMonth(n)
                ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                : "react-datepicker__month-option",
              key: r,
              onClick: t.onChange.bind(ge(t), n),
              "aria-selected": t.isSelectedMonth(n) ? "true" : void 0,
            },
            t.isSelectedMonth(n)
              ? e.createElement(
                  "span",
                  { className: "react-datepicker__month-option--selected" },
                  "✓"
                )
              : "",
            r
          );
        });
      }),
      fe(ge(t), "onChange", function (e) {
        return t.props.onChange(e);
      }),
      fe(ge(t), "handleClickOutside", function () {
        return t.props.onCancel();
      }),
      t
    );
  }
  return (
    me(n, [
      {
        key: "render",
        value: function () {
          return e.createElement(
            "div",
            { className: "react-datepicker__month-dropdown" },
            this.renderOptions()
          );
        },
      },
    ]),
    n
  );
})();
fe(Ot, "propTypes", {
  onCancel: r.func.isRequired,
  onChange: r.func.isRequired,
  month: r.number.isRequired,
  monthNames: r.arrayOf(r.string.isRequired).isRequired,
});
var Pt = ne(Ot),
  Nt = (function (t) {
    ye(n, e.Component);
    var r = ke(n);
    function n() {
      var t;
      ue(this, n);
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s];
      return (
        fe(ge((t = r.call.apply(r, [this].concat(a)))), "state", {
          dropdownVisible: !1,
        }),
        fe(ge(t), "renderSelectOptions", function (t) {
          return t.map(function (t, r) {
            return e.createElement("option", { key: r, value: r }, t);
          });
        }),
        fe(ge(t), "renderSelectMode", function (r) {
          return e.createElement(
            "select",
            {
              value: t.props.month,
              className: "react-datepicker__month-select",
              onChange: function (e) {
                return t.onChange(e.target.value);
              },
            },
            t.renderSelectOptions(r)
          );
        }),
        fe(ge(t), "renderReadView", function (r, n) {
          return e.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
              className: "react-datepicker__month-read-view",
              onClick: t.toggleDropdown,
            },
            e.createElement("span", {
              className: "react-datepicker__month-read-view--down-arrow",
            }),
            e.createElement(
              "span",
              {
                className: "react-datepicker__month-read-view--selected-month",
              },
              n[t.props.month]
            )
          );
        }),
        fe(ge(t), "renderDropdown", function (r) {
          return e.createElement(Pt, {
            key: "dropdown",
            month: t.props.month,
            monthNames: r,
            onChange: t.onChange,
            onCancel: t.toggleDropdown,
          });
        }),
        fe(ge(t), "renderScrollMode", function (e) {
          var r = t.state.dropdownVisible,
            n = [t.renderReadView(!r, e)];
          return r && n.unshift(t.renderDropdown(e)), n;
        }),
        fe(ge(t), "onChange", function (e) {
          t.toggleDropdown(), e !== t.props.month && t.props.onChange(e);
        }),
        fe(ge(t), "toggleDropdown", function () {
          return t.setState({ dropdownVisible: !t.state.dropdownVisible });
        }),
        t
      );
    }
    return (
      me(n, [
        {
          key: "render",
          value: function () {
            var t,
              r = this,
              n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                this.props.useShortMonthInDropdown
                  ? function (e) {
                      return et(e, r.props.locale);
                    }
                  : function (e) {
                      return Ze(e, r.props.locale);
                    }
              );
            switch (this.props.dropdownMode) {
              case "scroll":
                t = this.renderScrollMode(n);
                break;
              case "select":
                t = this.renderSelectMode(n);
            }
            return e.createElement(
              "div",
              {
                className:
                  "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                    this.props.dropdownMode
                  ),
              },
              t
            );
          },
        },
      ]),
      n
    );
  })();
function xt(e, t) {
  for (var r = [], n = Be(e), o = Be(t); !J(n, o); )
    r.push(xe(n)), (n = d(n, 1));
  return r;
}
fe(Nt, "propTypes", {
  dropdownMode: r.oneOf(["scroll", "select"]).isRequired,
  locale: r.string,
  month: r.number.isRequired,
  onChange: r.func.isRequired,
  useShortMonthInDropdown: r.bool,
});
var Tt = (function (t) {
  ye(o, e.Component);
  var r = ke(o);
  function o(t) {
    var n;
    return (
      ue(this, o),
      fe(ge((n = r.call(this, t))), "renderOptions", function () {
        return n.state.monthYearsList.map(function (t) {
          var r = _(t),
            o = He(n.props.date, t) && qe(n.props.date, t);
          return e.createElement(
            "div",
            {
              className: o
                ? "react-datepicker__month-year-option--selected_month-year"
                : "react-datepicker__month-year-option",
              key: r,
              onClick: n.onChange.bind(ge(n), r),
              "aria-selected": o ? "true" : void 0,
            },
            o
              ? e.createElement(
                  "span",
                  {
                    className: "react-datepicker__month-year-option--selected",
                  },
                  "✓"
                )
              : "",
            Ie(t, n.props.dateFormat, n.props.locale)
          );
        });
      }),
      fe(ge(n), "onChange", function (e) {
        return n.props.onChange(e);
      }),
      fe(ge(n), "handleClickOutside", function () {
        n.props.onCancel();
      }),
      (n.state = { monthYearsList: xt(n.props.minDate, n.props.maxDate) }),
      n
    );
  }
  return (
    me(o, [
      {
        key: "render",
        value: function () {
          var t = n({
            "react-datepicker__month-year-dropdown": !0,
            "react-datepicker__month-year-dropdown--scrollable":
              this.props.scrollableMonthYearDropdown,
          });
          return e.createElement("div", { className: t }, this.renderOptions());
        },
      },
    ]),
    o
  );
})();
fe(Tt, "propTypes", {
  minDate: r.instanceOf(Date).isRequired,
  maxDate: r.instanceOf(Date).isRequired,
  onCancel: r.func.isRequired,
  onChange: r.func.isRequired,
  scrollableMonthYearDropdown: r.bool,
  date: r.instanceOf(Date).isRequired,
  dateFormat: r.string.isRequired,
  locale: r.string,
});
var Et = ne(Tt),
  It = (function (t) {
    ye(n, e.Component);
    var r = ke(n);
    function n() {
      var t;
      ue(this, n);
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s];
      return (
        fe(ge((t = r.call.apply(r, [this].concat(a)))), "state", {
          dropdownVisible: !1,
        }),
        fe(ge(t), "renderSelectOptions", function () {
          for (
            var r = Be(t.props.minDate), n = Be(t.props.maxDate), o = [];
            !J(r, n);

          ) {
            var a = _(r);
            o.push(
              e.createElement(
                "option",
                { key: a, value: a },
                Ie(r, t.props.dateFormat, t.props.locale)
              )
            ),
              (r = d(r, 1));
          }
          return o;
        }),
        fe(ge(t), "onSelectChange", function (e) {
          t.onChange(e.target.value);
        }),
        fe(ge(t), "renderSelectMode", function () {
          return e.createElement(
            "select",
            {
              value: _(Be(t.props.date)),
              className: "react-datepicker__month-year-select",
              onChange: t.onSelectChange,
            },
            t.renderSelectOptions()
          );
        }),
        fe(ge(t), "renderReadView", function (r) {
          var n = Ie(t.props.date, t.props.dateFormat, t.props.locale);
          return e.createElement(
            "div",
            {
              key: "read",
              style: { visibility: r ? "visible" : "hidden" },
              className: "react-datepicker__month-year-read-view",
              onClick: function (e) {
                return t.toggleDropdown(e);
              },
            },
            e.createElement("span", {
              className: "react-datepicker__month-year-read-view--down-arrow",
            }),
            e.createElement(
              "span",
              {
                className:
                  "react-datepicker__month-year-read-view--selected-month-year",
              },
              n
            )
          );
        }),
        fe(ge(t), "renderDropdown", function () {
          return e.createElement(Et, {
            key: "dropdown",
            date: t.props.date,
            dateFormat: t.props.dateFormat,
            onChange: t.onChange,
            onCancel: t.toggleDropdown,
            minDate: t.props.minDate,
            maxDate: t.props.maxDate,
            scrollableMonthYearDropdown: t.props.scrollableMonthYearDropdown,
            locale: t.props.locale,
          });
        }),
        fe(ge(t), "renderScrollMode", function () {
          var e = t.state.dropdownVisible,
            r = [t.renderReadView(!e)];
          return e && r.unshift(t.renderDropdown()), r;
        }),
        fe(ge(t), "onChange", function (e) {
          t.toggleDropdown();
          var r = xe(parseInt(e));
          (He(t.props.date, r) && qe(t.props.date, r)) || t.props.onChange(r);
        }),
        fe(ge(t), "toggleDropdown", function () {
          return t.setState({ dropdownVisible: !t.state.dropdownVisible });
        }),
        t
      );
    }
    return (
      me(n, [
        {
          key: "render",
          value: function () {
            var t;
            switch (this.props.dropdownMode) {
              case "scroll":
                t = this.renderScrollMode();
                break;
              case "select":
                t = this.renderSelectMode();
            }
            return e.createElement(
              "div",
              {
                className:
                  "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                    this.props.dropdownMode
                  ),
              },
              t
            );
          },
        },
      ]),
      n
    );
  })();
fe(It, "propTypes", {
  dropdownMode: r.oneOf(["scroll", "select"]).isRequired,
  dateFormat: r.string.isRequired,
  locale: r.string,
  maxDate: r.instanceOf(Date).isRequired,
  minDate: r.instanceOf(Date).isRequired,
  date: r.instanceOf(Date).isRequired,
  onChange: r.func.isRequired,
  scrollableMonthYearDropdown: r.bool,
});
var Yt = (function (t) {
  ye(o, e.Component);
  var r = ke(o);
  function o(t) {
    var a;
    return (
      ue(this, o),
      fe(ge((a = r.call(this, t))), "dayEl", e.createRef()),
      fe(ge(a), "handleClick", function (e) {
        !a.isDisabled() && a.props.onClick && a.props.onClick(e);
      }),
      fe(ge(a), "handleMouseEnter", function (e) {
        !a.isDisabled() && a.props.onMouseEnter && a.props.onMouseEnter(e);
      }),
      fe(ge(a), "handleOnKeyDown", function (e) {
        " " === e.key && (e.preventDefault(), (e.key = "Enter")),
          a.props.handleOnKeyDown(e);
      }),
      fe(ge(a), "isSameDay", function (e) {
        return Ve(a.props.day, e);
      }),
      fe(ge(a), "isKeyboardSelected", function () {
        return (
          !a.props.disabledKeyboardNavigation &&
          !a.isSameDay(a.props.selected) &&
          a.isSameDay(a.props.preSelection)
        );
      }),
      fe(ge(a), "isDisabled", function () {
        return rt(a.props.day, a.props);
      }),
      fe(ge(a), "isExcluded", function () {
        return nt(a.props.day, a.props);
      }),
      fe(ge(a), "getHighLightedClass", function (e) {
        var t = a.props,
          r = t.day,
          n = t.highlightDates;
        if (!n) return !1;
        var o = Ie(r, "MM.dd.yyyy");
        return n.get(o);
      }),
      fe(ge(a), "isInRange", function () {
        var e = a.props,
          t = e.day,
          r = e.startDate,
          n = e.endDate;
        return !(!r || !n) && $e(t, r, n);
      }),
      fe(ge(a), "isInSelectingRange", function () {
        var e,
          t = a.props,
          r = t.day,
          n = t.selectsStart,
          o = t.selectsEnd,
          s = t.selectsRange,
          i = t.selectsDisabledDaysInRange,
          p = t.startDate,
          c = t.endDate,
          l =
            null !== (e = a.props.selectingDate) && void 0 !== e
              ? e
              : a.props.preSelection;
        return (
          !(!(n || o || s) || !l || (!i && a.isDisabled())) &&
          (n && c && (X(l, c) || Ue(l, c))
            ? $e(r, l, c)
            : ((o && p && (J(l, p) || Ue(l, p))) ||
                !(!s || !p || c || (!J(l, p) && !Ue(l, p)))) &&
              $e(r, p, l))
        );
      }),
      fe(ge(a), "isSelectingRangeStart", function () {
        var e;
        if (!a.isInSelectingRange()) return !1;
        var t = a.props,
          r = t.day,
          n = t.startDate,
          o = t.selectsStart,
          s =
            null !== (e = a.props.selectingDate) && void 0 !== e
              ? e
              : a.props.preSelection;
        return Ve(r, o ? s : n);
      }),
      fe(ge(a), "isSelectingRangeEnd", function () {
        var e;
        if (!a.isInSelectingRange()) return !1;
        var t = a.props,
          r = t.day,
          n = t.endDate,
          o = t.selectsEnd,
          s = t.selectsRange,
          i =
            null !== (e = a.props.selectingDate) && void 0 !== e
              ? e
              : a.props.preSelection;
        return Ve(r, o || s ? i : n);
      }),
      fe(ge(a), "isRangeStart", function () {
        var e = a.props,
          t = e.day,
          r = e.startDate,
          n = e.endDate;
        return !(!r || !n) && Ve(r, t);
      }),
      fe(ge(a), "isRangeEnd", function () {
        var e = a.props,
          t = e.day,
          r = e.startDate,
          n = e.endDate;
        return !(!r || !n) && Ve(n, t);
      }),
      fe(ge(a), "isWeekend", function () {
        var e = g(a.props.day);
        return 0 === e || 6 === e;
      }),
      fe(ge(a), "isAfterMonth", function () {
        return (
          void 0 !== a.props.month &&
          (a.props.month + 1) % 12 === C(a.props.day)
        );
      }),
      fe(ge(a), "isBeforeMonth", function () {
        return (
          void 0 !== a.props.month &&
          (C(a.props.day) + 1) % 12 === a.props.month
        );
      }),
      fe(ge(a), "isCurrentDay", function () {
        return a.isSameDay(xe());
      }),
      fe(ge(a), "isSelected", function () {
        return a.isSameDay(a.props.selected);
      }),
      fe(ge(a), "getClassNames", function (e) {
        var t,
          r = a.props.dayClassName ? a.props.dayClassName(e) : void 0;
        return n(
          "react-datepicker__day",
          r,
          "react-datepicker__day--" + Ie(a.props.day, "ddd", t),
          {
            "react-datepicker__day--disabled": a.isDisabled(),
            "react-datepicker__day--excluded": a.isExcluded(),
            "react-datepicker__day--selected": a.isSelected(),
            "react-datepicker__day--keyboard-selected": a.isKeyboardSelected(),
            "react-datepicker__day--range-start": a.isRangeStart(),
            "react-datepicker__day--range-end": a.isRangeEnd(),
            "react-datepicker__day--in-range": a.isInRange(),
            "react-datepicker__day--in-selecting-range": a.isInSelectingRange(),
            "react-datepicker__day--selecting-range-start":
              a.isSelectingRangeStart(),
            "react-datepicker__day--selecting-range-end":
              a.isSelectingRangeEnd(),
            "react-datepicker__day--today": a.isCurrentDay(),
            "react-datepicker__day--weekend": a.isWeekend(),
            "react-datepicker__day--outside-month":
              a.isAfterMonth() || a.isBeforeMonth(),
          },
          a.getHighLightedClass("react-datepicker__day--highlighted")
        );
      }),
      fe(ge(a), "getAriaLabel", function () {
        var e = a.props,
          t = e.day,
          r = e.selectsRange,
          n = e.startDate,
          o = e.endDate,
          s = e.selected,
          i = e.ariaLabelPrefixWhenEnabled,
          p = void 0 === i ? "Single date" : i,
          c = e.ariaLabelPrefixWhenDisabled,
          l = void 0 === c ? "Not available" : c,
          d = function (e) {
            return Ie(e, "PPPP", a.props.locale);
          };
        if (r)
          n || o
            ? n && !o
              ? a.setState({
                  labelDay: ""
                    .concat(d(t), " Date range, selected start date ")
                    .concat(d(n), ", end date not selected"),
                })
              : a.setState({
                  labelDay: ""
                    .concat(d(t), " Date range, selected start date ")
                    .concat(d(n), ", selected end date ")
                    .concat(d(o)),
                })
            : a.setState({
                labelDay: "".concat(
                  d(t),
                  " Choose date range, nothing selected"
                ),
              });
        else {
          var u =
            a.isDisabled() || a.isExcluded()
              ? l
              : a.isSameDay(s)
              ? "Selected single date"
              : p;
          a.setState({ labelDay: "".concat(u, ", ").concat(d(t)) });
        }
      }),
      fe(ge(a), "getTabIndex", function (e, t) {
        var r = e || a.props.selected,
          n = t || a.props.preSelection;
        return a.isKeyboardSelected() || (a.isSameDay(r) && Ve(n, r)) ? 0 : -1;
      }),
      fe(ge(a), "handleFocusDay", function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = !1;
        0 === a.getTabIndex() &&
          !e.isInputFocused &&
          a.isSameDay(a.props.preSelection) &&
          ((document.activeElement &&
            document.activeElement !== document.body) ||
            (t = !0),
          a.props.inline && !a.props.shouldFocusDayInline && (t = !1),
          a.props.containerRef &&
            a.props.containerRef.current &&
            a.props.containerRef.current.contains(document.activeElement) &&
            document.activeElement.classList.contains(
              "react-datepicker__day"
            ) &&
            (t = !0)),
          t && a.dayEl.current.focus({ preventScroll: !0 });
      }),
      fe(ge(a), "renderDayContents", function () {
        return (a.props.monthShowsDuplicateDaysEnd && a.isAfterMonth()) ||
          (a.props.monthShowsDuplicateDaysStart && a.isBeforeMonth())
          ? null
          : a.props.renderDayContents
          ? a.props.renderDayContents(w(a.props.day), a.props.day)
          : w(a.props.day);
      }),
      fe(ge(a), "render", function () {
        return e.createElement(
          "div",
          {
            ref: a.dayEl,
            className: a.getClassNames(a.props.day),
            onKeyDown: a.handleOnKeyDown,
            onClick: a.handleClick,
            onMouseEnter: a.handleMouseEnter,
            tabIndex: a.getTabIndex(),
            "aria-label": a.state.labelDay,
            role: "button",
            "aria-disabled": a.isDisabled(),
            "aria-current": a.isCurrentDay() ? "date" : void 0,
          },
          a.renderDayContents()
        );
      }),
      (a.state = { labelDay: "" }),
      a
    );
  }
  return (
    me(o, [
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
            r = t.startDate,
            n = t.endDate,
            o = t.selected;
          this.handleFocusDay(e),
            (r === e.startDate && n === e.endDate && o === e.selected) ||
              this.getAriaLabel();
        },
      },
    ]),
    o
  );
})();
fe(Yt, "propTypes", {
  ariaLabelPrefixWhenEnabled: r.string,
  ariaLabelPrefixWhenDisabled: r.string,
  disabledKeyboardNavigation: r.bool,
  day: r.instanceOf(Date).isRequired,
  dayClassName: r.func,
  endDate: r.instanceOf(Date),
  highlightDates: r.instanceOf(Map),
  inline: r.bool,
  shouldFocusDayInline: r.bool,
  month: r.number,
  onClick: r.func,
  onMouseEnter: r.func,
  preSelection: r.instanceOf(Date),
  selected: r.object,
  selectingDate: r.instanceOf(Date),
  selectsEnd: r.bool,
  selectsStart: r.bool,
  selectsRange: r.bool,
  selectsDisabledDaysInRange: r.bool,
  startDate: r.instanceOf(Date),
  renderDayContents: r.func,
  handleOnKeyDown: r.func,
  containerRef: r.oneOfType([
    r.func,
    r.shape({ current: r.instanceOf(Element) }),
  ]),
  monthShowsDuplicateDaysEnd: r.bool,
  monthShowsDuplicateDaysStart: r.bool,
  locale: r.oneOfType([r.string, r.shape({ locale: r.object })]),
});
var Lt = (function (t) {
  ye(o, e.Component);
  var r = ke(o);
  function o() {
    var e;
    ue(this, o);
    for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
      n[a] = arguments[a];
    return (
      fe(
        ge((e = r.call.apply(r, [this].concat(n)))),
        "handleClick",
        function (t) {
          e.props.onClick && e.props.onClick(t);
        }
      ),
      e
    );
  }
  return (
    me(o, [
      {
        key: "render",
        value: function () {
          var t = this.props,
            r = t.weekNumber,
            o = t.ariaLabelPrefix,
            a = void 0 === o ? "week " : o,
            s = {
              "react-datepicker__week-number": !0,
              "react-datepicker__week-number--clickable": !!t.onClick,
            };
          return e.createElement(
            "div",
            {
              className: n(s),
              "aria-label": "".concat(a, " ").concat(this.props.weekNumber),
              onClick: this.handleClick,
            },
            r
          );
        },
      },
    ]),
    o
  );
})();
fe(Lt, "propTypes", { weekNumber: r.number.isRequired, onClick: r.func });
var Rt = (function (t) {
  ye(n, e.Component);
  var r = ke(n);
  function n() {
    var t;
    ue(this, n);
    for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    return (
      fe(
        ge((t = r.call.apply(r, [this].concat(a)))),
        "handleDayClick",
        function (e, r) {
          t.props.onDayClick && t.props.onDayClick(e, r);
        }
      ),
      fe(ge(t), "handleDayMouseEnter", function (e) {
        t.props.onDayMouseEnter && t.props.onDayMouseEnter(e);
      }),
      fe(ge(t), "handleWeekClick", function (e, r, n) {
        "function" == typeof t.props.onWeekSelect &&
          t.props.onWeekSelect(e, r, n),
          t.props.shouldCloseOnSelect && t.props.setOpen(!1);
      }),
      fe(ge(t), "formatWeekNumber", function (e) {
        return t.props.formatWeekNumber ? t.props.formatWeekNumber(e) : Re(e);
      }),
      fe(ge(t), "renderDays", function () {
        var r = Ae(t.props.day, t.props.locale, t.props.calendarStartDay),
          n = [],
          o = t.formatWeekNumber(r);
        if (t.props.showWeekNumber) {
          var a = t.props.onWeekSelect
            ? t.handleWeekClick.bind(ge(t), r, o)
            : void 0;
          n.push(
            e.createElement(Lt, {
              key: "W",
              weekNumber: o,
              onClick: a,
              ariaLabelPrefix: t.props.ariaLabelPrefix,
            })
          );
        }
        return n.concat(
          [0, 1, 2, 3, 4, 5, 6].map(function (n) {
            var o = c(r, n);
            return e.createElement(Yt, {
              ariaLabelPrefixWhenEnabled: t.props.chooseDayAriaLabelPrefix,
              ariaLabelPrefixWhenDisabled: t.props.disabledDayAriaLabelPrefix,
              key: o.valueOf(),
              day: o,
              month: t.props.month,
              onClick: t.handleDayClick.bind(ge(t), o),
              onMouseEnter: t.handleDayMouseEnter.bind(ge(t), o),
              minDate: t.props.minDate,
              maxDate: t.props.maxDate,
              excludeDates: t.props.excludeDates,
              excludeDateIntervals: t.props.excludeDateIntervals,
              includeDates: t.props.includeDates,
              includeDateIntervals: t.props.includeDateIntervals,
              highlightDates: t.props.highlightDates,
              selectingDate: t.props.selectingDate,
              filterDate: t.props.filterDate,
              preSelection: t.props.preSelection,
              selected: t.props.selected,
              selectsStart: t.props.selectsStart,
              selectsEnd: t.props.selectsEnd,
              selectsRange: t.props.selectsRange,
              selectsDisabledDaysInRange: t.props.selectsDisabledDaysInRange,
              startDate: t.props.startDate,
              endDate: t.props.endDate,
              dayClassName: t.props.dayClassName,
              renderDayContents: t.props.renderDayContents,
              disabledKeyboardNavigation: t.props.disabledKeyboardNavigation,
              handleOnKeyDown: t.props.handleOnKeyDown,
              isInputFocused: t.props.isInputFocused,
              containerRef: t.props.containerRef,
              inline: t.props.inline,
              shouldFocusDayInline: t.props.shouldFocusDayInline,
              monthShowsDuplicateDaysEnd: t.props.monthShowsDuplicateDaysEnd,
              monthShowsDuplicateDaysStart:
                t.props.monthShowsDuplicateDaysStart,
              locale: t.props.locale,
            });
          })
        );
      }),
      t
    );
  }
  return (
    me(
      n,
      [
        {
          key: "render",
          value: function () {
            return e.createElement(
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
    n
  );
})();
fe(Rt, "propTypes", {
  ariaLabelPrefix: r.string,
  disabledKeyboardNavigation: r.bool,
  day: r.instanceOf(Date).isRequired,
  dayClassName: r.func,
  disabledDayAriaLabelPrefix: r.string,
  chooseDayAriaLabelPrefix: r.string,
  endDate: r.instanceOf(Date),
  excludeDates: r.array,
  excludeDateIntervals: r.arrayOf(
    r.shape({ start: r.instanceOf(Date), end: r.instanceOf(Date) })
  ),
  filterDate: r.func,
  formatWeekNumber: r.func,
  highlightDates: r.instanceOf(Map),
  includeDates: r.array,
  includeDateIntervals: r.array,
  inline: r.bool,
  shouldFocusDayInline: r.bool,
  locale: r.oneOfType([r.string, r.shape({ locale: r.object })]),
  maxDate: r.instanceOf(Date),
  calendarStartDay: r.number,
  minDate: r.instanceOf(Date),
  month: r.number,
  onDayClick: r.func,
  onDayMouseEnter: r.func,
  onWeekSelect: r.func,
  preSelection: r.instanceOf(Date),
  selected: r.instanceOf(Date),
  selectingDate: r.instanceOf(Date),
  selectsEnd: r.bool,
  selectsStart: r.bool,
  selectsRange: r.bool,
  selectsDisabledDaysInRange: r.bool,
  showWeekNumber: r.bool,
  startDate: r.instanceOf(Date),
  setOpen: r.func,
  shouldCloseOnSelect: r.bool,
  renderDayContents: r.func,
  handleOnKeyDown: r.func,
  isInputFocused: r.bool,
  containerRef: r.oneOfType([
    r.func,
    r.shape({ current: r.instanceOf(Element) }),
  ]),
  monthShowsDuplicateDaysEnd: r.bool,
  monthShowsDuplicateDaysStart: r.bool,
});
var Ft = (function (t) {
  ye(o, e.Component);
  var r = ke(o);
  function o() {
    var t;
    ue(this, o);
    for (var a = arguments.length, s = new Array(a), i = 0; i < a; i++)
      s[i] = arguments[i];
    return (
      fe(
        ge((t = r.call.apply(r, [this].concat(s)))),
        "MONTH_REFS",
        Ce(Array(12)).map(function () {
          return e.createRef();
        })
      ),
      fe(ge(t), "isDisabled", function (e) {
        return rt(e, t.props);
      }),
      fe(ge(t), "isExcluded", function (e) {
        return nt(e, t.props);
      }),
      fe(ge(t), "handleDayClick", function (e, r) {
        t.props.onDayClick && t.props.onDayClick(e, r, t.props.orderInDisplay);
      }),
      fe(ge(t), "handleDayMouseEnter", function (e) {
        t.props.onDayMouseEnter && t.props.onDayMouseEnter(e);
      }),
      fe(ge(t), "handleMouseLeave", function () {
        t.props.onMouseLeave && t.props.onMouseLeave();
      }),
      fe(ge(t), "isRangeStartMonth", function (e) {
        var r = t.props,
          n = r.day,
          o = r.startDate,
          a = r.endDate;
        return !(!o || !a) && qe(x(n, e), o);
      }),
      fe(ge(t), "isRangeStartQuarter", function (e) {
        var r = t.props,
          n = r.day,
          o = r.startDate,
          a = r.endDate;
        return !(!o || !a) && Qe(T(n, e), o);
      }),
      fe(ge(t), "isRangeEndMonth", function (e) {
        var r = t.props,
          n = r.day,
          o = r.startDate,
          a = r.endDate;
        return !(!o || !a) && qe(x(n, e), a);
      }),
      fe(ge(t), "isRangeEndQuarter", function (e) {
        var r = t.props,
          n = r.day,
          o = r.startDate,
          a = r.endDate;
        return !(!o || !a) && Qe(T(n, e), a);
      }),
      fe(ge(t), "isWeekInMonth", function (e) {
        var r = t.props.day,
          n = c(e, 6);
        return qe(e, r) || qe(n, r);
      }),
      fe(ge(t), "isCurrentMonth", function (e, t) {
        return M(e) === M(xe()) && t === C(xe());
      }),
      fe(ge(t), "isSelectedMonth", function (e, t, r) {
        return C(e) === t && M(e) === M(r);
      }),
      fe(ge(t), "isSelectedQuarter", function (e, t, r) {
        return S(e) === t && M(e) === M(r);
      }),
      fe(ge(t), "renderWeeks", function () {
        for (
          var r = [],
            n = t.props.fixedHeight,
            o = 0,
            a = !1,
            s = Ae(Be(t.props.day), t.props.locale, t.props.calendarStartDay);
          r.push(
            e.createElement(Rt, {
              ariaLabelPrefix: t.props.weekAriaLabelPrefix,
              chooseDayAriaLabelPrefix: t.props.chooseDayAriaLabelPrefix,
              disabledDayAriaLabelPrefix: t.props.disabledDayAriaLabelPrefix,
              key: o,
              day: s,
              month: C(t.props.day),
              onDayClick: t.handleDayClick,
              onDayMouseEnter: t.handleDayMouseEnter,
              onWeekSelect: t.props.onWeekSelect,
              formatWeekNumber: t.props.formatWeekNumber,
              locale: t.props.locale,
              minDate: t.props.minDate,
              maxDate: t.props.maxDate,
              excludeDates: t.props.excludeDates,
              excludeDateIntervals: t.props.excludeDateIntervals,
              includeDates: t.props.includeDates,
              includeDateIntervals: t.props.includeDateIntervals,
              inline: t.props.inline,
              shouldFocusDayInline: t.props.shouldFocusDayInline,
              highlightDates: t.props.highlightDates,
              selectingDate: t.props.selectingDate,
              filterDate: t.props.filterDate,
              preSelection: t.props.preSelection,
              selected: t.props.selected,
              selectsStart: t.props.selectsStart,
              selectsEnd: t.props.selectsEnd,
              selectsRange: t.props.selectsRange,
              selectsDisabledDaysInRange: t.props.selectsDisabledDaysInRange,
              showWeekNumber: t.props.showWeekNumbers,
              startDate: t.props.startDate,
              endDate: t.props.endDate,
              dayClassName: t.props.dayClassName,
              setOpen: t.props.setOpen,
              shouldCloseOnSelect: t.props.shouldCloseOnSelect,
              disabledKeyboardNavigation: t.props.disabledKeyboardNavigation,
              renderDayContents: t.props.renderDayContents,
              handleOnKeyDown: t.props.handleOnKeyDown,
              isInputFocused: t.props.isInputFocused,
              containerRef: t.props.containerRef,
              calendarStartDay: t.props.calendarStartDay,
              monthShowsDuplicateDaysEnd: t.props.monthShowsDuplicateDaysEnd,
              monthShowsDuplicateDaysStart:
                t.props.monthShowsDuplicateDaysStart,
            })
          ),
            !a;

        ) {
          o++, (s = l(s, 1));
          var i = n && o >= 6,
            p = !n && !t.isWeekInMonth(s);
          if (i || p) {
            if (!t.props.peekNextMonth) break;
            a = !0;
          }
        }
        return r;
      }),
      fe(ge(t), "onMonthClick", function (e, r) {
        t.handleDayClick(Be(x(t.props.day, r)), e);
      }),
      fe(ge(t), "handleMonthNavigation", function (e, r) {
        t.isDisabled(r) ||
          t.isExcluded(r) ||
          (t.props.setPreSelection(r),
          t.MONTH_REFS[e].current && t.MONTH_REFS[e].current.focus());
      }),
      fe(ge(t), "onMonthKeyDown", function (e, r) {
        e.preventDefault();
        var n = e.key;
        if (!t.props.disabledKeyboardNavigation)
          switch (n) {
            case "Enter":
              t.onMonthClick(e, r), t.props.setPreSelection(t.props.selected);
              break;
            case "ArrowRight":
              t.handleMonthNavigation(
                11 === r ? 0 : r + 1,
                d(t.props.preSelection, 1)
              );
              break;
            case "ArrowLeft":
              t.handleMonthNavigation(
                0 === r ? 11 : r - 1,
                f(t.props.preSelection, 1)
              );
              break;
            case "ArrowUp":
              t.handleMonthNavigation(
                r >= 0 && r <= 2 ? r + 9 : r - 3,
                f(t.props.preSelection, 3)
              );
              break;
            case "ArrowDown":
              t.handleMonthNavigation(
                r >= 9 && r <= 11 ? r - 9 : r + 3,
                d(t.props.preSelection, 3)
              );
          }
      }),
      fe(ge(t), "onQuarterClick", function (e, r) {
        t.handleDayClick(je(T(t.props.day, r)), e);
      }),
      fe(ge(t), "getMonthClassNames", function (e) {
        var r = t.props,
          o = r.day,
          a = r.startDate,
          s = r.endDate,
          i = r.selected,
          p = r.minDate,
          c = r.maxDate,
          l = r.preSelection,
          d = r.monthClassName,
          u = r.excludeDates,
          h = r.includeDates,
          m = d ? d(o) : void 0,
          f = x(o, e);
        return n(
          "react-datepicker__month-text",
          "react-datepicker__month-".concat(e),
          m,
          {
            "react-datepicker__month--disabled":
              (p || c || u || h) && ot(f, t.props),
            "react-datepicker__month--selected": t.isSelectedMonth(o, e, i),
            "react-datepicker__month-text--keyboard-selected":
              !t.props.disabledKeyboardNavigation && C(l) === e,
            "react-datepicker__month--in-range": at(a, s, e, o),
            "react-datepicker__month--range-start": t.isRangeStartMonth(e),
            "react-datepicker__month--range-end": t.isRangeEndMonth(e),
            "react-datepicker__month-text--today": t.isCurrentMonth(o, e),
          }
        );
      }),
      fe(ge(t), "getTabIndex", function (e) {
        var r = C(t.props.preSelection);
        return t.props.disabledKeyboardNavigation || e !== r ? "-1" : "0";
      }),
      fe(ge(t), "getAriaLabel", function (e) {
        var r = t.props,
          n = r.chooseDayAriaLabelPrefix,
          o = void 0 === n ? "Choose" : n,
          a = r.disabledDayAriaLabelPrefix,
          s = void 0 === a ? "Not available" : a,
          i = r.day,
          p = x(i, e),
          c = t.isDisabled(p) || t.isExcluded(p) ? s : o;
        return "".concat(c, " ").concat(Ie(p, "MMMM yyyy"));
      }),
      fe(ge(t), "getQuarterClassNames", function (e) {
        var r = t.props,
          o = r.day,
          a = r.startDate,
          s = r.endDate,
          i = r.selected,
          p = r.minDate,
          c = r.maxDate;
        return n(
          "react-datepicker__quarter-text",
          "react-datepicker__quarter-".concat(e),
          {
            "react-datepicker__quarter--disabled":
              (p || c) && st(T(o, e), t.props),
            "react-datepicker__quarter--selected": t.isSelectedQuarter(o, e, i),
            "react-datepicker__quarter--in-range": pt(a, s, e, o),
            "react-datepicker__quarter--range-start": t.isRangeStartQuarter(e),
            "react-datepicker__quarter--range-end": t.isRangeEndQuarter(e),
          }
        );
      }),
      fe(ge(t), "renderMonths", function () {
        var r = t.props,
          n = r.showFullMonthYearPicker,
          o = r.showTwoColumnMonthYearPicker,
          a = r.showFourColumnMonthYearPicker,
          s = r.locale,
          i = r.day,
          p = r.selected;
        return (
          a
            ? [
                [0, 1, 2, 3],
                [4, 5, 6, 7],
                [8, 9, 10, 11],
              ]
            : o
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
        ).map(function (r, o) {
          return e.createElement(
            "div",
            { className: "react-datepicker__month-wrapper", key: o },
            r.map(function (r, o) {
              return e.createElement(
                "div",
                {
                  ref: t.MONTH_REFS[r],
                  key: o,
                  onClick: function (e) {
                    t.onMonthClick(e, r);
                  },
                  onKeyDown: function (e) {
                    t.onMonthKeyDown(e, r);
                  },
                  tabIndex: t.getTabIndex(r),
                  className: t.getMonthClassNames(r),
                  role: "option",
                  "aria-label": t.getAriaLabel(r),
                  "aria-current": t.isCurrentMonth(i, r) ? "date" : void 0,
                  "aria-selected": t.isSelectedMonth(i, r, p),
                },
                n ? Ze(r, s) : et(r, s)
              );
            })
          );
        });
      }),
      fe(ge(t), "renderQuarters", function () {
        var r = t.props,
          n = r.day,
          o = r.selected;
        return e.createElement(
          "div",
          { className: "react-datepicker__quarter-wrapper" },
          [1, 2, 3, 4].map(function (r, a) {
            return e.createElement(
              "div",
              {
                key: a,
                role: "option",
                onClick: function (e) {
                  t.onQuarterClick(e, r);
                },
                className: t.getQuarterClassNames(r),
                "aria-selected": t.isSelectedQuarter(n, r, o),
              },
              tt(r, t.props.locale)
            );
          })
        );
      }),
      fe(ge(t), "getClassNames", function () {
        var e = t.props;
        e.day;
        var r = e.selectingDate,
          o = e.selectsStart,
          a = e.selectsEnd,
          s = e.showMonthYearPicker,
          i = e.showQuarterYearPicker;
        return n(
          "react-datepicker__month",
          { "react-datepicker__month--selecting-range": r && (o || a) },
          { "react-datepicker__monthPicker": s },
          { "react-datepicker__quarterPicker": i }
        );
      }),
      t
    );
  }
  return (
    me(o, [
      {
        key: "render",
        value: function () {
          var t = this.props,
            r = t.showMonthYearPicker,
            n = t.showQuarterYearPicker,
            o = t.day,
            a = t.ariaLabelPrefix,
            s = void 0 === a ? "month " : a;
          return e.createElement(
            "div",
            {
              className: this.getClassNames(),
              onMouseLeave: this.handleMouseLeave,
              "aria-label": "".concat(s, " ").concat(Ie(o, "yyyy-MM")),
            },
            r
              ? this.renderMonths()
              : n
              ? this.renderQuarters()
              : this.renderWeeks()
          );
        },
      },
    ]),
    o
  );
})();
fe(Ft, "propTypes", {
  ariaLabelPrefix: r.string,
  chooseDayAriaLabelPrefix: r.string,
  disabledDayAriaLabelPrefix: r.string,
  disabledKeyboardNavigation: r.bool,
  day: r.instanceOf(Date).isRequired,
  dayClassName: r.func,
  monthClassName: r.func,
  endDate: r.instanceOf(Date),
  orderInDisplay: r.number,
  excludeDates: r.array,
  excludeDateIntervals: r.arrayOf(
    r.shape({ start: r.instanceOf(Date), end: r.instanceOf(Date) })
  ),
  filterDate: r.func,
  fixedHeight: r.bool,
  formatWeekNumber: r.func,
  highlightDates: r.instanceOf(Map),
  includeDates: r.array,
  includeDateIntervals: r.array,
  inline: r.bool,
  shouldFocusDayInline: r.bool,
  locale: r.oneOfType([r.string, r.shape({ locale: r.object })]),
  maxDate: r.instanceOf(Date),
  minDate: r.instanceOf(Date),
  onDayClick: r.func,
  onDayMouseEnter: r.func,
  onMouseLeave: r.func,
  onWeekSelect: r.func,
  peekNextMonth: r.bool,
  preSelection: r.instanceOf(Date),
  setPreSelection: r.func,
  selected: r.instanceOf(Date),
  selectingDate: r.instanceOf(Date),
  calendarStartDay: r.number,
  selectsEnd: r.bool,
  selectsStart: r.bool,
  selectsRange: r.bool,
  selectsDisabledDaysInRange: r.bool,
  showWeekNumbers: r.bool,
  startDate: r.instanceOf(Date),
  setOpen: r.func,
  shouldCloseOnSelect: r.bool,
  renderDayContents: r.func,
  showMonthYearPicker: r.bool,
  showFullMonthYearPicker: r.bool,
  showTwoColumnMonthYearPicker: r.bool,
  showFourColumnMonthYearPicker: r.bool,
  showQuarterYearPicker: r.bool,
  handleOnKeyDown: r.func,
  isInputFocused: r.bool,
  weekAriaLabelPrefix: r.string,
  containerRef: r.oneOfType([
    r.func,
    r.shape({ current: r.instanceOf(Element) }),
  ]),
  monthShowsDuplicateDaysEnd: r.bool,
  monthShowsDuplicateDaysStart: r.bool,
});
var At = (function (t) {
  ye(n, e.Component);
  var r = ke(n);
  function n() {
    var t;
    ue(this, n);
    for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    return (
      fe(ge((t = r.call.apply(r, [this].concat(a)))), "state", {
        height: null,
      }),
      fe(ge(t), "handleClick", function (e) {
        ((t.props.minTime || t.props.maxTime) && ut(e, t.props)) ||
          ((t.props.excludeTimes ||
            t.props.includeTimes ||
            t.props.filterTime) &&
            dt(e, t.props)) ||
          t.props.onChange(e);
      }),
      fe(ge(t), "isSelectedTime", function (e, r, n) {
        return t.props.selected && r === v(e) && n === b(e);
      }),
      fe(ge(t), "liClasses", function (e, r, n) {
        var o = [
          "react-datepicker__time-list-item",
          t.props.timeClassName ? t.props.timeClassName(e, r, n) : void 0,
        ];
        return (
          t.isSelectedTime(e, r, n) &&
            o.push("react-datepicker__time-list-item--selected"),
          (((t.props.minTime || t.props.maxTime) && ut(e, t.props)) ||
            ((t.props.excludeTimes ||
              t.props.includeTimes ||
              t.props.filterTime) &&
              dt(e, t.props))) &&
            o.push("react-datepicker__time-list-item--disabled"),
          t.props.injectTimes &&
            (60 * v(e) + b(e)) % t.props.intervals != 0 &&
            o.push("react-datepicker__time-list-item--injected"),
          o.join(" ")
        );
      }),
      fe(ge(t), "handleOnKeyDown", function (e, r) {
        " " === e.key && (e.preventDefault(), (e.key = "Enter")),
          "Enter" === e.key && t.handleClick(r),
          t.props.handleOnKeyDown(e);
      }),
      fe(ge(t), "renderTimes", function () {
        for (
          var r = [],
            n = t.props.format ? t.props.format : "p",
            o = t.props.intervals,
            a = Fe(xe(t.props.selected)),
            s = 1440 / o,
            p =
              t.props.injectTimes &&
              t.props.injectTimes.sort(function (e, t) {
                return e - t;
              }),
            c = t.props.selected || t.props.openToDate || xe(),
            l = v(c),
            d = b(c),
            u = N(P(a, d), l),
            h = 0;
          h < s;
          h++
        ) {
          var m = i(a, h * o);
          if ((r.push(m), p)) {
            var f = gt(a, m, h, o, p);
            r = r.concat(f);
          }
        }
        return r.map(function (r, o) {
          return e.createElement(
            "li",
            {
              key: o,
              onClick: t.handleClick.bind(ge(t), r),
              className: t.liClasses(r, l, d),
              ref: function (e) {
                (X(r, u) || Ue(r, u)) && (t.centerLi = e);
              },
              onKeyDown: function (e) {
                t.handleOnKeyDown(e, r);
              },
              tabIndex: "0",
              "aria-selected": t.isSelectedTime(r, l, d) ? "true" : void 0,
            },
            Ie(r, n, t.props.locale)
          );
        });
      }),
      t
    );
  }
  return (
    me(
      n,
      [
        {
          key: "componentDidMount",
          value: function () {
            (this.list.scrollTop =
              this.centerLi &&
              n.calcCenterPosition(
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
            var t = this,
              r = this.state.height;
            return e.createElement(
              "div",
              {
                className: "react-datepicker__time-container ".concat(
                  this.props.todayButton
                    ? "react-datepicker__time-container--with-today-button"
                    : ""
                ),
              },
              e.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker__header--time ".concat(
                      this.props.showTimeSelectOnly
                        ? "react-datepicker__header--time--only"
                        : ""
                    ),
                  ref: function (e) {
                    t.header = e;
                  },
                },
                e.createElement(
                  "div",
                  { className: "react-datepicker-time__header" },
                  this.props.timeCaption
                )
              ),
              e.createElement(
                "div",
                { className: "react-datepicker__time" },
                e.createElement(
                  "div",
                  { className: "react-datepicker__time-box" },
                  e.createElement(
                    "ul",
                    {
                      className: "react-datepicker__time-list",
                      ref: function (e) {
                        t.list = e;
                      },
                      style: r ? { height: r } : {},
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
    n
  );
})();
fe(At, "calcCenterPosition", function (e, t) {
  return t.offsetTop - (e / 2 - t.clientHeight / 2);
}),
  fe(At, "propTypes", {
    format: r.string,
    includeTimes: r.array,
    intervals: r.number,
    selected: r.instanceOf(Date),
    openToDate: r.instanceOf(Date),
    onChange: r.func,
    timeClassName: r.func,
    todayButton: r.node,
    minTime: r.instanceOf(Date),
    maxTime: r.instanceOf(Date),
    excludeTimes: r.array,
    filterTime: r.func,
    monthRef: r.object,
    timeCaption: r.string,
    injectTimes: r.array,
    handleOnKeyDown: r.func,
    locale: r.oneOfType([r.string, r.shape({ locale: r.object })]),
    showTimeSelectOnly: r.bool,
  });
var Bt = (function (t) {
  ye(o, e.Component);
  var r = ke(o);
  function o(t) {
    var a;
    return (
      ue(this, o),
      fe(
        ge((a = r.call(this, t))),
        "YEAR_REFS",
        Ce(Array(a.props.yearItemNumber)).map(function () {
          return e.createRef();
        })
      ),
      fe(ge(a), "isDisabled", function (e) {
        return rt(e, a.props);
      }),
      fe(ge(a), "isExcluded", function (e) {
        return nt(e, a.props);
      }),
      fe(ge(a), "updateFocusOnPaginate", function (e) {
        var t = function () {
          this.YEAR_REFS[e].current.focus();
        }.bind(ge(a));
        window.requestAnimationFrame(t);
      }),
      fe(ge(a), "handleYearClick", function (e, t) {
        a.props.onDayClick && a.props.onDayClick(e, t);
      }),
      fe(ge(a), "handleYearNavigation", function (e, t) {
        var r = a.props,
          n = r.date,
          o = r.yearItemNumber,
          s = kt(n, o).startPeriod;
        a.isDisabled(t) ||
          a.isExcluded(t) ||
          (a.props.setPreSelection(t),
          e - s == -1
            ? a.updateFocusOnPaginate(o - 1)
            : e - s === o
            ? a.updateFocusOnPaginate(0)
            : a.YEAR_REFS[e - s].current.focus());
      }),
      fe(ge(a), "isSameDay", function (e, t) {
        return Ve(e, t);
      }),
      fe(ge(a), "isCurrentYear", function (e) {
        return e === M(xe());
      }),
      fe(ge(a), "isKeyboardSelected", function (e) {
        var t = Ke(E(a.props.date, e));
        return (
          !a.props.disabledKeyboardNavigation &&
          !a.props.inline &&
          !Ve(t, Ke(a.props.selected)) &&
          Ve(t, Ke(a.props.preSelection))
        );
      }),
      fe(ge(a), "onYearClick", function (e, t) {
        var r = a.props.date;
        a.handleYearClick(Ke(E(r, t)), e);
      }),
      fe(ge(a), "onYearKeyDown", function (e, t) {
        var r = e.key;
        if (!a.props.disabledKeyboardNavigation)
          switch (r) {
            case "Enter":
              a.onYearClick(e, t), a.props.setPreSelection(a.props.selected);
              break;
            case "ArrowRight":
              a.handleYearNavigation(t + 1, u(a.props.preSelection, 1));
              break;
            case "ArrowLeft":
              a.handleYearNavigation(t - 1, D(a.props.preSelection, 1));
          }
      }),
      fe(ge(a), "getYearClassNames", function (e) {
        var t = a.props,
          r = t.minDate,
          o = t.maxDate,
          s = t.selected,
          i = t.excludeDates,
          p = t.includeDates,
          c = t.filterDate;
        return n("react-datepicker__year-text", {
          "react-datepicker__year-text--selected": e === M(s),
          "react-datepicker__year-text--disabled":
            (r || o || i || p || c) && it(e, a.props),
          "react-datepicker__year-text--keyboard-selected":
            a.isKeyboardSelected(e),
          "react-datepicker__year-text--today": a.isCurrentYear(e),
        });
      }),
      fe(ge(a), "getYearTabIndex", function (e) {
        return a.props.disabledKeyboardNavigation
          ? "-1"
          : e === M(a.props.preSelection)
          ? "0"
          : "-1";
      }),
      a
    );
  }
  return (
    me(o, [
      {
        key: "render",
        value: function () {
          for (
            var t = this,
              r = [],
              n = this.props,
              o = kt(n.date, n.yearItemNumber),
              a = o.startPeriod,
              s = o.endPeriod,
              i = function (n) {
                r.push(
                  e.createElement(
                    "div",
                    {
                      ref: t.YEAR_REFS[n - a],
                      onClick: function (e) {
                        t.onYearClick(e, n);
                      },
                      onKeyDown: function (e) {
                        t.onYearKeyDown(e, n);
                      },
                      tabIndex: t.getYearTabIndex(n),
                      className: t.getYearClassNames(n),
                      key: n,
                      "aria-current": t.isCurrentYear(n) ? "date" : void 0,
                    },
                    n
                  )
                );
              },
              p = a;
            p <= s;
            p++
          )
            i(p);
          return e.createElement(
            "div",
            { className: "react-datepicker__year" },
            e.createElement(
              "div",
              { className: "react-datepicker__year-wrapper" },
              r
            )
          );
        },
      },
    ]),
    o
  );
})();
fe(Bt, "propTypes", {
  date: r.string,
  disabledKeyboardNavigation: r.bool,
  onDayClick: r.func,
  preSelection: r.instanceOf(Date),
  setPreSelection: r.func,
  selected: r.object,
  inline: r.bool,
  maxDate: r.instanceOf(Date),
  minDate: r.instanceOf(Date),
  excludeDates: r.array,
  includeDates: r.array,
  filterDate: r.func,
  yearItemNumber: r.number,
});
var Kt = (function (t) {
  ye(n, e.Component);
  var r = ke(n);
  function n(t) {
    var o;
    return (
      ue(this, n),
      fe(ge((o = r.call(this, t))), "onTimeChange", function (e) {
        o.setState({ time: e });
        var t = new Date();
        t.setHours(e.split(":")[0]),
          t.setMinutes(e.split(":")[1]),
          o.props.onChange(t);
      }),
      fe(ge(o), "renderTimeInput", function () {
        var t = o.state.time,
          r = o.props,
          n = r.date,
          a = r.timeString,
          s = r.customTimeInput;
        return s
          ? e.cloneElement(s, { date: n, value: t, onChange: o.onTimeChange })
          : e.createElement("input", {
              type: "time",
              className: "react-datepicker-time__input",
              placeholder: "Time",
              name: "time-input",
              required: !0,
              value: t,
              onChange: function (e) {
                o.onTimeChange(e.target.value || a);
              },
            });
      }),
      (o.state = { time: o.props.timeString }),
      o
    );
  }
  return (
    me(
      n,
      [
        {
          key: "render",
          value: function () {
            return e.createElement(
              "div",
              { className: "react-datepicker__input-time-container" },
              e.createElement(
                "div",
                { className: "react-datepicker-time__caption" },
                this.props.timeInputLabel
              ),
              e.createElement(
                "div",
                { className: "react-datepicker-time__input-container" },
                e.createElement(
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
    n
  );
})();
function jt(t) {
  var r = t.className,
    n = t.children,
    o = t.showPopperArrow,
    a = t.arrowProps,
    s = void 0 === a ? {} : a;
  return e.createElement(
    "div",
    { className: r },
    o &&
      e.createElement(
        "div",
        De({ className: "react-datepicker__triangle" }, s)
      ),
    n
  );
}
fe(Kt, "propTypes", {
  onChange: r.func,
  date: r.instanceOf(Date),
  timeString: r.string,
  timeInputLabel: r.string,
  customTimeInput: r.element,
}),
  (jt.propTypes = {
    className: r.string,
    children: r.node,
    arrowProps: r.object,
    showPopperArrow: r.bool,
  });
var Wt = [
    "react-datepicker__year-select",
    "react-datepicker__month-select",
    "react-datepicker__month-year-select",
  ],
  Ht = (function (t) {
    ye(o, e.Component);
    var r = ke(o);
    function o(t) {
      var a;
      return (
        ue(this, o),
        fe(ge((a = r.call(this, t))), "handleClickOutside", function (e) {
          a.props.onClickOutside(e);
        }),
        fe(ge(a), "setClickOutsideRef", function () {
          return a.containerRef.current;
        }),
        fe(ge(a), "handleDropdownFocus", function (e) {
          (function () {
            var e = (
              (arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
              ).className || ""
            ).split(/\s+/);
            return Wt.some(function (t) {
              return e.indexOf(t) >= 0;
            });
          })(e.target) && a.props.onDropdownFocus();
        }),
        fe(ge(a), "getDateInView", function () {
          var e = a.props,
            t = e.preSelection,
            r = e.selected,
            n = e.openToDate,
            o = yt(a.props),
            s = bt(a.props),
            i = xe(),
            p = n || r || t;
          return p || (o && X(i, o) ? o : s && J(i, s) ? s : i);
        }),
        fe(ge(a), "increaseMonth", function () {
          a.setState(
            function (e) {
              var t = e.date;
              return { date: d(t, 1) };
            },
            function () {
              return a.handleMonthChange(a.state.date);
            }
          );
        }),
        fe(ge(a), "decreaseMonth", function () {
          a.setState(
            function (e) {
              var t = e.date;
              return { date: f(t, 1) };
            },
            function () {
              return a.handleMonthChange(a.state.date);
            }
          );
        }),
        fe(ge(a), "handleDayClick", function (e, t, r) {
          a.props.onSelect(e, t, r),
            a.props.setPreSelection && a.props.setPreSelection(e);
        }),
        fe(ge(a), "handleDayMouseEnter", function (e) {
          a.setState({ selectingDate: e }),
            a.props.onDayMouseEnter && a.props.onDayMouseEnter(e);
        }),
        fe(ge(a), "handleMonthMouseLeave", function () {
          a.setState({ selectingDate: null }),
            a.props.onMonthMouseLeave && a.props.onMonthMouseLeave();
        }),
        fe(ge(a), "handleYearChange", function (e) {
          a.props.onYearChange && a.props.onYearChange(e),
            a.props.adjustDateOnChange &&
              (a.props.onSelect && a.props.onSelect(e),
              a.props.setOpen && a.props.setOpen(!0)),
            a.props.setPreSelection && a.props.setPreSelection(e);
        }),
        fe(ge(a), "handleMonthChange", function (e) {
          a.props.onMonthChange && a.props.onMonthChange(e),
            a.props.adjustDateOnChange &&
              (a.props.onSelect && a.props.onSelect(e),
              a.props.setOpen && a.props.setOpen(!0)),
            a.props.setPreSelection && a.props.setPreSelection(e);
        }),
        fe(ge(a), "handleMonthYearChange", function (e) {
          a.handleYearChange(e), a.handleMonthChange(e);
        }),
        fe(ge(a), "changeYear", function (e) {
          a.setState(
            function (t) {
              var r = t.date;
              return { date: E(r, e) };
            },
            function () {
              return a.handleYearChange(a.state.date);
            }
          );
        }),
        fe(ge(a), "changeMonth", function (e) {
          a.setState(
            function (t) {
              var r = t.date;
              return { date: x(r, e) };
            },
            function () {
              return a.handleMonthChange(a.state.date);
            }
          );
        }),
        fe(ge(a), "changeMonthYear", function (e) {
          a.setState(
            function (t) {
              var r = t.date;
              return { date: E(x(r, C(e)), M(e)) };
            },
            function () {
              return a.handleMonthYearChange(a.state.date);
            }
          );
        }),
        fe(ge(a), "header", function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : a.state.date,
            r = Ae(t, a.props.locale, a.props.calendarStartDay),
            o = [];
          return (
            a.props.showWeekNumbers &&
              o.push(
                e.createElement(
                  "div",
                  { key: "W", className: "react-datepicker__day-name" },
                  a.props.weekLabel || "#"
                )
              ),
            o.concat(
              [0, 1, 2, 3, 4, 5, 6].map(function (t) {
                var o = c(r, t),
                  s = a.formatWeekday(o, a.props.locale),
                  i = a.props.weekDayClassName
                    ? a.props.weekDayClassName(o)
                    : void 0;
                return e.createElement(
                  "div",
                  { key: t, className: n("react-datepicker__day-name", i) },
                  s
                );
              })
            )
          );
        }),
        fe(ge(a), "formatWeekday", function (e, t) {
          return a.props.formatWeekDay
            ? (function (e, t, r) {
                return "function" == typeof t ? t(e, r) : Ie(e, "EEEE", r);
              })(e, a.props.formatWeekDay, t)
            : a.props.useWeekdaysShort
            ? (function (e, t) {
                return Ie(e, "EEE", t);
              })(e, t)
            : (function (e, t) {
                return Ie(e, "EEEEEE", t);
              })(e, t);
        }),
        fe(ge(a), "decreaseYear", function () {
          a.setState(
            function (e) {
              var t = e.date;
              return {
                date: D(t, a.props.showYearPicker ? a.props.yearItemNumber : 1),
              };
            },
            function () {
              return a.handleYearChange(a.state.date);
            }
          );
        }),
        fe(ge(a), "renderPreviousButton", function () {
          if (!a.props.renderCustomHeader) {
            var t;
            switch (!0) {
              case a.props.showMonthYearPicker:
                t = ft(a.state.date, a.props);
                break;
              case a.props.showYearPicker:
                t = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = t.minDate,
                    n = t.yearItemNumber,
                    o = void 0 === n ? 12 : n,
                    a = kt(Ke(D(e, o)), o).endPeriod,
                    s = r && M(r);
                  return (s && s > a) || !1;
                })(a.state.date, a.props);
                break;
              default:
                t = ht(a.state.date, a.props);
            }
            if (
              (a.props.forceShowMonthNavigation ||
                a.props.showDisabledMonthNavigation ||
                !t) &&
              !a.props.showTimeSelectOnly
            ) {
              var r = [
                  "react-datepicker__navigation",
                  "react-datepicker__navigation--previous",
                ],
                n = a.decreaseMonth;
              (a.props.showMonthYearPicker ||
                a.props.showQuarterYearPicker ||
                a.props.showYearPicker) &&
                (n = a.decreaseYear),
                t &&
                  a.props.showDisabledMonthNavigation &&
                  (r.push("react-datepicker__navigation--previous--disabled"),
                  (n = null));
              var o =
                  a.props.showMonthYearPicker ||
                  a.props.showQuarterYearPicker ||
                  a.props.showYearPicker,
                s = a.props,
                i = s.previousMonthButtonLabel,
                p = s.previousYearButtonLabel,
                c = a.props,
                l = c.previousMonthAriaLabel,
                d =
                  void 0 === l
                    ? "string" == typeof i
                      ? i
                      : "Previous Month"
                    : l,
                u = c.previousYearAriaLabel,
                h =
                  void 0 === u
                    ? "string" == typeof p
                      ? p
                      : "Previous Year"
                    : u;
              return e.createElement(
                "button",
                {
                  type: "button",
                  className: r.join(" "),
                  onClick: n,
                  onKeyDown: a.props.handleOnKeyDown,
                  "aria-label": o ? h : d,
                },
                e.createElement(
                  "span",
                  {
                    className: [
                      "react-datepicker__navigation-icon",
                      "react-datepicker__navigation-icon--previous",
                    ].join(" "),
                  },
                  o
                    ? a.props.previousYearButtonLabel
                    : a.props.previousMonthButtonLabel
                )
              );
            }
          }
        }),
        fe(ge(a), "increaseYear", function () {
          a.setState(
            function (e) {
              var t = e.date;
              return {
                date: u(t, a.props.showYearPicker ? a.props.yearItemNumber : 1),
              };
            },
            function () {
              return a.handleYearChange(a.state.date);
            }
          );
        }),
        fe(ge(a), "renderNextButton", function () {
          if (!a.props.renderCustomHeader) {
            var t;
            switch (!0) {
              case a.props.showMonthYearPicker:
                t = Dt(a.state.date, a.props);
                break;
              case a.props.showYearPicker:
                t = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = t.maxDate,
                    n = t.yearItemNumber,
                    o = void 0 === n ? 12 : n,
                    a = kt(u(e, o), o).startPeriod,
                    s = r && M(r);
                  return (s && s < a) || !1;
                })(a.state.date, a.props);
                break;
              default:
                t = mt(a.state.date, a.props);
            }
            if (
              (a.props.forceShowMonthNavigation ||
                a.props.showDisabledMonthNavigation ||
                !t) &&
              !a.props.showTimeSelectOnly
            ) {
              var r = [
                "react-datepicker__navigation",
                "react-datepicker__navigation--next",
              ];
              a.props.showTimeSelect &&
                r.push("react-datepicker__navigation--next--with-time"),
                a.props.todayButton &&
                  r.push(
                    "react-datepicker__navigation--next--with-today-button"
                  );
              var n = a.increaseMonth;
              (a.props.showMonthYearPicker ||
                a.props.showQuarterYearPicker ||
                a.props.showYearPicker) &&
                (n = a.increaseYear),
                t &&
                  a.props.showDisabledMonthNavigation &&
                  (r.push("react-datepicker__navigation--next--disabled"),
                  (n = null));
              var o =
                  a.props.showMonthYearPicker ||
                  a.props.showQuarterYearPicker ||
                  a.props.showYearPicker,
                s = a.props,
                i = s.nextMonthButtonLabel,
                p = s.nextYearButtonLabel,
                c = a.props,
                l = c.nextMonthAriaLabel,
                d =
                  void 0 === l ? ("string" == typeof i ? i : "Next Month") : l,
                h = c.nextYearAriaLabel,
                m = void 0 === h ? ("string" == typeof p ? p : "Next Year") : h;
              return e.createElement(
                "button",
                {
                  type: "button",
                  className: r.join(" "),
                  onClick: n,
                  onKeyDown: a.props.handleOnKeyDown,
                  "aria-label": o ? m : d,
                },
                e.createElement(
                  "span",
                  {
                    className: [
                      "react-datepicker__navigation-icon",
                      "react-datepicker__navigation-icon--next",
                    ].join(" "),
                  },
                  o ? a.props.nextYearButtonLabel : a.props.nextMonthButtonLabel
                )
              );
            }
          }
        }),
        fe(ge(a), "renderCurrentMonth", function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : a.state.date,
            r = ["react-datepicker__current-month"];
          return (
            a.props.showYearDropdown &&
              r.push("react-datepicker__current-month--hasYearDropdown"),
            a.props.showMonthDropdown &&
              r.push("react-datepicker__current-month--hasMonthDropdown"),
            a.props.showMonthYearDropdown &&
              r.push("react-datepicker__current-month--hasMonthYearDropdown"),
            e.createElement(
              "div",
              { className: r.join(" ") },
              Ie(t, a.props.dateFormat, a.props.locale)
            )
          );
        }),
        fe(ge(a), "renderYearDropdown", function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (a.props.showYearDropdown && !t)
            return e.createElement(_t, {
              adjustDateOnChange: a.props.adjustDateOnChange,
              date: a.state.date,
              onSelect: a.props.onSelect,
              setOpen: a.props.setOpen,
              dropdownMode: a.props.dropdownMode,
              onChange: a.changeYear,
              minDate: a.props.minDate,
              maxDate: a.props.maxDate,
              year: M(a.state.date),
              scrollableYearDropdown: a.props.scrollableYearDropdown,
              yearDropdownItemNumber: a.props.yearDropdownItemNumber,
            });
        }),
        fe(ge(a), "renderMonthDropdown", function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (a.props.showMonthDropdown && !t)
            return e.createElement(Nt, {
              dropdownMode: a.props.dropdownMode,
              locale: a.props.locale,
              onChange: a.changeMonth,
              month: C(a.state.date),
              useShortMonthInDropdown: a.props.useShortMonthInDropdown,
            });
        }),
        fe(ge(a), "renderMonthYearDropdown", function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (a.props.showMonthYearDropdown && !t)
            return e.createElement(It, {
              dropdownMode: a.props.dropdownMode,
              locale: a.props.locale,
              dateFormat: a.props.dateFormat,
              onChange: a.changeMonthYear,
              minDate: a.props.minDate,
              maxDate: a.props.maxDate,
              date: a.state.date,
              scrollableMonthYearDropdown: a.props.scrollableMonthYearDropdown,
            });
        }),
        fe(ge(a), "handleTodayButtonClick", function (e) {
          a.props.onSelect(We(), e),
            a.props.setPreSelection && a.props.setPreSelection(We());
        }),
        fe(ge(a), "renderTodayButton", function () {
          if (a.props.todayButton && !a.props.showTimeSelectOnly)
            return e.createElement(
              "div",
              {
                className: "react-datepicker__today-button",
                onClick: function (e) {
                  return a.handleTodayButtonClick(e);
                },
              },
              a.props.todayButton
            );
        }),
        fe(ge(a), "renderDefaultHeader", function (t) {
          var r = t.monthDate,
            n = t.i;
          return e.createElement(
            "div",
            {
              className: "react-datepicker__header ".concat(
                a.props.showTimeSelect
                  ? "react-datepicker__header--has-time-select"
                  : ""
              ),
            },
            a.renderCurrentMonth(r),
            e.createElement(
              "div",
              {
                className:
                  "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                    a.props.dropdownMode
                  ),
                onFocus: a.handleDropdownFocus,
              },
              a.renderMonthDropdown(0 !== n),
              a.renderMonthYearDropdown(0 !== n),
              a.renderYearDropdown(0 !== n)
            ),
            e.createElement(
              "div",
              { className: "react-datepicker__day-names" },
              a.header(r)
            )
          );
        }),
        fe(ge(a), "renderCustomHeader", function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = t.monthDate,
            n = t.i;
          if (
            (a.props.showTimeSelect && !a.state.monthContainer) ||
            a.props.showTimeSelectOnly
          )
            return null;
          var o = ht(a.state.date, a.props),
            s = mt(a.state.date, a.props),
            i = ft(a.state.date, a.props),
            p = Dt(a.state.date, a.props),
            c =
              !a.props.showMonthYearPicker &&
              !a.props.showQuarterYearPicker &&
              !a.props.showYearPicker;
          return e.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker__header--custom",
              onFocus: a.props.onDropdownFocus,
            },
            a.props.renderCustomHeader(
              le(
                le({}, a.state),
                {},
                {
                  customHeaderCount: n,
                  monthDate: r,
                  changeMonth: a.changeMonth,
                  changeYear: a.changeYear,
                  decreaseMonth: a.decreaseMonth,
                  increaseMonth: a.increaseMonth,
                  decreaseYear: a.decreaseYear,
                  increaseYear: a.increaseYear,
                  prevMonthButtonDisabled: o,
                  nextMonthButtonDisabled: s,
                  prevYearButtonDisabled: i,
                  nextYearButtonDisabled: p,
                }
              )
            ),
            c &&
              e.createElement(
                "div",
                { className: "react-datepicker__day-names" },
                a.header(r)
              )
          );
        }),
        fe(ge(a), "renderYearHeader", function () {
          var t = a.state.date,
            r = a.props,
            n = r.showYearPicker,
            o = kt(t, r.yearItemNumber),
            s = o.startPeriod,
            i = o.endPeriod;
          return e.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker-year-header",
            },
            n ? "".concat(s, " - ").concat(i) : M(t)
          );
        }),
        fe(ge(a), "renderHeader", function (e) {
          switch (!0) {
            case void 0 !== a.props.renderCustomHeader:
              return a.renderCustomHeader(e);
            case a.props.showMonthYearPicker ||
              a.props.showQuarterYearPicker ||
              a.props.showYearPicker:
              return a.renderYearHeader(e);
            default:
              return a.renderDefaultHeader(e);
          }
        }),
        fe(ge(a), "renderMonths", function () {
          if (!a.props.showTimeSelectOnly && !a.props.showYearPicker) {
            for (
              var t = [],
                r = a.props.showPreviousMonths ? a.props.monthsShown - 1 : 0,
                n = f(a.state.date, r),
                o = 0;
              o < a.props.monthsShown;
              ++o
            ) {
              var s = o - a.props.monthSelectedIn,
                i = d(n, s),
                p = "month-".concat(o),
                c = o < a.props.monthsShown - 1,
                l = o > 0;
              t.push(
                e.createElement(
                  "div",
                  {
                    key: p,
                    ref: function (e) {
                      a.monthContainer = e;
                    },
                    className: "react-datepicker__month-container",
                  },
                  a.renderHeader({ monthDate: i, i: o }),
                  e.createElement(Ft, {
                    chooseDayAriaLabelPrefix: a.props.chooseDayAriaLabelPrefix,
                    disabledDayAriaLabelPrefix:
                      a.props.disabledDayAriaLabelPrefix,
                    weekAriaLabelPrefix: a.props.weekAriaLabelPrefix,
                    ariaLabelPrefix: a.props.monthAriaLabelPrefix,
                    onChange: a.changeMonthYear,
                    day: i,
                    dayClassName: a.props.dayClassName,
                    calendarStartDay: a.props.calendarStartDay,
                    monthClassName: a.props.monthClassName,
                    onDayClick: a.handleDayClick,
                    handleOnKeyDown: a.props.handleOnDayKeyDown,
                    onDayMouseEnter: a.handleDayMouseEnter,
                    onMouseLeave: a.handleMonthMouseLeave,
                    onWeekSelect: a.props.onWeekSelect,
                    orderInDisplay: o,
                    formatWeekNumber: a.props.formatWeekNumber,
                    locale: a.props.locale,
                    minDate: a.props.minDate,
                    maxDate: a.props.maxDate,
                    excludeDates: a.props.excludeDates,
                    excludeDateIntervals: a.props.excludeDateIntervals,
                    highlightDates: a.props.highlightDates,
                    selectingDate: a.state.selectingDate,
                    includeDates: a.props.includeDates,
                    includeDateIntervals: a.props.includeDateIntervals,
                    inline: a.props.inline,
                    shouldFocusDayInline: a.props.shouldFocusDayInline,
                    fixedHeight: a.props.fixedHeight,
                    filterDate: a.props.filterDate,
                    preSelection: a.props.preSelection,
                    setPreSelection: a.props.setPreSelection,
                    selected: a.props.selected,
                    selectsStart: a.props.selectsStart,
                    selectsEnd: a.props.selectsEnd,
                    selectsRange: a.props.selectsRange,
                    selectsDisabledDaysInRange:
                      a.props.selectsDisabledDaysInRange,
                    showWeekNumbers: a.props.showWeekNumbers,
                    startDate: a.props.startDate,
                    endDate: a.props.endDate,
                    peekNextMonth: a.props.peekNextMonth,
                    setOpen: a.props.setOpen,
                    shouldCloseOnSelect: a.props.shouldCloseOnSelect,
                    renderDayContents: a.props.renderDayContents,
                    disabledKeyboardNavigation:
                      a.props.disabledKeyboardNavigation,
                    showMonthYearPicker: a.props.showMonthYearPicker,
                    showFullMonthYearPicker: a.props.showFullMonthYearPicker,
                    showTwoColumnMonthYearPicker:
                      a.props.showTwoColumnMonthYearPicker,
                    showFourColumnMonthYearPicker:
                      a.props.showFourColumnMonthYearPicker,
                    showYearPicker: a.props.showYearPicker,
                    showQuarterYearPicker: a.props.showQuarterYearPicker,
                    isInputFocused: a.props.isInputFocused,
                    containerRef: a.containerRef,
                    monthShowsDuplicateDaysEnd: c,
                    monthShowsDuplicateDaysStart: l,
                  })
                )
              );
            }
            return t;
          }
        }),
        fe(ge(a), "renderYears", function () {
          if (!a.props.showTimeSelectOnly)
            return a.props.showYearPicker
              ? e.createElement(
                  "div",
                  { className: "react-datepicker__year--container" },
                  a.renderHeader(),
                  e.createElement(
                    Bt,
                    De(
                      { onDayClick: a.handleDayClick, date: a.state.date },
                      a.props
                    )
                  )
                )
              : void 0;
        }),
        fe(ge(a), "renderTimeSection", function () {
          if (
            a.props.showTimeSelect &&
            (a.state.monthContainer || a.props.showTimeSelectOnly)
          )
            return e.createElement(At, {
              selected: a.props.selected,
              openToDate: a.props.openToDate,
              onChange: a.props.onTimeChange,
              timeClassName: a.props.timeClassName,
              format: a.props.timeFormat,
              includeTimes: a.props.includeTimes,
              intervals: a.props.timeIntervals,
              minTime: a.props.minTime,
              maxTime: a.props.maxTime,
              excludeTimes: a.props.excludeTimes,
              filterTime: a.props.filterTime,
              timeCaption: a.props.timeCaption,
              todayButton: a.props.todayButton,
              showMonthDropdown: a.props.showMonthDropdown,
              showMonthYearDropdown: a.props.showMonthYearDropdown,
              showYearDropdown: a.props.showYearDropdown,
              withPortal: a.props.withPortal,
              monthRef: a.state.monthContainer,
              injectTimes: a.props.injectTimes,
              locale: a.props.locale,
              handleOnKeyDown: a.props.handleOnKeyDown,
              showTimeSelectOnly: a.props.showTimeSelectOnly,
            });
        }),
        fe(ge(a), "renderInputTimeSection", function () {
          var t = new Date(a.props.selected),
            r =
              Ee(t) && Boolean(a.props.selected)
                ? "".concat(wt(t.getHours()), ":").concat(wt(t.getMinutes()))
                : "";
          if (a.props.showTimeInput)
            return e.createElement(Kt, {
              date: t,
              timeString: r,
              timeInputLabel: a.props.timeInputLabel,
              onChange: a.props.onTimeChange,
              customTimeInput: a.props.customTimeInput,
            });
        }),
        fe(ge(a), "renderChildren", function () {
          if (a.props.children)
            return e.createElement(
              "div",
              { className: "react-datepicker__children-container" },
              a.props.children
            );
        }),
        (a.containerRef = e.createRef()),
        (a.state = {
          date: a.getDateInView(),
          selectingDate: null,
          monthContainer: null,
        }),
        a
      );
    }
    return (
      me(
        o,
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
              !Ve(this.props.preSelection, e.preSelection)
                ? this.setState({ date: this.props.preSelection })
                : this.props.openToDate &&
                  !Ve(this.props.openToDate, e.openToDate) &&
                  this.setState({ date: this.props.openToDate });
            },
          },
          {
            key: "render",
            value: function () {
              var t = this.props.container || jt;
              return e.createElement(
                "div",
                { ref: this.containerRef },
                e.createElement(
                  t,
                  {
                    className: n("react-datepicker", this.props.className, {
                      "react-datepicker--time-only":
                        this.props.showTimeSelectOnly,
                    }),
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
      o
    );
  })();
fe(Ht, "propTypes", {
  adjustDateOnChange: r.bool,
  arrowProps: r.object,
  chooseDayAriaLabelPrefix: r.string,
  className: r.string,
  children: r.node,
  container: r.func,
  dateFormat: r.oneOfType([r.string, r.array]).isRequired,
  dayClassName: r.func,
  weekDayClassName: r.func,
  disabledDayAriaLabelPrefix: r.string,
  monthClassName: r.func,
  timeClassName: r.func,
  disabledKeyboardNavigation: r.bool,
  calendarStartDay: r.number,
  dropdownMode: r.oneOf(["scroll", "select"]),
  endDate: r.instanceOf(Date),
  excludeDates: r.array,
  excludeDateIntervals: r.arrayOf(
    r.shape({ start: r.instanceOf(Date), end: r.instanceOf(Date) })
  ),
  filterDate: r.func,
  fixedHeight: r.bool,
  formatWeekNumber: r.func,
  highlightDates: r.instanceOf(Map),
  includeDates: r.array,
  includeDateIntervals: r.arrayOf(
    r.shape({ start: r.instanceOf(Date), end: r.instanceOf(Date) })
  ),
  includeTimes: r.array,
  injectTimes: r.array,
  inline: r.bool,
  shouldFocusDayInline: r.bool,
  locale: r.oneOfType([r.string, r.shape({ locale: r.object })]),
  maxDate: r.instanceOf(Date),
  minDate: r.instanceOf(Date),
  monthsShown: r.number,
  monthSelectedIn: r.number,
  nextMonthAriaLabel: r.string,
  nextYearAriaLabel: r.string,
  onClickOutside: r.func.isRequired,
  onMonthChange: r.func,
  onYearChange: r.func,
  forceShowMonthNavigation: r.bool,
  onDropdownFocus: r.func,
  onSelect: r.func.isRequired,
  onWeekSelect: r.func,
  showTimeSelect: r.bool,
  showTimeInput: r.bool,
  showMonthYearPicker: r.bool,
  showFullMonthYearPicker: r.bool,
  showTwoColumnMonthYearPicker: r.bool,
  showFourColumnMonthYearPicker: r.bool,
  showYearPicker: r.bool,
  showQuarterYearPicker: r.bool,
  showTimeSelectOnly: r.bool,
  timeFormat: r.string,
  timeIntervals: r.number,
  onTimeChange: r.func,
  timeInputLabel: r.string,
  minTime: r.instanceOf(Date),
  maxTime: r.instanceOf(Date),
  excludeTimes: r.array,
  filterTime: r.func,
  timeCaption: r.string,
  openToDate: r.instanceOf(Date),
  peekNextMonth: r.bool,
  previousMonthAriaLabel: r.string,
  previousYearAriaLabel: r.string,
  scrollableYearDropdown: r.bool,
  scrollableMonthYearDropdown: r.bool,
  preSelection: r.instanceOf(Date),
  selected: r.instanceOf(Date),
  selectsEnd: r.bool,
  selectsStart: r.bool,
  selectsRange: r.bool,
  selectsDisabledDaysInRange: r.bool,
  showMonthDropdown: r.bool,
  showPreviousMonths: r.bool,
  showMonthYearDropdown: r.bool,
  showWeekNumbers: r.bool,
  showYearDropdown: r.bool,
  startDate: r.instanceOf(Date),
  todayButton: r.string,
  useWeekdaysShort: r.bool,
  formatWeekDay: r.func,
  withPortal: r.bool,
  weekLabel: r.string,
  yearItemNumber: r.number,
  yearDropdownItemNumber: r.number,
  setOpen: r.func,
  shouldCloseOnSelect: r.bool,
  useShortMonthInDropdown: r.bool,
  showDisabledMonthNavigation: r.bool,
  previousMonthButtonLabel: r.oneOfType([r.string, r.node]),
  nextMonthButtonLabel: r.oneOfType([r.string, r.node]),
  previousYearButtonLabel: r.string,
  nextYearButtonLabel: r.string,
  renderCustomHeader: r.func,
  renderDayContents: r.func,
  onDayMouseEnter: r.func,
  onMonthMouseLeave: r.func,
  showPopperArrow: r.bool,
  handleOnKeyDown: r.func,
  handleOnDayKeyDown: r.func,
  isInputFocused: r.bool,
  customTimeInput: r.element,
  weekAriaLabelPrefix: r.string,
  monthAriaLabelPrefix: r.string,
  setPreSelection: r.func,
});
var qt = (function (t) {
  ye(n, e.Component);
  var r = ke(n);
  function n(e) {
    var t;
    return (
      ue(this, n), ((t = r.call(this, e)).el = document.createElement("div")), t
    );
  }
  return (
    me(n, [
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
          return oe.createPortal(this.props.children, this.el);
        },
      },
    ]),
    n
  );
})();
fe(qt, "propTypes", {
  children: r.any,
  portalId: r.string,
  portalHost: r.instanceOf(ShadowRoot),
});
var Qt = []
    .concat(["top", "bottom", "right", "left"], ["auto"])
    .reduce(function (e, t) {
      return e.concat([t, t + "-start", t + "-end"]);
    }, []),
  Vt = function (e) {
    return !e.disabled && -1 !== e.tabIndex;
  },
  Ut = (function (t) {
    ye(n, e.Component);
    var r = ke(n);
    function n(t) {
      var o;
      return (
        ue(this, n),
        fe(ge((o = r.call(this, t))), "getTabChildren", function () {
          return Array.prototype.slice
            .call(
              o.tabLoopRef.current.querySelectorAll(
                "[tabindex], a, button, input, select, textarea"
              ),
              1,
              -1
            )
            .filter(Vt);
        }),
        fe(ge(o), "handleFocusStart", function (e) {
          var t = o.getTabChildren();
          t && t.length > 1 && t[t.length - 1].focus();
        }),
        fe(ge(o), "handleFocusEnd", function (e) {
          var t = o.getTabChildren();
          t && t.length > 1 && t[0].focus();
        }),
        (o.tabLoopRef = e.createRef()),
        o
      );
    }
    return (
      me(
        n,
        [
          {
            key: "render",
            value: function () {
              return this.props.enableTabLoop
                ? e.createElement(
                    "div",
                    {
                      className: "react-datepicker__tab-loop",
                      ref: this.tabLoopRef,
                    },
                    e.createElement("div", {
                      className: "react-datepicker__tab-loop__start",
                      tabIndex: "0",
                      onFocus: this.handleFocusStart,
                    }),
                    this.props.children,
                    e.createElement("div", {
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
      n
    );
  })();
fe(Ut, "propTypes", { children: r.any, enableTabLoop: r.bool });
var $t = Qt,
  zt = (function (t) {
    ye(o, e.Component);
    var r = ke(o);
    function o() {
      return ue(this, o), r.apply(this, arguments);
    }
    return (
      me(
        o,
        [
          {
            key: "render",
            value: function () {
              var t,
                r = this.props,
                o = r.className,
                a = r.wrapperClassName,
                s = r.hidePopper,
                i = r.popperComponent,
                p = r.popperModifiers,
                c = r.popperPlacement,
                l = r.popperProps,
                d = r.targetComponent,
                u = r.enableTabLoop,
                h = r.popperOnKeyDown,
                m = r.portalId,
                f = r.portalHost;
              if (!s) {
                var D = n("react-datepicker-popper", o);
                t = e.createElement(
                  ae,
                  De({ modifiers: p, placement: c }, l),
                  function (t) {
                    var r = t.ref,
                      n = t.style,
                      o = t.placement,
                      a = t.arrowProps;
                    return e.createElement(
                      Ut,
                      { enableTabLoop: u },
                      e.createElement(
                        "div",
                        {
                          ref: r,
                          style: n,
                          className: D,
                          "data-placement": o,
                          onKeyDown: h,
                        },
                        e.cloneElement(i, { arrowProps: a })
                      )
                    );
                  }
                );
              }
              this.props.popperContainer &&
                (t = e.createElement(this.props.popperContainer, {}, t)),
                m &&
                  !s &&
                  (t = e.createElement(qt, { portalId: m, portalHost: f }, t));
              var y = n("react-datepicker-wrapper", a);
              return e.createElement(
                se,
                { className: "react-datepicker-manager" },
                e.createElement(ie, null, function (t) {
                  var r = t.ref;
                  return e.createElement("div", { ref: r, className: y }, d);
                }),
                t
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
      o
    );
  })();
fe(zt, "propTypes", {
  className: r.string,
  wrapperClassName: r.string,
  hidePopper: r.bool,
  popperComponent: r.element,
  popperModifiers: r.arrayOf(r.object),
  popperPlacement: r.oneOf($t),
  popperContainer: r.func,
  popperProps: r.object,
  targetComponent: r.element,
  enableTabLoop: r.bool,
  popperOnKeyDown: r.func,
  portalId: r.string,
  portalHost: r.instanceOf(ShadowRoot),
});
var Gt = ne(Ht);
var Jt = (function (t) {
  ye(a, e.Component);
  var r = ke(a);
  function a(t) {
    var s;
    return (
      ue(this, a),
      fe(ge((s = r.call(this, t))), "getPreSelection", function () {
        return s.props.openToDate
          ? s.props.openToDate
          : s.props.selectsEnd && s.props.startDate
          ? s.props.startDate
          : s.props.selectsStart && s.props.endDate
          ? s.props.endDate
          : xe();
      }),
      fe(ge(s), "calcInitialState", function () {
        var e,
          t = s.getPreSelection(),
          r = yt(s.props),
          n = bt(s.props),
          o = r && X(t, A(r)) ? r : n && J(t, H(n)) ? n : t;
        return {
          open: s.props.startOpen || !1,
          preventFocus: !1,
          preSelection:
            null !==
              (e = s.props.selectsRange
                ? s.props.startDate
                : s.props.selected) && void 0 !== e
              ? e
              : o,
          highlightDates: vt(s.props.highlightDates),
          focused: !1,
          shouldFocusDayInline: !1,
        };
      }),
      fe(ge(s), "clearPreventFocusTimeout", function () {
        s.preventFocusTimeout && clearTimeout(s.preventFocusTimeout);
      }),
      fe(ge(s), "setFocus", function () {
        s.input && s.input.focus && s.input.focus({ preventScroll: !0 });
      }),
      fe(ge(s), "setBlur", function () {
        s.input && s.input.blur && s.input.blur(), s.cancelFocusInput();
      }),
      fe(ge(s), "setOpen", function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        s.setState(
          {
            open: e,
            preSelection:
              e && s.state.open
                ? s.state.preSelection
                : s.calcInitialState().preSelection,
            lastPreSelectChange: Zt,
          },
          function () {
            e ||
              s.setState(
                function (e) {
                  return { focused: !!t && e.focused };
                },
                function () {
                  !t && s.setBlur(), s.setState({ inputValue: null });
                }
              );
          }
        );
      }),
      fe(ge(s), "inputOk", function () {
        return o(s.state.preSelection);
      }),
      fe(ge(s), "isCalendarOpen", function () {
        return void 0 === s.props.open
          ? s.state.open && !s.props.disabled && !s.props.readOnly
          : s.props.open;
      }),
      fe(ge(s), "handleFocus", function (e) {
        s.state.preventFocus ||
          (s.props.onFocus(e),
          s.props.preventOpenOnFocus || s.props.readOnly || s.setOpen(!0)),
          s.setState({ focused: !0 });
      }),
      fe(ge(s), "cancelFocusInput", function () {
        clearTimeout(s.inputFocusTimeout), (s.inputFocusTimeout = null);
      }),
      fe(ge(s), "deferFocusInput", function () {
        s.cancelFocusInput(),
          (s.inputFocusTimeout = setTimeout(function () {
            return s.setFocus();
          }, 1));
      }),
      fe(ge(s), "handleDropdownFocus", function () {
        s.cancelFocusInput();
      }),
      fe(ge(s), "handleBlur", function (e) {
        (!s.state.open || s.props.withPortal || s.props.showTimeInput) &&
          s.props.onBlur(e),
          s.setState({ focused: !1 });
      }),
      fe(ge(s), "handleCalendarClickOutside", function (e) {
        s.props.inline || s.setOpen(!1),
          s.props.onClickOutside(e),
          s.props.withPortal && e.preventDefault();
      }),
      fe(ge(s), "handleChange", function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        var n = t[0];
        if (
          !s.props.onChangeRaw ||
          (s.props.onChangeRaw.apply(ge(s), t),
          "function" == typeof n.isDefaultPrevented && !n.isDefaultPrevented())
        ) {
          s.setState({ inputValue: n.target.value, lastPreSelectChange: Xt });
          var o = Te(
            n.target.value,
            s.props.dateFormat,
            s.props.locale,
            s.props.strictParsing,
            s.props.minDate
          );
          s.props.showTimeSelectOnly &&
            !Ve(o, s.props.selected) &&
            (o = pe(s.props.selected, {
              hours: v(o),
              minutes: b(o),
              seconds: y(o),
            })),
            (!o && n.target.value) || s.setSelected(o, n, !0);
        }
      }),
      fe(ge(s), "handleSelect", function (e, t, r) {
        if (
          (s.setState({ preventFocus: !0 }, function () {
            return (
              (s.preventFocusTimeout = setTimeout(function () {
                return s.setState({ preventFocus: !1 });
              }, 50)),
              s.preventFocusTimeout
            );
          }),
          s.props.onChangeRaw && s.props.onChangeRaw(t),
          s.setSelected(e, t, !1, r),
          !s.props.shouldCloseOnSelect || s.props.showTimeSelect)
        )
          s.setPreSelection(e);
        else if (!s.props.inline) {
          s.props.selectsRange ||
            setTimeout(function () {
              return s.setOpen(!1);
            }, 100);
          var n = s.props,
            o = n.startDate,
            a = n.endDate;
          !o ||
            a ||
            X(e, o) ||
            setTimeout(function () {
              return s.setOpen(!1);
            }, 100);
        }
      }),
      fe(ge(s), "setSelected", function (e, t, r, n) {
        var o = e;
        if (s.props.showYearPicker) {
          if (null !== o && it(M(o), s.props)) return;
        } else if (s.props.showMonthYearPicker) {
          if (null !== o && ot(o, s.props)) return;
        } else if (null !== o && rt(o, s.props)) return;
        var a = s.props,
          i = a.onChange,
          p = a.selectsRange,
          c = a.startDate,
          l = a.endDate;
        if (!Ue(s.props.selected, o) || s.props.allowSameDay || p)
          if (
            (null !== o &&
              (!s.props.selected ||
                (r &&
                  (s.props.showTimeSelect ||
                    s.props.showTimeSelectOnly ||
                    s.props.showTimeInput)) ||
                (o = Le(o, {
                  hour: v(s.props.selected),
                  minute: b(s.props.selected),
                  second: y(s.props.selected),
                })),
              s.props.inline || s.setState({ preSelection: o }),
              s.props.focusSelectedMonth || s.setState({ monthSelectedIn: n })),
            p)
          ) {
            var d = c && !l,
              u = c && l;
            !c && !l
              ? i([o, null], t)
              : d && (X(o, c) ? i([o, null], t) : i([c, o], t)),
              u && i([o, null], t);
          } else i(o, t);
        r || (s.props.onSelect(o, t), s.setState({ inputValue: null }));
      }),
      fe(ge(s), "setPreSelection", function (e) {
        var t = void 0 !== s.props.minDate,
          r = void 0 !== s.props.maxDate,
          n = !0;
        if (e) {
          var o = A(e);
          if (t && r) n = $e(e, s.props.minDate, s.props.maxDate);
          else if (t) {
            var a = A(s.props.minDate);
            n = J(e, a) || Ue(o, a);
          } else if (r) {
            var i = H(s.props.maxDate);
            n = X(e, i) || Ue(o, i);
          }
        }
        n && s.setState({ preSelection: e });
      }),
      fe(ge(s), "handleTimeChange", function (e) {
        var t = Le(s.props.selected ? s.props.selected : s.getPreSelection(), {
          hour: v(e),
          minute: b(e),
        });
        s.setState({ preSelection: t }),
          s.props.onChange(t),
          s.props.shouldCloseOnSelect && s.setOpen(!1),
          s.props.showTimeInput && s.setOpen(!0),
          s.setState({ inputValue: null });
      }),
      fe(ge(s), "onInputClick", function () {
        s.props.disabled || s.props.readOnly || s.setOpen(!0),
          s.props.onInputClick();
      }),
      fe(ge(s), "onInputKeyDown", function (e) {
        s.props.onKeyDown(e);
        var t = e.key;
        if (s.state.open || s.props.inline || s.props.preventOpenOnFocus) {
          if (s.state.open) {
            if ("ArrowDown" === t || "ArrowUp" === t) {
              e.preventDefault();
              var r =
                s.calendar.componentNode &&
                s.calendar.componentNode.querySelector(
                  '.react-datepicker__day[tabindex="0"]'
                );
              return void (r && r.focus({ preventScroll: !0 }));
            }
            var n = xe(s.state.preSelection);
            "Enter" === t
              ? (e.preventDefault(),
                s.inputOk() && s.state.lastPreSelectChange === Zt
                  ? (s.handleSelect(n, e),
                    !s.props.shouldCloseOnSelect && s.setPreSelection(n))
                  : s.setOpen(!1))
              : "Escape" === t && (e.preventDefault(), s.setOpen(!1)),
              s.inputOk() ||
                s.props.onInputError({ code: 1, msg: "Date input not valid." });
          }
        } else ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) || s.onInputClick();
      }),
      fe(ge(s), "onPortalKeyDown", function (e) {
        "Escape" === e.key &&
          (e.preventDefault(),
          s.setState({ preventFocus: !0 }, function () {
            s.setOpen(!1),
              setTimeout(function () {
                s.setFocus(), s.setState({ preventFocus: !1 });
              });
          }));
      }),
      fe(ge(s), "onDayKeyDown", function (e) {
        s.props.onKeyDown(e);
        var t = e.key,
          r = xe(s.state.preSelection);
        if ("Enter" === t)
          e.preventDefault(),
            s.handleSelect(r, e),
            !s.props.shouldCloseOnSelect && s.setPreSelection(r);
        else if ("Escape" === t)
          e.preventDefault(),
            s.setOpen(!1),
            s.inputOk() ||
              s.props.onInputError({ code: 1, msg: "Date input not valid." });
        else if (!s.props.disabledKeyboardNavigation) {
          var n;
          switch (t) {
            case "ArrowLeft":
              n = h(r, 1);
              break;
            case "ArrowRight":
              n = c(r, 1);
              break;
            case "ArrowUp":
              n = m(r, 1);
              break;
            case "ArrowDown":
              n = l(r, 1);
              break;
            case "PageUp":
              n = f(r, 1);
              break;
            case "PageDown":
              n = d(r, 1);
              break;
            case "Home":
              n = D(r, 1);
              break;
            case "End":
              n = u(r, 1);
          }
          if (!n)
            return void (
              s.props.onInputError &&
              s.props.onInputError({ code: 1, msg: "Date input not valid." })
            );
          if (
            (e.preventDefault(),
            s.setState({ lastPreSelectChange: Zt }),
            s.props.adjustDateOnChange && s.setSelected(n),
            s.setPreSelection(n),
            s.props.inline)
          ) {
            var o = C(r),
              a = C(n),
              i = M(r),
              p = M(n);
            o !== a || i !== p
              ? s.setState({ shouldFocusDayInline: !0 })
              : s.setState({ shouldFocusDayInline: !1 });
          }
        }
      }),
      fe(ge(s), "onPopperKeyDown", function (e) {
        "Escape" === e.key &&
          (e.preventDefault(),
          s.setState({ preventFocus: !0 }, function () {
            s.setOpen(!1),
              setTimeout(function () {
                s.setFocus(), s.setState({ preventFocus: !1 });
              });
          }));
      }),
      fe(ge(s), "onClearClick", function (e) {
        e && e.preventDefault && e.preventDefault(),
          s.props.selectsRange
            ? s.props.onChange([null, null], e)
            : s.props.onChange(null, e),
          s.setState({ inputValue: null });
      }),
      fe(ge(s), "clear", function () {
        s.onClearClick();
      }),
      fe(ge(s), "onScroll", function (e) {
        "boolean" == typeof s.props.closeOnScroll && s.props.closeOnScroll
          ? (e.target !== document &&
              e.target !== document.documentElement &&
              e.target !== document.body) ||
            s.setOpen(!1)
          : "function" == typeof s.props.closeOnScroll &&
            s.props.closeOnScroll(e) &&
            s.setOpen(!1);
      }),
      fe(ge(s), "renderCalendar", function () {
        return s.props.inline || s.isCalendarOpen()
          ? e.createElement(
              Gt,
              {
                ref: function (e) {
                  s.calendar = e;
                },
                locale: s.props.locale,
                calendarStartDay: s.props.calendarStartDay,
                chooseDayAriaLabelPrefix: s.props.chooseDayAriaLabelPrefix,
                disabledDayAriaLabelPrefix: s.props.disabledDayAriaLabelPrefix,
                weekAriaLabelPrefix: s.props.weekAriaLabelPrefix,
                monthAriaLabelPrefix: s.props.monthAriaLabelPrefix,
                adjustDateOnChange: s.props.adjustDateOnChange,
                setOpen: s.setOpen,
                shouldCloseOnSelect: s.props.shouldCloseOnSelect,
                dateFormat: s.props.dateFormatCalendar,
                useWeekdaysShort: s.props.useWeekdaysShort,
                formatWeekDay: s.props.formatWeekDay,
                dropdownMode: s.props.dropdownMode,
                selected: s.props.selected,
                preSelection: s.state.preSelection,
                onSelect: s.handleSelect,
                onWeekSelect: s.props.onWeekSelect,
                openToDate: s.props.openToDate,
                minDate: s.props.minDate,
                maxDate: s.props.maxDate,
                selectsStart: s.props.selectsStart,
                selectsEnd: s.props.selectsEnd,
                selectsRange: s.props.selectsRange,
                startDate: s.props.startDate,
                endDate: s.props.endDate,
                excludeDates: s.props.excludeDates,
                excludeDateIntervals: s.props.excludeDateIntervals,
                filterDate: s.props.filterDate,
                onClickOutside: s.handleCalendarClickOutside,
                formatWeekNumber: s.props.formatWeekNumber,
                highlightDates: s.state.highlightDates,
                includeDates: s.props.includeDates,
                includeDateIntervals: s.props.includeDateIntervals,
                includeTimes: s.props.includeTimes,
                injectTimes: s.props.injectTimes,
                inline: s.props.inline,
                shouldFocusDayInline: s.state.shouldFocusDayInline,
                peekNextMonth: s.props.peekNextMonth,
                showMonthDropdown: s.props.showMonthDropdown,
                showPreviousMonths: s.props.showPreviousMonths,
                useShortMonthInDropdown: s.props.useShortMonthInDropdown,
                showMonthYearDropdown: s.props.showMonthYearDropdown,
                showWeekNumbers: s.props.showWeekNumbers,
                showYearDropdown: s.props.showYearDropdown,
                withPortal: s.props.withPortal,
                forceShowMonthNavigation: s.props.forceShowMonthNavigation,
                showDisabledMonthNavigation:
                  s.props.showDisabledMonthNavigation,
                scrollableYearDropdown: s.props.scrollableYearDropdown,
                scrollableMonthYearDropdown:
                  s.props.scrollableMonthYearDropdown,
                todayButton: s.props.todayButton,
                weekLabel: s.props.weekLabel,
                outsideClickIgnoreClass:
                  "react-datepicker-ignore-onclickoutside",
                fixedHeight: s.props.fixedHeight,
                monthsShown: s.props.monthsShown,
                monthSelectedIn: s.state.monthSelectedIn,
                onDropdownFocus: s.handleDropdownFocus,
                onMonthChange: s.props.onMonthChange,
                onYearChange: s.props.onYearChange,
                dayClassName: s.props.dayClassName,
                weekDayClassName: s.props.weekDayClassName,
                monthClassName: s.props.monthClassName,
                timeClassName: s.props.timeClassName,
                showTimeSelect: s.props.showTimeSelect,
                showTimeSelectOnly: s.props.showTimeSelectOnly,
                onTimeChange: s.handleTimeChange,
                timeFormat: s.props.timeFormat,
                timeIntervals: s.props.timeIntervals,
                minTime: s.props.minTime,
                maxTime: s.props.maxTime,
                excludeTimes: s.props.excludeTimes,
                filterTime: s.props.filterTime,
                timeCaption: s.props.timeCaption,
                className: s.props.calendarClassName,
                container: s.props.calendarContainer,
                yearItemNumber: s.props.yearItemNumber,
                yearDropdownItemNumber: s.props.yearDropdownItemNumber,
                previousMonthAriaLabel: s.props.previousMonthAriaLabel,
                previousMonthButtonLabel: s.props.previousMonthButtonLabel,
                nextMonthAriaLabel: s.props.nextMonthAriaLabel,
                nextMonthButtonLabel: s.props.nextMonthButtonLabel,
                previousYearAriaLabel: s.props.previousYearAriaLabel,
                previousYearButtonLabel: s.props.previousYearButtonLabel,
                nextYearAriaLabel: s.props.nextYearAriaLabel,
                nextYearButtonLabel: s.props.nextYearButtonLabel,
                timeInputLabel: s.props.timeInputLabel,
                disabledKeyboardNavigation: s.props.disabledKeyboardNavigation,
                renderCustomHeader: s.props.renderCustomHeader,
                popperProps: s.props.popperProps,
                renderDayContents: s.props.renderDayContents,
                onDayMouseEnter: s.props.onDayMouseEnter,
                onMonthMouseLeave: s.props.onMonthMouseLeave,
                selectsDisabledDaysInRange: s.props.selectsDisabledDaysInRange,
                showTimeInput: s.props.showTimeInput,
                showMonthYearPicker: s.props.showMonthYearPicker,
                showFullMonthYearPicker: s.props.showFullMonthYearPicker,
                showTwoColumnMonthYearPicker:
                  s.props.showTwoColumnMonthYearPicker,
                showFourColumnMonthYearPicker:
                  s.props.showFourColumnMonthYearPicker,
                showYearPicker: s.props.showYearPicker,
                showQuarterYearPicker: s.props.showQuarterYearPicker,
                showPopperArrow: s.props.showPopperArrow,
                excludeScrollbar: s.props.excludeScrollbar,
                handleOnKeyDown: s.props.onKeyDown,
                handleOnDayKeyDown: s.onDayKeyDown,
                isInputFocused: s.state.focused,
                customTimeInput: s.props.customTimeInput,
                setPreSelection: s.setPreSelection,
              },
              s.props.children
            )
          : null;
      }),
      fe(ge(s), "renderDateInput", function () {
        var t,
          r = n(
            s.props.className,
            fe({}, "react-datepicker-ignore-onclickoutside", s.state.open)
          ),
          o = s.props.customInput || e.createElement("input", { type: "text" }),
          a = s.props.customInputRef || "ref",
          i =
            "string" == typeof s.props.value
              ? s.props.value
              : "string" == typeof s.state.inputValue
              ? s.state.inputValue
              : s.props.selectsRange
              ? (function (e, t, r) {
                  if (!e) return "";
                  var n = Ye(e, r),
                    o = t ? Ye(t, r) : "";
                  return "".concat(n, " - ").concat(o);
                })(s.props.startDate, s.props.endDate, s.props)
              : Ye(s.props.selected, s.props);
        return e.cloneElement(
          o,
          (fe((t = {}), a, function (e) {
            s.input = e;
          }),
          fe(t, "value", i),
          fe(t, "onBlur", s.handleBlur),
          fe(t, "onChange", s.handleChange),
          fe(t, "onClick", s.onInputClick),
          fe(t, "onFocus", s.handleFocus),
          fe(t, "onKeyDown", s.onInputKeyDown),
          fe(t, "id", s.props.id),
          fe(t, "name", s.props.name),
          fe(t, "autoFocus", s.props.autoFocus),
          fe(t, "placeholder", s.props.placeholderText),
          fe(t, "disabled", s.props.disabled),
          fe(t, "autoComplete", s.props.autoComplete),
          fe(t, "className", n(o.props.className, r)),
          fe(t, "title", s.props.title),
          fe(t, "readOnly", s.props.readOnly),
          fe(t, "required", s.props.required),
          fe(t, "tabIndex", s.props.tabIndex),
          fe(t, "aria-describedby", s.props.ariaDescribedBy),
          fe(t, "aria-invalid", s.props.ariaInvalid),
          fe(t, "aria-labelledby", s.props.ariaLabelledBy),
          fe(t, "aria-required", s.props.ariaRequired),
          t)
        );
      }),
      fe(ge(s), "renderClearButton", function () {
        var t = s.props,
          r = t.isClearable,
          n = t.selected,
          o = t.startDate,
          a = t.endDate,
          i = t.clearButtonTitle,
          p = t.clearButtonClassName,
          c = void 0 === p ? "" : p,
          l = t.ariaLabelClose,
          d = void 0 === l ? "Close" : l;
        return !r || (null == n && null == o && null == a)
          ? null
          : e.createElement("button", {
              type: "button",
              className: "react-datepicker__close-icon ".concat(c).trim(),
              "aria-label": d,
              onClick: s.onClearClick,
              title: i,
              tabIndex: -1,
            });
      }),
      (s.state = s.calcInitialState()),
      s
    );
  }
  return (
    me(
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
            var r, n;
            e.inline &&
              ((r = e.selected),
              (n = this.props.selected),
              r && n ? C(r) !== C(n) || M(r) !== M(n) : r !== n) &&
              this.setPreSelection(this.props.selected),
              void 0 !== this.state.monthSelectedIn &&
                e.monthsShown !== this.props.monthsShown &&
                this.setState({ monthSelectedIn: 0 }),
              e.highlightDates !== this.props.highlightDates &&
                this.setState({
                  highlightDates: vt(this.props.highlightDates),
                }),
              t.focused ||
                Ue(e.selected, this.props.selected) ||
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
            return e.createElement(
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
            var t = this.renderCalendar();
            if (this.props.inline) return t;
            if (this.props.withPortal) {
              var r = this.state.open
                ? e.createElement(
                    Ut,
                    { enableTabLoop: this.props.enableTabLoop },
                    e.createElement(
                      "div",
                      {
                        className: "react-datepicker__portal",
                        tabIndex: -1,
                        onKeyDown: this.onPortalKeyDown,
                      },
                      t
                    )
                  )
                : null;
              return (
                this.state.open &&
                  this.props.portalId &&
                  (r = e.createElement(
                    qt,
                    {
                      portalId: this.props.portalId,
                      portalHost: this.props.portalHost,
                    },
                    r
                  )),
                e.createElement("div", null, this.renderInputContainer(), r)
              );
            }
            return e.createElement(zt, {
              className: this.props.popperClassName,
              wrapperClassName: this.props.wrapperClassName,
              hidePopper: !this.isCalendarOpen(),
              portalId: this.props.portalId,
              portalHost: this.props.portalHost,
              popperModifiers: this.props.popperModifiers,
              targetComponent: this.renderInputContainer(),
              popperContainer: this.props.popperContainer,
              popperComponent: t,
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
fe(Jt, "propTypes", {
  adjustDateOnChange: r.bool,
  allowSameDay: r.bool,
  ariaDescribedBy: r.string,
  ariaInvalid: r.string,
  ariaLabelClose: r.string,
  ariaLabelledBy: r.string,
  ariaRequired: r.string,
  autoComplete: r.string,
  autoFocus: r.bool,
  calendarClassName: r.string,
  calendarContainer: r.func,
  children: r.node,
  chooseDayAriaLabelPrefix: r.string,
  closeOnScroll: r.oneOfType([r.bool, r.func]),
  className: r.string,
  customInput: r.element,
  customInputRef: r.string,
  calendarStartDay: r.number,
  dateFormat: r.oneOfType([r.string, r.array]),
  dateFormatCalendar: r.string,
  dayClassName: r.func,
  weekDayClassName: r.func,
  disabledDayAriaLabelPrefix: r.string,
  monthClassName: r.func,
  timeClassName: r.func,
  disabled: r.bool,
  disabledKeyboardNavigation: r.bool,
  dropdownMode: r.oneOf(["scroll", "select"]).isRequired,
  endDate: r.instanceOf(Date),
  excludeDates: r.array,
  excludeDateIntervals: r.arrayOf(
    r.shape({ start: r.instanceOf(Date), end: r.instanceOf(Date) })
  ),
  filterDate: r.func,
  fixedHeight: r.bool,
  formatWeekNumber: r.func,
  highlightDates: r.array,
  id: r.string,
  includeDates: r.array,
  includeDateIntervals: r.array,
  includeTimes: r.array,
  injectTimes: r.array,
  inline: r.bool,
  isClearable: r.bool,
  locale: r.oneOfType([r.string, r.shape({ locale: r.object })]),
  maxDate: r.instanceOf(Date),
  minDate: r.instanceOf(Date),
  monthsShown: r.number,
  name: r.string,
  onBlur: r.func,
  onChange: r.func.isRequired,
  onSelect: r.func,
  onWeekSelect: r.func,
  onClickOutside: r.func,
  onChangeRaw: r.func,
  onFocus: r.func,
  onInputClick: r.func,
  onKeyDown: r.func,
  onMonthChange: r.func,
  onYearChange: r.func,
  onInputError: r.func,
  open: r.bool,
  onCalendarOpen: r.func,
  onCalendarClose: r.func,
  openToDate: r.instanceOf(Date),
  peekNextMonth: r.bool,
  placeholderText: r.string,
  popperContainer: r.func,
  popperClassName: r.string,
  popperModifiers: r.arrayOf(r.object),
  popperPlacement: r.oneOf($t),
  popperProps: r.object,
  preventOpenOnFocus: r.bool,
  readOnly: r.bool,
  required: r.bool,
  scrollableYearDropdown: r.bool,
  scrollableMonthYearDropdown: r.bool,
  selected: r.instanceOf(Date),
  selectsEnd: r.bool,
  selectsStart: r.bool,
  selectsRange: r.bool,
  selectsDisabledDaysInRange: r.bool,
  showMonthDropdown: r.bool,
  showPreviousMonths: r.bool,
  showMonthYearDropdown: r.bool,
  showWeekNumbers: r.bool,
  showYearDropdown: r.bool,
  strictParsing: r.bool,
  forceShowMonthNavigation: r.bool,
  showDisabledMonthNavigation: r.bool,
  startDate: r.instanceOf(Date),
  startOpen: r.bool,
  tabIndex: r.number,
  timeCaption: r.string,
  title: r.string,
  todayButton: r.node,
  useWeekdaysShort: r.bool,
  formatWeekDay: r.func,
  value: r.string,
  weekLabel: r.string,
  withPortal: r.bool,
  portalId: r.string,
  portalHost: r.instanceOf(ShadowRoot),
  yearItemNumber: r.number,
  yearDropdownItemNumber: r.number,
  shouldCloseOnSelect: r.bool,
  showTimeInput: r.bool,
  showMonthYearPicker: r.bool,
  showFullMonthYearPicker: r.bool,
  showTwoColumnMonthYearPicker: r.bool,
  showFourColumnMonthYearPicker: r.bool,
  showYearPicker: r.bool,
  showQuarterYearPicker: r.bool,
  showTimeSelect: r.bool,
  showTimeSelectOnly: r.bool,
  timeFormat: r.string,
  timeIntervals: r.number,
  minTime: r.instanceOf(Date),
  maxTime: r.instanceOf(Date),
  excludeTimes: r.array,
  filterTime: r.func,
  useShortMonthInDropdown: r.bool,
  clearButtonTitle: r.string,
  clearButtonClassName: r.string,
  previousMonthAriaLabel: r.string,
  previousMonthButtonLabel: r.oneOfType([r.string, r.node]),
  nextMonthAriaLabel: r.string,
  nextMonthButtonLabel: r.oneOfType([r.string, r.node]),
  previousYearAriaLabel: r.string,
  previousYearButtonLabel: r.string,
  nextYearAriaLabel: r.string,
  nextYearButtonLabel: r.string,
  timeInputLabel: r.string,
  renderCustomHeader: r.func,
  renderDayContents: r.func,
  wrapperClassName: r.string,
  focusSelectedMonth: r.bool,
  onDayMouseEnter: r.func,
  onMonthMouseLeave: r.func,
  showPopperArrow: r.bool,
  excludeScrollbar: r.bool,
  enableTabLoop: r.bool,
  customTimeInput: r.element,
  weekAriaLabelPrefix: r.string,
  monthAriaLabelPrefix: r.string,
});
var Xt = "input",
  Zt = "navigate";
export {
  jt as CalendarContainer,
  Jt as default,
  Je as getDefaultLocale,
  ze as registerLocale,
  Ge as setDefaultLocale,
};
