import e, { createRef as t } from "react";
import "prop-types";
import r from "classnames";
import n from "date-fns/isDate";
import o from "date-fns/isValid";
import a from "date-fns/format";
import s from "date-fns/addMinutes";
import i from "date-fns/addHours";
import p from "date-fns/addDays";
import c from "date-fns/addWeeks";
import l from "date-fns/addMonths";
import d from "date-fns/addQuarters";
import u from "date-fns/addYears";
import "date-fns/subMinutes";
import "date-fns/subHours";
import h from "date-fns/subDays";
import m from "date-fns/subWeeks";
import f from "date-fns/subMonths";
import y from "date-fns/subQuarters";
import v from "date-fns/subYears";
import D from "date-fns/getSeconds";
import w from "date-fns/getMinutes";
import g from "date-fns/getHours";
import k from "date-fns/getDay";
import b from "date-fns/getDate";
import S from "date-fns/getISOWeek";
import C from "date-fns/getMonth";
import _ from "date-fns/getQuarter";
import M from "date-fns/getYear";
import P from "date-fns/getTime";
import E from "date-fns/setSeconds";
import N from "date-fns/setMinutes";
import x from "date-fns/setHours";
import Y from "date-fns/setMonth";
import O from "date-fns/setQuarter";
import I from "date-fns/setYear";
import T from "date-fns/min";
import L from "date-fns/max";
import R from "date-fns/differenceInCalendarDays";
import F from "date-fns/differenceInCalendarMonths";
import "date-fns/differenceInCalendarWeeks";
import A from "date-fns/differenceInCalendarYears";
import K from "date-fns/startOfDay";
import B from "date-fns/startOfWeek";
import W from "date-fns/startOfMonth";
import j from "date-fns/startOfQuarter";
import Q from "date-fns/startOfYear";
import H from "date-fns/endOfDay";
import "date-fns/endOfWeek";
import V from "date-fns/endOfMonth";
import q from "date-fns/endOfYear";
import U from "date-fns/isEqual";
import $ from "date-fns/isSameDay";
import z from "date-fns/isSameMonth";
import G from "date-fns/isSameYear";
import J from "date-fns/isSameQuarter";
import X from "date-fns/isAfter";
import Z from "date-fns/isBefore";
import ee from "date-fns/isWithinInterval";
import te from "date-fns/toDate";
import re from "date-fns/parse";
import ne from "date-fns/parseISO";
import oe from "react-onclickoutside";
import ae from "react-dom";
import { Popper as se, Manager as ie, Reference as pe } from "react-popper";
import ce from "date-fns/set";
function le(e, t) {
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
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? le(Object(r), !0).forEach(function (t) {
          ye(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : le(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
  }
  return e;
}
function ue(e) {
  return (ue =
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
function he(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function me(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Me(n.key), n);
  }
}
function fe(e, t, r) {
  return (
    t && me(e.prototype, t),
    r && me(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ye(e, t, r) {
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
function ve() {
  return (ve = Object.assign
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
function De(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ge(e, t);
}
function we(e) {
  return (we = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function ge(e, t) {
  return (ge = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
}
function ke(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function be(e, t) {
  if (t && ("object" == typeof t || "function" == typeof t)) return t;
  if (void 0 !== t)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return ke(e);
}
function Se(e) {
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
      n = we(e);
    if (t) {
      var o = we(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return be(this, r);
  };
}
function Ce(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return _e(e);
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
      if ("string" == typeof e) return _e(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === r && e.constructor && (r = e.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(e);
      if (
        "Arguments" === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return _e(e, t);
    })(e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function _e(e, t) {
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
function Pe(e) {
  var t = e
    ? "string" == typeof e || e instanceof String
      ? ne(e)
      : te(e)
    : new Date();
  return Ne(t) ? t : null;
}
function Ee(e, t, r, n, o) {
  var a = Ge(r) || Ge(ze()),
    s = Array.isArray(t) ? t : [t];
  o = o || Pe();
  for (var i = 0, p = s.length; i < p; i++) {
    var c = s[i],
      l = re(e, c, o, { locale: a });
    if (Ne(l) && (!n || e === xe(l, c, r))) return l;
  }
  return null;
}
function Ne(e, t) {
  return (t = t || new Date("1/1/1000")), o(e) && !Z(e, t);
}
function xe(e, t, r) {
  if ("en" === r) return a(e, t, { awareOfUnicodeTokens: !0 });
  var n = Ge(r) || Ge(ze()) || null;
  return (
    r &&
      !n &&
      console.warn(
        'A locale object was not found for the provided string ["'.concat(
          r,
          '"].'
        )
      ),
    a(e, t, { locale: n, awareOfUnicodeTokens: !0 })
  );
}
function Ye(e, t) {
  var r = t.dateFormat,
    n = t.locale;
  return (e && xe(e, Array.isArray(r) ? r[0] : r, n)) || "";
}
function Oe(e, t) {
  var r = t.hour,
    n = void 0 === r ? 0 : r,
    o = t.minute,
    a = void 0 === o ? 0 : o,
    s = t.second;
  return x(N(E(e, void 0 === s ? 0 : s), a), n);
}
function Ie(e, t) {
  var r = (t && Ge(t)) || (ze() && Ge(ze()));
  return S(e, r ? { locale: r } : null);
}
function Te(e, t) {
  return xe(e, "ddd", t);
}
function Le(e) {
  return K(e);
}
function Re(e, t, r) {
  var n = Ge(t || ze());
  return B(e, { locale: n, weekStartsOn: r });
}
function Fe(e) {
  return W(e);
}
function Ae(e) {
  return Q(e);
}
function Ke(e) {
  return j(e);
}
function Be() {
  return K(Pe());
}
function We(e, t) {
  return e && t ? G(e, t) : !e && !t;
}
function je(e, t) {
  return e && t ? z(e, t) : !e && !t;
}
function Qe(e, t) {
  return e && t ? J(e, t) : !e && !t;
}
function He(e, t) {
  return e && t ? $(e, t) : !e && !t;
}
function Ve(e, t) {
  return e && t ? U(e, t) : !e && !t;
}
function qe(e, t, r) {
  var n,
    o = K(t),
    a = H(r);
  try {
    n = ee(e, { start: o, end: a });
  } catch (e) {
    n = !1;
  }
  return n;
}
function Ue(e, t) {
  var r = "undefined" != typeof window ? window : globalThis;
  r.__localeData__ || (r.__localeData__ = {}), (r.__localeData__[e] = t);
}
function $e(e) {
  ("undefined" != typeof window ? window : globalThis).__localeId__ = e;
}
function ze() {
  return ("undefined" != typeof window ? window : globalThis).__localeId__;
}
function Ge(e) {
  if ("string" == typeof e) {
    var t = "undefined" != typeof window ? window : globalThis;
    return t.__localeData__ ? t.__localeData__[e] : null;
  }
  return e;
}
function Je(e, t) {
  return xe(Y(Pe(), e), "LLLL", t);
}
function Xe(e, t) {
  return xe(Y(Pe(), e), "LLL", t);
}
function Ze(e, t) {
  return xe(O(Pe(), e), "QQQ", t);
}
function et(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    o = t.excludeDates,
    a = t.excludeDateIntervals,
    s = t.includeDates,
    i = t.includeDateIntervals,
    p = t.filterDate;
  return (
    it(e, { minDate: r, maxDate: n }) ||
    (o &&
      o.some(function (t) {
        return He(e, t);
      })) ||
    (a &&
      a.some(function (t) {
        var r = t.start,
          n = t.end;
        return ee(e, { start: r, end: n });
      })) ||
    (s &&
      !s.some(function (t) {
        return He(e, t);
      })) ||
    (i &&
      !i.some(function (t) {
        var r = t.start,
          n = t.end;
        return ee(e, { start: r, end: n });
      })) ||
    (p && !p(Pe(e))) ||
    !1
  );
}
function tt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.excludeDates,
    n = t.excludeDateIntervals;
  return n && n.length > 0
    ? n.some(function (t) {
        var r = t.start,
          n = t.end;
        return ee(e, { start: r, end: n });
      })
    : (r &&
        r.some(function (t) {
          return He(e, t);
        })) ||
        !1;
}
function rt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    o = t.excludeDates,
    a = t.includeDates,
    s = t.filterDate;
  return (
    it(e, { minDate: W(r), maxDate: V(n) }) ||
    (o &&
      o.some(function (t) {
        return je(e, t);
      })) ||
    (a &&
      !a.some(function (t) {
        return je(e, t);
      })) ||
    (s && !s(Pe(e))) ||
    !1
  );
}
function nt(e, t, r, n) {
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
function ot(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    o = t.excludeDates,
    a = t.includeDates,
    s = t.filterDate;
  return (
    it(e, { minDate: r, maxDate: n }) ||
    (o &&
      o.some(function (t) {
        return Qe(e, t);
      })) ||
    (a &&
      !a.some(function (t) {
        return Qe(e, t);
      })) ||
    (s && !s(Pe(e))) ||
    !1
  );
}
function at(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate,
    o = t.excludeDates,
    a = t.includeDates,
    s = t.filterDate,
    i = new Date(e, 0, 1);
  return (
    it(i, { minDate: Q(r), maxDate: q(n) }) ||
    (o &&
      o.some(function (e) {
        return We(i, e);
      })) ||
    (a &&
      !a.some(function (e) {
        return We(i, e);
      })) ||
    (s && !s(Pe(i))) ||
    !1
  );
}
function st(e, t, r, n) {
  var o = M(e),
    a = _(e),
    s = M(t),
    i = _(t),
    p = M(n);
  return o === s && o === p
    ? a <= r && r <= i
    : o < s
    ? (p === o && a <= r) || (p === s && i >= r) || (p < s && p > o)
    : void 0;
}
function it(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.maxDate;
  return (r && R(e, r) < 0) || (n && R(e, n) > 0);
}
function pt(e, t) {
  return t.some(function (t) {
    return g(t) === g(e) && w(t) === w(e);
  });
}
function ct(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.excludeTimes,
    n = t.includeTimes,
    o = t.filterTime;
  return (r && pt(e, r)) || (n && !pt(e, n)) || (o && !o(e)) || !1;
}
function lt(e, t) {
  var r = t.minTime,
    n = t.maxTime;
  if (!r || !n) throw new Error("Both minTime and maxTime props required");
  var o,
    a = Pe(),
    s = x(N(a, w(e)), g(e)),
    i = x(N(a, w(r)), g(r)),
    p = x(N(a, w(n)), g(n));
  try {
    o = !ee(s, { start: i, end: p });
  } catch (e) {
    o = !1;
  }
  return o;
}
function dt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.includeDates,
    o = f(e, 1);
  return (
    (r && F(r, o) > 0) ||
    (n &&
      n.every(function (e) {
        return F(e, o) > 0;
      })) ||
    !1
  );
}
function ut(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.maxDate,
    n = t.includeDates,
    o = l(e, 1);
  return (
    (r && F(o, r) > 0) ||
    (n &&
      n.every(function (e) {
        return F(o, e) > 0;
      })) ||
    !1
  );
}
function ht(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    n = t.includeDates,
    o = v(e, 1);
  return (
    (r && A(r, o) > 0) ||
    (n &&
      n.every(function (e) {
        return A(e, o) > 0;
      })) ||
    !1
  );
}
function mt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.maxDate,
    n = t.includeDates,
    o = u(e, 1);
  return (
    (r && A(o, r) > 0) ||
    (n &&
      n.every(function (e) {
        return A(o, e) > 0;
      })) ||
    !1
  );
}
function ft(e) {
  var t = e.minDate,
    r = e.includeDates;
  if (r && t) {
    var n = r.filter(function (e) {
      return R(e, t) >= 0;
    });
    return T(n);
  }
  return r ? T(r) : t;
}
function yt(e) {
  var t = e.maxDate,
    r = e.includeDates;
  if (r && t) {
    var n = r.filter(function (e) {
      return R(e, t) <= 0;
    });
    return L(n);
  }
  return r ? L(r) : t;
}
function vt() {
  for (
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "react-datepicker__day--highlighted",
      r = new Map(),
      o = 0,
      a = e.length;
    o < a;
    o++
  ) {
    var s = e[o];
    if (n(s)) {
      var i = xe(s, "MM.dd.yyyy"),
        p = r.get(i) || [];
      p.includes(t) || (p.push(t), r.set(i, p));
    } else if ("object" === ue(s)) {
      var c = Object.keys(s),
        l = c[0],
        d = s[c[0]];
      if ("string" == typeof l && d.constructor === Array)
        for (var u = 0, h = d.length; u < h; u++) {
          var m = xe(d[u], "MM.dd.yyyy"),
            f = r.get(m) || [];
          f.includes(l) || (f.push(l), r.set(m, f));
        }
    }
  }
  return r;
}
function Dt(e, t, r, n, o) {
  for (var a = o.length, p = [], c = 0; c < a; c++) {
    var l = s(i(e, g(o[c])), w(o[c])),
      d = s(e, (r + 1) * n);
    X(l, t) && Z(l, d) && p.push(o[c]);
  }
  return p;
}
function wt(e) {
  return e < 10 ? "0".concat(e) : "".concat(e);
}
function gt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12,
    r = Math.ceil(M(e) / t) * t,
    n = r - (t - 1);
  return { startPeriod: n, endPeriod: r };
}
function kt(e, t, r, n) {
  for (var o = [], a = 0; a < 2 * t + 1; a++) {
    var s = e + t - a,
      i = !0;
    r && (i = M(r) <= s), n && i && (i = M(n) >= s), i && o.push(s);
  }
  return o;
}
var bt = oe(
    (function (n) {
      De(a, e.Component);
      var o = Se(a);
      function a(r) {
        var n;
        he(this, a),
          ye(ke((n = o.call(this, r))), "renderOptions", function () {
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
                    onClick: n.onChange.bind(ke(n), r),
                    "aria-selected": t === r ? "true" : void 0,
                  },
                  t === r
                    ? e.createElement(
                        "span",
                        {
                          className: "react-datepicker__year-option--selected",
                        },
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
          ye(ke(n), "onChange", function (e) {
            n.props.onChange(e);
          }),
          ye(ke(n), "handleClickOutside", function () {
            n.props.onCancel();
          }),
          ye(ke(n), "shiftYears", function (e) {
            var t = n.state.yearsList.map(function (t) {
              return t + e;
            });
            n.setState({ yearsList: t });
          }),
          ye(ke(n), "incrementYears", function () {
            return n.shiftYears(1);
          }),
          ye(ke(n), "decrementYears", function () {
            return n.shiftYears(-1);
          });
        var s = r.yearDropdownItemNumber,
          i = r.scrollableYearDropdown,
          p = s || (i ? 10 : 5);
        return (
          (n.state = {
            yearsList: kt(n.props.year, p, n.props.minDate, n.props.maxDate),
          }),
          (n.dropdownRef = t()),
          n
        );
      }
      return (
        fe(a, [
          {
            key: "componentDidMount",
            value: function () {
              var e = this.dropdownRef.current;
              if (e) {
                var t = e.children ? Array.from(e.children) : null,
                  r = t
                    ? t.find(function (e) {
                        return e.ariaSelected;
                      })
                    : null;
                e.scrollTop = r
                  ? r.offsetTop + (r.clientHeight - e.clientHeight) / 2
                  : (e.scrollHeight - e.clientHeight) / 2;
              }
            },
          },
          {
            key: "render",
            value: function () {
              var t = r({
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
    })()
  ),
  St = (function (t) {
    De(n, e.Component);
    var r = Se(n);
    function n() {
      var t;
      he(this, n);
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s];
      return (
        ye(ke((t = r.call.apply(r, [this].concat(a)))), "state", {
          dropdownVisible: !1,
        }),
        ye(ke(t), "renderSelectOptions", function () {
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
        ye(ke(t), "onSelectChange", function (e) {
          t.onChange(e.target.value);
        }),
        ye(ke(t), "renderSelectMode", function () {
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
        ye(ke(t), "renderReadView", function (r) {
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
        ye(ke(t), "renderDropdown", function () {
          return e.createElement(bt, {
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
        ye(ke(t), "renderScrollMode", function () {
          var e = t.state.dropdownVisible,
            r = [t.renderReadView(!e)];
          return e && r.unshift(t.renderDropdown()), r;
        }),
        ye(ke(t), "onChange", function (e) {
          t.toggleDropdown(), e !== t.props.year && t.props.onChange(e);
        }),
        ye(ke(t), "toggleDropdown", function (e) {
          t.setState(
            { dropdownVisible: !t.state.dropdownVisible },
            function () {
              t.props.adjustDateOnChange && t.handleYearChange(t.props.date, e);
            }
          );
        }),
        ye(ke(t), "handleYearChange", function (e, r) {
          t.onSelect(e, r), t.setOpen();
        }),
        ye(ke(t), "onSelect", function (e, r) {
          t.props.onSelect && t.props.onSelect(e, r);
        }),
        ye(ke(t), "setOpen", function () {
          t.props.setOpen && t.props.setOpen(!0);
        }),
        t
      );
    }
    return (
      fe(n, [
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
  })(),
  Ct = oe(
    (function (t) {
      De(n, e.Component);
      var r = Se(n);
      function n() {
        var t;
        he(this, n);
        for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
          a[s] = arguments[s];
        return (
          ye(
            ke((t = r.call.apply(r, [this].concat(a)))),
            "isSelectedMonth",
            function (e) {
              return t.props.month === e;
            }
          ),
          ye(ke(t), "renderOptions", function () {
            return t.props.monthNames.map(function (r, n) {
              return e.createElement(
                "div",
                {
                  className: t.isSelectedMonth(n)
                    ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                    : "react-datepicker__month-option",
                  key: r,
                  onClick: t.onChange.bind(ke(t), n),
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
          ye(ke(t), "onChange", function (e) {
            return t.props.onChange(e);
          }),
          ye(ke(t), "handleClickOutside", function () {
            return t.props.onCancel();
          }),
          t
        );
      }
      return (
        fe(n, [
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
    })()
  ),
  _t = (function (t) {
    De(n, e.Component);
    var r = Se(n);
    function n() {
      var t;
      he(this, n);
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s];
      return (
        ye(ke((t = r.call.apply(r, [this].concat(a)))), "state", {
          dropdownVisible: !1,
        }),
        ye(ke(t), "renderSelectOptions", function (t) {
          return t.map(function (t, r) {
            return e.createElement("option", { key: r, value: r }, t);
          });
        }),
        ye(ke(t), "renderSelectMode", function (r) {
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
        ye(ke(t), "renderReadView", function (r, n) {
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
        ye(ke(t), "renderDropdown", function (r) {
          return e.createElement(Ct, {
            key: "dropdown",
            month: t.props.month,
            monthNames: r,
            onChange: t.onChange,
            onCancel: t.toggleDropdown,
          });
        }),
        ye(ke(t), "renderScrollMode", function (e) {
          var r = t.state.dropdownVisible,
            n = [t.renderReadView(!r, e)];
          return r && n.unshift(t.renderDropdown(e)), n;
        }),
        ye(ke(t), "onChange", function (e) {
          t.toggleDropdown(), e !== t.props.month && t.props.onChange(e);
        }),
        ye(ke(t), "toggleDropdown", function () {
          return t.setState({ dropdownVisible: !t.state.dropdownVisible });
        }),
        t
      );
    }
    return (
      fe(n, [
        {
          key: "render",
          value: function () {
            var t,
              r = this,
              n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                this.props.useShortMonthInDropdown
                  ? function (e) {
                      return Xe(e, r.props.locale);
                    }
                  : function (e) {
                      return Je(e, r.props.locale);
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
function Mt(e, t) {
  for (var r = [], n = Fe(e), o = Fe(t); !X(n, o); )
    r.push(Pe(n)), (n = l(n, 1));
  return r;
}
var Pt = oe(
    (function (t) {
      De(o, e.Component);
      var n = Se(o);
      function o(t) {
        var r;
        return (
          he(this, o),
          ye(ke((r = n.call(this, t))), "renderOptions", function () {
            return r.state.monthYearsList.map(function (t) {
              var n = P(t),
                o = We(r.props.date, t) && je(r.props.date, t);
              return e.createElement(
                "div",
                {
                  className: o
                    ? "react-datepicker__month-year-option--selected_month-year"
                    : "react-datepicker__month-year-option",
                  key: n,
                  onClick: r.onChange.bind(ke(r), n),
                  "aria-selected": o ? "true" : void 0,
                },
                o
                  ? e.createElement(
                      "span",
                      {
                        className:
                          "react-datepicker__month-year-option--selected",
                      },
                      "✓"
                    )
                  : "",
                xe(t, r.props.dateFormat, r.props.locale)
              );
            });
          }),
          ye(ke(r), "onChange", function (e) {
            return r.props.onChange(e);
          }),
          ye(ke(r), "handleClickOutside", function () {
            r.props.onCancel();
          }),
          (r.state = { monthYearsList: Mt(r.props.minDate, r.props.maxDate) }),
          r
        );
      }
      return (
        fe(o, [
          {
            key: "render",
            value: function () {
              var t = r({
                "react-datepicker__month-year-dropdown": !0,
                "react-datepicker__month-year-dropdown--scrollable":
                  this.props.scrollableMonthYearDropdown,
              });
              return e.createElement(
                "div",
                { className: t },
                this.renderOptions()
              );
            },
          },
        ]),
        o
      );
    })()
  ),
  Et = (function (t) {
    De(n, e.Component);
    var r = Se(n);
    function n() {
      var t;
      he(this, n);
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s];
      return (
        ye(ke((t = r.call.apply(r, [this].concat(a)))), "state", {
          dropdownVisible: !1,
        }),
        ye(ke(t), "renderSelectOptions", function () {
          for (
            var r = Fe(t.props.minDate), n = Fe(t.props.maxDate), o = [];
            !X(r, n);

          ) {
            var a = P(r);
            o.push(
              e.createElement(
                "option",
                { key: a, value: a },
                xe(r, t.props.dateFormat, t.props.locale)
              )
            ),
              (r = l(r, 1));
          }
          return o;
        }),
        ye(ke(t), "onSelectChange", function (e) {
          t.onChange(e.target.value);
        }),
        ye(ke(t), "renderSelectMode", function () {
          return e.createElement(
            "select",
            {
              value: P(Fe(t.props.date)),
              className: "react-datepicker__month-year-select",
              onChange: t.onSelectChange,
            },
            t.renderSelectOptions()
          );
        }),
        ye(ke(t), "renderReadView", function (r) {
          var n = xe(t.props.date, t.props.dateFormat, t.props.locale);
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
        ye(ke(t), "renderDropdown", function () {
          return e.createElement(Pt, {
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
        ye(ke(t), "renderScrollMode", function () {
          var e = t.state.dropdownVisible,
            r = [t.renderReadView(!e)];
          return e && r.unshift(t.renderDropdown()), r;
        }),
        ye(ke(t), "onChange", function (e) {
          t.toggleDropdown();
          var r = Pe(parseInt(e));
          (We(t.props.date, r) && je(t.props.date, r)) || t.props.onChange(r);
        }),
        ye(ke(t), "toggleDropdown", function () {
          return t.setState({ dropdownVisible: !t.state.dropdownVisible });
        }),
        t
      );
    }
    return (
      fe(n, [
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
  })(),
  Nt = (function (t) {
    De(o, e.Component);
    var n = Se(o);
    function o() {
      var t;
      he(this, o);
      for (var a = arguments.length, s = new Array(a), i = 0; i < a; i++)
        s[i] = arguments[i];
      return (
        ye(ke((t = n.call.apply(n, [this].concat(s)))), "dayEl", e.createRef()),
        ye(ke(t), "handleClick", function (e) {
          !t.isDisabled() && t.props.onClick && t.props.onClick(e);
        }),
        ye(ke(t), "handleMouseEnter", function (e) {
          !t.isDisabled() && t.props.onMouseEnter && t.props.onMouseEnter(e);
        }),
        ye(ke(t), "handleOnKeyDown", function (e) {
          " " === e.key && (e.preventDefault(), (e.key = "Enter")),
            t.props.handleOnKeyDown(e);
        }),
        ye(ke(t), "isSameDay", function (e) {
          return He(t.props.day, e);
        }),
        ye(ke(t), "isKeyboardSelected", function () {
          return (
            !t.props.disabledKeyboardNavigation &&
            !t.isSameDay(t.props.selected) &&
            t.isSameDay(t.props.preSelection)
          );
        }),
        ye(ke(t), "isDisabled", function () {
          return et(t.props.day, t.props);
        }),
        ye(ke(t), "isExcluded", function () {
          return tt(t.props.day, t.props);
        }),
        ye(ke(t), "getHighLightedClass", function (e) {
          var r = t.props,
            n = r.day,
            o = r.highlightDates;
          if (!o) return !1;
          var a = xe(n, "MM.dd.yyyy");
          return o.get(a);
        }),
        ye(ke(t), "isInRange", function () {
          var e = t.props,
            r = e.day,
            n = e.startDate,
            o = e.endDate;
          return !(!n || !o) && qe(r, n, o);
        }),
        ye(ke(t), "isInSelectingRange", function () {
          var e,
            r = t.props,
            n = r.day,
            o = r.selectsStart,
            a = r.selectsEnd,
            s = r.selectsRange,
            i = r.selectsDisabledDaysInRange,
            p = r.startDate,
            c = r.endDate,
            l =
              null !== (e = t.props.selectingDate) && void 0 !== e
                ? e
                : t.props.preSelection;
          return (
            !(!(o || a || s) || !l || (!i && t.isDisabled())) &&
            (o && c && (Z(l, c) || Ve(l, c))
              ? qe(n, l, c)
              : ((a && p && (X(l, p) || Ve(l, p))) ||
                  !(!s || !p || c || (!X(l, p) && !Ve(l, p)))) &&
                qe(n, p, l))
          );
        }),
        ye(ke(t), "isSelectingRangeStart", function () {
          var e;
          if (!t.isInSelectingRange()) return !1;
          var r = t.props,
            n = r.day,
            o = r.startDate,
            a = r.selectsStart,
            s =
              null !== (e = t.props.selectingDate) && void 0 !== e
                ? e
                : t.props.preSelection;
          return He(n, a ? s : o);
        }),
        ye(ke(t), "isSelectingRangeEnd", function () {
          var e;
          if (!t.isInSelectingRange()) return !1;
          var r = t.props,
            n = r.day,
            o = r.endDate,
            a = r.selectsEnd,
            s = r.selectsRange,
            i =
              null !== (e = t.props.selectingDate) && void 0 !== e
                ? e
                : t.props.preSelection;
          return He(n, a || s ? i : o);
        }),
        ye(ke(t), "isRangeStart", function () {
          var e = t.props,
            r = e.day,
            n = e.startDate,
            o = e.endDate;
          return !(!n || !o) && He(n, r);
        }),
        ye(ke(t), "isRangeEnd", function () {
          var e = t.props,
            r = e.day,
            n = e.startDate,
            o = e.endDate;
          return !(!n || !o) && He(o, r);
        }),
        ye(ke(t), "isWeekend", function () {
          var e = k(t.props.day);
          return 0 === e || 6 === e;
        }),
        ye(ke(t), "isAfterMonth", function () {
          return (
            void 0 !== t.props.month &&
            (t.props.month + 1) % 12 === C(t.props.day)
          );
        }),
        ye(ke(t), "isBeforeMonth", function () {
          return (
            void 0 !== t.props.month &&
            (C(t.props.day) + 1) % 12 === t.props.month
          );
        }),
        ye(ke(t), "isCurrentDay", function () {
          return t.isSameDay(Pe());
        }),
        ye(ke(t), "isSelected", function () {
          return t.isSameDay(t.props.selected);
        }),
        ye(ke(t), "getClassNames", function (e) {
          var n = t.props.dayClassName ? t.props.dayClassName(e) : void 0;
          return r(
            "react-datepicker__day",
            n,
            "react-datepicker__day--" + Te(t.props.day),
            {
              "react-datepicker__day--disabled": t.isDisabled(),
              "react-datepicker__day--excluded": t.isExcluded(),
              "react-datepicker__day--selected": t.isSelected(),
              "react-datepicker__day--keyboard-selected":
                t.isKeyboardSelected(),
              "react-datepicker__day--range-start": t.isRangeStart(),
              "react-datepicker__day--range-end": t.isRangeEnd(),
              "react-datepicker__day--in-range": t.isInRange(),
              "react-datepicker__day--in-selecting-range":
                t.isInSelectingRange(),
              "react-datepicker__day--selecting-range-start":
                t.isSelectingRangeStart(),
              "react-datepicker__day--selecting-range-end":
                t.isSelectingRangeEnd(),
              "react-datepicker__day--today": t.isCurrentDay(),
              "react-datepicker__day--weekend": t.isWeekend(),
              "react-datepicker__day--outside-month":
                t.isAfterMonth() || t.isBeforeMonth(),
            },
            t.getHighLightedClass("react-datepicker__day--highlighted")
          );
        }),
        ye(ke(t), "getAriaLabel", function () {
          var e = t.props,
            r = e.day,
            n = e.ariaLabelPrefixWhenEnabled,
            o = void 0 === n ? "Choose" : n,
            a = e.ariaLabelPrefixWhenDisabled,
            s = void 0 === a ? "Not available" : a,
            i = t.isDisabled() || t.isExcluded() ? s : o;
          return "".concat(i, " ").concat(xe(r, "PPPP", t.props.locale));
        }),
        ye(ke(t), "getTabIndex", function (e, r) {
          var n = e || t.props.selected,
            o = r || t.props.preSelection;
          return t.isKeyboardSelected() || (t.isSameDay(n) && He(o, n))
            ? 0
            : -1;
        }),
        ye(ke(t), "handleFocusDay", function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = !1;
          0 === t.getTabIndex() &&
            !e.isInputFocused &&
            t.isSameDay(t.props.preSelection) &&
            ((document.activeElement &&
              document.activeElement !== document.body) ||
              (r = !0),
            t.props.inline && !t.props.shouldFocusDayInline && (r = !1),
            t.props.containerRef &&
              t.props.containerRef.current &&
              t.props.containerRef.current.contains(document.activeElement) &&
              document.activeElement.classList.contains(
                "react-datepicker__day"
              ) &&
              (r = !0)),
            r && t.dayEl.current.focus({ preventScroll: !0 });
        }),
        ye(ke(t), "renderDayContents", function () {
          return (t.props.monthShowsDuplicateDaysEnd && t.isAfterMonth()) ||
            (t.props.monthShowsDuplicateDaysStart && t.isBeforeMonth())
            ? null
            : t.props.renderDayContents
            ? t.props.renderDayContents(b(t.props.day), t.props.day)
            : b(t.props.day);
        }),
        ye(ke(t), "render", function () {
          return e.createElement(
            "div",
            {
              ref: t.dayEl,
              className: t.getClassNames(t.props.day),
              onKeyDown: t.handleOnKeyDown,
              onClick: t.handleClick,
              onMouseEnter: t.handleMouseEnter,
              tabIndex: t.getTabIndex(),
              "aria-label": t.getAriaLabel(),
              role: "button",
              "aria-disabled": t.isDisabled(),
              "aria-current": t.isCurrentDay() ? "date" : void 0,
            },
            t.renderDayContents()
          );
        }),
        t
      );
    }
    return (
      fe(o, [
        {
          key: "componentDidMount",
          value: function () {
            this.handleFocusDay();
          },
        },
        {
          key: "componentDidUpdate",
          value: function (e) {
            this.handleFocusDay(e);
          },
        },
      ]),
      o
    );
  })(),
  xt = (function (t) {
    De(o, e.Component);
    var n = Se(o);
    function o() {
      var e;
      he(this, o);
      for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
        r[a] = arguments[a];
      return (
        ye(
          ke((e = n.call.apply(n, [this].concat(r)))),
          "handleClick",
          function (t) {
            e.props.onClick && e.props.onClick(t);
          }
        ),
        e
      );
    }
    return (
      fe(o, [
        {
          key: "render",
          value: function () {
            var t = this.props,
              n = t.weekNumber,
              o = t.ariaLabelPrefix,
              a = void 0 === o ? "week " : o,
              s = {
                "react-datepicker__week-number": !0,
                "react-datepicker__week-number--clickable": !!t.onClick,
              };
            return e.createElement(
              "div",
              {
                className: r(s),
                "aria-label": "".concat(a, " ").concat(this.props.weekNumber),
                onClick: this.handleClick,
              },
              n
            );
          },
        },
      ]),
      o
    );
  })(),
  Yt = (function (t) {
    De(n, e.Component);
    var r = Se(n);
    function n() {
      var t;
      he(this, n);
      for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
        a[s] = arguments[s];
      return (
        ye(
          ke((t = r.call.apply(r, [this].concat(a)))),
          "handleDayClick",
          function (e, r) {
            t.props.onDayClick && t.props.onDayClick(e, r);
          }
        ),
        ye(ke(t), "handleDayMouseEnter", function (e) {
          t.props.onDayMouseEnter && t.props.onDayMouseEnter(e);
        }),
        ye(ke(t), "handleWeekClick", function (e, r, n) {
          "function" == typeof t.props.onWeekSelect &&
            t.props.onWeekSelect(e, r, n),
            t.props.shouldCloseOnSelect && t.props.setOpen(!1);
        }),
        ye(ke(t), "formatWeekNumber", function (e) {
          return t.props.formatWeekNumber ? t.props.formatWeekNumber(e) : Ie(e);
        }),
        ye(ke(t), "renderDays", function () {
          var r = Re(t.props.day, t.props.locale, t.props.calendarStartDay),
            n = [],
            o = t.formatWeekNumber(r);
          if (t.props.showWeekNumber) {
            var a = t.props.onWeekSelect
              ? t.handleWeekClick.bind(ke(t), r, o)
              : void 0;
            n.push(
              e.createElement(xt, {
                key: "W",
                weekNumber: o,
                onClick: a,
                ariaLabelPrefix: t.props.ariaLabelPrefix,
              })
            );
          }
          return n.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function (n) {
              var o = p(r, n);
              return e.createElement(Nt, {
                ariaLabelPrefixWhenEnabled: t.props.chooseDayAriaLabelPrefix,
                ariaLabelPrefixWhenDisabled: t.props.disabledDayAriaLabelPrefix,
                key: o.valueOf(),
                day: o,
                month: t.props.month,
                onClick: t.handleDayClick.bind(ke(t), o),
                onMouseEnter: t.handleDayMouseEnter.bind(ke(t), o),
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
      fe(
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
  })(),
  Ot = (function (t) {
    De(o, e.Component);
    var n = Se(o);
    function o() {
      var t;
      he(this, o);
      for (var a = arguments.length, s = new Array(a), i = 0; i < a; i++)
        s[i] = arguments[i];
      return (
        ye(
          ke((t = n.call.apply(n, [this].concat(s)))),
          "MONTH_REFS",
          Ce(Array(12)).map(function () {
            return e.createRef();
          })
        ),
        ye(
          ke(t),
          "QUARTER_REFS",
          Ce(Array(4)).map(function () {
            return e.createRef();
          })
        ),
        ye(ke(t), "isDisabled", function (e) {
          return et(e, t.props);
        }),
        ye(ke(t), "isExcluded", function (e) {
          return tt(e, t.props);
        }),
        ye(ke(t), "handleDayClick", function (e, r) {
          t.props.onDayClick &&
            t.props.onDayClick(e, r, t.props.orderInDisplay);
        }),
        ye(ke(t), "handleDayMouseEnter", function (e) {
          t.props.onDayMouseEnter && t.props.onDayMouseEnter(e);
        }),
        ye(ke(t), "handleMouseLeave", function () {
          t.props.onMouseLeave && t.props.onMouseLeave();
        }),
        ye(ke(t), "isRangeStartMonth", function (e) {
          var r = t.props,
            n = r.day,
            o = r.startDate,
            a = r.endDate;
          return !(!o || !a) && je(Y(n, e), o);
        }),
        ye(ke(t), "isRangeStartQuarter", function (e) {
          var r = t.props,
            n = r.day,
            o = r.startDate,
            a = r.endDate;
          return !(!o || !a) && Qe(O(n, e), o);
        }),
        ye(ke(t), "isRangeEndMonth", function (e) {
          var r = t.props,
            n = r.day,
            o = r.startDate,
            a = r.endDate;
          return !(!o || !a) && je(Y(n, e), a);
        }),
        ye(ke(t), "isRangeEndQuarter", function (e) {
          var r = t.props,
            n = r.day,
            o = r.startDate,
            a = r.endDate;
          return !(!o || !a) && Qe(O(n, e), a);
        }),
        ye(ke(t), "isWeekInMonth", function (e) {
          var r = t.props.day,
            n = p(e, 6);
          return je(e, r) || je(n, r);
        }),
        ye(ke(t), "isCurrentMonth", function (e, t) {
          return M(e) === M(Pe()) && t === C(Pe());
        }),
        ye(ke(t), "isCurrentQuarter", function (e, t) {
          return M(e) === M(Pe()) && t === _(Pe());
        }),
        ye(ke(t), "isSelectedMonth", function (e, t, r) {
          return C(e) === t && M(e) === M(r);
        }),
        ye(ke(t), "isSelectedQuarter", function (e, t, r) {
          return _(e) === t && M(e) === M(r);
        }),
        ye(ke(t), "renderWeeks", function () {
          for (
            var r = [],
              n = t.props.fixedHeight,
              o = 0,
              a = !1,
              s = Re(Fe(t.props.day), t.props.locale, t.props.calendarStartDay);
            r.push(
              e.createElement(Yt, {
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
            o++, (s = c(s, 1));
            var i = n && o >= 6,
              p = !n && !t.isWeekInMonth(s);
            if (i || p) {
              if (!t.props.peekNextMonth) break;
              a = !0;
            }
          }
          return r;
        }),
        ye(ke(t), "onMonthClick", function (e, r) {
          t.handleDayClick(Fe(Y(t.props.day, r)), e);
        }),
        ye(ke(t), "handleMonthNavigation", function (e, r) {
          t.isDisabled(r) ||
            t.isExcluded(r) ||
            (t.props.setPreSelection(r),
            t.MONTH_REFS[e].current && t.MONTH_REFS[e].current.focus());
        }),
        ye(ke(t), "onMonthKeyDown", function (e, r) {
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
                  l(t.props.preSelection, 1)
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
                  l(t.props.preSelection, 3)
                );
            }
        }),
        ye(ke(t), "onQuarterClick", function (e, r) {
          t.handleDayClick(Ke(O(t.props.day, r)), e);
        }),
        ye(ke(t), "handleQuarterNavigation", function (e, r) {
          t.isDisabled(r) ||
            t.isExcluded(r) ||
            (t.props.setPreSelection(r),
            t.QUARTER_REFS[e - 1].current &&
              t.QUARTER_REFS[e - 1].current.focus());
        }),
        ye(ke(t), "onQuarterKeyDown", function (e, r) {
          var n = e.key;
          if (!t.props.disabledKeyboardNavigation)
            switch (n) {
              case "Enter":
                t.onQuarterClick(e, r),
                  t.props.setPreSelection(t.props.selected);
                break;
              case "ArrowRight":
                t.handleQuarterNavigation(
                  4 === r ? 1 : r + 1,
                  d(t.props.preSelection, 1)
                );
                break;
              case "ArrowLeft":
                t.handleQuarterNavigation(
                  1 === r ? 4 : r - 1,
                  y(t.props.preSelection, 1)
                );
            }
        }),
        ye(ke(t), "getMonthClassNames", function (e) {
          var n = t.props,
            o = n.day,
            a = n.startDate,
            s = n.endDate,
            i = n.selected,
            p = n.minDate,
            c = n.maxDate,
            l = n.preSelection,
            d = n.monthClassName,
            u = n.excludeDates,
            h = n.includeDates,
            m = d ? d(Y(o, e)) : void 0,
            f = Y(o, e);
          return r(
            "react-datepicker__month-text",
            "react-datepicker__month-".concat(e),
            m,
            {
              "react-datepicker__month--disabled":
                (p || c || u || h) && rt(f, t.props),
              "react-datepicker__month--selected": t.isSelectedMonth(o, e, i),
              "react-datepicker__month-text--keyboard-selected":
                !t.props.disabledKeyboardNavigation && C(l) === e,
              "react-datepicker__month--in-range": nt(a, s, e, o),
              "react-datepicker__month--range-start": t.isRangeStartMonth(e),
              "react-datepicker__month--range-end": t.isRangeEndMonth(e),
              "react-datepicker__month-text--today": t.isCurrentMonth(o, e),
            }
          );
        }),
        ye(ke(t), "getTabIndex", function (e) {
          var r = C(t.props.preSelection);
          return t.props.disabledKeyboardNavigation || e !== r ? "-1" : "0";
        }),
        ye(ke(t), "getQuarterTabIndex", function (e) {
          var r = _(t.props.preSelection);
          return t.props.disabledKeyboardNavigation || e !== r ? "-1" : "0";
        }),
        ye(ke(t), "getAriaLabel", function (e) {
          var r = t.props,
            n = r.chooseDayAriaLabelPrefix,
            o = void 0 === n ? "Choose" : n,
            a = r.disabledDayAriaLabelPrefix,
            s = void 0 === a ? "Not available" : a,
            i = r.day,
            p = Y(i, e),
            c = t.isDisabled(p) || t.isExcluded(p) ? s : o;
          return "".concat(c, " ").concat(xe(p, "MMMM yyyy"));
        }),
        ye(ke(t), "getQuarterClassNames", function (e) {
          var n = t.props,
            o = n.day,
            a = n.startDate,
            s = n.endDate,
            i = n.selected,
            p = n.minDate,
            c = n.maxDate,
            l = n.preSelection;
          return r(
            "react-datepicker__quarter-text",
            "react-datepicker__quarter-".concat(e),
            {
              "react-datepicker__quarter--disabled":
                (p || c) && ot(O(o, e), t.props),
              "react-datepicker__quarter--selected": t.isSelectedQuarter(
                o,
                e,
                i
              ),
              "react-datepicker__quarter-text--keyboard-selected": _(l) === e,
              "react-datepicker__quarter--in-range": st(a, s, e, o),
              "react-datepicker__quarter--range-start":
                t.isRangeStartQuarter(e),
              "react-datepicker__quarter--range-end": t.isRangeEndQuarter(e),
            }
          );
        }),
        ye(ke(t), "renderMonths", function () {
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
                  n ? Je(r, s) : Xe(r, s)
                );
              })
            );
          });
        }),
        ye(ke(t), "renderQuarters", function () {
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
                  ref: t.QUARTER_REFS[a],
                  role: "option",
                  onClick: function (e) {
                    t.onQuarterClick(e, r);
                  },
                  onKeyDown: function (e) {
                    t.onQuarterKeyDown(e, r);
                  },
                  className: t.getQuarterClassNames(r),
                  "aria-selected": t.isSelectedQuarter(n, r, o),
                  tabIndex: t.getQuarterTabIndex(r),
                  "aria-current": t.isCurrentQuarter(n, r) ? "date" : void 0,
                },
                Ze(r, t.props.locale)
              );
            })
          );
        }),
        ye(ke(t), "getClassNames", function () {
          var e = t.props;
          e.day;
          var n = e.selectingDate,
            o = e.selectsStart,
            a = e.selectsEnd,
            s = e.showMonthYearPicker,
            i = e.showQuarterYearPicker;
          return r(
            "react-datepicker__month",
            { "react-datepicker__month--selecting-range": n && (o || a) },
            { "react-datepicker__monthPicker": s },
            { "react-datepicker__quarterPicker": i }
          );
        }),
        t
      );
    }
    return (
      fe(o, [
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
                "aria-label": "".concat(s, " ").concat(xe(o, "yyyy-MM")),
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
  })(),
  It = (function (t) {
    De(n, e.Component);
    var r = Se(n);
    function n() {
      var t;
      he(this, n);
      for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
        a[i] = arguments[i];
      return (
        ye(ke((t = r.call.apply(r, [this].concat(a)))), "state", {
          height: null,
        }),
        ye(ke(t), "handleClick", function (e) {
          ((t.props.minTime || t.props.maxTime) && lt(e, t.props)) ||
            ((t.props.excludeTimes ||
              t.props.includeTimes ||
              t.props.filterTime) &&
              ct(e, t.props)) ||
            t.props.onChange(e);
        }),
        ye(ke(t), "isSelectedTime", function (e, r, n) {
          return t.props.selected && r === g(e) && n === w(e);
        }),
        ye(ke(t), "liClasses", function (e, r, n) {
          var o = [
            "react-datepicker__time-list-item",
            t.props.timeClassName ? t.props.timeClassName(e, r, n) : void 0,
          ];
          return (
            t.isSelectedTime(e, r, n) &&
              o.push("react-datepicker__time-list-item--selected"),
            (((t.props.minTime || t.props.maxTime) && lt(e, t.props)) ||
              ((t.props.excludeTimes ||
                t.props.includeTimes ||
                t.props.filterTime) &&
                ct(e, t.props))) &&
              o.push("react-datepicker__time-list-item--disabled"),
            t.props.injectTimes &&
              (60 * g(e) + w(e)) % t.props.intervals != 0 &&
              o.push("react-datepicker__time-list-item--injected"),
            o.join(" ")
          );
        }),
        ye(ke(t), "handleOnKeyDown", function (e, r) {
          " " === e.key && (e.preventDefault(), (e.key = "Enter")),
            "Enter" === e.key && t.handleClick(r),
            t.props.handleOnKeyDown(e);
        }),
        ye(ke(t), "renderTimes", function () {
          for (
            var r = [],
              n = t.props.format ? t.props.format : "p",
              o = t.props.intervals,
              a = Le(Pe(t.props.selected)),
              i = 1440 / o,
              p =
                t.props.injectTimes &&
                t.props.injectTimes.sort(function (e, t) {
                  return e - t;
                }),
              c = t.props.selected || t.props.openToDate || Pe(),
              l = g(c),
              d = w(c),
              u = x(N(a, d), l),
              h = 0;
            h < i;
            h++
          ) {
            var m = s(a, h * o);
            if ((r.push(m), p)) {
              var f = Dt(a, m, h, o, p);
              r = r.concat(f);
            }
          }
          return r.map(function (r, o) {
            return e.createElement(
              "li",
              {
                key: o,
                onClick: t.handleClick.bind(ke(t), r),
                className: t.liClasses(r, l, d),
                ref: function (e) {
                  (Z(r, u) || Ve(r, u)) && (t.centerLi = e);
                },
                onKeyDown: function (e) {
                  t.handleOnKeyDown(e, r);
                },
                tabIndex: "0",
                "aria-selected": t.isSelectedTime(r, l, d) ? "true" : void 0,
              },
              xe(r, n, t.props.locale)
            );
          });
        }),
        t
      );
    }
    return (
      fe(
        n,
        [
          {
            key: "componentDidMount",
            value: function () {
              (this.list.scrollTop =
                this.centerLi &&
                n.calcCenterPosition(
                  this.props.monthRef
                    ? this.props.monthRef.clientHeight -
                        this.header.clientHeight
                    : this.list.clientHeight,
                  this.centerLi
                )),
                this.props.monthRef &&
                  this.header &&
                  this.setState({
                    height:
                      this.props.monthRef.clientHeight -
                      this.header.clientHeight,
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
ye(It, "calcCenterPosition", function (e, t) {
  return t.offsetTop - (e / 2 - t.clientHeight / 2);
});
var Tt = (function (t) {
    De(o, e.Component);
    var n = Se(o);
    function o(t) {
      var a;
      return (
        he(this, o),
        ye(
          ke((a = n.call(this, t))),
          "YEAR_REFS",
          Ce(Array(a.props.yearItemNumber)).map(function () {
            return e.createRef();
          })
        ),
        ye(ke(a), "isDisabled", function (e) {
          return et(e, a.props);
        }),
        ye(ke(a), "isExcluded", function (e) {
          return tt(e, a.props);
        }),
        ye(ke(a), "updateFocusOnPaginate", function (e) {
          var t = function () {
            this.YEAR_REFS[e].current.focus();
          }.bind(ke(a));
          window.requestAnimationFrame(t);
        }),
        ye(ke(a), "handleYearClick", function (e, t) {
          a.props.onDayClick && a.props.onDayClick(e, t);
        }),
        ye(ke(a), "handleYearNavigation", function (e, t) {
          var r = a.props,
            n = r.date,
            o = r.yearItemNumber,
            s = gt(n, o).startPeriod;
          a.isDisabled(t) ||
            a.isExcluded(t) ||
            (a.props.setPreSelection(t),
            e - s == -1
              ? a.updateFocusOnPaginate(o - 1)
              : e - s === o
              ? a.updateFocusOnPaginate(0)
              : a.YEAR_REFS[e - s].current.focus());
        }),
        ye(ke(a), "isSameDay", function (e, t) {
          return He(e, t);
        }),
        ye(ke(a), "isCurrentYear", function (e) {
          return e === M(Pe());
        }),
        ye(ke(a), "isKeyboardSelected", function (e) {
          var t = Ae(I(a.props.date, e));
          return (
            !a.props.disabledKeyboardNavigation &&
            !a.props.inline &&
            !He(t, Ae(a.props.selected)) &&
            He(t, Ae(a.props.preSelection))
          );
        }),
        ye(ke(a), "onYearClick", function (e, t) {
          var r = a.props.date;
          a.handleYearClick(Ae(I(r, t)), e);
        }),
        ye(ke(a), "onYearKeyDown", function (e, t) {
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
                a.handleYearNavigation(t - 1, v(a.props.preSelection, 1));
            }
        }),
        ye(ke(a), "getYearClassNames", function (e) {
          var t = a.props,
            n = t.minDate,
            o = t.maxDate,
            s = t.selected,
            i = t.excludeDates,
            p = t.includeDates,
            c = t.filterDate;
          return r("react-datepicker__year-text", {
            "react-datepicker__year-text--selected": e === M(s),
            "react-datepicker__year-text--disabled":
              (n || o || i || p || c) && at(e, a.props),
            "react-datepicker__year-text--keyboard-selected":
              a.isKeyboardSelected(e),
            "react-datepicker__year-text--today": a.isCurrentYear(e),
          });
        }),
        ye(ke(a), "getYearTabIndex", function (e) {
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
      fe(o, [
        {
          key: "render",
          value: function () {
            for (
              var t = this,
                r = [],
                n = this.props,
                o = gt(n.date, n.yearItemNumber),
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
  })(),
  Lt = (function (t) {
    De(n, e.Component);
    var r = Se(n);
    function n(t) {
      var o;
      return (
        he(this, n),
        ye(ke((o = r.call(this, t))), "onTimeChange", function (e) {
          o.setState({ time: e });
          var t = new Date();
          t.setHours(e.split(":")[0]),
            t.setMinutes(e.split(":")[1]),
            o.props.onChange(t);
        }),
        ye(ke(o), "renderTimeInput", function () {
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
      fe(
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
function Rt(t) {
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
        ve({ className: "react-datepicker__triangle" }, s)
      ),
    n
  );
}
var Ft = [
    "react-datepicker__year-select",
    "react-datepicker__month-select",
    "react-datepicker__month-year-select",
  ],
  At = (function (t) {
    De(o, e.Component);
    var n = Se(o);
    function o(t) {
      var a;
      return (
        he(this, o),
        ye(ke((a = n.call(this, t))), "handleClickOutside", function (e) {
          a.props.onClickOutside(e);
        }),
        ye(ke(a), "setClickOutsideRef", function () {
          return a.containerRef.current;
        }),
        ye(ke(a), "handleDropdownFocus", function (e) {
          (function () {
            var e = (
              (arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
              ).className || ""
            ).split(/\s+/);
            return Ft.some(function (t) {
              return e.indexOf(t) >= 0;
            });
          })(e.target) && a.props.onDropdownFocus();
        }),
        ye(ke(a), "getDateInView", function () {
          var e = a.props,
            t = e.preSelection,
            r = e.selected,
            n = e.openToDate,
            o = ft(a.props),
            s = yt(a.props),
            i = Pe(),
            p = n || r || t;
          return p || (o && Z(i, o) ? o : s && X(i, s) ? s : i);
        }),
        ye(ke(a), "increaseMonth", function () {
          a.setState(
            function (e) {
              var t = e.date;
              return { date: l(t, 1) };
            },
            function () {
              return a.handleMonthChange(a.state.date);
            }
          );
        }),
        ye(ke(a), "decreaseMonth", function () {
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
        ye(ke(a), "handleDayClick", function (e, t, r) {
          a.props.onSelect(e, t, r),
            a.props.setPreSelection && a.props.setPreSelection(e);
        }),
        ye(ke(a), "handleDayMouseEnter", function (e) {
          a.setState({ selectingDate: e }),
            a.props.onDayMouseEnter && a.props.onDayMouseEnter(e);
        }),
        ye(ke(a), "handleMonthMouseLeave", function () {
          a.setState({ selectingDate: null }),
            a.props.onMonthMouseLeave && a.props.onMonthMouseLeave();
        }),
        ye(ke(a), "handleYearChange", function (e) {
          a.props.onYearChange &&
            (a.props.onYearChange(e),
            a.setState({ isRenderAriaLiveMessage: !0 })),
            a.props.adjustDateOnChange &&
              (a.props.onSelect && a.props.onSelect(e),
              a.props.setOpen && a.props.setOpen(!0)),
            a.props.setPreSelection && a.props.setPreSelection(e);
        }),
        ye(ke(a), "handleMonthChange", function (e) {
          a.props.onMonthChange &&
            (a.props.onMonthChange(e),
            a.setState({ isRenderAriaLiveMessage: !0 })),
            a.props.adjustDateOnChange &&
              (a.props.onSelect && a.props.onSelect(e),
              a.props.setOpen && a.props.setOpen(!0)),
            a.props.setPreSelection && a.props.setPreSelection(e);
        }),
        ye(ke(a), "handleMonthYearChange", function (e) {
          a.handleYearChange(e), a.handleMonthChange(e);
        }),
        ye(ke(a), "changeYear", function (e) {
          a.setState(
            function (t) {
              var r = t.date;
              return { date: I(r, e) };
            },
            function () {
              return a.handleYearChange(a.state.date);
            }
          );
        }),
        ye(ke(a), "changeMonth", function (e) {
          a.setState(
            function (t) {
              var r = t.date;
              return { date: Y(r, e) };
            },
            function () {
              return a.handleMonthChange(a.state.date);
            }
          );
        }),
        ye(ke(a), "changeMonthYear", function (e) {
          a.setState(
            function (t) {
              var r = t.date;
              return { date: I(Y(r, C(e)), M(e)) };
            },
            function () {
              return a.handleMonthYearChange(a.state.date);
            }
          );
        }),
        ye(ke(a), "header", function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : a.state.date,
            n = Re(t, a.props.locale, a.props.calendarStartDay),
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
                var o = p(n, t),
                  s = a.formatWeekday(o, a.props.locale),
                  i = a.props.weekDayClassName
                    ? a.props.weekDayClassName(o)
                    : void 0;
                return e.createElement(
                  "div",
                  { key: t, className: r("react-datepicker__day-name", i) },
                  s
                );
              })
            )
          );
        }),
        ye(ke(a), "formatWeekday", function (e, t) {
          return a.props.formatWeekDay
            ? (function (e, t, r) {
                return "function" == typeof t ? t(e, r) : xe(e, "EEEE", r);
              })(e, a.props.formatWeekDay, t)
            : a.props.useWeekdaysShort
            ? (function (e, t) {
                return xe(e, "EEE", t);
              })(e, t)
            : (function (e, t) {
                return xe(e, "EEEEEE", t);
              })(e, t);
        }),
        ye(ke(a), "decreaseYear", function () {
          a.setState(
            function (e) {
              var t = e.date;
              return {
                date: v(t, a.props.showYearPicker ? a.props.yearItemNumber : 1),
              };
            },
            function () {
              return a.handleYearChange(a.state.date);
            }
          );
        }),
        ye(ke(a), "renderPreviousButton", function () {
          if (!a.props.renderCustomHeader) {
            var t;
            switch (!0) {
              case a.props.showMonthYearPicker:
                t = ht(a.state.date, a.props);
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
                    a = gt(Ae(v(e, o)), o).endPeriod,
                    s = r && M(r);
                  return (s && s > a) || !1;
                })(a.state.date, a.props);
                break;
              default:
                t = dt(a.state.date, a.props);
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
        ye(ke(a), "increaseYear", function () {
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
        ye(ke(a), "renderNextButton", function () {
          if (!a.props.renderCustomHeader) {
            var t;
            switch (!0) {
              case a.props.showMonthYearPicker:
                t = mt(a.state.date, a.props);
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
                    a = gt(u(e, o), o).startPeriod,
                    s = r && M(r);
                  return (s && s < a) || !1;
                })(a.state.date, a.props);
                break;
              default:
                t = ut(a.state.date, a.props);
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
        ye(ke(a), "renderCurrentMonth", function () {
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
              xe(t, a.props.dateFormat, a.props.locale)
            )
          );
        }),
        ye(ke(a), "renderYearDropdown", function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (a.props.showYearDropdown && !t)
            return e.createElement(St, {
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
        ye(ke(a), "renderMonthDropdown", function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (a.props.showMonthDropdown && !t)
            return e.createElement(_t, {
              dropdownMode: a.props.dropdownMode,
              locale: a.props.locale,
              onChange: a.changeMonth,
              month: C(a.state.date),
              useShortMonthInDropdown: a.props.useShortMonthInDropdown,
            });
        }),
        ye(ke(a), "renderMonthYearDropdown", function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (a.props.showMonthYearDropdown && !t)
            return e.createElement(Et, {
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
        ye(ke(a), "handleTodayButtonClick", function (e) {
          a.props.onSelect(Be(), e),
            a.props.setPreSelection && a.props.setPreSelection(Be());
        }),
        ye(ke(a), "renderTodayButton", function () {
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
        ye(ke(a), "renderDefaultHeader", function (t) {
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
        ye(ke(a), "renderCustomHeader", function () {
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
          var o = dt(a.state.date, a.props),
            s = ut(a.state.date, a.props),
            i = ht(a.state.date, a.props),
            p = mt(a.state.date, a.props),
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
              de(
                de({}, a.state),
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
        ye(ke(a), "renderYearHeader", function () {
          var t = a.state.date,
            r = a.props,
            n = r.showYearPicker,
            o = gt(t, r.yearItemNumber),
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
        ye(ke(a), "renderHeader", function (e) {
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
        ye(ke(a), "renderMonths", function () {
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
                i = l(n, s),
                p = "month-".concat(o),
                c = o < a.props.monthsShown - 1,
                d = o > 0;
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
                  e.createElement(Ot, {
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
                    monthShowsDuplicateDaysStart: d,
                  })
                )
              );
            }
            return t;
          }
        }),
        ye(ke(a), "renderYears", function () {
          if (!a.props.showTimeSelectOnly)
            return a.props.showYearPicker
              ? e.createElement(
                  "div",
                  { className: "react-datepicker__year--container" },
                  a.renderHeader(),
                  e.createElement(
                    Tt,
                    ve(
                      { onDayClick: a.handleDayClick, date: a.state.date },
                      a.props
                    )
                  )
                )
              : void 0;
        }),
        ye(ke(a), "renderTimeSection", function () {
          if (
            a.props.showTimeSelect &&
            (a.state.monthContainer || a.props.showTimeSelectOnly)
          )
            return e.createElement(It, {
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
        ye(ke(a), "renderInputTimeSection", function () {
          var t = new Date(a.props.selected),
            r =
              Ne(t) && Boolean(a.props.selected)
                ? "".concat(wt(t.getHours()), ":").concat(wt(t.getMinutes()))
                : "";
          if (a.props.showTimeInput)
            return e.createElement(Lt, {
              date: t,
              timeString: r,
              timeInputLabel: a.props.timeInputLabel,
              onChange: a.props.onTimeChange,
              customTimeInput: a.props.customTimeInput,
            });
        }),
        ye(ke(a), "renderAriaLiveRegion", function () {
          var t,
            r = gt(a.state.date, a.props.yearItemNumber),
            n = r.startPeriod,
            o = r.endPeriod;
          return (
            (t = a.props.showYearPicker
              ? "".concat(n, " - ").concat(o)
              : a.props.showMonthYearPicker || a.props.showQuarterYearPicker
              ? M(a.state.date)
              : ""
                  .concat(Je(C(a.state.date), a.props.locale), " ")
                  .concat(M(a.state.date))),
            e.createElement(
              "span",
              {
                role: "alert",
                "aria-live": "polite",
                className: "react-datepicker__aria-live",
              },
              a.state.isRenderAriaLiveMessage && t
            )
          );
        }),
        ye(ke(a), "renderChildren", function () {
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
          isRenderAriaLiveMessage: !1,
        }),
        a
      );
    }
    return (
      fe(
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
              !this.props.preSelection ||
              (He(this.props.preSelection, e.preSelection) &&
                this.props.monthSelectedIn === e.monthSelectedIn)
                ? this.props.openToDate &&
                  !He(this.props.openToDate, e.openToDate) &&
                  this.setState({ date: this.props.openToDate })
                : this.setState({ date: this.props.preSelection });
            },
          },
          {
            key: "render",
            value: function () {
              var t = this.props.container || Rt;
              return e.createElement(
                "div",
                { ref: this.containerRef },
                e.createElement(
                  t,
                  {
                    className: r("react-datepicker", this.props.className, {
                      "react-datepicker--time-only":
                        this.props.showTimeSelectOnly,
                    }),
                    showPopperArrow: this.props.showPopperArrow,
                    arrowProps: this.props.arrowProps,
                  },
                  this.renderAriaLiveRegion(),
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
  })(),
  Kt = (function (t) {
    De(n, e.Component);
    var r = Se(n);
    function n(e) {
      var t;
      return (
        he(this, n),
        ((t = r.call(this, e)).el = document.createElement("div")),
        t
      );
    }
    return (
      fe(n, [
        {
          key: "componentDidMount",
          value: function () {
            (this.portalRoot = (
              this.props.portalHost || document
            ).getElementById(this.props.portalId)),
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
            return ae.createPortal(this.props.children, this.el);
          },
        },
      ]),
      n
    );
  })(),
  Bt = function (e) {
    return !e.disabled && -1 !== e.tabIndex;
  },
  Wt = (function (t) {
    De(n, e.Component);
    var r = Se(n);
    function n(t) {
      var o;
      return (
        he(this, n),
        ye(ke((o = r.call(this, t))), "getTabChildren", function () {
          return Array.prototype.slice
            .call(
              o.tabLoopRef.current.querySelectorAll(
                "[tabindex], a, button, input, select, textarea"
              ),
              1,
              -1
            )
            .filter(Bt);
        }),
        ye(ke(o), "handleFocusStart", function (e) {
          var t = o.getTabChildren();
          t && t.length > 1 && t[t.length - 1].focus();
        }),
        ye(ke(o), "handleFocusEnd", function (e) {
          var t = o.getTabChildren();
          t && t.length > 1 && t[0].focus();
        }),
        (o.tabLoopRef = e.createRef()),
        o
      );
    }
    return (
      fe(
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
  })(),
  jt = (function (t) {
    De(o, e.Component);
    var n = Se(o);
    function o() {
      return he(this, o), n.apply(this, arguments);
    }
    return (
      fe(
        o,
        [
          {
            key: "render",
            value: function () {
              var t,
                n = this.props,
                o = n.className,
                a = n.wrapperClassName,
                s = n.hidePopper,
                i = n.popperComponent,
                p = n.popperModifiers,
                c = n.popperPlacement,
                l = n.popperProps,
                d = n.targetComponent,
                u = n.enableTabLoop,
                h = n.popperOnKeyDown,
                m = n.portalId,
                f = n.portalHost;
              if (!s) {
                var y = r("react-datepicker-popper", o);
                t = e.createElement(
                  se,
                  ve({ modifiers: p, placement: c }, l),
                  function (t) {
                    var r = t.ref,
                      n = t.style,
                      o = t.placement,
                      a = t.arrowProps;
                    return e.createElement(
                      Wt,
                      { enableTabLoop: u },
                      e.createElement(
                        "div",
                        {
                          ref: r,
                          style: n,
                          className: y,
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
                  (t = e.createElement(Kt, { portalId: m, portalHost: f }, t));
              var v = r("react-datepicker-wrapper", a);
              return e.createElement(
                ie,
                { className: "react-datepicker-manager" },
                e.createElement(pe, null, function (t) {
                  var r = t.ref;
                  return e.createElement("div", { ref: r, className: v }, d);
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
  })(),
  Qt = oe(At);
var Ht = (function (t) {
    De(a, e.Component);
    var o = Se(a);
    function a(t) {
      var s;
      return (
        he(this, a),
        ye(ke((s = o.call(this, t))), "getPreSelection", function () {
          return s.props.openToDate
            ? s.props.openToDate
            : s.props.selectsEnd && s.props.startDate
            ? s.props.startDate
            : s.props.selectsStart && s.props.endDate
            ? s.props.endDate
            : Pe();
        }),
        ye(ke(s), "calcInitialState", function () {
          var e,
            t = s.getPreSelection(),
            r = ft(s.props),
            n = yt(s.props),
            o = r && Z(t, K(r)) ? r : n && X(t, H(n)) ? n : t;
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
            isRenderAriaLiveMessage: !1,
          };
        }),
        ye(ke(s), "clearPreventFocusTimeout", function () {
          s.preventFocusTimeout && clearTimeout(s.preventFocusTimeout);
        }),
        ye(ke(s), "setFocus", function () {
          s.input && s.input.focus && s.input.focus({ preventScroll: !0 });
        }),
        ye(ke(s), "setBlur", function () {
          s.input && s.input.blur && s.input.blur(), s.cancelFocusInput();
        }),
        ye(ke(s), "setOpen", function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          s.setState(
            {
              open: e,
              preSelection:
                e && s.state.open
                  ? s.state.preSelection
                  : s.calcInitialState().preSelection,
              lastPreSelectChange: qt,
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
        ye(ke(s), "inputOk", function () {
          return n(s.state.preSelection);
        }),
        ye(ke(s), "isCalendarOpen", function () {
          return void 0 === s.props.open
            ? s.state.open && !s.props.disabled && !s.props.readOnly
            : s.props.open;
        }),
        ye(ke(s), "handleFocus", function (e) {
          s.state.preventFocus ||
            (s.props.onFocus(e),
            s.props.preventOpenOnFocus || s.props.readOnly || s.setOpen(!0)),
            s.setState({ focused: !0 });
        }),
        ye(ke(s), "cancelFocusInput", function () {
          clearTimeout(s.inputFocusTimeout), (s.inputFocusTimeout = null);
        }),
        ye(ke(s), "deferFocusInput", function () {
          s.cancelFocusInput(),
            (s.inputFocusTimeout = setTimeout(function () {
              return s.setFocus();
            }, 1));
        }),
        ye(ke(s), "handleDropdownFocus", function () {
          s.cancelFocusInput();
        }),
        ye(ke(s), "handleBlur", function (e) {
          (!s.state.open || s.props.withPortal || s.props.showTimeInput) &&
            s.props.onBlur(e),
            s.setState({ focused: !1 });
        }),
        ye(ke(s), "handleCalendarClickOutside", function (e) {
          s.props.inline || s.setOpen(!1),
            s.props.onClickOutside(e),
            s.props.withPortal && e.preventDefault();
        }),
        ye(ke(s), "handleChange", function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          var n = t[0];
          if (
            !s.props.onChangeRaw ||
            (s.props.onChangeRaw.apply(ke(s), t),
            "function" == typeof n.isDefaultPrevented &&
              !n.isDefaultPrevented())
          ) {
            s.setState({ inputValue: n.target.value, lastPreSelectChange: Vt });
            var o = Ee(
              n.target.value,
              s.props.dateFormat,
              s.props.locale,
              s.props.strictParsing,
              s.props.selected,
              s.props.minDate
            );
            s.props.showTimeSelectOnly &&
              !He(o, s.props.selected) &&
              (o = ce(
                s.props.selected,
                null == o
                  ? {
                      hours: g(s.props.selected),
                      minutes: w(s.props.selected),
                      seconds: D(s.props.selected),
                    }
                  : { hours: g(o), minutes: w(o), seconds: D(o) }
              )),
              (!o && n.target.value) || s.setSelected(o, n, !0);
          }
        }),
        ye(ke(s), "handleSelect", function (e, t, r) {
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
            s.setState({ isRenderAriaLiveMessage: !0 }),
            !s.props.shouldCloseOnSelect || s.props.showTimeSelect)
          )
            s.setPreSelection(e);
          else if (!s.props.inline) {
            s.props.selectsRange || s.setOpen(!1);
            var n = s.props,
              o = n.startDate,
              a = n.endDate;
            !o || a || Z(e, o) || s.setOpen(!1);
          }
        }),
        ye(ke(s), "setSelected", function (e, t, r, n) {
          var o = e;
          if (s.props.showYearPicker) {
            if (null !== o && at(M(o), s.props)) return;
          } else if (s.props.showMonthYearPicker) {
            if (null !== o && rt(o, s.props)) return;
          } else if (null !== o && et(o, s.props)) return;
          var a = s.props,
            i = a.onChange,
            p = a.selectsRange,
            c = a.startDate,
            l = a.endDate;
          if (!Ve(s.props.selected, o) || s.props.allowSameDay || p)
            if (
              (null !== o &&
                (!s.props.selected ||
                  (r &&
                    (s.props.showTimeSelect ||
                      s.props.showTimeSelectOnly ||
                      s.props.showTimeInput)) ||
                  (o = Oe(o, {
                    hour: g(s.props.selected),
                    minute: w(s.props.selected),
                    second: D(s.props.selected),
                  })),
                s.props.inline || s.setState({ preSelection: o }),
                s.props.focusSelectedMonth ||
                  s.setState({ monthSelectedIn: n })),
              p)
            ) {
              var d = c && !l,
                u = c && l;
              !c && !l
                ? i([o, null], t)
                : d && (Z(o, c) ? i([o, null], t) : i([c, o], t)),
                u && i([o, null], t);
            } else i(o, t);
          r || (s.props.onSelect(o, t), s.setState({ inputValue: null }));
        }),
        ye(ke(s), "setPreSelection", function (e) {
          var t = void 0 !== s.props.minDate,
            r = void 0 !== s.props.maxDate,
            n = !0;
          if (e) {
            var o = K(e);
            if (t && r) n = qe(e, s.props.minDate, s.props.maxDate);
            else if (t) {
              var a = K(s.props.minDate);
              n = X(e, a) || Ve(o, a);
            } else if (r) {
              var i = H(s.props.maxDate);
              n = Z(e, i) || Ve(o, i);
            }
          }
          n && s.setState({ preSelection: e });
        }),
        ye(ke(s), "handleTimeChange", function (e) {
          var t = Oe(
            s.props.selected ? s.props.selected : s.getPreSelection(),
            { hour: g(e), minute: w(e) }
          );
          s.setState({ preSelection: t }),
            s.props.onChange(t),
            s.props.shouldCloseOnSelect && s.setOpen(!1),
            s.props.showTimeInput && s.setOpen(!0),
            (s.props.showTimeSelectOnly || s.props.showTimeSelect) &&
              s.setState({ isRenderAriaLiveMessage: !0 }),
            s.setState({ inputValue: null });
        }),
        ye(ke(s), "onInputClick", function () {
          s.props.disabled || s.props.readOnly || s.setOpen(!0),
            s.props.onInputClick();
        }),
        ye(ke(s), "onInputKeyDown", function (e) {
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
              var n = Pe(s.state.preSelection);
              "Enter" === t
                ? (e.preventDefault(),
                  s.inputOk() && s.state.lastPreSelectChange === qt
                    ? (s.handleSelect(n, e),
                      !s.props.shouldCloseOnSelect && s.setPreSelection(n))
                    : s.setOpen(!1))
                : "Escape" === t && (e.preventDefault(), s.setOpen(!1)),
                s.inputOk() ||
                  s.props.onInputError({
                    code: 1,
                    msg: "Date input not valid.",
                  });
            }
          } else ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) || s.onInputClick();
        }),
        ye(ke(s), "onPortalKeyDown", function (e) {
          "Escape" === e.key &&
            (e.preventDefault(),
            s.setState({ preventFocus: !0 }, function () {
              s.setOpen(!1),
                setTimeout(function () {
                  s.setFocus(), s.setState({ preventFocus: !1 });
                });
            }));
        }),
        ye(ke(s), "onDayKeyDown", function (e) {
          s.props.onKeyDown(e);
          var t = e.key,
            r = Pe(s.state.preSelection);
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
                n = p(r, 1);
                break;
              case "ArrowUp":
                n = m(r, 1);
                break;
              case "ArrowDown":
                n = c(r, 1);
                break;
              case "PageUp":
                n = f(r, 1);
                break;
              case "PageDown":
                n = l(r, 1);
                break;
              case "Home":
                n = v(r, 1);
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
              s.setState({ lastPreSelectChange: qt }),
              s.props.adjustDateOnChange && s.setSelected(n),
              s.setPreSelection(n),
              s.props.inline)
            ) {
              var o = C(r),
                a = C(n),
                i = M(r),
                d = M(n);
              o !== a || i !== d
                ? s.setState({ shouldFocusDayInline: !0 })
                : s.setState({ shouldFocusDayInline: !1 });
            }
          }
        }),
        ye(ke(s), "onPopperKeyDown", function (e) {
          "Escape" === e.key &&
            (e.preventDefault(),
            s.setState({ preventFocus: !0 }, function () {
              s.setOpen(!1),
                setTimeout(function () {
                  s.setFocus(), s.setState({ preventFocus: !1 });
                });
            }));
        }),
        ye(ke(s), "onClearClick", function (e) {
          e && e.preventDefault && e.preventDefault(),
            s.props.selectsRange
              ? s.props.onChange([null, null], e)
              : s.props.onChange(null, e),
            s.setState({ inputValue: null });
        }),
        ye(ke(s), "clear", function () {
          s.onClearClick();
        }),
        ye(ke(s), "onScroll", function (e) {
          "boolean" == typeof s.props.closeOnScroll && s.props.closeOnScroll
            ? (e.target !== document &&
                e.target !== document.documentElement &&
                e.target !== document.body) ||
              s.setOpen(!1)
            : "function" == typeof s.props.closeOnScroll &&
              s.props.closeOnScroll(e) &&
              s.setOpen(!1);
        }),
        ye(ke(s), "renderCalendar", function () {
          return s.props.inline || s.isCalendarOpen()
            ? e.createElement(
                Qt,
                {
                  ref: function (e) {
                    s.calendar = e;
                  },
                  locale: s.props.locale,
                  calendarStartDay: s.props.calendarStartDay,
                  chooseDayAriaLabelPrefix: s.props.chooseDayAriaLabelPrefix,
                  disabledDayAriaLabelPrefix:
                    s.props.disabledDayAriaLabelPrefix,
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
                  disabledKeyboardNavigation:
                    s.props.disabledKeyboardNavigation,
                  renderCustomHeader: s.props.renderCustomHeader,
                  popperProps: s.props.popperProps,
                  renderDayContents: s.props.renderDayContents,
                  onDayMouseEnter: s.props.onDayMouseEnter,
                  onMonthMouseLeave: s.props.onMonthMouseLeave,
                  selectsDisabledDaysInRange:
                    s.props.selectsDisabledDaysInRange,
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
        ye(ke(s), "renderAriaLiveRegion", function () {
          var t,
            r = s.props,
            n = r.dateFormat,
            o = r.locale,
            a =
              s.props.showTimeInput || s.props.showTimeSelect
                ? "PPPPp"
                : "PPPP";
          return (
            (t = s.props.selectsRange
              ? "Selected start date: "
                  .concat(
                    Ye(s.props.startDate, { dateFormat: a, locale: o }),
                    ". "
                  )
                  .concat(
                    s.props.endDate
                      ? "End date: " +
                          Ye(s.props.endDate, { dateFormat: a, locale: o })
                      : ""
                  )
              : s.props.showTimeSelectOnly
              ? "Selected time: ".concat(
                  Ye(s.props.selected, { dateFormat: n, locale: o })
                )
              : s.props.showYearPicker
              ? "Selected year: ".concat(
                  Ye(s.props.selected, { dateFormat: "yyyy", locale: o })
                )
              : s.props.showMonthYearPicker
              ? "Selected month: ".concat(
                  Ye(s.props.selected, { dateFormat: "MMMM yyyy", locale: o })
                )
              : s.props.showQuarterYearPicker
              ? "Selected quarter: ".concat(
                  Ye(s.props.selected, { dateFormat: "yyyy, QQQ", locale: o })
                )
              : "Selected date: ".concat(
                  Ye(s.props.selected, { dateFormat: a, locale: o })
                )),
            e.createElement(
              "span",
              {
                role: "alert",
                "aria-live": "polite",
                className: "react-datepicker__aria-live",
              },
              s.state.isRenderAriaLiveMessage && t
            )
          );
        }),
        ye(ke(s), "renderDateInput", function () {
          var t,
            n = r(
              s.props.className,
              ye({}, "react-datepicker-ignore-onclickoutside", s.state.open)
            ),
            o =
              s.props.customInput || e.createElement("input", { type: "text" }),
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
            (ye((t = {}), a, function (e) {
              s.input = e;
            }),
            ye(t, "value", i),
            ye(t, "onBlur", s.handleBlur),
            ye(t, "onChange", s.handleChange),
            ye(t, "onClick", s.onInputClick),
            ye(t, "onFocus", s.handleFocus),
            ye(t, "onKeyDown", s.onInputKeyDown),
            ye(t, "id", s.props.id),
            ye(t, "name", s.props.name),
            ye(t, "form", s.props.form),
            ye(t, "autoFocus", s.props.autoFocus),
            ye(t, "placeholder", s.props.placeholderText),
            ye(t, "disabled", s.props.disabled),
            ye(t, "autoComplete", s.props.autoComplete),
            ye(t, "className", r(o.props.className, n)),
            ye(t, "title", s.props.title),
            ye(t, "readOnly", s.props.readOnly),
            ye(t, "required", s.props.required),
            ye(t, "tabIndex", s.props.tabIndex),
            ye(t, "aria-describedby", s.props.ariaDescribedBy),
            ye(t, "aria-invalid", s.props.ariaInvalid),
            ye(t, "aria-labelledby", s.props.ariaLabelledBy),
            ye(t, "aria-required", s.props.ariaRequired),
            t)
          );
        }),
        ye(ke(s), "renderClearButton", function () {
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
      fe(
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
                  Ve(e.selected, this.props.selected) ||
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
                this.renderAriaLiveRegion(),
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
                      Wt,
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
                      Kt,
                      {
                        portalId: this.props.portalId,
                        portalHost: this.props.portalHost,
                      },
                      r
                    )),
                  e.createElement("div", null, this.renderInputContainer(), r)
                );
              }
              return e.createElement(jt, {
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
  })(),
  Vt = "input",
  qt = "navigate";
export {
  Rt as CalendarContainer,
  Ht as default,
  ze as getDefaultLocale,
  Ue as registerLocale,
  $e as setDefaultLocale,
};
