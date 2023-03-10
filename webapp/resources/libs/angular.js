!function (t, e, n) {
  'use strict';
  function r(t, e) {
    return e = e || Error,
    function () {
      var n,
      r,
      i = arguments[0],
      o = '[' + (t ? t + ':' : '') + i + '] ',
      a = arguments[1],
      s = arguments;
      for (n = o + a.replace(/\{\d+\}/g, function (t) {
        var e = + t.slice(1, - 1);
        return e + 2 < s.length ? ht(s[e + 2])  : t
      }), n = n + '\nhttp://errors.angularjs.org/1.3.15/' + (t ? t + '/' : '') + i, r = 2; r < arguments.length; r++) n = n + (2 == r ? '?' : '&') + 'p' + (r - 2) + '=' + encodeURIComponent(ht(arguments[r]));
      return new e(n)
    }
  }
  function i(t) {
    if (null == t || E(t)) return !1;
    var e = t.length;
    return t.nodeType === yr && e ? !0 : w(t) || hr(t) || 0 === e || 'number' == typeof e && e > 0 && e - 1 in t
  }
  function o(t, e, n) {
    var r,
    a;
    if (t) if (C(t)) for (r in t) 'prototype' == r || 'length' == r || 'name' == r || t.hasOwnProperty && !t.hasOwnProperty(r) || e.call(n, t[r], r, t);
     else if (hr(t) || i(t)) {
      var s = 'object' != typeof t;
      for (r = 0, a = t.length; a > r; r++) (s || r in t) && e.call(n, t[r], r, t)
    } else if (t.forEach && t.forEach !== o) t.forEach(e, n, t);
     else for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t);
    return t
  }
  function a(t) {
    return Object.keys(t).sort()
  }
  function s(t, e, n) {
    for (var r = a(t), i = 0; i < r.length; i++) e.call(n, t[r[i]], r[i]);
    return r
  }
  function u(t) {
    return function (e, n) {
      t(n, e)
    }
  }
  function c() {
    return ++lr
  }
  function l(t, e) {
    e ? t.$$hashKey = e : delete t.$$hashKey
  }
  function f(t) {
    for (var e = t.$$hashKey, n = 1, r = arguments.length; r > n; n++) {
      var i = arguments[n];
      if (i) for (var o = Object.keys(i), a = 0, s = o.length; s > a; a++) {
        var u = o[a];
        t[u] = i[u]
      }
    }
    return l(t, e),
    t
  }
  function h(t) {
    return parseInt(t, 10)
  }
  function d(t, e) {
    return f(Object.create(t), e)
  }
  function p() {
  }
  function $(t) {
    return t
  }
  function v(t) {
    return function () {
      return t
    }
  }
  function m(t) {
    return 'undefined' == typeof t
  }
  function g(t) {
    return 'undefined' != typeof t
  }
  function y(t) {
    return null !== t && 'object' == typeof t
  }
  function w(t) {
    return 'string' == typeof t
  }
  function b(t) {
    return 'number' == typeof t
  }
  function x(t) {
    return '[object Date]' === sr.call(t)
  }
  function C(t) {
    return 'function' == typeof t
  }
  function S(t) {
    return '[object RegExp]' === sr.call(t)
  }
  function E(t) {
    return t && t.window === t
  }
  function k(t) {
    return t && t.$evalAsync && t.$watch
  }
  function A(t) {
    return '[object File]' === sr.call(t)
  }
  function T(t) {
    return '[object FormData]' === sr.call(t)
  }
  function D(t) {
    return '[object Blob]' === sr.call(t)
  }
  function O(t) {
    return 'boolean' == typeof t
  }
  function M(t) {
    return t && C(t.then)
  }
  function j(t) {
    return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
  }
  function P(t) {
    var e,
    n = {
    },
    r = t.split(',');
    for (e = 0; e < r.length; e++) n[r[e]] = !0;
    return n
  }
  function N(t) {
    return Jn(t.nodeName || t[0] && t[0].nodeName)
  }
  function I(t, e) {
    var n = t.indexOf(e);
    return n >= 0 && t.splice(n, 1),
    e
  }
  function R(t, e, n, r) {
    if (E(t) || k(t)) throw ur('cpws', 'Can\'t copy! Making copies of Window or Scope instances is not supported.');
    if (e) {
      if (t === e) throw ur('cpi', 'Can\'t copy! Source and destination are identical.');
      if (n = n || [
      ], r = r || [
      ], y(t)) {
        var i = n.indexOf(t);
        if ( - 1 !== i) return r[i];
        n.push(t),
        r.push(e)
      }
      var a;
      if (hr(t)) {
        e.length = 0;
        for (var s = 0; s < t.length; s++) a = R(t[s], null, n, r),
        y(t[s]) && (n.push(t[s]), r.push(a)),
        e.push(a)
      } else {
        var u = e.$$hashKey;
        hr(e) ? e.length = 0 : o(e, function (t, n) {
          delete e[n]
        });
        for (var c in t) t.hasOwnProperty(c) && (a = R(t[c], null, n, r), y(t[c]) && (n.push(t[c]), r.push(a)), e[c] = a);
        l(e, u)
      }
    } else if (e = t, t) if (hr(t)) e = R(t, [
    ], n, r);
     else if (x(t)) e = new Date(t.getTime());
     else if (S(t)) e = new RegExp(t.source, t.toString().match(/[^\/]*$/) [0]),
    e.lastIndex = t.lastIndex;
     else if (y(t)) {
      var f = Object.create(Object.getPrototypeOf(t));
      e = R(t, f, n, r)
    }
    return e
  }
  function V(t, e) {
    if (hr(t)) {
      e = e || [
      ];
      for (var n = 0, r = t.length; r > n; n++) e[n] = t[n]
    } else if (y(t)) {
      e = e || {
      };
      for (var i in t) ('$' !== i.charAt(0) || '$' !== i.charAt(1)) && (e[i] = t[i])
    }
    return e || t
  }
  function U(t, e) {
    if (t === e) return !0;
    if (null === t || null === e) return !1;
    if (t !== t && e !== e) return !0;
    var r,
    i,
    o,
    a = typeof t,
    s = typeof e;
    if (a == s && 'object' == a) {
      if (!hr(t)) {
        if (x(t)) return x(e) ? U(t.getTime(), e.getTime())  : !1;
        if (S(t)) return S(e) ? t.toString() == e.toString()  : !1;
        if (k(t) || k(e) || E(t) || E(e) || hr(e) || x(e) || S(e)) return !1;
        o = {
        };
        for (i in t) if ('$' !== i.charAt(0) && !C(t[i])) {
          if (!U(t[i], e[i])) return !1;
          o[i] = !0
        }
        for (i in e) if (!o.hasOwnProperty(i) && '$' !== i.charAt(0) && e[i] !== n && !C(e[i])) return !1;
        return !0
      }
      if (!hr(e)) return !1;
      if ((r = t.length) == e.length) {
        for (i = 0; r > i; i++) if (!U(t[i], e[i])) return !1;
        return !0
      }
    }
    return !1
  }
  function q(t, e, n) {
    return t.concat(ir.call(e, n))
  }
  function F(t, e) {
    return ir.call(t, e || 0)
  }
  function H(t, e) {
    var n = arguments.length > 2 ? F(arguments, 2)  : [
    ];
    return !C(e) || e instanceof RegExp ? e : n.length ? function () {
      return arguments.length ? e.apply(t, q(n, arguments, 0))  : e.apply(t, n)
    }
     : function () {
      return arguments.length ? e.apply(t, arguments)  : e.call(t)
    }
  }
  function _(t, r) {
    var i = r;
    return 'string' == typeof t && '$' === t.charAt(0) && '$' === t.charAt(1) ? i = n : E(r) ? i = '$WINDOW' : r && e === r ? i = '$DOCUMENT' : k(r) && (i = '$SCOPE'),
    i
  }
  function B(t, e) {
    return 'undefined' == typeof t ? n : (b(e) || (e = e ? 2 : null), JSON.stringify(t, _, e))
  }
  function L(t) {
    return w(t) ? JSON.parse(t)  : t
  }
  function W(t) {
    t = er(t).clone();
    try {
      t.empty()
    } catch (e) {
    }
    var n = er('<div>').append(t).html();
    try {
      return t[0].nodeType === wr ? Jn(n)  : n.match(/^(<[^>]+>)/) [1].replace(/^<([\w\-]+)/, function (t, e) {
        return '<' + Jn(e)
      })
    } catch (e) {
      return Jn(n)
    }
  }
  function z(t) {
    try {
      return decodeURIComponent(t)
    } catch (e) {
    }
  }
  function G(t) {
    var e,
    n,
    r = {
    };
    return o((t || '').split('&'), function (t) {
      if (t && (e = t.replace(/\+/g, '%20').split('='), n = z(e[0]), g(n))) {
        var i = g(e[1]) ? z(e[1])  : !0;
        Kn.call(r, n) ? hr(r[n]) ? r[n].push(i)  : r[n] = [
          r[n],
          i
        ] : r[n] = i
      }
    }),
    r
  }
  function Y(t) {
    var e = [
    ];
    return o(t, function (t, n) {
      hr(t) ? o(t, function (t) {
        e.push(K(n, !0) + (t === !0 ? '' : '=' + K(t, !0)))
      })  : e.push(K(n, !0) + (t === !0 ? '' : '=' + K(t, !0)))
    }),
    e.length ? e.join('&')  : ''
  }
  function J(t) {
    return K(t, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+')
  }
  function K(t, e) {
    return encodeURIComponent(t).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/g, e ? '%20' : '+')
  }
  function X(t, e) {
    var n,
    r,
    i = vr.length;
    for (t = er(t), r = 0; i > r; ++r) if (n = vr[r] + e, w(n = t.attr(n))) return n;
    return null
  }
  function Z(t, e) {
    var n,
    r,
    i = {
    };
    o(vr, function (e) {
      var i = e + 'app';
      !n && t.hasAttribute && t.hasAttribute(i) && (n = t, r = t.getAttribute(i))
    }),
    o(vr, function (e) {
      var i,
      o = e + 'app';
      !n && (i = t.querySelector('[' + o.replace(':', '\\:') + ']')) && (n = i, r = i.getAttribute(o))
    }),
    n && (i.strictDi = null !== X(n, 'strict-di'), e(n, r ? [
      r
    ] : [
    ], i))
  }
  function Q(n, r, i) {
    y(i) || (i = {
    });
    var a = {
      strictDi: !1
    };
    i = f(a, i);
    var s = function () {
      if (n = er(n), n.injector()) {
        var t = n[0] === e ? 'document' : W(n);
        throw ur('btstrpd', 'App Already Bootstrapped with this Element \'{0}\'', t.replace(/</, '&lt;').replace(/>/, '&gt;'))
      }
      r = r || [
      ],
      r.unshift(['$provide',
      function (t) {
        t.value('$rootElement', n)
      }
      ]),
      i.debugInfoEnabled && r.push(['$compileProvider',
      function (t) {
        t.debugInfoEnabled(!0)
      }
      ]),
      r.unshift('ng');
      var o = Lt(r, i.strictDi);
      return o.invoke(['$rootScope',
      '$rootElement',
      '$compile',
      '$injector',
      function (t, e, n, r) {
        t.$apply(function () {
          e.data('$injector', r),
          n(e) (t)
        })
      }
      ]),
      o
    },
    u = /^NG_ENABLE_DEBUG_INFO!/,
    c = /^NG_DEFER_BOOTSTRAP!/;
    return t && u.test(t.name) && (i.debugInfoEnabled = !0, t.name = t.name.replace(u, '')),
    t && !c.test(t.name) ? s()  : (t.name = t.name.replace(c, ''), cr.resumeBootstrap = function (t) {
      return o(t, function (t) {
        r.push(t)
      }),
      s()
    }, void (C(cr.resumeDeferredBootstrap) && cr.resumeDeferredBootstrap()))
  }
  function tt() {
    t.name = 'NG_ENABLE_DEBUG_INFO!' + t.name,
    t.location.reload()
  }
  function et(t) {
    var e = cr.element(t).injector();
    if (!e) throw ur('test', 'no injector found for element argument to getTestability');
    return e.get('$$testability')
  }
  function nt(t, e) {
    return e = e || '_',
    t.replace(mr, function (t, n) {
      return (n ? e : '') + t.toLowerCase()
    })
  }
  function rt() {
    var e;
    gr || (nr = t.jQuery, nr && nr.fn.on ? (er = nr, f(nr.fn, {
      scope: Ur.scope,
      isolateScope: Ur.isolateScope,
      controller: Ur.controller,
      injector: Ur.injector,
      inheritedData: Ur.inheritedData
    }), e = nr.cleanData, nr.cleanData = function (t) {
      var n;
      if (fr) fr = !1;
       else for (var r, i = 0; null != (r = t[i]); i++) n = nr._data(r, 'events'),
      n && n.$destroy && nr(r).triggerHandler('$destroy');
      e(t)
    })  : er = wt, cr.element = er, gr = !0)
  }
  function it(t, e, n) {
    if (!t) throw ur('areq', 'Argument \'{0}\' is {1}', e || '?', n || 'required');
    return t
  }
  function ot(t, e, n) {
    return n && hr(t) && (t = t[t.length - 1]),
    it(C(t), e, 'not a function, got ' + (t && 'object' == typeof t ? t.constructor.name || 'Object' : typeof t)),
    t
  }
  function at(t, e) {
    if ('hasOwnProperty' === t) throw ur('badname', 'hasOwnProperty is not a valid {0} name', e)
  }
  function st(t, e, n) {
    if (!e) return t;
    for (var r, i = e.split('.'), o = t, a = i.length, s = 0; a > s; s++) r = i[s],
    t && (t = (o = t) [r]);
    return !n && C(t) ? H(o, t)  : t
  }
  function ut(t) {
    var e = t[0],
    n = t[t.length - 1],
    r = [
      e
    ];
    do {
      if (e = e.nextSibling, !e) break;
      r.push(e)
    } while (e !== n);
    return er(r)
  }
  function ct() {
    return Object.create(null)
  }
  function lt(t) {
    function e(t, e, n) {
      return t[e] || (t[e] = n())
    }
    var n = r('$injector'),
    i = r('ng'),
    o = e(t, 'angular', Object);
    return o.$$minErr = o.$$minErr || r,
    e(o, 'module', function () {
      var t = {
      };
      return function (r, o, a) {
        var s = function (t, e) {
          if ('hasOwnProperty' === t) throw i('badname', 'hasOwnProperty is not a valid {0} name', e)
        };
        return s(r, 'module'),
        o && t.hasOwnProperty(r) && (t[r] = null),
        e(t, r, function () {
          function t(t, n, r, i) {
            return i || (i = e),
            function () {
              return i[r || 'push']([t,
              n,
              arguments]),
              c
            }
          }
          if (!o) throw n('nomod', 'Module \'{0}\' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.', r);
          var e = [
          ],
          i = [
          ],
          s = [
          ],
          u = t('$injector', 'invoke', 'push', i),
          c = {
            _invokeQueue: e,
            _configBlocks: i,
            _runBlocks: s,
            requires: o,
            name: r,
            provider: t('$provide', 'provider'),
            factory: t('$provide', 'factory'),
            service: t('$provide', 'service'),
            value: t('$provide', 'value'),
            constant: t('$provide', 'constant', 'unshift'),
            animation: t('$animateProvider', 'register'),
            filter: t('$filterProvider', 'register'),
            controller: t('$controllerProvider', 'register'),
            directive: t('$compileProvider', 'directive'),
            config: u,
            run: function (t) {
              return s.push(t),
              this
            }
          };
          return a && u(a),
          c
        })
      }
    })
  }
  function ft(t) {
    var e = [
    ];
    return JSON.stringify(t, function (t, n) {
      if (n = _(t, n), y(n)) {
        if (e.indexOf(n) >= 0) return '<<already seen>>';
        e.push(n)
      }
      return n
    })
  }
  function ht(t) {
    return 'function' == typeof t ? t.toString().replace(/ \{[\s\S]*$/, '')  : 'undefined' == typeof t ? 'undefined' : 'string' != typeof t ? ft(t)  : t
  }
  function dt(e) {
    f(e, {
      bootstrap: Q,
      copy: R,
      extend: f,
      equals: U,
      element: er,
      forEach: o,
      injector: Lt,
      noop: p,
      bind: H,
      toJson: B,
      fromJson: L,
      identity: $,
      isUndefined: m,
      isDefined: g,
      isString: w,
      isFunction: C,
      isObject: y,
      isNumber: b,
      isElement: j,
      isArray: hr,
      version: Sr,
      isDate: x,
      lowercase: Jn,
      uppercase: Xn,
      callbacks: {
        counter: 0
      },
      getTestability: et,
      $$minErr: r,
      $$csp: $r,
      reloadWithDebugInfo: tt
    }),
    rr = lt(t);
    try {
      rr('ngLocale')
    } catch (n) {
      rr('ngLocale', [
      ]).provider('$locale', ve)
    }
    rr('ng', [
      'ngLocale'
    ], [
      '$provide',
      function (t) {
        t.provider({
          $$sanitizeUri: Ye
        }),
        t.provider('$compile', Xt).directive({
          a: Oi,
          input: Gi,
          textarea: Gi,
          form: Ii,
          script: Vo,
          select: Fo,
          style: _o,
          option: Ho,
          ngBind: Ki,
          ngBindHtml: Zi,
          ngBindTemplate: Xi,
          ngClass: to,
          ngClassEven: no,
          ngClassOdd: eo,
          ngCloak: ro,
          ngController: io,
          ngForm: Ri,
          ngHide: Mo,
          ngIf: so,
          ngInclude: uo,
          ngInit: lo,
          ngNonBindable: Eo,
          ngPluralize: ko,
          ngRepeat: Ao,
          ngShow: Oo,
          ngStyle: jo,
          ngSwitch: Po,
          ngSwitchWhen: No,
          ngSwitchDefault: Io,
          ngOptions: qo,
          ngTransclude: Ro,
          ngModel: xo,
          ngList: fo,
          ngChange: Qi,
          pattern: Lo,
          ngPattern: Lo,
          required: Bo,
          ngRequired: Bo,
          minlength: zo,
          ngMinlength: zo,
          maxlength: Wo,
          ngMaxlength: Wo,
          ngValue: Ji,
          ngModelOptions: So
        }).directive({
          ngInclude: co
        }).directive(Mi).directive(oo),
        t.provider({
          $anchorScroll: Wt,
          $animate: Yr,
          $browser: Yt,
          $cacheFactory: Jt,
          $controller: ee,
          $document: ne,
          $exceptionHandler: re,
          $filter: sn,
          $interpolate: pe,
          $interval: $e,
          $http: le,
          $httpBackend: he,
          $location: Oe,
          $log: Me,
          $parse: _e,
          $rootScope: Ge,
          $q: Be,
          $$q: Le,
          $sce: Ze,
          $sceDelegate: Xe,
          $sniffer: Qe,
          $templateCache: Kt,
          $templateRequest: tn,
          $$testability: en,
          $timeout: nn,
          $window: an,
          $$rAF: ze,
          $$asyncCallback: zt,
          $$jqLite: qt
        })
      }
    ])
  }
  function pt() {
    return ++kr
  }
  function $t(t) {
    return t.replace(Dr, function (t, e, n, r) {
      return r ? n.toUpperCase()  : n
    }).replace(Or, 'Moz$1')
  }
  function vt(t) {
    return !Nr.test(t)
  }
  function mt(t) {
    var e = t.nodeType;
    return e === yr || !e || e === xr
  }
  function gt(t, e) {
    var n,
    r,
    i,
    a,
    s = e.createDocumentFragment(),
    u = [
    ];
    if (vt(t)) u.push(e.createTextNode(t));
     else {
      for (n = n || s.appendChild(e.createElement('div')), r = (Ir.exec(t) || [
        '',
        ''
      ]) [1].toLowerCase(), i = Vr[r] || Vr._default, n.innerHTML = i[1] + t.replace(Rr, '<$1></$2>') + i[2], a = i[0]; a--; ) n = n.lastChild;
      u = q(u, n.childNodes),
      n = s.firstChild,
      n.textContent = ''
    }
    return s.textContent = '',
    s.innerHTML = '',
    o(u, function (t) {
      s.appendChild(t)
    }),
    s
  }
  function yt(t, n) {
    n = n || e;
    var r;
    return (r = Pr.exec(t)) ? [
      n.createElement(r[1])
    ] : (r = gt(t, n)) ? r.childNodes : [
    ]
  }
  function wt(t) {
    if (t instanceof wt) return t;
    var e;
    if (w(t) && (t = dr(t), e = !0), !(this instanceof wt)) {
      if (e && '<' != t.charAt(0)) throw jr('nosel', 'Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element');
      return new wt(t)
    }
    e ? Ot(this, yt(t))  : Ot(this, t)
  }
  function bt(t) {
    return t.cloneNode(!0)
  }
  function xt(t, e) {
    if (e || St(t), t.querySelectorAll) for (var n = t.querySelectorAll('*'), r = 0, i = n.length; i > r; r++) St(n[r])
  }
  function Ct(t, e, n, r) {
    if (g(r)) throw jr('offargs', 'jqLite#off() does not support the `selector` argument');
    var i = Et(t),
    a = i && i.events,
    s = i && i.handle;
    if (s) if (e) o(e.split(' '), function (e) {
      if (g(n)) {
        var r = a[e];
        if (I(r || [
        ], n), r && r.length > 0) return
      }
      Tr(t, e, s),
      delete a[e]
    });
     else for (e in a) '$destroy' !== e && Tr(t, e, s),
    delete a[e]
  }
  function St(t, e) {
    var r = t.ng339,
    i = r && Er[r];
    if (i) {
      if (e) return void delete i.data[e];
      i.handle && (i.events.$destroy && i.handle({
      }, '$destroy'), Ct(t)),
      delete Er[r],
      t.ng339 = n
    }
  }
  function Et(t, e) {
    var r = t.ng339,
    i = r && Er[r];
    return e && !i && (t.ng339 = r = pt(), i = Er[r] = {
      events: {
      },
      data: {
      },
      handle: n
    }),
    i
  }
  function kt(t, e, n) {
    if (mt(t)) {
      var r = g(n),
      i = !r && e && !y(e),
      o = !e,
      a = Et(t, !i),
      s = a && a.data;
      if (r) s[e] = n;
       else {
        if (o) return s;
        if (i) return s && s[e];
        f(s, e)
      }
    }
  }
  function At(t, e) {
    return t.getAttribute ? (' ' + (t.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + e + ' ') > - 1 : !1
  }
  function Tt(t, e) {
    e && t.setAttribute && o(e.split(' '), function (e) {
      t.setAttribute('class', dr((' ' + (t.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').replace(' ' + dr(e) + ' ', ' ')))
    })
  }
  function Dt(t, e) {
    if (e && t.setAttribute) {
      var n = (' ' + (t.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ');
      o(e.split(' '), function (t) {
        t = dr(t),
        - 1 === n.indexOf(' ' + t + ' ') && (n += t + ' ')
      }),
      t.setAttribute('class', dr(n))
    }
  }
  function Ot(t, e) {
    if (e) if (e.nodeType) t[t.length++] = e;
     else {
      var n = e.length;
      if ('number' == typeof n && e.window !== e) {
        if (n) for (var r = 0; n > r; r++) t[t.length++] = e[r]
      } else t[t.length++] = e
    }
  }
  function Mt(t, e) {
    return jt(t, '$' + (e || 'ngController') + 'Controller')
  }
  function jt(t, e, r) {
    t.nodeType == xr && (t = t.documentElement);
    for (var i = hr(e) ? e : [
      e
    ]; t; ) {
      for (var o = 0, a = i.length; a > o; o++) if ((r = er.data(t, i[o])) !== n) return r;
      t = t.parentNode || t.nodeType === Cr && t.host
    }
  }
  function Pt(t) {
    for (xt(t, !0); t.firstChild; ) t.removeChild(t.firstChild)
  }
  function Nt(t, e) {
    e || xt(t);
    var n = t.parentNode;
    n && n.removeChild(t)
  }
  function It(e, n) {
    n = n || t,
    'complete' === n.document.readyState ? n.setTimeout(e)  : er(n).on('load', e)
  }
  function Rt(t, e) {
    var n = qr[e.toLowerCase()];
    return n && Fr[N(t)] && n
  }
  function Vt(t, e) {
    var n = t.nodeName;
    return ('INPUT' === n || 'TEXTAREA' === n) && Hr[e]
  }
  function Ut(t, e) {
    var n = function (n, r) {
      n.isDefaultPrevented = function () {
        return n.defaultPrevented
      };
      var i = e[r || n.type],
      o = i ? i.length : 0;
      if (o) {
        if (m(n.immediatePropagationStopped)) {
          var a = n.stopImmediatePropagation;
          n.stopImmediatePropagation = function () {
            n.immediatePropagationStopped = !0,
            n.stopPropagation && n.stopPropagation(),
            a && a.call(n)
          }
        }
        n.isImmediatePropagationStopped = function () {
          return n.immediatePropagationStopped === !0
        },
        o > 1 && (i = V(i));
        for (var s = 0; o > s; s++) n.isImmediatePropagationStopped() || i[s].call(t, n)
      }
    };
    return n.elem = t,
    n
  }
  function qt() {
    this.$get = function () {
      return f(wt, {
        hasClass: function (t, e) {
          return t.attr && (t = t[0]),
          At(t, e)
        },
        addClass: function (t, e) {
          return t.attr && (t = t[0]),
          Dt(t, e)
        },
        removeClass: function (t, e) {
          return t.attr && (t = t[0]),
          Tt(t, e)
        }
      })
    }
  }
  function Ft(t, e) {
    var n = t && t.$$hashKey;
    if (n) return 'function' == typeof n && (n = t.$$hashKey()),
    n;
    var r = typeof t;
    return n = 'function' == r || 'object' == r && null !== t ? t.$$hashKey = r + ':' + (e || c) ()  : r + ':' + t
  }
  function Ht(t, e) {
    if (e) {
      var n = 0;
      this.nextUid = function () {
        return ++n
      }
    }
    o(t, this.put, this)
  }
  function _t(t) {
    var e = t.toString().replace(Wr, ''),
    n = e.match(_r);
    return n ? 'function(' + (n[1] || '').replace(/[\s\r\n]+/, ' ') + ')' : 'fn'
  }
  function Bt(t, e, n) {
    var r,
    i,
    a,
    s;
    if ('function' == typeof t) {
      if (!(r = t.$inject)) {
        if (r = [
        ], t.length) {
          if (e) throw w(n) && n || (n = t.name || _t(t)),
          zr('strictdi', '{0} is not using explicit annotation and cannot be invoked in strict mode', n);
          i = t.toString().replace(Wr, ''),
          a = i.match(_r),
          o(a[1].split(Br), function (t) {
            t.replace(Lr, function (t, e, n) {
              r.push(n)
            })
          })
        }
        t.$inject = r
      }
    } else hr(t) ? (s = t.length - 1, ot(t[s], 'fn'), r = t.slice(0, s))  : ot(t, 'fn', !0);
    return r
  }
  function Lt(t, e) {
    function r(t) {
      return function (e, n) {
        return y(e) ? void o(e, u(t))  : t(e, n)
      }
    }
    function i(t, e) {
      if (at(t, 'service'), (C(e) || hr(e)) && (e = k.instantiate(e)), !e.$get) throw zr('pget', 'Provider \'{0}\' must define $get factory method.', t);
      return E[t + b] = e
    }
    function a(t, e) {
      return function () {
        var n = T.invoke(e, this);
        if (m(n)) throw zr('undef', 'Provider \'{0}\' must return a value from $get factory method.', t);
        return n
      }
    }
    function s(t, e, n) {
      return i(t, {
        $get: n !== !1 ? a(t, e)  : e
      })
    }
    function c(t, e) {
      return s(t, [
        '$injector',
        function (t) {
          return t.instantiate(e)
        }
      ])
    }
    function l(t, e) {
      return s(t, v(e), !1)
    }
    function f(t, e) {
      at(t, 'constant'),
      E[t] = e,
      A[t] = e
    }
    function h(t, e) {
      var n = k.get(t + b),
      r = n.$get;
      n.$get = function () {
        var t = T.invoke(r, n);
        return T.invoke(e, null, {
          $delegate: t
        })
      }
    }
    function d(t) {
      var e,
      n = [
      ];
      return o(t, function (t) {
        function r(t) {
          var e,
          n;
          for (e = 0, n = t.length; n > e; e++) {
            var r = t[e],
            i = k.get(r[0]);
            i[r[1]].apply(i, r[2])
          }
        }
        if (!S.get(t)) {
          S.put(t, !0);
          try {
            w(t) ? (e = rr(t), n = n.concat(d(e.requires)).concat(e._runBlocks), r(e._invokeQueue), r(e._configBlocks))  : C(t) ? n.push(k.invoke(t))  : hr(t) ? n.push(k.invoke(t))  : ot(t, 'module')
          } catch (i) {
            throw hr(t) && (t = t[t.length - 1]),
            i.message && i.stack && - 1 == i.stack.indexOf(i.message) && (i = i.message + '\n' + i.stack),
            zr('modulerr', 'Failed to instantiate module {0} due to:\n{1}', t, i.stack || i.message || i)
          }
        }
      }),
      n
    }
    function $(t, n) {
      function r(e, r) {
        if (t.hasOwnProperty(e)) {
          if (t[e] === g) throw zr('cdep', 'Circular dependency found: {0}', e + ' <- ' + x.join(' <- '));
          return t[e]
        }
        try {
          return x.unshift(e),
          t[e] = g,
          t[e] = n(e, r)
        } catch (i) {
          throw t[e] === g && delete t[e],
          i
        } finally {
          x.shift()
        }
      }
      function i(t, n, i, o) {
        'string' == typeof i && (o = i, i = null);
        var a,
        s,
        u,
        c = [
        ],
        l = Lt.$$annotate(t, e, o);
        for (s = 0, a = l.length; a > s; s++) {
          if (u = l[s], 'string' != typeof u) throw zr('itkn', 'Incorrect injection token! Expected service name as string, got {0}', u);
          c.push(i && i.hasOwnProperty(u) ? i[u] : r(u, o))
        }
        return hr(t) && (t = t[a]),
        t.apply(n, c)
      }
      function o(t, e, n) {
        var r = Object.create((hr(t) ? t[t.length - 1] : t).prototype || null),
        o = i(t, r, e, n);
        return y(o) || C(o) ? o : r
      }
      return {
        invoke: i,
        instantiate: o,
        get: r,
        annotate: Lt.$$annotate,
        has: function (e) {
          return E.hasOwnProperty(e + b) || t.hasOwnProperty(e)
        }
      }
    }
    e = e === !0;
    var g = {
    },
    b = 'Provider',
    x = [
    ],
    S = new Ht([], !0),
    E = {
      $provide: {
        provider: r(i),
        factory: r(s),
        service: r(c),
        value: r(l),
        constant: r(f),
        decorator: h
      }
    },
    k = E.$injector = $(E, function (t, e) {
      throw cr.isString(e) && x.push(e),
      zr('unpr', 'Unknown provider: {0}', x.join(' <- '))
    }),
    A = {
    },
    T = A.$injector = $(A, function (t, e) {
      var r = k.get(t + b, e);
      return T.invoke(r.$get, r, n, t)
    });
    return o(d(t), function (t) {
      T.invoke(t || p)
    }),
    T
  }
  function Wt() {
    var t = !0;
    this.disableAutoScrolling = function () {
      t = !1
    },
    this.$get = [
      '$window',
      '$location',
      '$rootScope',
      function (e, n, r) {
        function i(t) {
          var e = null;
          return Array.prototype.some.call(t, function (t) {
            return 'a' === N(t) ? (e = t, !0)  : void 0
          }),
          e
        }
        function o() {
          var t = s.yOffset;
          if (C(t)) t = t();
           else if (j(t)) {
            var n = t[0],
            r = e.getComputedStyle(n);
            t = 'fixed' !== r.position ? 0 : n.getBoundingClientRect().bottom
          } else b(t) || (t = 0);
          return t
        }
        function a(t) {
          if (t) {
            t.scrollIntoView();
            var n = o();
            if (n) {
              var r = t.getBoundingClientRect().top;
              e.scrollBy(0, r - n)
            }
          } else e.scrollTo(0, 0)
        }
        function s() {
          var t,
          e = n.hash();
          e ? (t = u.getElementById(e)) ? a(t)  : (t = i(u.getElementsByName(e))) ? a(t)  : 'top' === e && a(null)  : a(null)
        }
        var u = e.document;
        return t && r.$watch(function () {
          return n.hash()
        }, function (t, e) {
          (t !== e || '' !== t) && It(function () {
            r.$evalAsync(s)
          })
        }),
        s
      }
    ]
  }
  function zt() {
    this.$get = [
      '$$rAF',
      '$timeout',
      function (t, e) {
        return t.supported ? function (e) {
          return t(e)
        }
         : function (t) {
          return e(t, 0, !1)
        }
      }
    ]
  }
  function Gt(t, e, r, i) {
    function a(t) {
      try {
        t.apply(null, F(arguments, 1))
      } finally {
        if (S--, 0 === S) for (; E.length; ) try {
          E.pop() ()
        } catch (e) {
          r.error(e)
        }
      }
    }
    function s(t) {
      var e = t.indexOf('#');
      return - 1 === e ? '' : t.substr(e + 1)
    }
    function u(t, e) {
      !function n() {
        o(A, function (t) {
          t()
        }),
        k = e(n, t)
      }()
    }
    function c() {
      f(),
      h()
    }
    function l() {
      try {
        return y.state
      } catch (t) {
      }
    }
    function f() {
      T = l(),
      T = m(T) ? null : T,
      U(T, I) && (T = I),
      I = T
    }
    function h() {
      (O !== $.url() || D !== T) && (O = $.url(), D = T, o(P, function (t) {
        t($.url(), T)
      }))
    }
    function d(t) {
      try {
        return decodeURIComponent(t)
      } catch (e) {
        return t
      }
    }
    var $ = this,
    v = e[0],
    g = t.location,
    y = t.history,
    b = t.setTimeout,
    x = t.clearTimeout,
    C = {
    };
    $.isMock = !1;
    var S = 0,
    E = [
    ];
    $.$$completeOutstandingRequest = a,
    $.$$incOutstandingRequestCount = function () {
      S++
    },
    $.notifyWhenNoOutstandingRequests = function (t) {
      o(A, function (t) {
        t()
      }),
      0 === S ? t()  : E.push(t)
    };
    var k,
    A = [
    ];
    $.addPollFn = function (t) {
      return m(k) && u(100, b),
      A.push(t),
      t
    };
    var T,
    D,
    O = g.href,
    M = e.find('base'),
    j = null;
    f(),
    D = T,
    $.url = function (e, n, r) {
      if (m(r) && (r = null), g !== t.location && (g = t.location), y !== t.history && (y = t.history), e) {
        var o = D === r;
        if (O === e && (!i.history || o)) return $;
        var a = O && be(O) === be(e);
        return O = e,
        D = r,
        !i.history || a && o ? (a || (j = e), n ? g.replace(e)  : a ? g.hash = s(e)  : g.href = e)  : (y[n ? 'replaceState' : 'pushState'](r, '', e), f(), D = T),
        $
      }
      return j || g.href.replace(/%27/g, '\'')
    },
    $.state = function () {
      return T
    };
    var P = [
    ],
    N = !1,
    I = null;
    $.onUrlChange = function (e) {
      return N || (i.history && er(t).on('popstate', c), er(t).on('hashchange', c), N = !0),
      P.push(e),
      e
    },
    $.$$checkUrlChange = h,
    $.baseHref = function () {
      var t = M.attr('href');
      return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, '')  : ''
    };
    var R = {
    },
    V = '',
    q = $.baseHref();
    $.cookies = function (t, e) {
      var i,
      o,
      a,
      s,
      u;
      if (!t) {
        if (v.cookie !== V) for (V = v.cookie, o = V.split('; '), R = {
        }, s = 0; s < o.length; s++) a = o[s],
        u = a.indexOf('='),
        u > 0 && (t = d(a.substring(0, u)), R[t] === n && (R[t] = d(a.substring(u + 1))));
        return R
      }
      e === n ? v.cookie = encodeURIComponent(t) + '=;path=' + q + ';expires=Thu, 01 Jan 1970 00:00:00 GMT' : w(e) && (i = (v.cookie = encodeURIComponent(t) + '=' + encodeURIComponent(e) + ';path=' + q).length + 1, i > 4096 && r.warn('Cookie \'' + t + '\' possibly not set or overflowed because it was too large (' + i + ' > 4096 bytes)!'))
    },
    $.defer = function (t, e) {
      var n;
      return S++,
      n = b(function () {
        delete C[n],
        a(t)
      }, e || 0),
      C[n] = !0,
      n
    },
    $.defer.cancel = function (t) {
      return C[t] ? (delete C[t], x(t), a(p), !0)  : !1
    }
  }
  function Yt() {
    this.$get = [
      '$window',
      '$log',
      '$sniffer',
      '$document',
      function (t, e, n, r) {
        return new Gt(t, r, e, n)
      }
    ]
  }
  function Jt() {
    this.$get = function () {
      function t(t, n) {
        function i(t) {
          t != h && (d ? d == t && (d = t.n)  : d = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
        }
        function o(t, e) {
          t != e && (t && (t.p = e), e && (e.n = t))
        }
        if (t in e) throw r('$cacheFactory') ('iid', 'CacheId \'{0}\' is already taken!', t);
        var a = 0,
        s = f({
        }, n, {
          id: t
        }),
        u = {
        },
        c = n && n.capacity || Number.MAX_VALUE,
        l = {
        },
        h = null,
        d = null;
        return e[t] = {
          put: function (t, e) {
            if (c < Number.MAX_VALUE) {
              var n = l[t] || (l[t] = {
                key: t
              });
              i(n)
            }
            if (!m(e)) return t in u || a++,
            u[t] = e,
            a > c && this.remove(d.key),
            e
          },
          get: function (t) {
            if (c < Number.MAX_VALUE) {
              var e = l[t];
              if (!e) return;
              i(e)
            }
            return u[t]
          },
          remove: function (t) {
            if (c < Number.MAX_VALUE) {
              var e = l[t];
              if (!e) return;
              e == h && (h = e.p),
              e == d && (d = e.n),
              o(e.n, e.p),
              delete l[t]
            }
            delete u[t],
            a--
          },
          removeAll: function () {
            u = {
            },
            a = 0,
            l = {
            },
            h = d = null
          },
          destroy: function () {
            u = null,
            s = null,
            l = null,
            delete e[t]
          },
          info: function () {
            return f({
            }, s, {
              size: a
            })
          }
        }
      }
      var e = {
      };
      return t.info = function () {
        var t = {
        };
        return o(e, function (e, n) {
          t[n] = e.info()
        }),
        t
      },
      t.get = function (t) {
        return e[t]
      },
      t
    }
  }
  function Kt() {
    this.$get = [
      '$cacheFactory',
      function (t) {
        return t('templates')
      }
    ]
  }
  function Xt(t, r) {
    function i(t, e) {
      var n = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
      r = {
      };
      return o(t, function (t, i) {
        var o = t.match(n);
        if (!o) throw Jr('iscp', 'Invalid isolate scope definition for directive \'{0}\'. Definition: {... {1}: \'{2}\' ...}', e, i, t);
        r[i] = {
          mode: o[1][0],
          collection: '*' === o[2],
          optional: '?' === o[3],
          attrName: o[4] || i
        }
      }),
      r
    }
    var a = {
    },
    s = 'Directive',
    c = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
    l = /(([\w\-]+)(?:\:([^;]+))?;?)/,
    h = P('ngSrc,ngSrcset,src,srcset'),
    m = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
    b = /^(on[a-z]+|formaction)$/;
    this.directive = function S(e, n) {
      return at(e, 'directive'),
      w(e) ? (it(n, 'directiveFactory'), a.hasOwnProperty(e) || (a[e] = [
      ], t.factory(e + s, [
        '$injector',
        '$exceptionHandler',
        function (t, n) {
          var r = [
          ];
          return o(a[e], function (o, a) {
            try {
              var s = t.invoke(o);
              C(s) ? s = {
                compile: v(s)
              }
               : !s.compile && s.link && (s.compile = v(s.link)),
              s.priority = s.priority || 0,
              s.index = a,
              s.name = s.name || e,
              s.require = s.require || s.controller && s.name,
              s.restrict = s.restrict || 'EA',
              y(s.scope) && (s.$$isolateBindings = i(s.scope, s.name)),
              r.push(s)
            } catch (u) {
              n(u)
            }
          }),
          r
        }
      ])), a[e].push(n))  : o(e, u(S)),
      this
    },
    this.aHrefSanitizationWhitelist = function (t) {
      return g(t) ? (r.aHrefSanitizationWhitelist(t), this)  : r.aHrefSanitizationWhitelist()
    },
    this.imgSrcSanitizationWhitelist = function (t) {
      return g(t) ? (r.imgSrcSanitizationWhitelist(t), this)  : r.imgSrcSanitizationWhitelist()
    };
    var x = !0;
    this.debugInfoEnabled = function (t) {
      return g(t) ? (x = t, this)  : x
    },
    this.$get = [
      '$injector',
      '$interpolate',
      '$exceptionHandler',
      '$templateRequest',
      '$parse',
      '$controller',
      '$rootScope',
      '$document',
      '$sce',
      '$animate',
      '$$sanitizeUri',
      function (t, r, i, u, v, g, S, E, A, T, D) {
        function O(t, e) {
          try {
            t.addClass(e)
          } catch (n) {
          }
        }
        function M(t, e, n, r, i) {
          t instanceof er || (t = er(t)),
          o(t, function (e, n) {
            e.nodeType == wr && e.nodeValue.match(/\S+/) && (t[n] = er(e).wrap('<span></span>').parent() [0])
          });
          var a = P(t, e, t, n, r, i);
          M.$$addScopeClass(t);
          var s = null;
          return function (e, n, r) {
            it(e, 'scope'),
            r = r || {
            };
            var i = r.parentBoundTranscludeFn,
            o = r.transcludeControllers,
            u = r.futureParentElement;
            i && i.$$boundTransclude && (i = i.$$boundTransclude),
            s || (s = j(u));
            var c;
            if (c = 'html' !== s ? er(Z(s, er('<div>').append(t).html()))  : n ? Ur.clone.call(t)  : t, o) for (var l in o) c.data('$' + l + 'Controller', o[l].instance);
            return M.$$addScopeInfo(c, e),
            n && n(c, e),
            a && a(e, c, c, i),
            c
          }
        }
        function j(t) {
          var e = t && t[0];
          return e && 'foreignobject' !== N(e) && e.toString().match(/SVG/) ? 'svg' : 'html'
        }
        function P(t, e, r, i, o, a) {
          function s(t, r, i, o) {
            var a,
            s,
            u,
            c,
            l,
            f,
            h,
            d,
            v;
            if (p) {
              var m = r.length;
              for (v = new Array(m), l = 0; l < $.length; l += 3) h = $[l],
              v[h] = r[h]
            } else v = r;
            for (l = 0, f = $.length; f > l; ) u = v[$[l++]],
            a = $[l++],
            s = $[l++],
            a ? (a.scope ? (c = t.$new(), M.$$addScopeInfo(er(u), c))  : c = t, d = a.transcludeOnThisElement ? R(t, a.transclude, o, a.elementTranscludeOnThisElement)  : !a.templateOnThisElement && o ? o : !o && e ? R(t, e)  : null, a(s, c, u, i, d))  : s && s(t, u.childNodes, n, o)
          }
          for (var u, c, l, f, h, d, p, $ = [
          ], v = 0; v < t.length; v++) u = new at,
          c = V(t[v], [
          ], u, 0 === v ? i : n, o),
          l = c.length ? _(c, t[v], u, e, r, null, [
          ], [
          ], a)  : null,
          l && l.scope && M.$$addScopeClass(u.$$element),
          h = l && l.terminal || !(f = t[v].childNodes) || !f.length ? null : P(f, l ? (l.transcludeOnThisElement || !l.templateOnThisElement) && l.transclude : e),
          (l || h) && ($.push(v, l, h), d = !0, p = p || l),
          a = null;
          return d ? s : null
        }
        function R(t, e, n, r) {
          var i = function (r, i, o, a, s) {
            return r || (r = t.$new(!1, s), r.$$transcluded = !0),
            e(r, i, {
              parentBoundTranscludeFn: n,
              transcludeControllers: o,
              futureParentElement: a
            })
          };
          return i
        }
        function V(t, e, n, r, i) {
          var o,
          a,
          s = t.nodeType,
          u = n.$attr;
          switch (s) {
            case yr:
              L(e, Zt(N(t)), 'E', r, i);
              for (var f, h, d, p, $, v, m = t.attributes, g = 0, b = m && m.length; b > g; g++) {
                var x = !1,
                C = !1;
                f = m[g],
                h = f.name,
                $ = dr(f.value),
                p = Zt(h),
                (v = ft.test(p)) && (h = h.replace(Kr, '').substr(8).replace(/_(.)/g, function (t, e) {
                  return e.toUpperCase()
                }));
                var S = p.replace(/(Start|End)$/, '');
                z(S) && p === S + 'Start' && (x = h, C = h.substr(0, h.length - 5) + 'end', h = h.substr(0, h.length - 6)),
                d = Zt(h.toLowerCase()),
                u[d] = h,
                (v || !n.hasOwnProperty(d)) && (n[d] = $, Rt(t, d) && (n[d] = !0)),
                tt(t, e, $, d, v),
                L(e, d, 'A', r, i, x, C)
              }
              if (a = t.className, y(a) && (a = a.animVal), w(a) && '' !== a) for (; o = l.exec(a); ) d = Zt(o[2]),
              L(e, d, 'C', r, i) && (n[d] = dr(o[3])),
              a = a.substr(o.index + o[0].length);
              break;
            case wr:
              X(e, t.nodeValue);
              break;
            case br:
              try {
                o = c.exec(t.nodeValue),
                o && (d = Zt(o[1]), L(e, d, 'M', r, i) && (n[d] = dr(o[2])))
              } catch (E) {
              }
          }
          return e.sort(J),
          e
        }
        function q(t, e, n) {
          var r = [
          ],
          i = 0;
          if (e && t.hasAttribute && t.hasAttribute(e)) {
            do {
              if (!t) throw Jr('uterdir', 'Unterminated attribute, found \'{0}\' but no matching \'{1}\' found.', e, n);
              t.nodeType == yr && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--),
              r.push(t),
              t = t.nextSibling
            } while (i > 0)
          } else r.push(t);
          return er(r)
        }
        function H(t, e, n) {
          return function (r, i, o, a, s) {
            return i = q(i[0], e, n),
            t(r, i, o, a, s)
          }
        }
        function _(t, a, s, u, c, l, f, h, d) {
          function p(t, e, n, r) {
            t && (n && (t = H(t, n, r)), t.require = E.require, t.directiveName = A, (N === E || E.$$isolateScope) && (t = rt(t, {
              isolateScope: !0
            })), f.push(t)),
            e && (n && (e = H(e, n, r)), e.require = E.require, e.directiveName = A, (N === E || E.$$isolateScope) && (e = rt(e, {
              isolateScope: !0
            })), h.push(e))
          }
          function $(t, e, n, r) {
            var i,
            a,
            s = 'data',
            u = !1,
            c = n;
            if (w(e)) {
              if (a = e.match(m), e = e.substring(a[0].length), a[3] && (a[1] ? a[3] = null : a[1] = a[3]), '^' === a[1] ? s = 'inheritedData' : '^^' === a[1] && (s = 'inheritedData', c = n.parent()), '?' === a[2] && (u = !0), i = null, r && 'data' === s && (i = r[e]) && (i = i.instance), i = i || c[s]('$' + e + 'Controller'), !i && !u) throw Jr('ctreq', 'Controller \'{0}\', required by directive \'{1}\', can\'t be found!', e, t);
              return i || null
            }
            return hr(e) && (i = [
            ], o(e, function (e) {
              i.push($(t, e, n, r))
            })),
            i
          }
          function b(t, e, i, u, c) {
            function l(t, e, r) {
              var i;
              return k(t) || (r = e, e = t, t = n),
              z && (i = b),
              r || (r = z ? C.parent()  : C),
              c(t, e, i, r, D)
            }
            var d,
            p,
            m,
            y,
            w,
            b,
            x,
            C,
            E;
            if (a === i ? (E = s, C = s.$$element)  : (C = er(i), E = new at(C, s)), N && (w = e.$new(!0)), c && (x = l, x.$$boundTransclude = c), P && (S = {
            }, b = {
            }, o(P, function (t) {
              var n,
              r = {
                $scope: t === N || t.$$isolateScope ? w : e,
                $element: C,
                $attrs: E,
                $transclude: x
              };
              y = t.controller,
              '@' == y && (y = E[t.name]),
              n = g(y, r, !0, t.controllerAs),
              b[t.name] = n,
              z || C.data('$' + t.name + 'Controller', n.instance),
              S[t.name] = n
            })), N) {
              M.$$addScopeInfo(C, w, !0, !(I && (I === N || I === N.$$originalDirective))),
              M.$$addScopeClass(C, !0);
              var A = S && S[N.name],
              T = w;
              A && A.identifier && N.bindToController === !0 && (T = A.instance),
              o(w.$$isolateBindings = N.$$isolateBindings, function (t, n) {
                var i,
                o,
                a,
                s,
                u = t.attrName,
                c = t.optional,
                l = t.mode;
                switch (l) {
                  case '@':
                    E.$observe(u, function (t) {
                      T[n] = t
                    }),
                    E.$$observers[u].$$scope = e,
                    E[u] && (T[n] = r(E[u]) (e));
                    break;
                  case '=':
                    if (c && !E[u]) return;
                    o = v(E[u]),
                    s = o.literal ? U : function (t, e) {
                      return t === e || t !== t && e !== e
                    },
                    a = o.assign || function () {
                      throw i = T[n] = o(e),
                      Jr('nonassign', 'Expression \'{0}\' used with directive \'{1}\' is non-assignable!', E[u], N.name)
                    },
                    i = T[n] = o(e);
                    var f = function (t) {
                      return s(t, T[n]) || (s(t, i) ? a(e, t = T[n])  : T[n] = t),
                      i = t
                    };
                    f.$stateful = !0;
                    var h;
                    h = t.collection ? e.$watchCollection(E[u], f)  : e.$watch(v(E[u], f), null, o.literal),
                    w.$on('$destroy', h);
                    break;
                  case '&':
                    o = v(E[u]),
                    T[n] = function (t) {
                      return o(e, t)
                    }
                }
              })
            }
            for (S && (o(S, function (t) {
              t()
            }), S = null), d = 0, p = f.length; p > d; d++) m = f[d],
            ot(m, m.isolateScope ? w : e, C, E, m.require && $(m.directiveName, m.require, C, b), x);
            var D = e;
            for (N && (N.template || null === N.templateUrl) && (D = w), t && t(D, i.childNodes, n, c), d = h.length - 1; d >= 0; d--) m = h[d],
            ot(m, m.isolateScope ? w : e, C, E, m.require && $(m.directiveName, m.require, C, b), x)
          }
          d = d || {
          };
          for (var x, S, E, A, T, D, O, j = - Number.MAX_VALUE, P = d.controllerDirectives, N = d.newIsolateScopeDirective, I = d.templateDirective, R = d.nonTlbTranscludeDirective, _ = !1, L = !1, z = d.hasElementTranscludeDirective, J = s.$$element = er(a), X = l, Q = u, tt = 0, nt = t.length; nt > tt; tt++) {
            E = t[tt];
            var it = E.$$start,
            st = E.$$end;
            if (it && (J = q(a, it, st)), T = n, j > E.priority) break;
            if ((O = E.scope) && (E.templateUrl || (y(O) ? (K('new/isolated scope', N || x, E, J), N = E)  : K('new/isolated scope', N, E, J)), x = x || E), A = E.name, !E.templateUrl && E.controller && (O = E.controller, P = P || {
            }, K('\'' + A + '\' controller', P[A], E, J), P[A] = E), (O = E.transclude) && (_ = !0, E.$$tlb || (K('transclusion', R, E, J), R = E), 'element' == O ? (z = !0, j = E.priority, T = J, J = s.$$element = er(e.createComment(' ' + A + ': ' + s[A] + ' ')), a = J[0], et(c, F(T), a), Q = M(T, u, j, X && X.name, {
              nonTlbTranscludeDirective: R
            }))  : (T = er(bt(a)).contents(), J.empty(), Q = M(T, u))), E.template) if (L = !0, K('template', I, E, J), I = E, O = C(E.template) ? E.template(J, s)  : E.template, O = lt(O), E.replace) {
              if (X = E, T = vt(O) ? [
              ] : te(Z(E.templateNamespace, dr(O))), a = T[0], 1 != T.length || a.nodeType !== yr) throw Jr('tplrt', 'Template for directive \'{0}\' must have exactly one root element. {1}', A, '');
              et(c, J, a);
              var ut = {
                $attr: {
                }
              },
              ct = V(a, [
              ], ut),
              ft = t.splice(tt + 1, t.length - (tt + 1));
              N && B(ct),
              t = t.concat(ct).concat(ft),
              G(s, ut),
              nt = t.length
            } else J.html(O);
            if (E.templateUrl) L = !0,
            K('template', I, E, J),
            I = E,
            E.replace && (X = E),
            b = Y(t.splice(tt, t.length - tt), J, s, c, _ && Q, f, h, {
              controllerDirectives: P,
              newIsolateScopeDirective: N,
              templateDirective: I,
              nonTlbTranscludeDirective: R
            }),
            nt = t.length;
             else if (E.compile) try {
              D = E.compile(J, s, Q),
              C(D) ? p(null, D, it, st)  : D && p(D.pre, D.post, it, st)
            } catch (ht) {
              i(ht, W(J))
            }
            E.terminal && (b.terminal = !0, j = Math.max(j, E.priority))
          }
          return b.scope = x && x.scope === !0,
          b.transcludeOnThisElement = _,
          b.elementTranscludeOnThisElement = z,
          b.templateOnThisElement = L,
          b.transclude = Q,
          d.hasElementTranscludeDirective = z,
          b
        }
        function B(t) {
          for (var e = 0, n = t.length; n > e; e++) t[e] = d(t[e], {
            $$isolateScope: !0
          })
        }
        function L(e, r, o, u, c, l, f) {
          if (r === c) return null;
          var h = null;
          if (a.hasOwnProperty(r)) for (var p, $ = t.get(r + s), v = 0, m = $.length; m > v; v++) try {
            p = $[v],
            (u === n || u > p.priority) && - 1 != p.restrict.indexOf(o) && (l && (p = d(p, {
              $$start: l,
              $$end: f
            })), e.push(p), h = p)
          } catch (g) {
            i(g)
          }
          return h
        }
        function z(e) {
          if (a.hasOwnProperty(e)) for (var n, r = t.get(e + s), i = 0, o = r.length; o > i; i++) if (n = r[i], n.multiElement) return !0;
          return !1
        }
        function G(t, e) {
          var n = e.$attr,
          r = t.$attr,
          i = t.$$element;
          o(t, function (r, i) {
            '$' != i.charAt(0) && (e[i] && e[i] !== r && (r += ('style' === i ? ';' : ' ') + e[i]), t.$set(i, r, !0, n[i]))
          }),
          o(e, function (e, o) {
            'class' == o ? (O(i, e), t['class'] = (t['class'] ? t['class'] + ' ' : '') + e)  : 'style' == o ? (i.attr('style', i.attr('style') + ';' + e), t.style = (t.style ? t.style + ';' : '') + e)  : '$' == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, r[o] = n[o])
          })
        }
        function Y(t, e, n, r, i, a, s, c) {
          var l,
          f,
          h = [
          ],
          p = e[0],
          $ = t.shift(),
          v = d($, {
            templateUrl: null,
            transclude: null,
            replace: null,
            $$originalDirective: $
          }),
          m = C($.templateUrl) ? $.templateUrl(e, n)  : $.templateUrl,
          g = $.templateNamespace;
          return e.empty(),
          u(A.getTrustedResourceUrl(m)).then(function (u) {
            var d,
            w,
            b,
            x;
            if (u = lt(u), $.replace) {
              if (b = vt(u) ? [
              ] : te(Z(g, dr(u))), d = b[0], 1 != b.length || d.nodeType !== yr) throw Jr('tplrt', 'Template for directive \'{0}\' must have exactly one root element. {1}', $.name, m);
              w = {
                $attr: {
                }
              },
              et(r, e, d);
              var C = V(d, [
              ], w);
              y($.scope) && B(C),
              t = C.concat(t),
              G(n, w)
            } else d = p,
            e.html(u);
            for (t.unshift(v), l = _(t, d, n, i, e, $, a, s, c), o(r, function (t, n) {
              t == d && (r[n] = e[0])
            }), f = P(e[0].childNodes, i); h.length; ) {
              var S = h.shift(),
              E = h.shift(),
              k = h.shift(),
              A = h.shift(),
              T = e[0];
              if (!S.$$destroyed) {
                if (E !== p) {
                  var D = E.className;
                  c.hasElementTranscludeDirective && $.replace || (T = bt(d)),
                  et(k, er(E), T),
                  O(er(T), D)
                }
                x = l.transcludeOnThisElement ? R(S, l.transclude, A)  : A,
                l(f, S, T, r, x)
              }
            }
            h = null
          }),
          function (t, e, n, r, i) {
            var o = i;
            e.$$destroyed || (h ? h.push(e, n, r, o)  : (l.transcludeOnThisElement && (o = R(e, l.transclude, i)), l(f, e, n, r, o)))
          }
        }
        function J(t, e) {
          var n = e.priority - t.priority;
          return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? - 1 : 1 : t.index - e.index
        }
        function K(t, e, n, r) {
          if (e) throw Jr('multidir', 'Multiple directives [{0}, {1}] asking for {2} on: {3}', e.name, n.name, t, W(r))
        }
        function X(t, e) {
          var n = r(e, !0);
          n && t.push({
            priority: 0,
            compile: function (t) {
              var e = t.parent(),
              r = !!e.length;
              return r && M.$$addBindingClass(e),
              function (t, e) {
                var i = e.parent();
                r || M.$$addBindingClass(i),
                M.$$addBindingInfo(i, n.expressions),
                t.$watch(n, function (t) {
                  e[0].nodeValue = t
                })
              }
            }
          })
        }
        function Z(t, n) {
          switch (t = Jn(t || 'html')) {
            case 'svg':
            case 'math':
              var r = e.createElement('div');
              return r.innerHTML = '<' + t + '>' + n + '</' + t + '>',
              r.childNodes[0].childNodes;
            default:
              return n
          }
        }
        function Q(t, e) {
          if ('srcdoc' == e) return A.HTML;
          var n = N(t);
          return 'xlinkHref' == e || 'form' == n && 'action' == e || 'img' != n && ('src' == e || 'ngSrc' == e) ? A.RESOURCE_URL : void 0
        }
        function tt(t, e, n, i, o) {
          var a = Q(t, i);
          o = h[i] || o;
          var s = r(n, !0, a, o);
          if (s) {
            if ('multiple' === i && 'select' === N(t)) throw Jr('selmulti', 'Binding to the \'multiple\' attribute is not supported. Element: {0}', W(t));
            e.push({
              priority: 100,
              compile: function () {
                return {
                  pre: function (t, e, u) {
                    var c = u.$$observers || (u.$$observers = {
                    });
                    if (b.test(i)) throw Jr('nodomevents', 'Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.');
                    var l = u[i];
                    l !== n && (s = l && r(l, !0, a, o), n = l),
                    s && (u[i] = s(t), (c[i] || (c[i] = [
                    ])).$$inter = !0, (u.$$observers && u.$$observers[i].$$scope || t).$watch(s, function (t, e) {
                      'class' === i && t != e ? u.$updateClass(t, e)  : u.$set(i, t)
                    }))
                  }
                }
              }
            })
          }
        }
        function et(t, n, r) {
          var i,
          o,
          a = n[0],
          s = n.length,
          u = a.parentNode;
          if (t) for (i = 0, o = t.length; o > i; i++) if (t[i] == a) {
            t[i++] = r;
            for (var c = i, l = c + s - 1, f = t.length; f > c; c++, l++) f > l ? t[c] = t[l] : delete t[c];
            t.length -= s - 1,
            t.context === a && (t.context = r);
            break
          }
          u && u.replaceChild(r, a);
          var h = e.createDocumentFragment();
          h.appendChild(a),
          er(r).data(er(a).data()),
          nr ? (fr = !0, nr.cleanData([a]))  : delete er.cache[a[er.expando]];
          for (var d = 1, p = n.length; p > d; d++) {
            var $ = n[d];
            er($).remove(),
            h.appendChild($),
            delete n[d]
          }
          n[0] = r,
          n.length = 1
        }
        function rt(t, e) {
          return f(function () {
            return t.apply(null, arguments)
          }, t, e)
        }
        function ot(t, e, n, r, o, a) {
          try {
            t(e, n, r, o, a)
          } catch (s) {
            i(s, W(n))
          }
        }
        var at = function (t, e) {
          if (e) {
            var n,
            r,
            i,
            o = Object.keys(e);
            for (n = 0, r = o.length; r > n; n++) i = o[n],
            this[i] = e[i]
          } else this.$attr = {
          };
          this.$$element = t
        };
        at.prototype = {
          $normalize: Zt,
          $addClass: function (t) {
            t && t.length > 0 && T.addClass(this.$$element, t)
          },
          $removeClass: function (t) {
            t && t.length > 0 && T.removeClass(this.$$element, t)
          },
          $updateClass: function (t, e) {
            var n = Qt(t, e);
            n && n.length && T.addClass(this.$$element, n);
            var r = Qt(e, t);
            r && r.length && T.removeClass(this.$$element, r)
          },
          $set: function (t, e, r, a) {
            var s,
            u = this.$$element[0],
            c = Rt(u, t),
            l = Vt(u, t),
            f = t;
            if (c ? (this.$$element.prop(t, e), a = c)  : l && (this[l] = e, f = l), this[t] = e, a ? this.$attr[t] = a : (a = this.$attr[t], a || (this.$attr[t] = a = nt(t, '-'))), s = N(this.$$element), 'a' === s && 'href' === t || 'img' === s && 'src' === t) this[t] = e = D(e, 'src' === t);
             else if ('img' === s && 'srcset' === t) {
              for (var h = '', d = dr(e), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, $ = /\s/.test(d) ? p : /(,)/, v = d.split($), m = Math.floor(v.length / 2), g = 0; m > g; g++) {
                var y = 2 * g;
                h += D(dr(v[y]), !0),
                h += ' ' + dr(v[y + 1])
              }
              var w = dr(v[2 * g]).split(/\s/);
              h += D(dr(w[0]), !0),
              2 === w.length && (h += ' ' + dr(w[1])),
              this[t] = e = h
            }
            r !== !1 && (null === e || e === n ? this.$$element.removeAttr(a)  : this.$$element.attr(a, e));
            var b = this.$$observers;
            b && o(b[f], function (t) {
              try {
                t(e)
              } catch (n) {
                i(n)
              }
            })
          },
          $observe: function (t, e) {
            var n = this,
            r = n.$$observers || (n.$$observers = ct()),
            i = r[t] || (r[t] = [
            ]);
            return i.push(e),
            S.$evalAsync(function () {
              !i.$$inter && n.hasOwnProperty(t) && e(n[t])
            }),
            function () {
              I(i, e)
            }
          }
        };
        var st = r.startSymbol(),
        ut = r.endSymbol(),
        lt = '{{' == st || '}}' == ut ? $ : function (t) {
          return t.replace(/\{\{/g, st).replace(/}}/g, ut)
        },
        ft = /^ngAttr[A-Z]/;
        return M.$$addBindingInfo = x ? function (t, e) {
          var n = t.data('$binding') || [
          ];
          hr(e) ? n = n.concat(e)  : n.push(e),
          t.data('$binding', n)
        }
         : p,
        M.$$addBindingClass = x ? function (t) {
          O(t, 'ng-binding')
        }
         : p,
        M.$$addScopeInfo = x ? function (t, e, n, r) {
          var i = n ? r ? '$isolateScopeNoTemplate' : '$isolateScope' : '$scope';
          t.data(i, e)
        }
         : p,
        M.$$addScopeClass = x ? function (t, e) {
          O(t, e ? 'ng-isolate-scope' : 'ng-scope')
        }
         : p,
        M
      }
      ]
    }
    function Zt(t) {
      return $t(t.replace(Kr, ''))
    }
    function Qt(t, e) {
      var n = '',
      r = t.split(/\s+/),
      i = e.split(/\s+/);
      t: for (var o = 0; o < r.length; o++) {
        for (var a = r[o], s = 0; s < i.length; s++) if (a == i[s]) continue t;
        n += (n.length > 0 ? ' ' : '') + a
      }
      return n
    }
    function te(t) {
      t = er(t);
      var e = t.length;
      if (1 >= e) return t;
      for (; e--; ) {
        var n = t[e];
        n.nodeType === br && or.call(t, e, 1)
      }
      return t
    }
    function ee() {
      var t = {
      },
      e = !1,
      i = /^(\S+)(\s+as\s+(\w+))?$/;
      this.register = function (e, n) {
        at(e, 'controller'),
        y(e) ? f(t, e)  : t[e] = n
      },
      this.allowGlobals = function () {
        e = !0
      },
      this.$get = [
        '$injector',
        '$window',
        function (o, a) {
          function s(t, e, n, i) {
            if (!t || !y(t.$scope)) throw r('$controller') ('noscp', 'Cannot export controller \'{0}\' as \'{1}\'! No $scope object provided via `locals`.', i, e);
            t.$scope[e] = n
          }
          return function (r, u, c, l) {
            var h,
            d,
            p,
            $;
            if (c = c === !0, l && w(l) && ($ = l), w(r)) {
              if (d = r.match(i), !d) throw Xr('ctrlfmt', 'Badly formed controller string \'{0}\'. Must match `__name__ as __id__` or `__name__`.', r);
              p = d[1],
              $ = $ || d[3],
              r = t.hasOwnProperty(p) ? t[p] : st(u.$scope, p, !0) || (e ? st(a, p, !0)  : n),
              ot(r, p, !0)
            }
            if (c) {
              var v = (hr(r) ? r[r.length - 1] : r).prototype;
              return h = Object.create(v || null),
              $ && s(u, $, h, p || r.name),
              f(function () {
                return o.invoke(r, h, u, p),
                h
              }, {
                instance: h,
                identifier: $
              })
            }
            return h = o.instantiate(r, u, p),
            $ && s(u, $, h, p || r.name),
            h
          }
        }
      ]
    }
    function ne() {
      this.$get = [
        '$window',
        function (t) {
          return er(t.document)
        }
      ]
    }
    function re() {
      this.$get = [
        '$log',
        function (t) {
          return function (e, n) {
            t.error.apply(t, arguments)
          }
        }
      ]
    }
    function ie(t, e) {
      if (w(t)) {
        var n = t.replace(ni, '').trim();
        if (n) {
          var r = e('Content-Type');
          (r && 0 === r.indexOf(Zr) || oe(n)) && (t = L(n))
        }
      }
      return t
    }
    function oe(t) {
      var e = t.match(ti);
      return e && ei[e[0]].test(t)
    }
    function ae(t) {
      var e,
      n,
      r,
      i = ct();
      return t ? (o(t.split('\n'), function (t) {
        r = t.indexOf(':'),
        e = Jn(dr(t.substr(0, r))),
        n = dr(t.substr(r + 1)),
        e && (i[e] = i[e] ? i[e] + ', ' + n : n)
      }), i)  : i
    }
    function se(t) {
      var e = y(t) ? t : n;
      return function (n) {
        if (e || (e = ae(t)), n) {
          var r = e[Jn(n)];
          return void 0 === r && (r = null),
          r
        }
        return e
      }
    }
    function ue(t, e, n, r) {
      return C(r) ? r(t, e, n)  : (o(r, function (r) {
        t = r(t, e, n)
      }), t)
    }
    function ce(t) {
      return t >= 200 && 300 > t
    }
    function le() {
      var t = this.defaults = {
        transformResponse: [
          ie
        ],
        transformRequest: [
          function (t) {
            return !y(t) || A(t) || D(t) || T(t) ? t : B(t)
          }
        ],
        headers: {
          common: {
            Accept: 'application/json, text/plain, */*'
          },
          post: V(Qr),
          put: V(Qr),
          patch: V(Qr)
        },
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN'
      },
      e = !1;
      this.useApplyAsync = function (t) {
        return g(t) ? (e = !!t, this)  : e
      };
      var i = this.interceptors = [
      ];
      this.$get = [
        '$httpBackend',
        '$browser',
        '$cacheFactory',
        '$rootScope',
        '$q',
        '$injector',
        function (a, u, c, l, h, d) {
          function p(e) {
            function i(t) {
              var e = f({
              }, t);
              return e.data = t.data ? ue(t.data, t.headers, t.status, u.transformResponse)  : t.data,
              ce(t.status) ? e : h.reject(e)
            }
            function a(t) {
              var e,
              n = {
              };
              return o(t, function (t, r) {
                C(t) ? (e = t(), null != e && (n[r] = e))  : n[r] = t
              }),
              n
            }
            function s(e) {
              var n,
              r,
              i,
              o = t.headers,
              s = f({
              }, e.headers);
              o = f({
              }, o.common, o[Jn(e.method)]);
              t: for (n in o) {
                r = Jn(n);
                for (i in s) if (Jn(i) === r) continue t;
                s[n] = o[n]
              }
              return a(s)
            }
            if (!cr.isObject(e)) throw r('$http') ('badreq', 'Http request configuration must be an object.  Received: {0}', e);
            var u = f({
              method: 'get',
              transformRequest: t.transformRequest,
              transformResponse: t.transformResponse
            }, e);
            u.headers = s(e),
            u.method = Xn(u.method);
            var c = function (e) {
              var r = e.headers,
              a = ue(e.data, se(r), n, e.transformRequest);
              return m(a) && o(r, function (t, e) {
                'content-type' === Jn(e) && delete r[e]
              }),
              m(e.withCredentials) && !m(t.withCredentials) && (e.withCredentials = t.withCredentials),
              b(e, a).then(i, i)
            },
            l = [
              c,
              n
            ],
            d = h.when(u);
            for (o(k, function (t) {
              (t.request || t.requestError) && l.unshift(t.request, t.requestError),
              (t.response || t.responseError) && l.push(t.response, t.responseError)
            }); l.length; ) {
              var p = l.shift(),
              $ = l.shift();
              d = d.then(p, $)
            }
            return d.success = function (t) {
              return d.then(function (e) {
                t(e.data, e.status, e.headers, u)
              }),
              d
            },
            d.error = function (t) {
              return d.then(null, function (e) {
                t(e.data, e.status, e.headers, u)
              }),
              d
            },
            d
          }
          function $(t) {
            o(arguments, function (t) {
              p[t] = function (e, n) {
                return p(f(n || {
                }, {
                  method: t,
                  url: e
                }))
              }
            })
          }
          function v(t) {
            o(arguments, function (t) {
              p[t] = function (e, n, r) {
                return p(f(r || {
                }, {
                  method: t,
                  url: e,
                  data: n
                }))
              }
            })
          }
          function b(r, i) {
            function o(t, n, r, i) {
              function o() {
                s(n, t, r, i)
              }
              d && (ce(t) ? d.put(x, [
                t,
                n,
                ae(r),
                i
              ])  : d.remove(x)),
              e ? l.$applyAsync(o)  : (o(), l.$$phase || l.$apply())
            }
            function s(t, e, n, i) {
              e = Math.max(e, 0),
              (ce(e) ? v.resolve : v.reject) ({
                data: t,
                status: e,
                headers: se(n),
                config: r,
                statusText: i
              })
            }
            function c(t) {
              s(t.data, t.status, V(t.headers()), t.statusText)
            }
            function f() {
              var t = p.pendingRequests.indexOf(r);
              - 1 !== t && p.pendingRequests.splice(t, 1)
            }
            var d,
            $,
            v = h.defer(),
            w = v.promise,
            b = r.headers,
            x = S(r.url, r.params);
            if (p.pendingRequests.push(r), w.then(f, f), !r.cache && !t.cache || r.cache === !1 || 'GET' !== r.method && 'JSONP' !== r.method || (d = y(r.cache) ? r.cache : y(t.cache) ? t.cache : E), d && ($ = d.get(x), g($) ? M($) ? $.then(c, c)  : hr($) ? s($[1], $[0], V($[2]), $[3])  : s($, 200, {
            }, 'OK')  : d.put(x, w)), m($)) {
              var C = on(r.url) ? u.cookies() [r.xsrfCookieName || t.xsrfCookieName] : n;
              C && (b[r.xsrfHeaderName || t.xsrfHeaderName] = C),
              a(r.method, x, i, o, b, r.timeout, r.withCredentials, r.responseType)
            }
            return w
          }
          function S(t, e) {
            if (!e) return t;
            var n = [
            ];
            return s(e, function (t, e) {
              null === t || m(t) || (hr(t) || (t = [
                t
              ]), o(t, function (t) {
                y(t) && (t = x(t) ? t.toISOString()  : B(t)),
                n.push(K(e) + '=' + K(t))
              }))
            }),
            n.length > 0 && (t += ( - 1 == t.indexOf('?') ? '?' : '&') + n.join('&')),
            t
          }
          var E = c('$http'),
          k = [
          ];
          return o(i, function (t) {
            k.unshift(w(t) ? d.get(t)  : d.invoke(t))
          }),
          p.pendingRequests = [
          ],
          $('get', 'delete', 'head', 'jsonp'),
          v('post', 'put', 'patch'),
          p.defaults = t,
          p
        }
      ]
    }
    function fe() {
      return new t.XMLHttpRequest
    }
    function he() {
      this.$get = [
        '$browser',
        '$window',
        '$document',
        function (t, e, n) {
          return de(t, fe, t.defer, e.angular.callbacks, n[0])
        }
      ]
    }
    function de(t, e, r, i, a) {
      function s(t, e, n) {
        var r = a.createElement('script'),
        o = null;
        return r.type = 'text/javascript',
        r.src = t,
        r.async = !0,
        o = function (t) {
          Tr(r, 'load', o),
          Tr(r, 'error', o),
          a.body.removeChild(r),
          r = null;
          var s = - 1,
          u = 'unknown';
          t && ('load' !== t.type || i[e].called || (t = {
            type: 'error'
          }), u = t.type, s = 'error' === t.type ? 404 : 200),
          n && n(s, u)
        },
        Ar(r, 'load', o),
        Ar(r, 'error', o),
        a.body.appendChild(r),
        o
      }
      return function (a, u, c, l, f, h, d, $) {
        function v() {
          w && w(),
          b && b.abort()
        }
        function m(e, i, o, a, s) {
          S !== n && r.cancel(S),
          w = b = null,
          e(i, o, a, s),
          t.$$completeOutstandingRequest(p)
        }
        if (t.$$incOutstandingRequestCount(), u = u || t.url(), 'jsonp' == Jn(a)) {
          var y = '_' + (i.counter++).toString(36);
          i[y] = function (t) {
            i[y].data = t,
            i[y].called = !0
          };
          var w = s(u.replace('JSON_CALLBACK', 'angular.callbacks.' + y), y, function (t, e) {
            m(l, t, i[y].data, '', e),
            i[y] = p
          })
        } else {
          var b = e();
          b.open(a, u, !0),
          o(f, function (t, e) {
            g(t) && b.setRequestHeader(e, t)
          }),
          b.onload = function () {
            var t = b.statusText || '',
            e = 'response' in b ? b.response : b.responseText,
            n = 1223 === b.status ? 204 : b.status;
            0 === n && (n = e ? 200 : 'file' == rn(u).protocol ? 404 : 0),
            m(l, n, e, b.getAllResponseHeaders(), t)
          };
          var x = function () {
            m(l, - 1, null, null, '')
          };
          if (b.onerror = x, b.onabort = x, d && (b.withCredentials = !0), $) try {
            b.responseType = $
          } catch (C) {
            if ('json' !== $) throw C
          }
          b.send(c || null)
        }
        if (h > 0) var S = r(v, h);
         else M(h) && h.then(v)
      }
    }
    function pe() {
      var t = '{{',
      e = '}}';
      this.startSymbol = function (e) {
        return e ? (t = e, this)  : t
      },
      this.endSymbol = function (t) {
        return t ? (e = t, this)  : e
      },
      this.$get = [
        '$parse',
        '$exceptionHandler',
        '$sce',
        function (n, r, i) {
          function o(t) {
            return '\\\\\\' + t
          }
          function a(o, a, h, d) {
            function p(n) {
              return n.replace(c, t).replace(l, e)
            }
            function $(t) {
              try {
                return t = D(t),
                d && !g(t) ? t : O(t)
              } catch (e) {
                var n = ri('interr', 'Can\'t interpolate: {0}\n{1}', o, e.toString());
                r(n)
              }
            }
            d = !!d;
            for (var v, y, w, b = 0, x = [
            ], S = [
            ], E = o.length, k = [
            ], A = [
            ]; E > b; ) {
              if ( - 1 == (v = o.indexOf(t, b)) || - 1 == (y = o.indexOf(e, v + s))) {
                b !== E && k.push(p(o.substring(b)));
                break
              }
              b !== v && k.push(p(o.substring(b, v))),
              w = o.substring(v + s, y),
              x.push(w),
              S.push(n(w, $)),
              b = y + u,
              A.push(k.length),
              k.push('')
            }
            if (h && k.length > 1) throw ri('noconcat', 'Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce', o);
            if (!a || x.length) {
              var T = function (t) {
                for (var e = 0, n = x.length; n > e; e++) {
                  if (d && m(t[e])) return;
                  k[A[e]] = t[e]
                }
                return k.join('')
              },
              D = function (t) {
                return h ? i.getTrusted(h, t)  : i.valueOf(t)
              },
              O = function (t) {
                if (null == t) return '';
                switch (typeof t) {
                  case 'string':
                    break;
                  case 'number':
                    t = '' + t;
                    break;
                  default:
                    t = B(t)
                }
                return t
              };
              return f(function (t) {
                var e = 0,
                n = x.length,
                i = new Array(n);
                try {
                  for (; n > e; e++) i[e] = S[e](t);
                  return T(i)
                } catch (a) {
                  var s = ri('interr', 'Can\'t interpolate: {0}\n{1}', o, a.toString());
                  r(s)
                }
              }, {
                exp: o,
                expressions: x,
                $$watchDelegate: function (t, e, n) {
                  var r;
                  return t.$watchGroup(S, function (n, i) {
                    var o = T(n);
                    C(e) && e.call(this, o, n !== i ? r : o, t),
                    r = o
                  }, n)
                }
              })
            }
          }
          var s = t.length,
          u = e.length,
          c = new RegExp(t.replace(/./g, o), 'g'),
          l = new RegExp(e.replace(/./g, o), 'g');
          return a.startSymbol = function () {
            return t
          },
          a.endSymbol = function () {
            return e
          },
          a
        }
        ]
      }
      function $e() {
        this.$get = [
          '$rootScope',
          '$window',
          '$q',
          '$$q',
          function (t, e, n, r) {
            function i(i, a, s, u) {
              var c = e.setInterval,
              l = e.clearInterval,
              f = 0,
              h = g(u) && !u,
              d = (h ? r : n).defer(),
              p = d.promise;
              return s = g(s) ? s : 0,
              p.then(null, null, i),
              p.$$intervalId = c(function () {
                d.notify(f++),
                s > 0 && f >= s && (d.resolve(f), l(p.$$intervalId), delete o[p.$$intervalId]),
                h || t.$apply()
              }, a),
              o[p.$$intervalId] = d,
              p
            }
            var o = {
            };
            return i.cancel = function (t) {
              return t && t.$$intervalId in o ? (o[t.$$intervalId].reject('canceled'), e.clearInterval(t.$$intervalId), delete o[t.$$intervalId], !0)  : !1
            },
            i
          }
        ]
      }
      function ve() {
        this.$get = function () {
          return {
            id: 'en-us',
            NUMBER_FORMATS: {
              DECIMAL_SEP: '.',
              GROUP_SEP: ',',
              PATTERNS: [
                {
                  minInt: 1,
                  minFrac: 0,
                  maxFrac: 3,
                  posPre: '',
                  posSuf: '',
                  negPre: '-',
                  negSuf: '',
                  gSize: 3,
                  lgSize: 3
                },
                {
                  minInt: 1,
                  minFrac: 2,
                  maxFrac: 2,
                  posPre: '??',
                  posSuf: '',
                  negPre: '(??',
                  negSuf: ')',
                  gSize: 3,
                  lgSize: 3
                }
              ],
              CURRENCY_SYM: '$'
            },
            DATETIME_FORMATS: {
              MONTH: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),
              SHORTMONTH: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(','),
              DAY: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','),
              SHORTDAY: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(','),
              AMPMS: [
                'AM',
                'PM'
              ],
              medium: 'MMM d, y h:mm:ss a',
              'short': 'M/d/yy h:mm a',
              fullDate: 'EEEE, MMMM d, y',
              longDate: 'MMMM d, y',
              mediumDate: 'MMM d, y',
              shortDate: 'M/d/yy',
              mediumTime: 'h:mm:ss a',
              shortTime: 'h:mm a',
              ERANAMES: [
                'Before Christ',
                'Anno Domini'
              ],
              ERAS: [
                'BC',
                'AD'
              ]
            },
            pluralCat: function (t) {
              return 1 === t ? 'one' : 'other'
            }
          }
        }
      }
      function me(t) {
        for (var e = t.split('/'), n = e.length; n--; ) e[n] = J(e[n]);
        return e.join('/')
      }
      function ge(t, e) {
        var n = rn(t);
        e.$$protocol = n.protocol,
        e.$$host = n.hostname,
        e.$$port = h(n.port) || oi[n.protocol] || null
      }
      function ye(t, e) {
        var n = '/' !== t.charAt(0);
        n && (t = '/' + t);
        var r = rn(t);
        e.$$path = decodeURIComponent(n && '/' === r.pathname.charAt(0) ? r.pathname.substring(1)  : r.pathname),
        e.$$search = G(r.search),
        e.$$hash = decodeURIComponent(r.hash),
        e.$$path && '/' != e.$$path.charAt(0) && (e.$$path = '/' + e.$$path)
      }
      function we(t, e) {
        return 0 === e.indexOf(t) ? e.substr(t.length)  : void 0
      }
      function be(t) {
        var e = t.indexOf('#');
        return - 1 == e ? t : t.substr(0, e)
      }
      function xe(t) {
        return t.replace(/(#.+)|#$/, '$1')
      }
      function Ce(t) {
        return t.substr(0, be(t).lastIndexOf('/') + 1)
      }
      function Se(t) {
        return t.substring(0, t.indexOf('/', t.indexOf('//') + 2))
      }
      function Ee(t, e) {
        this.$$html5 = !0,
        e = e || '';
        var r = Ce(t);
        ge(t, this),
        this.$$parse = function (t) {
          var e = we(r, t);
          if (!w(e)) throw ai('ipthprfx', 'Invalid url "{0}", missing path prefix "{1}".', t, r);
          ye(e, this),
          this.$$path || (this.$$path = '/'),
          this.$$compose()
        },
        this.$$compose = function () {
          var t = Y(this.$$search),
          e = this.$$hash ? '#' + J(this.$$hash)  : '';
          this.$$url = me(this.$$path) + (t ? '?' + t : '') + e,
          this.$$absUrl = r + this.$$url.substr(1)
        },
        this.$$parseLinkUrl = function (i, o) {
          if (o && '#' === o[0]) return this.hash(o.slice(1)),
          !0;
          var a,
          s,
          u;
          return (a = we(t, i)) !== n ? (s = a, u = (a = we(e, a)) !== n ? r + (we('/', a) || a)  : t + s)  : (a = we(r, i)) !== n ? u = r + a : r == i + '/' && (u = r),
          u && this.$$parse(u),
          !!u
        }
      }
      function ke(t, e) {
        var n = Ce(t);
        ge(t, this),
        this.$$parse = function (r) {
          function i(t, e, n) {
            var r,
            i = /^\/[A-Z]:(\/.*)/;
            return 0 === e.indexOf(n) && (e = e.replace(n, '')),
            i.exec(e) ? t : (r = i.exec(t), r ? r[1] : t)
          }
          var o,
          a = we(t, r) || we(n, r);
          '#' === a.charAt(0) ? (o = we(e, a), m(o) && (o = a))  : o = this.$$html5 ? a : '',
          ye(o, this),
          this.$$path = i(this.$$path, o, t),
          this.$$compose()
        },
        this.$$compose = function () {
          var n = Y(this.$$search),
          r = this.$$hash ? '#' + J(this.$$hash)  : '';
          this.$$url = me(this.$$path) + (n ? '?' + n : '') + r,
          this.$$absUrl = t + (this.$$url ? e + this.$$url : '')
        },
        this.$$parseLinkUrl = function (e, n) {
          return be(t) == be(e) ? (this.$$parse(e), !0)  : !1
        }
      }
      function Ae(t, e) {
        this.$$html5 = !0,
        ke.apply(this, arguments);
        var n = Ce(t);
        this.$$parseLinkUrl = function (r, i) {
          if (i && '#' === i[0]) return this.hash(i.slice(1)),
          !0;
          var o,
          a;
          return t == be(r) ? o = r : (a = we(n, r)) ? o = t + e + a : n === r + '/' && (o = n),
          o && this.$$parse(o),
          !!o
        },
        this.$$compose = function () {
          var n = Y(this.$$search),
          r = this.$$hash ? '#' + J(this.$$hash)  : '';
          this.$$url = me(this.$$path) + (n ? '?' + n : '') + r,
          this.$$absUrl = t + e + this.$$url
        }
      }
      function Te(t) {
        return function () {
          return this[t]
        }
      }
      function De(t, e) {
        return function (n) {
          return m(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
        }
      }
      function Oe() {
        var t = '',
        e = {
          enabled: !1,
          requireBase: !0,
          rewriteLinks: !0
        };
        this.hashPrefix = function (e) {
          return g(e) ? (t = e, this)  : t
        },
        this.html5Mode = function (t) {
          return O(t) ? (e.enabled = t, this)  : y(t) ? (O(t.enabled) && (e.enabled = t.enabled), O(t.requireBase) && (e.requireBase = t.requireBase), O(t.rewriteLinks) && (e.rewriteLinks = t.rewriteLinks), this)  : e
        },
        this.$get = [
          '$rootScope',
          '$browser',
          '$sniffer',
          '$rootElement',
          '$window',
          function (n, r, i, o, a) {
            function s(t, e, n) {
              var i = c.url(),
              o = c.$$state;
              try {
                r.url(t, e, n),
                c.$$state = r.state()
              } catch (a) {
                throw c.url(i),
                c.$$state = o,
                a
              }
            }
            function u(t, e) {
              n.$broadcast('$locationChangeSuccess', c.absUrl(), t, c.$$state, e)
            }
            var c,
            l,
            f,
            h = r.baseHref(),
            d = r.url();
            if (e.enabled) {
              if (!h && e.requireBase) throw ai('nobase', '$location in HTML5 mode requires a <base> tag to be present!');
              f = Se(d) + (h || '/'),
              l = i.history ? Ee : Ae
            } else f = be(d),
            l = ke;
            c = new l(f, '#' + t),
            c.$$parseLinkUrl(d, d),
            c.$$state = r.state();
            var p = /^\s*(javascript|mailto):/i;
            o.on('click', function (t) {
              if (e.rewriteLinks && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 != t.which && 2 != t.button) {
                for (var i = er(t.target); 'a' !== N(i[0]); ) if (i[0] === o[0] || !(i = i.parent()) [0]) return;
                var s = i.prop('href'),
                u = i.attr('href') || i.attr('xlink:href');
                y(s) && '[object SVGAnimatedString]' === s.toString() && (s = rn(s.animVal).href),
                p.test(s) || !s || i.attr('target') || t.isDefaultPrevented() || c.$$parseLinkUrl(s, u) && (t.preventDefault(), c.absUrl() != r.url() && (n.$apply(), a.angular['ff-684208-preventDefault'] = !0))
              }
            }),
            xe(c.absUrl()) != xe(d) && r.url(c.absUrl(), !0);
            var $ = !0;
            return r.onUrlChange(function (t, e) {
              n.$evalAsync(function () {
                var r,
                i = c.absUrl(),
                o = c.$$state;
                c.$$parse(t),
                c.$$state = e,
                r = n.$broadcast('$locationChangeStart', t, i, e, o).defaultPrevented,
                c.absUrl() === t && (r ? (c.$$parse(i), c.$$state = o, s(i, !1, o))  : ($ = !1, u(i, o)))
              }),
              n.$$phase || n.$digest()
            }),
            n.$watch(function () {
              var t = xe(r.url()),
              e = xe(c.absUrl()),
              o = r.state(),
              a = c.$$replace,
              l = t !== e || c.$$html5 && i.history && o !== c.$$state;
              ($ || l) && ($ = !1, n.$evalAsync(function () {
                var e = c.absUrl(),
                r = n.$broadcast('$locationChangeStart', e, t, c.$$state, o).defaultPrevented;
                c.absUrl() === e && (r ? (c.$$parse(t), c.$$state = o)  : (l && s(e, a, o === c.$$state ? null : c.$$state), u(t, o)))
              })),
              c.$$replace = !1
            }),
            c
          }
        ]
      }
      function Me() {
        var t = !0,
        e = this;
        this.debugEnabled = function (e) {
          return g(e) ? (t = e, this)  : t
        },
        this.$get = [
          '$window',
          function (n) {
            function r(t) {
              return t instanceof Error && (t.stack ? t = t.message && - 1 === t.stack.indexOf(t.message) ? 'Error: ' + t.message + '\n' + t.stack : t.stack : t.sourceURL && (t = t.message + '\n' + t.sourceURL + ':' + t.line)),
              t
            }
            function i(t) {
              var e = n.console || {
              },
              i = e[t] || e.log || p,
              a = !1;
              try {
                a = !!i.apply
              } catch (s) {
              }
              return a ? function () {
                var t = [
                ];
                return o(arguments, function (e) {
                  t.push(r(e))
                }),
                i.apply(e, t)
              }
               : function (t, e) {
                i(t, null == e ? '' : e)
              }
            }
            return {
              log: i('log'),
              info: i('info'),
              warn: i('warn'),
              error: i('error'),
              debug: function () {
                var n = i('debug');
                return function () {
                  t && n.apply(e, arguments)
                }
              }()
            }
          }
        ]
      }
      function je(t, e) {
        if ('__defineGetter__' === t || '__defineSetter__' === t || '__lookupGetter__' === t || '__lookupSetter__' === t || '__proto__' === t) throw ui('isecfld', 'Attempting to access a disallowed field in Angular expressions! Expression: {0}', e);
        return t
      }
      function Pe(t, e) {
        if (t) {
          if (t.constructor === t) throw ui('isecfn', 'Referencing Function in Angular expressions is disallowed! Expression: {0}', e);
          if (t.window === t) throw ui('isecwindow', 'Referencing the Window in Angular expressions is disallowed! Expression: {0}', e);
          if (t.children && (t.nodeName || t.prop && t.attr && t.find)) throw ui('isecdom', 'Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}', e);
          if (t === Object) throw ui('isecobj', 'Referencing Object in Angular expressions is disallowed! Expression: {0}', e)
        }
        return t
      }
      function Ne(t, e) {
        if (t) {
          if (t.constructor === t) throw ui('isecfn', 'Referencing Function in Angular expressions is disallowed! Expression: {0}', e);
          if (t === ci || t === li || t === fi) throw ui('isecff', 'Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}', e)
        }
      }
      function Ie(t) {
        return t.constant
      }
      function Re(t, e, n, r, i) {
        Pe(t, i),
        Pe(e, i);
        for (var o, a = n.split('.'), s = 0; a.length > 1; s++) {
          o = je(a.shift(), i);
          var u = 0 === s && e && e[o] || t[o];
          u || (u = {
          }, t[o] = u),
          t = Pe(u, i)
        }
        return o = je(a.shift(), i),
        Pe(t[o], i),
        t[o] = r,
        r
      }
      function Ve(t) {
        return 'constructor' == t
      }
      function Ue(t, e, r, i, o, a, s) {
        je(t, a),
        je(e, a),
        je(r, a),
        je(i, a),
        je(o, a);
        var u = function (t) {
          return Pe(t, a)
        },
        c = s || Ve(t) ? u : $,
        l = s || Ve(e) ? u : $,
        f = s || Ve(r) ? u : $,
        h = s || Ve(i) ? u : $,
        d = s || Ve(o) ? u : $;
        return function (a, s) {
          var u = s && s.hasOwnProperty(t) ? s : a;
          return null == u ? u : (u = c(u[t]), e ? null == u ? n : (u = l(u[e]), r ? null == u ? n : (u = f(u[r]), i ? null == u ? n : (u = h(u[i]), o ? null == u ? n : u = d(u[o])  : u)  : u)  : u)  : u)
        }
      }
      function qe(t, e) {
        return function (n, r) {
          return t(n, r, Pe, e)
        }
      }
      function Fe(t, e, r) {
        var i = e.expensiveChecks,
        a = i ? gi : mi,
        s = a[t];
        if (s) return s;
        var u = t.split('.'),
        c = u.length;
        if (e.csp) s = 6 > c ? Ue(u[0], u[1], u[2], u[3], u[4], r, i)  : function (t, e) {
          var o,
          a = 0;
          do o = Ue(u[a++], u[a++], u[a++], u[a++], u[a++], r, i) (t, e),
          e = n,
          t = o;
          while (c > a);
          return o
        };
         else {
          var l = '';
          i && (l += 's = eso(s, fe);\nl = eso(l, fe);\n');
          var f = i;
          o(u, function (t, e) {
            je(t, r);
            var n = (e ? 's' : '((l&&l.hasOwnProperty("' + t + '"))?l:s)') + '.' + t;
            (i || Ve(t)) && (n = 'eso(' + n + ', fe)', f = !0),
            l += 'if(s == null) return undefined;\ns=' + n + ';\n'
          }),
          l += 'return s;';
          var h = new Function('s', 'l', 'eso', 'fe', l);
          h.toString = v(l),
          f && (h = qe(h, r)),
          s = h
        }
        return s.sharedGetter = !0,
        s.assign = function (e, n, r) {
          return Re(e, r, t, n, t)
        },
        a[t] = s,
        s
      }
      function He(t) {
        return C(t.valueOf) ? t.valueOf()  : yi.call(t)
      }
      function _e() {
        var t = ct(),
        e = ct();
        this.$get = [
          '$filter',
          '$sniffer',
          function (n, r) {
            function i(t) {
              var e = t;
              return t.sharedGetter && (e = function (e, n) {
                return t(e, n)
              }, e.literal = t.literal, e.constant = t.constant, e.assign = t.assign),
              e
            }
            function a(t, e) {
              for (var n = 0, r = t.length; r > n; n++) {
                var i = t[n];
                i.constant || (i.inputs ? a(i.inputs, e)  : - 1 === e.indexOf(i) && e.push(i))
              }
              return e
            }
            function s(t, e) {
              return null == t || null == e ? t === e : 'object' == typeof t && (t = He(t), 'object' == typeof t) ? !1 : t === e || t !== t && e !== e
            }
            function u(t, e, n, r) {
              var i,
              o = r.$$inputs || (r.$$inputs = a(r.inputs, [
              ]));
              if (1 === o.length) {
                var u = s;
                return o = o[0],
                t.$watch(function (t) {
                  var e = o(t);
                  return s(e, u) || (i = r(t), u = e && He(e)),
                  i
                }, e, n)
              }
              for (var c = [
              ], l = 0, f = o.length; f > l; l++) c[l] = s;
              return t.$watch(function (t) {
                for (var e = !1, n = 0, a = o.length; a > n; n++) {
                  var u = o[n](t);
                  (e || (e = !s(u, c[n]))) && (c[n] = u && He(u))
                }
                return e && (i = r(t)),
                i
              }, e, n)
            }
            function c(t, e, n, r) {
              var i,
              o;
              return i = t.$watch(function (t) {
                return r(t)
              }, function (t, n, r) {
                o = t,
                C(e) && e.apply(this, arguments),
                g(t) && r.$$postDigest(function () {
                  g(o) && i()
                })
              }, n)
            }
            function l(t, e, n, r) {
              function i(t) {
                var e = !0;
                return o(t, function (t) {
                  g(t) || (e = !1)
                }),
                e
              }
              var a,
              s;
              return a = t.$watch(function (t) {
                return r(t)
              }, function (t, n, r) {
                s = t,
                C(e) && e.call(this, t, n, r),
                i(t) && r.$$postDigest(function () {
                  i(s) && a()
                })
              }, n)
            }
            function f(t, e, n, r) {
              var i;
              return i = t.$watch(function (t) {
                return r(t)
              }, function (t, n, r) {
                C(e) && e.apply(this, arguments),
                i()
              }, n)
            }
            function h(t, e) {
              if (!e) return t;
              var n = t.$$watchDelegate,
              r = n !== l && n !== c,
              i = r ? function (n, r) {
                var i = t(n, r);
                return e(i, n, r)
              }
               : function (n, r) {
                var i = t(n, r),
                o = e(i, n, r);
                return g(i) ? o : i
              };
              return t.$$watchDelegate && t.$$watchDelegate !== u ? i.$$watchDelegate = t.$$watchDelegate : e.$stateful || (i.$$watchDelegate = u, i.inputs = [
                t
              ]),
              i
            }
            var d = {
              csp: r.csp,
              expensiveChecks: !1
            },
            $ = {
              csp: r.csp,
              expensiveChecks: !0
            };
            return function (r, o, a) {
              var s,
              v,
              m;
              switch (typeof r) {
                case 'string':
                  m = r = r.trim();
                  var g = a ? e : t;
                  if (s = g[m], !s) {
                    ':' === r.charAt(0) && ':' === r.charAt(1) && (v = !0, r = r.substring(2));
                    var y = a ? $ : d,
                    w = new $i(y),
                    b = new vi(w, n, y);
                    s = b.parse(r),
                    s.constant ? s.$$watchDelegate = f : v ? (s = i(s), s.$$watchDelegate = s.literal ? l : c)  : s.inputs && (s.$$watchDelegate = u),
                    g[m] = s
                  }
                  return h(s, o);
                case 'function':
                  return h(r, o);
                default:
                  return h(p, o)
              }
            }
          }
          ]
        }
        function Be() {
          this.$get = [
            '$rootScope',
            '$exceptionHandler',
            function (t, e) {
              return We(function (e) {
                t.$evalAsync(e)
              }, e)
            }
          ]
        }
        function Le() {
          this.$get = [
            '$browser',
            '$exceptionHandler',
            function (t, e) {
              return We(function (e) {
                t.defer(e)
              }, e)
            }
          ]
        }
        function We(t, e) {
          function i(t, e, n) {
            function r(e) {
              return function (n) {
                i || (i = !0, e.call(t, n))
              }
            }
            var i = !1;
            return [r(e),
            r(n)]
          }
          function a() {
            this.$$state = {
              status: 0
            }
          }
          function s(t, e) {
            return function (n) {
              e.call(t, n)
            }
          }
          function u(t) {
            var r,
            i,
            o;
            o = t.pending,
            t.processScheduled = !1,
            t.pending = n;
            for (var a = 0, s = o.length; s > a; ++a) {
              i = o[a][0],
              r = o[a][t.status];
              try {
                C(r) ? i.resolve(r(t.value))  : 1 === t.status ? i.resolve(t.value)  : i.reject(t.value)
              } catch (u) {
                i.reject(u),
                e(u)
              }
            }
          }
          function c(e) {
            !e.processScheduled && e.pending && (e.processScheduled = !0, t(function () {
              u(e)
            }))
          }
          function l() {
            this.promise = new a,
            this.resolve = s(this, this.resolve),
            this.reject = s(this, this.reject),
            this.notify = s(this, this.notify)
          }
          function f(t) {
            var e = new l,
            n = 0,
            r = hr(t) ? [
            ] : {
            };
            return o(t, function (t, i) {
              n++,
              m(t).then(function (t) {
                r.hasOwnProperty(i) || (r[i] = t, --n || e.resolve(r))
              }, function (t) {
                r.hasOwnProperty(i) || e.reject(t)
              })
            }),
            0 === n && e.resolve(r),
            e.promise
          }
          var h = r('$q', TypeError),
          d = function () {
            return new l
          };
          a.prototype = {
            then: function (t, e, n) {
              var r = new l;
              return this.$$state.pending = this.$$state.pending || [
              ],
              this.$$state.pending.push([r,
              t,
              e,
              n]),
              this.$$state.status > 0 && c(this.$$state),
              r.promise
            },
            'catch': function (t) {
              return this.then(null, t)
            },
            'finally': function (t, e) {
              return this.then(function (e) {
                return v(e, !0, t)
              }, function (e) {
                return v(e, !1, t)
              }, e)
            }
          },
          l.prototype = {
            resolve: function (t) {
              this.promise.$$state.status || (t === this.promise ? this.$$reject(h('qcycle', 'Expected promise to be resolved with value other than itself \'{0}\'', t))  : this.$$resolve(t))
            },
            $$resolve: function (t) {
              var n,
              r;
              r = i(this, this.$$resolve, this.$$reject);
              try {
                (y(t) || C(t)) && (n = t && t.then),
                C(n) ? (this.promise.$$state.status = - 1, n.call(t, r[0], r[1], this.notify))  : (this.promise.$$state.value = t, this.promise.$$state.status = 1, c(this.promise.$$state))
              } catch (o) {
                r[1](o),
                e(o)
              }
            },
            reject: function (t) {
              this.promise.$$state.status || this.$$reject(t)
            },
            $$reject: function (t) {
              this.promise.$$state.value = t,
              this.promise.$$state.status = 2,
              c(this.promise.$$state)
            },
            notify: function (n) {
              var r = this.promise.$$state.pending;
              this.promise.$$state.status <= 0 && r && r.length && t(function () {
                for (var t, i, o = 0, a = r.length; a > o; o++) {
                  i = r[o][0],
                  t = r[o][3];
                  try {
                    i.notify(C(t) ? t(n)  : n)
                  } catch (s) {
                    e(s)
                  }
                }
              })
            }
          };
          var p = function (t) {
            var e = new l;
            return e.reject(t),
            e.promise
          },
          $ = function (t, e) {
            var n = new l;
            return e ? n.resolve(t)  : n.reject(t),
            n.promise
          },
          v = function (t, e, n) {
            var r = null;
            try {
              C(n) && (r = n())
            } catch (i) {
              return $(i, !1)
            }
            return M(r) ? r.then(function () {
              return $(t, e)
            }, function (t) {
              return $(t, !1)
            })  : $(t, e)
          },
          m = function (t, e, n, r) {
            var i = new l;
            return i.resolve(t),
            i.promise.then(e, n, r)
          },
          g = function w(t) {
            function e(t) {
              r.resolve(t)
            }
            function n(t) {
              r.reject(t)
            }
            if (!C(t)) throw h('norslvr', 'Expected resolverFn, got \'{0}\'', t);
            if (!(this instanceof w)) return new w(t);
            var r = new l;
            return t(e, n),
            r.promise
          };
          return g.defer = d,
          g.reject = p,
          g.when = m,
          g.all = f,
          g
        }
        function ze() {
          this.$get = [
            '$window',
            '$timeout',
            function (t, e) {
              var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
              r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
              i = !!n,
              o = i ? function (t) {
                var e = n(t);
                return function () {
                  r(e)
                }
              }
               : function (t) {
                var n = e(t, 16.66, !1);
                return function () {
                  e.cancel(n)
                }
              };
              return o.supported = i,
              o
            }
          ]
        }
        function Ge() {
          function t(t) {
            function e() {
              this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null,
              this.$$listeners = {
              },
              this.$$listenerCount = {
              },
              this.$$watchersCount = 0,
              this.$id = c(),
              this.$$ChildScope = null
            }
            return e.prototype = t,
            e
          }
          var e = 10,
          n = r('$rootScope'),
          a = null,
          s = null;
          this.digestTtl = function (t) {
            return arguments.length && (e = t),
            e
          },
          this.$get = [
            '$injector',
            '$exceptionHandler',
            '$parse',
            '$browser',
            function (r, u, l, f) {
              function h(t) {
                t.currentScope.$$destroyed = !0
              }
              function d() {
                this.$id = c(),
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null,
                this.$root = this,
                this.$$destroyed = !1,
                this.$$listeners = {
                },
                this.$$listenerCount = {
                },
                this.$$isolateBindings = null
              }
              function $(t) {
                if (S.$$phase) throw n('inprog', '{0} already in progress', S.$$phase);
                S.$$phase = t
              }
              function v() {
                S.$$phase = null
              }
              function g(t, e, n) {
                do t.$$listenerCount[n] -= e,
                0 === t.$$listenerCount[n] && delete t.$$listenerCount[n];
                while (t = t.$parent)
              }
              function w() {
              }
              function b() {
                for (; A.length; ) try {
                  A.shift() ()
                } catch (t) {
                  u(t)
                }
                s = null
              }
              function x() {
                null === s && (s = f.defer(function () {
                  S.$apply(b)
                }))
              }
              d.prototype = {
                constructor: d,
                $new: function (e, n) {
                  var r;
                  return n = n || this,
                  e ? (r = new d, r.$root = this.$root)  : (this.$$ChildScope || (this.$$ChildScope = t(this)), r = new this.$$ChildScope),
                  r.$parent = n,
                  r.$$prevSibling = n.$$childTail,
                  n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r)  : n.$$childHead = n.$$childTail = r,
                  (e || n != this) && r.$on('$destroy', h),
                  r
                },
                $watch: function (t, e, n) {
                  var r = l(t);
                  if (r.$$watchDelegate) return r.$$watchDelegate(this, e, n, r);
                  var i = this,
                  o = i.$$watchers,
                  s = {
                    fn: e,
                    last: w,
                    get: r,
                    exp: t,
                    eq: !!n
                  };
                  return a = null,
                  C(e) || (s.fn = p),
                  o || (o = i.$$watchers = [
                  ]),
                  o.unshift(s),
                  function () {
                    I(o, s),
                    a = null
                  }
                },
                $watchGroup: function (t, e) {
                  function n() {
                    u = !1,
                    c ? (c = !1, e(i, i, s))  : e(i, r, s)
                  }
                  var r = new Array(t.length),
                  i = new Array(t.length),
                  a = [
                  ],
                  s = this,
                  u = !1,
                  c = !0;
                  if (!t.length) {
                    var l = !0;
                    return s.$evalAsync(function () {
                      l && e(i, i, s)
                    }),
                    function () {
                      l = !1
                    }
                  }
                  return 1 === t.length ? this.$watch(t[0], function (t, n, o) {
                    i[0] = t,
                    r[0] = n,
                    e(i, t === n ? i : r, o)
                  })  : (o(t, function (t, e) {
                    var o = s.$watch(t, function (t, o) {
                      i[e] = t,
                      r[e] = o,
                      u || (u = !0, s.$evalAsync(n))
                    });
                    a.push(o)
                  }), function () {
                    for (; a.length; ) a.shift() ()
                  })
                },
                $watchCollection: function (t, e) {
                  function n(t) {
                    o = t;
                    var e,
                    n,
                    r,
                    s,
                    u;
                    if (!m(o)) {
                      if (y(o)) if (i(o)) {
                        a !== d && (a = d, v = a.length = 0, f++),
                        e = o.length,
                        v !== e && (f++, a.length = v = e);
                        for (var c = 0; e > c; c++) u = a[c],
                        s = o[c],
                        r = u !== u && s !== s,
                        r || u === s || (f++, a[c] = s)
                      } else {
                        a !== p && (a = p = {
                        }, v = 0, f++),
                        e = 0;
                        for (n in o) o.hasOwnProperty(n) && (e++, s = o[n], u = a[n], n in a ? (r = u !== u && s !== s, r || u === s || (f++, a[n] = s))  : (v++, a[n] = s, f++));
                        if (v > e) {
                          f++;
                          for (n in a) o.hasOwnProperty(n) || (v--, delete a[n])
                        }
                      } else a !== o && (a = o, f++);
                      return f
                    }
                  }
                  function r() {
                    if ($ ? ($ = !1, e(o, o, u))  : e(o, s, u), c) if (y(o)) if (i(o)) {
                      s = new Array(o.length);
                      for (var t = 0; t < o.length; t++) s[t] = o[t]
                    } else {
                      s = {
                      };
                      for (var n in o) Kn.call(o, n) && (s[n] = o[n])
                    } else s = o
                  }
                  n.$stateful = !0;
                  var o,
                  a,
                  s,
                  u = this,
                  c = e.length > 1,
                  f = 0,
                  h = l(t, n),
                  d = [
                  ],
                  p = {
                  },
                  $ = !0,
                  v = 0;
                  return this.$watch(h, r)
                },
                $digest: function () {
                  var t,
                  r,
                  i,
                  o,
                  c,
                  l,
                  h,
                  d,
                  p,
                  m,
                  g = e,
                  y = this,
                  x = [
                  ];
                  $('$digest'),
                  f.$$checkUrlChange(),
                  this === S && null !== s && (f.defer.cancel(s), b()),
                  a = null;
                  do {
                    for (l = !1, d = y; E.length; ) {
                      try {
                        m = E.shift(),
                        m.scope.$eval(m.expression, m.locals)
                      } catch (A) {
                        u(A)
                      }
                      a = null
                    }
                    t: do {
                      if (o = d.$$watchers) for (c = o.length; c--; ) try {
                        if (t = o[c]) if ((r = t.get(d)) === (i = t.last) || (t.eq ? U(r, i)  : 'number' == typeof r && 'number' == typeof i && isNaN(r) && isNaN(i))) {
                          if (t === a) {
                            l = !1;
                            break t
                          }
                        } else l = !0,
                        a = t,
                        t.last = t.eq ? R(r, null)  : r,
                        t.fn(r, i === w ? r : i, d),
                        5 > g && (p = 4 - g, x[p] || (x[p] = [
                        ]), x[p].push({
                          msg: C(t.exp) ? 'fn: ' + (t.exp.name || t.exp.toString())  : t.exp,
                          newVal: r,
                          oldVal: i
                        }))
                      } catch (A) {
                        u(A)
                      }
                      if (!(h = d.$$childHead || d !== y && d.$$nextSibling)) for (; d !== y && !(h = d.$$nextSibling); ) d = d.$parent
                    } while (d = h);
                    if ((l || E.length) && !g--) throw v(),
                    n('infdig', '{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}', e, x)
                  } while (l || E.length);
                  for (v(); k.length; ) try {
                    k.shift() ()
                  } catch (A) {
                    u(A)
                  }
                },
                $destroy: function () {
                  if (!this.$$destroyed) {
                    var t = this.$parent;
                    if (this.$broadcast('$destroy'), this.$$destroyed = !0, this !== S) {
                      for (var e in this.$$listenerCount) g(this, this.$$listenerCount[e], e);
                      t.$$childHead == this && (t.$$childHead = this.$$nextSibling),
                      t.$$childTail == this && (t.$$childTail = this.$$prevSibling),
                      this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling),
                      this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling),
                      this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p,
                      this.$on = this.$watch = this.$watchGroup = function () {
                        return p
                      },
                      this.$$listeners = {
                      },
                      this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                    }
                  }
                },
                $eval: function (t, e) {
                  return l(t) (this, e)
                },
                $evalAsync: function (t, e) {
                  S.$$phase || E.length || f.defer(function () {
                    E.length && S.$digest()
                  }),
                  E.push({
                    scope: this,
                    expression: t,
                    locals: e
                  })
                },
                $$postDigest: function (t) {
                  k.push(t)
                },
                $apply: function (t) {
                  try {
                    return $('$apply'),
                    this.$eval(t)
                  } catch (e) {
                    u(e)
                  } finally {
                    v();
                    try {
                      S.$digest()
                    } catch (e) {
                      throw u(e),
                      e
                    }
                  }
                },
                $applyAsync: function (t) {
                  function e() {
                    n.$eval(t)
                  }
                  var n = this;
                  t && A.push(e),
                  x()
                },
                $on: function (t, e) {
                  var n = this.$$listeners[t];
                  n || (this.$$listeners[t] = n = [
                  ]),
                  n.push(e);
                  var r = this;
                  do r.$$listenerCount[t] || (r.$$listenerCount[t] = 0),
                  r.$$listenerCount[t]++;
                  while (r = r.$parent);
                  var i = this;
                  return function () {
                    var r = n.indexOf(e);
                    - 1 !== r && (n[r] = null, g(i, 1, t))
                  }
                },
                $emit: function (t, e) {
                  var n,
                  r,
                  i,
                  o = [
                  ],
                  a = this,
                  s = !1,
                  c = {
                    name: t,
                    targetScope: a,
                    stopPropagation: function () {
                      s = !0
                    },
                    preventDefault: function () {
                      c.defaultPrevented = !0
                    },
                    defaultPrevented: !1
                  },
                  l = q([c], arguments, 1);
                  do {
                    for (n = a.$$listeners[t] || o, c.currentScope = a, r = 0, i = n.length; i > r; r++) if (n[r]) try {
                      n[r].apply(null, l)
                    } catch (f) {
                      u(f)
                    } else n.splice(r, 1),
                    r--,
                    i--;
                    if (s) return c.currentScope = null,
                    c;
                    a = a.$parent
                  } while (a);
                  return c.currentScope = null,
                  c
                },
                $broadcast: function (t, e) {
                  var n = this,
                  r = n,
                  i = n,
                  o = {
                    name: t,
                    targetScope: n,
                    preventDefault: function () {
                      o.defaultPrevented = !0
                    },
                    defaultPrevented: !1
                  };
                  if (!n.$$listenerCount[t]) return o;
                  for (var a, s, c, l = q([o], arguments, 1); r = i; ) {
                    for (o.currentScope = r, a = r.$$listeners[t] || [
                    ], s = 0, c = a.length; c > s; s++) if (a[s]) try {
                      a[s].apply(null, l)
                    } catch (f) {
                      u(f)
                    } else a.splice(s, 1),
                    s--,
                    c--;
                    if (!(i = r.$$listenerCount[t] && r.$$childHead || r !== n && r.$$nextSibling)) for (; r !== n && !(i = r.$$nextSibling); ) r = r.$parent
                  }
                  return o.currentScope = null,
                  o
                }
              };
              var S = new d,
              E = S.$$asyncQueue = [
              ],
              k = S.$$postDigestQueue = [
              ],
              A = S.$$applyAsyncQueue = [
              ];
              return S
            }
          ]
        }
        function Ye() {
          var t = /^\s*(https?|ftp|mailto|tel|file):/,
          e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
          this.aHrefSanitizationWhitelist = function (e) {
            return g(e) ? (t = e, this)  : t
          },
          this.imgSrcSanitizationWhitelist = function (t) {
            return g(t) ? (e = t, this)  : e
          },
          this.$get = function () {
            return function (n, r) {
              var i,
              o = r ? e : t;
              return i = rn(n).href,
              '' === i || i.match(o) ? n : 'unsafe:' + i
            }
          }
        }
        function Je(t) {
          if ('self' === t) return t;
          if (w(t)) {
            if (t.indexOf('***') > - 1) throw wi('iwcard', 'Illegal sequence *** in string matcher.  String: {0}', t);
            return t = pr(t).replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*'),
            new RegExp('^' + t + '$')
          }
          if (S(t)) return new RegExp('^' + t.source + '$');
          throw wi('imatcher', 'Matchers may only be "self", string patterns or RegExp objects')
        }
        function Ke(t) {
          var e = [
          ];
          return g(t) && o(t, function (t) {
            e.push(Je(t))
          }),
          e
        }
        function Xe() {
          this.SCE_CONTEXTS = bi;
          var t = [
            'self'
          ],
          e = [
          ];
          this.resourceUrlWhitelist = function (e) {
            return arguments.length && (t = Ke(e)),
            t
          },
          this.resourceUrlBlacklist = function (t) {
            return arguments.length && (e = Ke(t)),
            e
          },
          this.$get = [
            '$injector',
            function (r) {
              function i(t, e) {
                return 'self' === t ? on(e)  : !!t.exec(e.href)
              }
              function o(n) {
                var r,
                o,
                a = rn(n.toString()),
                s = !1;
                for (r = 0, o = t.length; o > r; r++) if (i(t[r], a)) {
                  s = !0;
                  break
                }
                if (s) for (r = 0, o = e.length; o > r; r++) if (i(e[r], a)) {
                  s = !1;
                  break
                }
                return s
              }
              function a(t) {
                var e = function (t) {
                  this.$$unwrapTrustedValue = function () {
                    return t
                  }
                };
                return t && (e.prototype = new t),
                e.prototype.valueOf = function () {
                  return this.$$unwrapTrustedValue()
                },
                e.prototype.toString = function () {
                  return this.$$unwrapTrustedValue().toString()
                },
                e
              }
              function s(t, e) {
                var r = h.hasOwnProperty(t) ? h[t] : null;
                if (!r) throw wi('icontext', 'Attempted to trust a value in invalid context. Context: {0}; Value: {1}', t, e);
                if (null === e || e === n || '' === e) return e;
                if ('string' != typeof e) throw wi('itype', 'Attempted to trust a non-string value in a content requiring a string: Context: {0}', t);
                return new r(e)
              }
              function u(t) {
                return t instanceof f ? t.$$unwrapTrustedValue()  : t
              }
              function c(t, e) {
                if (null === e || e === n || '' === e) return e;
                var r = h.hasOwnProperty(t) ? h[t] : null;
                if (r && e instanceof r) return e.$$unwrapTrustedValue();
                if (t === bi.RESOURCE_URL) {
                  if (o(e)) return e;
                  throw wi('insecurl', 'Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}', e.toString())
                }
                if (t === bi.HTML) return l(e);
                throw wi('unsafe', 'Attempting to use an unsafe value in a safe context.')
              }
              var l = function (t) {
                throw wi('unsafe', 'Attempting to use an unsafe value in a safe context.')
              };
              r.has('$sanitize') && (l = r.get('$sanitize'));
              var f = a(),
              h = {
              };
              return h[bi.HTML] = a(f),
              h[bi.CSS] = a(f),
              h[bi.URL] = a(f),
              h[bi.JS] = a(f),
              h[bi.RESOURCE_URL] = a(h[bi.URL]),
              {
                trustAs: s,
                getTrusted: c,
                valueOf: u
              }
            }
          ]
        }
        function Ze() {
          var t = !0;
          this.enabled = function (e) {
            return arguments.length && (t = !!e),
            t
          },
          this.$get = [
            '$parse',
            '$sceDelegate',
            function (e, n) {
              if (t && 8 > tr) throw wi('iequirks', 'Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.');
              var r = V(bi);
              r.isEnabled = function () {
                return t
              },
              r.trustAs = n.trustAs,
              r.getTrusted = n.getTrusted,
              r.valueOf = n.valueOf,
              t || (r.trustAs = r.getTrusted = function (t, e) {
                return e
              }, r.valueOf = $),
              r.parseAs = function (t, n) {
                var i = e(n);
                return i.literal && i.constant ? i : e(n, function (e) {
                  return r.getTrusted(t, e)
                })
              };
              var i = r.parseAs,
              a = r.getTrusted,
              s = r.trustAs;
              return o(bi, function (t, e) {
                var n = Jn(e);
                r[$t('parse_as_' + n)] = function (e) {
                  return i(t, e)
                },
                r[$t('get_trusted_' + n)] = function (e) {
                  return a(t, e)
                },
                r[$t('trust_as_' + n)] = function (e) {
                  return s(t, e)
                }
              }),
              r
            }
          ]
        }
        function Qe() {
          this.$get = [
            '$window',
            '$document',
            function (t, e) {
              var n,
              r,
              i = {
              },
              o = h((/android (\d+)/.exec(Jn((t.navigator || {
              }).userAgent)) || [
              ]) [1]),
              a = /Boxee/i.test((t.navigator || {
              }).userAgent),
              s = e[0] || {
              },
              u = /^(Moz|webkit|ms)(?=[A-Z])/,
              c = s.body && s.body.style,
              l = !1,
              f = !1;
              if (c) {
                for (var d in c) if (r = u.exec(d)) {
                  n = r[0],
                  n = n.substr(0, 1).toUpperCase() + n.substr(1);
                  break
                }
                n || (n = 'WebkitOpacity' in c && 'webkit'),
                l = !!('transition' in c || n + 'Transition' in c),
                f = !!('animation' in c || n + 'Animation' in c),
                !o || l && f || (l = w(s.body.style.webkitTransition), f = w(s.body.style.webkitAnimation))
              }
              return {
                history: !(!t.history || !t.history.pushState || 4 > o || a),
                hasEvent: function (t) {
                  if ('input' === t && 11 >= tr) return !1;
                  if (m(i[t])) {
                    var e = s.createElement('div');
                    i[t] = 'on' + t in e
                  }
                  return i[t]
                },
                csp: $r(),
                vendorPrefix: n,
                transitions: l,
                animations: f,
                android: o
              }
            }
          ]
        }
        function tn() {
          this.$get = [
            '$templateCache',
            '$http',
            '$q',
            function (t, e, n) {
              function r(i, o) {
                function a(t) {
                  if (!o) throw Jr('tpload', 'Failed to load template: {0}', i);
                  return n.reject(t)
                }
                r.totalPendingRequests++;
                var s = e.defaults && e.defaults.transformResponse;
                hr(s) ? s = s.filter(function (t) {
                  return t !== ie
                })  : s === ie && (s = null);
                var u = {
                  cache: t,
                  transformResponse: s
                };
                return e.get(i, u) ['finally'](function () {
                  r.totalPendingRequests--
                }).then(function (t) {
                  return t.data
                }, a)
              }
              return r.totalPendingRequests = 0,
              r
            }
          ]
        }
        function en() {
          this.$get = [
            '$rootScope',
            '$browser',
            '$location',
            function (t, e, n) {
              var r = {
              };
              return r.findBindings = function (t, e, n) {
                var r = t.getElementsByClassName('ng-binding'),
                i = [
                ];
                return o(r, function (t) {
                  var r = cr.element(t).data('$binding');
                  r && o(r, function (r) {
                    if (n) {
                      var o = new RegExp('(^|\\s)' + pr(e) + '(\\s|\\||$)');
                      o.test(r) && i.push(t)
                    } else - 1 != r.indexOf(e) && i.push(t)
                  })
                }),
                i
              },
              r.findModels = function (t, e, n) {
                for (var r = [
                  'ng-',
                  'data-ng-',
                  'ng\\:'
                ], i = 0; i < r.length; ++i) {
                  var o = n ? '=' : '*=',
                  a = '[' + r[i] + 'model' + o + '"' + e + '"]',
                  s = t.querySelectorAll(a);
                  if (s.length) return s
                }
              },
              r.getLocation = function () {
                return n.url()
              },
              r.setLocation = function (e) {
                e !== n.url() && (n.url(e), t.$digest())
              },
              r.whenStable = function (t) {
                e.notifyWhenNoOutstandingRequests(t)
              },
              r
            }
          ]
        }
        function nn() {
          this.$get = [
            '$rootScope',
            '$browser',
            '$q',
            '$$q',
            '$exceptionHandler',
            function (t, e, n, r, i) {
              function o(o, s, u) {
                var c,
                l = g(u) && !u,
                f = (l ? r : n).defer(),
                h = f.promise;
                return c = e.defer(function () {
                  try {
                    f.resolve(o())
                  } catch (e) {
                    f.reject(e),
                    i(e)
                  } finally {
                    delete a[h.$$timeoutId]
                  }
                  l || t.$apply()
                }, s),
                h.$$timeoutId = c,
                a[c] = f,
                h
              }
              var a = {
              };
              return o.cancel = function (t) {
                return t && t.$$timeoutId in a ? (a[t.$$timeoutId].reject('canceled'), delete a[t.$$timeoutId], e.defer.cancel(t.$$timeoutId))  : !1
              },
              o
            }
          ]
        }
        function rn(t) {
          var e = t;
          return tr && (xi.setAttribute('href', e), e = xi.href),
          xi.setAttribute('href', e),
          {
            href: xi.href,
            protocol: xi.protocol ? xi.protocol.replace(/:$/, '')  : '',
            host: xi.host,
            search: xi.search ? xi.search.replace(/^\?/, '')  : '',
            hash: xi.hash ? xi.hash.replace(/^#/, '')  : '',
            hostname: xi.hostname,
            port: xi.port,
            pathname: '/' === xi.pathname.charAt(0) ? xi.pathname : '/' + xi.pathname
          }
        }
        function on(t) {
          var e = w(t) ? rn(t)  : t;
          return e.protocol === Ci.protocol && e.host === Ci.host
        }
        function an() {
          this.$get = v(t)
        }
        function sn(t) {
          function e(r, i) {
            if (y(r)) {
              var a = {
              };
              return o(r, function (t, n) {
                a[n] = e(n, t)
              }),
              a
            }
            return t.factory(r + n, i)
          }
          var n = 'Filter';
          this.register = e,
          this.$get = [
            '$injector',
            function (t) {
              return function (e) {
                return t.get(e + n)
              }
            }
          ],
          e('currency', fn),
          e('date', Sn),
          e('filter', un),
          e('json', En),
          e('limitTo', kn),
          e('lowercase', Ti),
          e('number', hn),
          e('orderBy', An),
          e('uppercase', Di)
        }
        function un() {
          return function (t, e, n) {
            if (!hr(t)) return t;
            var r,
            i;
            switch (typeof e) {
              case 'function':
                r = e;
                break;
              case 'boolean':
              case 'number':
              case 'string':
                i = !0;
              case 'object':
                r = cn(e, n, i);
                break;
              default:
                return t
            }
            return t.filter(r)
          }
        }
        function cn(t, e, n) {
          var r,
          i = y(t) && '$' in t;
          return e === !0 ? e = U : C(e) || (e = function (t, e) {
            return y(t) || y(e) ? !1 : (t = Jn('' + t), e = Jn('' + e), - 1 !== t.indexOf(e))
          }),
          r = function (r) {
            return i && !y(r) ? ln(r, t.$, e, !1)  : ln(r, t, e, n)
          }
        }
        function ln(t, e, n, r, i) {
          var o = null !== t ? typeof t : 'null',
          a = null !== e ? typeof e : 'null';
          if ('string' === a && '!' === e.charAt(0)) return !ln(t, e.substring(1), n, r);
          if (hr(t)) return t.some(function (t) {
            return ln(t, e, n, r)
          });
          switch (o) {
            case 'object':
              var s;
              if (r) {
                for (s in t) if ('$' !== s.charAt(0) && ln(t[s], e, n, !0)) return !0;
                return i ? !1 : ln(t, e, n, !1)
              }
              if ('object' === a) {
                for (s in e) {
                  var u = e[s];
                  if (!C(u) && !m(u)) {
                    var c = '$' === s,
                    l = c ? t : t[s];
                    if (!ln(l, u, n, c, c)) return !1
                  }
                }
                return !0
              }
              return n(t, e);
            case 'function':
              return !1;
            default:
              return n(t, e)
          }
        }
        function fn(t) {
          var e = t.NUMBER_FORMATS;
          return function (t, n, r) {
            return m(n) && (n = e.CURRENCY_SYM),
            m(r) && (r = e.PATTERNS[1].maxFrac),
            null == t ? t : dn(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(/\u00A4/g, n)
          }
        }
        function hn(t) {
          var e = t.NUMBER_FORMATS;
          return function (t, n) {
            return null == t ? t : dn(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
          }
        }
        function dn(t, e, n, r, i) {
          if (!isFinite(t) || y(t)) return '';
          var o = 0 > t;
          t = Math.abs(t);
          var a = t + '',
          s = '',
          u = [
          ],
          c = !1;
          if ( - 1 !== a.indexOf('e')) {
            var l = a.match(/([\d\.]+)e(-?)(\d+)/);
            l && '-' == l[2] && l[3] > i + 1 ? t = 0 : (s = a, c = !0)
          }
          if (c) i > 0 && 1 > t && (s = t.toFixed(i), t = parseFloat(s));
           else {
            var f = (a.split(Si) [1] || '').length;
            m(i) && (i = Math.min(Math.max(e.minFrac, f), e.maxFrac)),
            t = + (Math.round( + (t.toString() + 'e' + i)).toString() + 'e' + - i);
            var h = ('' + t).split(Si),
            d = h[0];
            h = h[1] || '';
            var p,
            $ = 0,
            v = e.lgSize,
            g = e.gSize;
            if (d.length >= v + g) for ($ = d.length - v, p = 0; $ > p; p++) ($ - p) % g === 0 && 0 !== p && (s += n),
            s += d.charAt(p);
            for (p = $; p < d.length; p++) (d.length - p) % v === 0 && 0 !== p && (s += n),
            s += d.charAt(p);
            for (; h.length < i; ) h += '0';
            i && '0' !== i && (s += r + h.substr(0, i))
          }
          return 0 === t && (o = !1),
          u.push(o ? e.negPre : e.posPre, s, o ? e.negSuf : e.posSuf),
          u.join('')
        }
        function pn(t, e, n) {
          var r = '';
          for (0 > t && (r = '-', t = - t), t = '' + t; t.length < e; ) t = '0' + t;
          return n && (t = t.substr(t.length - e)),
          r + t
        }
        function $n(t, e, n, r) {
          return n = n || 0,
          function (i) {
            var o = i['get' + t]();
            return (n > 0 || o > - n) && (o += n),
            0 === o && - 12 == n && (o = 12),
            pn(o, e, r)
          }
        }
        function vn(t, e) {
          return function (n, r) {
            var i = n['get' + t](),
            o = Xn(e ? 'SHORT' + t : t);
            return r[o][i]
          }
        }
        function mn(t) {
          var e = - 1 * t.getTimezoneOffset(),
          n = e >= 0 ? '+' : '';
          return n += pn(Math[e > 0 ? 'floor' : 'ceil'](e / 60), 2) + pn(Math.abs(e % 60), 2)
        }
        function gn(t) {
          var e = new Date(t, 0, 1).getDay();
          return new Date(t, 0, (4 >= e ? 5 : 12) - e)
        }
        function yn(t) {
          return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay()))
        }
        function wn(t) {
          return function (e) {
            var n = gn(e.getFullYear()),
            r = yn(e),
            i = + r - + n,
            o = 1 + Math.round(i / 604800000);
            return pn(o, t)
          }
        }
        function bn(t, e) {
          return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1]
        }
        function xn(t, e) {
          return t.getFullYear() <= 0 ? e.ERAS[0] : e.ERAS[1]
        }
        function Cn(t, e) {
          return t.getFullYear() <= 0 ? e.ERANAMES[0] : e.ERANAMES[1]
        }
        function Sn(t) {
          function e(t) {
            var e;
            if (e = t.match(n)) {
              var r = new Date(0),
              i = 0,
              o = 0,
              a = e[8] ? r.setUTCFullYear : r.setFullYear,
              s = e[8] ? r.setUTCHours : r.setHours;
              e[9] && (i = h(e[9] + e[10]), o = h(e[9] + e[11])),
              a.call(r, h(e[1]), h(e[2]) - 1, h(e[3]));
              var u = h(e[4] || 0) - i,
              c = h(e[5] || 0) - o,
              l = h(e[6] || 0),
              f = Math.round(1000 * parseFloat('0.' + (e[7] || 0)));
              return s.call(r, u, c, l, f),
              r
            }
            return t
          }
          var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
          return function (n, r, i) {
            var a,
            s,
            u = '',
            c = [
            ];
            if (r = r || 'mediumDate', r = t.DATETIME_FORMATS[r] || r, w(n) && (n = Ai.test(n) ? h(n)  : e(n)), b(n) && (n = new Date(n)), !x(n)) return n;
            for (; r; ) s = ki.exec(r),
            s ? (c = q(c, s, 1), r = c.pop())  : (c.push(r), r = null);
            return i && 'UTC' === i && (n = new Date(n.getTime()), n.setMinutes(n.getMinutes() + n.getTimezoneOffset())),
            o(c, function (e) {
              a = Ei[e],
              u += a ? a(n, t.DATETIME_FORMATS)  : e.replace(/(^'|'$)/g, '').replace(/''/g, '\'')
            }),
            u
          }
        }
        function En() {
          return function (t, e) {
            return m(e) && (e = 2),
            B(t, e)
          }
        }
        function kn() {
          return function (t, e) {
            return b(t) && (t = t.toString()),
            hr(t) || w(t) ? (e = Math.abs(Number(e)) === 1 / 0 ? Number(e)  : h(e), e ? e > 0 ? t.slice(0, e)  : t.slice(e)  : w(t) ? '' : [
            ])  : t
          }
        }
        function An(t) {
          return function (e, n, r) {
            function o(t, e) {
              for (var r = 0; r < n.length; r++) {
                var i = n[r](t, e);
                if (0 !== i) return i
              }
              return 0
            }
            function a(t, e) {
              return e ? function (e, n) {
                return t(n, e)
              }
               : t
            }
            function s(t) {
              switch (typeof t) {
                case 'number':
                case 'boolean':
                case 'string':
                  return !0;
                default:
                  return !1
              }
            }
            function u(t) {
              return null === t ? 'null' : 'function' == typeof t.valueOf && (t = t.valueOf(), s(t)) ? t : 'function' == typeof t.toString && (t = t.toString(), s(t)) ? t : ''
            }
            function c(t, e) {
              var n = typeof t,
              r = typeof e;
              return n === r && 'object' === n && (t = u(t), e = u(e)),
              n === r ? ('string' === n && (t = t.toLowerCase(), e = e.toLowerCase()), t === e ? 0 : e > t ? - 1 : 1)  : r > n ? - 1 : 1
            }
            return i(e) ? (n = hr(n) ? n : [
              n
            ], 0 === n.length && (n = [
              '+'
            ]), n = n.map(function (e) {
              var n = !1,
              r = e || $;
              if (w(e)) {
                if (('+' == e.charAt(0) || '-' == e.charAt(0)) && (n = '-' == e.charAt(0), e = e.substring(1)), '' === e) return a(c, n);
                if (r = t(e), r.constant) {
                  var i = r();
                  return a(function (t, e) {
                    return c(t[i], e[i])
                  }, n)
                }
              }
              return a(function (t, e) {
                return c(r(t), r(e))
              }, n)
            }), ir.call(e).sort(a(o, r)))  : e
          }
        }
        function Tn(t) {
          return C(t) && (t = {
            link: t
          }),
          t.restrict = t.restrict || 'AC',
          v(t)
        }
        function Dn(t, e) {
          t.$name = e
        }
        function On(t, e, r, i, a) {
          var s = this,
          u = [
          ],
          c = s.$$parentForm = t.parent().controller('form') || ji;
          s.$error = {
          },
          s.$$success = {
          },
          s.$pending = n,
          s.$name = a(e.name || e.ngForm || '') (r),
          s.$dirty = !1,
          s.$pristine = !0,
          s.$valid = !0,
          s.$invalid = !1,
          s.$submitted = !1,
          c.$addControl(s),
          s.$rollbackViewValue = function () {
            o(u, function (t) {
              t.$rollbackViewValue()
            })
          },
          s.$commitViewValue = function () {
            o(u, function (t) {
              t.$commitViewValue()
            })
          },
          s.$addControl = function (t) {
            at(t.$name, 'input'),
            u.push(t),
            t.$name && (s[t.$name] = t)
          },
          s.$$renameControl = function (t, e) {
            var n = t.$name;
            s[n] === t && delete s[n],
            s[e] = t,
            t.$name = e
          },
          s.$removeControl = function (t) {
            t.$name && s[t.$name] === t && delete s[t.$name],
            o(s.$pending, function (e, n) {
              s.$setValidity(n, null, t)
            }),
            o(s.$error, function (e, n) {
              s.$setValidity(n, null, t)
            }),
            o(s.$$success, function (e, n) {
              s.$setValidity(n, null, t)
            }),
            I(u, t)
          },
          Wn({
            ctrl: this,
            $element: t,
            set: function (t, e, n) {
              var r = t[e];
              if (r) {
                var i = r.indexOf(n);
                - 1 === i && r.push(n)
              } else t[e] = [
                n
              ]
            },
            unset: function (t, e, n) {
              var r = t[e];
              r && (I(r, n), 0 === r.length && delete t[e])
            },
            parentForm: c,
            $animate: i
          }),
          s.$setDirty = function () {
            i.removeClass(t, $o),
            i.addClass(t, vo),
            s.$dirty = !0,
            s.$pristine = !1,
            c.$setDirty()
          },
          s.$setPristine = function () {
            i.setClass(t, $o, vo + ' ' + Pi),
            s.$dirty = !1,
            s.$pristine = !0,
            s.$submitted = !1,
            o(u, function (t) {
              t.$setPristine()
            })
          },
          s.$setUntouched = function () {
            o(u, function (t) {
              t.$setUntouched()
            })
          },
          s.$setSubmitted = function () {
            i.addClass(t, Pi),
            s.$submitted = !0,
            c.$setSubmitted()
          }
        }
        function Mn(t) {
          t.$formatters.push(function (e) {
            return t.$isEmpty(e) ? e : e.toString()
          })
        }
        function jn(t, e, n, r, i, o) {
          Pn(t, e, n, r, i, o),
          Mn(r)
        }
        function Pn(t, e, n, r, i, o) {
          var a = Jn(e[0].type);
          if (!i.android) {
            var s = !1;
            e.on('compositionstart', function (t) {
              s = !0
            }),
            e.on('compositionend', function () {
              s = !1,
              u()
            })
          }
          var u = function (t) {
            if (c && (o.defer.cancel(c), c = null), !s) {
              var i = e.val(),
              u = t && t.type;
              'password' === a || n.ngTrim && 'false' === n.ngTrim || (i = dr(i)),
              (r.$viewValue !== i || '' === i && r.$$hasNativeValidators) && r.$setViewValue(i, u)
            }
          };
          if (i.hasEvent('input')) e.on('input', u);
           else {
            var c,
            l = function (t, e, n) {
              c || (c = o.defer(function () {
                c = null,
                e && e.value === n || u(t)
              }))
            };
            e.on('keydown', function (t) {
              var e = t.keyCode;
              91 === e || e > 15 && 19 > e || e >= 37 && 40 >= e || l(t, this, this.value)
            }),
            i.hasEvent('paste') && e.on('paste cut', l)
          }
          e.on('change', u),
          r.$render = function () {
            e.val(r.$isEmpty(r.$viewValue) ? '' : r.$viewValue)
          }
        }
        function Nn(t, e) {
          if (x(t)) return t;
          if (w(t)) {
            Bi.lastIndex = 0;
            var n = Bi.exec(t);
            if (n) {
              var r = + n[1],
              i = + n[2],
              o = 0,
              a = 0,
              s = 0,
              u = 0,
              c = gn(r),
              l = 7 * (i - 1);
              return e && (o = e.getHours(), a = e.getMinutes(), s = e.getSeconds(), u = e.getMilliseconds()),
              new Date(r, 0, c.getDate() + l, o, a, s, u)
            }
          }
          return 0 / 0
        }
        function In(t, e) {
          return function (n, r) {
            var i,
            a;
            if (x(n)) return n;
            if (w(n)) {
              if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Vi.test(n)) return new Date(n);
              if (t.lastIndex = 0, i = t.exec(n)) return i.shift(),
              a = r ? {
                yyyy: r.getFullYear(),
                MM: r.getMonth() + 1,
                dd: r.getDate(),
                HH: r.getHours(),
                mm: r.getMinutes(),
                ss: r.getSeconds(),
                sss: r.getMilliseconds() / 1000
              }
               : {
                yyyy: 1970,
                MM: 1,
                dd: 1,
                HH: 0,
                mm: 0,
                ss: 0,
                sss: 0
              },
              o(i, function (t, n) {
                n < e.length && (a[e[n]] = + t)
              }),
              new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1000 * a.sss || 0)
            }
            return 0 / 0
          }
        }
        function Rn(t, e, r, i) {
          return function (o, a, s, u, c, l, f) {
            function h(t) {
              return t && !(t.getTime && t.getTime() !== t.getTime())
            }
            function d(t) {
              return g(t) ? x(t) ? t : r(t)  : n
            }
            Vn(o, a, s, u),
            Pn(o, a, s, u, c, l);
            var p,
            $ = u && u.$options && u.$options.timezone;
            if (u.$$parserName = t, u.$parsers.push(function (t) {
              if (u.$isEmpty(t)) return null;
              if (e.test(t)) {
                var i = r(t, p);
                return 'UTC' === $ && i.setMinutes(i.getMinutes() - i.getTimezoneOffset()),
                i
              }
              return n
            }), u.$formatters.push(function (t) {
              if (t && !x(t)) throw wo('datefmt', 'Expected `{0}` to be a date', t);
              if (h(t)) {
                if (p = t, p && 'UTC' === $) {
                  var e = 60000 * p.getTimezoneOffset();
                  p = new Date(p.getTime() + e)
                }
                return f('date') (t, i, $)
              }
              return p = null,
              ''
            }), g(s.min) || s.ngMin) {
              var v;
              u.$validators.min = function (t) {
                return !h(t) || m(v) || r(t) >= v
              },
              s.$observe('min', function (t) {
                v = d(t),
                u.$validate()
              })
            }
            if (g(s.max) || s.ngMax) {
              var y;
              u.$validators.max = function (t) {
                return !h(t) || m(y) || r(t) <= y
              },
              s.$observe('max', function (t) {
                y = d(t),
                u.$validate()
              })
            }
          }
        }
        function Vn(t, e, r, i) {
          var o = e[0],
          a = i.$$hasNativeValidators = y(o.validity);
          a && i.$parsers.push(function (t) {
            var r = e.prop(Yn) || {
            };
            return r.badInput && !r.typeMismatch ? n : t
          })
        }
        function Un(t, e, r, i, o, a) {
          if (Vn(t, e, r, i), Pn(t, e, r, i, o, a), i.$$parserName = 'number', i.$parsers.push(function (t) {
            return i.$isEmpty(t) ? null : Fi.test(t) ? parseFloat(t)  : n
          }), i.$formatters.push(function (t) {
            if (!i.$isEmpty(t)) {
              if (!b(t)) throw wo('numfmt', 'Expected `{0}` to be a number', t);
              t = t.toString()
            }
            return t
          }), g(r.min) || r.ngMin) {
            var s;
            i.$validators.min = function (t) {
              return i.$isEmpty(t) || m(s) || t >= s
            },
            r.$observe('min', function (t) {
              g(t) && !b(t) && (t = parseFloat(t, 10)),
              s = b(t) && !isNaN(t) ? t : n,
              i.$validate()
            })
          }
          if (g(r.max) || r.ngMax) {
            var u;
            i.$validators.max = function (t) {
              return i.$isEmpty(t) || m(u) || u >= t
            },
            r.$observe('max', function (t) {
              g(t) && !b(t) && (t = parseFloat(t, 10)),
              u = b(t) && !isNaN(t) ? t : n,
              i.$validate()
            })
          }
        }
        function qn(t, e, n, r, i, o) {
          Pn(t, e, n, r, i, o),
          Mn(r),
          r.$$parserName = 'url',
          r.$validators.url = function (t, e) {
            var n = t || e;
            return r.$isEmpty(n) || Ui.test(n)
          }
        }
        function Fn(t, e, n, r, i, o) {
          Pn(t, e, n, r, i, o),
          Mn(r),
          r.$$parserName = 'email',
          r.$validators.email = function (t, e) {
            var n = t || e;
            return r.$isEmpty(n) || qi.test(n)
          }
        }
        function Hn(t, e, n, r) {
          m(n.name) && e.attr('name', c());
          var i = function (t) {
            e[0].checked && r.$setViewValue(n.value, t && t.type)
          };
          e.on('click', i),
          r.$render = function () {
            var t = n.value;
            e[0].checked = t == r.$viewValue
          },
          n.$observe('value', r.$render)
        }
        function _n(t, e, n, i, o) {
          var a;
          if (g(i)) {
            if (a = t(i), !a.constant) throw r('ngModel') ('constexpr', 'Expected constant expression for `{0}`, but saw `{1}`.', n, i);
            return a(e)
          }
          return o
        }
        function Bn(t, e, n, r, i, o, a, s) {
          var u = _n(s, t, 'ngTrueValue', n.ngTrueValue, !0),
          c = _n(s, t, 'ngFalseValue', n.ngFalseValue, !1),
          l = function (t) {
            r.$setViewValue(e[0].checked, t && t.type)
          };
          e.on('click', l),
          r.$render = function () {
            e[0].checked = r.$viewValue
          },
          r.$isEmpty = function (t) {
            return t === !1
          },
          r.$formatters.push(function (t) {
            return U(t, u)
          }),
          r.$parsers.push(function (t) {
            return t ? u : c
          })
        }
        function Ln(t, e) {
          return t = 'ngClass' + t,
          [
            '$animate',
            function (n) {
              function r(t, e) {
                var n = [
                ];
                t: for (var r = 0; r < t.length; r++) {
                  for (var i = t[r], o = 0; o < e.length; o++) if (i == e[o]) continue t;
                  n.push(i)
                }
                return n
              }
              function i(t) {
                if (hr(t)) return t;
                if (w(t)) return t.split(' ');
                if (y(t)) {
                  var e = [
                  ];
                  return o(t, function (t, n) {
                    t && (e = e.concat(n.split(' ')))
                  }),
                  e
                }
                return t
              }
              return {
                restrict: 'AC',
                link: function (a, s, u) {
                  function c(t) {
                    var e = f(t, 1);
                    u.$addClass(e)
                  }
                  function l(t) {
                    var e = f(t, - 1);
                    u.$removeClass(e)
                  }
                  function f(t, e) {
                    var n = s.data('$classCounts') || {
                    },
                    r = [
                    ];
                    return o(t, function (t) {
                      (e > 0 || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === + (e > 0) && r.push(t))
                    }),
                    s.data('$classCounts', n),
                    r.join(' ')
                  }
                  function h(t, e) {
                    var i = r(e, t),
                    o = r(t, e);
                    i = f(i, 1),
                    o = f(o, - 1),
                    i && i.length && n.addClass(s, i),
                    o && o.length && n.removeClass(s, o)
                  }
                  function d(t) {
                    if (e === !0 || a.$index % 2 === e) {
                      var n = i(t || [
                      ]);
                      if (p) {
                        if (!U(t, p)) {
                          var r = i(p);
                          h(r, n)
                        }
                      } else c(n)
                    }
                    p = V(t)
                  }
                  var p;
                  a.$watch(u[t], d, !0),
                  u.$observe('class', function (e) {
                    d(a.$eval(u[t]))
                  }),
                  'ngClass' !== t && a.$watch('$index', function (n, r) {
                    var o = 1 & n;
                    if (o !== (1 & r)) {
                      var s = i(a.$eval(u[t]));
                      o === e ? c(s)  : l(s)
                    }
                  })
                }
              }
            }
          ]
        }
        function Wn(t) {
          function e(t, e, u) {
            e === n ? r('$pending', t, u)  : i('$pending', t, u),
            O(e) ? e ? (f(s.$error, t, u), l(s.$$success, t, u))  : (l(s.$error, t, u), f(s.$$success, t, u))  : (f(s.$error, t, u), f(s.$$success, t, u)),
            s.$pending ? (o(yo, !0), s.$valid = s.$invalid = n, a('', null))  : (o(yo, !1), s.$valid = zn(s.$error), s.$invalid = !s.$valid, a('', s.$valid));
            var c;
            c = s.$pending && s.$pending[t] ? n : s.$error[t] ? !1 : s.$$success[t] ? !0 : null,
            a(t, c),
            h.$setValidity(t, c, s)
          }
          function r(t, e, n) {
            s[t] || (s[t] = {
            }),
            l(s[t], e, n)
          }
          function i(t, e, r) {
            s[t] && f(s[t], e, r),
            zn(s[t]) && (s[t] = n)
          }
          function o(t, e) {
            e && !c[t] ? (d.addClass(u, t), c[t] = !0)  : !e && c[t] && (d.removeClass(u, t), c[t] = !1)
          }
          function a(t, e) {
            t = t ? '-' + nt(t, '-')  : '',
            o(ho + t, e === !0),
            o(po + t, e === !1)
          }
          var s = t.ctrl,
          u = t.$element,
          c = {
          },
          l = t.set,
          f = t.unset,
          h = t.parentForm,
          d = t.$animate;
          c[po] = !(c[ho] = u.hasClass(ho)),
          s.$setValidity = e
        }
        function zn(t) {
          if (t) for (var e in t) return !1;
          return !0
        }
        var Gn = /^\/(.+)\/([a-z]*)$/,
        Yn = 'validity',
        Jn = function (t) {
          return w(t) ? t.toLowerCase()  : t
        },
        Kn = Object.prototype.hasOwnProperty,
        Xn = function (t) {
          return w(t) ? t.toUpperCase()  : t
        },
        Zn = function (t) {
          return w(t) ? t.replace(/[A-Z]/g, function (t) {
            return String.fromCharCode(32 | t.charCodeAt(0))
          })  : t
        },
        Qn = function (t) {
          return w(t) ? t.replace(/[a-z]/g, function (t) {
            return String.fromCharCode( - 33 & t.charCodeAt(0))
          })  : t
        };
        'i' !== 'I'.toLowerCase() && (Jn = Zn, Xn = Qn);
        var tr,
        er,
        nr,
        rr,
        ir = [
        ].slice,
        or = [
        ].splice,
        ar = [
        ].push,
        sr = Object.prototype.toString,
        ur = r('ng'),
        cr = t.angular || (t.angular = {
        }),
        lr = 0;
        tr = e.documentMode,
        p.$inject = [
        ],
        $.$inject = [
        ];
        var fr,
        hr = Array.isArray,
        dr = function (t) {
          return w(t) ? t.trim()  : t
        },
        pr = function (t) {
          return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08')
        },
        $r = function () {
          if (g($r.isActive_)) return $r.isActive_;
          var t = !(!e.querySelector('[ng-csp]') && !e.querySelector('[data-ng-csp]'));
          if (!t) try {
            new Function('')
          } catch (n) {
            t = !0
          }
          return $r.isActive_ = t
        },
        vr = [
          'ng-',
          'data-ng-',
          'ng:',
          'x-ng-'
        ],
        mr = /[A-Z]/g,
        gr = !1,
        yr = 1,
        wr = 3,
        br = 8,
        xr = 9,
        Cr = 11,
        Sr = {
          full: '1.3.15',
          major: 1,
          minor: 3,
          dot: 15,
          codeName: 'locality-filtration'
        };
        wt.expando = 'ng339';
        var Er = wt.cache = {
        },
        kr = 1,
        Ar = function (t, e, n) {
          t.addEventListener(e, n, !1)
        },
        Tr = function (t, e, n) {
          t.removeEventListener(e, n, !1)
        };
        wt._data = function (t) {
          return this.cache[t[this.expando]] || {
          }
        };
        var Dr = /([\:\-\_]+(.))/g,
        Or = /^moz([A-Z])/,
        Mr = {
          mouseleave: 'mouseout',
          mouseenter: 'mouseover'
        },
        jr = r('jqLite'),
        Pr = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Nr = /<|&#?\w+;/,
        Ir = /<([\w:]+)/,
        Rr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Vr = {
          option: [
            1,
            '<select multiple="multiple">',
            '</select>'
          ],
          thead: [
            1,
            '<table>',
            '</table>'
          ],
          col: [
            2,
            '<table><colgroup>',
            '</colgroup></table>'
          ],
          tr: [
            2,
            '<table><tbody>',
            '</tbody></table>'
          ],
          td: [
            3,
            '<table><tbody><tr>',
            '</tr></tbody></table>'
          ],
          _default: [
            0,
            '',
            ''
          ]
        };
        Vr.optgroup = Vr.option,
        Vr.tbody = Vr.tfoot = Vr.colgroup = Vr.caption = Vr.thead,
        Vr.th = Vr.td;
        var Ur = wt.prototype = {
          ready: function (n) {
            function r() {
              i || (i = !0, n())
            }
            var i = !1;
            'complete' === e.readyState ? setTimeout(r)  : (this.on('DOMContentLoaded', r), wt(t).on('load', r))
          },
          toString: function () {
            var t = [
            ];
            return o(this, function (e) {
              t.push('' + e)
            }),
            '[' + t.join(', ') + ']'
          },
          eq: function (t) {
            return er(t >= 0 ? this[t] : this[this.length + t])
          },
          length: 0,
          push: ar,
          sort: [
          ].sort,
          splice: [
          ].splice
        },
        qr = {
        };
        o('multiple,selected,checked,disabled,readOnly,required,open'.split(','), function (t) {
          qr[Jn(t)] = t
        });
        var Fr = {
        };
        o('input,select,option,textarea,button,form,details'.split(','), function (t) {
          Fr[t] = !0
        });
        var Hr = {
          ngMinlength: 'minlength',
          ngMaxlength: 'maxlength',
          ngMin: 'min',
          ngMax: 'max',
          ngPattern: 'pattern'
        };
        o({
          data: kt,
          removeData: St
        }, function (t, e) {
          wt[e] = t
        }),
        o({
          data: kt,
          inheritedData: jt,
          scope: function (t) {
            return er.data(t, '$scope') || jt(t.parentNode || t, [
              '$isolateScope',
              '$scope'
            ])
          },
          isolateScope: function (t) {
            return er.data(t, '$isolateScope') || er.data(t, '$isolateScopeNoTemplate')
          },
          controller: Mt,
          injector: function (t) {
            return jt(t, '$injector')
          },
          removeAttr: function (t, e) {
            t.removeAttribute(e)
          },
          hasClass: At,
          css: function (t, e, n) {
            return e = $t(e),
            g(n) ? void (t.style[e] = n)  : t.style[e]
          },
          attr: function (t, e, r) {
            var i = Jn(e);
            if (qr[i]) {
              if (!g(r)) return t[e] || (t.attributes.getNamedItem(e) || p).specified ? i : n;
              r ? (t[e] = !0, t.setAttribute(e, i))  : (t[e] = !1, t.removeAttribute(i))
            } else if (g(r)) t.setAttribute(e, r);
             else if (t.getAttribute) {
              var o = t.getAttribute(e, 2);
              return null === o ? n : o
            }
          },
          prop: function (t, e, n) {
            return g(n) ? void (t[e] = n)  : t[e]
          },
          text: function () {
            function t(t, e) {
              if (m(e)) {
                var n = t.nodeType;
                return n === yr || n === wr ? t.textContent : ''
              }
              t.textContent = e
            }
            return t.$dv = '',
            t
          }(),
          val: function (t, e) {
            if (m(e)) {
              if (t.multiple && 'select' === N(t)) {
                var n = [
                ];
                return o(t.options, function (t) {
                  t.selected && n.push(t.value || t.text)
                }),
                0 === n.length ? null : n
              }
              return t.value
            }
            t.value = e
          },
          html: function (t, e) {
            return m(e) ? t.innerHTML : (xt(t, !0), void (t.innerHTML = e))
          },
          empty: Pt
        }, function (t, e) {
          wt.prototype[e] = function (e, r) {
            var i,
            o,
            a = this.length;
            if (t !== Pt && (2 == t.length && t !== At && t !== Mt ? e : r) === n) {
              if (y(e)) {
                for (i = 0; a > i; i++) if (t === kt) t(this[i], e);
                 else for (o in e) t(this[i], o, e[o]);
                return this
              }
              for (var s = t.$dv, u = s === n ? Math.min(a, 1)  : a, c = 0; u > c; c++) {
                var l = t(this[c], e, r);
                s = s ? s + l : l
              }
              return s
            }
            for (i = 0; a > i; i++) t(this[i], e, r);
            return this
          }
        }),
        o({
          removeData: St,
          on: function Go(t, e, n, r) {
            if (g(r)) throw jr('onargs', 'jqLite#on() does not support the `selector` or `eventData` parameters');
            if (mt(t)) {
              var i = Et(t, !0),
              o = i.events,
              a = i.handle;
              a || (a = i.handle = Ut(t, o));
              for (var s = e.indexOf(' ') >= 0 ? e.split(' ')  : [
                e
              ], u = s.length; u--; ) {
                e = s[u];
                var c = o[e];
                c || (o[e] = [
                ], 'mouseenter' === e || 'mouseleave' === e ? Go(t, Mr[e], function (t) {
                  var n = this,
                  r = t.relatedTarget;
                  (!r || r !== n && !n.contains(r)) && a(t, e)
                })  : '$destroy' !== e && Ar(t, e, a), c = o[e]),
                c.push(n)
              }
            }
          },
          off: Ct,
          one: function (t, e, n) {
            t = er(t),
            t.on(e, function r() {
              t.off(e, n),
              t.off(e, r)
            }),
            t.on(e, n)
          },
          replaceWith: function (t, e) {
            var n,
            r = t.parentNode;
            xt(t),
            o(new wt(e), function (e) {
              n ? r.insertBefore(e, n.nextSibling)  : r.replaceChild(e, t),
              n = e
            })
          },
          children: function (t) {
            var e = [
            ];
            return o(t.childNodes, function (t) {
              t.nodeType === yr && e.push(t)
            }),
            e
          },
          contents: function (t) {
            return t.contentDocument || t.childNodes || [
            ]
          },
          append: function (t, e) {
            var n = t.nodeType;
            if (n === yr || n === Cr) {
              e = new wt(e);
              for (var r = 0, i = e.length; i > r; r++) {
                var o = e[r];
                t.appendChild(o)
              }
            }
          },
          prepend: function (t, e) {
            if (t.nodeType === yr) {
              var n = t.firstChild;
              o(new wt(e), function (e) {
                t.insertBefore(e, n)
              })
            }
          },
          wrap: function (t, e) {
            e = er(e).eq(0).clone() [0];
            var n = t.parentNode;
            n && n.replaceChild(e, t),
            e.appendChild(t)
          },
          remove: Nt,
          detach: function (t) {
            Nt(t, !0)
          },
          after: function (t, e) {
            var n = t,
            r = t.parentNode;
            e = new wt(e);
            for (var i = 0, o = e.length; o > i; i++) {
              var a = e[i];
              r.insertBefore(a, n.nextSibling),
              n = a
            }
          },
          addClass: Dt,
          removeClass: Tt,
          toggleClass: function (t, e, n) {
            e && o(e.split(' '), function (e) {
              var r = n;
              m(r) && (r = !At(t, e)),
              (r ? Dt : Tt) (t, e)
            })
          },
          parent: function (t) {
            var e = t.parentNode;
            return e && e.nodeType !== Cr ? e : null
          },
          next: function (t) {
            return t.nextElementSibling
          },
          find: function (t, e) {
            return t.getElementsByTagName ? t.getElementsByTagName(e)  : [
            ]
          },
          clone: bt,
          triggerHandler: function (t, e, n) {
            var r,
            i,
            a,
            s = e.type || e,
            u = Et(t),
            c = u && u.events,
            l = c && c[s];
            l && (r = {
              preventDefault: function () {
                this.defaultPrevented = !0
              },
              isDefaultPrevented: function () {
                return this.defaultPrevented === !0
              },
              stopImmediatePropagation: function () {
                this.immediatePropagationStopped = !0
              },
              isImmediatePropagationStopped: function () {
                return this.immediatePropagationStopped === !0
              },
              stopPropagation: p,
              type: s,
              target: t
            }, e.type && (r = f(r, e)), i = V(l), a = n ? [
              r
            ].concat(n)  : [
              r
            ], o(i, function (e) {
              r.isImmediatePropagationStopped() || e.apply(t, a)
            }))
          }
        }, function (t, e) {
          wt.prototype[e] = function (e, n, r) {
            for (var i, o = 0, a = this.length; a > o; o++) m(i) ? (i = t(this[o], e, n, r), g(i) && (i = er(i)))  : Ot(i, t(this[o], e, n, r));
            return g(i) ? i : this
          },
          wt.prototype.bind = wt.prototype.on,
          wt.prototype.unbind = wt.prototype.off
        }),
        Ht.prototype = {
          put: function (t, e) {
            this[Ft(t, this.nextUid)] = e
          },
          get: function (t) {
            return this[Ft(t, this.nextUid)]
          },
          remove: function (t) {
            var e = this[t = Ft(t, this.nextUid)];
            return delete this[t],
            e
          }
        };
        var _r = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        Br = /,/,
        Lr = /^\s*(_?)(\S+?)\1\s*$/,
        Wr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        zr = r('$injector');
        Lt.$$annotate = Bt;
        var Gr = r('$animate'),
        Yr = [
          '$provide',
          function (t) {
            this.$$selectors = {
            },
            this.register = function (e, n) {
              var r = e + '-animation';
              if (e && '.' != e.charAt(0)) throw Gr('notcsel', 'Expecting class selector starting with \'.\' got \'{0}\'.', e);
              this.$$selectors[e.substr(1)] = r,
              t.factory(r, n)
            },
            this.classNameFilter = function (t) {
              return 1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null),
              this.$$classNameFilter
            },
            this.$get = [
              '$$q',
              '$$asyncCallback',
              '$rootScope',
              function (t, e, n) {
                function r(e) {
                  var r,
                  i = t.defer();
                  return i.promise.$$cancelFn = function () {
                    r && r()
                  },
                  n.$$postDigest(function () {
                    r = e(function () {
                      i.resolve()
                    })
                  }),
                  i.promise
                }
                function i(t, e) {
                  var n = [
                  ],
                  r = [
                  ],
                  i = ct();
                  return o((t.attr('class') || '').split(/\s+/), function (t) {
                    i[t] = !0
                  }),
                  o(e, function (t, e) {
                    var o = i[e];
                    t === !1 && o ? r.push(e)  : t !== !0 || o || n.push(e)
                  }),
                  n.length + r.length > 0 && [
                    n.length ? n : null,
                    r.length ? r : null
                  ]
                }
                function a(t, e, n) {
                  for (var r = 0, i = e.length; i > r; ++r) {
                    var o = e[r];
                    t[o] = n
                  }
                }
                function s() {
                  return c || (c = t.defer(), e(function () {
                    c.resolve(),
                    c = null
                  })),
                  c.promise
                }
                function u(t, e) {
                  if (cr.isObject(e)) {
                    var n = f(e.from || {
                    }, e.to || {
                    });
                    t.css(n)
                  }
                }
                var c;
                return {
                  animate: function (t, e, n) {
                    return u(t, {
                      from: e,
                      to: n
                    }),
                    s()
                  },
                  enter: function (t, e, n, r) {
                    return u(t, r),
                    n ? n.after(t)  : e.prepend(t),
                    s()
                  },
                  leave: function (t, e) {
                    return u(t, e),
                    t.remove(),
                    s()
                  },
                  move: function (t, e, n, r) {
                    return this.enter(t, e, n, r)
                  },
                  addClass: function (t, e, n) {
                    return this.setClass(t, e, [
                    ], n)
                  },
                  $$addClassImmediately: function (t, e, n) {
                    return t = er(t),
                    e = w(e) ? e : hr(e) ? e.join(' ')  : '',
                    o(t, function (t) {
                      Dt(t, e)
                    }),
                    u(t, n),
                    s()
                  },
                  removeClass: function (t, e, n) {
                    return this.setClass(t, [
                    ], e, n)
                  },
                  $$removeClassImmediately: function (t, e, n) {
                    return t = er(t),
                    e = w(e) ? e : hr(e) ? e.join(' ')  : '',
                    o(t, function (t) {
                      Tt(t, e)
                    }),
                    u(t, n),
                    s()
                  },
                  setClass: function (t, e, n, o) {
                    var s = this,
                    u = '$$animateClasses',
                    c = !1;
                    t = er(t);
                    var l = t.data(u);
                    l ? o && l.options && (l.options = cr.extend(l.options || {
                    }, o))  : (l = {
                      classes: {
                      },
                      options: o
                    }, c = !0);
                    var f = l.classes;
                    return e = hr(e) ? e : e.split(' '),
                    n = hr(n) ? n : n.split(' '),
                    a(f, e, !0),
                    a(f, n, !1),
                    c && (l.promise = r(function (e) {
                      var n = t.data(u);
                      if (t.removeData(u), n) {
                        var r = i(t, n.classes);
                        r && s.$$setClassImmediately(t, r[0], r[1], n.options)
                      }
                      e()
                    }), t.data(u, l)),
                    l.promise
                  },
                  $$setClassImmediately: function (t, e, n, r) {
                    return e && this.$$addClassImmediately(t, e),
                    n && this.$$removeClassImmediately(t, n),
                    u(t, r),
                    s()
                  },
                  enabled: p,
                  cancel: p
                }
              }
            ]
          }
        ],
        Jr = r('$compile');
        Xt.$inject = [
          '$provide',
          '$$sanitizeUriProvider'
        ];
        var Kr = /^((?:x|data)[\:\-_])/i,
        Xr = r('$controller'),
        Zr = 'application/json',
        Qr = {
          'Content-Type': Zr + ';charset=utf-8'
        },
        ti = /^\[|^\{(?!\{)/,
        ei = {
          '[': /]$/,
          '{': /}$/
        },
        ni = /^\)\]\}',?\n/,
        ri = r('$interpolate'),
        ii = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        oi = {
          http: 80,
          https: 443,
          ftp: 21
        },
        ai = r('$location'),
        si = {
          $$html5: !1,
          $$replace: !1,
          absUrl: Te('$$absUrl'),
          url: function (t) {
            if (m(t)) return this.$$url;
            var e = ii.exec(t);
            return (e[1] || '' === t) && this.path(decodeURIComponent(e[1])),
            (e[2] || e[1] || '' === t) && this.search(e[3] || ''),
            this.hash(e[5] || ''),
            this
          },
          protocol: Te('$$protocol'),
          host: Te('$$host'),
          port: Te('$$port'),
          path: De('$$path', function (t) {
            return t = null !== t ? t.toString()  : '',
            '/' == t.charAt(0) ? t : '/' + t
          }),
          search: function (t, e) {
            switch (arguments.length) {
              case 0:
                return this.$$search;
              case 1:
                if (w(t) || b(t)) t = t.toString(),
                this.$$search = G(t);
                 else {
                  if (!y(t)) throw ai('isrcharg', 'The first argument of the `$location#search()` call must be a string or an object.');
                  t = R(t, {
                  }),
                  o(t, function (e, n) {
                    null == e && delete t[n]
                  }),
                  this.$$search = t
                }
                break;
              default:
                m(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
            }
            return this.$$compose(),
            this
          },
          hash: De('$$hash', function (t) {
            return null !== t ? t.toString()  : ''
          }),
          replace: function () {
            return this.$$replace = !0,
            this
          }
        };
        o([Ae,
        ke,
        Ee], function (t) {
          t.prototype = Object.create(si),
          t.prototype.state = function (e) {
            if (!arguments.length) return this.$$state;
            if (t !== Ee || !this.$$html5) throw ai('nostate', 'History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API');
            return this.$$state = m(e) ? null : e,
            this
          }
        });
        var ui = r('$parse'),
        ci = Function.prototype.call,
        li = Function.prototype.apply,
        fi = Function.prototype.bind,
        hi = ct();
        o({
          'null': function () {
            return null
          },
          'true': function () {
            return !0
          },
          'false': function () {
            return !1
          },
          undefined: function () {
          }
        }, function (t, e) {
          t.constant = t.literal = t.sharedGetter = !0,
          hi[e] = t
        }),
        hi['this'] = function (t) {
          return t
        },
        hi['this'].sharedGetter = !0;
        var di = f(ct(), {
          '+': function (t, e, r, i) {
            return r = r(t, e),
            i = i(t, e),
            g(r) ? g(i) ? r + i : r : g(i) ? i : n
          },
          '-': function (t, e, n, r) {
            return n = n(t, e),
            r = r(t, e),
            (g(n) ? n : 0) - (g(r) ? r : 0)
          },
          '*': function (t, e, n, r) {
            return n(t, e) * r(t, e)
          },
          '/': function (t, e, n, r) {
            return n(t, e) / r(t, e)
          },
          '%': function (t, e, n, r) {
            return n(t, e) % r(t, e)
          },
          '===': function (t, e, n, r) {
            return n(t, e) === r(t, e)
          },
          '!==': function (t, e, n, r) {
            return n(t, e) !== r(t, e)
          },
          '==': function (t, e, n, r) {
            return n(t, e) == r(t, e)
          },
          '!=': function (t, e, n, r) {
            return n(t, e) != r(t, e)
          },
          '<': function (t, e, n, r) {
            return n(t, e) < r(t, e)
          },
          '>': function (t, e, n, r) {
            return n(t, e) > r(t, e)
          },
          '<=': function (t, e, n, r) {
            return n(t, e) <= r(t, e)
          },
          '>=': function (t, e, n, r) {
            return n(t, e) >= r(t, e)
          },
          '&&': function (t, e, n, r) {
            return n(t, e) && r(t, e)
          },
          '||': function (t, e, n, r) {
            return n(t, e) || r(t, e)
          },
          '!': function (t, e, n) {
            return !n(t, e)
          },
          '=': !0,
          '|': !0
        }),
        pi = {
          n: '\n',
          f: '\f',
          r: '\r',
          t: '\t',
          v: '\v',
          '\'': '\'',
          '"': '"'
        },
        $i = function (t) {
          this.options = t
        };
        $i.prototype = {
          constructor: $i,
          lex: function (t) {
            for (this.text = t, this.index = 0, this.tokens = [
            ]; this.index < this.text.length; ) {
              var e = this.text.charAt(this.index);
              if ('"' === e || '\'' === e) this.readString(e);
               else if (this.isNumber(e) || '.' === e && this.isNumber(this.peek())) this.readNumber();
               else if (this.isIdent(e)) this.readIdent();
               else if (this.is(e, '(){}[].,;:?')) this.tokens.push({
                index: this.index,
                text: e
              }),
              this.index++;
               else if (this.isWhitespace(e)) this.index++;
               else {
                var n = e + this.peek(),
                r = n + this.peek(2),
                i = di[e],
                o = di[n],
                a = di[r];
                if (i || o || a) {
                  var s = a ? r : o ? n : e;
                  this.tokens.push({
                    index: this.index,
                    text: s,
                    operator: !0
                  }),
                  this.index += s.length
                } else this.throwError('Unexpected next character ', this.index, this.index + 1)
              }
            }
            return this.tokens
          },
          is: function (t, e) {
            return - 1 !== e.indexOf(t)
          },
          peek: function (t) {
            var e = t || 1;
            return this.index + e < this.text.length ? this.text.charAt(this.index + e)  : !1
          },
          isNumber: function (t) {
            return t >= '0' && '9' >= t && 'string' == typeof t
          },
          isWhitespace: function (t) {
            return ' ' === t || '\r' === t || '\t' === t || '\n' === t || '\v' === t || ' ' === t
          },
          isIdent: function (t) {
            return t >= 'a' && 'z' >= t || t >= 'A' && 'Z' >= t || '_' === t || '$' === t
          },
          isExpOperator: function (t) {
            return '-' === t || '+' === t || this.isNumber(t)
          },
          throwError: function (t, e, n) {
            n = n || this.index;
            var r = g(e) ? 's ' + e + '-' + this.index + ' [' + this.text.substring(e, n) + ']' : ' ' + n;
            throw ui('lexerr', 'Lexer Error: {0} at column{1} in expression [{2}].', t, r, this.text)
          },
          readNumber: function () {
            for (var t = '', e = this.index; this.index < this.text.length; ) {
              var n = Jn(this.text.charAt(this.index));
              if ('.' == n || this.isNumber(n)) t += n;
               else {
                var r = this.peek();
                if ('e' == n && this.isExpOperator(r)) t += n;
                 else if (this.isExpOperator(n) && r && this.isNumber(r) && 'e' == t.charAt(t.length - 1)) t += n;
                 else {
                  if (!this.isExpOperator(n) || r && this.isNumber(r) || 'e' != t.charAt(t.length - 1)) break;
                  this.throwError('Invalid exponent')
                }
              }
              this.index++
            }
            this.tokens.push({
              index: e,
              text: t,
              constant: !0,
              value: Number(t)
            })
          },
          readIdent: function () {
            for (var t = this.index; this.index < this.text.length; ) {
              var e = this.text.charAt(this.index);
              if (!this.isIdent(e) && !this.isNumber(e)) break;
              this.index++
            }
            this.tokens.push({
              index: t,
              text: this.text.slice(t, this.index),
              identifier: !0
            })
          },
          readString: function (t) {
            var e = this.index;
            this.index++;
            for (var n = '', r = t, i = !1; this.index < this.text.length; ) {
              var o = this.text.charAt(this.index);
              if (r += o, i) {
                if ('u' === o) {
                  var a = this.text.substring(this.index + 1, this.index + 5);
                  a.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + a + ']'),
                  this.index += 4,
                  n += String.fromCharCode(parseInt(a, 16))
                } else {
                  var s = pi[o];
                  n += s || o
                }
                i = !1
              } else if ('\\' === o) i = !0;
               else {
                if (o === t) return this.index++,
                void this.tokens.push({
                  index: e,
                  text: r,
                  constant: !0,
                  value: n
                });
                n += o
              }
              this.index++
            }
            this.throwError('Unterminated quote', e)
          }
        };
        var vi = function (t, e, n) {
          this.lexer = t,
          this.$filter = e,
          this.options = n
        };
        vi.ZERO = f(function () {
          return 0
        }, {
          sharedGetter: !0,
          constant: !0
        }),
        vi.prototype = {
          constructor: vi,
          parse: function (t) {
            this.text = t,
            this.tokens = this.lexer.lex(t);
            var e = this.statements();
            return 0 !== this.tokens.length && this.throwError('is an unexpected token', this.tokens[0]),
            e.literal = !!e.literal,
            e.constant = !!e.constant,
            e
          },
          primary: function () {
            var t;
            this.expect('(') ? (t = this.filterChain(), this.consume(')'))  : this.expect('[') ? t = this.arrayDeclaration()  : this.expect('{') ? t = this.object()  : this.peek().identifier && this.peek().text in hi ? t = hi[this.consume().text] : this.peek().identifier ? t = this.identifier()  : this.peek().constant ? t = this.constant()  : this.throwError('not a primary expression', this.peek());
            for (var e, n; e = this.expect('(', '[', '.'); ) '(' === e.text ? (t = this.functionCall(t, n), n = null)  : '[' === e.text ? (n = t, t = this.objectIndex(t))  : '.' === e.text ? (n = t, t = this.fieldAccess(t))  : this.throwError('IMPOSSIBLE');
            return t
          },
          throwError: function (t, e) {
            throw ui('syntax', 'Syntax Error: Token \'{0}\' {1} at column {2} of the expression [{3}] starting at [{4}].', e.text, t, e.index + 1, this.text, this.text.substring(e.index))
          },
          peekToken: function () {
            if (0 === this.tokens.length) throw ui('ueoe', 'Unexpected end of expression: {0}', this.text);
            return this.tokens[0]
          },
          peek: function (t, e, n, r) {
            return this.peekAhead(0, t, e, n, r)
          },
          peekAhead: function (t, e, n, r, i) {
            if (this.tokens.length > t) {
              var o = this.tokens[t],
              a = o.text;
              if (a === e || a === n || a === r || a === i || !e && !n && !r && !i) return o
            }
            return !1
          },
          expect: function (t, e, n, r) {
            var i = this.peek(t, e, n, r);
            return i ? (this.tokens.shift(), i)  : !1
          },
          consume: function (t) {
            if (0 === this.tokens.length) throw ui('ueoe', 'Unexpected end of expression: {0}', this.text);
            var e = this.expect(t);
            return e || this.throwError('is unexpected, expecting [' + t + ']', this.peek()),
            e
          },
          unaryFn: function (t, e) {
            var n = di[t];
            return f(function (t, r) {
              return n(t, r, e)
            }, {
              constant: e.constant,
              inputs: [
                e
              ]
            })
          },
          binaryFn: function (t, e, n, r) {
            var i = di[e];
            return f(function (e, r) {
              return i(e, r, t, n)
            }, {
              constant: t.constant && n.constant,
              inputs: !r && [
                t,
                n
              ]
            })
          },
          identifier: function () {
            for (var t = this.consume().text; this.peek('.') && this.peekAhead(1).identifier && !this.peekAhead(2, '('); ) t += this.consume().text + this.consume().text;
            return Fe(t, this.options, this.text)
          },
          constant: function () {
            var t = this.consume().value;
            return f(function () {
              return t
            }, {
              constant: !0,
              literal: !0
            })
          },
          statements: function () {
            for (var t = [
            ]; ; ) if (this.tokens.length > 0 && !this.peek('}', ')', ';', ']') && t.push(this.filterChain()), !this.expect(';')) return 1 === t.length ? t[0] : function (e, n) {
              for (var r, i = 0, o = t.length; o > i; i++) r = t[i](e, n);
              return r
            }
          },
          filterChain: function () {
            for (var t, e = this.expression(); t = this.expect('|'); ) e = this.filter(e);
            return e
          },
          filter: function (t) {
            var e,
            r,
            i = this.$filter(this.consume().text);
            if (this.peek(':')) for (e = [
            ], r = [
            ]; this.expect(':'); ) e.push(this.expression());
            var o = [
              t
            ].concat(e || [
            ]);
            return f(function (o, a) {
              var s = t(o, a);
              if (r) {
                r[0] = s;
                for (var u = e.length; u--; ) r[u + 1] = e[u](o, a);
                return i.apply(n, r)
              }
              return i(s)
            }, {
              constant: !i.$stateful && o.every(Ie),
              inputs: !i.$stateful && o
            })
          },
          expression: function () {
            return this.assignment()
          },
          assignment: function () {
            var t,
            e,
            n = this.ternary();
            return (e = this.expect('=')) ? (n.assign || this.throwError('implies assignment but [' + this.text.substring(0, e.index) + '] can not be assigned to', e), t = this.ternary(), f(function (e, r) {
              return n.assign(e, t(e, r), r)
            }, {
              inputs: [
                n,
                t
              ]
            }))  : n
          },
          ternary: function () {
            var t,
            e,
            n = this.logicalOR();
            if ((e = this.expect('?')) && (t = this.assignment(), this.consume(':'))) {
              var r = this.assignment();
              return f(function (e, i) {
                return n(e, i) ? t(e, i)  : r(e, i)
              }, {
                constant: n.constant && t.constant && r.constant
              })
            }
            return n
          },
          logicalOR: function () {
            for (var t, e = this.logicalAND(); t = this.expect('||'); ) e = this.binaryFn(e, t.text, this.logicalAND(), !0);
            return e
          },
          logicalAND: function () {
            for (var t, e = this.equality(); t = this.expect('&&'); ) e = this.binaryFn(e, t.text, this.equality(), !0);
            return e
          },
          equality: function () {
            for (var t, e = this.relational(); t = this.expect('==', '!=', '===', '!=='); ) e = this.binaryFn(e, t.text, this.relational());
            return e
          },
          relational: function () {
            for (var t, e = this.additive(); t = this.expect('<', '>', '<=', '>='); ) e = this.binaryFn(e, t.text, this.additive());
            return e
          },
          additive: function () {
            for (var t, e = this.multiplicative(); t = this.expect('+', '-'); ) e = this.binaryFn(e, t.text, this.multiplicative());
            return e
          },
          multiplicative: function () {
            for (var t, e = this.unary(); t = this.expect('*', '/', '%'); ) e = this.binaryFn(e, t.text, this.unary());
            return e
          },
          unary: function () {
            var t;
            return this.expect('+') ? this.primary()  : (t = this.expect('-')) ? this.binaryFn(vi.ZERO, t.text, this.unary())  : (t = this.expect('!')) ? this.unaryFn(t.text, this.unary())  : this.primary()
          },
          fieldAccess: function (t) {
            var e = this.identifier();
            return f(function (r, i, o) {
              var a = o || t(r, i);
              return null == a ? n : e(a)
            }, {
              assign: function (n, r, i) {
                var o = t(n, i);
                return o || t.assign(n, o = {
                }, i),
                e.assign(o, r)
              }
            })
          },
          objectIndex: function (t) {
            var e = this.text,
            r = this.expression();
            return this.consume(']'),
            f(function (i, o) {
              var a,
              s = t(i, o),
              u = r(i, o);
              return je(u, e),
              s ? a = Pe(s[u], e)  : n
            }, {
              assign: function (n, i, o) {
                var a = je(r(n, o), e),
                s = Pe(t(n, o), e);
                return s || t.assign(n, s = {
                }, o),
                s[a] = i
              }
            })
          },
          functionCall: function (t, e) {
            var r = [
            ];
            if (')' !== this.peekToken().text) do r.push(this.expression());
            while (this.expect(','));
            this.consume(')');
            var i = this.text,
            o = r.length ? [
            ] : null;
            return function (a, s) {
              var u = e ? e(a, s)  : g(e) ? n : a,
              c = t(a, s, u) || p;
              if (o) for (var l = r.length; l--; ) o[l] = Pe(r[l](a, s), i);
              Pe(u, i),
              Ne(c, i);
              var f = c.apply ? c.apply(u, o)  : c(o[0], o[1], o[2], o[3], o[4]);
              return o && (o.length = 0),
              Pe(f, i)
            }
          },
          arrayDeclaration: function () {
            var t = [
            ];
            if (']' !== this.peekToken().text) do {
              if (this.peek(']')) break;
              t.push(this.expression())
            } while (this.expect(','));
            return this.consume(']'),
            f(function (e, n) {
              for (var r = [
              ], i = 0, o = t.length; o > i; i++) r.push(t[i](e, n));
              return r
            }, {
              literal: !0,
              constant: t.every(Ie),
              inputs: t
            })
          },
          object: function () {
            var t = [
            ],
            e = [
            ];
            if ('}' !== this.peekToken().text) do {
              if (this.peek('}')) break;
              var n = this.consume();
              n.constant ? t.push(n.value)  : n.identifier ? t.push(n.text)  : this.throwError('invalid key', n),
              this.consume(':'),
              e.push(this.expression())
            } while (this.expect(','));
            return this.consume('}'),
            f(function (n, r) {
              for (var i = {
              }, o = 0, a = e.length; a > o; o++) i[t[o]] = e[o](n, r);
              return i
            }, {
              literal: !0,
              constant: e.every(Ie),
              inputs: e
            })
          }
        };
        var mi = ct(),
        gi = ct(),
        yi = Object.prototype.valueOf,
        wi = r('$sce'),
        bi = {
          HTML: 'html',
          CSS: 'css',
          URL: 'url',
          RESOURCE_URL: 'resourceUrl',
          JS: 'js'
        },
        Jr = r('$compile'),
        xi = e.createElement('a'),
        Ci = rn(t.location.href);
        sn.$inject = [
          '$provide'
        ],
        fn.$inject = [
          '$locale'
        ],
        hn.$inject = [
          '$locale'
        ];
        var Si = '.',
        Ei = {
          yyyy: $n('FullYear', 4),
          yy: $n('FullYear', 2, 0, !0),
          y: $n('FullYear', 1),
          MMMM: vn('Month'),
          MMM: vn('Month', !0),
          MM: $n('Month', 2, 1),
          M: $n('Month', 1, 1),
          dd: $n('Date', 2),
          d: $n('Date', 1),
          HH: $n('Hours', 2),
          H: $n('Hours', 1),
          hh: $n('Hours', 2, - 12),
          h: $n('Hours', 1, - 12),
          mm: $n('Minutes', 2),
          m: $n('Minutes', 1),
          ss: $n('Seconds', 2),
          s: $n('Seconds', 1),
          sss: $n('Milliseconds', 3),
          EEEE: vn('Day'),
          EEE: vn('Day', !0),
          a: bn,
          Z: mn,
          ww: wn(2),
          w: wn(1),
          G: xn,
          GG: xn,
          GGG: xn,
          GGGG: Cn
        },
        ki = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        Ai = /^\-?\d+$/;
        Sn.$inject = [
          '$locale'
        ];
        var Ti = v(Jn),
        Di = v(Xn);
        An.$inject = [
          '$parse'
        ];
        var Oi = v({
          restrict: 'E',
          compile: function (t, e) {
            return e.href || e.xlinkHref || e.name ? void 0 : function (t, e) {
              if ('a' === e[0].nodeName.toLowerCase()) {
                var n = '[object SVGAnimatedString]' === sr.call(e.prop('href')) ? 'xlink:href' : 'href';
                e.on('click', function (t) {
                  e.attr(n) || t.preventDefault()
                })
              }
            }
          }
        }),
        Mi = {
        };
        o(qr, function (t, e) {
          if ('multiple' != t) {
            var n = Zt('ng-' + e);
            Mi[n] = function () {
              return {
                restrict: 'A',
                priority: 100,
                link: function (t, r, i) {
                  t.$watch(i[n], function (t) {
                    i.$set(e, !!t)
                  })
                }
              }
            }
          }
        }),
        o(Hr, function (t, e) {
          Mi[e] = function () {
            return {
              priority: 100,
              link: function (t, n, r) {
                if ('ngPattern' === e && '/' == r.ngPattern.charAt(0)) {
                  var i = r.ngPattern.match(Gn);
                  if (i) return void r.$set('ngPattern', new RegExp(i[1], i[2]))
                }
                t.$watch(r[e], function (t) {
                  r.$set(e, t)
                })
              }
            }
          }
        }),
        o(['src',
        'srcset',
        'href'], function (t) {
          var e = Zt('ng-' + t);
          Mi[e] = function () {
            return {
              priority: 99,
              link: function (n, r, i) {
                var o = t,
                a = t;
                'href' === t && '[object SVGAnimatedString]' === sr.call(r.prop('href')) && (a = 'xlinkHref', i.$attr[a] = 'xlink:href', o = null),
                i.$observe(e, function (e) {
                  return e ? (i.$set(a, e), void (tr && o && r.prop(o, i[a])))  : void ('href' === t && i.$set(a, null))
                })
              }
            }
          }
        });
        var ji = {
          $addControl: p,
          $$renameControl: Dn,
          $removeControl: p,
          $setValidity: p,
          $setDirty: p,
          $setPristine: p,
          $setSubmitted: p
        },
        Pi = 'ng-submitted';
        On.$inject = [
          '$element',
          '$attrs',
          '$scope',
          '$animate',
          '$interpolate'
        ];
        var Ni = function (t) {
          return ['$timeout',
          function (e) {
            var r = {
              name: 'form',
              restrict: t ? 'EAC' : 'E',
              controller: On,
              compile: function (r, i) {
                r.addClass($o).addClass(ho);
                var o = i.name ? 'name' : t && i.ngForm ? 'ngForm' : !1;
                return {
                  pre: function (t, r, i, a) {
                    if (!('action' in i)) {
                      var s = function (e) {
                        t.$apply(function () {
                          a.$commitViewValue(),
                          a.$setSubmitted()
                        }),
                        e.preventDefault()
                      };
                      Ar(r[0], 'submit', s),
                      r.on('$destroy', function () {
                        e(function () {
                          Tr(r[0], 'submit', s)
                        }, 0, !1)
                      })
                    }
                    var u = a.$$parentForm;
                    o && (Re(t, null, a.$name, a, a.$name), i.$observe(o, function (e) {
                      a.$name !== e && (Re(t, null, a.$name, n, a.$name), u.$$renameControl(a, e), Re(t, null, a.$name, a, a.$name))
                    })),
                    r.on('$destroy', function () {
                      u.$removeControl(a),
                      o && Re(t, null, i[o], n, a.$name),
                      f(a, ji)
                    })
                  }
                }
              }
            };
            return r
          }
          ]
        },
        Ii = Ni(),
        Ri = Ni(!0),
        Vi = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
        Ui = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        qi = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        Fi = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        Hi = /^(\d{4})-(\d{2})-(\d{2})$/,
        _i = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Bi = /^(\d{4})-W(\d\d)$/,
        Li = /^(\d{4})-(\d\d)$/,
        Wi = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        zi = {
          text: jn,
          date: Rn('date', Hi, In(Hi, [
            'yyyy',
            'MM',
            'dd'
          ]), 'yyyy-MM-dd'),
          'datetime-local': Rn('datetimelocal', _i, In(_i, [
            'yyyy',
            'MM',
            'dd',
            'HH',
            'mm',
            'ss',
            'sss'
          ]), 'yyyy-MM-ddTHH:mm:ss.sss'),
          time: Rn('time', Wi, In(Wi, [
            'HH',
            'mm',
            'ss',
            'sss'
          ]), 'HH:mm:ss.sss'),
          week: Rn('week', Bi, Nn, 'yyyy-Www'),
          month: Rn('month', Li, In(Li, [
            'yyyy',
            'MM'
          ]), 'yyyy-MM'),
          number: Un,
          url: qn,
          email: Fn,
          radio: Hn,
          checkbox: Bn,
          hidden: p,
          button: p,
          submit: p,
          reset: p,
          file: p
        },
        Gi = [
          '$browser',
          '$sniffer',
          '$filter',
          '$parse',
          function (t, e, n, r) {
            return {
              restrict: 'E',
              require: [
                '?ngModel'
              ],
              link: {
                pre: function (i, o, a, s) {
                  s[0] && (zi[Jn(a.type)] || zi.text) (i, o, a, s[0], e, t, n, r)
                }
              }
            }
          }
        ],
        Yi = /^(true|false|\d+)$/,
        Ji = function () {
          return {
            restrict: 'A',
            priority: 100,
            compile: function (t, e) {
              return Yi.test(e.ngValue) ? function (t, e, n) {
                n.$set('value', t.$eval(n.ngValue))
              }
               : function (t, e, n) {
                t.$watch(n.ngValue, function (t) {
                  n.$set('value', t)
                })
              }
            }
          }
        },
        Ki = [
          '$compile',
          function (t) {
            return {
              restrict: 'AC',
              compile: function (e) {
                return t.$$addBindingClass(e),
                function (e, r, i) {
                  t.$$addBindingInfo(r, i.ngBind),
                  r = r[0],
                  e.$watch(i.ngBind, function (t) {
                    r.textContent = t === n ? '' : t
                  })
                }
              }
            }
          }
        ],
        Xi = [
          '$interpolate',
          '$compile',
          function (t, e) {
            return {
              compile: function (r) {
                return e.$$addBindingClass(r),
                function (r, i, o) {
                  var a = t(i.attr(o.$attr.ngBindTemplate));
                  e.$$addBindingInfo(i, a.expressions),
                  i = i[0],
                  o.$observe('ngBindTemplate', function (t) {
                    i.textContent = t === n ? '' : t
                  })
                }
              }
            }
          }
        ],
        Zi = [
          '$sce',
          '$parse',
          '$compile',
          function (t, e, n) {
            return {
              restrict: 'A',
              compile: function (r, i) {
                var o = e(i.ngBindHtml),
                a = e(i.ngBindHtml, function (t) {
                  return (t || '').toString()
                });
                return n.$$addBindingClass(r),
                function (e, r, i) {
                  n.$$addBindingInfo(r, i.ngBindHtml),
                  e.$watch(a, function () {
                    r.html(t.getTrustedHtml(o(e)) || '')
                  })
                }
              }
            }
          }
        ],
        Qi = v({
          restrict: 'A',
          require: 'ngModel',
          link: function (t, e, n, r) {
            r.$viewChangeListeners.push(function () {
              t.$eval(n.ngChange)
            })
          }
        }),
        to = Ln('', !0),
        eo = Ln('Odd', 0),
        no = Ln('Even', 1),
        ro = Tn({
          compile: function (t, e) {
            e.$set('ngCloak', n),
            t.removeClass('ng-cloak')
          }
        }),
        io = [
          function () {
            return {
              restrict: 'A',
              scope: !0,
              controller: '@',
              priority: 500
            }
          }
        ],
        oo = {
        },
        ao = {
          blur: !0,
          focus: !0
        };
        o('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function (t) {
          var e = Zt('ng-' + t);
          oo[e] = [
            '$parse',
            '$rootScope',
            function (n, r) {
              return {
                restrict: 'A',
                compile: function (i, o) {
                  var a = n(o[e], null, !0);
                  return function (e, n) {
                    n.on(t, function (n) {
                      var i = function () {
                        a(e, {
                          $event: n
                        })
                      };
                      ao[t] && r.$$phase ? e.$evalAsync(i)  : e.$apply(i)
                    })
                  }
                }
              }
            }
          ]
        });
        var so = [
          '$animate',
          function (t) {
            return {
              multiElement: !0,
              transclude: 'element',
              priority: 600,
              terminal: !0,
              restrict: 'A',
              $$tlb: !0,
              link: function (n, r, i, o, a) {
                var s,
                u,
                c;
                n.$watch(i.ngIf, function (n) {
                  n ? u || a(function (n, o) {
                    u = o,
                    n[n.length++] = e.createComment(' end ngIf: ' + i.ngIf + ' '),
                    s = {
                      clone: n
                    },
                    t.enter(n, r.parent(), r)
                  })  : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), s && (c = ut(s.clone), t.leave(c).then(function () {
                    c = null
                  }), s = null))
                })
              }
            }
          }
        ],
        uo = [
          '$templateRequest',
          '$anchorScroll',
          '$animate',
          '$sce',
          function (t, e, n, r) {
            return {
              restrict: 'ECA',
              priority: 400,
              terminal: !0,
              transclude: 'element',
              controller: cr.noop,
              compile: function (i, o) {
                var a = o.ngInclude || o.src,
                s = o.onload || '',
                u = o.autoscroll;
                return function (i, o, c, l, f) {
                  var h,
                  d,
                  p,
                  $ = 0,
                  v = function () {
                    d && (d.remove(), d = null),
                    h && (h.$destroy(), h = null),
                    p && (n.leave(p).then(function () {
                      d = null
                    }), d = p, p = null)
                  };
                  i.$watch(r.parseAsResourceUrl(a), function (r) {
                    var a = function () {
                      !g(u) || u && !i.$eval(u) || e()
                    },
                    c = ++$;
                    r ? (t(r, !0).then(function (t) {
                      if (c === $) {
                        var e = i.$new();
                        l.template = t;
                        var u = f(e, function (t) {
                          v(),
                          n.enter(t, null, o).then(a)
                        });
                        h = e,
                        p = u,
                        h.$emit('$includeContentLoaded', r),
                        i.$eval(s)
                      }
                    }, function () {
                      c === $ && (v(), i.$emit('$includeContentError', r))
                    }), i.$emit('$includeContentRequested', r))  : (v(), l.template = null)
                  })
                }
              }
            }
          }
        ],
        co = [
          '$compile',
          function (t) {
            return {
              restrict: 'ECA',
              priority: - 400,
              require: 'ngInclude',
              link: function (n, r, i, o) {
                return /SVG/.test(r[0].toString()) ? (r.empty(), void t(gt(o.template, e).childNodes) (n, function (t) {
                  r.append(t)
                }, {
                  futureParentElement: r
                }))  : (r.html(o.template), void t(r.contents()) (n))
              }
            }
          }
        ],
        lo = Tn({
          priority: 450,
          compile: function () {
            return {
              pre: function (t, e, n) {
                t.$eval(n.ngInit)
              }
            }
          }
        }),
        fo = function () {
          return {
            restrict: 'A',
            priority: 100,
            require: 'ngModel',
            link: function (t, e, r, i) {
              var a = e.attr(r.$attr.ngList) || ', ',
              s = 'false' !== r.ngTrim,
              u = s ? dr(a)  : a,
              c = function (t) {
                if (!m(t)) {
                  var e = [
                  ];
                  return t && o(t.split(u), function (t) {
                    t && e.push(s ? dr(t)  : t)
                  }),
                  e
                }
              };
              i.$parsers.push(c),
              i.$formatters.push(function (t) {
                return hr(t) ? t.join(a)  : n
              }),
              i.$isEmpty = function (t) {
                return !t || !t.length
              }
            }
          }
        },
        ho = 'ng-valid',
        po = 'ng-invalid',
        $o = 'ng-pristine',
        vo = 'ng-dirty',
        mo = 'ng-untouched',
        go = 'ng-touched',
        yo = 'ng-pending',
        wo = new r('ngModel'),
        bo = [
          '$scope',
          '$exceptionHandler',
          '$attrs',
          '$element',
          '$parse',
          '$animate',
          '$timeout',
          '$rootScope',
          '$q',
          '$interpolate',
          function (t, e, r, i, a, s, u, c, l, f) {
            this.$viewValue = Number.NaN,
            this.$modelValue = Number.NaN,
            this.$$rawModelValue = n,
            this.$validators = {
            },
            this.$asyncValidators = {
            },
            this.$parsers = [
            ],
            this.$formatters = [
            ],
            this.$viewChangeListeners = [
            ],
            this.$untouched = !0,
            this.$touched = !1,
            this.$pristine = !0,
            this.$dirty = !1,
            this.$valid = !0,
            this.$invalid = !1,
            this.$error = {
            },
            this.$$success = {
            },
            this.$pending = n,
            this.$name = f(r.name || '', !1) (t);
            var h,
            d = a(r.ngModel),
            $ = d.assign,
            v = d,
            y = $,
            w = null,
            x = this;
            this.$$setOptions = function (t) {
              if (x.$options = t, t && t.getterSetter) {
                var e = a(r.ngModel + '()'),
                n = a(r.ngModel + '($$$p)');
                v = function (t) {
                  var n = d(t);
                  return C(n) && (n = e(t)),
                  n
                },
                y = function (t, e) {
                  C(d(t)) ? n(t, {
                    $$$p: x.$modelValue
                  })  : $(t, x.$modelValue)
                }
              } else if (!d.assign) throw wo('nonassign', 'Expression \'{0}\' is non-assignable. Element: {1}', r.ngModel, W(i))
            },
            this.$render = p,
            this.$isEmpty = function (t) {
              return m(t) || '' === t || null === t || t !== t
            };
            var S = i.inheritedData('$formController') || ji,
            E = 0;
            Wn({
              ctrl: this,
              $element: i,
              set: function (t, e) {
                t[e] = !0
              },
              unset: function (t, e) {
                delete t[e]
              },
              parentForm: S,
              $animate: s
            }),
            this.$setPristine = function () {
              x.$dirty = !1,
              x.$pristine = !0,
              s.removeClass(i, vo),
              s.addClass(i, $o)
            },
            this.$setDirty = function () {
              x.$dirty = !0,
              x.$pristine = !1,
              s.removeClass(i, $o),
              s.addClass(i, vo),
              S.$setDirty()
            },
            this.$setUntouched = function () {
              x.$touched = !1,
              x.$untouched = !0,
              s.setClass(i, mo, go)
            },
            this.$setTouched = function () {
              x.$touched = !0,
              x.$untouched = !1,
              s.setClass(i, go, mo)
            },
            this.$rollbackViewValue = function () {
              u.cancel(w),
              x.$viewValue = x.$$lastCommittedViewValue,
              x.$render()
            },
            this.$validate = function () {
              if (!b(x.$modelValue) || !isNaN(x.$modelValue)) {
                var t = x.$$lastCommittedViewValue,
                e = x.$$rawModelValue,
                r = x.$valid,
                i = x.$modelValue,
                o = x.$options && x.$options.allowInvalid;
                x.$$runValidators(e, t, function (t) {
                  o || r === t || (x.$modelValue = t ? e : n, x.$modelValue !== i && x.$$writeModelToScope())
                })
              }
            },
            this.$$runValidators = function (t, e, r) {
              function i() {
                var t = x.$$parserName || 'parse';
                return h !== n ? (h || (o(x.$validators, function (t, e) {
                  u(e, null)
                }), o(x.$asyncValidators, function (t, e) {
                  u(e, null)
                })), u(t, h), h)  : (u(t, null), !0)
              }
              function a() {
                var n = !0;
                return o(x.$validators, function (r, i) {
                  var o = r(t, e);
                  n = n && o,
                  u(i, o)
                }),
                n ? !0 : (o(x.$asyncValidators, function (t, e) {
                  u(e, null)
                }), !1)
              }
              function s() {
                var r = [
                ],
                i = !0;
                o(x.$asyncValidators, function (o, a) {
                  var s = o(t, e);
                  if (!M(s)) throw wo('$asyncValidators', 'Expected asynchronous validator to return a promise but got \'{0}\' instead.', s);
                  u(a, n),
                  r.push(s.then(function () {
                    u(a, !0)
                  }, function (t) {
                    i = !1,
                    u(a, !1)
                  }))
                }),
                r.length ? l.all(r).then(function () {
                  c(i)
                }, p)  : c(!0)
              }
              function u(t, e) {
                f === E && x.$setValidity(t, e)
              }
              function c(t) {
                f === E && r(t)
              }
              E++;
              var f = E;
              return i() && a() ? void s()  : void c(!1)
            },
            this.$commitViewValue = function () {
              var t = x.$viewValue;
              u.cancel(w),
              (x.$$lastCommittedViewValue !== t || '' === t && x.$$hasNativeValidators) && (x.$$lastCommittedViewValue = t, x.$pristine && this.$setDirty(), this.$$parseAndValidate())
            },
            this.$$parseAndValidate = function () {
              function e() {
                x.$modelValue !== a && x.$$writeModelToScope()
              }
              var r = x.$$lastCommittedViewValue,
              i = r;
              if (h = m(i) ? n : !0) for (var o = 0; o < x.$parsers.length; o++) if (i = x.$parsers[o](i), m(i)) {
                h = !1;
                break
              }
              b(x.$modelValue) && isNaN(x.$modelValue) && (x.$modelValue = v(t));
              var a = x.$modelValue,
              s = x.$options && x.$options.allowInvalid;
              x.$$rawModelValue = i,
              s && (x.$modelValue = i, e()),
              x.$$runValidators(i, x.$$lastCommittedViewValue, function (t) {
                s || (x.$modelValue = t ? i : n, e())
              })
            },
            this.$$writeModelToScope = function () {
              y(t, x.$modelValue),
              o(x.$viewChangeListeners, function (t) {
                try {
                  t()
                } catch (n) {
                  e(n)
                }
              })
            },
            this.$setViewValue = function (t, e) {
              x.$viewValue = t,
              (!x.$options || x.$options.updateOnDefault) && x.$$debounceViewValueCommit(e)
            },
            this.$$debounceViewValueCommit = function (e) {
              var n,
              r = 0,
              i = x.$options;
              i && g(i.debounce) && (n = i.debounce, b(n) ? r = n : b(n[e]) ? r = n[e] : b(n['default']) && (r = n['default'])),
              u.cancel(w),
              r ? w = u(function () {
                x.$commitViewValue()
              }, r)  : c.$$phase ? x.$commitViewValue()  : t.$apply(function () {
                x.$commitViewValue()
              })
            },
            t.$watch(function () {
              var e = v(t);
              if (e !== x.$modelValue) {
                x.$modelValue = x.$$rawModelValue = e,
                h = n;
                for (var r = x.$formatters, i = r.length, o = e; i--; ) o = r[i](o);
                x.$viewValue !== o && (x.$viewValue = x.$$lastCommittedViewValue = o, x.$render(), x.$$runValidators(e, o, p))
              }
              return e
            })
          }
        ],
        xo = [
          '$rootScope',
          function (t) {
            return {
              restrict: 'A',
              require: [
                'ngModel',
                '^?form',
                '^?ngModelOptions'
              ],
              controller: bo,
              priority: 1,
              compile: function (e) {
                return e.addClass($o).addClass(mo).addClass(ho),
                {
                  pre: function (t, e, n, r) {
                    var i = r[0],
                    o = r[1] || ji;
                    i.$$setOptions(r[2] && r[2].$options),
                    o.$addControl(i),
                    n.$observe('name', function (t) {
                      i.$name !== t && o.$$renameControl(i, t)
                    }),
                    t.$on('$destroy', function () {
                      o.$removeControl(i)
                    })
                  },
                  post: function (e, n, r, i) {
                    var o = i[0];
                    o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function (t) {
                      o.$$debounceViewValueCommit(t && t.type)
                    }),
                    n.on('blur', function (n) {
                      o.$touched || (t.$$phase ? e.$evalAsync(o.$setTouched)  : e.$apply(o.$setTouched))
                    })
                  }
                }
              }
            }
          }
        ],
        Co = /(\s+|^)default(\s+|$)/,
        So = function () {
          return {
            restrict: 'A',
            controller: [
              '$scope',
              '$attrs',
              function (t, e) {
                var r = this;
                this.$options = t.$eval(e.ngModelOptions),
                this.$options.updateOn !== n ? (this.$options.updateOnDefault = !1, this.$options.updateOn = dr(this.$options.updateOn.replace(Co, function () {
                  return r.$options.updateOnDefault = !0,
                  ' '
                })))  : this.$options.updateOnDefault = !0
              }
            ]
          }
        },
        Eo = Tn({
          terminal: !0,
          priority: 1000
        }),
        ko = [
          '$locale',
          '$interpolate',
          function (t, e) {
            var n = /{}/g,
            r = /^when(Minus)?(.+)$/;
            return {
              restrict: 'EA',
              link: function (i, a, s) {
                function u(t) {
                  a.text(t || '')
                }
                var c,
                l = s.count,
                f = s.$attr.when && a.attr(s.$attr.when),
                h = s.offset || 0,
                d = i.$eval(f) || {
                },
                p = {
                },
                $ = e.startSymbol(),
                v = e.endSymbol(),
                m = $ + l + '-' + h + v,
                g = cr.noop;
                o(s, function (t, e) {
                  var n = r.exec(e);
                  if (n) {
                    var i = (n[1] ? '-' : '') + Jn(n[2]);
                    d[i] = a.attr(s.$attr[e])
                  }
                }),
                o(d, function (t, r) {
                  p[r] = e(t.replace(n, m))
                }),
                i.$watch(l, function (e) {
                  var n = parseFloat(e),
                  r = isNaN(n);
                  r || n in d || (n = t.pluralCat(n - h)),
                  n === c || r && isNaN(c) || (g(), g = i.$watch(p[n], u), c = n)
                })
              }
            }
          }
        ],
        Ao = [
          '$parse',
          '$animate',
          function (t, a) {
            var s = '$$NG_REMOVED',
            u = r('ngRepeat'),
            c = function (t, e, n, r, i, o, a) {
              t[n] = r,
              i && (t[i] = o),
              t.$index = e,
              t.$first = 0 === e,
              t.$last = e === a - 1,
              t.$middle = !(t.$first || t.$last),
              t.$odd = !(t.$even = 0 === (1 & e))
            },
            l = function (t) {
              return t.clone[0]
            },
            f = function (t) {
              return t.clone[t.clone.length - 1]
            };
            return {
              restrict: 'A',
              multiElement: !0,
              transclude: 'element',
              priority: 1000,
              terminal: !0,
              $$tlb: !0,
              compile: function (r, h) {
                var d = h.ngRepeat,
                p = e.createComment(' end ngRepeat: ' + d + ' '),
                $ = d.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!$) throw u('iexp', 'Expected expression in form of \'_item_ in _collection_[ track by _id_]\' but got \'{0}\'.', d);
                var v = $[1],
                m = $[2],
                g = $[3],
                y = $[4];
                if ($ = v.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !$) throw u('iidexp', '\'_item_\' in \'_item_ in _collection_\' should be an identifier or \'(_key_, _value_)\' expression, but got \'{0}\'.', v);
                var w = $[3] || $[1],
                b = $[2];
                if (g && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(g) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(g))) throw u('badident', 'alias \'{0}\' is invalid --- must be a valid JS identifier which is not a reserved name.', g);
                var x,
                C,
                S,
                E,
                k = {
                  $id: Ft
                };
                return y ? x = t(y)  : (S = function (t, e) {
                  return Ft(e)
                }, E = function (t) {
                  return t
                }),
                function (t, e, r, h, $) {
                  x && (C = function (e, n, r) {
                    return b && (k[b] = e),
                    k[w] = n,
                    k.$index = r,
                    x(t, k)
                  });
                  var v = ct();
                  t.$watchCollection(m, function (r) {
                    var h,
                    m,
                    y,
                    x,
                    k,
                    A,
                    T,
                    D,
                    O,
                    M,
                    j,
                    P,
                    N = e[0],
                    I = ct();
                    if (g && (t[g] = r), i(r)) O = r,
                    D = C || S;
                     else {
                      D = C || E,
                      O = [
                      ];
                      for (var R in r) r.hasOwnProperty(R) && '$' != R.charAt(0) && O.push(R);
                      O.sort()
                    }
                    for (x = O.length, j = new Array(x), h = 0; x > h; h++) if (k = r === O ? h : O[h], A = r[k], T = D(k, A, h), v[T]) M = v[T],
                    delete v[T],
                    I[T] = M,
                    j[h] = M;
                     else {
                      if (I[T]) throw o(j, function (t) {
                        t && t.scope && (v[t.id] = t)
                      }),
                      u('dupes', 'Duplicates in a repeater are not allowed. Use \'track by\' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}', d, T, A);
                      j[h] = {
                        id: T,
                        scope: n,
                        clone: n
                      },
                      I[T] = !0
                    }
                    for (var V in v) {
                      if (M = v[V], P = ut(M.clone), a.leave(P), P[0].parentNode) for (h = 0, m = P.length; m > h; h++) P[h][s] = !0;
                      M.scope.$destroy()
                    }
                    for (h = 0; x > h; h++) if (k = r === O ? h : O[h], A = r[k], M = j[h], M.scope) {
                      y = N;
                      do y = y.nextSibling;
                      while (y && y[s]);
                      l(M) != y && a.move(ut(M.clone), null, er(N)),
                      N = f(M),
                      c(M.scope, h, w, A, b, k, x)
                    } else $(function (t, e) {
                      M.scope = e;
                      var n = p.cloneNode(!1);
                      t[t.length++] = n,
                      a.enter(t, null, er(N)),
                      N = n,
                      M.clone = t,
                      I[M.id] = M,
                      c(M.scope, h, w, A, b, k, x)
                    });
                    v = I
                  })
                }
              }
            }
          }
        ],
        To = 'ng-hide',
        Do = 'ng-hide-animate',
        Oo = [
          '$animate',
          function (t) {
            return {
              restrict: 'A',
              multiElement: !0,
              link: function (e, n, r) {
                e.$watch(r.ngShow, function (e) {
                  t[e ? 'removeClass' : 'addClass'](n, To, {
                    tempClasses: Do
                  })
                })
              }
            }
          }
        ],
        Mo = [
          '$animate',
          function (t) {
            return {
              restrict: 'A',
              multiElement: !0,
              link: function (e, n, r) {
                e.$watch(r.ngHide, function (e) {
                  t[e ? 'addClass' : 'removeClass'](n, To, {
                    tempClasses: Do
                  })
                })
              }
            }
          }
        ],
        jo = Tn(function (t, e, n) {
          t.$watchCollection(n.ngStyle, function (t, n) {
            n && t !== n && o(n, function (t, n) {
              e.css(n, '')
            }),
            t && e.css(t)
          })
        }),
        Po = [
          '$animate',
          function (t) {
            return {
              restrict: 'EA',
              require: 'ngSwitch',
              controller: [
                '$scope',
                function () {
                  this.cases = {
                  }
                }
              ],
              link: function (n, r, i, a) {
                var s = i.ngSwitch || i.on,
                u = [
                ],
                c = [
                ],
                l = [
                ],
                f = [
                ],
                h = function (t, e) {
                  return function () {
                    t.splice(e, 1)
                  }
                };
                n.$watch(s, function (n) {
                  var r,
                  i;
                  for (r = 0, i = l.length; i > r; ++r) t.cancel(l[r]);
                  for (l.length = 0, r = 0, i = f.length; i > r; ++r) {
                    var s = ut(c[r].clone);
                    f[r].$destroy();
                    var d = l[r] = t.leave(s);
                    d.then(h(l, r))
                  }
                  c.length = 0,
                  f.length = 0,
                  (u = a.cases['!' + n] || a.cases['?']) && o(u, function (n) {
                    n.transclude(function (r, i) {
                      f.push(i);
                      var o = n.element;
                      r[r.length++] = e.createComment(' end ngSwitchWhen: ');
                      var a = {
                        clone: r
                      };
                      c.push(a),
                      t.enter(r, o.parent(), o)
                    })
                  })
                })
              }
            }
          }
        ],
        No = Tn({
          transclude: 'element',
          priority: 1200,
          require: '^ngSwitch',
          multiElement: !0,
          link: function (t, e, n, r, i) {
            r.cases['!' + n.ngSwitchWhen] = r.cases['!' + n.ngSwitchWhen] || [
            ],
            r.cases['!' + n.ngSwitchWhen].push({
              transclude: i,
              element: e
            })
          }
        }),
        Io = Tn({
          transclude: 'element',
          priority: 1200,
          require: '^ngSwitch',
          multiElement: !0,
          link: function (t, e, n, r, i) {
            r.cases['?'] = r.cases['?'] || [
            ],
            r.cases['?'].push({
              transclude: i,
              element: e
            })
          }
        }),
        Ro = Tn({
          restrict: 'EAC',
          link: function (t, e, n, i, o) {
            if (!o) throw r('ngTransclude') ('orphan', 'Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}', W(e));
            o(function (t) {
              e.empty(),
              e.append(t)
            })
          }
        }),
        Vo = [
          '$templateCache',
          function (t) {
            return {
              restrict: 'E',
              terminal: !0,
              compile: function (e, n) {
                if ('text/ng-template' == n.type) {
                  var r = n.id,
                  i = e[0].text;
                  t.put(r, i)
                }
              }
            }
          }
        ],
        Uo = r('ngOptions'),
        qo = v({
          restrict: 'A',
          terminal: !0
        }),
        Fo = [
          '$compile',
          '$parse',
          function (t, r) {
            var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
            s = {
              $setViewValue: p
            };
            return {
              restrict: 'E',
              require: [
                'select',
                '?ngModel'
              ],
              controller: [
                '$element',
                '$scope',
                '$attrs',
                function (t, e, n) {
                  var r,
                  i,
                  o = this,
                  a = {
                  },
                  u = s;
                  o.databound = n.ngModel,
                  o.init = function (t, e, n) {
                    u = t,
                    r = e,
                    i = n
                  },
                  o.addOption = function (e, n) {
                    at(e, '"option value"'),
                    a[e] = !0,
                    u.$viewValue == e && (t.val(e), i.parent() && i.remove()),
                    n && n[0].hasAttribute('selected') && (n[0].selected = !0)
                  },
                  o.removeOption = function (t) {
                    this.hasOption(t) && (delete a[t], u.$viewValue === t && this.renderUnknownOption(t))
                  },
                  o.renderUnknownOption = function (e) {
                    var n = '? ' + Ft(e) + ' ?';
                    i.val(n),
                    t.prepend(i),
                    t.val(n),
                    i.prop('selected', !0)
                  },
                  o.hasOption = function (t) {
                    return a.hasOwnProperty(t)
                  },
                  e.$on('$destroy', function () {
                    o.renderUnknownOption = p
                  })
                }
              ],
              link: function (s, u, c, l) {
                function f(t, e, n, r) {
                  n.$render = function () {
                    var t = n.$viewValue;
                    r.hasOption(t) ? (E.parent() && E.remove(), e.val(t), '' === t && p.prop('selected', !0))  : m(t) && p ? e.val('')  : r.renderUnknownOption(t)
                  },
                  e.on('change', function () {
                    t.$apply(function () {
                      E.parent() && E.remove(),
                      n.$setViewValue(e.val())
                    })
                  })
                }
                function h(t, e, n) {
                  var r;
                  n.$render = function () {
                    var t = new Ht(n.$viewValue);
                    o(e.find('option'), function (e) {
                      e.selected = g(t.get(e.value))
                    })
                  },
                  t.$watch(function () {
                    U(r, n.$viewValue) || (r = V(n.$viewValue), n.$render())
                  }),
                  e.on('change', function () {
                    t.$apply(function () {
                      var t = [
                      ];
                      o(e.find('option'), function (e) {
                        e.selected && t.push(e.value)
                      }),
                      n.$setViewValue(t)
                    })
                  })
                }
                function d(e, s, u) {
                  function c(t, n, r) {
                    return U[A] = r,
                    O && (U[O] = n),
                    t(e, U)
                  }
                  function l() {
                    e.$apply(function () {
                      var t,
                      n = P(e) || [
                      ];
                      if (y) t = [
                      ],
                      o(s.val(), function (e) {
                        e = I ? R[e] : e,
                        t.push(f(e, n[e]))
                      });
                       else {
                        var r = I ? R[s.val()] : s.val();
                        t = f(r, n[r])
                      }
                      u.$setViewValue(t),
                      m()
                    })
                  }
                  function f(t, e) {
                    if ('?' === t) return n;
                    if ('' === t) return null;
                    var r = D ? D : j;
                    return c(r, t, e)
                  }
                  function h() {
                    var t,
                    n = P(e);
                    if (n && hr(n)) {
                      t = new Array(n.length);
                      for (var r = 0, i = n.length; i > r; r++) t[r] = c(k, r, n[r]);
                      return t
                    }
                    if (n) {
                      t = {
                      };
                      for (var o in n) n.hasOwnProperty(o) && (t[o] = c(k, o, n[o]))
                    }
                    return t
                  }
                  function d(t) {
                    var e;
                    if (y) if (I && hr(t)) {
                      e = new Ht([]);
                      for (var n = 0; n < t.length; n++) e.put(c(I, null, t[n]), !0)
                    } else e = new Ht(t);
                     else I && (t = c(I, null, t));
                    return function (n, r) {
                      var i;
                      return i = I ? I : D ? D : j,
                      y ? g(e.remove(c(i, n, r)))  : t === c(i, n, r)
                    }
                  }
                  function p() {
                    x || (e.$$postDigest(m), x = !0)
                  }
                  function v(t, e, n) {
                    t[e] = t[e] || 0,
                    t[e] += n ? 1 : - 1
                  }
                  function m() {
                    x = !1;
                    var t,
                    n,
                    r,
                    i,
                    l,
                    f,
                    h,
                    p,
                    m,
                    w,
                    E,
                    A,
                    T,
                    D,
                    j,
                    N,
                    q,
                    F = {
                      '': [
                      ]
                    },
                    H = [
                      ''
                    ],
                    _ = u.$viewValue,
                    B = P(e) || [
                    ],
                    L = O ? a(B)  : B,
                    W = {
                    },
                    z = d(_),
                    G = !1;
                    for (R = {
                    }, A = 0; w = L.length, w > A; A++) h = A,
                    O && (h = L[A], '$' === h.charAt(0)) || (p = B[h], t = c(M, h, p) || '', (n = F[t]) || (n = F[t] = [
                    ], H.push(t)), T = z(h, p), G = G || T, N = c(k, h, p), N = g(N) ? N : '', q = I ? I(e, U)  : O ? L[A] : A, I && (R[q] = h), n.push({
                      id: q,
                      label: N,
                      selected: T
                    }));
                    for (y || (b || null === _ ? F[''].unshift({
                      id: '',
                      label: '',
                      selected: !G
                    })  : G || F[''].unshift({
                      id: '?',
                      label: '',
                      selected: !0
                    })), E = 0, m = H.length; m > E; E++) {
                      for (t = H[E], n = F[t], V.length <= E ? (i = {
                        element: S.clone().attr('label', t),
                        label: n.label
                      }, l = [
                        i
                      ], V.push(l), s.append(i.element))  : (l = V[E], i = l[0], i.label != t && i.element.attr('label', i.label = t)), D = null, A = 0, w = n.length; w > A; A++) r = n[A],
                      (f = l[A + 1]) ? (D = f.element, f.label !== r.label && (v(W, f.label, !1), v(W, r.label, !0), D.text(f.label = r.label), D.prop('label', f.label)), f.id !== r.id && D.val(f.id = r.id), D[0].selected !== r.selected && (D.prop('selected', f.selected = r.selected), tr && D.prop('selected', f.selected)))  : ('' === r.id && b ? j = b : (j = C.clone()).val(r.id).prop('selected', r.selected).attr('selected', r.selected).prop('label', r.label).text(r.label), l.push(f = {
                        element: j,
                        label: r.label,
                        id: r.id,
                        selected: r.selected
                      }), v(W, r.label, !0), D ? D.after(j)  : i.element.append(j), D = j);
                      for (A++; l.length > A; ) r = l.pop(),
                      v(W, r.label, !1),
                      r.element.remove()
                    }
                    for (; V.length > E; ) {
                      for (n = V.pop(), A = 1; A < n.length; ++A) v(W, n[A].label, !1);
                      n[0].element.remove()
                    }
                    o(W, function (t, e) {
                      t > 0 ? $.addOption(e)  : 0 > t && $.removeOption(e)
                    })
                  }
                  var E;
                  if (!(E = w.match(i))) throw Uo('iexp', 'Expected expression in form of \'_select_ (as _label_)? for (_key_,)?_value_ in _collection_\' but got \'{0}\'. Element: {1}', w, W(s));
                  var k = r(E[2] || E[1]),
                  A = E[4] || E[6],
                  T = / as /.test(E[0]) && E[1],
                  D = T ? r(T)  : null,
                  O = E[5],
                  M = r(E[3] || ''),
                  j = r(E[2] ? E[1] : A),
                  P = r(E[7]),
                  N = E[8],
                  I = N ? r(E[8])  : null,
                  R = {
                  },
                  V = [
                    [{
                      element: s,
                      label: ''
                    }
                    ]
                  ],
                  U = {
                  };
                  b && (t(b) (e), b.removeClass('ng-scope'), b.remove()),
                  s.empty(),
                  s.on('change', l),
                  u.$render = m,
                  e.$watchCollection(P, p),
                  e.$watchCollection(h, p),
                  y && e.$watchCollection(function () {
                    return u.$modelValue
                  }, p)
                }
                if (l[1]) {
                  for (var p, $ = l[0], v = l[1], y = c.multiple, w = c.ngOptions, b = !1, x = !1, C = er(e.createElement('option')), S = er(e.createElement('optgroup')), E = C.clone(), k = 0, A = u.children(), T = A.length; T > k; k++) if ('' === A[k].value) {
                    p = b = A.eq(k);
                    break
                  }
                  $.init(v, b, E),
                  y && (v.$isEmpty = function (t) {
                    return !t || 0 === t.length
                  }),
                  w ? d(s, u, v)  : y ? h(s, u, v)  : f(s, u, v, $)
                }
              }
            }
          }
        ],
        Ho = [
          '$interpolate',
          function (t) {
            var e = {
              addOption: p,
              removeOption: p
            };
            return {
              restrict: 'E',
              priority: 100,
              compile: function (n, r) {
                if (m(r.value)) {
                  var i = t(n.text(), !0);
                  i || r.$set('value', n.text())
                }
                return function (t, n, r) {
                  var o = '$selectController',
                  a = n.parent(),
                  s = a.data(o) || a.parent().data(o);
                  s && s.databound || (s = e),
                  i ? t.$watch(i, function (t, e) {
                    r.$set('value', t),
                    e !== t && s.removeOption(e),
                    s.addOption(t, n)
                  })  : s.addOption(r.value, n),
                  n.on('$destroy', function () {
                    s.removeOption(r.value)
                  })
                }
              }
            }
          }
        ],
        _o = v({
          restrict: 'E',
          terminal: !1
        }),
        Bo = function () {
          return {
            restrict: 'A',
            require: '?ngModel',
            link: function (t, e, n, r) {
              r && (n.required = !0, r.$validators.required = function (t, e) {
                return !n.required || !r.$isEmpty(e)
              }, n.$observe('required', function () {
                r.$validate()
              }))
            }
          }
        },
        Lo = function () {
          return {
            restrict: 'A',
            require: '?ngModel',
            link: function (t, e, i, o) {
              if (o) {
                var a,
                s = i.ngPattern || i.pattern;
                i.$observe('pattern', function (t) {
                  if (w(t) && t.length > 0 && (t = new RegExp('^' + t + '$')), t && !t.test) throw r('ngPattern') ('noregexp', 'Expected {0} to be a RegExp but was {1}. Element: {2}', s, t, W(e));
                  a = t || n,
                  o.$validate()
                }),
                o.$validators.pattern = function (t) {
                  return o.$isEmpty(t) || m(a) || a.test(t)
                }
              }
            }
          }
        },
        Wo = function () {
          return {
            restrict: 'A',
            require: '?ngModel',
            link: function (t, e, n, r) {
              if (r) {
                var i = - 1;
                n.$observe('maxlength', function (t) {
                  var e = h(t);
                  i = isNaN(e) ? - 1 : e,
                  r.$validate()
                }),
                r.$validators.maxlength = function (t, e) {
                  return 0 > i || r.$isEmpty(e) || e.length <= i
                }
              }
            }
          }
        },
        zo = function () {
          return {
            restrict: 'A',
            require: '?ngModel',
            link: function (t, e, n, r) {
              if (r) {
                var i = 0;
                n.$observe('minlength', function (t) {
                  i = h(t) || 0,
                  r.$validate()
                }),
                r.$validators.minlength = function (t, e) {
                  return r.$isEmpty(e) || e.length >= i
                }
              }
            }
          }
        };
        return t.angular.bootstrap ? void console.log('WARNING: Tried to load angular more than once.')  : (rt(), dt(cr), void er(e).ready(function () {
          Z(e, Q)
        }))
      }(window, document),
      !window.angular.$$csp() && window.angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'),
      function (t, e, n) {
        'use strict';
        function r(t) {
          var e;
          if (e = t.match(c)) {
            var n = new Date(0),
            r = 0,
            o = 0;
            return e[9] && (r = i(e[9] + e[10]), o = i(e[9] + e[11])),
            n.setUTCFullYear(i(e[1]), i(e[2]) - 1, i(e[3])),
            n.setUTCHours(i(e[4] || 0) - r, i(e[5] || 0) - o, i(e[6] || 0), i(e[7] || 0)),
            n
          }
          return t
        }
        function i(t) {
          return parseInt(t, 10)
        }
        function o(t, e, n) {
          var r = '';
          for (0 > t && (r = '-', t = - t), t = '' + t; t.length < e; ) t = '0' + t;
          return n && (t = t.substr(t.length - e)),
          r + t
        }
        function a(t, r, i, o) {
          function a(t, n, r, i) {
            return e.isFunction(t) ? t : function () {
              return e.isNumber(t) ? [
                t,
                n,
                r,
                i
              ] : [
                200,
                t,
                n,
                r
              ]
            }
          }
          function c(t, a, s, c, l, v, m) {
            function g(t) {
              return e.isString(t) || e.isFunction(t) || t instanceof RegExp ? t : e.toJson(t)
            }
            function y(e) {
              function i() {
                var n = e.response(t, a, s, l);
                w.$$respHeaders = n[2],
                c($(n[0]), $(n[1]), w.getAllResponseHeaders(), $(n[3] || ''))
              }
              function u() {
                for (var t = 0, e = d.length; e > t; t++) if (d[t] === i) {
                  d.splice(t, 1),
                  c( - 1, n, '');
                  break
                }
              }
              return !o && v && (v.then ? v.then(u)  : r(u, v)),
              i
            }
            var w = new u,
            b = h[0],
            x = !1;
            if (b && b.match(t, a)) {
              if (!b.matchData(s)) throw new Error('Expected ' + b + ' with different data\nEXPECTED: ' + g(b.data) + '\nGOT:      ' + s);
              if (!b.matchHeaders(l)) throw new Error('Expected ' + b + ' with different headers\nEXPECTED: ' + g(b.headers) + '\nGOT:      ' + g(l));
              if (h.shift(), b.response) return void d.push(y(b));
              x = !0
            }
            for (var C, S = - 1; C = f[++S]; ) if (C.match(t, a, s, l || {
            })) {
              if (C.response) (o ? o.defer : p) (y(C));
               else {
                if (!C.passThrough) throw new Error('No response defined !');
                i(t, a, s, c, l, v, m)
              }
              return
            }
            throw new Error(x ? 'No response defined !' : 'Unexpected request: ' + t + ' ' + a + '\n' + (b ? 'Expected ' + b : 'No more request expected'))
          }
          function l(t) {
            e.forEach(['GET',
            'DELETE',
            'JSONP',
            'HEAD'], function (e) {
              c[t + e] = function (r, i) {
                return c[t](e, r, n, i)
              }
            }),
            e.forEach(['PUT',
            'POST',
            'PATCH'], function (e) {
              c[t + e] = function (n, r, i) {
                return c[t](e, n, r, i)
              }
            })
          }
          var f = [
          ],
          h = [
          ],
          d = [
          ],
          p = e.bind(d, d.push),
          $ = e.copy;
          return c.when = function (t, e, r, i) {
            var u = new s(t, e, r, i),
            c = {
              respond: function (t, e, r, i) {
                return u.passThrough = n,
                u.response = a(t, e, r, i),
                c
              }
            };
            return o && (c.passThrough = function () {
              return u.response = n,
              u.passThrough = !0,
              c
            }),
            f.push(u),
            c
          },
          l('when'),
          c.expect = function (t, e, n, r) {
            var i = new s(t, e, n, r),
            o = {
              respond: function (t, e, n, r) {
                return i.response = a(t, e, n, r),
                o
              }
            };
            return h.push(i),
            o
          },
          l('expect'),
          c.flush = function (n, r) {
            if (r !== !1 && t.$digest(), !d.length) throw new Error('No pending request to flush !');
            if (e.isDefined(n) && null !== n) for (; n--; ) {
              if (!d.length) throw new Error('No more pending request to flush !');
              d.shift() ()
            } else for (; d.length; ) d.shift() ();
            c.verifyNoOutstandingExpectation(r)
          },
          c.verifyNoOutstandingExpectation = function (e) {
            if (e !== !1 && t.$digest(), h.length) throw new Error('Unsatisfied requests: ' + h.join(', '))
          },
          c.verifyNoOutstandingRequest = function () {
            if (d.length) throw new Error('Unflushed requests: ' + d.length)
          },
          c.resetExpectations = function () {
            h.length = 0,
            d.length = 0
          },
          c
        }
        function s(t, n, r, i) {
          this.data = r,
          this.headers = i,
          this.match = function (n, r, i, o) {
            return t != n ? !1 : this.matchUrl(r) ? e.isDefined(i) && !this.matchData(i) ? !1 : e.isDefined(o) && !this.matchHeaders(o) ? !1 : !0 : !1
          },
          this.matchUrl = function (t) {
            return n ? e.isFunction(n.test) ? n.test(t)  : e.isFunction(n) ? n(t)  : n == t : !0
          },
          this.matchHeaders = function (t) {
            return e.isUndefined(i) ? !0 : e.isFunction(i) ? i(t)  : e.equals(i, t)
          },
          this.matchData = function (t) {
            return e.isUndefined(r) ? !0 : r && e.isFunction(r.test) ? r.test(t)  : r && e.isFunction(r) ? r(t)  : r && !e.isString(r) ? e.equals(e.fromJson(e.toJson(r)), e.fromJson(t))  : r == t
          },
          this.toString = function () {
            return t + ' ' + n
          }
        }
        function u() {
          u.$$lastInstance = this,
          this.open = function (t, e, n) {
            this.$$method = t,
            this.$$url = e,
            this.$$async = n,
            this.$$reqHeaders = {
            },
            this.$$respHeaders = {
            }
          },
          this.send = function (t) {
            this.$$data = t
          },
          this.setRequestHeader = function (t, e) {
            this.$$reqHeaders[t] = e
          },
          this.getResponseHeader = function (t) {
            var r = this.$$respHeaders[t];
            return r ? r : (t = e.lowercase(t), (r = this.$$respHeaders[t]) ? r : (r = n, e.forEach(this.$$respHeaders, function (n, i) {
              r || e.lowercase(i) != t || (r = n)
            }), r))
          },
          this.getAllResponseHeaders = function () {
            var t = [
            ];
            return e.forEach(this.$$respHeaders, function (e, n) {
              t.push(n + ': ' + e)
            }),
            t.join('\n')
          },
          this.abort = e.noop
        }
        e.mock = {
        },
        e.mock.$BrowserProvider = function () {
          this.$get = function () {
            return new e.mock.$Browser
          }
        },
        e.mock.$Browser = function () {
          var t = this;
          this.isMock = !0,
          t.$$url = 'http://server/',
          t.$$lastUrl = t.$$url,
          t.pollFns = [
          ],
          t.$$completeOutstandingRequest = e.noop,
          t.$$incOutstandingRequestCount = e.noop,
          t.onUrlChange = function (e) {
            return t.pollFns.push(function () {
              (t.$$lastUrl !== t.$$url || t.$$state !== t.$$lastState) && (t.$$lastUrl = t.$$url, t.$$lastState = t.$$state, e(t.$$url, t.$$state))
            }),
            e
          },
          t.$$checkUrlChange = e.noop,
          t.cookieHash = {
          },
          t.lastCookieHash = {
          },
          t.deferredFns = [
          ],
          t.deferredNextId = 0,
          t.defer = function (e, n) {
            return n = n || 0,
            t.deferredFns.push({
              time: t.defer.now + n,
              fn: e,
              id: t.deferredNextId
            }),
            t.deferredFns.sort(function (t, e) {
              return t.time - e.time
            }),
            t.deferredNextId++
          },
          t.defer.now = 0,
          t.defer.cancel = function (r) {
            var i;
            return e.forEach(t.deferredFns, function (t, e) {
              t.id === r && (i = e)
            }),
            i !== n ? (t.deferredFns.splice(i, 1), !0)  : !1
          },
          t.defer.flush = function (n) {
            if (e.isDefined(n)) t.defer.now += n;
             else {
              if (!t.deferredFns.length) throw new Error('No deferred tasks to be flushed');
              t.defer.now = t.deferredFns[t.deferredFns.length - 1].time
            }
            for (; t.deferredFns.length && t.deferredFns[0].time <= t.defer.now; ) t.deferredFns.shift().fn()
          },
          t.$$baseHref = '/',
          t.baseHref = function () {
            return this.$$baseHref
          }
        },
        e.mock.$Browser.prototype = {
          poll: function () {
            e.forEach(this.pollFns, function (t) {
              t()
            })
          },
          addPollFn: function (t) {
            return this.pollFns.push(t),
            t
          },
          url: function (t, n, r) {
            return e.isUndefined(r) && (r = null),
            t ? (this.$$url = t, this.$$state = e.copy(r), this)  : this.$$url
          },
          state: function () {
            return this.$$state
          },
          cookies: function (t, n) {
            return t ? void (e.isUndefined(n) ? delete this.cookieHash[t] : e.isString(n) && n.length <= 4096 && (this.cookieHash[t] = n))  : (e.equals(this.cookieHash, this.lastCookieHash) || (this.lastCookieHash = e.copy(this.cookieHash), this.cookieHash = e.copy(this.cookieHash)), this.cookieHash)
          },
          notifyWhenNoOutstandingRequests: function (t) {
            t()
          }
        },
        e.mock.$ExceptionHandlerProvider = function () {
          var t;
          this.mode = function (e) {
            switch (e) {
              case 'log':
              case 'rethrow':
                var n = [
                ];
                t = function (t) {
                  if (n.push(1 == arguments.length ? t : [
                  ].slice.call(arguments, 0)), 'rethrow' === e) throw t
                },
                t.errors = n;
                break;
              default:
                throw new Error('Unknown mode \'' + e + '\', only \'log\'/\'rethrow\' modes are allowed!')
            }
          },
          this.$get = function () {
            return t
          },
          this.mode('rethrow')
        },
        e.mock.$LogProvider = function () {
          function t(t, e, n) {
            return t.concat(Array.prototype.slice.call(e, n))
          }
          var n = !0;
          this.debugEnabled = function (t) {
            return e.isDefined(t) ? (n = t, this)  : n
          },
          this.$get = function () {
            var r = {
              log: function () {
                r.log.logs.push(t([], arguments, 0))
              },
              warn: function () {
                r.warn.logs.push(t([], arguments, 0))
              },
              info: function () {
                r.info.logs.push(t([], arguments, 0))
              },
              error: function () {
                r.error.logs.push(t([], arguments, 0))
              },
              debug: function () {
                n && r.debug.logs.push(t([], arguments, 0))
              }
            };
            return r.reset = function () {
              r.log.logs = [
              ],
              r.info.logs = [
              ],
              r.warn.logs = [
              ],
              r.error.logs = [
              ],
              r.debug.logs = [
              ]
            },
            r.assertEmpty = function () {
              var t = [
              ];
              if (e.forEach(['error',
              'warn',
              'info',
              'log',
              'debug'], function (n) {
                e.forEach(r[n].logs, function (r) {
                  e.forEach(r, function (e) {
                    t.push('MOCK $log (' + n + '): ' + String(e) + '\n' + (e.stack || ''))
                  })
                })
              }), t.length) throw t.unshift('Expected $log to be empty! Either a message was logged unexpectedly, or an expected log message was not checked and removed:'),
              t.push(''),
              new Error(t.join('\n---------\n'))
            },
            r.reset(),
            r
          }
        },
        e.mock.$IntervalProvider = function () {
          this.$get = [
            '$browser',
            '$rootScope',
            '$q',
            '$$q',
            function (t, r, i, o) {
              var a = [
              ],
              s = 0,
              u = 0,
              c = function (c, l, f, h) {
                function d() {
                  if (v.notify(p++), f > 0 && p >= f) {
                    var i;
                    v.resolve(p),
                    e.forEach(a, function (t, e) {
                      t.id === m.$$intervalId && (i = e)
                    }),
                    i !== n && a.splice(i, 1)
                  }
                  $ ? t.defer.flush()  : r.$apply()
                }
                var p = 0,
                $ = e.isDefined(h) && !h,
                v = ($ ? o : i).defer(),
                m = v.promise;
                return f = e.isDefined(f) ? f : 0,
                m.then(null, null, c),
                m.$$intervalId = s,
                a.push({
                  nextTime: u + l,
                  delay: l,
                  fn: d,
                  id: s,
                  deferred: v
                }),
                a.sort(function (t, e) {
                  return t.nextTime - e.nextTime
                }),
                s++,
                m
              };
              return c.cancel = function (t) {
                if (!t) return !1;
                var r;
                return e.forEach(a, function (e, n) {
                  e.id === t.$$intervalId && (r = n)
                }),
                r !== n ? (a[r].deferred.reject('canceled'), a.splice(r, 1), !0)  : !1
              },
              c.flush = function (t) {
                for (u += t; a.length && a[0].nextTime <= u; ) {
                  var e = a[0];
                  e.fn(),
                  e.nextTime += e.delay,
                  a.sort(function (t, e) {
                    return t.nextTime - e.nextTime
                  })
                }
                return t
              },
              c
            }
          ]
        };
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;
        if (e.mock.TzDate = function (t, n) {
          var i = new Date(0);
          if (e.isString(n)) {
            var a = n;
            if (i.origDate = r(n), n = i.origDate.getTime(), isNaN(n)) throw {
              name: 'Illegal Argument',
              message: 'Arg \'' + a + '\' passed into TzDate constructor is not a valid date string'
            }
          } else i.origDate = new Date(n);
          var s = new Date(n).getTimezoneOffset();
          i.offsetDiff = 60 * s * 1000 - 1000 * t * 60 * 60,
          i.date = new Date(n + i.offsetDiff),
          i.getTime = function () {
            return i.date.getTime() - i.offsetDiff
          },
          i.toLocaleDateString = function () {
            return i.date.toLocaleDateString()
          },
          i.getFullYear = function () {
            return i.date.getFullYear()
          },
          i.getMonth = function () {
            return i.date.getMonth()
          },
          i.getDate = function () {
            return i.date.getDate()
          },
          i.getHours = function () {
            return i.date.getHours()
          },
          i.getMinutes = function () {
            return i.date.getMinutes()
          },
          i.getSeconds = function () {
            return i.date.getSeconds()
          },
          i.getMilliseconds = function () {
            return i.date.getMilliseconds()
          },
          i.getTimezoneOffset = function () {
            return 60 * t
          },
          i.getUTCFullYear = function () {
            return i.origDate.getUTCFullYear()
          },
          i.getUTCMonth = function () {
            return i.origDate.getUTCMonth()
          },
          i.getUTCDate = function () {
            return i.origDate.getUTCDate()
          },
          i.getUTCHours = function () {
            return i.origDate.getUTCHours()
          },
          i.getUTCMinutes = function () {
            return i.origDate.getUTCMinutes()
          },
          i.getUTCSeconds = function () {
            return i.origDate.getUTCSeconds()
          },
          i.getUTCMilliseconds = function () {
            return i.origDate.getUTCMilliseconds()
          },
          i.getDay = function () {
            return i.date.getDay()
          },
          i.toISOString && (i.toISOString = function () {
            return o(i.origDate.getUTCFullYear(), 4) + '-' + o(i.origDate.getUTCMonth() + 1, 2) + '-' + o(i.origDate.getUTCDate(), 2) + 'T' + o(i.origDate.getUTCHours(), 2) + ':' + o(i.origDate.getUTCMinutes(), 2) + ':' + o(i.origDate.getUTCSeconds(), 2) + '.' + o(i.origDate.getUTCMilliseconds(), 3) + 'Z'
          });
          var u = [
            'getUTCDay',
            'getYear',
            'setDate',
            'setFullYear',
            'setHours',
            'setMilliseconds',
            'setMinutes',
            'setMonth',
            'setSeconds',
            'setTime',
            'setUTCDate',
            'setUTCFullYear',
            'setUTCHours',
            'setUTCMilliseconds',
            'setUTCMinutes',
            'setUTCMonth',
            'setUTCSeconds',
            'setYear',
            'toDateString',
            'toGMTString',
            'toJSON',
            'toLocaleFormat',
            'toLocaleString',
            'toLocaleTimeString',
            'toSource',
            'toString',
            'toTimeString',
            'toUTCString',
            'valueOf'
          ];
          return e.forEach(u, function (t) {
            i[t] = function () {
              throw new Error('Method \'' + t + '\' is not implemented in the TzDate mock')
            }
          }),
          i
        }, e.mock.TzDate.prototype = Date.prototype, e.mock.animate = e.module('ngAnimateMock', [
          'ng'
        ]).config(['$provide',
        function (t) {
          var n = [
          ];
          t.value('$$animateReflow', function (t) {
            var e = n.length;
            return n.push(t),
            function () {
              n.splice(e, 1)
            }
          }),
          t.decorator('$animate', [
            '$delegate',
            '$$asyncCallback',
            '$timeout',
            '$browser',
            function (t, r, i, o) {
              var a = {
                queue: [
                ],
                cancel: t.cancel,
                enabled: t.enabled,
                triggerCallbackEvents: function () {
                  r.flush()
                },
                triggerCallbackPromise: function () {
                  i.flush(0)
                },
                triggerCallbacks: function () {
                  this.triggerCallbackEvents(),
                  this.triggerCallbackPromise()
                },
                triggerReflow: function () {
                  e.forEach(n, function (t) {
                    t()
                  }),
                  n = [
                  ]
                }
              };
              return e.forEach(['animate',
              'enter',
              'leave',
              'move',
              'addClass',
              'removeClass',
              'setClass'], function (e) {
                a[e] = function () {
                  return a.queue.push({
                    event: e,
                    element: arguments[0],
                    options: arguments[arguments.length - 1],
                    args: arguments
                  }),
                  t[e].apply(t, arguments)
                }
              }),
              a
            }
          ])
        }
        ]), e.mock.dump = function (t) {
          function n(t) {
            var i;
            return e.isElement(t) ? (t = e.element(t), i = e.element('<div></div>'), e.forEach(t, function (t) {
              i.append(e.element(t).clone())
            }), i = i.html())  : e.isArray(t) ? (i = [
            ], e.forEach(t, function (t) {
              i.push(n(t))
            }), i = '[ ' + i.join(', ') + ' ]')  : i = e.isObject(t) ? e.isFunction(t.$eval) && e.isFunction(t.$apply) ? r(t)  : t instanceof Error ? t.stack || '' + t.name + ': ' + t.message : e.toJson(t, !0)  : String(t),
            i
          }
          function r(t, n) {
            n = n || '  ';
            var i = [
              n + 'Scope(' + t.$id + '): {'
            ];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && !o.match(/^(\$|this)/) && i.push('  ' + o + ': ' + e.toJson(t[o]));
            for (var a = t.$$childHead; a; ) i.push(r(a, n + '  ')),
            a = a.$$nextSibling;
            return i.push('}'),
            i.join('\n' + n)
          }
          return n(t)
        }, e.mock.$HttpBackendProvider = function () {
          this.$get = [
            '$rootScope',
            '$timeout',
            a
          ]
        }, e.mock.$TimeoutDecorator = [
          '$delegate',
          '$browser',
          function (t, n) {
            function r(t) {
              var n = [
              ];
              return e.forEach(t, function (t) {
                n.push('{id: ' + t.id + ', time: ' + t.time + '}')
              }),
              n.join(', ')
            }
            return t.flush = function (t) {
              n.defer.flush(t)
            },
            t.verifyNoPendingTasks = function () {
              if (n.deferredFns.length) throw new Error('Deferred tasks to flush (' + n.deferredFns.length + '): ' + r(n.deferredFns))
            },
            t
          }
        ], e.mock.$RAFDecorator = [
          '$delegate',
          function (t) {
            var e = [
            ],
            n = function (t) {
              var n = e.length;
              return e.push(t),
              function () {
                e.splice(n, 1)
              }
            };
            return n.supported = t.supported,
            n.flush = function () {
              if (0 === e.length) throw new Error('No rAF callbacks present');
              for (var t = e.length, n = 0; t > n; n++) e[n]();
              e = [
              ]
            },
            n
          }
        ], e.mock.$AsyncCallbackDecorator = [
          '$delegate',
          function (t) {
            var n = [
            ],
            r = function (t) {
              n.push(t)
            };
            return r.flush = function () {
              e.forEach(n, function (t) {
                t()
              }),
              n = [
              ]
            },
            r
          }
        ], e.mock.$RootElementProvider = function () {
          this.$get = function () {
            return e.element('<div ng-app></div>')
          }
        }, e.mock.$ControllerDecorator = [
          '$delegate',
          function (t) {
            return function (n, r, i, o) {
              if (i && 'object' == typeof i) {
                var a = t(n, r, !0, o);
                return e.extend(a.instance, i),
                a()
              }
              return t(n, r, i, o)
            }
          }
        ], e.module('ngMock', [
          'ng'
        ]).provider({
          $browser: e.mock.$BrowserProvider,
          $exceptionHandler: e.mock.$ExceptionHandlerProvider,
          $log: e.mock.$LogProvider,
          $interval: e.mock.$IntervalProvider,
          $httpBackend: e.mock.$HttpBackendProvider,
          $rootElement: e.mock.$RootElementProvider
        }).config(['$provide',
        function (t) {
          t.decorator('$timeout', e.mock.$TimeoutDecorator),
          t.decorator('$$rAF', e.mock.$RAFDecorator),
          t.decorator('$$asyncCallback', e.mock.$AsyncCallbackDecorator),
          t.decorator('$rootScope', e.mock.$RootScopeDecorator),
          t.decorator('$controller', e.mock.$ControllerDecorator)
        }
        ]), e.module('ngMockE2E', [
          'ng'
        ]).config(['$provide',
        function (t) {
          t.decorator('$httpBackend', e.mock.e2e.$httpBackendDecorator)
        }
        ]), e.mock.e2e = {
        }, e.mock.e2e.$httpBackendDecorator = [
          '$rootScope',
          '$timeout',
          '$delegate',
          '$browser',
          a
        ], e.mock.$RootScopeDecorator = [
          '$delegate',
          function (t) {
            function e() {
              for (var t, e = 0, n = [
                this.$$childHead
              ]; n.length; ) for (t = n.shift(); t; ) e += 1,
              n.push(t.$$childHead),
              t = t.$$nextSibling;
              return e
            }
            function n() {
              for (var t, e = this.$$watchers ? this.$$watchers.length : 0, n = [
                this.$$childHead
              ]; n.length; ) for (t = n.shift(); t; ) e += t.$$watchers ? t.$$watchers.length : 0,
              n.push(t.$$childHead),
              t = t.$$nextSibling;
              return e
            }
            var r = Object.getPrototypeOf(t);
            return r.$countChildScopes = e,
            r.$countWatchers = n,
            t
          }
        ], t.jasmine || t.mocha) {
          var l = null,
          f = [
          ],
          h = function () {
            return !!l
          };
          e.mock.$$annotate = e.injector.$$annotate,
          e.injector.$$annotate = function (t) {
            return 'function' != typeof t || t.$inject || f.push(t),
            e.mock.$$annotate.apply(this, arguments)
          },
          (t.beforeEach || t.setup) (function () {
            f = [
            ],
            l = this
          }),
          (t.afterEach || t.teardown) (function () {
            var t = l.$injector;
            f.forEach(function (t) {
              delete t.$inject
            }),
            e.forEach(l.$modules, function (t) {
              t && t.$$hashKey && (t.$$hashKey = n)
            }),
            l.$injector = null,
            l.$modules = null,
            l = null,
            t && (t.get('$rootElement').off(), t.get('$browser').pollFns.length = 0),
            e.forEach(e.element.fragments, function (t, n) {
              delete e.element.fragments[n]
            }),
            u.$$lastInstance = null,
            e.forEach(e.callbacks, function (t, n) {
              delete e.callbacks[n]
            }),
            e.callbacks.counter = 0
          }),
          t.module = e.mock.module = function () {
            function t() {
              if (l.$injector) throw new Error('Injector already created, can not register a module!');
              var t = l.$modules || (l.$modules = [
              ]);
              e.forEach(n, function (n) {
                t.push(e.isObject(n) && !e.isArray(n) ? function (t) {
                  e.forEach(n, function (e, n) {
                    t.value(n, e)
                  })
                }
                 : n)
              })
            }
            var n = Array.prototype.slice.call(arguments, 0);
            return h() ? t()  : t
          };
          var d = function (t, e) {
            this.message = t.message,
            this.name = t.name,
            t.line && (this.line = t.line),
            t.sourceId && (this.sourceId = t.sourceId),
            t.stack && e && (this.stack = t.stack + '\n' + e.stack),
            t.stackArray && (this.stackArray = t.stackArray)
          };
          d.prototype.toString = Error.prototype.toString,
          t.inject = e.mock.inject = function () {
            function t() {
              var t = l.$modules || [
              ],
              i = !!l.$injectorStrict;
              t.unshift('ngMock'),
              t.unshift('ng');
              var o = l.$injector;
              o || (i && e.forEach(t, function (t) {
                'function' == typeof t && e.injector.$$annotate(t)
              }), o = l.$injector = e.injector(t, i), l.$injectorStrict = i);
              for (var a = 0, s = n.length; s > a; a++) {
                l.$injectorStrict && o.annotate(n[a]);
                try {
                  o.invoke(n[a] || e.noop, this)
                } catch (u) {
                  if (u.stack && r) throw new d(u, r);
                  throw u
                } finally {
                  r = null
                }
              }
            }
            var n = Array.prototype.slice.call(arguments, 0),
            r = new Error('Declaration Location');
            return h() ? t.call(l)  : t
          },
          e.mock.inject.strictDi = function (t) {
            function e() {
              if (t !== l.$injectorStrict) {
                if (l.$injector) throw new Error('Injector already created, can not modify strict annotations');
                l.$injectorStrict = t
              }
            }
            return t = arguments.length ? !!t : !0,
            h() ? e()  : e
          }
        }
      }(window, window.angular),
      'undefined' != typeof module && 'undefined' != typeof exports && module.exports === exports && (module.exports = 'ui.router'),
      function (t, e, n) {
        'use strict';
        function r(t, e) {
          return U(new (U(function () {
          }, {
            prototype: t
          })), e)
        }
        function i(t) {
          return V(arguments, function (e) {
            e !== t && V(e, function (e, n) {
              t.hasOwnProperty(n) || (t[n] = e)
            })
          }),
          t
        }
        function o(t, e) {
          var n = [
          ];
          for (var r in t.path) {
            if (t.path[r] !== e.path[r]) break;
            n.push(t.path[r])
          }
          return n
        }
        function a(t) {
          if (Object.keys) return Object.keys(t);
          var e = [
          ];
          return V(t, function (t, n) {
            e.push(n)
          }),
          e
        }
        function s(t, e) {
          if (Array.prototype.indexOf) return t.indexOf(e, Number(arguments[2]) || 0);
          var n = t.length >>> 0,
          r = Number(arguments[2]) || 0;
          for (r = 0 > r ? Math.ceil(r)  : Math.floor(r), 0 > r && (r += n); n > r; r++) if (r in t && t[r] === e) return r;
          return - 1
        }
        function u(t, e, n, r) {
          var i,
          u = o(n, r),
          c = {
          },
          l = [
          ];
          for (var f in u) if (u[f].params && (i = a(u[f].params), i.length)) for (var h in i) s(l, i[h]) >= 0 || (l.push(i[h]), c[i[h]] = t[i[h]]);
          return U({
          }, c, e)
        }
        function c(t, e, n) {
          if (!n) {
            n = [
            ];
            for (var r in t) n.push(r)
          }
          for (var i = 0; i < n.length; i++) {
            var o = n[i];
            if (t[o] != e[o]) return !1
          }
          return !0
        }
        function l(t, e) {
          var n = {
          };
          return V(t, function (t) {
            n[t] = e[t]
          }),
          n
        }
        function f(t) {
          var e = {
          },
          n = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
          for (var r in t) - 1 == s(n, r) && (e[r] = t[r]);
          return e
        }
        function h(t, e) {
          var n = R(t),
          r = n ? [
          ] : {
          };
          return V(t, function (t, i) {
            e(t, i) && (r[n ? r.length : i] = t)
          }),
          r
        }
        function d(t, e) {
          var n = R(t) ? [
          ] : {
          };
          return V(t, function (t, r) {
            n[r] = e(t, r)
          }),
          n
        }
        function p(t, e) {
          var r = 1,
          o = 2,
          u = {
          },
          c = [
          ],
          l = u,
          h = U(t.when(u), {
            $$promises: u,
            $$values: u
          });
          this.study = function (u) {
            function d(t, n) {
              if (g[n] !== o) {
                if (m.push(n), g[n] === r) throw m.splice(0, s(m, n)),
                new Error('Cyclic dependency: ' + m.join(' -> '));
                if (g[n] = r, N(t)) v.push(n, [
                  function () {
                    return e.get(t)
                  }
                ], c);
                 else {
                  var i = e.annotate(t);
                  V(i, function (t) {
                    t !== n && u.hasOwnProperty(t) && d(u[t], t)
                  }),
                  v.push(n, t, i)
                }
                m.pop(),
                g[n] = o
              }
            }
            function p(t) {
              return I(t) && t.then && t.$$promises
            }
            if (!I(u)) throw new Error('\'invocables\' must be an object');
            var $ = a(u || {
            }),
            v = [
            ],
            m = [
            ],
            g = {
            };
            return V(u, d),
            u = m = g = null,
            function (r, o, a) {
              function s() {
                --w || (b || i(y, o.$$values), m.$$values = y, m.$$promises = m.$$promises || !0, delete m.$$inheritedValues, d.resolve(y))
              }
              function u(t) {
                m.$$failure = t,
                d.reject(t)
              }
              function c(n, i, o) {
                function c(t) {
                  f.reject(t),
                  u(t)
                }
                function l() {
                  if (!j(m.$$failure)) try {
                    f.resolve(e.invoke(i, a, y)),
                    f.promise.then(function (t) {
                      y[n] = t,
                      s()
                    }, c)
                  } catch (t) {
                    c(t)
                  }
                }
                var f = t.defer(),
                h = 0;
                V(o, function (t) {
                  g.hasOwnProperty(t) && !r.hasOwnProperty(t) && (h++, g[t].then(function (e) {
                    y[t] = e,
                    --h || l()
                  }, c))
                }),
                h || l(),
                g[n] = f.promise
              }
              if (p(r) && a === n && (a = o, o = r, r = null), r) {
                if (!I(r)) throw new Error('\'locals\' must be an object')
              } else r = l;
              if (o) {
                if (!p(o)) throw new Error('\'parent\' must be a promise returned by $resolve.resolve()')
              } else o = h;
              var d = t.defer(),
              m = d.promise,
              g = m.$$promises = {
              },
              y = U({
              }, r),
              w = 1 + v.length / 3,
              b = !1;
              if (j(o.$$failure)) return u(o.$$failure),
              m;
              o.$$inheritedValues && i(y, f(o.$$inheritedValues, $)),
              U(g, o.$$promises),
              o.$$values ? (b = i(y, f(o.$$values, $)), m.$$inheritedValues = f(o.$$values, $), s())  : (o.$$inheritedValues && (m.$$inheritedValues = f(o.$$inheritedValues, $)), o.then(s, u));
              for (var x = 0, C = v.length; C > x; x += 3) r.hasOwnProperty(v[x]) ? s()  : c(v[x], v[x + 1], v[x + 2]);
              return m
            }
          },
          this.resolve = function (t, e, n, r) {
            return this.study(t) (e, n, r)
          }
        }
        function $(t, e, n) {
          this.fromConfig = function (t, e, n) {
            return j(t.template) ? this.fromString(t.template, e)  : j(t.templateUrl) ? this.fromUrl(t.templateUrl, e)  : j(t.templateProvider) ? this.fromProvider(t.templateProvider, e, n)  : null
          },
          this.fromString = function (t, e) {
            return P(t) ? t(e)  : t
          },
          this.fromUrl = function (n, r) {
            return P(n) && (n = n(r)),
            null == n ? null : t.get(n, {
              cache: e,
              headers: {
                Accept: 'text/html'
              }
            }).then(function (t) {
              return t.data
            })
          },
          this.fromProvider = function (t, e, r) {
            return n.invoke(t, null, r || {
              params: e
            })
          }
        }
        function v(t, e, i) {
          function o(e, n, r, i) {
            if (v.push(e), p[e]) return p[e];
            if (!/^\w+(-+\w+)*(?:\[\])?$/.test(e)) throw new Error('Invalid parameter name \'' + e + '\' in pattern \'' + t + '\'');
            if ($[e]) throw new Error('Duplicate parameter name \'' + e + '\' in pattern \'' + t + '\'');
            return $[e] = new F.Param(e, n, r, i),
            $[e]
          }
          function a(t, e, n, r) {
            var i = [
              '',
              ''
            ],
            o = t.replace(/[\\\[\]\^$*+?.()|{}]/g, '\\$&');
            if (!e) return o;
            switch (n) {
              case !1:
                i = [
                  '(',
                  ')' + (r ? '?' : '')
                ];
                break;
              case !0:
                i = [
                  '?(',
                  ')?'
                ];
                break;
              default:
                i = [
                  '(' + n + '|',
                  ')?'
                ]
            }
            return o + i[0] + e + i[1]
          }
          function s(i, o) {
            var a,
            s,
            u,
            c,
            l;
            return a = i[2] || i[3],
            l = e.params[a],
            u = t.substring(h, i.index),
            s = o ? i[4] : i[4] || ('*' == i[1] ? '.*' : null),
            c = F.type(s || 'string') || r(F.type('string'), {
              pattern: new RegExp(s, e.caseInsensitive ? 'i' : n)
            }),
            {
              id: a,
              regexp: s,
              segment: u,
              type: c,
              cfg: l
            }
          }
          e = U({
            params: {
            }
          }, I(e) ? e : {
          });
          var u,
          c = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
          l = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
          f = '^',
          h = 0,
          d = this.segments = [
          ],
          p = i ? i.params : {
          },
          $ = this.params = i ? i.params.$$new()  : new F.ParamSet,
          v = [
          ];
          this.source = t;
          for (var m, g, y; (u = c.exec(t)) && (m = s(u, !1), !(m.segment.indexOf('?') >= 0)); ) g = o(m.id, m.type, m.cfg, 'path'),
          f += a(m.segment, g.type.pattern.source, g.squash, g.isOptional),
          d.push(m.segment),
          h = c.lastIndex;
          y = t.substring(h);
          var w = y.indexOf('?');
          if (w >= 0) {
            var b = this.sourceSearch = y.substring(w);
            if (y = y.substring(0, w), this.sourcePath = t.substring(0, h + w), b.length > 0) for (h = 0; u = l.exec(b); ) m = s(u, !0),
            g = o(m.id, m.type, m.cfg, 'search'),
            h = c.lastIndex
          } else this.sourcePath = t,
          this.sourceSearch = '';
          f += a(y) + (e.strict === !1 ? '/?' : '') + '$',
          d.push(y),
          this.regexp = new RegExp(f, e.caseInsensitive ? 'i' : n),
          this.prefix = d[0],
          this.$$paramNames = v
        }
        function m(t) {
          U(this, t)
        }
        function g() {
          function t(t) {
            return null != t ? t.toString().replace(/\//g, '%2F')  : t
          }
          function i(t) {
            return null != t ? t.toString().replace(/%2F/g, '/')  : t
          }
          function o() {
            return {
              strict: $,
              caseInsensitive: p
            }
          }
          function u(t) {
            return P(t) || R(t) && P(t[t.length - 1])
          }
          function c() {
            for (; x.length; ) {
              var t = x.shift();
              if (t.pattern) throw new Error('You cannot override a type\'s .pattern at runtime.');
              e.extend(w[t.name], f.invoke(t.def))
            }
          }
          function l(t) {
            U(this, t || {
            })
          }
          F = this;
          var f,
          p = !1,
          $ = !0,
          y = !1,
          w = {
          },
          b = !0,
          x = [
          ],
          C = {
            string: {
              encode: t,
              decode: i,
              is: function (t) {
                return 'string' == typeof t
              },
              pattern: /[^/]*/
            },
            'int': {
              encode: t,
              decode: function (t) {
                return parseInt(t, 10)
              },
              is: function (t) {
                return j(t) && this.decode(t.toString()) === t
              },
              pattern: /\d+/
            },
            bool: {
              encode: function (t) {
                return t ? 1 : 0
              },
              decode: function (t) {
                return 0 !== parseInt(t, 10)
              },
              is: function (t) {
                return t === !0 || t === !1
              },
              pattern: /0|1/
            },
            date: {
              encode: function (t) {
                return this.is(t) ? [
                  t.getFullYear(),
                  ('0' + (t.getMonth() + 1)).slice( - 2),
                  ('0' + t.getDate()).slice( - 2)
                ].join('-')  : n
              },
              decode: function (t) {
                if (this.is(t)) return t;
                var e = this.capture.exec(t);
                return e ? new Date(e[1], e[2] - 1, e[3])  : n
              },
              is: function (t) {
                return t instanceof Date && !isNaN(t.valueOf())
              },
              equals: function (t, e) {
                return this.is(t) && this.is(e) && t.toISOString() === e.toISOString()
              },
              pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
              capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
            },
            json: {
              encode: e.toJson,
              decode: e.fromJson,
              is: e.isObject,
              equals: e.equals,
              pattern: /[^/]*/
            },
            any: {
              encode: e.identity,
              decode: e.identity,
              is: e.identity,
              equals: e.equals,
              pattern: /.*/
            }
          };
          g.$$getDefaultValue = function (t) {
            if (!u(t.value)) return t.value;
            if (!f) throw new Error('Injectable functions cannot be called at configuration time');
            return f.invoke(t.value)
          },
          this.caseInsensitive = function (t) {
            return j(t) && (p = t),
            p
          },
          this.strictMode = function (t) {
            return j(t) && ($ = t),
            $
          },
          this.defaultSquashPolicy = function (t) {
            if (!j(t)) return y;
            if (t !== !0 && t !== !1 && !N(t)) throw new Error('Invalid squash policy: ' + t + '. Valid policies: false, true, arbitrary-string');
            return y = t,
            t
          },
          this.compile = function (t, e) {
            return new v(t, U(o(), e))
          },
          this.isMatcher = function (t) {
            if (!I(t)) return !1;
            var e = !0;
            return V(v.prototype, function (n, r) {
              P(n) && (e = e && j(t[r]) && P(t[r]))
            }),
            e
          },
          this.type = function (t, e, n) {
            if (!j(e)) return w[t];
            if (w.hasOwnProperty(t)) throw new Error('A type named \'' + t + '\' has already been defined.');
            return w[t] = new m(U({
              name: t
            }, e)),
            n && (x.push({
              name: t,
              def: n
            }), b || c()),
            this
          },
          V(C, function (t, e) {
            w[e] = new m(U({
              name: e
            }, t))
          }),
          w = r(w, {
          }),
          this.$get = [
            '$injector',
            function (t) {
              return f = t,
              b = !1,
              c(),
              V(C, function (t, e) {
                w[e] || (w[e] = new m(t))
              }),
              this
            }
          ],
          this.Param = function (t, e, r, i) {
            function o(t) {
              var e = I(t) ? a(t)  : [
              ],
              n = - 1 === s(e, 'value') && - 1 === s(e, 'type') && - 1 === s(e, 'squash') && - 1 === s(e, 'array');
              return n && (t = {
                value: t
              }),
              t.$$fn = u(t.value) ? t.value : function () {
                return t.value
              },
              t
            }
            function c(e, n, r) {
              if (e.type && n) throw new Error('Param \'' + t + '\' has two type configurations.');
              return n ? n : e.type ? e.type instanceof m ? e.type : new m(e.type)  : 'config' === r ? w.any : w.string
            }
            function l() {
              var e = {
                array: 'search' === i ? 'auto' : !1
              },
              n = t.match(/\[\]$/) ? {
                array: !0
              }
               : {
              };
              return U(e, n, r).array
            }
            function p(t, e) {
              var n = t.squash;
              if (!e || n === !1) return !1;
              if (!j(n) || null == n) return y;
              if (n === !0 || N(n)) return n;
              throw new Error('Invalid squash policy: \'' + n + '\'. Valid policies: false, true, or arbitrary string')
            }
            function $(t, e, r, i) {
              var o,
              a,
              u = [
                {
                  from: '',
                  to: r || e ? n : ''
                },
                {
                  from: null,
                  to: r || e ? n : ''
                }
              ];
              return o = R(t.replace) ? t.replace : [
              ],
              N(i) && o.push({
                from: i,
                to: n
              }),
              a = d(o, function (t) {
                return t.from
              }),
              h(u, function (t) {
                return - 1 === s(a, t.from)
              }).concat(o)
            }
            function v() {
              if (!f) throw new Error('Injectable functions cannot be called at configuration time');
              var t = f.invoke(r.$$fn);
              if (null !== t && t !== n && !x.type.is(t)) throw new Error('Default value (' + t + ') for parameter \'' + x.id + '\' is not an instance of Type (' + x.type.name + ')');
              return t
            }
            function g(t) {
              function e(t) {
                return function (e) {
                  return e.from === t
                }
              }
              function n(t) {
                var n = d(h(x.replace, e(t)), function (t) {
                  return t.to
                });
                return n.length ? n[0] : t
              }
              return t = n(t),
              j(t) ? x.type.$normalize(t)  : v()
            }
            function b() {
              return '{Param:' + t + ' ' + e + ' squash: \'' + E + '\' optional: ' + S + '}'
            }
            var x = this;
            r = o(r),
            e = c(r, e, i);
            var C = l();
            e = C ? e.$asArray(C, 'search' === i)  : e,
            'string' !== e.name || C || 'path' !== i || r.value !== n || (r.value = '');
            var S = r.value !== n,
            E = p(r, S),
            k = $(r, C, S, E);
            U(this, {
              id: t,
              type: e,
              location: i,
              array: C,
              squash: E,
              replace: k,
              isOptional: S,
              value: g,
              dynamic: n,
              config: r,
              toString: b
            })
          },
          l.prototype = {
            $$new: function () {
              return r(this, U(new l, {
                $$parent: this
              }))
            },
            $$keys: function () {
              for (var t = [
              ], e = [
              ], n = this, r = a(l.prototype); n; ) e.push(n),
              n = n.$$parent;
              return e.reverse(),
              V(e, function (e) {
                V(a(e), function (e) {
                  - 1 === s(t, e) && - 1 === s(r, e) && t.push(e)
                })
              }),
              t
            },
            $$values: function (t) {
              var e = {
              },
              n = this;
              return V(n.$$keys(), function (r) {
                e[r] = n[r].value(t && t[r])
              }),
              e
            },
            $$equals: function (t, e) {
              var n = !0,
              r = this;
              return V(r.$$keys(), function (i) {
                var o = t && t[i],
                a = e && e[i];
                r[i].type.equals(o, a) || (n = !1)
              }),
              n
            },
            $$validates: function (t) {
              var r,
              i,
              o,
              a,
              s,
              u = this.$$keys();
              for (r = 0; r < u.length && (i = this[u[r]], o = t[u[r]], o !== n && null !== o || !i.isOptional); r++) {
                if (a = i.type.$normalize(o), !i.type.is(a)) return !1;
                if (s = i.type.encode(a), e.isString(s) && !i.type.pattern.exec(s)) return !1
              }
              return !0
            },
            $$parent: n
          },
          this.ParamSet = l
        }
        function y(t, r) {
          function i(t) {
            var e = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(t.source);
            return null != e ? e[1].replace(/\\(.)/g, '$1')  : ''
          }
          function o(t, e) {
            return t.replace(/\$(\$|\d{1,2})/, function (t, n) {
              return e['$' === n ? 0 : Number(n)]
            })
          }
          function a(t, e, n) {
            if (!n) return !1;
            var r = t.invoke(e, e, {
              $match: n
            });
            return j(r) ? r : !0
          }
          function s(r, i, o, a) {
            function s(t, e, n) {
              return '/' === $ ? t : e ? $.slice(0, - 1) + t : n ? $.slice(1) + t : t
            }
            function h(t) {
              function e(t) {
                var e = t(o, r);
                return e ? (N(e) && r.replace().url(e), !0)  : !1
              }
              if (!t || !t.defaultPrevented) {
                var i = p && r.url() === p;
                if (p = n, i) return !0;
                var a,
                s = c.length;
                for (a = 0; s > a; a++) if (e(c[a])) return;
                l && e(l)
              }
            }
            function d() {
              return u = u || i.$on('$locationChangeSuccess', h)
            }
            var p,
            $ = a.baseHref(),
            v = r.url();
            return f || d(),
            {
              sync: function () {
                h()
              },
              listen: function () {
                return d()
              },
              update: function (t) {
                return t ? void (v = r.url())  : void (r.url() !== v && (r.url(v), r.replace()))
              },
              push: function (t, e, i) {
                var o = t.format(e || {
                });
                null !== o && e && e['#'] && (o += '#' + e['#']),
                r.url(o),
                p = i && i.$$avoidResync ? r.url()  : n,
                i && i.replace && r.replace()
              },
              href: function (n, i, o) {
                if (!n.validates(i)) return null;
                var a = t.html5Mode();
                e.isObject(a) && (a = a.enabled);
                var u = n.format(i);
                if (o = o || {
                }, a || null === u || (u = '#' + t.hashPrefix() + u), null !== u && i && i['#'] && (u += '#' + i['#']), u = s(u, a, o.absolute), !o.absolute || !u) return u;
                var c = !a && u ? '/' : '',
                l = r.port();
                return l = 80 === l || 443 === l ? '' : ':' + l,
                [
                  r.protocol(),
                  '://',
                  r.host(),
                  l,
                  c,
                  u
                ].join('')
              }
            }
          }
          var u,
          c = [
          ],
          l = null,
          f = !1;
          this.rule = function (t) {
            if (!P(t)) throw new Error('\'rule\' must be a function');
            return c.push(t),
            this
          },
          this.otherwise = function (t) {
            if (N(t)) {
              var e = t;
              t = function () {
                return e
              }
            } else if (!P(t)) throw new Error('\'rule\' must be a function');
            return l = t,
            this
          },
          this.when = function (t, e) {
            var n,
            s = N(e);
            if (N(t) && (t = r.compile(t)), !s && !P(e) && !R(e)) throw new Error('invalid \'handler\' in when()');
            var u = {
              matcher: function (t, e) {
                return s && (n = r.compile(e), e = [
                  '$match',
                  function (t) {
                    return n.format(t)
                  }
                ]),
                U(function (n, r) {
                  return a(n, e, t.exec(r.path(), r.search()))
                }, {
                  prefix: N(t.prefix) ? t.prefix : ''
                })
              },
              regex: function (t, e) {
                if (t.global || t.sticky) throw new Error('when() RegExp must not be global or sticky');
                return s && (n = e, e = [
                  '$match',
                  function (t) {
                    return o(n, t)
                  }
                ]),
                U(function (n, r) {
                  return a(n, e, t.exec(r.path()))
                }, {
                  prefix: i(t)
                })
              }
            },
            c = {
              matcher: r.isMatcher(t),
              regex: t instanceof RegExp
            };
            for (var l in c) if (c[l]) return this.rule(u[l](t, e));
            throw new Error('invalid \'what\' in when()')
          },
          this.deferIntercept = function (t) {
            t === n && (t = !0),
            f = t
          },
          this.$get = s,
          s.$inject = [
            '$location',
            '$rootScope',
            '$injector',
            '$browser'
          ]
        }
        function w(t, i) {
          function o(t) {
            return 0 === t.indexOf('.') || 0 === t.indexOf('^')
          }
          function f(t, e) {
            if (!t) return n;
            var r = N(t),
            i = r ? t : t.name,
            a = o(i);
            if (a) {
              if (!e) throw new Error('No reference point given for path \'' + i + '\'');
              e = f(e);
              for (var s = i.split('.'), u = 0, c = s.length, l = e; c > u; u++) if ('' !== s[u] || 0 !== u) {
                if ('^' !== s[u]) break;
                if (!l.parent) throw new Error('Path \'' + i + '\' not valid for state \'' + e.name + '\'');
                l = l.parent
              } else l = e;
              s = s.slice(u).join('.'),
              i = l.name + (l.name && s ? '.' : '') + s
            }
            var h = S[i];
            return !h || !r && (r || h !== t && h.self !== t) ? n : h
          }
          function h(t, e) {
            E[t] || (E[t] = [
            ]),
            E[t].push(e)
          }
          function p(t) {
            for (var e = E[t] || [
            ]; e.length; ) $(e.shift())
          }
          function $(e) {
            e = r(e, {
              self: e,
              resolve: e.resolve || {
              },
              toString: function () {
                return this.name
              }
            });
            var n = e.name;
            if (!N(n) || n.indexOf('@') >= 0) throw new Error('State must have a valid name');
            if (S.hasOwnProperty(n)) throw new Error('State \'' + n + '\'\' is already defined');
            var i = - 1 !== n.indexOf('.') ? n.substring(0, n.lastIndexOf('.'))  : N(e.parent) ? e.parent : I(e.parent) && N(e.parent.name) ? e.parent.name : '';
            if (i && !S[i]) return h(i, e.self);
            for (var o in A) P(A[o]) && (e[o] = A[o](e, A.$delegates[o]));
            return S[n] = e,
            !e[k] && e.url && t.when(e.url, [
              '$match',
              '$stateParams',
              function (t, n) {
                C.$current.navigable == e && c(t, n) || C.transitionTo(e, t, {
                  inherit: !0,
                  location: !1
                })
              }
            ]),
            p(n),
            e
          }
          function v(t) {
            return t.indexOf('*') > - 1
          }
          function m(t) {
            for (var e = t.split('.'), n = C.$current.name.split('.'), r = 0, i = e.length; i > r; r++) '*' === e[r] && (n[r] = '*');
            return '**' === e[0] && (n = n.slice(s(n, e[1])), n.unshift('**')),
            '**' === e[e.length - 1] && (n.splice(s(n, e[e.length - 2]) + 1, Number.MAX_VALUE), n.push('**')),
            e.length != n.length ? !1 : n.join('') === e.join('')
          }
          function g(t, e) {
            return N(t) && !j(e) ? A[t] : P(e) && N(t) ? (A[t] && !A.$delegates[t] && (A.$delegates[t] = A[t]), A[t] = e, this)  : this
          }
          function y(t, e) {
            return I(t) ? e = t : e.name = t,
            $(e),
            this
          }
          function w(t, i, o, s, h, p, $, g, y) {
            function w(e, n, r, o) {
              var a = t.$broadcast('$stateNotFound', e, n, r);
              if (a.defaultPrevented) return $.update(),
              D;
              if (!a.retry) return null;
              if (o.$retry) return $.update(),
              O;
              var s = C.transition = i.when(a.retry);
              return s.then(function () {
                return s !== C.transition ? A : (e.options.$retry = !0, C.transitionTo(e.to, e.toParams, e.options))
              }, function () {
                return D
              }),
              $.update(),
              s
            }
            function E(t, n, r, a, u, c) {
              var f = r ? n : l(t.params.$$keys(), n),
              d = {
                $stateParams: f
              };
              u.resolve = h.resolve(t.resolve, d, u.resolve, t);
              var p = [
                u.resolve.then(function (t) {
                  u.globals = t
                })
              ];
              return a && p.push(a),
              V(t.views, function (n, r) {
                var i = n.resolve && n.resolve !== t.resolve ? n.resolve : {
                };
                i.$template = [
                  function () {
                    return o.load(r, {
                      view: n,
                      locals: d,
                      params: f,
                      notify: c.notify
                    }) || ''
                  }
                ],
                p.push(h.resolve(i, d, u.resolve, t).then(function (o) {
                  if (P(n.controllerProvider) || R(n.controllerProvider)) {
                    var a = e.extend({
                    }, i, d, o);
                    o.$$controller = s.invoke(n.controllerProvider, null, a)
                  } else o.$$controller = n.controller;
                  o.$$state = t,
                  o.$$controllerAs = n.controllerAs,
                  u[r] = o
                }))
              }),
              i.all(p).then(function (t) {
                return u
              })
            }
            var A = i.reject(new Error('transition superseded')),
            T = i.reject(new Error('transition prevented')),
            D = i.reject(new Error('transition aborted')),
            O = i.reject(new Error('transition failed'));
            return x.locals = {
              resolve: null,
              globals: {
                $stateParams: {
                }
              }
            },
            C = {
              params: {
              },
              current: x.self,
              $current: x,
              transition: null
            },
            C.reload = function (t) {
              return C.transitionTo(C.current, p, {
                reload: t || !0,
                inherit: !1,
                notify: !0
              })
            },
            C.go = function (t, e, n) {
              return C.transitionTo(t, e, U({
                inherit: !0,
                relative: C.$current
              }, n))
            },
            C.transitionTo = function (e, n, o) {
              n = n || {
              },
              o = U({
                location: !0,
                inherit: !1,
                relative: null,
                notify: !0,
                reload: !1,
                $retry: !1
              }, o || {
              });
              var a,
              c = C.$current,
              h = C.params,
              d = c.path,
              v = f(e, o.relative),
              m = n['#'];
              if (!j(v)) {
                var g = {
                  to: e,
                  toParams: n,
                  options: o
                },
                y = w(g, c.self, h, o);
                if (y) return y;
                if (e = g.to, n = g.toParams, o = g.options, v = f(e, o.relative), !j(v)) {
                  if (!o.relative) throw new Error('No such state \'' + e + '\'');
                  throw new Error('Could not resolve \'' + e + '\' from state \'' + o.relative + '\'')
                }
              }
              if (v[k]) throw new Error('Cannot transition to abstract state \'' + e + '\'');
              if (o.inherit && (n = u(p, n || {
              }, C.$current, v)), !v.params.$$validates(n)) return O;
              n = v.params.$$values(n),
              e = v;
              var S = e.path,
              D = 0,
              M = S[D],
              P = x.locals,
              R = [
              ],
              V = !1;
              if (o.reload) {
                if (N(o.reload) || I(o.reload)) {
                  if (I(o.reload) && !o.reload.name) throw new Error('Invalid reload state object');
                  var F = o.reload === !0 ? d[0] : f(o.reload);
                  if (o.reload && !F) throw new Error('No such reload state \'' + (N(o.reload) ? o.reload : o.reload.name) + '\'');
                  for (V = !0; M && M === d[D] && M !== F; ) P = R[D] = M.locals,
                  D++,
                  M = S[D]
                }
              } else for (; M && M === d[D] && M.ownParams.$$equals(n, h); ) P = R[D] = M.locals,
              D++,
              M = S[D];
              if (!V && b(e, c, P, o)) return e.self.reloadOnSearch !== !1 && $.update(),
              C.transition = null,
              i.when(C.current);
              if (n = l(e.params.$$keys(), n || {
              }), o.notify && t.$broadcast('$stateChangeStart', e.self, n, c.self, h).defaultPrevented) return t.$broadcast('$stateChangeCancel', e.self, n, c.self, h),
              $.update(),
              T;
              for (var H = i.when(P), _ = D; _ < S.length; _++, M = S[_]) P = R[_] = r(P),
              H = E(M, n, M === e, H, P, o);
              var B = C.transition = H.then(function () {
                var r,
                i,
                a;
                if (C.transition !== B) return A;
                for (r = d.length - 1; r >= D; r--) a = d[r],
                a.self.onExit && s.invoke(a.self.onExit, a.self, a.locals.globals),
                a.locals = null;
                for (r = D; r < S.length; r++) i = S[r],
                i.locals = R[r],
                i.self.onEnter && s.invoke(i.self.onEnter, i.self, i.locals.globals);
                return m && (n['#'] = m),
                C.transition !== B ? A : (C.$current = e, C.current = e.self, C.params = n, q(C.params, p), C.transition = null, o.location && e.navigable && $.push(e.navigable.url, e.navigable.locals.globals.$stateParams, {
                  $$avoidResync: !0,
                  replace: 'replace' === o.location
                }), o.notify && t.$broadcast('$stateChangeSuccess', e.self, n, c.self, h), $.update(!0), C.current)
              }, function (r) {
                return C.transition !== B ? A : (C.transition = null, a = t.$broadcast('$stateChangeError', e.self, n, c.self, h, r), a.defaultPrevented || $.update(), i.reject(r))
              });
              return B
            },
            C.is = function (t, e, r) {
              r = U({
                relative: C.$current
              }, r || {
              });
              var i = f(t, r.relative);
              return j(i) ? C.$current !== i ? !1 : e ? c(i.params.$$values(e), p)  : !0 : n
            },
            C.includes = function (t, e, r) {
              if (r = U({
                relative: C.$current
              }, r || {
              }), N(t) && v(t)) {
                if (!m(t)) return !1;
                t = C.$current.name
              }
              var i = f(t, r.relative);
              return j(i) ? j(C.$current.includes[i.name]) ? e ? c(i.params.$$values(e), p, a(e))  : !0 : !1 : n
            },
            C.href = function (t, e, r) {
              r = U({
                lossy: !0,
                inherit: !0,
                absolute: !1,
                relative: C.$current
              }, r || {
              });
              var i = f(t, r.relative);
              if (!j(i)) return null;
              r.inherit && (e = u(p, e || {
              }, C.$current, i));
              var o = i && r.lossy ? i.navigable : i;
              return o && o.url !== n && null !== o.url ? $.href(o.url, l(i.params.$$keys().concat('#'), e || {
              }), {
                absolute: r.absolute
              })  : null
            },
            C.get = function (t, e) {
              if (0 === arguments.length) return d(a(S), function (t) {
                return S[t].self
              });
              var n = f(t, e || C.$current);
              return n && n.self ? n.self : null
            },
            C
          }
          function b(t, e, n, r) {
            return t !== e || (n !== e.locals || r.reload) && t.self.reloadOnSearch !== !1 ? void 0 : !0
          }
          var x,
          C,
          S = {
          },
          E = {
          },
          k = 'abstract',
          A = {
            parent: function (t) {
              if (j(t.parent) && t.parent) return f(t.parent);
              var e = /^(.+)\.[^.]+$/.exec(t.name);
              return e ? f(e[1])  : x
            },
            data: function (t) {
              return t.parent && t.parent.data && (t.data = t.self.data = U({
              }, t.parent.data, t.data)),
              t.data
            },
            url: function (t) {
              var e = t.url,
              n = {
                params: t.params || {
                }
              };
              if (N(e)) return '^' == e.charAt(0) ? i.compile(e.substring(1), n)  : (t.parent.navigable || x).url.concat(e, n);
              if (!e || i.isMatcher(e)) return e;
              throw new Error('Invalid url \'' + e + '\' in state \'' + t + '\'')
            },
            navigable: function (t) {
              return t.url ? t : t.parent ? t.parent.navigable : null
            },
            ownParams: function (t) {
              var e = t.url && t.url.params || new F.ParamSet;
              return V(t.params || {
              }, function (t, n) {
                e[n] || (e[n] = new F.Param(n, null, t, 'config'))
              }),
              e
            },
            params: function (t) {
              return t.parent && t.parent.params ? U(t.parent.params.$$new(), t.ownParams)  : new F.ParamSet
            },
            views: function (t) {
              var e = {
              };
              return V(j(t.views) ? t.views : {
                '': t
              }, function (n, r) {
                r.indexOf('@') < 0 && (r += '@' + t.parent.name),
                e[r] = n
              }),
              e
            },
            path: function (t) {
              return t.parent ? t.parent.path.concat(t)  : [
              ]
            },
            includes: function (t) {
              var e = t.parent ? U({
              }, t.parent.includes)  : {
              };
              return e[t.name] = !0,
              e
            },
            $delegates: {
            }
          };
          x = $({
            name: '',
            url: '^',
            views: null,
            'abstract': !0
          }),
          x.navigable = null,
          this.decorator = g,
          this.state = y,
          this.$get = w,
          w.$inject = [
            '$rootScope',
            '$q',
            '$view',
            '$injector',
            '$resolve',
            '$stateParams',
            '$urlRouter',
            '$location',
            '$urlMatcherFactory'
          ]
        }
        function b() {
          function t(t, e) {
            return {
              load: function (n, r) {
                var i,
                o = {
                  template: null,
                  controller: null,
                  view: null,
                  locals: null,
                  notify: !0,
                  async: !0,
                  params: {
                  }
                };
                return r = U(o, r),
                r.view && (i = e.fromConfig(r.view, r.params, r.locals)),
                i && r.notify && t.$broadcast('$viewContentLoading', r),
                i
              }
            }
          }
          this.$get = t,
          t.$inject = [
            '$rootScope',
            '$templateFactory'
          ]
        }
        function x() {
          var t = !1;
          this.useAnchorScroll = function () {
            t = !0
          },
          this.$get = [
            '$anchorScroll',
            '$timeout',
            function (e, n) {
              return t ? e : function (t) {
                return n(function () {
                  t[0].scrollIntoView()
                }, 0, !1)
              }
            }
          ]
        }
        function C(t, n, r, i) {
          function o() {
            return n.has ? function (t) {
              return n.has(t) ? n.get(t)  : null
            }
             : function (t) {
              try {
                return n.get(t)
              } catch (e) {
                return null
              }
            }
          }
          function a(t, e) {
            var n = function () {
              return {
                enter: function (t, e, n) {
                  e.after(t),
                  n()
                },
                leave: function (t, e) {
                  t.remove(),
                  e()
                }
              }
            };
            if (c) return {
              enter: function (t, e, n) {
                var r = c.enter(t, null, e, n);
                r && r.then && r.then(n)
              },
              leave: function (t, e) {
                var n = c.leave(t, e);
                n && n.then && n.then(e)
              }
            };
            if (u) {
              var r = u && u(e, t);
              return {
                enter: function (t, e, n) {
                  r.enter(t, null, e),
                  n()
                },
                leave: function (t, e) {
                  r.leave(t),
                  e()
                }
              }
            }
            return n()
          }
          var s = o(),
          u = s('$animator'),
          c = s('$animate'),
          l = {
            restrict: 'ECA',
            terminal: !0,
            priority: 400,
            transclude: 'element',
            compile: function (n, o, s) {
              return function (n, o, u) {
                function c() {
                  f && (f.remove(), f = null),
                  d && (d.$destroy(), d = null),
                  h && (m.leave(h, function () {
                    f = null
                  }), f = h, h = null)
                }
                function l(a) {
                  var l,
                  f = E(n, u, o, i),
                  g = f && t.$current && t.$current.locals[f];
                  if (a || g !== p) {
                    l = n.$new(),
                    p = t.$current.locals[f];
                    var y = s(l, function (t) {
                      m.enter(t, o, function () {
                        d && d.$emit('$viewContentAnimationEnded'),
                        (e.isDefined(v) && !v || n.$eval(v)) && r(t)
                      }),
                      c()
                    });
                    h = y,
                    d = l,
                    d.$emit('$viewContentLoaded'),
                    d.$eval($)
                  }
                }
                var f,
                h,
                d,
                p,
                $ = u.onload || '',
                v = u.autoscroll,
                m = a(u, n);
                n.$on('$stateChangeSuccess', function () {
                  l(!1)
                }),
                n.$on('$viewContentLoading', function () {
                  l(!1)
                }),
                l(!0)
              }
            }
          };
          return l
        }
        function S(t, e, n, r) {
          return {
            restrict: 'ECA',
            priority: - 400,
            compile: function (i) {
              var o = i.html();
              return function (i, a, s) {
                var u = n.$current,
                c = E(i, s, a, r),
                l = u && u.locals[c];
                if (l) {
                  a.data('$uiView', {
                    name: c,
                    state: l.$$state
                  }),
                  a.html(l.$template ? l.$template : o);
                  var f = t(a.contents());
                  if (l.$$controller) {
                    l.$scope = i,
                    l.$element = a;
                    var h = e(l.$$controller, l);
                    l.$$controllerAs && (i[l.$$controllerAs] = h),
                    a.data('$ngControllerController', h),
                    a.children().data('$ngControllerController', h)
                  }
                  f(i)
                }
              }
            }
          }
        }
        function E(t, e, n, r) {
          var i = r(e.uiView || e.name || '') (t),
          o = n.inheritedData('$uiView');
          return i.indexOf('@') >= 0 ? i : i + '@' + (o ? o.state.name : '')
        }
        function k(t, e) {
          var n,
          r = t.match(/^\s*({[^}]*})\s*$/);
          if (r && (t = e + '(' + r[1] + ')'), n = t.replace(/\n/g, ' ').match(/^([^(]+?)\s*(\((.*)\))?$/), !n || 4 !== n.length) throw new Error('Invalid state ref \'' + t + '\'');
          return {
            state: n[1],
            paramExpr: n[3] || null
          }
        }
        function A(t) {
          var e = t.parent().inheritedData('$uiView');
          return e && e.state && e.state.name ? e.state : void 0
        }
        function T(t, n) {
          var r = [
            'location',
            'inherit',
            'reload',
            'absolute'
          ];
          return {
            restrict: 'A',
            require: [
              '?^uiSrefActive',
              '?^uiSrefActiveEq'
            ],
            link: function (i, o, a, s) {
              var u = k(a.uiSref, t.current.name),
              c = null,
              l = A(o) || t.$current,
              f = '[object SVGAnimatedString]' === Object.prototype.toString.call(o.prop('href')) ? 'xlink:href' : 'href',
              h = null,
              d = 'A' === o.prop('tagName').toUpperCase(),
              p = 'FORM' === o[0].nodeName,
              $ = p ? 'action' : f,
              v = !0,
              m = {
                relative: l,
                inherit: !0
              },
              g = i.$eval(a.uiSrefOpts) || {
              };
              e.forEach(r, function (t) {
                t in g && (m[t] = g[t])
              });
              var y = function (n) {
                if (n && (c = e.copy(n)), v) {
                  h = t.href(u.state, c, m);
                  var r = s[1] || s[0];
                  return r && r.$$addStateInfo(u.state, c),
                  null === h ? (v = !1, !1)  : void a.$set($, h)
                }
              };
              u.paramExpr && (i.$watch(u.paramExpr, function (t, e) {
                t !== c && y(t)
              }, !0), c = e.copy(i.$eval(u.paramExpr))),
              y(),
              p || o.bind('click', function (e) {
                var r = e.which || e.button;
                if (!(r > 1 || e.ctrlKey || e.metaKey || e.shiftKey || o.attr('target'))) {
                  var i = n(function () {
                    t.go(u.state, c, m)
                  });
                  e.preventDefault();
                  var a = d && !h ? 1 : 0;
                  e.preventDefault = function () {
                    a-- <= 0 && n.cancel(i)
                  }
                }
              })
            }
          }
        }
        function D(t, e, n) {
          return {
            restrict: 'A',
            controller: [
              '$scope',
              '$element',
              '$attrs',
              function (e, r, i) {
                function o() {
                  a() ? r.addClass(u)  : r.removeClass(u)
                }
                function a() {
                  for (var t = 0; t < c.length; t++) if (s(c[t].state, c[t].params)) return !0;
                  return !1
                }
                function s(e, n) {
                  return 'undefined' != typeof i.uiSrefActiveEq ? t.is(e.name, n)  : t.includes(e.name, n)
                }
                var u,
                c = [
                ];
                u = n(i.uiSrefActiveEq || i.uiSrefActive || '', !1) (e),
                this.$$addStateInfo = function (e, n) {
                  var i = t.get(e, A(r));
                  c.push({
                    state: i || {
                      name: e
                    },
                    params: n
                  }),
                  o()
                },
                e.$on('$stateChangeSuccess', o)
              }
            ]
          }
        }
        function O(t) {
          var e = function (e) {
            return t.is(e)
          };
          return e.$stateful = !0,
          e
        }
        function M(t) {
          var e = function (e) {
            return t.includes(e)
          };
          return e.$stateful = !0,
          e
        }
        var j = e.isDefined,
        P = e.isFunction,
        N = e.isString,
        I = e.isObject,
        R = e.isArray,
        V = e.forEach,
        U = e.extend,
        q = e.copy;
        e.module('ui.router.util', [
          'ng'
        ]),
        e.module('ui.router.router', [
          'ui.router.util'
        ]),
        e.module('ui.router.state', [
          'ui.router.router',
          'ui.router.util'
        ]),
        e.module('ui.router', [
          'ui.router.state'
        ]),
        e.module('ui.router.compat', [
          'ui.router'
        ]),
        p.$inject = [
          '$q',
          '$injector'
        ],
        e.module('ui.router.util').service('$resolve', p),
        $.$inject = [
          '$http',
          '$templateCache',
          '$injector'
        ],
        e.module('ui.router.util').service('$templateFactory', $);
        var F;
        v.prototype.concat = function (t, e) {
          var n = {
            caseInsensitive: F.caseInsensitive(),
            strict: F.strictMode(),
            squash: F.defaultSquashPolicy()
          };
          return new v(this.sourcePath + t + this.sourceSearch, U(n, e), this)
        },
        v.prototype.toString = function () {
          return this.source
        },
        v.prototype.exec = function (t, e) {
          function n(t) {
            function e(t) {
              return t.split('').reverse().join('')
            }
            function n(t) {
              return t.replace(/\\-/g, '-')
            }
            var r = e(t).split(/-(?!\\)/),
            i = d(r, e);
            return d(i, n).reverse()
          }
          var r = this.regexp.exec(t);
          if (!r) return null;
          e = e || {
          };
          var i,
          o,
          a,
          s = this.parameters(),
          u = s.length,
          c = this.segments.length - 1,
          l = {
          };
          if (c !== r.length - 1) throw new Error('Unbalanced capture group in route \'' + this.source + '\'');
          for (i = 0; c > i; i++) {
            a = s[i];
            var f = this.params[a],
            h = r[i + 1];
            for (o = 0; o < f.replace; o++) f.replace[o].from === h && (h = f.replace[o].to);
            h && f.array === !0 && (h = n(h)),
            l[a] = f.value(h)
          }
          for (; u > i; i++) a = s[i],
          l[a] = this.params[a].value(e[a]);
          return l
        },
        v.prototype.parameters = function (t) {
          return j(t) ? this.params[t] || null : this.$$paramNames
        },
        v.prototype.validates = function (t) {
          return this.params.$$validates(t)
        },
        v.prototype.format = function (t) {
          function e(t) {
            return encodeURIComponent(t).replace(/-/g, function (t) {
              return '%5C%' + t.charCodeAt(0).toString(16).toUpperCase()
            })
          }
          t = t || {
          };
          var n = this.segments,
          r = this.parameters(),
          i = this.params;
          if (!this.validates(t)) return null;
          var o,
          a = !1,
          s = n.length - 1,
          u = r.length,
          c = n[0];
          for (o = 0; u > o; o++) {
            var l = s > o,
            f = r[o],
            h = i[f],
            p = h.value(t[f]),
            $ = h.isOptional && h.type.equals(h.value(), p),
            v = $ ? h.squash : !1,
            m = h.type.encode(p);
            if (l) {
              var g = n[o + 1];
              if (v === !1) null != m && (c += R(m) ? d(m, e).join('-')  : encodeURIComponent(m)),
              c += g;
               else if (v === !0) {
                var y = c.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                c += g.match(y) [1]
              } else N(v) && (c += v + g)
            } else {
              if (null == m || $ && v !== !1) continue;
              R(m) || (m = [
                m
              ]),
              m = d(m, encodeURIComponent).join('&' + f + '='),
              c += (a ? '&' : '?') + (f + '=' + m),
              a = !0
            }
          }
          return c
        },
        m.prototype.is = function (t, e) {
          return !0
        },
        m.prototype.encode = function (t, e) {
          return t
        },
        m.prototype.decode = function (t, e) {
          return t
        },
        m.prototype.equals = function (t, e) {
          return t == e
        },
        m.prototype.$subPattern = function () {
          var t = this.pattern.toString();
          return t.substr(1, t.length - 2)
        },
        m.prototype.pattern = /.*/,
        m.prototype.toString = function () {
          return '{Type:' + this.name + '}'
        },
        m.prototype.$normalize = function (t) {
          return this.is(t) ? t : this.decode(t)
        },
        m.prototype.$asArray = function (t, e) {
          function r(t, e) {
            function r(t, e) {
              return function () {
                return t[e].apply(t, arguments)
              }
            }
            function i(t) {
              return R(t) ? t : j(t) ? [
                t
              ] : [
              ]
            }
            function o(t) {
              switch (t.length) {
                case 0:
                  return n;
                case 1:
                  return 'auto' === e ? t[0] : t;
                default:
                  return t
              }
            }
            function a(t) {
              return !t
            }
            function s(t, e) {
              return function (n) {
                n = i(n);
                var r = d(n, t);
                return e === !0 ? 0 === h(r, a).length : o(r)
              }
            }
            function u(t) {
              return function (e, n) {
                var r = i(e),
                o = i(n);
                if (r.length !== o.length) return !1;
                for (var a = 0; a < r.length; a++) if (!t(r[a], o[a])) return !1;
                return !0
              }
            }
            this.encode = s(r(t, 'encode')),
            this.decode = s(r(t, 'decode')),
            this.is = s(r(t, 'is'), !0),
            this.equals = u(r(t, 'equals')),
            this.pattern = t.pattern,
            this.$normalize = s(r(t, '$normalize')),
            this.name = t.name,
            this.$arrayMode = e
          }
          if (!t) return this;
          if ('auto' === t && !e) throw new Error('\'auto\' array mode is for query parameters only');
          return new r(this, t)
        },
        e.module('ui.router.util').provider('$urlMatcherFactory', g),
        e.module('ui.router.util').run(['$urlMatcherFactory',
        function (t) {
        }
        ]),
        y.$inject = [
          '$locationProvider',
          '$urlMatcherFactoryProvider'
        ],
        e.module('ui.router.router').provider('$urlRouter', y),
        w.$inject = [
          '$urlRouterProvider',
          '$urlMatcherFactoryProvider'
        ],
        e.module('ui.router.state').value('$stateParams', {
        }).provider('$state', w),
        b.$inject = [
        ],
        e.module('ui.router.state').provider('$view', b),
        e.module('ui.router.state').provider('$uiViewScroll', x),
        C.$inject = [
          '$state',
          '$injector',
          '$uiViewScroll',
          '$interpolate'
        ],
        S.$inject = [
          '$compile',
          '$controller',
          '$state',
          '$interpolate'
        ],
        e.module('ui.router.state').directive('uiView', C),
        e.module('ui.router.state').directive('uiView', S),
        T.$inject = [
          '$state',
          '$timeout'
        ],
        D.$inject = [
          '$state',
          '$stateParams',
          '$interpolate'
        ],
        e.module('ui.router.state').directive('uiSref', T).directive('uiSrefActive', D).directive('uiSrefActiveEq', D),
        O.$inject = [
          '$state'
        ],
        M.$inject = [
          '$state'
        ],
        e.module('ui.router.state').filter('isState', O).filter('includedByState', M)
      }(window, window.angular),
      function (t, e, n) {
        'use strict';
        e.module('ngAnimate', [
          'ng'
        ]).directive('ngAnimateChildren', function () {
          var t = '$$ngAnimateChildren';
          return function (n, r, i) {
            var o = i.ngAnimateChildren;
            e.isString(o) && 0 === o.length ? r.data(t, !0)  : n.$watch(o, function (e) {
              r.data(t, !!e)
            })
          }
        }).factory('$$animateReflow', [
          '$$rAF',
          '$document',
          function (t, e) {
            var n = e[0].body;
            return function (e) {
              return t(function () {
                n.offsetWidth + 1;
                e()
              })
            }
          }
        ]).config(['$provide',
        '$animateProvider',
        function (r, i) {
          function o(t) {
            for (var e = 0; e < t.length; e++) {
              var n = t[e];
              if (n.nodeType == v) return n
            }
          }
          function a(t) {
            return t && e.element(t)
          }
          function s(t) {
            return e.element(o(t))
          }
          function u(t, e) {
            return o(t) == o(e)
          }
          var c,
          l = e.noop,
          f = e.forEach,
          h = i.$$selectors,
          d = e.isArray,
          p = e.isString,
          $ = e.isObject,
          v = 1,
          m = '$$ngAnimateState',
          g = '$$ngAnimateChildren',
          y = 'ng-animate',
          w = {
            running: !0
          };
          r.decorator('$animate', [
            '$delegate',
            '$$q',
            '$injector',
            '$sniffer',
            '$rootElement',
            '$$asyncCallback',
            '$rootScope',
            '$document',
            '$templateRequest',
            '$$jqLite',
            function (t, n, r, v, b, x, C, S, E, k) {
              function A(t, e) {
                var n = t.data(m) || {
                };
                return e && (n.running = !0, n.structural = !0, t.data(m, n)),
                n.disabled || n.running && n.structural
              }
              function T(t) {
                var e,
                r = n.defer();
                return r.promise.$$cancelFn = function () {
                  e && e()
                },
                C.$$postDigest(function () {
                  e = t(function () {
                    r.resolve()
                  })
                }),
                r.promise
              }
              function D(t) {
                return $(t) ? (t.tempClasses && p(t.tempClasses) && (t.tempClasses = t.tempClasses.split(/\s+/)), t)  : void 0
              }
              function O(t, e, n) {
                n = n || {
                };
                var r = {
                };
                f(n, function (t, e) {
                  f(e.split(' '), function (e) {
                    r[e] = t
                  })
                });
                var i = Object.create(null);
                f((t.attr('class') || '').split(/\s+/), function (t) {
                  i[t] = !0
                });
                var o = [
                ],
                a = [
                ];
                return f(e && e.classes || [
                ], function (t, e) {
                  var n = i[e],
                  s = r[e] || {
                  };
                  t === !1 ? (n || 'addClass' == s.event) && a.push(e)  : t === !0 && (n && 'removeClass' != s.event || o.push(e))
                }),
                o.length + a.length > 0 && [
                  o.join(' '),
                  a.join(' ')
                ]
              }
              function M(t) {
                if (t) {
                  var e = [
                  ],
                  n = {
                  },
                  i = t.substr(1).split('.');
                  (v.transitions || v.animations) && e.push(r.get(h['']));
                  for (var o = 0; o < i.length; o++) {
                    var a = i[o],
                    s = h[a];
                    s && !n[a] && (e.push(r.get(s)), n[a] = !0)
                  }
                  return e
                }
              }
              function j(t, n, r, i) {
                function o(t, e) {
                  var n = t[e],
                  r = t['before' + e.charAt(0).toUpperCase() + e.substr(1)];
                  return n || r ? ('leave' == e && (r = n, n = null), x.push({
                    event: e,
                    fn: n
                  }), y.push({
                    event: e,
                    fn: r
                  }), !0)  : void 0
                }
                function a(e, n, o) {
                  function a(t) {
                    if (n) {
                      if ((n[t] || l) (), ++h < s.length) return;
                      n = null
                    }
                    o()
                  }
                  var s = [
                  ];
                  f(e, function (t) {
                    t.fn && s.push(t)
                  });
                  var h = 0;
                  f(s, function (e, o) {
                    var s = function () {
                      a(o)
                    };
                    switch (e.event) {
                      case 'setClass':
                        n.push(e.fn(t, u, c, s, i));
                        break;
                      case 'animate':
                        n.push(e.fn(t, r, i.from, i.to, s));
                        break;
                      case 'addClass':
                        n.push(e.fn(t, u || r, s, i));
                        break;
                      case 'removeClass':
                        n.push(e.fn(t, c || r, s, i));
                        break;
                      default:
                        n.push(e.fn(t, s, i))
                    }
                  }), n && 0 === n.length && o()
                }
                var s = t[0];
                if (s) {
                  i && (i.to = i.to || {
                  }, i.from = i.from || {
                  });
                  var u,
                  c;
                  d(r) && (u = r[0], c = r[1], u ? c ? r = u + ' ' + c : (r = u, n = 'addClass')  : (r = c, n = 'removeClass'));
                  var h = 'setClass' == n,
                  p = h || 'addClass' == n || 'removeClass' == n || 'animate' == n,
                  $ = t.attr('class'),
                  v = $ + ' ' + r;
                  if (F(v)) {
                    var m = l,
                    g = [
                    ],
                    y = [
                    ],
                    w = l,
                    b = [
                    ],
                    x = [
                    ],
                    C = (' ' + v).replace(/\s+/g, '.');
                    return f(M(C), function (t) {
                      var e = o(t, n);
                      !e && h && (o(t, 'addClass'), o(t, 'removeClass'))
                    }),
                    {
                      node: s,
                      event: n,
                      className: r,
                      isClassBased: p,
                      isSetClassOperation: h,
                      applyStyles: function () {
                        i && t.css(e.extend(i.from || {
                        }, i.to || {
                        }))
                      },
                      before: function (t) {
                        m = t,
                        a(y, g, function () {
                          m = l,
                          t()
                        })
                      },
                      after: function (t) {
                        w = t,
                        a(x, b, function () {
                          w = l,
                          t()
                        })
                      },
                      cancel: function () {
                        g && (f(g, function (t) {
                          (t || l) (!0)
                        }), m(!0)),
                        b && (f(b, function (t) {
                          (t || l) (!0)
                        }), w(!0))
                      }
                    }
                  }
                }
              }
              function P(t, n, r, i, o, a, s, u) {
                function h(e) {
                  var i = '$animate:' + e;
                  C && C[i] && C[i].length > 0 && x(function () {
                    r.triggerHandler(i, {
                      event: t,
                      className: n
                    })
                  })
                }
                function d() {
                  h('before')
                }
                function p() {
                  h('after')
                }
                function $() {
                  h('close'),
                  u()
                }
                function v() {
                  v.hasBeenRun || (v.hasBeenRun = !0, a())
                }
                function g() {
                  if (!g.hasBeenRun) {
                    b && b.applyStyles(),
                    g.hasBeenRun = !0,
                    s && s.tempClasses && f(s.tempClasses, function (t) {
                      c.removeClass(r, t)
                    });
                    var e = r.data(m);
                    e && (b && b.isClassBased ? I(r, n)  : (x(function () {
                      var e = r.data(m) || {
                      };
                      P == e.index && I(r, n, t)
                    }), r.data(m, e))),
                    $()
                  }
                }
                var w = l,
                b = j(r, t, n, s);
                if (!b) return v(),
                d(),
                p(),
                g(),
                w;
                t = b.event,
                n = b.className;
                var C = e.element._data(b.node);
                if (C = C && C.events, i || (i = o ? o.parent()  : r.parent()), R(r, i)) return v(),
                d(),
                p(),
                g(),
                w;
                var S = r.data(m) || {
                },
                E = S.active || {
                },
                k = S.totalActive || 0,
                A = S.last,
                T = !1;
                if (k > 0) {
                  var D = [
                  ];
                  if (b.isClassBased) {
                    if ('setClass' == A.event) D.push(A),
                    I(r, n);
                     else if (E[n]) {
                      var O = E[n];
                      O.event == t ? T = !0 : (D.push(O), I(r, n))
                    }
                  } else if ('leave' == t && E['ng-leave']) T = !0;
                   else {
                    for (var M in E) D.push(E[M]);
                    S = {
                    },
                    I(r, !0)
                  }
                  D.length > 0 && f(D, function (t) {
                    t.cancel()
                  })
                }
                if (!b.isClassBased || b.isSetClassOperation || 'animate' == t || T || (T = 'addClass' == t == r.hasClass(n)), T) return v(),
                d(),
                p(),
                $(),
                w;
                E = S.active || {
                },
                k = S.totalActive || 0,
                'leave' == t && r.one('$destroy', function (t) {
                  var n = e.element(this),
                  r = n.data(m);
                  if (r) {
                    var i = r.active['ng-leave'];
                    i && (i.cancel(), I(n, 'ng-leave'))
                  }
                }),
                c.addClass(r, y),
                s && s.tempClasses && f(s.tempClasses, function (t) {
                  c.addClass(r, t)
                });
                var P = U++;
                return k++,
                E[n] = b,
                r.data(m, {
                  last: b,
                  active: E,
                  index: P,
                  totalActive: k
                }),
                d(),
                b.before(function (e) {
                  var i = r.data(m);
                  e = e || !i || !i.active[n] || b.isClassBased && i.active[n].event != t,
                  v(),
                  e === !0 ? g()  : (p(), b.after(g))
                }),
                b.cancel
              }
              function N(t) {
                var n = o(t);
                if (n) {
                  var r = e.isFunction(n.getElementsByClassName) ? n.getElementsByClassName(y)  : n.querySelectorAll('.' + y);
                  f(r, function (t) {
                    t = e.element(t);
                    var n = t.data(m);
                    n && n.active && f(n.active, function (t) {
                      t.cancel()
                    })
                  })
                }
              }
              function I(t, e) {
                if (u(t, b)) w.disabled || (w.running = !1, w.structural = !1);
                 else if (e) {
                  var n = t.data(m) || {
                  },
                  r = e === !0;
                  !r && n.active && n.active[e] && (n.totalActive--, delete n.active[e]),
                  (r || !n.totalActive) && (c.removeClass(t, y), t.removeData(m))
                }
              }
              function R(t, n) {
                if (w.disabled) return !0;
                if (u(t, b)) return w.running;
                var r,
                i,
                o;
                do {
                  if (0 === n.length) break;
                  var a = u(n, b),
                  s = a ? w : n.data(m) || {
                  };
                  if (s.disabled) return !0;
                  if (a && (o = !0), r !== !1) {
                    var c = n.data(g);
                    e.isDefined(c) && (r = c)
                  }
                  i = i || s.running || s.last && !s.last.isClassBased
                } while (n = n.parent());
                return !o || !r && i
              }
              c = k,
              b.data(m, w);
              var V = C.$watch(function () {
                return E.totalPendingRequests
              }, function (t, e) {
                0 === t && (V(), C.$$postDigest(function () {
                  C.$$postDigest(function () {
                    w.running = !1
                  })
                }))
              }),
              U = 0,
              q = i.classNameFilter(),
              F = q ? function (t) {
                return q.test(t)
              }
               : function () {
                return !0
              };
              return {
                animate: function (t, e, n, r, i) {
                  return r = r || 'ng-inline-animate',
                  i = D(i) || {
                  },
                  i.from = n ? e : null,
                  i.to = n ? n : e,
                  T(function (e) {
                    return P('animate', r, s(t), null, null, l, i, e)
                  })
                },
                enter: function (n, r, i, o) {
                  return o = D(o),
                  n = e.element(n),
                  r = a(r),
                  i = a(i),
                  A(n, !0),
                  t.enter(n, r, i),
                  T(function (t) {
                    return P('enter', 'ng-enter', s(n), r, i, l, o, t)
                  })
                },
                leave: function (n, r) {
                  return r = D(r),
                  n = e.element(n),
                  N(n),
                  A(n, !0),
                  T(function (e) {
                    return P('leave', 'ng-leave', s(n), null, null, function () {
                      t.leave(n)
                    }, r, e)
                  })
                },
                move: function (n, r, i, o) {
                  return o = D(o),
                  n = e.element(n),
                  r = a(r),
                  i = a(i),
                  N(n),
                  A(n, !0),
                  t.move(n, r, i),
                  T(function (t) {
                    return P('move', 'ng-move', s(n), r, i, l, o, t)
                  })
                },
                addClass: function (t, e, n) {
                  return this.setClass(t, e, [
                  ], n)
                },
                removeClass: function (t, e, n) {
                  return this.setClass(t, [
                  ], e, n)
                },
                setClass: function (n, r, i, a) {
                  a = D(a);
                  var u = '$$animateClasses';
                  if (n = e.element(n), n = s(n), A(n)) return t.$$setClassImmediately(n, r, i, a);
                  var c,
                  l = n.data(u),
                  h = !!l;
                  return l || (l = {
                  }, l.classes = {
                  }),
                  c = l.classes,
                  r = d(r) ? r : r.split(' '),
                  f(r, function (t) {
                    t && t.length && (c[t] = !0)
                  }),
                  i = d(i) ? i : i.split(' '),
                  f(i, function (t) {
                    t && t.length && (c[t] = !1)
                  }),
                  h ? (a && l.options && (l.options = e.extend(l.options || {
                  }, a)), l.promise)  : (n.data(u, l = {
                    classes: c,
                    options: a
                  }), l.promise = T(function (e) {
                    var r = n.parent(),
                    i = o(n),
                    a = i.parentNode;
                    if (!a || a.$$NG_REMOVED || i.$$NG_REMOVED) return void e();
                    var s = n.data(u);
                    n.removeData(u);
                    var c = n.data(m) || {
                    },
                    l = O(n, s, c.active);
                    return l ? P('setClass', l, n, r, null, function () {
                      l[0] && t.$$addClassImmediately(n, l[0]),
                      l[1] && t.$$removeClassImmediately(n, l[1])
                    }, s.options, e)  : e()
                  }))
                },
                cancel: function (t) {
                  t.$$cancelFn()
                },
                enabled: function (t, e) {
                  switch (arguments.length) {
                    case 2:
                      if (t) I(e);
                       else {
                        var n = e.data(m) || {
                        };
                        n.disabled = !0,
                        e.data(m, n)
                      }
                      break;
                    case 1:
                      w.disabled = !t;
                      break;
                    default:
                      t = !w.disabled
                  }
                  return !!t
                }
              }
            }
            ]),
            i.register('', [
              '$window',
              '$sniffer',
              '$timeout',
              '$$animateReflow',
              function (r, i, a, s) {
                function u() {
                  I || (I = s(function () {
                    Y = [
                    ],
                    I = null,
                    z = {
                    }
                  }))
                }
                function h(t, e) {
                  I && I(),
                  Y.push(e),
                  I = s(function () {
                    f(Y, function (t) {
                      t()
                    }),
                    Y = [
                    ],
                    I = null,
                    z = {
                    }
                  })
                }
                function $(t, n) {
                  var r = o(t);
                  t = e.element(r),
                  X.push(t);
                  var i = Date.now() + n;
                  K >= i || (a.cancel(J), K = i, J = a(function () {
                    m(X),
                    X = [
                    ]
                  }, n, !1))
                }
                function m(t) {
                  f(t, function (t) {
                    var e = t.data(_);
                    e && f(e.closeAnimationFns, function (t) {
                      t()
                    })
                  })
                }
                function g(t, e) {
                  var n = e ? z[e] : null;
                  if (!n) {
                    var i = 0,
                    o = 0,
                    a = 0,
                    s = 0;
                    f(t, function (t) {
                      if (t.nodeType == v) {
                        var e = r.getComputedStyle(t) || {
                        },
                        n = e[O + R];
                        i = Math.max(y(n), i);
                        var u = e[O + U];
                        o = Math.max(y(u), o);
                        {
                          e[j + U]
                        }
                        s = Math.max(y(e[j + U]), s);
                        var c = y(e[j + R]);
                        c > 0 && (c *= parseInt(e[j + q], 10) || 1),
                        a = Math.max(c, a)
                      }
                    }),
                    n = {
                      total: 0,
                      transitionDelay: o,
                      transitionDuration: i,
                      animationDelay: s,
                      animationDuration: a
                    },
                    e && (z[e] = n)
                  }
                  return n
                }
                function y(t) {
                  var e = 0,
                  n = p(t) ? t.split(/\s*,\s*/)  : [
                  ];
                  return f(n, function (t) {
                    e = Math.max(parseFloat(t) || 0, e)
                  }),
                  e
                }
                function w(t) {
                  var e = t.parent(),
                  n = e.data(H);
                  return n || (e.data(H, ++G), n = G),
                  n + '-' + o(t).getAttribute('class')
                }
                function b(t, e, n, r) {
                  var i = [
                    'ng-enter',
                    'ng-leave',
                    'ng-move'
                  ].indexOf(n) >= 0,
                  a = w(e),
                  s = a + ' ' + n,
                  u = z[s] ? ++z[s].total : 0,
                  l = {
                  };
                  if (u > 0) {
                    var f = n + '-stagger',
                    h = a + ' ' + f,
                    d = !z[h];
                    d && c.addClass(e, f),
                    l = g(e, h),
                    d && c.removeClass(e, f)
                  }
                  c.addClass(e, n);
                  var p = e.data(_) || {
                  },
                  $ = g(e, s),
                  v = $.transitionDuration,
                  m = $.animationDuration;
                  if (i && 0 === v && 0 === m) return c.removeClass(e, n),
                  !1;
                  var y = r || i && v > 0,
                  b = m > 0 && l.animationDelay > 0 && 0 === l.animationDuration,
                  x = p.closeAnimationFns || [
                  ];
                  e.data(_, {
                    stagger: l,
                    cacheKey: s,
                    running: p.running || 0,
                    itemIndex: u,
                    blockTransition: y,
                    closeAnimationFns: x
                  });
                  var E = o(e);
                  return y && (C(E, !0), r && e.css(r)),
                  b && S(E, !0),
                  !0
                }
                function x(t, e, n, r, i) {
                  function s() {
                    e.off(U, u),
                    c.removeClass(e, d),
                    c.removeClass(e, p),
                    R && a.cancel(R),
                    T(e, n);
                    var t = o(e);
                    for (var r in m) t.style.removeProperty(m[r])
                  }
                  function u(t) {
                    t.stopPropagation();
                    var e = t.originalEvent || t,
                    n = e.$manualTimeStamp || e.timeStamp || Date.now(),
                    i = parseFloat(e.elapsedTime.toFixed(B));
                    Math.max(n - V, 0) >= j && i >= D && r()
                  }
                  var l = o(e),
                  h = e.data(_);
                  if ( - 1 == l.getAttribute('class').indexOf(n) || !h) return void r();
                  var d = '',
                  p = '';
                  f(n.split(' '), function (t, e) {
                    var n = (e > 0 ? ' ' : '') + t;
                    d += n + '-active',
                    p += n + '-pending'
                  });
                  var v = '',
                  m = [
                  ],
                  y = h.itemIndex,
                  w = h.stagger,
                  b = 0;
                  if (y > 0) {
                    var x = 0;
                    w.transitionDelay > 0 && 0 === w.transitionDuration && (x = w.transitionDelay * y);
                    var E = 0;
                    w.animationDelay > 0 && 0 === w.animationDuration && (E = w.animationDelay * y, m.push(N + 'animation-play-state')),
                    b = Math.round(100 * Math.max(x, E)) / 100
                  }
                  b || (c.addClass(e, d), h.blockTransition && C(l, !1));
                  var k = h.cacheKey + ' ' + d,
                  A = g(e, k),
                  D = Math.max(A.transitionDuration, A.animationDuration);
                  if (0 === D) return c.removeClass(e, d),
                  T(e, n),
                  void r();
                  !b && i && Object.keys(i).length > 0 && (A.transitionDuration || (e.css('transition', A.animationDuration + 's linear all'), m.push('transition')), e.css(i));
                  var O = Math.max(A.transitionDelay, A.animationDelay),
                  j = O * W;
                  if (m.length > 0) {
                    var I = l.getAttribute('style') || '';
                    ';' !== I.charAt(I.length - 1) && (I += ';'),
                    l.setAttribute('style', I + ' ' + v)
                  }
                  var R,
                  V = Date.now(),
                  U = P + ' ' + M,
                  q = (O + D) * L,
                  F = (b + q) * W;
                  return b > 0 && (c.addClass(e, p), R = a(function () {
                    R = null,
                    A.transitionDuration > 0 && C(l, !1),
                    A.animationDuration > 0 && S(l, !1),
                    c.addClass(e, d),
                    c.removeClass(e, p),
                    i && (0 === A.transitionDuration && e.css('transition', A.animationDuration + 's linear all'), e.css(i), m.push('transition'))
                  }, b * W, !1)),
                  e.on(U, u),
                  h.closeAnimationFns.push(function () {
                    s(),
                    r()
                  }),
                  h.running++,
                  $(e, F),
                  s
                }
                function C(t, e) {
                  t.style[O + V] = e ? 'none' : ''
                }
                function S(t, e) {
                  t.style[j + F] = e ? 'paused' : ''
                }
                function E(t, e, n, r) {
                  return b(t, e, n, r) ? function (t) {
                    t && T(e, n)
                  }
                   : void 0
                }
                function k(t, e, n, r, i) {
                  return e.data(_) ? x(t, e, n, r, i)  : (T(e, n), void r())
                }
                function A(t, e, n, r, i) {
                  var o = E(t, e, n, i.from);
                  if (!o) return u(),
                  void r();
                  var a = o;
                  return h(e, function () {
                    a = k(t, e, n, r, i.to)
                  }),
                  function (t) {
                    (a || l) (t)
                  }
                }
                function T(t, e) {
                  c.removeClass(t, e);
                  var n = t.data(_);
                  n && (n.running && n.running--, n.running && 0 !== n.running || t.removeData(_))
                }
                function D(t, e) {
                  var n = '';
                  return t = d(t) ? t : t.split(/\s+/),
                  f(t, function (t, r) {
                    t && t.length > 0 && (n += (r > 0 ? ' ' : '') + t + e)
                  }),
                  n
                }
                var O,
                M,
                j,
                P,
                N = '';
                t.ontransitionend === n && t.onwebkittransitionend !== n ? (N = '-webkit-', O = 'WebkitTransition', M = 'webkitTransitionEnd transitionend')  : (O = 'transition', M = 'transitionend'),
                t.onanimationend === n && t.onwebkitanimationend !== n ? (N = '-webkit-', j = 'WebkitAnimation', P = 'webkitAnimationEnd animationend')  : (j = 'animation', P = 'animationend');
                var I,
                R = 'Duration',
                V = 'Property',
                U = 'Delay',
                q = 'IterationCount',
                F = 'PlayState',
                H = '$$ngAnimateKey',
                _ = '$$ngAnimateCSS3Data',
                B = 3,
                L = 1.5,
                W = 1000,
                z = {
                },
                G = 0,
                Y = [
                ],
                J = null,
                K = 0,
                X = [
                ];
                return {
                  animate: function (t, e, n, r, i, o) {
                    return o = o || {
                    },
                    o.from = n,
                    o.to = r,
                    A('animate', t, e, i, o)
                  },
                  enter: function (t, e, n) {
                    return n = n || {
                    },
                    A('enter', t, 'ng-enter', e, n)
                  },
                  leave: function (t, e, n) {
                    return n = n || {
                    },
                    A('leave', t, 'ng-leave', e, n)
                  },
                  move: function (t, e, n) {
                    return n = n || {
                    },
                    A('move', t, 'ng-move', e, n)
                  },
                  beforeSetClass: function (t, e, n, r, i) {
                    i = i || {
                    };
                    var o = D(n, '-remove') + ' ' + D(e, '-add'),
                    a = E('setClass', t, o, i.from);
                    return a ? (h(t, r), a)  : (u(), void r())
                  },
                  beforeAddClass: function (t, e, n, r) {
                    r = r || {
                    };
                    var i = E('addClass', t, D(e, '-add'), r.from);
                    return i ? (h(t, n), i)  : (u(), void n())
                  },
                  beforeRemoveClass: function (t, e, n, r) {
                    r = r || {
                    };
                    var i = E('removeClass', t, D(e, '-remove'), r.from);
                    return i ? (h(t, n), i)  : (u(), void n())
                  },
                  setClass: function (t, e, n, r, i) {
                    i = i || {
                    },
                    n = D(n, '-remove'),
                    e = D(e, '-add');
                    var o = n + ' ' + e;
                    return k('setClass', t, o, r, i.to)
                  },
                  addClass: function (t, e, n, r) {
                    return r = r || {
                    },
                    k('addClass', t, D(e, '-add'), n, r.to)
                  },
                  removeClass: function (t, e, n, r) {
                    return r = r || {
                    },
                    k('removeClass', t, D(e, '-remove'), n, r.to)
                  }
                }
              }
            ])
          }
          ])
        }(window, window.angular), function (t, e) {
          'use strict';
          var n = n || function (n) {
            var r = {
              element: null,
              dragger: null,
              disable: 'none',
              addBodyClasses: !0,
              hyperextensible: !0,
              resistance: 0.5,
              flickThreshold: 50,
              transitionSpeed: 0.3,
              easing: 'ease',
              maxPosition: 266,
              minPosition: - 266,
              tapToClose: !0,
              touchToDrag: !0,
              slideIntent: 40,
              minDragDistance: 5
            },
            i = {
              simpleStates: {
                opening: null,
                towards: null,
                hyperExtending: null,
                halfway: null,
                flick: null,
                translation: {
                  absolute: 0,
                  relative: 0,
                  sinceDirectionChange: 0,
                  percentage: 0
                }
              }
            },
            o = {
            },
            a = {
              hasTouch: 'ontouchstart' in e.documentElement || t.navigator.msPointerEnabled,
              eventType: function (t) {
                var e = {
                  down: a.hasTouch ? 'touchstart' : 'mousedown',
                  move: a.hasTouch ? 'touchmove' : 'mousemove',
                  up: a.hasTouch ? 'touchend' : 'mouseup',
                  out: a.hasTouch ? 'touchcancel' : 'mouseout'
                };
                return e[t]
              },
              page: function (t, e) {
                return a.hasTouch && e.touches.length && e.touches[0] ? e.touches[0]['page' + t] : e['page' + t]
              },
              klass: {
                has: function (t, e) {
                  return - 1 !== t.className.indexOf(e)
                },
                add: function (t, e) {
                  !a.klass.has(t, e) && r.addBodyClasses && (t.className += ' ' + e)
                },
                remove: function (t, e) {
                  r.addBodyClasses && (t.className = t.className.replace(e, '').replace(/^\s+|\s+$/g, ''))
                }
              },
              dispatchEvent: function (t) {
                return 'function' == typeof o[t] ? o[t].call()  : void 0
              },
              vendor: function () {
                var t,
                n = e.createElement('div'),
                r = 'webkit Moz O ms'.split(' ');
                for (t in r) if ('undefined' != typeof n.style[r[t] + 'Transition']) return r[t]
              },
              transitionCallback: function () {
                return 'Moz' === i.vendor || 'ms' === i.vendor ? 'transitionend' : i.vendor + 'TransitionEnd'
              },
              canTransform: function () {
                return 'undefined' != typeof r.element.style[i.vendor + 'Transform']
              },
              deepExtend: function (t, e) {
                var n;
                for (n in e) e[n] && e[n].constructor && e[n].constructor === Object ? (t[n] = t[n] || {
                }, a.deepExtend(t[n], e[n]))  : t[n] = e[n];
                return t
              },
              angleOfDrag: function (t, e) {
                var n,
                r;
                return r = Math.atan2( - (i.startDragY - e), i.startDragX - t),
                0 > r && (r += 2 * Math.PI),
                n = Math.floor(r * (180 / Math.PI) - 180),
                0 > n && n > - 180 && (n = 360 - Math.abs(n)),
                Math.abs(n)
              },
              events: {
                addEvent: function (t, e, n) {
                  return t.addEventListener ? t.addEventListener(e, n, !1)  : t.attachEvent ? t.attachEvent('on' + e, n)  : void 0
                },
                removeEvent: function (t, e, n) {
                  return t.addEventListener ? t.removeEventListener(e, n, !1)  : t.attachEvent ? t.detachEvent('on' + e, n)  : void 0
                },
                prevent: function (t) {
                  t.preventDefault ? t.preventDefault()  : t.returnValue = !1
                }
              },
              parentUntil: function (t, e) {
                for (var n = 'string' == typeof e; t.parentNode; ) {
                  if (n && t.getAttribute && t.getAttribute(e)) return t;
                  if (!n && t === e) return t;
                  t = t.parentNode
                }
                return null
              }
            },
            s = {
              translate: {
                get: {
                  matrix: function (e) {
                    if (a.canTransform()) {
                      var n = t.getComputedStyle(r.element) [i.vendor + 'Transform'].match(/\((.*)\)/),
                      o = 8;
                      return n ? (n = n[1].split(','), 16 === n.length && (e += o), parseInt(n[e], 10))  : 0
                    }
                    return parseInt(r.element.style.left, 10)
                  }
                },
                easeCallback: function () {
                  r.element.style[i.vendor + 'Transition'] = '',
                  i.translation = s.translate.get.matrix(4),
                  i.easing = !1,
                  clearInterval(i.animatingInterval),
                  0 === i.easingTo && (a.klass.remove(e.body, 'snapjs-right'), a.klass.remove(e.body, 'snapjs-left')),
                  a.dispatchEvent('animated'),
                  a.events.removeEvent(r.element, a.transitionCallback(), s.translate.easeCallback)
                },
                easeTo: function (t) {
                  a.canTransform() ? (i.easing = !0, i.easingTo = t, r.element.style[i.vendor + 'Transition'] = 'all ' + r.transitionSpeed + 's ' + r.easing, i.animatingInterval = setInterval(function () {
                    a.dispatchEvent('animating')
                  }, 1), a.events.addEvent(r.element, a.transitionCallback(), s.translate.easeCallback), s.translate.x(t))  : (i.translation = t, s.translate.x(t)),
                  0 === t && (r.element.style[i.vendor + 'Transform'] = '')
                },
                x: function (n) {
                  if (!('left' === r.disable && n > 0 || 'right' === r.disable && 0 > n)) if (r.hyperextensible || (n === r.maxPosition || n > r.maxPosition ? n = r.maxPosition : (n === r.minPosition || n < r.minPosition) && (n = r.minPosition)), n = parseInt(n, 10), isNaN(n) && (n = 0), a.canTransform()) {
                    var o = 'translate3d(' + n + 'px, 0,0)';
                    r.element.style[i.vendor + 'Transform'] = o
                  } else r.element.style.width = (t.innerWidth || e.documentElement.clientWidth) + 'px',
                  r.element.style.left = n + 'px',
                  r.element.style.right = ''
                }
              },
              drag: {
                listen: function () {
                  i.translation = 0,
                  i.easing = !1,
                  a.events.addEvent(r.element, a.eventType('down'), s.drag.startDrag),
                  a.events.addEvent(r.element, a.eventType('move'), s.drag.dragging),
                  a.events.addEvent(r.element, a.eventType('up'), s.drag.endDrag)
                },
                stopListening: function () {
                  a.events.removeEvent(r.element, a.eventType('down'), s.drag.startDrag),
                  a.events.removeEvent(r.element, a.eventType('move'), s.drag.dragging),
                  a.events.removeEvent(r.element, a.eventType('up'), s.drag.endDrag)
                },
                startDrag: function (t) {
                  var e = t.target ? t.target : t.srcElement,
                  n = a.parentUntil(e, 'data-snap-ignore');
                  if (n) return void a.dispatchEvent('ignore');
                  if (r.dragger) {
                    var o = a.parentUntil(e, r.dragger);
                    if (!o && i.translation !== r.minPosition && i.translation !== r.maxPosition) return
                  }
                  a.dispatchEvent('start'),
                  r.element.style[i.vendor + 'Transition'] = '',
                  i.isDragging = !0,
                  i.hasIntent = null,
                  i.intentChecked = !1,
                  i.startDragX = a.page('X', t),
                  i.startDragY = a.page('Y', t),
                  i.dragWatchers = {
                    current: 0,
                    last: 0,
                    hold: 0,
                    state: ''
                  },
                  i.simpleStates = {
                    opening: null,
                    towards: null,
                    hyperExtending: null,
                    halfway: null,
                    flick: null,
                    translation: {
                      absolute: 0,
                      relative: 0,
                      sinceDirectionChange: 0,
                      percentage: 0
                    }
                  }
                },
                dragging: function (t) {
                  if (i.isDragging && r.touchToDrag) {
                    var n,
                    o = a.page('X', t),
                    u = a.page('Y', t),
                    c = i.translation,
                    l = s.translate.get.matrix(4),
                    f = o - i.startDragX,
                    h = l > 0,
                    d = f;
                    if (i.intentChecked && !i.hasIntent) return;
                    if (r.addBodyClasses && (l > 0 ? (a.klass.add(e.body, 'snapjs-left'), a.klass.remove(e.body, 'snapjs-right'))  : 0 > l && (a.klass.add(e.body, 'snapjs-right'), a.klass.remove(e.body, 'snapjs-left'))), i.hasIntent === !1 || null === i.hasIntent) {
                      var p = a.angleOfDrag(o, u),
                      $ = p >= 0 && p <= r.slideIntent || 360 >= p && p > 360 - r.slideIntent,
                      v = p >= 180 && p <= 180 + r.slideIntent || 180 >= p && p >= 180 - r.slideIntent;
                      i.hasIntent = v || $ ? !0 : !1,
                      i.intentChecked = !0
                    }
                    if (r.minDragDistance >= Math.abs(o - i.startDragX) || i.hasIntent === !1) return;
                    a.events.prevent(t),
                    a.dispatchEvent('drag'),
                    i.dragWatchers.current = o,
                    i.dragWatchers.last > o ? ('left' !== i.dragWatchers.state && (i.dragWatchers.state = 'left', i.dragWatchers.hold = o), i.dragWatchers.last = o)  : i.dragWatchers.last < o && ('right' !== i.dragWatchers.state && (i.dragWatchers.state = 'right', i.dragWatchers.hold = o), i.dragWatchers.last = o),
                    h ? (r.maxPosition < l && (n = (l - r.maxPosition) * r.resistance, d = f - n), i.simpleStates = {
                      opening: 'left',
                      towards: i.dragWatchers.state,
                      hyperExtending: r.maxPosition < l,
                      halfway: l > r.maxPosition / 2,
                      flick: Math.abs(i.dragWatchers.current - i.dragWatchers.hold) > r.flickThreshold,
                      translation: {
                        absolute: l,
                        relative: f,
                        sinceDirectionChange: i.dragWatchers.current - i.dragWatchers.hold,
                        percentage: l / r.maxPosition * 100
                      }
                    })  : (r.minPosition > l && (n = (l - r.minPosition) * r.resistance, d = f - n), i.simpleStates = {
                      opening: 'right',
                      towards: i.dragWatchers.state,
                      hyperExtending: r.minPosition > l,
                      halfway: l < r.minPosition / 2,
                      flick: Math.abs(i.dragWatchers.current - i.dragWatchers.hold) > r.flickThreshold,
                      translation: {
                        absolute: l,
                        relative: f,
                        sinceDirectionChange: i.dragWatchers.current - i.dragWatchers.hold,
                        percentage: l / r.minPosition * 100
                      }
                    }),
                    s.translate.x(d + c)
                  }
                },
                endDrag: function (t) {
                  if (i.isDragging) {
                    a.dispatchEvent('end');
                    var e = s.translate.get.matrix(4);
                    if (0 === i.dragWatchers.current && 0 !== e && r.tapToClose) return a.dispatchEvent('close'),
                    a.events.prevent(t),
                    s.translate.easeTo(0),
                    i.isDragging = !1,
                    void (i.startDragX = 0);
                    'left' === i.simpleStates.opening ? i.simpleStates.halfway || i.simpleStates.hyperExtending || i.simpleStates.flick ? i.simpleStates.flick && 'left' === i.simpleStates.towards ? s.translate.easeTo(0)  : (i.simpleStates.flick && 'right' === i.simpleStates.towards || i.simpleStates.halfway || i.simpleStates.hyperExtending) && s.translate.easeTo(r.maxPosition)  : s.translate.easeTo(0)  : 'right' === i.simpleStates.opening && (i.simpleStates.halfway || i.simpleStates.hyperExtending || i.simpleStates.flick ? i.simpleStates.flick && 'right' === i.simpleStates.towards ? s.translate.easeTo(0)  : (i.simpleStates.flick && 'left' === i.simpleStates.towards || i.simpleStates.halfway || i.simpleStates.hyperExtending) && s.translate.easeTo(r.minPosition)  : s.translate.easeTo(0)),
                    i.isDragging = !1,
                    i.startDragX = a.page('X', t)
                  }
                }
              }
            },
            u = function (t) {
              t.element && (a.deepExtend(r, t), i.vendor = a.vendor(), s.drag.listen())
            };
            this.open = function (t) {
              a.dispatchEvent('open'),
              a.klass.remove(e.body, 'snapjs-expand-left'),
              a.klass.remove(e.body, 'snapjs-expand-right'),
              'left' === t ? (i.simpleStates.opening = 'left', i.simpleStates.towards = 'right', a.klass.add(e.body, 'snapjs-left'), a.klass.remove(e.body, 'snapjs-right'), s.translate.easeTo(r.maxPosition))  : 'right' === t && (i.simpleStates.opening = 'right', i.simpleStates.towards = 'left', a.klass.remove(e.body, 'snapjs-left'), a.klass.add(e.body, 'snapjs-right'), s.translate.easeTo(r.minPosition))
            },
            this.close = function () {
              a.dispatchEvent('close'),
              s.translate.easeTo(0)
            },
            this.expand = function (n) {
              var r = t.innerWidth || e.documentElement.clientWidth;
              'left' === n ? (a.dispatchEvent('expandLeft'), a.klass.add(e.body, 'snapjs-expand-left'), a.klass.remove(e.body, 'snapjs-expand-right'))  : (a.dispatchEvent('expandRight'), a.klass.add(e.body, 'snapjs-expand-right'), a.klass.remove(e.body, 'snapjs-expand-left'), r *= - 1),
              s.translate.easeTo(r)
            },
            this.on = function (t, e) {
              return o[t] = e,
              this
            },
            this.off = function (t) {
              o[t] && (o[t] = !1)
            },
            this.enable = function () {
              a.dispatchEvent('enable'),
              s.drag.listen()
            },
            this.disable = function () {
              a.dispatchEvent('disable'),
              s.drag.stopListening()
            },
            this.settings = function (t) {
              a.deepExtend(r, t)
            },
            this.state = function () {
              var t,
              e = s.translate.get.matrix(4);
              return t = e === r.maxPosition ? 'left' : e === r.minPosition ? 'right' : 'closed',
              {
                state: t,
                info: i.simpleStates
              }
            },
            u(n)
          };
          'undefined' != typeof module && module.exports && (module.exports = n),
          'undefined' == typeof ender && (this.Snap = n),
          'function' == typeof define && define.amd && define('snap', [
          ], function () {
            return n
          })
        }.call(this, window, document), angular.module('snap', [
        ]), function () {
          'use strict';
          var t = [
            1,
            8,
            1
          ],
          e = {
            full: t.join('.'),
            major: t[0],
            minor: t[1],
            patch: t[2]
          };
          angular.module('snap').constant('SNAP_VERSION', e)
        }(), angular.module('snap').directive('snapClose', [
          '$rootScope',
          'snapRemote',
          function (t, e) {
            'use strict';
            return {
              restrict: 'A',
              link: function (n, r, i) {
                r.bind('click', function () {
                  e.close(n.$eval(i.snapId)),
                  t.$digest()
                })
              }
            }
          }
        ]), angular.module('snap').directive('snapContent', [
          'SnapConstructor',
          'snapRemote',
          function (t, e) {
            'use strict';
            return {
              restrict: 'AE',
              link: function (n, r, i) {
                r.addClass('snap-content');
                var o = i.snapId;
                o && (o = n.$eval(i.snapId));
                var a = angular.extend({
                }, e.globalOptions),
                s = function (t, r) {
                  n.$watch(function () {
                    return n.$eval(t)
                  }, function (t, n) {
                    angular.isDefined(n) && t !== n && e.getSnapper(o).then(function (e) {
                      var n = {
                      };
                      n[r] = t,
                      e.settings(n)
                    })
                  })
                };
                angular.forEach(i, function (t, e) {
                  0 === e.indexOf('snapOpt') && (e = e.substring(7), e.length && (e = e[0].toLowerCase() + e.substring(1), a[e] = n.$eval(t), s(t, e)))
                }),
                a.element = r[0],
                angular.isDefined(i.snapOptions) && i.snapOptions && angular.extend(a, n.$eval(i.snapOptions)),
                e.register(new t(a), o),
                angular.isDefined(i.snapOptions) && i.snapOptions && n.$watch(i.snapOptions, function (t) {
                  e.getSnapper(o).then(function (e) {
                    e.settings(t)
                  })
                }, !0),
                n.$on('$destroy', function () {
                  e.unregister(o)
                })
              }
            }
          }
        ]), angular.module('snap').directive('snapDragger', [
          'snapRemote',
          function (t) {
            'use strict';
            return {
              restrict: 'AE',
              link: function (e, n, r) {
                var i = e.$eval(r.snapId);
                t.getSnapper(i).then(function (t) {
                  t.settings({
                    dragger: n[0]
                  })
                })
              }
            }
          }
        ]), angular.module('snap').directive('snapDrawer', function () {
          'use strict';
          return {
            restrict: 'AE',
            link: function (t, e, n) {
              e.addClass('snap-drawer');
              var r = e.parent(),
              i = !0;
              for (e.addClass('right' === n.snapDrawer ? 'snap-drawer-right' : 'snap-drawer-left'); r.length; ) r.hasClass('snap-drawers') && (i = !1),
              r = r.parent();
              i && e.wrap('<div class="snap-drawers" />')
            }
          }
        }), angular.module('snap').directive('snapDrawers', function () {
          'use strict';
          return {
            restrict: 'AE',
            compile: function (t, e) {
              t.addClass('snap-drawers')
            }
          }
        }), angular.module('snap').directive('snapToggle', [
          '$rootScope',
          'snapRemote',
          function (t, e) {
            'use strict';
            return {
              restrict: 'A',
              link: function (n, r, i) {
                var o = i.snapId,
                a = i.snapToggle || 'left';
                if (o && (o = n.$eval(o)), !i.snapUnsafe) {
                  var s = !1;
                  r.bind('mousedown', function (t) {
                    s = !0,
                    t.stopImmediatePropagation()
                  }),
                  r.bind('mouseup', function (t) {
                    s && t.stopImmediatePropagation(),
                    s = !1
                  })
                }
                r.bind('click', function () {
                  e.toggle(a, o),
                  t.$digest()
                })
              }
            }
          }
        ]), angular.module('snap').provider('SnapConstructor', function () {
          'use strict';
          var t = window.Snap;
          this.use = function (e) {
            t = e
          },
          this.$get = function () {
            return t
          }
        }), angular.module('snap').provider('snapRemote', function () {
          'use strict';
          var t = this;
          return this.globalOptions = {
          },
          this.$get = [
            '$q',
            function (e) {
              var n,
              r,
              i = {
              },
              o = '__DEFAULT_SNAPPER_ID__',
              a = {
              };
              return a.globalOptions = t.globalOptions,
              a.getSnapper = function (t) {
                return t = t || o,
                i.hasOwnProperty(t) || n(t),
                i[t].deferred.promise
              },
              a.register = function (t, e) {
                e = e || o,
                i.hasOwnProperty(e) || n(e),
                i[e].isResolved && n(e),
                r(t, e)
              },
              a.unregister = function (t) {
                t = t || o,
                i.hasOwnProperty(t) && delete i[t]
              },
              a.toggle = function (t, e) {
                e = e || o,
                a.getSnapper(e).then(function (n) {
                  t === n.state().state ? a.close(e)  : a.open(t, e)
                })
              },
              a.open = function (t, e) {
                e = e || o,
                a.getSnapper(e).then(function (e) {
                  e.open(t)
                })
              },
              a.close = function (t) {
                t = t || o,
                a.getSnapper(t).then(function (t) {
                  t.close()
                })
              },
              a.expand = function (t, e) {
                e = e || o,
                a.getSnapper(e).then(function (e) {
                  e.expand(t)
                })
              },
              a.enable = function (t) {
                t = t || o,
                a.getSnapper(t).then(function (t) {
                  t.enable()
                })
              },
              a.disable = function (t) {
                t = t || o,
                a.getSnapper(t).then(function (t) {
                  t.disable()
                })
              },
              n = function (t) {
                i[t] = {
                  deferred: e.defer(),
                  isResolved: !1
                }
              },
              r = function (t, e) {
                i[e].deferred.resolve(t),
                i[e].isResolved = !0
              },
              a
            }
          ],
          this
        });
