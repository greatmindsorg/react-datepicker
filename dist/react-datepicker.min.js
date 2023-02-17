!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(
        exports,
        require("react"),
        require("prop-types"),
        require("classnames"),
        require("date-fns/isDate"),
        require("date-fns/isValid"),
        require("date-fns/format"),
        require("date-fns/addMinutes"),
        require("date-fns/addHours"),
        require("date-fns/addDays"),
        require("date-fns/addWeeks"),
        require("date-fns/addMonths"),
        require("date-fns/addYears"),
        require("date-fns/subMinutes"),
        require("date-fns/subHours"),
        require("date-fns/subDays"),
        require("date-fns/subWeeks"),
        require("date-fns/subMonths"),
        require("date-fns/subYears"),
        require("date-fns/getSeconds"),
        require("date-fns/getMinutes"),
        require("date-fns/getHours"),
        require("date-fns/getDay"),
        require("date-fns/getDate"),
        require("date-fns/getISOWeek"),
        require("date-fns/getMonth"),
        require("date-fns/getQuarter"),
        require("date-fns/getYear"),
        require("date-fns/getTime"),
        require("date-fns/setSeconds"),
        require("date-fns/setMinutes"),
        require("date-fns/setHours"),
        require("date-fns/setMonth"),
        require("date-fns/setQuarter"),
        require("date-fns/setYear"),
        require("date-fns/min"),
        require("date-fns/max"),
        require("date-fns/differenceInCalendarDays"),
        require("date-fns/differenceInCalendarMonths"),
        require("date-fns/differenceInCalendarWeeks"),
        require("date-fns/differenceInCalendarYears"),
        require("date-fns/startOfDay"),
        require("date-fns/startOfWeek"),
        require("date-fns/startOfMonth"),
        require("date-fns/startOfQuarter"),
        require("date-fns/startOfYear"),
        require("date-fns/endOfDay"),
        require("date-fns/endOfWeek"),
        require("date-fns/endOfMonth"),
        require("date-fns/endOfYear"),
        require("date-fns/isEqual"),
        require("date-fns/isSameDay"),
        require("date-fns/isSameMonth"),
        require("date-fns/isSameYear"),
        require("date-fns/isSameQuarter"),
        require("date-fns/isAfter"),
        require("date-fns/isBefore"),
        require("date-fns/isWithinInterval"),
        require("date-fns/toDate"),
        require("date-fns/parse"),
        require("date-fns/parseISO"),
        require("react-onclickoutside"),
        require("react-dom"),
        require("react-popper"),
        require("date-fns/set")
      )
    : "function" == typeof define && define.amd
    ? define(
        [
          "exports",
          "react",
          "prop-types",
          "classnames",
          "date-fns/isDate",
          "date-fns/isValid",
          "date-fns/format",
          "date-fns/addMinutes",
          "date-fns/addHours",
          "date-fns/addDays",
          "date-fns/addWeeks",
          "date-fns/addMonths",
          "date-fns/addYears",
          "date-fns/subMinutes",
          "date-fns/subHours",
          "date-fns/subDays",
          "date-fns/subWeeks",
          "date-fns/subMonths",
          "date-fns/subYears",
          "date-fns/getSeconds",
          "date-fns/getMinutes",
          "date-fns/getHours",
          "date-fns/getDay",
          "date-fns/getDate",
          "date-fns/getISOWeek",
          "date-fns/getMonth",
          "date-fns/getQuarter",
          "date-fns/getYear",
          "date-fns/getTime",
          "date-fns/setSeconds",
          "date-fns/setMinutes",
          "date-fns/setHours",
          "date-fns/setMonth",
          "date-fns/setQuarter",
          "date-fns/setYear",
          "date-fns/min",
          "date-fns/max",
          "date-fns/differenceInCalendarDays",
          "date-fns/differenceInCalendarMonths",
          "date-fns/differenceInCalendarWeeks",
          "date-fns/differenceInCalendarYears",
          "date-fns/startOfDay",
          "date-fns/startOfWeek",
          "date-fns/startOfMonth",
          "date-fns/startOfQuarter",
          "date-fns/startOfYear",
          "date-fns/endOfDay",
          "date-fns/endOfWeek",
          "date-fns/endOfMonth",
          "date-fns/endOfYear",
          "date-fns/isEqual",
          "date-fns/isSameDay",
          "date-fns/isSameMonth",
          "date-fns/isSameYear",
          "date-fns/isSameQuarter",
          "date-fns/isAfter",
          "date-fns/isBefore",
          "date-fns/isWithinInterval",
          "date-fns/toDate",
          "date-fns/parse",
          "date-fns/parseISO",
          "react-onclickoutside",
          "react-dom",
          "react-popper",
          "date-fns/set",
        ],
        t
      )
    : t(
        ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).DatePicker = {}),
        e.React,
        e.PropTypes,
        e.classNames,
        e.isDate,
        e.isValidDate,
        e.format,
        e.addMinutes,
        e.addHours,
        e.addDays,
        e.addWeeks,
        e.addMonths,
        e.addYears,
        null,
        null,
        e.subDays,
        e.subWeeks,
        e.subMonths,
        e.subYears,
        e.getSeconds,
        e.getMinutes,
        e.getHours,
        e.getDay,
        e.getDate,
        e.getISOWeek,
        e.getMonth,
        e.getQuarter,
        e.getYear,
        e.getTime,
        e.setSeconds,
        e.setMinutes,
        e.setHours,
        e.setMonth,
        e.setQuarter,
        e.setYear,
        e.min,
        e.max,
        e.differenceInCalendarDays,
        e.differenceInCalendarMonths,
        null,
        e.differenceInCalendarYears,
        e.startOfDay,
        e.startOfWeek,
        e.startOfMonth,
        e.startOfQuarter,
        e.startOfYear,
        e.endOfDay,
        null,
        e.endOfMonth,
        e.endOfYear,
        e.dfIsEqual,
        e.dfIsSameDay,
        e.dfIsSameMonth,
        e.dfIsSameYear,
        e.dfIsSameQuarter,
        e.isAfter,
        e.isBefore,
        e.isWithinInterval,
        e.toDate,
        e.parse,
        e.parseISO,
        e.onClickOutside,
        e.ReactDOM,
        e.ReactPopper,
        e.set
      );
})(
  this,
  function (
    e,
    t,
    a,
    r,
    n,
    o,
    s,
    l,
    i,
    d,
    u,
    p,
    c,
    f,
    h,
    m,
    D,
    y,
    b,
    v,
    g,
    w,
    k,
    C,
    S,
    M,
    O,
    _,
    P,
    N,
    x,
    T,
    I,
    E,
    Y,
    L,
    R,
    F,
    A,
    q,
    W,
    B,
    j,
    K,
    H,
    Q,
    V,
    U,
    $,
    z,
    G,
    J,
    X,
    Z,
    ee,
    te,
    ae,
    re,
    ne,
    oe,
    se,
    le,
    ie,
    de,
    ue
  ) {
    "use strict";
    function pe(e) {
      return e && "object" == typeof e && "default" in e ? e : { default: e };
    }
    var ce = pe(t),
      fe = pe(a),
      he = pe(r),
      me = pe(n),
      De = pe(o),
      ye = pe(s),
      be = pe(l),
      ve = pe(i),
      ge = pe(d),
      we = pe(u),
      ke = pe(p),
      Ce = pe(c),
      Se = pe(m),
      Me = pe(D),
      Oe = pe(y),
      _e = pe(b),
      Pe = pe(v),
      Ne = pe(g),
      xe = pe(w),
      Te = pe(k),
      Ie = pe(C),
      Ee = pe(S),
      Ye = pe(M),
      Le = pe(O),
      Re = pe(_),
      Fe = pe(P),
      Ae = pe(N),
      qe = pe(x),
      We = pe(T),
      Be = pe(I),
      je = pe(E),
      Ke = pe(Y),
      He = pe(L),
      Qe = pe(R),
      Ve = pe(F),
      Ue = pe(A),
      $e = pe(W),
      ze = pe(B),
      Ge = pe(j),
      Je = pe(K),
      Xe = pe(H),
      Ze = pe(Q),
      et = pe(V),
      tt = pe($),
      at = pe(z),
      rt = pe(G),
      nt = pe(J),
      ot = pe(X),
      st = pe(Z),
      lt = pe(ee),
      it = pe(te),
      dt = pe(ae),
      ut = pe(re),
      pt = pe(ne),
      ct = pe(oe),
      ft = pe(se),
      ht = pe(le),
      mt = pe(ie),
      Dt = pe(ue);
    function yt(e, t) {
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
    function bt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? yt(Object(a), !0).forEach(function (t) {
              Ct(e, t, a[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : yt(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t)
              );
            });
      }
      return e;
    }
    function vt(e) {
      return (vt =
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
    function gt(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function wt(e, t) {
      for (var a = 0; a < t.length; a++) {
        var r = t[a];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, Et(r.key), r);
      }
    }
    function kt(e, t, a) {
      return (
        t && wt(e.prototype, t),
        a && wt(e, a),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function Ct(e, t, a) {
      return (
        (t = Et(t)) in e
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
    function St() {
      return (St = Object.assign
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
    function Mt(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && _t(e, t);
    }
    function Ot(e) {
      return (Ot = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function _t(e, t) {
      return (_t = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
    }
    function Pt(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function Nt(e, t) {
      if (t && ("object" == typeof t || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return Pt(e);
    }
    function xt(e) {
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
          r = Ot(e);
        if (t) {
          var n = Ot(this).constructor;
          a = Reflect.construct(r, arguments, n);
        } else a = r.apply(this, arguments);
        return Nt(this, a);
      };
    }
    function Tt(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return It(e);
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
          if ("string" == typeof e) return It(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === a && e.constructor && (a = e.constructor.name);
          if ("Map" === a || "Set" === a) return Array.from(e);
          if (
            "Arguments" === a ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
          )
            return It(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function It(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function Et(e) {
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
    function Yt(e, t) {
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
    function Lt(e, t) {
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
    var Rt = {
        p: Lt,
        P: function (e, t) {
          var a,
            r = e.match(/(P+)(p+)?/) || [],
            n = r[1],
            o = r[2];
          if (!o) return Yt(e, t);
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
          return a.replace("{{date}}", Yt(n, t)).replace("{{time}}", Lt(o, t));
        },
      },
      Ft = 12,
      At = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    function qt(e) {
      var t = e
        ? "string" == typeof e || e instanceof String
          ? ft.default(e)
          : pt.default(e)
        : new Date();
      return Bt(t) ? t : null;
    }
    function Wt(e, t, a, r, n) {
      var o = null,
        s = oa(a) || oa(na()),
        l = !0;
      return Array.isArray(t)
        ? (t.forEach(function (t) {
            var i = ct.default(e, t, new Date(), { locale: s });
            r && (l = Bt(i, n) && e === jt(i, t, a)), Bt(i, n) && l && (o = i);
          }),
          o)
        : ((o = ct.default(e, t, new Date(), { locale: s })),
          r
            ? (l = Bt(o) && e === jt(o, t, a))
            : Bt(o) ||
              ((t = t
                .match(At)
                .map(function (e) {
                  var t = e[0];
                  return "p" === t || "P" === t
                    ? s
                      ? (0, Rt[t])(e, s.formatLong)
                      : t
                    : e;
                })
                .join("")),
              e.length > 0 &&
                (o = ct.default(e, t.slice(0, e.length), new Date())),
              Bt(o) || (o = new Date(e))),
          Bt(o) && l ? o : null);
    }
    function Bt(e, t) {
      return (
        (t = t || new Date("1/1/1000")), De.default(e) && !dt.default(e, t)
      );
    }
    function jt(e, t, a) {
      if ("en" === a) return ye.default(e, t, { awareOfUnicodeTokens: !0 });
      var r = oa(a);
      return (
        a &&
          !r &&
          console.warn(
            'A locale object was not found for the provided string ["'.concat(
              a,
              '"].'
            )
          ),
        !r && na() && oa(na()) && (r = oa(na())),
        ye.default(e, t, { locale: r || null, awareOfUnicodeTokens: !0 })
      );
    }
    function Kt(e, t) {
      var a = t.dateFormat,
        r = t.locale;
      return (e && jt(e, Array.isArray(a) ? a[0] : a, r)) || "";
    }
    function Ht(e, t) {
      var a = t.hour,
        r = void 0 === a ? 0 : a,
        n = t.minute,
        o = void 0 === n ? 0 : n,
        s = t.second,
        l = void 0 === s ? 0 : s;
      return We.default(qe.default(Ae.default(e, l), o), r);
    }
    function Qt(e, t) {
      var a = (t && oa(t)) || (na() && oa(na()));
      return Ee.default(e, a ? { locale: a } : null);
    }
    function Vt(e) {
      return ze.default(e);
    }
    function Ut(e, t, a) {
      var r = oa(t || na());
      return Ge.default(e, { locale: r, weekStartsOn: a });
    }
    function $t(e) {
      return Je.default(e);
    }
    function zt(e) {
      return Ze.default(e);
    }
    function Gt(e) {
      return Xe.default(e);
    }
    function Jt() {
      return ze.default(qt());
    }
    function Xt(e, t) {
      return e && t ? st.default(e, t) : !e && !t;
    }
    function Zt(e, t) {
      return e && t ? ot.default(e, t) : !e && !t;
    }
    function ea(e, t) {
      return e && t ? lt.default(e, t) : !e && !t;
    }
    function ta(e, t) {
      return e && t ? nt.default(e, t) : !e && !t;
    }
    function aa(e, t) {
      return e && t ? rt.default(e, t) : !e && !t;
    }
    function ra(e, t, a) {
      var r,
        n = ze.default(t),
        o = et.default(a);
      try {
        r = ut.default(e, { start: n, end: o });
      } catch (e) {
        r = !1;
      }
      return r;
    }
    function na() {
      return ("undefined" != typeof window ? window : globalThis).__localeId__;
    }
    function oa(e) {
      if ("string" == typeof e) {
        var t = "undefined" != typeof window ? window : globalThis;
        return t.__localeData__ ? t.__localeData__[e] : null;
      }
      return e;
    }
    function sa(e, t) {
      return jt(Be.default(qt(), e), "LLLL", t);
    }
    function la(e, t) {
      return jt(Be.default(qt(), e), "LLL", t);
    }
    function ia(e, t) {
      return jt(je.default(qt(), e), "QQQ", t);
    }
    function da(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate,
        n = t.excludeDates,
        o = t.excludeDateIntervals,
        s = t.includeDates,
        l = t.includeDateIntervals,
        i = t.filterDate;
      return (
        Da(e, { minDate: a, maxDate: r }) ||
        (n &&
          n.some(function (t) {
            return ta(e, t);
          })) ||
        (o &&
          o.some(function (t) {
            var a = t.start,
              r = t.end;
            return ut.default(e, { start: a, end: r });
          })) ||
        (s &&
          !s.some(function (t) {
            return ta(e, t);
          })) ||
        (l &&
          !l.some(function (t) {
            var a = t.start,
              r = t.end;
            return ut.default(e, { start: a, end: r });
          })) ||
        (i && !i(qt(e))) ||
        !1
      );
    }
    function ua(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.excludeDates,
        r = t.excludeDateIntervals;
      return r && r.length > 0
        ? r.some(function (t) {
            var a = t.start,
              r = t.end;
            return ut.default(e, { start: a, end: r });
          })
        : (a &&
            a.some(function (t) {
              return ta(e, t);
            })) ||
            !1;
    }
    function pa(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        Da(e, { minDate: Je.default(a), maxDate: tt.default(r) }) ||
        (n &&
          n.some(function (t) {
            return Zt(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return Zt(e, t);
          })) ||
        (s && !s(qt(e))) ||
        !1
      );
    }
    function ca(e, t, a, r) {
      var n = Re.default(e),
        o = Ye.default(e),
        s = Re.default(t),
        l = Ye.default(t),
        i = Re.default(r);
      return n === s && n === i
        ? o <= a && a <= l
        : n < s
        ? (i === n && o <= a) || (i === s && l >= a) || (i < s && i > n)
        : void 0;
    }
    function fa(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        Da(e, { minDate: a, maxDate: r }) ||
        (n &&
          n.some(function (t) {
            return ea(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return ea(e, t);
          })) ||
        (s && !s(qt(e))) ||
        !1
      );
    }
    function ha(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate,
        l = new Date(e, 0, 1);
      return (
        Da(l, { minDate: Ze.default(a), maxDate: at.default(r) }) ||
        (n &&
          n.some(function (e) {
            return Xt(l, e);
          })) ||
        (o &&
          !o.some(function (e) {
            return Xt(l, e);
          })) ||
        (s && !s(qt(l))) ||
        !1
      );
    }
    function ma(e, t, a, r) {
      var n = Re.default(e),
        o = Le.default(e),
        s = Re.default(t),
        l = Le.default(t),
        i = Re.default(r);
      return n === s && n === i
        ? o <= a && a <= l
        : n < s
        ? (i === n && o <= a) || (i === s && l >= a) || (i < s && i > n)
        : void 0;
    }
    function Da(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate;
      return (a && Ve.default(e, a) < 0) || (r && Ve.default(e, r) > 0);
    }
    function ya(e, t) {
      return t.some(function (t) {
        return (
          xe.default(t) === xe.default(e) && Ne.default(t) === Ne.default(e)
        );
      });
    }
    function ba(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.excludeTimes,
        r = t.includeTimes,
        n = t.filterTime;
      return (a && ya(e, a)) || (r && !ya(e, r)) || (n && !n(e)) || !1;
    }
    function va(e, t) {
      var a = t.minTime,
        r = t.maxTime;
      if (!a || !r) throw new Error("Both minTime and maxTime props required");
      var n,
        o = qt(),
        s = We.default(qe.default(o, Ne.default(e)), xe.default(e)),
        l = We.default(qe.default(o, Ne.default(a)), xe.default(a)),
        i = We.default(qe.default(o, Ne.default(r)), xe.default(r));
      try {
        n = !ut.default(s, { start: l, end: i });
      } catch (e) {
        n = !1;
      }
      return n;
    }
    function ga(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.includeDates,
        n = Oe.default(e, 1);
      return (
        (a && Ue.default(a, n) > 0) ||
        (r &&
          r.every(function (e) {
            return Ue.default(e, n) > 0;
          })) ||
        !1
      );
    }
    function wa(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.maxDate,
        r = t.includeDates,
        n = ke.default(e, 1);
      return (
        (a && Ue.default(n, a) > 0) ||
        (r &&
          r.every(function (e) {
            return Ue.default(n, e) > 0;
          })) ||
        !1
      );
    }
    function ka(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.includeDates,
        n = _e.default(e, 1);
      return (
        (a && $e.default(a, n) > 0) ||
        (r &&
          r.every(function (e) {
            return $e.default(e, n) > 0;
          })) ||
        !1
      );
    }
    function Ca(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.maxDate,
        r = t.includeDates,
        n = Ce.default(e, 1);
      return (
        (a && $e.default(n, a) > 0) ||
        (r &&
          r.every(function (e) {
            return $e.default(n, e) > 0;
          })) ||
        !1
      );
    }
    function Sa(e) {
      var t = e.minDate,
        a = e.includeDates;
      if (a && t) {
        var r = a.filter(function (e) {
          return Ve.default(e, t) >= 0;
        });
        return He.default(r);
      }
      return a ? He.default(a) : t;
    }
    function Ma(e) {
      var t = e.maxDate,
        a = e.includeDates;
      if (a && t) {
        var r = a.filter(function (e) {
          return Ve.default(e, t) <= 0;
        });
        return Qe.default(r);
      }
      return a ? Qe.default(a) : t;
    }
    function Oa() {
      for (
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
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
        if (me.default(o)) {
          var s = jt(o, "MM.dd.yyyy"),
            l = a.get(s) || [];
          l.includes(t) || (l.push(t), a.set(s, l));
        } else if ("object" === vt(o)) {
          var i = Object.keys(o),
            d = i[0],
            u = o[i[0]];
          if ("string" == typeof d && u.constructor === Array)
            for (var p = 0, c = u.length; p < c; p++) {
              var f = jt(u[p], "MM.dd.yyyy"),
                h = a.get(f) || [];
              h.includes(d) || (h.push(d), a.set(f, h));
            }
        }
      }
      return a;
    }
    function _a(e, t, a, r, n) {
      for (var o = n.length, s = [], l = 0; l < o; l++) {
        var i = be.default(ve.default(e, xe.default(n[l])), Ne.default(n[l])),
          d = be.default(e, (a + 1) * r);
        it.default(i, t) && dt.default(i, d) && s.push(n[l]);
      }
      return s;
    }
    function Pa(e) {
      return e < 10 ? "0".concat(e) : "".concat(e);
    }
    function Na(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ft,
        a = Math.ceil(Re.default(e) / t) * t,
        r = a - (t - 1);
      return { startPeriod: r, endPeriod: a };
    }
    function xa(e, t, a, r) {
      for (var n = [], o = 0; o < 2 * t + 1; o++) {
        var s = e + t - o,
          l = !0;
        a && (l = Re.default(a) <= s),
          r && l && (l = Re.default(r) >= s),
          l && n.push(s);
      }
      return n;
    }
    var Ta = (function (e) {
      Mt(r, e);
      var a = xt(r);
      function r(e) {
        var n;
        gt(this, r),
          Ct(Pt((n = a.call(this, e))), "renderOptions", function () {
            var e = n.props.year,
              t = n.state.yearsList.map(function (t) {
                return ce.default.createElement(
                  "div",
                  {
                    className:
                      e === t
                        ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                        : "react-datepicker__year-option",
                    key: t,
                    onClick: n.onChange.bind(Pt(n), t),
                    "aria-selected": e === t ? "true" : void 0,
                  },
                  e === t
                    ? ce.default.createElement(
                        "span",
                        {
                          className: "react-datepicker__year-option--selected",
                        },
                        "✓"
                      )
                    : "",
                  t
                );
              }),
              a = n.props.minDate ? Re.default(n.props.minDate) : null,
              r = n.props.maxDate ? Re.default(n.props.maxDate) : null;
            return (
              (r &&
                n.state.yearsList.find(function (e) {
                  return e === r;
                })) ||
                t.unshift(
                  ce.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      key: "upcoming",
                      onClick: n.incrementYears,
                    },
                    ce.default.createElement("a", {
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
                  ce.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      key: "previous",
                      onClick: n.decrementYears,
                    },
                    ce.default.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                    })
                  )
                ),
              t
            );
          }),
          Ct(Pt(n), "onChange", function (e) {
            n.props.onChange(e);
          }),
          Ct(Pt(n), "handleClickOutside", function () {
            n.props.onCancel();
          }),
          Ct(Pt(n), "shiftYears", function (e) {
            var t = n.state.yearsList.map(function (t) {
              return t + e;
            });
            n.setState({ yearsList: t });
          }),
          Ct(Pt(n), "incrementYears", function () {
            return n.shiftYears(1);
          }),
          Ct(Pt(n), "decrementYears", function () {
            return n.shiftYears(-1);
          });
        var o = e.yearDropdownItemNumber,
          s = e.scrollableYearDropdown,
          l = o || (s ? 10 : 5);
        return (
          (n.state = {
            yearsList: xa(n.props.year, l, n.props.minDate, n.props.maxDate),
          }),
          (n.dropdownRef = t.createRef()),
          n
        );
      }
      return (
        kt(r, [
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
              var e = he.default({
                "react-datepicker__year-dropdown": !0,
                "react-datepicker__year-dropdown--scrollable":
                  this.props.scrollableYearDropdown,
              });
              return ce.default.createElement(
                "div",
                { className: e, ref: this.dropdownRef },
                this.renderOptions()
              );
            },
          },
        ]),
        r
      );
    })(ce.default.Component);
    Ct(Ta, "propTypes", {
      minDate: fe.default.instanceOf(Date),
      maxDate: fe.default.instanceOf(Date),
      onCancel: fe.default.func.isRequired,
      onChange: fe.default.func.isRequired,
      scrollableYearDropdown: fe.default.bool,
      year: fe.default.number.isRequired,
      yearDropdownItemNumber: fe.default.number,
    });
    var Ia = ht.default(Ta),
      Ea = (function (e) {
        Mt(a, e);
        var t = xt(a);
        function a() {
          var e;
          gt(this, a);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            Ct(Pt((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            Ct(Pt(e), "renderSelectOptions", function () {
              for (
                var t = e.props.minDate ? Re.default(e.props.minDate) : 1900,
                  a = e.props.maxDate ? Re.default(e.props.maxDate) : 2100,
                  r = [],
                  n = t;
                n <= a;
                n++
              )
                r.push(
                  ce.default.createElement("option", { key: n, value: n }, n)
                );
              return r;
            }),
            Ct(Pt(e), "onSelectChange", function (t) {
              e.onChange(t.target.value);
            }),
            Ct(Pt(e), "renderSelectMode", function () {
              return ce.default.createElement(
                "select",
                {
                  value: e.props.year,
                  className: "react-datepicker__year-select",
                  onChange: e.onSelectChange,
                },
                e.renderSelectOptions()
              );
            }),
            Ct(Pt(e), "renderReadView", function (t) {
              return ce.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__year-read-view",
                  onClick: function (t) {
                    return e.toggleDropdown(t);
                  },
                },
                ce.default.createElement("span", {
                  className: "react-datepicker__year-read-view--down-arrow",
                }),
                ce.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__year-read-view--selected-year",
                  },
                  e.props.year
                )
              );
            }),
            Ct(Pt(e), "renderDropdown", function () {
              return ce.default.createElement(Ia, {
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
            Ct(Pt(e), "renderScrollMode", function () {
              var t = e.state.dropdownVisible,
                a = [e.renderReadView(!t)];
              return t && a.unshift(e.renderDropdown()), a;
            }),
            Ct(Pt(e), "onChange", function (t) {
              e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
            }),
            Ct(Pt(e), "toggleDropdown", function (t) {
              e.setState(
                { dropdownVisible: !e.state.dropdownVisible },
                function () {
                  e.props.adjustDateOnChange &&
                    e.handleYearChange(e.props.date, t);
                }
              );
            }),
            Ct(Pt(e), "handleYearChange", function (t, a) {
              e.onSelect(t, a), e.setOpen();
            }),
            Ct(Pt(e), "onSelect", function (t, a) {
              e.props.onSelect && e.props.onSelect(t, a);
            }),
            Ct(Pt(e), "setOpen", function () {
              e.props.setOpen && e.props.setOpen(!0);
            }),
            e
          );
        }
        return (
          kt(a, [
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
                return ce.default.createElement(
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
      })(ce.default.Component);
    Ct(Ea, "propTypes", {
      adjustDateOnChange: fe.default.bool,
      dropdownMode: fe.default.oneOf(["scroll", "select"]).isRequired,
      maxDate: fe.default.instanceOf(Date),
      minDate: fe.default.instanceOf(Date),
      onChange: fe.default.func.isRequired,
      scrollableYearDropdown: fe.default.bool,
      year: fe.default.number.isRequired,
      yearDropdownItemNumber: fe.default.number,
      date: fe.default.instanceOf(Date),
      onSelect: fe.default.func,
      setOpen: fe.default.func,
    });
    var Ya = (function (e) {
      Mt(a, e);
      var t = xt(a);
      function a() {
        var e;
        gt(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          Ct(
            Pt((e = t.call.apply(t, [this].concat(n)))),
            "isSelectedMonth",
            function (t) {
              return e.props.month === t;
            }
          ),
          Ct(Pt(e), "renderOptions", function () {
            return e.props.monthNames.map(function (t, a) {
              return ce.default.createElement(
                "div",
                {
                  className: e.isSelectedMonth(a)
                    ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                    : "react-datepicker__month-option",
                  key: t,
                  onClick: e.onChange.bind(Pt(e), a),
                  "aria-selected": e.isSelectedMonth(a) ? "true" : void 0,
                },
                e.isSelectedMonth(a)
                  ? ce.default.createElement(
                      "span",
                      { className: "react-datepicker__month-option--selected" },
                      "✓"
                    )
                  : "",
                t
              );
            });
          }),
          Ct(Pt(e), "onChange", function (t) {
            return e.props.onChange(t);
          }),
          Ct(Pt(e), "handleClickOutside", function () {
            return e.props.onCancel();
          }),
          e
        );
      }
      return (
        kt(a, [
          {
            key: "render",
            value: function () {
              return ce.default.createElement(
                "div",
                { className: "react-datepicker__month-dropdown" },
                this.renderOptions()
              );
            },
          },
        ]),
        a
      );
    })(ce.default.Component);
    Ct(Ya, "propTypes", {
      onCancel: fe.default.func.isRequired,
      onChange: fe.default.func.isRequired,
      month: fe.default.number.isRequired,
      monthNames: fe.default.arrayOf(fe.default.string.isRequired).isRequired,
    });
    var La = ht.default(Ya),
      Ra = (function (e) {
        Mt(a, e);
        var t = xt(a);
        function a() {
          var e;
          gt(this, a);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            Ct(Pt((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            Ct(Pt(e), "renderSelectOptions", function (e) {
              return e.map(function (e, t) {
                return ce.default.createElement(
                  "option",
                  { key: t, value: t },
                  e
                );
              });
            }),
            Ct(Pt(e), "renderSelectMode", function (t) {
              return ce.default.createElement(
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
            Ct(Pt(e), "renderReadView", function (t, a) {
              return ce.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__month-read-view",
                  onClick: e.toggleDropdown,
                },
                ce.default.createElement("span", {
                  className: "react-datepicker__month-read-view--down-arrow",
                }),
                ce.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__month-read-view--selected-month",
                  },
                  a[e.props.month]
                )
              );
            }),
            Ct(Pt(e), "renderDropdown", function (t) {
              return ce.default.createElement(La, {
                key: "dropdown",
                month: e.props.month,
                monthNames: t,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
              });
            }),
            Ct(Pt(e), "renderScrollMode", function (t) {
              var a = e.state.dropdownVisible,
                r = [e.renderReadView(!a, t)];
              return a && r.unshift(e.renderDropdown(t)), r;
            }),
            Ct(Pt(e), "onChange", function (t) {
              e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
            }),
            Ct(Pt(e), "toggleDropdown", function () {
              return e.setState({ dropdownVisible: !e.state.dropdownVisible });
            }),
            e
          );
        }
        return (
          kt(a, [
            {
              key: "render",
              value: function () {
                var e,
                  t = this,
                  a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                    this.props.useShortMonthInDropdown
                      ? function (e) {
                          return la(e, t.props.locale);
                        }
                      : function (e) {
                          return sa(e, t.props.locale);
                        }
                  );
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode(a);
                    break;
                  case "select":
                    e = this.renderSelectMode(a);
                }
                return ce.default.createElement(
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
      })(ce.default.Component);
    function Fa(e, t) {
      for (var a = [], r = $t(e), n = $t(t); !it.default(r, n); )
        a.push(qt(r)), (r = ke.default(r, 1));
      return a;
    }
    Ct(Ra, "propTypes", {
      dropdownMode: fe.default.oneOf(["scroll", "select"]).isRequired,
      locale: fe.default.string,
      month: fe.default.number.isRequired,
      onChange: fe.default.func.isRequired,
      useShortMonthInDropdown: fe.default.bool,
    });
    var Aa = (function (e) {
      Mt(a, e);
      var t = xt(a);
      function a(e) {
        var r;
        return (
          gt(this, a),
          Ct(Pt((r = t.call(this, e))), "renderOptions", function () {
            return r.state.monthYearsList.map(function (e) {
              var t = Fe.default(e),
                a = Xt(r.props.date, e) && Zt(r.props.date, e);
              return ce.default.createElement(
                "div",
                {
                  className: a
                    ? "react-datepicker__month-year-option--selected_month-year"
                    : "react-datepicker__month-year-option",
                  key: t,
                  onClick: r.onChange.bind(Pt(r), t),
                  "aria-selected": a ? "true" : void 0,
                },
                a
                  ? ce.default.createElement(
                      "span",
                      {
                        className:
                          "react-datepicker__month-year-option--selected",
                      },
                      "✓"
                    )
                  : "",
                jt(e, r.props.dateFormat, r.props.locale)
              );
            });
          }),
          Ct(Pt(r), "onChange", function (e) {
            return r.props.onChange(e);
          }),
          Ct(Pt(r), "handleClickOutside", function () {
            r.props.onCancel();
          }),
          (r.state = { monthYearsList: Fa(r.props.minDate, r.props.maxDate) }),
          r
        );
      }
      return (
        kt(a, [
          {
            key: "render",
            value: function () {
              var e = he.default({
                "react-datepicker__month-year-dropdown": !0,
                "react-datepicker__month-year-dropdown--scrollable":
                  this.props.scrollableMonthYearDropdown,
              });
              return ce.default.createElement(
                "div",
                { className: e },
                this.renderOptions()
              );
            },
          },
        ]),
        a
      );
    })(ce.default.Component);
    Ct(Aa, "propTypes", {
      minDate: fe.default.instanceOf(Date).isRequired,
      maxDate: fe.default.instanceOf(Date).isRequired,
      onCancel: fe.default.func.isRequired,
      onChange: fe.default.func.isRequired,
      scrollableMonthYearDropdown: fe.default.bool,
      date: fe.default.instanceOf(Date).isRequired,
      dateFormat: fe.default.string.isRequired,
      locale: fe.default.string,
    });
    var qa = ht.default(Aa),
      Wa = (function (e) {
        Mt(a, e);
        var t = xt(a);
        function a() {
          var e;
          gt(this, a);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            Ct(Pt((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            Ct(Pt(e), "renderSelectOptions", function () {
              for (
                var t = $t(e.props.minDate), a = $t(e.props.maxDate), r = [];
                !it.default(t, a);

              ) {
                var n = Fe.default(t);
                r.push(
                  ce.default.createElement(
                    "option",
                    { key: n, value: n },
                    jt(t, e.props.dateFormat, e.props.locale)
                  )
                ),
                  (t = ke.default(t, 1));
              }
              return r;
            }),
            Ct(Pt(e), "onSelectChange", function (t) {
              e.onChange(t.target.value);
            }),
            Ct(Pt(e), "renderSelectMode", function () {
              return ce.default.createElement(
                "select",
                {
                  value: Fe.default($t(e.props.date)),
                  className: "react-datepicker__month-year-select",
                  onChange: e.onSelectChange,
                },
                e.renderSelectOptions()
              );
            }),
            Ct(Pt(e), "renderReadView", function (t) {
              var a = jt(e.props.date, e.props.dateFormat, e.props.locale);
              return ce.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__month-year-read-view",
                  onClick: function (t) {
                    return e.toggleDropdown(t);
                  },
                },
                ce.default.createElement("span", {
                  className:
                    "react-datepicker__month-year-read-view--down-arrow",
                }),
                ce.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__month-year-read-view--selected-month-year",
                  },
                  a
                )
              );
            }),
            Ct(Pt(e), "renderDropdown", function () {
              return ce.default.createElement(qa, {
                key: "dropdown",
                date: e.props.date,
                dateFormat: e.props.dateFormat,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                scrollableMonthYearDropdown:
                  e.props.scrollableMonthYearDropdown,
                locale: e.props.locale,
              });
            }),
            Ct(Pt(e), "renderScrollMode", function () {
              var t = e.state.dropdownVisible,
                a = [e.renderReadView(!t)];
              return t && a.unshift(e.renderDropdown()), a;
            }),
            Ct(Pt(e), "onChange", function (t) {
              e.toggleDropdown();
              var a = qt(parseInt(t));
              (Xt(e.props.date, a) && Zt(e.props.date, a)) ||
                e.props.onChange(a);
            }),
            Ct(Pt(e), "toggleDropdown", function () {
              return e.setState({ dropdownVisible: !e.state.dropdownVisible });
            }),
            e
          );
        }
        return (
          kt(a, [
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
                return ce.default.createElement(
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
      })(ce.default.Component);
    Ct(Wa, "propTypes", {
      dropdownMode: fe.default.oneOf(["scroll", "select"]).isRequired,
      dateFormat: fe.default.string.isRequired,
      locale: fe.default.string,
      maxDate: fe.default.instanceOf(Date).isRequired,
      minDate: fe.default.instanceOf(Date).isRequired,
      date: fe.default.instanceOf(Date).isRequired,
      onChange: fe.default.func.isRequired,
      scrollableMonthYearDropdown: fe.default.bool,
    });
    var Ba = (function (e) {
      Mt(a, e);
      var t = xt(a);
      function a(e) {
        var r;
        return (
          gt(this, a),
          Ct(Pt((r = t.call(this, e))), "dayEl", ce.default.createRef()),
          Ct(Pt(r), "handleClick", function (e) {
            !r.isDisabled() && r.props.onClick && r.props.onClick(e);
          }),
          Ct(Pt(r), "handleMouseEnter", function (e) {
            !r.isDisabled() && r.props.onMouseEnter && r.props.onMouseEnter(e);
          }),
          Ct(Pt(r), "handleOnKeyDown", function (e) {
            " " === e.key && (e.preventDefault(), (e.key = "Enter")),
              r.props.handleOnKeyDown(e);
          }),
          Ct(Pt(r), "isSameDay", function (e) {
            return ta(r.props.day, e);
          }),
          Ct(Pt(r), "isKeyboardSelected", function () {
            return (
              !r.props.disabledKeyboardNavigation &&
              !r.isSameDay(r.props.selected) &&
              r.isSameDay(r.props.preSelection)
            );
          }),
          Ct(Pt(r), "isDisabled", function () {
            return da(r.props.day, r.props);
          }),
          Ct(Pt(r), "isExcluded", function () {
            return ua(r.props.day, r.props);
          }),
          Ct(Pt(r), "getHighLightedClass", function (e) {
            var t = r.props,
              a = t.day,
              n = t.highlightDates;
            if (!n) return !1;
            var o = jt(a, "MM.dd.yyyy");
            return n.get(o);
          }),
          Ct(Pt(r), "isInRange", function () {
            var e = r.props,
              t = e.day,
              a = e.startDate,
              n = e.endDate;
            return !(!a || !n) && ra(t, a, n);
          }),
          Ct(Pt(r), "isInSelectingRange", function () {
            var e,
              t = r.props,
              a = t.day,
              n = t.selectsStart,
              o = t.selectsEnd,
              s = t.selectsRange,
              l = t.selectsDisabledDaysInRange,
              i = t.startDate,
              d = t.endDate,
              u =
                null !== (e = r.props.selectingDate) && void 0 !== e
                  ? e
                  : r.props.preSelection;
            return (
              !(!(n || o || s) || !u || (!l && r.isDisabled())) &&
              (n && d && (dt.default(u, d) || aa(u, d))
                ? ra(a, u, d)
                : ((o && i && (it.default(u, i) || aa(u, i))) ||
                    !(!s || !i || d || (!it.default(u, i) && !aa(u, i)))) &&
                  ra(a, i, u))
            );
          }),
          Ct(Pt(r), "isSelectingRangeStart", function () {
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
            return ta(a, o ? s : n);
          }),
          Ct(Pt(r), "isSelectingRangeEnd", function () {
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
            return ta(a, o || s ? l : n);
          }),
          Ct(Pt(r), "isRangeStart", function () {
            var e = r.props,
              t = e.day,
              a = e.startDate,
              n = e.endDate;
            return !(!a || !n) && ta(a, t);
          }),
          Ct(Pt(r), "isRangeEnd", function () {
            var e = r.props,
              t = e.day,
              a = e.startDate,
              n = e.endDate;
            return !(!a || !n) && ta(n, t);
          }),
          Ct(Pt(r), "isWeekend", function () {
            var e = Te.default(r.props.day);
            return 0 === e || 6 === e;
          }),
          Ct(Pt(r), "isAfterMonth", function () {
            return (
              void 0 !== r.props.month &&
              (r.props.month + 1) % 12 === Ye.default(r.props.day)
            );
          }),
          Ct(Pt(r), "isBeforeMonth", function () {
            return (
              void 0 !== r.props.month &&
              (Ye.default(r.props.day) + 1) % 12 === r.props.month
            );
          }),
          Ct(Pt(r), "isCurrentDay", function () {
            return r.isSameDay(qt());
          }),
          Ct(Pt(r), "isSelected", function () {
            return r.isSameDay(r.props.selected);
          }),
          Ct(Pt(r), "getClassNames", function (e) {
            var t,
              a = r.props.dayClassName ? r.props.dayClassName(e) : void 0;
            return he.default(
              "react-datepicker__day",
              a,
              "react-datepicker__day--" + jt(r.props.day, "ddd", t),
              {
                "react-datepicker__day--disabled": r.isDisabled(),
                "react-datepicker__day--excluded": r.isExcluded(),
                "react-datepicker__day--selected": r.isSelected(),
                "react-datepicker__day--keyboard-selected":
                  r.isKeyboardSelected(),
                "react-datepicker__day--range-start": r.isRangeStart(),
                "react-datepicker__day--range-end": r.isRangeEnd(),
                "react-datepicker__day--in-range": r.isInRange(),
                "react-datepicker__day--in-selecting-range":
                  r.isInSelectingRange(),
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
          Ct(Pt(r), "getAriaLabel", function () {
            var e = r.props,
              t = e.day,
              a = e.selectsRange,
              n = e.startDate,
              o = e.endDate,
              s = e.selected,
              l = e.ariaLabelPrefixWhenEnabled,
              i = void 0 === l ? "Single date" : l,
              d = e.ariaLabelPrefixWhenDisabled,
              u = void 0 === d ? "Not available" : d,
              p = function (e) {
                return jt(e, "PPPP", r.props.locale);
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
                  ? u
                  : r.isSameDay(s)
                  ? "Selected single date"
                  : i;
              r.setState({ labelDay: "".concat(c, ", ").concat(p(t)) });
            }
          }),
          Ct(Pt(r), "getTabIndex", function (e, t) {
            var a = e || r.props.selected,
              n = t || r.props.preSelection;
            return r.isKeyboardSelected() || (r.isSameDay(a) && ta(n, a))
              ? 0
              : -1;
          }),
          Ct(Pt(r), "handleFocusDay", function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
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
          Ct(Pt(r), "renderDayContents", function () {
            return (r.props.monthShowsDuplicateDaysEnd && r.isAfterMonth()) ||
              (r.props.monthShowsDuplicateDaysStart && r.isBeforeMonth())
              ? null
              : r.props.renderDayContents
              ? r.props.renderDayContents(Ie.default(r.props.day), r.props.day)
              : Ie.default(r.props.day);
          }),
          Ct(Pt(r), "render", function () {
            return ce.default.createElement(
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
        kt(a, [
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
    })(ce.default.Component);
    Ct(Ba, "propTypes", {
      ariaLabelPrefixWhenEnabled: fe.default.string,
      ariaLabelPrefixWhenDisabled: fe.default.string,
      disabledKeyboardNavigation: fe.default.bool,
      day: fe.default.instanceOf(Date).isRequired,
      dayClassName: fe.default.func,
      endDate: fe.default.instanceOf(Date),
      highlightDates: fe.default.instanceOf(Map),
      inline: fe.default.bool,
      shouldFocusDayInline: fe.default.bool,
      month: fe.default.number,
      onClick: fe.default.func,
      onMouseEnter: fe.default.func,
      preSelection: fe.default.instanceOf(Date),
      selected: fe.default.object,
      selectingDate: fe.default.instanceOf(Date),
      selectsEnd: fe.default.bool,
      selectsStart: fe.default.bool,
      selectsRange: fe.default.bool,
      selectsDisabledDaysInRange: fe.default.bool,
      startDate: fe.default.instanceOf(Date),
      renderDayContents: fe.default.func,
      handleOnKeyDown: fe.default.func,
      containerRef: fe.default.oneOfType([
        fe.default.func,
        fe.default.shape({ current: fe.default.instanceOf(Element) }),
      ]),
      monthShowsDuplicateDaysEnd: fe.default.bool,
      monthShowsDuplicateDaysStart: fe.default.bool,
      locale: fe.default.oneOfType([
        fe.default.string,
        fe.default.shape({ locale: fe.default.object }),
      ]),
    });
    var ja = (function (e) {
      Mt(a, e);
      var t = xt(a);
      function a() {
        var e;
        gt(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          Ct(
            Pt((e = t.call.apply(t, [this].concat(n)))),
            "handleClick",
            function (t) {
              e.props.onClick && e.props.onClick(t);
            }
          ),
          e
        );
      }
      return (
        kt(a, [
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
              return ce.default.createElement(
                "div",
                {
                  className: he.default(n),
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
    })(ce.default.Component);
    Ct(ja, "propTypes", {
      weekNumber: fe.default.number.isRequired,
      onClick: fe.default.func,
    });
    var Ka = (function (e) {
      Mt(a, e);
      var t = xt(a);
      function a() {
        var e;
        gt(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          Ct(
            Pt((e = t.call.apply(t, [this].concat(n)))),
            "handleDayClick",
            function (t, a) {
              e.props.onDayClick && e.props.onDayClick(t, a);
            }
          ),
          Ct(Pt(e), "handleDayMouseEnter", function (t) {
            e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
          }),
          Ct(Pt(e), "handleWeekClick", function (t, a, r) {
            "function" == typeof e.props.onWeekSelect &&
              e.props.onWeekSelect(t, a, r),
              e.props.shouldCloseOnSelect && e.props.setOpen(!1);
          }),
          Ct(Pt(e), "formatWeekNumber", function (t) {
            return e.props.formatWeekNumber
              ? e.props.formatWeekNumber(t)
              : Qt(t);
          }),
          Ct(Pt(e), "renderDays", function () {
            var t = Ut(e.props.day, e.props.locale, e.props.calendarStartDay),
              a = [],
              r = e.formatWeekNumber(t);
            if (e.props.showWeekNumber) {
              var n = e.props.onWeekSelect
                ? e.handleWeekClick.bind(Pt(e), t, r)
                : void 0;
              a.push(
                ce.default.createElement(ja, {
                  key: "W",
                  weekNumber: r,
                  onClick: n,
                  ariaLabelPrefix: e.props.ariaLabelPrefix,
                })
              );
            }
            return a.concat(
              [0, 1, 2, 3, 4, 5, 6].map(function (a) {
                var r = ge.default(t, a);
                return ce.default.createElement(Ba, {
                  ariaLabelPrefixWhenEnabled: e.props.chooseDayAriaLabelPrefix,
                  ariaLabelPrefixWhenDisabled:
                    e.props.disabledDayAriaLabelPrefix,
                  key: r.valueOf(),
                  day: r,
                  month: e.props.month,
                  onClick: e.handleDayClick.bind(Pt(e), r),
                  onMouseEnter: e.handleDayMouseEnter.bind(Pt(e), r),
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
                  selectsDisabledDaysInRange:
                    e.props.selectsDisabledDaysInRange,
                  startDate: e.props.startDate,
                  endDate: e.props.endDate,
                  dayClassName: e.props.dayClassName,
                  renderDayContents: e.props.renderDayContents,
                  disabledKeyboardNavigation:
                    e.props.disabledKeyboardNavigation,
                  handleOnKeyDown: e.props.handleOnKeyDown,
                  isInputFocused: e.props.isInputFocused,
                  containerRef: e.props.containerRef,
                  inline: e.props.inline,
                  shouldFocusDayInline: e.props.shouldFocusDayInline,
                  monthShowsDuplicateDaysEnd:
                    e.props.monthShowsDuplicateDaysEnd,
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
        kt(
          a,
          [
            {
              key: "render",
              value: function () {
                return ce.default.createElement(
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
    })(ce.default.Component);
    Ct(Ka, "propTypes", {
      ariaLabelPrefix: fe.default.string,
      disabledKeyboardNavigation: fe.default.bool,
      day: fe.default.instanceOf(Date).isRequired,
      dayClassName: fe.default.func,
      disabledDayAriaLabelPrefix: fe.default.string,
      chooseDayAriaLabelPrefix: fe.default.string,
      endDate: fe.default.instanceOf(Date),
      excludeDates: fe.default.array,
      excludeDateIntervals: fe.default.arrayOf(
        fe.default.shape({
          start: fe.default.instanceOf(Date),
          end: fe.default.instanceOf(Date),
        })
      ),
      filterDate: fe.default.func,
      formatWeekNumber: fe.default.func,
      highlightDates: fe.default.instanceOf(Map),
      includeDates: fe.default.array,
      includeDateIntervals: fe.default.array,
      inline: fe.default.bool,
      shouldFocusDayInline: fe.default.bool,
      locale: fe.default.oneOfType([
        fe.default.string,
        fe.default.shape({ locale: fe.default.object }),
      ]),
      maxDate: fe.default.instanceOf(Date),
      calendarStartDay: fe.default.number,
      minDate: fe.default.instanceOf(Date),
      month: fe.default.number,
      onDayClick: fe.default.func,
      onDayMouseEnter: fe.default.func,
      onWeekSelect: fe.default.func,
      preSelection: fe.default.instanceOf(Date),
      selected: fe.default.instanceOf(Date),
      selectingDate: fe.default.instanceOf(Date),
      selectsEnd: fe.default.bool,
      selectsStart: fe.default.bool,
      selectsRange: fe.default.bool,
      selectsDisabledDaysInRange: fe.default.bool,
      showWeekNumber: fe.default.bool,
      startDate: fe.default.instanceOf(Date),
      setOpen: fe.default.func,
      shouldCloseOnSelect: fe.default.bool,
      renderDayContents: fe.default.func,
      handleOnKeyDown: fe.default.func,
      isInputFocused: fe.default.bool,
      containerRef: fe.default.oneOfType([
        fe.default.func,
        fe.default.shape({ current: fe.default.instanceOf(Element) }),
      ]),
      monthShowsDuplicateDaysEnd: fe.default.bool,
      monthShowsDuplicateDaysStart: fe.default.bool,
    });
    var Ha = (function (e) {
      Mt(a, e);
      var t = xt(a);
      function a() {
        var e;
        gt(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          Ct(
            Pt((e = t.call.apply(t, [this].concat(n)))),
            "MONTH_REFS",
            Tt(Array(12)).map(function () {
              return ce.default.createRef();
            })
          ),
          Ct(Pt(e), "isDisabled", function (t) {
            return da(t, e.props);
          }),
          Ct(Pt(e), "isExcluded", function (t) {
            return ua(t, e.props);
          }),
          Ct(Pt(e), "handleDayClick", function (t, a) {
            e.props.onDayClick &&
              e.props.onDayClick(t, a, e.props.orderInDisplay);
          }),
          Ct(Pt(e), "handleDayMouseEnter", function (t) {
            e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
          }),
          Ct(Pt(e), "handleMouseLeave", function () {
            e.props.onMouseLeave && e.props.onMouseLeave();
          }),
          Ct(Pt(e), "isRangeStartMonth", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate;
            return !(!n || !o) && Zt(Be.default(r, t), n);
          }),
          Ct(Pt(e), "isRangeStartQuarter", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate;
            return !(!n || !o) && ea(je.default(r, t), n);
          }),
          Ct(Pt(e), "isRangeEndMonth", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate;
            return !(!n || !o) && Zt(Be.default(r, t), o);
          }),
          Ct(Pt(e), "isRangeEndQuarter", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate;
            return !(!n || !o) && ea(je.default(r, t), o);
          }),
          Ct(Pt(e), "isWeekInMonth", function (t) {
            var a = e.props.day,
              r = ge.default(t, 6);
            return Zt(t, a) || Zt(r, a);
          }),
          Ct(Pt(e), "isCurrentMonth", function (e, t) {
            return Re.default(e) === Re.default(qt()) && t === Ye.default(qt());
          }),
          Ct(Pt(e), "isSelectedMonth", function (e, t, a) {
            return Ye.default(e) === t && Re.default(e) === Re.default(a);
          }),
          Ct(Pt(e), "isSelectedQuarter", function (e, t, a) {
            return Le.default(e) === t && Re.default(e) === Re.default(a);
          }),
          Ct(Pt(e), "renderWeeks", function () {
            for (
              var t = [],
                a = e.props.fixedHeight,
                r = 0,
                n = !1,
                o = Ut(
                  $t(e.props.day),
                  e.props.locale,
                  e.props.calendarStartDay
                );
              t.push(
                ce.default.createElement(Ka, {
                  ariaLabelPrefix: e.props.weekAriaLabelPrefix,
                  chooseDayAriaLabelPrefix: e.props.chooseDayAriaLabelPrefix,
                  disabledDayAriaLabelPrefix:
                    e.props.disabledDayAriaLabelPrefix,
                  key: r,
                  day: o,
                  month: Ye.default(e.props.day),
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
                  selectsDisabledDaysInRange:
                    e.props.selectsDisabledDaysInRange,
                  showWeekNumber: e.props.showWeekNumbers,
                  startDate: e.props.startDate,
                  endDate: e.props.endDate,
                  dayClassName: e.props.dayClassName,
                  setOpen: e.props.setOpen,
                  shouldCloseOnSelect: e.props.shouldCloseOnSelect,
                  disabledKeyboardNavigation:
                    e.props.disabledKeyboardNavigation,
                  renderDayContents: e.props.renderDayContents,
                  handleOnKeyDown: e.props.handleOnKeyDown,
                  isInputFocused: e.props.isInputFocused,
                  containerRef: e.props.containerRef,
                  calendarStartDay: e.props.calendarStartDay,
                  monthShowsDuplicateDaysEnd:
                    e.props.monthShowsDuplicateDaysEnd,
                  monthShowsDuplicateDaysStart:
                    e.props.monthShowsDuplicateDaysStart,
                })
              ),
                !n;

            ) {
              r++, (o = we.default(o, 1));
              var s = a && r >= 6,
                l = !a && !e.isWeekInMonth(o);
              if (s || l) {
                if (!e.props.peekNextMonth) break;
                n = !0;
              }
            }
            return t;
          }),
          Ct(Pt(e), "onMonthClick", function (t, a) {
            e.handleDayClick($t(Be.default(e.props.day, a)), t);
          }),
          Ct(Pt(e), "handleMonthNavigation", function (t, a) {
            e.isDisabled(a) ||
              e.isExcluded(a) ||
              (e.props.setPreSelection(a),
              e.MONTH_REFS[t].current && e.MONTH_REFS[t].current.focus());
          }),
          Ct(Pt(e), "onMonthKeyDown", function (t, a) {
            t.preventDefault();
            var r = t.key;
            if (!e.props.disabledKeyboardNavigation)
              switch (r) {
                case "Enter":
                  e.onMonthClick(t, a),
                    e.props.setPreSelection(e.props.selected);
                  break;
                case "ArrowRight":
                  e.handleMonthNavigation(
                    11 === a ? 0 : a + 1,
                    ke.default(e.props.preSelection, 1)
                  );
                  break;
                case "ArrowLeft":
                  e.handleMonthNavigation(
                    0 === a ? 11 : a - 1,
                    Oe.default(e.props.preSelection, 1)
                  );
                  break;
                case "ArrowUp":
                  e.handleMonthNavigation(
                    a >= 0 && a <= 2 ? a + 9 : a - 3,
                    Oe.default(e.props.preSelection, 3)
                  );
                  break;
                case "ArrowDown":
                  e.handleMonthNavigation(
                    a >= 9 && a <= 11 ? a - 9 : a + 3,
                    ke.default(e.props.preSelection, 3)
                  );
              }
          }),
          Ct(Pt(e), "onQuarterClick", function (t, a) {
            e.handleDayClick(Gt(je.default(e.props.day, a)), t);
          }),
          Ct(Pt(e), "getMonthClassNames", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate,
              s = a.selected,
              l = a.minDate,
              i = a.maxDate,
              d = a.preSelection,
              u = a.monthClassName,
              p = a.excludeDates,
              c = a.includeDates,
              f = u ? u(r) : void 0,
              h = Be.default(r, t);
            return he.default(
              "react-datepicker__month-text",
              "react-datepicker__month-".concat(t),
              f,
              {
                "react-datepicker__month--disabled":
                  (l || i || p || c) && pa(h, e.props),
                "react-datepicker__month--selected": e.isSelectedMonth(r, t, s),
                "react-datepicker__month-text--keyboard-selected":
                  !e.props.disabledKeyboardNavigation && Ye.default(d) === t,
                "react-datepicker__month--in-range": ca(n, o, t, r),
                "react-datepicker__month--range-start": e.isRangeStartMonth(t),
                "react-datepicker__month--range-end": e.isRangeEndMonth(t),
                "react-datepicker__month-text--today": e.isCurrentMonth(r, t),
              }
            );
          }),
          Ct(Pt(e), "getTabIndex", function (t) {
            var a = Ye.default(e.props.preSelection);
            return e.props.disabledKeyboardNavigation || t !== a ? "-1" : "0";
          }),
          Ct(Pt(e), "getAriaLabel", function (t) {
            var a = e.props,
              r = a.chooseDayAriaLabelPrefix,
              n = void 0 === r ? "Choose" : r,
              o = a.disabledDayAriaLabelPrefix,
              s = void 0 === o ? "Not available" : o,
              l = a.day,
              i = Be.default(l, t),
              d = e.isDisabled(i) || e.isExcluded(i) ? s : n;
            return "".concat(d, " ").concat(jt(i, "MMMM yyyy"));
          }),
          Ct(Pt(e), "getQuarterClassNames", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate,
              s = a.selected,
              l = a.minDate,
              i = a.maxDate;
            return he.default(
              "react-datepicker__quarter-text",
              "react-datepicker__quarter-".concat(t),
              {
                "react-datepicker__quarter--disabled":
                  (l || i) && fa(je.default(r, t), e.props),
                "react-datepicker__quarter--selected": e.isSelectedQuarter(
                  r,
                  t,
                  s
                ),
                "react-datepicker__quarter--in-range": ma(n, o, t, r),
                "react-datepicker__quarter--range-start":
                  e.isRangeStartQuarter(t),
                "react-datepicker__quarter--range-end": e.isRangeEndQuarter(t),
              }
            );
          }),
          Ct(Pt(e), "renderMonths", function () {
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
              return ce.default.createElement(
                "div",
                { className: "react-datepicker__month-wrapper", key: r },
                t.map(function (t, r) {
                  return ce.default.createElement(
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
                    a ? sa(t, o) : la(t, o)
                  );
                })
              );
            });
          }),
          Ct(Pt(e), "renderQuarters", function () {
            var t = e.props,
              a = t.day,
              r = t.selected;
            return ce.default.createElement(
              "div",
              { className: "react-datepicker__quarter-wrapper" },
              [1, 2, 3, 4].map(function (t, n) {
                return ce.default.createElement(
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
                  ia(t, e.props.locale)
                );
              })
            );
          }),
          Ct(Pt(e), "getClassNames", function () {
            var t = e.props;
            t.day;
            var a = t.selectingDate,
              r = t.selectsStart,
              n = t.selectsEnd,
              o = t.showMonthYearPicker,
              s = t.showQuarterYearPicker;
            return he.default(
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
        kt(a, [
          {
            key: "render",
            value: function () {
              var e = this.props,
                t = e.showMonthYearPicker,
                a = e.showQuarterYearPicker,
                r = e.day,
                n = e.ariaLabelPrefix,
                o = void 0 === n ? "month " : n;
              return ce.default.createElement(
                "div",
                {
                  className: this.getClassNames(),
                  onMouseLeave: this.handleMouseLeave,
                  "aria-label": "".concat(o, " ").concat(jt(r, "yyyy-MM")),
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
    })(ce.default.Component);
    Ct(Ha, "propTypes", {
      ariaLabelPrefix: fe.default.string,
      chooseDayAriaLabelPrefix: fe.default.string,
      disabledDayAriaLabelPrefix: fe.default.string,
      disabledKeyboardNavigation: fe.default.bool,
      day: fe.default.instanceOf(Date).isRequired,
      dayClassName: fe.default.func,
      monthClassName: fe.default.func,
      endDate: fe.default.instanceOf(Date),
      orderInDisplay: fe.default.number,
      excludeDates: fe.default.array,
      excludeDateIntervals: fe.default.arrayOf(
        fe.default.shape({
          start: fe.default.instanceOf(Date),
          end: fe.default.instanceOf(Date),
        })
      ),
      filterDate: fe.default.func,
      fixedHeight: fe.default.bool,
      formatWeekNumber: fe.default.func,
      highlightDates: fe.default.instanceOf(Map),
      includeDates: fe.default.array,
      includeDateIntervals: fe.default.array,
      inline: fe.default.bool,
      shouldFocusDayInline: fe.default.bool,
      locale: fe.default.oneOfType([
        fe.default.string,
        fe.default.shape({ locale: fe.default.object }),
      ]),
      maxDate: fe.default.instanceOf(Date),
      minDate: fe.default.instanceOf(Date),
      onDayClick: fe.default.func,
      onDayMouseEnter: fe.default.func,
      onMouseLeave: fe.default.func,
      onWeekSelect: fe.default.func,
      peekNextMonth: fe.default.bool,
      preSelection: fe.default.instanceOf(Date),
      setPreSelection: fe.default.func,
      selected: fe.default.instanceOf(Date),
      selectingDate: fe.default.instanceOf(Date),
      calendarStartDay: fe.default.number,
      selectsEnd: fe.default.bool,
      selectsStart: fe.default.bool,
      selectsRange: fe.default.bool,
      selectsDisabledDaysInRange: fe.default.bool,
      showWeekNumbers: fe.default.bool,
      startDate: fe.default.instanceOf(Date),
      setOpen: fe.default.func,
      shouldCloseOnSelect: fe.default.bool,
      renderDayContents: fe.default.func,
      showMonthYearPicker: fe.default.bool,
      showFullMonthYearPicker: fe.default.bool,
      showTwoColumnMonthYearPicker: fe.default.bool,
      showFourColumnMonthYearPicker: fe.default.bool,
      showQuarterYearPicker: fe.default.bool,
      handleOnKeyDown: fe.default.func,
      isInputFocused: fe.default.bool,
      weekAriaLabelPrefix: fe.default.string,
      containerRef: fe.default.oneOfType([
        fe.default.func,
        fe.default.shape({ current: fe.default.instanceOf(Element) }),
      ]),
      monthShowsDuplicateDaysEnd: fe.default.bool,
      monthShowsDuplicateDaysStart: fe.default.bool,
    });
    var Qa = (function (e) {
      Mt(a, e);
      var t = xt(a);
      function a() {
        var e;
        gt(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          Ct(Pt((e = t.call.apply(t, [this].concat(n)))), "state", {
            height: null,
          }),
          Ct(Pt(e), "handleClick", function (t) {
            ((e.props.minTime || e.props.maxTime) && va(t, e.props)) ||
              ((e.props.excludeTimes ||
                e.props.includeTimes ||
                e.props.filterTime) &&
                ba(t, e.props)) ||
              e.props.onChange(t);
          }),
          Ct(Pt(e), "isSelectedTime", function (t, a, r) {
            return (
              e.props.selected && a === xe.default(t) && r === Ne.default(t)
            );
          }),
          Ct(Pt(e), "liClasses", function (t, a, r) {
            var n = [
              "react-datepicker__time-list-item",
              e.props.timeClassName ? e.props.timeClassName(t, a, r) : void 0,
            ];
            return (
              e.isSelectedTime(t, a, r) &&
                n.push("react-datepicker__time-list-item--selected"),
              (((e.props.minTime || e.props.maxTime) && va(t, e.props)) ||
                ((e.props.excludeTimes ||
                  e.props.includeTimes ||
                  e.props.filterTime) &&
                  ba(t, e.props))) &&
                n.push("react-datepicker__time-list-item--disabled"),
              e.props.injectTimes &&
                (60 * xe.default(t) + Ne.default(t)) % e.props.intervals != 0 &&
                n.push("react-datepicker__time-list-item--injected"),
              n.join(" ")
            );
          }),
          Ct(Pt(e), "handleOnKeyDown", function (t, a) {
            " " === t.key && (t.preventDefault(), (t.key = "Enter")),
              "Enter" === t.key && e.handleClick(a),
              e.props.handleOnKeyDown(t);
          }),
          Ct(Pt(e), "renderTimes", function () {
            for (
              var t = [],
                a = e.props.format ? e.props.format : "p",
                r = e.props.intervals,
                n = Vt(qt(e.props.selected)),
                o = 1440 / r,
                s =
                  e.props.injectTimes &&
                  e.props.injectTimes.sort(function (e, t) {
                    return e - t;
                  }),
                l = e.props.selected || e.props.openToDate || qt(),
                i = xe.default(l),
                d = Ne.default(l),
                u = We.default(qe.default(n, d), i),
                p = 0;
              p < o;
              p++
            ) {
              var c = be.default(n, p * r);
              if ((t.push(c), s)) {
                var f = _a(n, c, p, r, s);
                t = t.concat(f);
              }
            }
            return t.map(function (t, r) {
              return ce.default.createElement(
                "li",
                {
                  key: r,
                  onClick: e.handleClick.bind(Pt(e), t),
                  className: e.liClasses(t, i, d),
                  ref: function (a) {
                    (dt.default(t, u) || aa(t, u)) && (e.centerLi = a);
                  },
                  onKeyDown: function (a) {
                    e.handleOnKeyDown(a, t);
                  },
                  tabIndex: "0",
                  "aria-selected": e.isSelectedTime(t, i, d) ? "true" : void 0,
                },
                jt(t, a, e.props.locale)
              );
            });
          }),
          e
        );
      }
      return (
        kt(
          a,
          [
            {
              key: "componentDidMount",
              value: function () {
                (this.list.scrollTop =
                  this.centerLi &&
                  a.calcCenterPosition(
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
                var e = this,
                  t = this.state.height;
                return ce.default.createElement(
                  "div",
                  {
                    className: "react-datepicker__time-container ".concat(
                      this.props.todayButton
                        ? "react-datepicker__time-container--with-today-button"
                        : ""
                    ),
                  },
                  ce.default.createElement(
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
                    ce.default.createElement(
                      "div",
                      { className: "react-datepicker-time__header" },
                      this.props.timeCaption
                    )
                  ),
                  ce.default.createElement(
                    "div",
                    { className: "react-datepicker__time" },
                    ce.default.createElement(
                      "div",
                      { className: "react-datepicker__time-box" },
                      ce.default.createElement(
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
    })(ce.default.Component);
    Ct(Qa, "calcCenterPosition", function (e, t) {
      return t.offsetTop - (e / 2 - t.clientHeight / 2);
    }),
      Ct(Qa, "propTypes", {
        format: fe.default.string,
        includeTimes: fe.default.array,
        intervals: fe.default.number,
        selected: fe.default.instanceOf(Date),
        openToDate: fe.default.instanceOf(Date),
        onChange: fe.default.func,
        timeClassName: fe.default.func,
        todayButton: fe.default.node,
        minTime: fe.default.instanceOf(Date),
        maxTime: fe.default.instanceOf(Date),
        excludeTimes: fe.default.array,
        filterTime: fe.default.func,
        monthRef: fe.default.object,
        timeCaption: fe.default.string,
        injectTimes: fe.default.array,
        handleOnKeyDown: fe.default.func,
        locale: fe.default.oneOfType([
          fe.default.string,
          fe.default.shape({ locale: fe.default.object }),
        ]),
        showTimeSelectOnly: fe.default.bool,
      });
    var Va = (function (e) {
      Mt(a, e);
      var t = xt(a);
      function a(e) {
        var r;
        return (
          gt(this, a),
          Ct(
            Pt((r = t.call(this, e))),
            "YEAR_REFS",
            Tt(Array(r.props.yearItemNumber)).map(function () {
              return ce.default.createRef();
            })
          ),
          Ct(Pt(r), "isDisabled", function (e) {
            return da(e, r.props);
          }),
          Ct(Pt(r), "isExcluded", function (e) {
            return ua(e, r.props);
          }),
          Ct(Pt(r), "updateFocusOnPaginate", function (e) {
            var t = function () {
              this.YEAR_REFS[e].current.focus();
            }.bind(Pt(r));
            window.requestAnimationFrame(t);
          }),
          Ct(Pt(r), "handleYearClick", function (e, t) {
            r.props.onDayClick && r.props.onDayClick(e, t);
          }),
          Ct(Pt(r), "handleYearNavigation", function (e, t) {
            var a = r.props,
              n = a.date,
              o = a.yearItemNumber,
              s = Na(n, o).startPeriod;
            r.isDisabled(t) ||
              r.isExcluded(t) ||
              (r.props.setPreSelection(t),
              e - s == -1
                ? r.updateFocusOnPaginate(o - 1)
                : e - s === o
                ? r.updateFocusOnPaginate(0)
                : r.YEAR_REFS[e - s].current.focus());
          }),
          Ct(Pt(r), "isSameDay", function (e, t) {
            return ta(e, t);
          }),
          Ct(Pt(r), "isCurrentYear", function (e) {
            return e === Re.default(qt());
          }),
          Ct(Pt(r), "isKeyboardSelected", function (e) {
            var t = zt(Ke.default(r.props.date, e));
            return (
              !r.props.disabledKeyboardNavigation &&
              !r.props.inline &&
              !ta(t, zt(r.props.selected)) &&
              ta(t, zt(r.props.preSelection))
            );
          }),
          Ct(Pt(r), "onYearClick", function (e, t) {
            var a = r.props.date;
            r.handleYearClick(zt(Ke.default(a, t)), e);
          }),
          Ct(Pt(r), "onYearKeyDown", function (e, t) {
            var a = e.key;
            if (!r.props.disabledKeyboardNavigation)
              switch (a) {
                case "Enter":
                  r.onYearClick(e, t),
                    r.props.setPreSelection(r.props.selected);
                  break;
                case "ArrowRight":
                  r.handleYearNavigation(
                    t + 1,
                    Ce.default(r.props.preSelection, 1)
                  );
                  break;
                case "ArrowLeft":
                  r.handleYearNavigation(
                    t - 1,
                    _e.default(r.props.preSelection, 1)
                  );
              }
          }),
          Ct(Pt(r), "getYearClassNames", function (e) {
            var t = r.props,
              a = t.minDate,
              n = t.maxDate,
              o = t.selected,
              s = t.excludeDates,
              l = t.includeDates,
              i = t.filterDate;
            return he.default("react-datepicker__year-text", {
              "react-datepicker__year-text--selected": e === Re.default(o),
              "react-datepicker__year-text--disabled":
                (a || n || s || l || i) && ha(e, r.props),
              "react-datepicker__year-text--keyboard-selected":
                r.isKeyboardSelected(e),
              "react-datepicker__year-text--today": r.isCurrentYear(e),
            });
          }),
          Ct(Pt(r), "getYearTabIndex", function (e) {
            return r.props.disabledKeyboardNavigation
              ? "-1"
              : e === Re.default(r.props.preSelection)
              ? "0"
              : "-1";
          }),
          r
        );
      }
      return (
        kt(a, [
          {
            key: "render",
            value: function () {
              for (
                var e = this,
                  t = [],
                  a = this.props,
                  r = Na(a.date, a.yearItemNumber),
                  n = r.startPeriod,
                  o = r.endPeriod,
                  s = function (a) {
                    t.push(
                      ce.default.createElement(
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
              return ce.default.createElement(
                "div",
                { className: "react-datepicker__year" },
                ce.default.createElement(
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
    })(ce.default.Component);
    Ct(Va, "propTypes", {
      date: fe.default.string,
      disabledKeyboardNavigation: fe.default.bool,
      onDayClick: fe.default.func,
      preSelection: fe.default.instanceOf(Date),
      setPreSelection: fe.default.func,
      selected: fe.default.object,
      inline: fe.default.bool,
      maxDate: fe.default.instanceOf(Date),
      minDate: fe.default.instanceOf(Date),
      excludeDates: fe.default.array,
      includeDates: fe.default.array,
      filterDate: fe.default.func,
      yearItemNumber: fe.default.number,
    });
    var Ua = (function (e) {
      Mt(a, e);
      var t = xt(a);
      function a(e) {
        var r;
        return (
          gt(this, a),
          Ct(Pt((r = t.call(this, e))), "onTimeChange", function (e) {
            r.setState({ time: e });
            var t = new Date();
            t.setHours(e.split(":")[0]),
              t.setMinutes(e.split(":")[1]),
              r.props.onChange(t);
          }),
          Ct(Pt(r), "renderTimeInput", function () {
            var e = r.state.time,
              t = r.props,
              a = t.date,
              n = t.timeString,
              o = t.customTimeInput;
            return o
              ? ce.default.cloneElement(o, {
                  date: a,
                  value: e,
                  onChange: r.onTimeChange,
                })
              : ce.default.createElement("input", {
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
        kt(
          a,
          [
            {
              key: "render",
              value: function () {
                return ce.default.createElement(
                  "div",
                  { className: "react-datepicker__input-time-container" },
                  ce.default.createElement(
                    "div",
                    { className: "react-datepicker-time__caption" },
                    this.props.timeInputLabel
                  ),
                  ce.default.createElement(
                    "div",
                    { className: "react-datepicker-time__input-container" },
                    ce.default.createElement(
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
    })(ce.default.Component);
    function $a(e) {
      var t = e.className,
        a = e.children,
        r = e.showPopperArrow,
        n = e.arrowProps,
        o = void 0 === n ? {} : n;
      return ce.default.createElement(
        "div",
        { className: t },
        r &&
          ce.default.createElement(
            "div",
            St({ className: "react-datepicker__triangle" }, o)
          ),
        a
      );
    }
    Ct(Ua, "propTypes", {
      onChange: fe.default.func,
      date: fe.default.instanceOf(Date),
      timeString: fe.default.string,
      timeInputLabel: fe.default.string,
      customTimeInput: fe.default.element,
    }),
      ($a.propTypes = {
        className: fe.default.string,
        children: fe.default.node,
        arrowProps: fe.default.object,
        showPopperArrow: fe.default.bool,
      });
    var za = [
        "react-datepicker__year-select",
        "react-datepicker__month-select",
        "react-datepicker__month-year-select",
      ],
      Ga = (function (e) {
        Mt(a, e);
        var t = xt(a);
        function a(e) {
          var r;
          return (
            gt(this, a),
            Ct(Pt((r = t.call(this, e))), "handleClickOutside", function (e) {
              r.props.onClickOutside(e);
            }),
            Ct(Pt(r), "setClickOutsideRef", function () {
              return r.containerRef.current;
            }),
            Ct(Pt(r), "handleDropdownFocus", function (e) {
              (function () {
                var e = (
                  (arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                  ).className || ""
                ).split(/\s+/);
                return za.some(function (t) {
                  return e.indexOf(t) >= 0;
                });
              })(e.target) && r.props.onDropdownFocus();
            }),
            Ct(Pt(r), "getDateInView", function () {
              var e = r.props,
                t = e.preSelection,
                a = e.selected,
                n = e.openToDate,
                o = Sa(r.props),
                s = Ma(r.props),
                l = qt(),
                i = n || a || t;
              return (
                i || (o && dt.default(l, o) ? o : s && it.default(l, s) ? s : l)
              );
            }),
            Ct(Pt(r), "increaseMonth", function () {
              r.setState(
                function (e) {
                  var t = e.date;
                  return { date: ke.default(t, 1) };
                },
                function () {
                  return r.handleMonthChange(r.state.date);
                }
              );
            }),
            Ct(Pt(r), "decreaseMonth", function () {
              r.setState(
                function (e) {
                  var t = e.date;
                  return { date: Oe.default(t, 1) };
                },
                function () {
                  return r.handleMonthChange(r.state.date);
                }
              );
            }),
            Ct(Pt(r), "handleDayClick", function (e, t, a) {
              r.props.onSelect(e, t, a),
                r.props.setPreSelection && r.props.setPreSelection(e);
            }),
            Ct(Pt(r), "handleDayMouseEnter", function (e) {
              r.setState({ selectingDate: e }),
                r.props.onDayMouseEnter && r.props.onDayMouseEnter(e);
            }),
            Ct(Pt(r), "handleMonthMouseLeave", function () {
              r.setState({ selectingDate: null }),
                r.props.onMonthMouseLeave && r.props.onMonthMouseLeave();
            }),
            Ct(Pt(r), "handleYearChange", function (e) {
              r.props.onYearChange && r.props.onYearChange(e),
                r.props.adjustDateOnChange &&
                  (r.props.onSelect && r.props.onSelect(e),
                  r.props.setOpen && r.props.setOpen(!0)),
                r.props.setPreSelection && r.props.setPreSelection(e);
            }),
            Ct(Pt(r), "handleMonthChange", function (e) {
              r.props.onMonthChange && r.props.onMonthChange(e),
                r.props.adjustDateOnChange &&
                  (r.props.onSelect && r.props.onSelect(e),
                  r.props.setOpen && r.props.setOpen(!0)),
                r.props.setPreSelection && r.props.setPreSelection(e);
            }),
            Ct(Pt(r), "handleMonthYearChange", function (e) {
              r.handleYearChange(e), r.handleMonthChange(e);
            }),
            Ct(Pt(r), "changeYear", function (e) {
              r.setState(
                function (t) {
                  var a = t.date;
                  return { date: Ke.default(a, e) };
                },
                function () {
                  return r.handleYearChange(r.state.date);
                }
              );
            }),
            Ct(Pt(r), "changeMonth", function (e) {
              r.setState(
                function (t) {
                  var a = t.date;
                  return { date: Be.default(a, e) };
                },
                function () {
                  return r.handleMonthChange(r.state.date);
                }
              );
            }),
            Ct(Pt(r), "changeMonthYear", function (e) {
              r.setState(
                function (t) {
                  var a = t.date;
                  return {
                    date: Ke.default(
                      Be.default(a, Ye.default(e)),
                      Re.default(e)
                    ),
                  };
                },
                function () {
                  return r.handleMonthYearChange(r.state.date);
                }
              );
            }),
            Ct(Pt(r), "header", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : r.state.date,
                t = Ut(e, r.props.locale, r.props.calendarStartDay),
                a = [];
              return (
                r.props.showWeekNumbers &&
                  a.push(
                    ce.default.createElement(
                      "div",
                      { key: "W", className: "react-datepicker__day-name" },
                      r.props.weekLabel || "#"
                    )
                  ),
                a.concat(
                  [0, 1, 2, 3, 4, 5, 6].map(function (e) {
                    var a = ge.default(t, e),
                      n = r.formatWeekday(a, r.props.locale),
                      o = r.props.weekDayClassName
                        ? r.props.weekDayClassName(a)
                        : void 0;
                    return ce.default.createElement(
                      "div",
                      {
                        key: e,
                        className: he.default("react-datepicker__day-name", o),
                      },
                      n
                    );
                  })
                )
              );
            }),
            Ct(Pt(r), "formatWeekday", function (e, t) {
              return r.props.formatWeekDay
                ? (function (e, t, a) {
                    return "function" == typeof t ? t(e, a) : jt(e, "EEEE", a);
                  })(e, r.props.formatWeekDay, t)
                : r.props.useWeekdaysShort
                ? (function (e, t) {
                    return jt(e, "EEE", t);
                  })(e, t)
                : (function (e, t) {
                    return jt(e, "EEEEEE", t);
                  })(e, t);
            }),
            Ct(Pt(r), "decreaseYear", function () {
              r.setState(
                function (e) {
                  var t = e.date;
                  return {
                    date: _e.default(
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
            Ct(Pt(r), "renderPreviousButton", function () {
              if (!r.props.renderCustomHeader) {
                var e;
                switch (!0) {
                  case r.props.showMonthYearPicker:
                    e = ka(r.state.date, r.props);
                    break;
                  case r.props.showYearPicker:
                    e = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        a = t.minDate,
                        r = t.yearItemNumber,
                        n = void 0 === r ? Ft : r,
                        o = Na(zt(_e.default(e, n)), n).endPeriod,
                        s = a && Re.default(a);
                      return (s && s > o) || !1;
                    })(r.state.date, r.props);
                    break;
                  default:
                    e = ga(r.state.date, r.props);
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
                      (t.push(
                        "react-datepicker__navigation--previous--disabled"
                      ),
                      (a = null));
                  var n =
                      r.props.showMonthYearPicker ||
                      r.props.showQuarterYearPicker ||
                      r.props.showYearPicker,
                    o = r.props,
                    s = o.previousMonthButtonLabel,
                    l = o.previousYearButtonLabel,
                    i = r.props,
                    d = i.previousMonthAriaLabel,
                    u =
                      void 0 === d
                        ? "string" == typeof s
                          ? s
                          : "Previous Month"
                        : d,
                    p = i.previousYearAriaLabel,
                    c =
                      void 0 === p
                        ? "string" == typeof l
                          ? l
                          : "Previous Year"
                        : p;
                  return ce.default.createElement(
                    "button",
                    {
                      type: "button",
                      className: t.join(" "),
                      onClick: a,
                      onKeyDown: r.props.handleOnKeyDown,
                      "aria-label": n ? c : u,
                    },
                    ce.default.createElement(
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
            Ct(Pt(r), "increaseYear", function () {
              r.setState(
                function (e) {
                  var t = e.date;
                  return {
                    date: Ce.default(
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
            Ct(Pt(r), "renderNextButton", function () {
              if (!r.props.renderCustomHeader) {
                var e;
                switch (!0) {
                  case r.props.showMonthYearPicker:
                    e = Ca(r.state.date, r.props);
                    break;
                  case r.props.showYearPicker:
                    e = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        a = t.maxDate,
                        r = t.yearItemNumber,
                        n = void 0 === r ? Ft : r,
                        o = Na(Ce.default(e, n), n).startPeriod,
                        s = a && Re.default(a);
                      return (s && s < o) || !1;
                    })(r.state.date, r.props);
                    break;
                  default:
                    e = wa(r.state.date, r.props);
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
                    d = i.nextMonthAriaLabel,
                    u =
                      void 0 === d
                        ? "string" == typeof s
                          ? s
                          : "Next Month"
                        : d,
                    p = i.nextYearAriaLabel,
                    c =
                      void 0 === p
                        ? "string" == typeof l
                          ? l
                          : "Next Year"
                        : p;
                  return ce.default.createElement(
                    "button",
                    {
                      type: "button",
                      className: t.join(" "),
                      onClick: a,
                      onKeyDown: r.props.handleOnKeyDown,
                      "aria-label": n ? c : u,
                    },
                    ce.default.createElement(
                      "span",
                      {
                        className: [
                          "react-datepicker__navigation-icon",
                          "react-datepicker__navigation-icon--next",
                        ].join(" "),
                      },
                      n
                        ? r.props.nextYearButtonLabel
                        : r.props.nextMonthButtonLabel
                    )
                  );
                }
              }
            }),
            Ct(Pt(r), "renderCurrentMonth", function () {
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
                  t.push(
                    "react-datepicker__current-month--hasMonthYearDropdown"
                  ),
                ce.default.createElement(
                  "div",
                  { className: t.join(" ") },
                  jt(e, r.props.dateFormat, r.props.locale)
                )
              );
            }),
            Ct(Pt(r), "renderYearDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (r.props.showYearDropdown && !e)
                return ce.default.createElement(Ea, {
                  adjustDateOnChange: r.props.adjustDateOnChange,
                  date: r.state.date,
                  onSelect: r.props.onSelect,
                  setOpen: r.props.setOpen,
                  dropdownMode: r.props.dropdownMode,
                  onChange: r.changeYear,
                  minDate: r.props.minDate,
                  maxDate: r.props.maxDate,
                  year: Re.default(r.state.date),
                  scrollableYearDropdown: r.props.scrollableYearDropdown,
                  yearDropdownItemNumber: r.props.yearDropdownItemNumber,
                });
            }),
            Ct(Pt(r), "renderMonthDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (r.props.showMonthDropdown && !e)
                return ce.default.createElement(Ra, {
                  dropdownMode: r.props.dropdownMode,
                  locale: r.props.locale,
                  onChange: r.changeMonth,
                  month: Ye.default(r.state.date),
                  useShortMonthInDropdown: r.props.useShortMonthInDropdown,
                });
            }),
            Ct(Pt(r), "renderMonthYearDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (r.props.showMonthYearDropdown && !e)
                return ce.default.createElement(Wa, {
                  dropdownMode: r.props.dropdownMode,
                  locale: r.props.locale,
                  dateFormat: r.props.dateFormat,
                  onChange: r.changeMonthYear,
                  minDate: r.props.minDate,
                  maxDate: r.props.maxDate,
                  date: r.state.date,
                  scrollableMonthYearDropdown:
                    r.props.scrollableMonthYearDropdown,
                });
            }),
            Ct(Pt(r), "handleTodayButtonClick", function (e) {
              r.props.onSelect(Jt(), e),
                r.props.setPreSelection && r.props.setPreSelection(Jt());
            }),
            Ct(Pt(r), "renderTodayButton", function () {
              if (r.props.todayButton && !r.props.showTimeSelectOnly)
                return ce.default.createElement(
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
            Ct(Pt(r), "renderDefaultHeader", function (e) {
              var t = e.monthDate,
                a = e.i;
              return ce.default.createElement(
                "div",
                {
                  className: "react-datepicker__header ".concat(
                    r.props.showTimeSelect
                      ? "react-datepicker__header--has-time-select"
                      : ""
                  ),
                },
                r.renderCurrentMonth(t),
                ce.default.createElement(
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
                ce.default.createElement(
                  "div",
                  { className: "react-datepicker__day-names" },
                  r.header(t)
                )
              );
            }),
            Ct(Pt(r), "renderCustomHeader", function () {
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
              var n = ga(r.state.date, r.props),
                o = wa(r.state.date, r.props),
                s = ka(r.state.date, r.props),
                l = Ca(r.state.date, r.props),
                i =
                  !r.props.showMonthYearPicker &&
                  !r.props.showQuarterYearPicker &&
                  !r.props.showYearPicker;
              return ce.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker__header--custom",
                  onFocus: r.props.onDropdownFocus,
                },
                r.props.renderCustomHeader(
                  bt(
                    bt({}, r.state),
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
                  ce.default.createElement(
                    "div",
                    { className: "react-datepicker__day-names" },
                    r.header(t)
                  )
              );
            }),
            Ct(Pt(r), "renderYearHeader", function () {
              var e = r.state.date,
                t = r.props,
                a = t.showYearPicker,
                n = Na(e, t.yearItemNumber),
                o = n.startPeriod,
                s = n.endPeriod;
              return ce.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker-year-header",
                },
                a ? "".concat(o, " - ").concat(s) : Re.default(e)
              );
            }),
            Ct(Pt(r), "renderHeader", function (e) {
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
            Ct(Pt(r), "renderMonths", function () {
              if (!r.props.showTimeSelectOnly && !r.props.showYearPicker) {
                for (
                  var e = [],
                    t = r.props.showPreviousMonths
                      ? r.props.monthsShown - 1
                      : 0,
                    a = Oe.default(r.state.date, t),
                    n = 0;
                  n < r.props.monthsShown;
                  ++n
                ) {
                  var o = n - r.props.monthSelectedIn,
                    s = ke.default(a, o),
                    l = "month-".concat(n),
                    i = n < r.props.monthsShown - 1,
                    d = n > 0;
                  e.push(
                    ce.default.createElement(
                      "div",
                      {
                        key: l,
                        ref: function (e) {
                          r.monthContainer = e;
                        },
                        className: "react-datepicker__month-container",
                      },
                      r.renderHeader({ monthDate: s, i: n }),
                      ce.default.createElement(Ha, {
                        chooseDayAriaLabelPrefix:
                          r.props.chooseDayAriaLabelPrefix,
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
                        showFullMonthYearPicker:
                          r.props.showFullMonthYearPicker,
                        showTwoColumnMonthYearPicker:
                          r.props.showTwoColumnMonthYearPicker,
                        showFourColumnMonthYearPicker:
                          r.props.showFourColumnMonthYearPicker,
                        showYearPicker: r.props.showYearPicker,
                        showQuarterYearPicker: r.props.showQuarterYearPicker,
                        isInputFocused: r.props.isInputFocused,
                        containerRef: r.containerRef,
                        monthShowsDuplicateDaysEnd: i,
                        monthShowsDuplicateDaysStart: d,
                      })
                    )
                  );
                }
                return e;
              }
            }),
            Ct(Pt(r), "renderYears", function () {
              if (!r.props.showTimeSelectOnly)
                return r.props.showYearPicker
                  ? ce.default.createElement(
                      "div",
                      { className: "react-datepicker__year--container" },
                      r.renderHeader(),
                      ce.default.createElement(
                        Va,
                        St(
                          { onDayClick: r.handleDayClick, date: r.state.date },
                          r.props
                        )
                      )
                    )
                  : void 0;
            }),
            Ct(Pt(r), "renderTimeSection", function () {
              if (
                r.props.showTimeSelect &&
                (r.state.monthContainer || r.props.showTimeSelectOnly)
              )
                return ce.default.createElement(Qa, {
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
            Ct(Pt(r), "renderInputTimeSection", function () {
              var e = new Date(r.props.selected),
                t =
                  Bt(e) && Boolean(r.props.selected)
                    ? ""
                        .concat(Pa(e.getHours()), ":")
                        .concat(Pa(e.getMinutes()))
                    : "";
              if (r.props.showTimeInput)
                return ce.default.createElement(Ua, {
                  date: e,
                  timeString: t,
                  timeInputLabel: r.props.timeInputLabel,
                  onChange: r.props.onTimeChange,
                  customTimeInput: r.props.customTimeInput,
                });
            }),
            Ct(Pt(r), "renderChildren", function () {
              if (r.props.children)
                return ce.default.createElement(
                  "div",
                  { className: "react-datepicker__children-container" },
                  r.props.children
                );
            }),
            (r.containerRef = ce.default.createRef()),
            (r.state = {
              date: r.getDateInView(),
              selectingDate: null,
              monthContainer: null,
            }),
            r
          );
        }
        return (
          kt(
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
                  !ta(this.props.preSelection, e.preSelection)
                    ? this.setState({ date: this.props.preSelection })
                    : this.props.openToDate &&
                      !ta(this.props.openToDate, e.openToDate) &&
                      this.setState({ date: this.props.openToDate });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.container || $a;
                  return ce.default.createElement(
                    "div",
                    { ref: this.containerRef },
                    ce.default.createElement(
                      e,
                      {
                        className: he.default(
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
                    yearItemNumber: Ft,
                  };
                },
              },
            ]
          ),
          a
        );
      })(ce.default.Component);
    Ct(Ga, "propTypes", {
      adjustDateOnChange: fe.default.bool,
      arrowProps: fe.default.object,
      chooseDayAriaLabelPrefix: fe.default.string,
      className: fe.default.string,
      children: fe.default.node,
      container: fe.default.func,
      dateFormat: fe.default.oneOfType([fe.default.string, fe.default.array])
        .isRequired,
      dayClassName: fe.default.func,
      weekDayClassName: fe.default.func,
      disabledDayAriaLabelPrefix: fe.default.string,
      monthClassName: fe.default.func,
      timeClassName: fe.default.func,
      disabledKeyboardNavigation: fe.default.bool,
      calendarStartDay: fe.default.number,
      dropdownMode: fe.default.oneOf(["scroll", "select"]),
      endDate: fe.default.instanceOf(Date),
      excludeDates: fe.default.array,
      excludeDateIntervals: fe.default.arrayOf(
        fe.default.shape({
          start: fe.default.instanceOf(Date),
          end: fe.default.instanceOf(Date),
        })
      ),
      filterDate: fe.default.func,
      fixedHeight: fe.default.bool,
      formatWeekNumber: fe.default.func,
      highlightDates: fe.default.instanceOf(Map),
      includeDates: fe.default.array,
      includeDateIntervals: fe.default.arrayOf(
        fe.default.shape({
          start: fe.default.instanceOf(Date),
          end: fe.default.instanceOf(Date),
        })
      ),
      includeTimes: fe.default.array,
      injectTimes: fe.default.array,
      inline: fe.default.bool,
      shouldFocusDayInline: fe.default.bool,
      locale: fe.default.oneOfType([
        fe.default.string,
        fe.default.shape({ locale: fe.default.object }),
      ]),
      maxDate: fe.default.instanceOf(Date),
      minDate: fe.default.instanceOf(Date),
      monthsShown: fe.default.number,
      monthSelectedIn: fe.default.number,
      nextMonthAriaLabel: fe.default.string,
      nextYearAriaLabel: fe.default.string,
      onClickOutside: fe.default.func.isRequired,
      onMonthChange: fe.default.func,
      onYearChange: fe.default.func,
      forceShowMonthNavigation: fe.default.bool,
      onDropdownFocus: fe.default.func,
      onSelect: fe.default.func.isRequired,
      onWeekSelect: fe.default.func,
      showTimeSelect: fe.default.bool,
      showTimeInput: fe.default.bool,
      showMonthYearPicker: fe.default.bool,
      showFullMonthYearPicker: fe.default.bool,
      showTwoColumnMonthYearPicker: fe.default.bool,
      showFourColumnMonthYearPicker: fe.default.bool,
      showYearPicker: fe.default.bool,
      showQuarterYearPicker: fe.default.bool,
      showTimeSelectOnly: fe.default.bool,
      timeFormat: fe.default.string,
      timeIntervals: fe.default.number,
      onTimeChange: fe.default.func,
      timeInputLabel: fe.default.string,
      minTime: fe.default.instanceOf(Date),
      maxTime: fe.default.instanceOf(Date),
      excludeTimes: fe.default.array,
      filterTime: fe.default.func,
      timeCaption: fe.default.string,
      openToDate: fe.default.instanceOf(Date),
      peekNextMonth: fe.default.bool,
      previousMonthAriaLabel: fe.default.string,
      previousYearAriaLabel: fe.default.string,
      scrollableYearDropdown: fe.default.bool,
      scrollableMonthYearDropdown: fe.default.bool,
      preSelection: fe.default.instanceOf(Date),
      selected: fe.default.instanceOf(Date),
      selectsEnd: fe.default.bool,
      selectsStart: fe.default.bool,
      selectsRange: fe.default.bool,
      selectsDisabledDaysInRange: fe.default.bool,
      showMonthDropdown: fe.default.bool,
      showPreviousMonths: fe.default.bool,
      showMonthYearDropdown: fe.default.bool,
      showWeekNumbers: fe.default.bool,
      showYearDropdown: fe.default.bool,
      startDate: fe.default.instanceOf(Date),
      todayButton: fe.default.string,
      useWeekdaysShort: fe.default.bool,
      formatWeekDay: fe.default.func,
      withPortal: fe.default.bool,
      weekLabel: fe.default.string,
      yearItemNumber: fe.default.number,
      yearDropdownItemNumber: fe.default.number,
      setOpen: fe.default.func,
      shouldCloseOnSelect: fe.default.bool,
      useShortMonthInDropdown: fe.default.bool,
      showDisabledMonthNavigation: fe.default.bool,
      previousMonthButtonLabel: fe.default.oneOfType([
        fe.default.string,
        fe.default.node,
      ]),
      nextMonthButtonLabel: fe.default.oneOfType([
        fe.default.string,
        fe.default.node,
      ]),
      previousYearButtonLabel: fe.default.string,
      nextYearButtonLabel: fe.default.string,
      renderCustomHeader: fe.default.func,
      renderDayContents: fe.default.func,
      onDayMouseEnter: fe.default.func,
      onMonthMouseLeave: fe.default.func,
      showPopperArrow: fe.default.bool,
      handleOnKeyDown: fe.default.func,
      handleOnDayKeyDown: fe.default.func,
      isInputFocused: fe.default.bool,
      customTimeInput: fe.default.element,
      weekAriaLabelPrefix: fe.default.string,
      monthAriaLabelPrefix: fe.default.string,
      setPreSelection: fe.default.func,
    });
    var Ja = (function (e) {
      Mt(a, e);
      var t = xt(a);
      function a(e) {
        var r;
        return (
          gt(this, a),
          ((r = t.call(this, e)).el = document.createElement("div")),
          r
        );
      }
      return (
        kt(a, [
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
              return mt.default.createPortal(this.props.children, this.el);
            },
          },
        ]),
        a
      );
    })(ce.default.Component);
    Ct(Ja, "propTypes", {
      children: fe.default.any,
      portalId: fe.default.string,
      portalHost: fe.default.instanceOf(ShadowRoot),
    });
    var Xa = []
        .concat(["top", "bottom", "right", "left"], ["auto"])
        .reduce(function (e, t) {
          return e.concat([t, t + "-start", t + "-end"]);
        }, []),
      Za = function (e) {
        return !e.disabled && -1 !== e.tabIndex;
      },
      er = (function (e) {
        Mt(a, e);
        var t = xt(a);
        function a(e) {
          var r;
          return (
            gt(this, a),
            Ct(Pt((r = t.call(this, e))), "getTabChildren", function () {
              return Array.prototype.slice
                .call(
                  r.tabLoopRef.current.querySelectorAll(
                    "[tabindex], a, button, input, select, textarea"
                  ),
                  1,
                  -1
                )
                .filter(Za);
            }),
            Ct(Pt(r), "handleFocusStart", function (e) {
              var t = r.getTabChildren();
              t && t.length > 1 && t[t.length - 1].focus();
            }),
            Ct(Pt(r), "handleFocusEnd", function (e) {
              var t = r.getTabChildren();
              t && t.length > 1 && t[0].focus();
            }),
            (r.tabLoopRef = ce.default.createRef()),
            r
          );
        }
        return (
          kt(
            a,
            [
              {
                key: "render",
                value: function () {
                  return this.props.enableTabLoop
                    ? ce.default.createElement(
                        "div",
                        {
                          className: "react-datepicker__tab-loop",
                          ref: this.tabLoopRef,
                        },
                        ce.default.createElement("div", {
                          className: "react-datepicker__tab-loop__start",
                          tabIndex: "0",
                          onFocus: this.handleFocusStart,
                        }),
                        this.props.children,
                        ce.default.createElement("div", {
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
      })(ce.default.Component);
    Ct(er, "propTypes", {
      children: fe.default.any,
      enableTabLoop: fe.default.bool,
    });
    var tr = Xa,
      ar = (function (e) {
        Mt(a, e);
        var t = xt(a);
        function a() {
          return gt(this, a), t.apply(this, arguments);
        }
        return (
          kt(
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
                    d = t.targetComponent,
                    u = t.enableTabLoop,
                    p = t.popperOnKeyDown,
                    c = t.portalId,
                    f = t.portalHost;
                  if (!n) {
                    var h = he.default("react-datepicker-popper", a);
                    e = ce.default.createElement(
                      de.Popper,
                      St({ modifiers: s, placement: l }, i),
                      function (e) {
                        var t = e.ref,
                          a = e.style,
                          r = e.placement,
                          n = e.arrowProps;
                        return ce.default.createElement(
                          er,
                          { enableTabLoop: u },
                          ce.default.createElement(
                            "div",
                            {
                              ref: t,
                              style: a,
                              className: h,
                              "data-placement": r,
                              onKeyDown: p,
                            },
                            ce.default.cloneElement(o, { arrowProps: n })
                          )
                        );
                      }
                    );
                  }
                  this.props.popperContainer &&
                    (e = ce.default.createElement(
                      this.props.popperContainer,
                      {},
                      e
                    )),
                    c &&
                      !n &&
                      (e = ce.default.createElement(
                        Ja,
                        { portalId: c, portalHost: f },
                        e
                      ));
                  var m = he.default("react-datepicker-wrapper", r);
                  return ce.default.createElement(
                    de.Manager,
                    { className: "react-datepicker-manager" },
                    ce.default.createElement(de.Reference, null, function (e) {
                      var t = e.ref;
                      return ce.default.createElement(
                        "div",
                        { ref: t, className: m },
                        d
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
      })(ce.default.Component);
    Ct(ar, "propTypes", {
      className: fe.default.string,
      wrapperClassName: fe.default.string,
      hidePopper: fe.default.bool,
      popperComponent: fe.default.element,
      popperModifiers: fe.default.arrayOf(fe.default.object),
      popperPlacement: fe.default.oneOf(tr),
      popperContainer: fe.default.func,
      popperProps: fe.default.object,
      targetComponent: fe.default.element,
      enableTabLoop: fe.default.bool,
      popperOnKeyDown: fe.default.func,
      portalId: fe.default.string,
      portalHost: fe.default.instanceOf(ShadowRoot),
    });
    var rr = "react-datepicker-ignore-onclickoutside",
      nr = ht.default(Ga);
    var or = "Date input not valid.",
      sr = (function (e) {
        Mt(a, e);
        var t = xt(a);
        function a(e) {
          var r;
          return (
            gt(this, a),
            Ct(Pt((r = t.call(this, e))), "getPreSelection", function () {
              return r.props.openToDate
                ? r.props.openToDate
                : r.props.selectsEnd && r.props.startDate
                ? r.props.startDate
                : r.props.selectsStart && r.props.endDate
                ? r.props.endDate
                : qt();
            }),
            Ct(Pt(r), "calcInitialState", function () {
              var e,
                t = r.getPreSelection(),
                a = Sa(r.props),
                n = Ma(r.props),
                o =
                  a && dt.default(t, ze.default(a))
                    ? a
                    : n && it.default(t, et.default(n))
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
                highlightDates: Oa(r.props.highlightDates),
                focused: !1,
                shouldFocusDayInline: !1,
              };
            }),
            Ct(Pt(r), "clearPreventFocusTimeout", function () {
              r.preventFocusTimeout && clearTimeout(r.preventFocusTimeout);
            }),
            Ct(Pt(r), "setFocus", function () {
              r.input && r.input.focus && r.input.focus({ preventScroll: !0 });
            }),
            Ct(Pt(r), "setBlur", function () {
              r.input && r.input.blur && r.input.blur(), r.cancelFocusInput();
            }),
            Ct(Pt(r), "setOpen", function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              r.setState(
                {
                  open: e,
                  preSelection:
                    e && r.state.open
                      ? r.state.preSelection
                      : r.calcInitialState().preSelection,
                  lastPreSelectChange: ir,
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
            Ct(Pt(r), "inputOk", function () {
              return me.default(r.state.preSelection);
            }),
            Ct(Pt(r), "isCalendarOpen", function () {
              return void 0 === r.props.open
                ? r.state.open && !r.props.disabled && !r.props.readOnly
                : r.props.open;
            }),
            Ct(Pt(r), "handleFocus", function (e) {
              r.state.preventFocus ||
                (r.props.onFocus(e),
                r.props.preventOpenOnFocus ||
                  r.props.readOnly ||
                  r.setOpen(!0)),
                r.setState({ focused: !0 });
            }),
            Ct(Pt(r), "cancelFocusInput", function () {
              clearTimeout(r.inputFocusTimeout), (r.inputFocusTimeout = null);
            }),
            Ct(Pt(r), "deferFocusInput", function () {
              r.cancelFocusInput(),
                (r.inputFocusTimeout = setTimeout(function () {
                  return r.setFocus();
                }, 1));
            }),
            Ct(Pt(r), "handleDropdownFocus", function () {
              r.cancelFocusInput();
            }),
            Ct(Pt(r), "handleBlur", function (e) {
              (!r.state.open || r.props.withPortal || r.props.showTimeInput) &&
                r.props.onBlur(e),
                r.setState({ focused: !1 });
            }),
            Ct(Pt(r), "handleCalendarClickOutside", function (e) {
              r.props.inline || r.setOpen(!1),
                r.props.onClickOutside(e),
                r.props.withPortal && e.preventDefault();
            }),
            Ct(Pt(r), "handleChange", function () {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              var n = t[0];
              if (
                !r.props.onChangeRaw ||
                (r.props.onChangeRaw.apply(Pt(r), t),
                "function" == typeof n.isDefaultPrevented &&
                  !n.isDefaultPrevented())
              ) {
                r.setState({
                  inputValue: n.target.value,
                  lastPreSelectChange: lr,
                });
                var o = Wt(
                  n.target.value,
                  r.props.dateFormat,
                  r.props.locale,
                  r.props.strictParsing,
                  r.props.minDate
                );
                r.props.showTimeSelectOnly &&
                  !ta(o, r.props.selected) &&
                  (o = Dt.default(r.props.selected, {
                    hours: xe.default(o),
                    minutes: Ne.default(o),
                    seconds: Pe.default(o),
                  })),
                  (!o && n.target.value) || r.setSelected(o, n, !0);
              }
            }),
            Ct(Pt(r), "handleSelect", function (e, t, a) {
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
                  dt.default(e, o) ||
                  setTimeout(function () {
                    return r.setOpen(!1);
                  }, 100);
              }
            }),
            Ct(Pt(r), "setSelected", function (e, t, a, n) {
              var o = e;
              if (r.props.showYearPicker) {
                if (null !== o && ha(Re.default(o), r.props)) return;
              } else if (r.props.showMonthYearPicker) {
                if (null !== o && pa(o, r.props)) return;
              } else if (null !== o && da(o, r.props)) return;
              var s = r.props,
                l = s.onChange,
                i = s.selectsRange,
                d = s.startDate,
                u = s.endDate;
              if (!aa(r.props.selected, o) || r.props.allowSameDay || i)
                if (
                  (null !== o &&
                    (!r.props.selected ||
                      (a &&
                        (r.props.showTimeSelect ||
                          r.props.showTimeSelectOnly ||
                          r.props.showTimeInput)) ||
                      (o = Ht(o, {
                        hour: xe.default(r.props.selected),
                        minute: Ne.default(r.props.selected),
                        second: Pe.default(r.props.selected),
                      })),
                    r.props.inline || r.setState({ preSelection: o }),
                    r.props.focusSelectedMonth ||
                      r.setState({ monthSelectedIn: n })),
                  i)
                ) {
                  var p = d && !u,
                    c = d && u;
                  !d && !u
                    ? l([o, null], t)
                    : p && (dt.default(o, d) ? l([o, null], t) : l([d, o], t)),
                    c && l([o, null], t);
                } else l(o, t);
              a || (r.props.onSelect(o, t), r.setState({ inputValue: null }));
            }),
            Ct(Pt(r), "setPreSelection", function (e) {
              var t = void 0 !== r.props.minDate,
                a = void 0 !== r.props.maxDate,
                n = !0;
              if (e) {
                var o = ze.default(e);
                if (t && a) n = ra(e, r.props.minDate, r.props.maxDate);
                else if (t) {
                  var s = ze.default(r.props.minDate);
                  n = it.default(e, s) || aa(o, s);
                } else if (a) {
                  var l = et.default(r.props.maxDate);
                  n = dt.default(e, l) || aa(o, l);
                }
              }
              n && r.setState({ preSelection: e });
            }),
            Ct(Pt(r), "handleTimeChange", function (e) {
              var t = Ht(
                r.props.selected ? r.props.selected : r.getPreSelection(),
                { hour: xe.default(e), minute: Ne.default(e) }
              );
              r.setState({ preSelection: t }),
                r.props.onChange(t),
                r.props.shouldCloseOnSelect && r.setOpen(!1),
                r.props.showTimeInput && r.setOpen(!0),
                r.setState({ inputValue: null });
            }),
            Ct(Pt(r), "onInputClick", function () {
              r.props.disabled || r.props.readOnly || r.setOpen(!0),
                r.props.onInputClick();
            }),
            Ct(Pt(r), "onInputKeyDown", function (e) {
              r.props.onKeyDown(e);
              var t = e.key;
              if (
                r.state.open ||
                r.props.inline ||
                r.props.preventOpenOnFocus
              ) {
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
                  var n = qt(r.state.preSelection);
                  "Enter" === t
                    ? (e.preventDefault(),
                      r.inputOk() && r.state.lastPreSelectChange === ir
                        ? (r.handleSelect(n, e),
                          !r.props.shouldCloseOnSelect && r.setPreSelection(n))
                        : r.setOpen(!1))
                    : "Escape" === t && (e.preventDefault(), r.setOpen(!1)),
                    r.inputOk() || r.props.onInputError({ code: 1, msg: or });
                }
              } else ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) || r.onInputClick();
            }),
            Ct(Pt(r), "onPortalKeyDown", function (e) {
              "Escape" === e.key &&
                (e.preventDefault(),
                r.setState({ preventFocus: !0 }, function () {
                  r.setOpen(!1),
                    setTimeout(function () {
                      r.setFocus(), r.setState({ preventFocus: !1 });
                    });
                }));
            }),
            Ct(Pt(r), "onDayKeyDown", function (e) {
              r.props.onKeyDown(e);
              var t = e.key,
                a = qt(r.state.preSelection);
              if ("Enter" === t)
                e.preventDefault(),
                  r.handleSelect(a, e),
                  !r.props.shouldCloseOnSelect && r.setPreSelection(a);
              else if ("Escape" === t)
                e.preventDefault(),
                  r.setOpen(!1),
                  r.inputOk() || r.props.onInputError({ code: 1, msg: or });
              else if (!r.props.disabledKeyboardNavigation) {
                var n;
                switch (t) {
                  case "ArrowLeft":
                    n = Se.default(a, 1);
                    break;
                  case "ArrowRight":
                    n = ge.default(a, 1);
                    break;
                  case "ArrowUp":
                    n = Me.default(a, 1);
                    break;
                  case "ArrowDown":
                    n = we.default(a, 1);
                    break;
                  case "PageUp":
                    n = Oe.default(a, 1);
                    break;
                  case "PageDown":
                    n = ke.default(a, 1);
                    break;
                  case "Home":
                    n = _e.default(a, 1);
                    break;
                  case "End":
                    n = Ce.default(a, 1);
                }
                if (!n)
                  return void (
                    r.props.onInputError &&
                    r.props.onInputError({ code: 1, msg: or })
                  );
                if (
                  (e.preventDefault(),
                  r.setState({ lastPreSelectChange: ir }),
                  r.props.adjustDateOnChange && r.setSelected(n),
                  r.setPreSelection(n),
                  r.props.inline)
                ) {
                  var o = Ye.default(a),
                    s = Ye.default(n),
                    l = Re.default(a),
                    i = Re.default(n);
                  o !== s || l !== i
                    ? r.setState({ shouldFocusDayInline: !0 })
                    : r.setState({ shouldFocusDayInline: !1 });
                }
              }
            }),
            Ct(Pt(r), "onPopperKeyDown", function (e) {
              "Escape" === e.key &&
                (e.preventDefault(),
                r.setState({ preventFocus: !0 }, function () {
                  r.setOpen(!1),
                    setTimeout(function () {
                      r.setFocus(), r.setState({ preventFocus: !1 });
                    });
                }));
            }),
            Ct(Pt(r), "onClearClick", function (e) {
              e && e.preventDefault && e.preventDefault(),
                r.props.selectsRange
                  ? r.props.onChange([null, null], e)
                  : r.props.onChange(null, e),
                r.setState({ inputValue: null });
            }),
            Ct(Pt(r), "clear", function () {
              r.onClearClick();
            }),
            Ct(Pt(r), "onScroll", function (e) {
              "boolean" == typeof r.props.closeOnScroll && r.props.closeOnScroll
                ? (e.target !== document &&
                    e.target !== document.documentElement &&
                    e.target !== document.body) ||
                  r.setOpen(!1)
                : "function" == typeof r.props.closeOnScroll &&
                  r.props.closeOnScroll(e) &&
                  r.setOpen(!1);
            }),
            Ct(Pt(r), "renderCalendar", function () {
              return r.props.inline || r.isCalendarOpen()
                ? ce.default.createElement(
                    nr,
                    {
                      ref: function (e) {
                        r.calendar = e;
                      },
                      locale: r.props.locale,
                      calendarStartDay: r.props.calendarStartDay,
                      chooseDayAriaLabelPrefix:
                        r.props.chooseDayAriaLabelPrefix,
                      disabledDayAriaLabelPrefix:
                        r.props.disabledDayAriaLabelPrefix,
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
                      forceShowMonthNavigation:
                        r.props.forceShowMonthNavigation,
                      showDisabledMonthNavigation:
                        r.props.showDisabledMonthNavigation,
                      scrollableYearDropdown: r.props.scrollableYearDropdown,
                      scrollableMonthYearDropdown:
                        r.props.scrollableMonthYearDropdown,
                      todayButton: r.props.todayButton,
                      weekLabel: r.props.weekLabel,
                      outsideClickIgnoreClass: rr,
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
                      previousMonthButtonLabel:
                        r.props.previousMonthButtonLabel,
                      nextMonthAriaLabel: r.props.nextMonthAriaLabel,
                      nextMonthButtonLabel: r.props.nextMonthButtonLabel,
                      previousYearAriaLabel: r.props.previousYearAriaLabel,
                      previousYearButtonLabel: r.props.previousYearButtonLabel,
                      nextYearAriaLabel: r.props.nextYearAriaLabel,
                      nextYearButtonLabel: r.props.nextYearButtonLabel,
                      timeInputLabel: r.props.timeInputLabel,
                      disabledKeyboardNavigation:
                        r.props.disabledKeyboardNavigation,
                      renderCustomHeader: r.props.renderCustomHeader,
                      popperProps: r.props.popperProps,
                      renderDayContents: r.props.renderDayContents,
                      onDayMouseEnter: r.props.onDayMouseEnter,
                      onMonthMouseLeave: r.props.onMonthMouseLeave,
                      selectsDisabledDaysInRange:
                        r.props.selectsDisabledDaysInRange,
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
            Ct(Pt(r), "renderDateInput", function () {
              var e,
                t = he.default(r.props.className, Ct({}, rr, r.state.open)),
                a =
                  r.props.customInput ||
                  ce.default.createElement("input", { type: "text" }),
                n = r.props.customInputRef || "ref",
                o =
                  "string" == typeof r.props.value
                    ? r.props.value
                    : "string" == typeof r.state.inputValue
                    ? r.state.inputValue
                    : r.props.selectsRange
                    ? (function (e, t, a) {
                        if (!e) return "";
                        var r = Kt(e, a),
                          n = t ? Kt(t, a) : "";
                        return "".concat(r, " - ").concat(n);
                      })(r.props.startDate, r.props.endDate, r.props)
                    : Kt(r.props.selected, r.props);
              return ce.default.cloneElement(
                a,
                (Ct((e = {}), n, function (e) {
                  r.input = e;
                }),
                Ct(e, "value", o),
                Ct(e, "onBlur", r.handleBlur),
                Ct(e, "onChange", r.handleChange),
                Ct(e, "onClick", r.onInputClick),
                Ct(e, "onFocus", r.handleFocus),
                Ct(e, "onKeyDown", r.onInputKeyDown),
                Ct(e, "id", r.props.id),
                Ct(e, "name", r.props.name),
                Ct(e, "autoFocus", r.props.autoFocus),
                Ct(e, "placeholder", r.props.placeholderText),
                Ct(e, "disabled", r.props.disabled),
                Ct(e, "autoComplete", r.props.autoComplete),
                Ct(e, "className", he.default(a.props.className, t)),
                Ct(e, "title", r.props.title),
                Ct(e, "readOnly", r.props.readOnly),
                Ct(e, "required", r.props.required),
                Ct(e, "tabIndex", r.props.tabIndex),
                Ct(e, "aria-describedby", r.props.ariaDescribedBy),
                Ct(e, "aria-invalid", r.props.ariaInvalid),
                Ct(e, "aria-labelledby", r.props.ariaLabelledBy),
                Ct(e, "aria-required", r.props.ariaRequired),
                e)
              );
            }),
            Ct(Pt(r), "renderClearButton", function () {
              var e = r.props,
                t = e.isClearable,
                a = e.selected,
                n = e.startDate,
                o = e.endDate,
                s = e.clearButtonTitle,
                l = e.clearButtonClassName,
                i = void 0 === l ? "" : l,
                d = e.ariaLabelClose,
                u = void 0 === d ? "Close" : d;
              return !t || (null == a && null == n && null == o)
                ? null
                : ce.default.createElement("button", {
                    type: "button",
                    className: "react-datepicker__close-icon ".concat(i).trim(),
                    "aria-label": u,
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
          kt(
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
                      ? Ye.default(a) !== Ye.default(r) ||
                        Re.default(a) !== Re.default(r)
                      : a !== r) &&
                    this.setPreSelection(this.props.selected),
                    void 0 !== this.state.monthSelectedIn &&
                      e.monthsShown !== this.props.monthsShown &&
                      this.setState({ monthSelectedIn: 0 }),
                    e.highlightDates !== this.props.highlightDates &&
                      this.setState({
                        highlightDates: Oa(this.props.highlightDates),
                      }),
                    t.focused ||
                      aa(e.selected, this.props.selected) ||
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
                  return ce.default.createElement(
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
                      ? ce.default.createElement(
                          er,
                          { enableTabLoop: this.props.enableTabLoop },
                          ce.default.createElement(
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
                        (t = ce.default.createElement(
                          Ja,
                          {
                            portalId: this.props.portalId,
                            portalHost: this.props.portalHost,
                          },
                          t
                        )),
                      ce.default.createElement(
                        "div",
                        null,
                        this.renderInputContainer(),
                        t
                      )
                    );
                  }
                  return ce.default.createElement(ar, {
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
                    yearItemNumber: Ft,
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
      })(ce.default.Component);
    Ct(sr, "propTypes", {
      adjustDateOnChange: fe.default.bool,
      allowSameDay: fe.default.bool,
      ariaDescribedBy: fe.default.string,
      ariaInvalid: fe.default.string,
      ariaLabelClose: fe.default.string,
      ariaLabelledBy: fe.default.string,
      ariaRequired: fe.default.string,
      autoComplete: fe.default.string,
      autoFocus: fe.default.bool,
      calendarClassName: fe.default.string,
      calendarContainer: fe.default.func,
      children: fe.default.node,
      chooseDayAriaLabelPrefix: fe.default.string,
      closeOnScroll: fe.default.oneOfType([fe.default.bool, fe.default.func]),
      className: fe.default.string,
      customInput: fe.default.element,
      customInputRef: fe.default.string,
      calendarStartDay: fe.default.number,
      dateFormat: fe.default.oneOfType([fe.default.string, fe.default.array]),
      dateFormatCalendar: fe.default.string,
      dayClassName: fe.default.func,
      weekDayClassName: fe.default.func,
      disabledDayAriaLabelPrefix: fe.default.string,
      monthClassName: fe.default.func,
      timeClassName: fe.default.func,
      disabled: fe.default.bool,
      disabledKeyboardNavigation: fe.default.bool,
      dropdownMode: fe.default.oneOf(["scroll", "select"]).isRequired,
      endDate: fe.default.instanceOf(Date),
      excludeDates: fe.default.array,
      excludeDateIntervals: fe.default.arrayOf(
        fe.default.shape({
          start: fe.default.instanceOf(Date),
          end: fe.default.instanceOf(Date),
        })
      ),
      filterDate: fe.default.func,
      fixedHeight: fe.default.bool,
      formatWeekNumber: fe.default.func,
      highlightDates: fe.default.array,
      id: fe.default.string,
      includeDates: fe.default.array,
      includeDateIntervals: fe.default.array,
      includeTimes: fe.default.array,
      injectTimes: fe.default.array,
      inline: fe.default.bool,
      isClearable: fe.default.bool,
      locale: fe.default.oneOfType([
        fe.default.string,
        fe.default.shape({ locale: fe.default.object }),
      ]),
      maxDate: fe.default.instanceOf(Date),
      minDate: fe.default.instanceOf(Date),
      monthsShown: fe.default.number,
      name: fe.default.string,
      onBlur: fe.default.func,
      onChange: fe.default.func.isRequired,
      onSelect: fe.default.func,
      onWeekSelect: fe.default.func,
      onClickOutside: fe.default.func,
      onChangeRaw: fe.default.func,
      onFocus: fe.default.func,
      onInputClick: fe.default.func,
      onKeyDown: fe.default.func,
      onMonthChange: fe.default.func,
      onYearChange: fe.default.func,
      onInputError: fe.default.func,
      open: fe.default.bool,
      onCalendarOpen: fe.default.func,
      onCalendarClose: fe.default.func,
      openToDate: fe.default.instanceOf(Date),
      peekNextMonth: fe.default.bool,
      placeholderText: fe.default.string,
      popperContainer: fe.default.func,
      popperClassName: fe.default.string,
      popperModifiers: fe.default.arrayOf(fe.default.object),
      popperPlacement: fe.default.oneOf(tr),
      popperProps: fe.default.object,
      preventOpenOnFocus: fe.default.bool,
      readOnly: fe.default.bool,
      required: fe.default.bool,
      scrollableYearDropdown: fe.default.bool,
      scrollableMonthYearDropdown: fe.default.bool,
      selected: fe.default.instanceOf(Date),
      selectsEnd: fe.default.bool,
      selectsStart: fe.default.bool,
      selectsRange: fe.default.bool,
      selectsDisabledDaysInRange: fe.default.bool,
      showMonthDropdown: fe.default.bool,
      showPreviousMonths: fe.default.bool,
      showMonthYearDropdown: fe.default.bool,
      showWeekNumbers: fe.default.bool,
      showYearDropdown: fe.default.bool,
      strictParsing: fe.default.bool,
      forceShowMonthNavigation: fe.default.bool,
      showDisabledMonthNavigation: fe.default.bool,
      startDate: fe.default.instanceOf(Date),
      startOpen: fe.default.bool,
      tabIndex: fe.default.number,
      timeCaption: fe.default.string,
      title: fe.default.string,
      todayButton: fe.default.node,
      useWeekdaysShort: fe.default.bool,
      formatWeekDay: fe.default.func,
      value: fe.default.string,
      weekLabel: fe.default.string,
      withPortal: fe.default.bool,
      portalId: fe.default.string,
      portalHost: fe.default.instanceOf(ShadowRoot),
      yearItemNumber: fe.default.number,
      yearDropdownItemNumber: fe.default.number,
      shouldCloseOnSelect: fe.default.bool,
      showTimeInput: fe.default.bool,
      showMonthYearPicker: fe.default.bool,
      showFullMonthYearPicker: fe.default.bool,
      showTwoColumnMonthYearPicker: fe.default.bool,
      showFourColumnMonthYearPicker: fe.default.bool,
      showYearPicker: fe.default.bool,
      showQuarterYearPicker: fe.default.bool,
      showTimeSelect: fe.default.bool,
      showTimeSelectOnly: fe.default.bool,
      timeFormat: fe.default.string,
      timeIntervals: fe.default.number,
      minTime: fe.default.instanceOf(Date),
      maxTime: fe.default.instanceOf(Date),
      excludeTimes: fe.default.array,
      filterTime: fe.default.func,
      useShortMonthInDropdown: fe.default.bool,
      clearButtonTitle: fe.default.string,
      clearButtonClassName: fe.default.string,
      previousMonthAriaLabel: fe.default.string,
      previousMonthButtonLabel: fe.default.oneOfType([
        fe.default.string,
        fe.default.node,
      ]),
      nextMonthAriaLabel: fe.default.string,
      nextMonthButtonLabel: fe.default.oneOfType([
        fe.default.string,
        fe.default.node,
      ]),
      previousYearAriaLabel: fe.default.string,
      previousYearButtonLabel: fe.default.string,
      nextYearAriaLabel: fe.default.string,
      nextYearButtonLabel: fe.default.string,
      timeInputLabel: fe.default.string,
      renderCustomHeader: fe.default.func,
      renderDayContents: fe.default.func,
      wrapperClassName: fe.default.string,
      focusSelectedMonth: fe.default.bool,
      onDayMouseEnter: fe.default.func,
      onMonthMouseLeave: fe.default.func,
      showPopperArrow: fe.default.bool,
      excludeScrollbar: fe.default.bool,
      enableTabLoop: fe.default.bool,
      customTimeInput: fe.default.element,
      weekAriaLabelPrefix: fe.default.string,
      monthAriaLabelPrefix: fe.default.string,
    });
    var lr = "input",
      ir = "navigate";
    (e.CalendarContainer = $a),
      (e.default = sr),
      (e.getDefaultLocale = na),
      (e.registerLocale = function (e, t) {
        var a = "undefined" != typeof window ? window : globalThis;
        a.__localeData__ || (a.__localeData__ = {}), (a.__localeData__[e] = t);
      }),
      (e.setDefaultLocale = function (e) {
        ("undefined" != typeof window ? window : globalThis).__localeId__ = e;
      }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }
);
