// ==UserScript==
// @name           AdsBypasserLite
// @namespace      AdsBypasser
// @description    Bypass Ads
// @copyright      2012+, Wei-Cheng Pan (legnaleurc)
// @version        5.6.0
// @license        BSD
// @homepageURL    https://adsbypasser.github.io/
// @supportURL     https://github.com/adsbypasser/adsbypasser/issues
// @updateURL      https://adsbypasser.github.io/releases/adsbypasserlite.meta.js
// @downloadURL    https://adsbypasser.github.io/releases/adsbypasserlite.user.js
// @icon           https://raw.githubusercontent.com/adsbypasser/adsbypasser/v5.6.0/img/logo.png
// @grant          unsafeWindow
// @grant          GM_xmlhttpRequest
// @grant          GM_addStyle
// @grant          GM_getResourceText
// @grant          GM_getResourceURL
// @grant          GM_getValue
// @grant          GM_openInTab
// @grant          GM_registerMenuCommand
// @grant          GM_setValue
// @run-at         document-start
// @resource       alignCenter https://raw.githubusercontent.com/adsbypasser/adsbypasser/v5.6.0/css/align_center.css
// @resource       scaleImage https://raw.githubusercontent.com/adsbypasser/adsbypasser/v5.6.0/css/scale_image.css
// @resource       bgImage https://raw.githubusercontent.com/adsbypasser/adsbypasser/v5.6.0/img/imagedoc-darknoise.png
// @include        http://*
// @include        https://*
// ==/UserScript==

var _ = typeof module !== 'undefined' ? module.exports : {};
(function () {
  'use strict';
  function setupStack () {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else if (!this.hasOwnProperty('stack')) {
      var stack = (new Error()).stack.split('\n').slice(2);
      var e = stack[0].match(/^.*@(.*):(\d*)$/);
      this.fileName = e[1];
      this.lineNumber = parseInt(e[2], 10);
      this.stack = stack.join('\n');
    }
  }
  function AdsBypasserError (message) {
    setupStack.call(this);
    this.message = message;
  }
  AdsBypasserError.prototype = Object.create(Error.prototype);
  AdsBypasserError.prototype.constructor = AdsBypasserError;
  AdsBypasserError.prototype.name = 'AdsBypasserError';
  AdsBypasserError.extend = function (protoProps, staticProps) {
    var parent = this, child = function () {
      setupStack.call(this);
      protoProps.constructor.apply(this, arguments);
    };
    extend(child, parent, staticProps);
    child.prototype = Object.create(parent.prototype);
    extend(child.prototype, protoProps);
    child.prototype.constructor = child;
    child.super = parent.prototype;
    return child;
  };
  AdsBypasserError.super = null;
  _.AdsBypasserError = AdsBypasserError;
  function any (c, fn) {
    if (c.some) {
      return c.some(fn);
    }
    if (typeof c.length === 'number') {
      return Array.prototype.some.call(c, fn);
    }
    return Object.keys(c).some(function (k) {
      return fn(c[k], k, c);
    });
  }
  function all (c, fn) {
    if (c.every) {
      return c.every(fn);
    }
    if (typeof c.length === 'number') {
      return Array.prototype.every.call(c, fn);
    }
    return Object.keys(c).every(function (k) {
      return fn(c[k], k, c);
    });
  }
  function each (c, fn) {
    if (c.forEach) {
      c.forEach(fn);
    } else if (typeof c.length === 'number') {
      Array.prototype.forEach.call(c, fn);
    } else {
      Object.keys(c).forEach(function (k) {
        fn(c[k], k, c);
      });
    }
  }
  function map (c, fn) {
    if (c.map) {
      return c.map(fn);
    }
    if (typeof c.length === 'number') {
      return Array.prototype.map.call(c, fn);
    }
    return Object.keys(c).map(function (k) {
      return fn(c[k], k, c);
    });
  }
  function extend(c) {
    Array.prototype.slice.call(arguments, 1).forEach(function (source) {
      if (!source) {
        return;
      }
      _.C(source).each(function (v, k) {
        c[k] = v;
      });
    });
    return c;
  }
  function CollectionProxy (collection) {
    this._c = collection;
  }
  CollectionProxy.prototype.size = function () {
    if (typeof this._c.length === 'number') {
      return this._c.length;
    }
    return Object.keys(c).length;
  };
  CollectionProxy.prototype.at = function (k) {
    return this._c[k];
  };
  CollectionProxy.prototype.each = function (fn) {
    each(this._c, fn);
    return this;
  };
  CollectionProxy.prototype.find = function (fn) {
    var result;
    any(this._c, function (value, index, self) {
      var tmp = fn(value, index, self);
      if (tmp !== _.nop) {
        result = {
          key: index,
          value: value,
          payload: tmp,
        };
        return true;
      }
      return false;
    });
    return result;
  };
  CollectionProxy.prototype.all = function (fn) {
    return all(this._c, fn);
  };
  CollectionProxy.prototype.map = function (fn) {
    return map(this._c, fn);
  };
  _.C = function (collection) {
    return new CollectionProxy(collection);
  };
  _.T = function (s) {
    if (typeof s === 'string') {
    } else if (s instanceof String) {
      s = s.toString();
    } else {
      throw new AdsBypasserError('template must be a string');
    }
    var T = {
      '{{': '{',
      '}}': '}',
    };
    return function () {
      var args = Array.prototype.slice.call(arguments);
      var kwargs = args[args.length-1];
      return s.replace(/\{\{|\}\}|\{([^\}]+)\}/g, function (m, key) {
        if (T.hasOwnProperty(m)) {
          return T[m];
        }
        if (args.hasOwnProperty(key)) {
          return args[key];
        }
        if (kwargs.hasOwnProperty(key)) {
          return kwargs[key];
        }
        return m;
      });
    };
  };
  _.P = function (fn) {
    if (typeof fn !== 'function') {
      throw new _.AdsBypasserError('must give a function');
    }
    var slice = Array.prototype.slice;
    var args = slice.call(arguments, 1);
    return function () {
      return fn.apply(this, args.concat(slice.call(arguments)));
    };
  };
  _.nop = function () {
  };
  function log (method, args) {
    args = Array.prototype.slice.call(args);
    if (typeof args[0] === 'string' || args[0] instanceof String) {
      args[0] = 'AdsBypasser: ' + args[0];
    } else {
      args.unshift('AdsBypasser:');
    }
    var f = console[method];
    if (typeof f === 'function') {
      f.apply(console, $.inject(args));
    }
  }
  _.info = function () {
    log('info', arguments);
  };
  _.warn = function () {
    log('warn', arguments);
  };
})();

var $;
(function () {
  'use strict';
  function bootstrap (context) {
    var _ = context._;
    var window = context.window;
    var unsafeWindow = context.unsafeWindow;
    var GM = context.GM;
    var document = window.document;
    var DomNotFoundError = _.AdsBypasserError.extend({
      name: 'DomNotFoundError',
      constructor: function (selector) {
        DomNotFoundError.super.constructor.call(this, _.T('`{0}` not found')(selector));
      },
    });
    var $ = function (selector, context) {
      if (!context || !context.querySelector) {
        context = document;
      }
      var n = context.querySelector(selector);
      if (!n) {
        throw new DomNotFoundError(selector);
      }
      return n;
    };
    $.$ = function (selector, context) {
      try {
        return $(selector, context);
      } catch (e) {
        return null;
      }
    };
    $.$$ = function (selector, context) {
      if (!context || !context.querySelectorAll) {
        context = document;
      }
      var ns = context.querySelectorAll(selector);
      return _.C(ns);
    };
    function deepJoin (prefix, object) {
      return _.C(object).map(function (v, k) {
        var key = _.T('{0}[{1}]')(prefix, k);
        if (typeof v === 'object') {
          return deepJoin(key, v);
        }
        return _.T('{0}={1}').apply(this, [key, v].map(encodeURIComponent));
      }).join('&');
    }
    function toQuery (data) {
      if (typeof data === 'string') {
        return data;
      }
      if (data instanceof String) {
        return data.toString();
      }
      return _.C(data).map(function (v, k) {
        if (typeof v === 'object') {
          return deepJoin(k, v);
        }
        return _.T('{0}={1}').apply(this, [k, v].map(encodeURIComponent));
      }).join('&');
    }
    function ajax (method, url, data, headers, callback) {
      var l = document.createElement('a');
      l.href = url;
      var reqHost = l.hostname;
      headers.Host = reqHost || window.location.host;
      headers.Origin = window.location.origin;
      headers.Referer = window.location.href;
      headers['X-Requested-With'] = 'XMLHttpRequest';
      var controller = GM.xmlhttpRequest({
        method: method,
        url: url,
        data: data,
        headers: headers,
        onload: function (response) {
          var headers = {
            get: function (key) {
              return this[key.toLowerCase()];
            },
          };
          response.responseHeaders.split(/[\r\n]+/g).filter(function (v) {
            return v.length !== 0;
          }).map(function (v) {
            return v.split(/:\s+/);
          }).forEach(function (v) {
            headers[v[0].toLowerCase()] = v[1];
          });
          callback(response.responseText, headers);
        },
      });
      return controller;
    }
    $.toDOM = function(rawHTML) {
      try {
        var parser = new DOMParser();
        var DOMHTML = parser.parseFromString(rawHTML, "text/html");
        return DOMHTML;
      } catch (e) {
        throw new _.AdsBypasserError('could not parse HTML to DOM');
      }
    };
    $.get = function (url, data, callback, headers) {
      data = toQuery(data);
      data = data!==''? '?' + data : '';
      headers = headers || {};
      return ajax('GET', url + data, '', headers, callback);
    };
    $.post = function (url, data, callback, headers) {
      data = toQuery(data);
      var h = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Content-Length': data.length,
      };
      if (headers) {
        _.C(headers).each(function (v, k) {
          h[k] = v;
        });
      }
      return ajax('POST', url, data, h, callback);
    };
    function go (path, params, method) {
      method = method || 'post';
      var form = document.createElement('form');
      form.method = method;
      form.action = path;
      _.C(params).each(function (value, key) {
          var input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = value;
          form.appendChild(input);
      });
      document.body.appendChild(form);
      form.submit();
    }
    $.openLinkByPost = function (url, data) {
      go(url, data, 'post');
    };
    $.openLink = function (to) {
      if (!to) {
        _.warn('false URL');
        return;
      }
      var from = window.location.toString();
      _.info(_.T('{0} -> {1}')(from, to));
      window.top.location.replace(to);
    };
    $.openLinkWithReferer = function (to) {
      if (!to) {
        _.warn('false URL');
        return;
      }
      var from = window.location.toString();
      _.info(_.T('{0} -> {1}')(from, to));
      var a = document.createElement('a');
      a.href = to;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
    };
    $.openImage = function (imgSrc) {
      if (config.redirectImage) {
        $.openLink(imgSrc);
      }
    };
    $.removeAllTimer = function () {
      var intervalID = window.setInterval(_.nop, 10);
      while (intervalID > 0) {
        window.clearInterval(intervalID--);
      }
    };
    $.enableScrolling = function () {
      var o = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;
      o.style.overflow = '';
    };
    function toggleShrinking () {
      this.classList.toggle('adsbypasser-shrinked');
    }
    function checkScaling () {
      var nw = this.naturalWidth;
      var nh = this.naturalHeight;
      var cw = document.documentElement.clientWidth;
      var ch = document.documentElement.clientHeight;
      if ((nw > cw || nh > ch) && !this.classList.contains('adsbypasser-resizable')) {
        this.classList.add('adsbypasser-resizable');
        this.classList.add('adsbypasser-shrinked');
        this.addEventListener('click', toggleShrinking);
      } else {
        this.removeEventListener('click', toggleShrinking);
        this.classList.remove('adsbypasser-shrinked');
        this.classList.remove('adsbypasser-resizable');
      }
    }
    function scaleImage (i) {
      var style = GM.getResourceText('scaleImage');
      GM.addStyle(style);
      if (i.naturalWidth && i.naturalHeight) {
        checkScaling.call(i);
      } else {
        i.addEventListener('load', checkScaling);
      }
      var h;
      window.addEventListener('resize', function () {
        window.clearTimeout(h);
        h = window.setTimeout(checkScaling.bind(i), 100);
      });
    }
    function changeBackground () {
      var bgImage = GM.getResourceURL('bgImage');
      document.body.style.backgroundColor = '#222222';
      document.body.style.backgroundImage = _.T('url(\'{0}\')')(bgImage);
    }
    function alignCenter () {
      var style = GM.getResourceText('alignCenter');
      GM.addStyle(style);
    }
    function injectStyle (d, i) {
      $.removeNodes('style, link[rel=stylesheet]');
      d.id = 'adsbypasser-wrapper';
      i.id = 'adsbypasser-image';
    }
    $.replace = function (imgSrc) {
      if (!config.redirectImage) {
        return;
      }
      if (!imgSrc) {
        _.warn('false url');
        return;
      }
      _.info(_.T('replacing body with `{0}` ...')(imgSrc));
      $.removeAllTimer();
      $.enableScrolling();
      document.body = document.createElement('body');
      var d = document.createElement('div');
      document.body.appendChild(d);
      var i = document.createElement('img');
      i.src = imgSrc;
      d.appendChild(i);
      if (config.alignCenter || config.scaleImage) {
        injectStyle(d, i);
      }
      if (config.alignCenter) {
        alignCenter();
      }
      if (config.changeBackground) {
        changeBackground();
      }
      if (config.scaleImage) {
        scaleImage(i);
      }
    };
    $.removeNodes = function (selector, context) {
      $.$$(selector, context).each(function (e) {
        e.parentNode.removeChild(e);
      });
    };
    function searchScriptsByRegExp (pattern, context) {
      var m = $.$$('script', context).find(function (s) {
        var m = s.innerHTML.match(pattern);
        if (!m) {
          return _.nop;
        }
        return m;
      });
      if (!m) {
        return null;
      }
      return m.payload;
    }
    function searchScriptsByString (pattern, context) {
      var m = $.$$('script', context).find(function (s) {
        var m = s.innerHTML.indexOf(pattern);
        if (m < 0) {
          return _.nop;
        }
        return m;
      });
      if (!m) {
        return null;
      }
      return m.value.innerHTML;
    }
    $.searchScripts = function (pattern, context) {
      if (pattern instanceof RegExp) {
        return searchScriptsByRegExp(pattern, context);
      } else if (typeof pattern === 'string') {
        return searchScriptsByString(pattern, context);
      } else {
        return null;
      }
    };
    $.setCookie = function (key, value) {
      var now = new Date();
      now.setTime(now.getTime() + 3600 * 1000);
      var tpl = _.T('{0}={1};path=/;');
      document.cookie = tpl(key, value, now.toUTCString());
    };
    $.getCookie = function (key) {
      var c = _.C(document.cookie.split(';')).find(function (v) {
        var k = v.replace(/^\s*(\w+)=.+$/, '$1');
        if (k !== key) {
          return _.nop;
        }
      });
      if (!c) {
        return null;
      }
      c = c.value.replace(/^\s*\w+=([^;]+).+$/, '$1');
      if (!c) {
        return null;
      }
      return c;
    };
    $.resetCookies = function () {
      var a = document.domain;
      var b = document.domain.replace(/^www\./, '');
      var c = document.domain.replace(/^(\w+\.)+?(\w+\.\w+)$/, '$2');
      var d = (new Date(1e3)).toUTCString();
      _.C(document.cookie.split(';')).each(function (v) {
        var k = v.replace(/^\s*(\w+)=.+$/, '$1');
        document.cookie = _.T('{0}=;expires={1};')(k, d);
        document.cookie = _.T('{0}=;path=/;expires={1};')(k, d);
        var e = _.T('{0}=;path=/;domain={1};expires={2};');
        document.cookie = e(k, a, d);
        document.cookie = e(k, b, d);
        document.cookie = e(k, c, d);
      });
    };
    $.captcha = function (imgSrc, cb) {
      if (!config.externalServerSupport) {
        return;
      }
      var a = document.createElement('canvas');
      var b = a.getContext('2d');
      var c = new Image();
      c.src = imgSrc;
      c.onload = function () {
        a.width = c.width;
        a.height = c.height;
        b.drawImage(c, 0, 0);
        var d = a.toDataURL();
        var e = d.substr(d.indexOf(',') + 1);
        $.post('http://www.wcpan.info/cgi-bin/captcha.cgi', {
          i: e,
        }, cb);
      };
    };
    function injectClone (vaccine) {
      var injected;
      if (typeof cloneInto !== 'function') {
        injected = vaccine;
      } else {
        injected = cloneInto(vaccine, unsafeWindow, {
          cloneFunctions: true,
        });
      }
      return injected;
    }
    function injectFunction (vaccine) {
      var injected;
      if (typeof exportFunction !== 'function') {
        injected = vaccine;
      } else {
        try {
          injected = exportFunction(vaccine, unsafeWindow);
        } catch(e) {
          console.error(e);
        }
      }
      return injected;
    }
    function injectReference () {
      var injected;
      if (typeof createObjectIn !== 'function') {
        injected = {};
      } else {
        injected = createObjectIn(unsafeWindow);
      }
      return injected;
    }
    $.inject = function (vaccine) {
      if (typeof vaccine === 'function') {
        return injectFunction(vaccine);
      } else if (typeof vaccine === 'undefined') {
        return injectReference();
      } else {
        return injectClone(vaccine);
      }
    };
    var patterns = [];
    $.register = function (pattern) {
      patterns.push(pattern);
    };
    function load () {
      var tmp = {
        version: GM.getValue('version', 0),
        alignCenter: GM.getValue('align_center'),
        changeBackground: GM.getValue('change_background'),
        externalServerSupport: GM.getValue('external_server_support'),
        redirectImage: GM.getValue('redirect_image'),
        scaleImage: GM.getValue('scale_image'),
      };
      fixup(tmp);
      save(tmp);
      return tmp;
    }
    function save (c) {
      GM.setValue('version', c.version);
      GM.setValue('align_center', c.alignCenter);
      GM.setValue('change_background', c.changeBackground);
      GM.setValue('external_server_support', c.externalServerSupport);
      GM.setValue('redirect_image', c.redirectImage);
      GM.setValue('scale_image', c.scaleImage);
    }
    function fixup (c) {
      var patches = [
        function (c) {
          var ac = typeof c.alignCenter !== 'undefined';
          if (typeof c.changeBackground === 'undefined') {
            c.changeBackground = ac ? c.alignCenter : true;
          }
          if (typeof c.scaleImage === 'undefined') {
            c.scaleImage = ac ? c.alignCenter : true;
          }
          if (!ac) {
            c.alignCenter = true;
          }
          if (typeof c.redirectImage === 'undefined') {
            c.redirectImage = true;
          }
        },
        function (c) {
          if (typeof c.externalServerSupport === 'undefined') {
            c.externalServerSupport = false;
          }
        },
      ];
      while (c.version < patches.length) {
        patches[c.version](c);
        ++c.version;
      }
    }
    var config = null;
    $.register({
      rule: {
        host: /^adsbypasser\.github\.io$/,
        path: /^\/configure\.html$/,
      },
      ready: function () {
        unsafeWindow.commit = $.inject(function (data) {
          data.version = config.version;
          _.C(data).each(function (v, k) {
            config[k] = v;
          });
          setTimeout(function () {
            save(data);
          }, 0);
        });
        unsafeWindow.render($.inject({
          version: config.version,
          options: {
            alignCenter: {
              type: 'checkbox',
              value: config.alignCenter,
              label: 'Align Center',
              help: 'Align image to the center if possible. (default: enabled)',
            },
            changeBackground: {
              type: 'checkbox',
              value: config.changeBackground,
              label: 'Change Background',
              help: 'Use Firefox-like image background if possible. (default: enabled)',
            },
            redirectImage: {
              type: 'checkbox',
              value: config.redirectImage,
              label: 'Redirect Image',
              help: [
                'Directly open image link if possible. (default: enabled)',
                'If disabled, redirection will only works on link shortener sites.',
              ].join('<br/>\n'),
            },
            scaleImage: {
              type: 'checkbox',
              value: config.scaleImage,
              label: 'Scale Image',
              help: 'When image loaded, scale it to fit window if possible. (default: enabled)',
            },
            externalServerSupport: {
              type: 'checkbox',
              value: config.externalServerSupport,
              label: 'External Server Support',
              help: [
                'Send URL information to external server to enhance features (e.g.: captcha resolving). (default: disabled)',
                'Affected sites:',
                'urlz.so (captcha)',
              ].join('<br/>\n'),
            },
          },
        }));
      },
    });
    function dispatchByObject (rule, url_6) {
      var matched = {};
      var passed = _.C(rule).all(function (pattern, part) {
        if (pattern instanceof RegExp) {
          matched[part] = url_6[part].match(pattern);
        } else if (pattern instanceof Array) {
          var r = _.C(pattern).find(function (p) {
            var m = url_6[part].match(p);
            return m || _.nop;
          });
          matched[part] = r ? r.payload : null;
        }
        return !!matched[part];
      });
      return passed ? matched : null;
    }
    function dispatchByRegExp (rule, url_1) {
      return url_1.match(rule);
    }
    function dispatchByArray (byLocation, rules, url_1, url_3, url_6) {
      var tmp = _.C(rules).find(function (rule) {
        var m = dispatch(byLocation, rule, url_1, url_3, url_6);
        if (!m) {
          return _.nop;
        }
        return m;
      });
      return tmp ? tmp.payload : null;
    }
    function dispatchByString (rule, url_3) {
      var scheme = /\*|https?|file|ftp|chrome-extension/;
      var host = /\*|(\*\.)?([^\/*]+)/;
      var path = /\/.*/;
      var up = new RegExp(_.T('^({scheme})://({host})?({path})$')({
        scheme: scheme.source,
        host: host.source,
        path: path.source,
      }));
      var matched = rule.match(up);
      if (!matched) {
        return null;
      }
      scheme = matched[1];
      host = matched[2];
      var wc = matched[3];
      var sd = matched[4];
      path = matched[5];
      if (scheme === '*' && !/https?/.test(url_3.scheme)) {
        return null;
      } else if (scheme !== url_3.scheme) {
        return null;
      }
      if (scheme !== 'file' && host !== '*') {
        if (wc) {
          up = url_3.host.indexOf(sd);
          if (up < 0 || up + sd.length !== url_3.host.length) {
            return null;
          }
        } else if (host !== url_3.host) {
          return null;
        }
      }
      path = new RegExp(_.T('^{0}$')(path.replace(/[*.\[\]?+#]/g, function (c) {
        if (c === '*') {
          return '.*';
        }
        return '\\' + c;
      })));
      if (!path.test(url_3.path)) {
        return null;
      }
      return url_3;
    }
    function dispatchByFunction (rule, url_1, url_3, url_6) {
      return rule(url_1, url_3, url_6);
    }
    function dispatch (byLocation, rule, url_1, url_3, url_6) {
      if (rule instanceof Array) {
        return dispatchByArray(byLocation, rule, url_1, url_3, url_6);
      }
      if (!byLocation) {
        if (typeof rule !== 'function') {
          return null;
        }
        return dispatchByFunction(rule, url_1, url_3, url_6);
      }
      if (rule instanceof RegExp) {
        return dispatchByRegExp(rule, url_1);
      }
      if (typeof rule === 'string' || rule instanceof String) {
        return dispatchByString(rule, url_3);
      }
      if (typeof rule === 'function') {
        return null;
      }
      return dispatchByObject(rule, url_6);
    }
    function findHandler (byLocation) {
      var url_1 = window.location.toString();
      var url_3 = {
        scheme: window.location.protocol.slice(0, -1),
        host: window.location.host,
        path: window.location.pathname + window.location.search + window.location.hash,
      };
      var url_6 = {
        scheme: window.location.protocol,
        host: window.location.hostname,
        port: window.location.port,
        path: window.location.pathname,
        query: window.location.search,
        hash: window.location.hash,
      };
      var pattern = _.C(patterns).find(function (pattern) {
        var m = dispatch(byLocation, pattern.rule, url_1, url_3, url_6);
        if (!m) {
          return _.nop;
        }
        return m;
      });
      if (!pattern) {
        return null;
      }
      var matched = pattern.payload;
      pattern = pattern.value;
      if (!pattern.start && !pattern.ready) {
        return null;
      }
      return {
        start: pattern.start ? _.P(pattern.start, matched) : _.nop,
        ready: pattern.ready ? _.P(pattern.ready, matched) : _.nop,
      };
    }
    function disableWindowOpen () {
      unsafeWindow.open = _.nop;
    }
    function disableLeavePrompt () {
      var seal = {
        set: function () {
          _.info('blocked onbeforeunload');
        },
      };
      _.C([unsafeWindow, unsafeWindow.document.body]).each(function (o) {
        if (!o) {
          return;
        }
        o.onbeforeunload = undefined;
        Object.defineProperty(o, 'onbeforeunload', seal);
      });
    }
    $._main = function (isNodeJS) {
      delete $._main;
      if (isNodeJS) {
        config = load();
        return;
      }
      if (window.top !== window.self) {
        return;
      }
      var handler = findHandler(true);
      if (handler) {
        config = load();
        _.info('working on\n%s \nwith\n%o', window.location.toString(), config);
        disableWindowOpen();
        handler.start();
        document.addEventListener('DOMContentLoaded', function () {
            disableLeavePrompt();
            handler.ready();
        });
      } else {
        _.info('does not match location on `%s`, will try HTML content', window.location.toString());
        document.addEventListener('DOMContentLoaded', function () {
          handler = findHandler(false);
          if (!handler) {
            _.info('does not match HTML content on `%s`', window.location.toString());
            return;
          }
          config = load();
          _.info('working on\n%s \nwith\n%o', window.location.toString(), config);
          disableWindowOpen();
          disableLeavePrompt();
          handler.ready();
        });
      }
    };
    GM.registerMenuCommand('AdsBypasser - Configure', function () {
      GM.openInTab('https://adsbypasser.github.io/configure.html');
    });
    return $;
  }
  if (typeof module !== 'undefined') {
    module.exports = bootstrap;
  } else {
    $ = bootstrap({
      _: _,
      window: window,
      unsafeWindow: unsafeWindow,
      GM: {
        getValue: GM_getValue,
        setValue: GM_setValue,
        xmlhttpRequest: GM_xmlhttpRequest,
        getResourceText: GM_getResourceText,
        addStyle: GM_addStyle,
        getResourceURL: GM_getResourceURL,
        openInTab: GM_openInTab,
        registerMenuCommand: GM_registerMenuCommand,
      },
    });
  }
})();

$.register({
  rule: {
    host: /^01\.nl$/,
  },
  ready: function () {
    'use strict';
    var f = $('iframe#redirectframe');
    $.openLink(f.src);
  },
});

$.register({
  rule: {
    host: /^(www\.)?1be\.biz$/,
    path: /^\/s\.php$/,
    query: /^\?(.+)/,
  },
  start: function (m) {
    'use strict';
    $.openLink(m.query[1]);
  },
});

$.register({
  rule: {
    host: /^(www\.)?1tiny\.net$/,
    path: /\/\w+/
  },
  ready: function () {
    'use strict';
    var rUrl = /window\.location='([^']+)';/;
    var directUrl = $.$$('script').find(function (script) {
     var m = rUrl.exec(script.innerHTML);
      if (!m) {
       return _.nop;
      }
      return m[1];
    });
    if (!directUrl) {
      throw new _.AdsBypasserError('script content changed');
    }
    $.openLink(directUrl.payload);
  },
});

$.register({
  rule: {
    host: /^2ty\.cc$/,
    path: /^\/.+/,
  },
  ready: function () {
    'use strict';
    $.removeNodes('iframe');
    var a = $('#close');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /^(www\.)?3ra\.be$/,
  },
  ready: function () {
    'use strict';
    $.removeNodes('iframe');
    var f = unsafeWindow.fc;
    if (!f) {
      throw new _.AdsBypasserError('window.fc is undefined');
    }
    f = f.toString();
    f = f.match(/href="([^"]*)/);
    if (!f) {
      throw new _.AdsBypasserError('url pattern outdated');
    }
    $.openLink(f[1]);
  },
});

$.register({
  rule: {
    host: /^(www\.)?4fun\.tw$/,
  },
  ready: function () {
    'use strict';
    var i = $('#original_url');
    $.openLink(i.value);
  },
});

(function () {
  'use strict';
  $.register({
    rule: {
      host: /^ad7.biz$/,
      path: /^\/\d+\/(.*)$/,
    },
    start: function (m) {
      $.removeNodes('iframe');
      var redirectLink = m.path[1];
      if (!redirectLink.match(/^https?:\/\//)) {
        redirectLink = "http://" + redirectLink;
      }
      $.openLink(redirectLink);
    },
  });
  $.register({
    rule: {
      host: /^ad7.biz$/,
      path: /^\/\w+$/,
    },
    ready: function () {
      $.removeNodes('iframe');
      var script = $.searchScripts('var r_url');
      var url = script.match(/&url=([^&]+)/);
      url = url[1];
      $.openLink(url);
    },
  });
})();

$.register({
  rule: {
    host: /^(www\.)?adb\.ug$/,
    path: /^(?!\/(?:privacy|terms|contact(\/.*)?|#.*)?$).*$/
  },
  ready: function () {
    'use strict';
    $.removeNodes('iframe');
    var m = $.searchScripts(/top\.location\.href="([^"]+)"/);
    if (m) {
      $.openLink(m[1]);
      return;
    }
    m = $.searchScripts(/\{_args.+\}\}/);
    if (!m) {
      throw new _.AdsBypasserError('script content changed');
    }
    m = eval('(' + m[0] + ')');
    var url = window.location.pathname + '/skip_timer';
    var i = setInterval(function () {
      $.post(url, m, function (text) {
        var jj = JSON.parse(text);
        if (!jj.errors && jj.messages) {
          clearInterval(i);
          $.openLink(jj.messages.url);
        }
      });
    }, 1000);
  },
});

(function () {
  'use strict';
  $.register({
    rule: {
      path: /\/locked$/,
      query: /url=([^&]+)/,
    },
    start: function (m) {
      $.resetCookies();
      $.openLink('/' + m.query[1]);
    },
  });
  $.register({
    rule: function () {
      var h = $.$('html[id="adfly_html"]');
      var b = $.$('body[id="home"]');
      if (h && b) {
        return true;
      } else {
        return null;
      }
    },
    ready: function () {
      var h = $.$('#adfly_html'), b = $.$('#home');
      if (!h || !b || h.nodeName !== 'HTML' || b.nodeName !== 'BODY') {
        return;
      }
      $.removeNodes('iframe');
      unsafeWindow.cookieCheck = $.inject(_.nop);
      h = unsafeWindow.eu;
      if (!h) {
        h = $('#adfly_bar');
        unsafeWindow.close_bar();
        return;
      }
      var a = h.indexOf('!HiTommy');
      if (a >= 0) {
        h = h.substring(0, a);
      }
      a = '';
      b = '';
      for (var i = 0; i < h.length; ++i) {
        if (i % 2 === 0) {
          a = a + h.charAt(i);
        } else {
          b = h.charAt(i) + b;
        }
      }
      h = atob(a + b);
      h = h.substr(2);
      if (location.hash) {
        h += location.hash;
      }
      $.openLinkWithReferer(h);
    },
  });
  $.register({
    rule: 'http://ad7.biz/*',
    ready: function () {
      $.removeNodes('iframe');
      $.resetCookies();
      var script = $.$$('script').find(function (v) {
        if (v.innerHTML.indexOf('var r_url') < 0) {
          return _.nop;
        }
        return v.innerHTML;
      });
      var url = script.payload.match(/&url=([^&]+)/);
      url = url[1];
      $.openLinkWithReferer(url);
    },
  });
})();

$.register({
  rule: 'http://adfoc.us/*',
  ready: function () {
    'use strict';
    var root = document.body;
    var observer = new MutationObserver(function (mutations) {
      var o = $.$('#showSkip');
      if (o) {
        observer.disconnect();
        o = o.querySelector('a');
        $.openLink(o.href);
      }
    });
    observer.observe(root, {
      childList: true,
      subtree: true,
    });
  },
});

$.register({
  rule: {
    host: /^(www\.)?adjet\.biz$/,
  },
  ready: function () {
    'use strict';
    var m = $.searchScripts(/href=(\S+)/);
    if (!m) {
      throw new _.AdsBypasserError('site changed');
    }
    $.openLink(m[1]);
  },
});

$.register({
  rule: {
    host: /^adlock\.org$/,
  },
  ready: function () {
    'use strict';
    var a = $.$('#xre a.xxr, #downloadButton1');
    if (a) {
      $.openLink(a.href);
      return;
    }
    a = unsafeWindow.fileLocation;
    if (a) {
      $.openLink(a);
    }
  },
});

$.register({
  rule: {
    host: /^(www\.)?adlot\.us$/,
  },
  ready: function () {
    'use strict';
    $.removeNodes('iframe');
    var script = $.$$('script').find(function (v) {
      if (v.innerHTML.indexOf('form') < 0) {
        return _.nop;
      }
      return v.innerHTML;
    });
    var p = /name='([^']+)' value='([^']+)'/g;
    var opt = {
      image: ' ',
    };
    var tmp = null;
    while (tmp = p.exec(script.payload)) {
      opt[tmp[1]] = tmp[2];
    }
    $.openLinkByPost('', opt);
  },
});

$.register({
  rule: {
    host: /^(www\.)?ah-informatique\.com$/,
    path: /^\/ZipUrl/,
  },
  ready: function () {
    'use strict';
    var a = $('#zip3 a');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /^aka\.gr$/
  },
  ready: function () {
    'use strict';
    var l = $('iframe#yourls-frame');
    $.openLink(l.src);
  },
});

$.register({
  rule: {
    host: /^anonymbucks\.com$/,
  },
  ready: function () {
    'use strict';
    var a = $('#boton-continuar');
    a.click();
  },
});

(function () {
  'use strict';
  $.register({
    rule: {
      host: /^bc\.vc$/,
      path: /^.+(https?:\/\/.+)$/,
    },
    start: function (m) {
      $.openLink(m.path[1] + document.location.search + document.location.hash);
    },
  });
  function decompress (script, unzip) {
    if (!unzip) {
      return script;
    }
    var matches = script.match(/eval(.*)/);
    matches = matches[1];
    script = eval(matches);
    return script;
  }
  function searchScript (unzip) {
    var content = $.$$('script').find(function (script) {
      if (script.innerHTML.indexOf('make_log') < 0) {
        return _.nop;
      }
      return script.innerHTML;
    });
    if (content) {
      return {
        direct: false,
        script: decompress(content.payload, unzip),
      };
    }
    content = $.$$('script').find(function (script) {
      if (script.innerHTML.indexOf('click_log') < 0) {
        return _.nop;
      }
      return script.innerHTML;
    });
    if (content) {
      return {
        direct: true,
        script: decompress(content.payload, unzip),
      };
    }
    throw _.AdsBypasserError('script changed');
  }
  function knockServer (script, dirtyFix) {
    var matches = script.match(/\$.post\('([^']*)'[^{]+(\{opt:'make_log'[^}]+\}\}),/i);
    var make_url = matches[1];
    var make_opts = eval('(' + matches[2] + ')');
    var i = setInterval(function () {
      $.post(make_url, make_opts, function (text) {
        if (dirtyFix) {
          text = text.match(/\{.+\}/)[0];
        }
        var jj = JSON.parse(text);
        if (jj.message) {
          clearInterval(i);
          $.openLink(jj.message.url);
        }
      });
    }, 1000);
  }
  function knockServer2 (script) {
    var post = unsafeWindow.$.post;
    unsafeWindow.$.post = $.inject(function (a, b, c) {
      if (typeof c !== 'function') {
        return;
      }
      setTimeout(function () {
        var data = {
          error: false,
          message: {
            url: '#',
          },
        };
        c(JSON.stringify(data));
      }, 1000);
    });
    var matches = script.match(/\$.post\('([^']*)'[^{]+(\{opt:'make_log'[^}]+\}\}),/i);
    var make_url = matches[1];
    var make_opts = eval('(' + matches[2] + ')');
    function makeLog () {
        make_opts.opt = 'make_log';
        post(make_url, $.inject(make_opts), $.inject(function (text) {
          var data = JSON.parse(text);
          _.info('make_log', data);
          if (!data.message) {
            checksLog();
            return;
          }
          $.openLink(data.message.url);
        }));
    }
    function checkLog () {
      make_opts.opt = 'check_log';
      post(make_url, $.inject(make_opts), $.inject(function (text) {
        var data = JSON.parse(text);
        _.info('check_log', data);
        if (!data.message) {
          checkLog();
          return;
        }
        makeLog();
      }));
    }
    function checksLog () {
      make_opts.opt = 'checks_log';
      post(make_url, $.inject(make_opts), $.inject(function () {
        _.info('checks_log');
        checkLog();
      }));
    }
    checksLog();
  }
  $.register({
    rule: {
      host: /^bc\.vc$/,
      path: /^\/.+/,
    },
    ready: function () {
      $.removeNodes('iframe');
      var result = searchScript(false);
      if (!result.direct) {
        knockServer2(result.script);
      } else {
        result = result.script.match(/top\.location\.href = '([^']+)'/);
        if (!result) {
          throw new _.AdsBypasserError('script changed');
        }
        result = result[1];
        $.openLink(result);
      }
    },
  });
  function run (dirtyFix) {
    $.removeNodes('iframe');
    var result = searchScript(true);
    if (!result.direct) {
      knockServer(result.script,dirtyFix);
    } else {
      result = result.script.match(/top\.location\.href='([^']+)'/);
      if (!result) {
        throw new _.AdsBypasserError('script changed');
      }
      result = result[1];
      $.openLink(result);
    }
  }
  $.register({
    rule: {
      host: /^adcrun\.ch$/,
      path: /^\/\w+$/,
    },
    ready: function () {
      $.removeNodes('.user_content');
      var rSurveyLink = /http\.open\("GET", "api_ajax\.php\?sid=\d*&ip=[^&]*&longurl=([^"]+)" \+ first_time, (?:true|false)\);/;
      var l = $.searchScripts(rSurveyLink);
      if (l) {
        $.openLink(l[1]);
        return;
      }
      run(true);
    },
  });
  $.register({
    rule: {
      host: [
        /^1tk\.us$/,
        /^gx\.si$/,
        /^adwat\.ch$/,
        /^(fly2url|urlwiz|xafox)\.com$/,
        /^(zpoz|ultry)\.net$/,
        /^(wwy|myam)\.me$/,
        /^ssl\.gs$/,
        /^link\.tl$/,
        /^hit\.us$/,
        /^shortit\.in$/,
        /^(adbla|tl7)\.us$/,
        /^www\.adjet\.eu$/,
        /^srk\.gs$/,
        /^cun\.bz$/,
        /^miniurl\.tk$/,
        /^vizzy\.es$/,
        /^kazan\.vc$/,
      ],
      path: /^\/.+/,
    },
    ready: run,
  });
  $.register({
    rule: {
      host: /^adtr\.im|ysear\.ch|xip\.ir$/,
      path: /^\/.+/,
    },
    ready: function () {
      var a = $.$('div.fly_head a.close');
      var f = $.$('iframe.fly_frame');
      if (a && f) {
        $.openLink(f.src);
      } else {
        run();
      }
    },
  });
  $.register({
    rule: {
      host: /^ad5\.eu$/,
      path: /^\/[^.]+$/,
    },
    ready: function() {
      $.removeNodes('iframe');
      var s = searchScript(true);
      var m = s.script.match(/(<form name="form1"method="post".*(?!<\\form>)<\/form>)/);
      if (!m) {return;}
      m = m[1];
      var tz = -(new Date().getTimezoneOffset()/60);
      m = m.replace("'+timezone+'",tz);
      var d = document.createElement('div');
      d.setAttribute('id','AdsBypasserFTW');
      d.setAttribute('style', 'display:none;');
      d.innerHTML = m;
      document.body.appendChild(d);
      $('#AdsBypasserFTW > form[name=form1]').submit();
    },
  });
  $.register({
    rule: {
      host: /^tr5\.in$/,
      path: /^\/.+/,
    },
    ready: function () {
      run(true);
    },
  });
})();

$.register({
  rule: 'http://www.bild.me/bild.php?file=*',
  ready: function () {
    'use strict';
    var i = $('#Bild');
    $.openLink(i.src);
  },
});

$.register({
  rule: 'http://bildr.no/view/*',
  ready: function () {
    'use strict';
    var i = $('img.bilde');
    $.openLink(i.src);
  },
});

$.register({
  rule: {
    host: /^(www\.)?([a-zA-Z0-9]+\.)?binbox\.io$/,
    path: /\/o\/([a-zA-Z0-9]+)/,
  },
  ready: function (m) {
    'use strict';
    var direct_link = window.atob(m.path[1]);
    $.openLink(direct_link);
  },
});

$.register({
  rule: {
    host: /^(www\.)?(buz|vzt)url\.com$/,
  },
  ready: function () {
    'use strict';
    var frame = $('frame[scrolling=yes]');
    $.openLink(frame.src);
  },
});

$.register({
  rule: {
    host: /^(cf|ex|xt)\d\.(me|co)$/,
  },
  ready: function (m) {
    'use strict';
    $.removeNodes('iframe');
    var a = $('#skip_button');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /^cf\.ly$/,
    path: /^\/[^\/]+$/,
  },
  start: function (m) {
    'use strict';
    $.removeNodes('iframe');
    $.openLink('/skip' + m.path[0]);
  },
});

$.register({
  rule: {
    host: /^(www\.)?cli\.gs$/,
  },
  ready: function () {
    'use strict';
    var a = $('a.RedirectLink');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /^(www\.)?clictune\.com$/,
    path: /^\/id=\d+/,
  },
  ready: function () {
    'use strict';
    $.removeNodes('iframe');
    var linkHolder = $('#compteur');
    var matches = linkHolder.innerHTML.match(/<a href=".*url=([^&"]+).*>/);
    var url = decodeURIComponent(matches[1]);
    $.openLink(url);
  },
});

$.register({
  rule: {
    host: /^(www\.)?(coin-ads\.com|shortin\.tk)$/,
    path: /^\/.+/,
  },
  ready: function () {
    'use strict';
    var m = $.searchScripts(/window\.location\.replace/);
    if (m) {
      return;
    }
    m = $.searchScripts(/countdownArea\.innerHTML = "([^"]+)"/);
    if (!m) {
      throw new _.AdsBypasserError('pattern changed');
    }
    m = m[1];
    var d = $.$('#area');
    if (d) {
      d.innerHTML = m;
      d = $('.skip', d);
      d.click();
      return;
    }
    d = $('#site');
    $.openLink(d.src);
  },
});

(function () {
  'use strict';
  $.register({
    rule: {
      host: /^(?:(\w+)\.)?(coinurl\.com|cur\.lv)$/,
      path: /^\/[-\w]+$/
    },
    ready: function (m) {
      $.removeNodes('iframe');
      if (m.host[1] == null) {
        var mainFrame = 'http://cur.lv/redirect_curlv.php?code=' + escape(window.location.pathname.substring(1));
      } else {
        var mainFrame = 'http://cur.lv/redirect_curlv.php?zone=' + m.host[1] + '&name=' + escape(window.location.pathname.substring(1));
      }
      $.get(mainFrame, {}, function(mainFrameContent) {
        try {
          var docMainFrame = $.toDOM(mainFrameContent);
        } catch (e) {
          throw new _.AdsBypasserError('main frame changed');
        }
        var rExtractLink = /onclick="open_url\('([^']+)',\s*'go'\)/;
        var innerFrames = $.$$('frameset > frame', docMainFrame).each(function (currFrame) {
          var currFrameAddr = window.location.origin + '/' + currFrame.getAttribute('src');
          $.get(currFrameAddr, {}, function(currFrameContent) {
            var aRealLink = rExtractLink.exec(currFrameContent);
            if (aRealLink == null || aRealLink[1] == null) {return;}
            var realLink = aRealLink[1];
            $.openLink(realLink);
          });
        });
      });
    },
  });
})();

$.register({
  rule: {
    host: /^comyonet\.com$/,
  },
  ready: function () {
    'use strict';
    var input = $('input[name="enter"]');
    input.click();
  },
});

$.register({
  rule: {
    host: /^(www\.)?dapat\.in$/,
  },
  ready: function () {
    'use strict';
    var f = $('iframe[name=pagetext]');
    $.openLink(f.src);
  },
});

$.register({
  rule: {
    host: /^(www\.)?dd\.ma$/,
  },
  ready: function (m) {
    'use strict';
    var i = $.$('#mainframe');
    if (i) {
      $.openLink(i.src);
      return;
    }
    var a = $('#btn_open a');
    $.openLink(a.href);
  },
});

$.register({
  rule: 'http://www.dumppix.com/viewer.php?*',
  ready: function () {
    'use strict';
    var i = $.$('#boring');
    if (i) {
      $.openLink(i.src);
      return;
    }
    i = $('table td:nth-child(1) a');
    $.openLink(i.href);
  },
});

$.register({
  rule: {
    host: /^durl\.me$/,
  },
  ready: function () {
    'use strict';
    var a = $('a[class="proceedBtn"]');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /easyurl\.net|(atu|clickthru|redirects|readthis)\.ca|goshrink\.com$/,
  },
  ready: function () {
    'use strict';
    var f = $('frame[name=main]');
    $.openLink(f.src);
  },
});

$.register({
  rule: {
    host: /^ethi\.in$/,
    path: /^\/i\/\d+$/,
  },
  ready: function () {
    'use strict';
    var a = $('#wrapper > .tombol > a[target="_blank"]');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /^(www\.)?filoops.info$/
  },
  ready: function () {
    'use strict';
    var a = $('#text > center a, #text > div[align=center] a');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /^fit\.sh$/,
  },
  ready: function () {
    'use strict';
    $.removeNodes('.container-body');
    var m = $.searchScripts(/token="([^"]+)"/);
    if (!m) {
      throw new _.AdsBypasserError('site changed');
    }
    m = m[1];
    var interLink = '/go/' + m + '?a=' + window.location.hash.substr(1);
    setTimeout(function () {
      $.openLink(interLink);
    }, 6000);
  },
});

(function () {
  'use strict';
  $.register({
    rule: {
      host: /^(www\.)?fundurl\.com$/,
      query: /i=([^&]+)/,
    },
    start: function (m) {
      $.openLink(m.query[1]);
    },
  });
  $.register({
    rule: {
      host: /^(www\.)?fundurl\.com$/,
      path: /^\/(go-\w+|load\.php)$/,
    },
    ready: function () {
      var f = $('iframe[name=fpage3]');
      $.openLink(f.src);
    },
  });
})();

$.register({
  rule: {
    host: /^gkurl\.us$/,
  },
  ready: function () {
    'use strict';
    var iframe = $('#gkurl-frame');
    $.openLink(iframe.src);
  },
});

$.register({
  rule: {
    host: /^u\.go2\.me$/,
  },
  ready: function () {
    'use strict';
    var iframe = $('iframe');
    $.openLink(iframe.src);
  },
});

$.register({
  rule: {
    host: /^hotshorturl\.com$/,
  },
  ready: function () {
    'use strict';
    var frame = $('frame[scrolling=yes]');
    $.openLink(frame.src);
  },
});

$.register({
  rule: {
    host: /^(www\.)?(ilix\.in|priva\.us)$/,
    path: /\/(\w+)/,
  },
  ready: function (m) {
    'use strict';
    var realHost = 'ilix.in';
    if (m.host[2] !== realHost) {
      var realURL = location.href.replace(m.host[2], realHost);
      $.openLink(realURL);
      return;
    }
    var f = $.$('iframe[name=ifram]');
    if (f) {
      $.openLink(f.src);
      return;
    }
    if (!$.$('img#captcha')) {
      $('form[name=frm]').submit();
    }
  },
});

$.register({
  rule: {
    host: /^ity\.im$/,
  },
  ready: function () {
    'use strict';
    var f = $.$('#main');
    if (f) {
      $.openLink(f.src);
      return;
    }
    f = $.$$('frame').find(function (frame) {
      if (frame.src.indexOf('interheader.php') < 0) {
        return _.nop;
      }
      return frame.src;
    });
    if (f) {
      $.openLink(f.payload);
      return;
    }
    f = $.searchScripts(/krypted=([^&]+)/);
    if (!f) {
      throw new _.AdsBypasserError('site changed');
    }
    f = f[1];
    var data = unsafeWindow.des('ksnslmtmk0v4Pdviusajqu', unsafeWindow.hexToString(f), 0, 0);
    if (data) {
      $.openLink('http://ity.im/1104_21_50846_' + data);
    }
  },
});

$.register({
  rule: {
    host: /^(www\.)?kingofshrink\.com$/,
  },
  ready: function () {
    'use strict';
    var l = $('#textresult > a');
    $.openLink(l.href);
  },
});

$.register({
  rule: 'http://www.lienscash.com/l/*',
  ready: function () {
    'use strict';
    var a = $('#redir_btn');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /^(www\.)?\w+\.link-protector\.com$/,
  },
  ready: function (m) {
    'use strict';
    var f = $('form[style="font-weight:normal;font-size:12;font-family:Verdana;"]');
    $.openLink(f.action);
  },
});

$.register({
  rule: {
    host: /\.link2dollar\.com$/,
    path: /^\/\d+$/,
  },
  ready: function () {
    'use strict';
    var m = $.searchScripts(/var rlink = '([^']+)';/);
    if (!m) {
      throw new _.AdsBypasserError('site changed');
    }
    m = m[1];
    $.openLink(m);
  },
});

$.register({
  rule: {
    host: /^link2you\.ru$/,
    path: /^\/\d+\/(.+)$/,
  },
  start: function (m) {
    'use strict';
    var url = m.path[1];
    if (!url.match(/^https?:\/\//)) {
      url = '//' + url;
    }
    $.openLink(url);
  },
});

(function() {
  'use strict';
  var hostRules = [
    /^(([\w]{8}|www)\.)?(allanalpass|cash4files|drstickyfingers|fapoff|freegaysitepass|(gone|tube)viral|(pic|tna)bucks|whackyvidz)\.com$/,
    /^(([\w]{8}|www)\.)?(a[mn]y|deb|dyo|sexpalace)\.gs$/,
    /^(([\w]{8}|www)\.)?(filesonthe|poontown|seriousdeals|ultrafiles|urlbeat)\.net$/,
    /^(([\w]{8}|www)\.)?freean\.us$/,
    /^(([\w]{8}|www)\.)?galleries\.bz$/,
    /^(([\w]{8}|www)\.)?hornywood\.tv$/,
    /^(([\w]{8}|www)\.)?link(babes|bucks)\.com$/,
    /^(([\w]{8}|www)\.)?(megaline|miniurls|qqc|rqq|tinylinks|yyv|zff)\.co$/,
    /^(([\w]{8}|www)\.)?(these(blog|forum)s)\.com$/,
    /^(([\w]{8}|www)\.)?youfap\.me$/,
    /^warning-this-linkcode-will-cease-working-soon\.www\.linkbucksdns\.com$/,
  ];
  function findToken (context) {
    var script = $.$$('script', context).find(function (n) {
      if (n.innerHTML.indexOf('window[\'init\' + \'Lb\' + \'js\' + \'\']') < 0) {
        return _.nop;
      }
      return n.innerHTML;
    });
    if (!script) {
      _.warn('pattern changed');
      return null;
    }
    script = script.payload;
    var m = script.match(/AdPopUrl\s*:\s*'.+\?ref=([\w\d]+)'/);
    var token = m[1];
    m = script.match(/=\s*(\d+);/);
    var ak = parseInt(m[1], 10);
    var re = /\+\s*(\d+);/g;
    var tmp = null;
    while((m = re.exec(script)) !== null) {
      tmp = m[1];
    }
    ak += parseInt(tmp, 10);
    return {
      t: token,
      aK: ak,
    };
  }
  function sendRequest (token) {
    _.info('sending token: %o', token);
    var i = setInterval(function () {
      $.get('/intermission/loadTargetUrl', token, function (text) {
        var data = JSON.parse(text);
        _.info('response: %o', data);
        if (!data.Success && data.Errors[0] === 'Invalid token') {
          _.info('got invalid token');
          clearInterval(i);
          $.get(window.location.toString(), {}, function (text) {
            var d = $.toDOM(text);
            var t = findToken(d);
            sendRequest(t);
          });
          return;
        }
        if (data.Success && !data.AdBlockSpotted && data.Url) {
          clearInterval(i);
          $.openLinkWithReferer(data.Url);
          return;
        }
      });
    }, 1000);
  }
  $.register({
    rule: {
      host: hostRules,
      path: /^\/\w+\/url\/(.*)$/,
    },
    ready: function(m) {
      $.removeAllTimer();
      $.resetCookies();
      $.removeNodes('iframe');
      if (m.path[1] !== null) {
        $.openLinkWithReferer(m.path[1] + window.location.search);
      }
    }
  });
  $.register({
    rule: {
      host: hostRules,
    },
    ready: function () {
      $.removeAllTimer();
      $.resetCookies();
      $.removeNodes('iframe');
      if (window.location.pathname.indexOf('verify') >= 0) {
        $.openLink('../');
        return;
      }
      var token = findToken(document);
      sendRequest(token);
    },
  });
  $.register({
    rule: {
      query: /^\?_lbGate=\d+$/,
    },
    start: function () {
      $.setCookie('_lbGatePassed', 'true');
      $.openLink(window.location.pathname);
    },
  });
})();

$.register({
  rule: {
    host: /^linkshrink\.net$/,
    path: /^\/[a-zA-Z0-9]+$/,
  },
  ready: function () {
    'use strict';
    var a = $.searchScripts(/class="bt" href="([^"]+)"/);
    if (!a) {
      _.warn('pattern changed');
      return;
    }
    $.openLinkWithReferer(a[1]);
  },
});

$.register({
  rule: 'http://lix.in/-*',
  ready: function () {
    'use strict';
    var i = $.$('#ibdc');
    if (i) {
      return;
    }
    i = $.$('form');
    if (i) {
      i.submit();
      return;
    }
    i = $('iframe');
    $.openLink(i.src);
  },
});

$.register({
  rule: {
    host: /^lnk\.in$/,
  },
  ready: function () {
    'use strict';
    var a = $('#divRedirectText a');
    $.openLink(a.innerHTML);
  },
});

$.register({
  rule: {
    host: /^(rd?)lnk\.co|reducelnk\.com$/,
    path: /^\/[^.]+$/,
  },
  ready: function () {
    'use strict';
    var f = $.$('iframe#dest');
    if (f) {
      $.openLink(f.src);
      return;
    }
    $.removeNodes('iframe');
    var o = $.$('#urlholder');
    if (o) {
      $.openLink(o.value);
      return;
    }
    o = $.$('#skipBtn');
    if (o) {
      o = o.querySelector('a');
      $.openLink(o.href);
      return;
    }
    o = document.title.replace(/(LNK.co|Linkbee)\s*:\s*/, '');
    $.openLink(o);
  },
});

$.register({
  rule: {
    host: /^lnx\.lu|url\.fm|z\.gs$/,
  },
  ready: function () {
    'use strict';
    var a = $('#clickbtn a');
    $.openLink(a.href);
  },
});

$.register({
  rule: [
    'http://madlink.sk/',
    'http://madlink.sk/*.html',
  ],
});
$.register({
  rule: 'http://madlink.sk/*',
  start: function (m) {
    'use strict';
    $.removeNodes('iframe');
    $.post('/ajax/check_redirect.php', {
      link: m[1],
    }, function (text) {
      $.openLink(text);
    });
  },
});

$.register({
  rule: {
    host: [
      /^mant(a|e)p\.in$/,
      /^st\.oploverz\.net$/,
    ],
  },
  ready: function () {
    'use strict';
    var a = $('a.redirect, a[target=_blank][rel=nofollow]');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: [
      /^moe\.god\.jp$/,
      /^moesubs\.akurapopo\.pro$/,
      /^dl\.nsfk\.in$/,
    ]
  },
  ready: function () {
    'use strict';
    var a = $('div div center a');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /^mt0\.org$/,
    path: /^\/[^\/]+\/$/,
  },
  ready: function () {
    'use strict';
    $.removeNodes('frame[name=bottom]');
    var f = $('frame[name=top]');
    var i = setInterval(function () {
      var a = $.$('div a', f.contentDocument);
      if (!a) {
        return;
      }
      clearInterval(i);
      $.openLink(a.href)
    }, 1000);
  },
});

$.register({
  rule: 'http://my-link.pro/*',
  ready: function () {
    'use strict';
    var i = $('iframe[scrolling=auto]');
    if (i) {
      $.openLink(i.src);
    }
  },
});

$.register({
  rule: {
    host: /^nsfw\.in$/,
  },
  ready: function () {
    'use strict';
    var a = $('#long_url a');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /^nutshellurl\.com$/,
  },
  ready: function () {
    'use strict';
    var iframe = $('iframe');
    $.openLink(iframe.src);
  },
});

$.register({
  rule: {
    host: /^oxyl\.me$/,
  },
  ready: function () {
    'use strict';
    var l = $.$$('.links-container.result-form > a.result-a');
    if (l.size() > 1) {
      return;
    }
    $.openLink(l.at(0).href);
  },
});

$.register({
  rule: {
    host: /^p\.pw$/,
  },
  ready: function () {
    'use strict';
    $.removeNodes('iframe');
    var m = $.searchScripts(/window\.location = "(.*)";/);
    m = m[1];
    $.openLink(m);
  },
});

$.register({
  rule: {
    host: /^(www\.)?\w+\.rapeit\.net$/,
    path: /^\/(go|prepair|request|collect|analyze)\/[a-f0-9]+$/,
  },
  ready: function (m) {
    'use strict';
    var a = $('a#download_link');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /^ref\.so$/,
  },
  ready: function () {
    'use strict';
    $.removeNodes('iframe');
    var a = $('#btn_open a');
    $.openLink(a.href);
  },
});

$.register({
  rule: 'http://reffbux.com/refflinx/view/*',
  ready: function () {
    'use strict';
    $.removeNodes('iframe');
    var m = $.searchScripts(/skip_this_ad_(\d+)_(\d+)/);
    var id = m[1];
    var share = m[2];
    var location = window.location.toString();
    $.post('http://reffbux.com/refflinx/register', {
      id: id,
      share: share,
      fp: 0,
      location: location,
      referer: '',
    }, function (text) {
      var m = text.match(/'([^']+)'/);
      if (!m) {
        throw new _.AdsBypasserError('pattern changed');
      }
      $.openLink(m[1]);
    });
  },
});

$.register({
  rule: 'http://richlink.com/app/webscr?cmd=_click&key=*',
  ready: function () {
    'use strict';
    var f = $('frameset');
    f = f.onload.toString();
    f = f.match(/url=([^&]+)/);
    if (f) {
      f = decodeURIComponent(f[1]);
    } else {
      f = $('frame[name=site]');
      f = f.src;
    }
    $.openLink(f);
  },
});

$.register({
  rule: 'http://rijaliti.info/*.php',
  ready: function () {
    'use strict';
    var a = $('#main td[align="center"] a');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /^riurl\.com$/,
    path: /^\/.+/,
  },
  ready: function () {
    'use strict';
    var s = $.$('body script');
    if (s) {
      s = s.innerHTML.indexOf('window.location.replace');
      if (s >= 0) {
        return;
      }
    }
    $.openLinkByPost('', {
      hidden: '1',
      image: ' ',
    });
  },
});

$.register({
  rule: {
    host: /^preview\.rlu\.ru$/,
  },
  ready: function () {
    'use strict';
    var a = $('#content > .long_url > a');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /^robo\.us$/,
  },
  ready: function () {
    'use strict';
    $.removeNodes('iframe');
    var url = atob(unsafeWindow.fl);
    $.openLink(url);
  },
});

$.register({
  rule: {
    host: /^(www\.)?safelinkconverter2\.com$/,
    path: /^\/decrypt-\d\/$/,
    query: /id=(\w+==)/,
  },
  ready: function (m) {
    'use strict';
    $.openLink(window.atob(m.query[1]));
  },
});

$.register({
  rule: {
    host: /^(www\.)?safeurl\.eu$/,
    path: /\/\w+/,
  },
  ready: function () {
    'use strict';
    var directUrl = $.searchScripts(/window\.open\("([^"]+)"\);/);
    if (!directUrl) {
      throw new _.AdsBypasserError('script content changed');
    }
    directUrl = directUrl[1];
    $.openLink(directUrl);
  },
});

$.register({
  rule: {
    host: /^(www\.)?(apploadz\.ru|seomafia\.net)$/
  },
  ready: function () {
    'use strict';
    $.removeNodes('iframe');
    var a = $('table a');
    $.openLink(a.href);
  },
});

$.register({
  rule: /http:\/\/setlinks\.us\/(p|t|d).*/,
  ready: function () {
    'use strict';
    var k = $.searchScripts(/window\.location='([^']+)'/);
    if (k) {
      $.openLink(k[1]);
      return;
    }
    var aLinks = $.$$('div.links-container.result-form:not(.p-links-container) > span.dlinks > a');
    if (aLinks.size() === 1) {
      $.openLink(aLinks.at(0).href);
      return;
    }
    k = $('img[alt=captcha]');
    $.captcha(k.src, function (a) {
      var b = $('#captcha');
      var c = $('input[name=Submit]');
      b.value = a;
      c.click();
    });
  },
});

(function () {
  'use strict';
  function afterGotSessionId (sessionId) {
    var X_NewRelic_ID = $.searchScripts(/xpid:"([^"]+)"/);
    var Fingerprint = unsafeWindow.Fingerprint;
    var browserToken = null;
    if (Fingerprint) {
      browserToken = (new Fingerprint($.inject({canvas: !0}))).get();
    } else {
      browserToken = Math.round((new Date()).getTime() / 1000);
    }
    var data = "sessionId=" + sessionId + "&browserToken=" + browserToken;
    var header = {
      Accept: 'application/json, text/javascript',
    };
    if (X_NewRelic_ID) {
      header['X-NewRelic-ID'] = X_NewRelic_ID;
    }
    var i = setInterval(function () {
      $.get('/adSession/callback', data, function (text) {
        var r = JSON.parse(text);
        if (r.status == "ok" && r.destinationUrl) {
          clearInterval(i);
          $.openLink(r.destinationUrl);
        }
      }, header);
    }, 1000);
  }
  $.register({
    rule: {
      host: /^sh\.st|dh10thbvu\.com|u2ks\.com$/,
      path: /^\/[\d\w]+/,
    },
    ready: function () {
      $.removeNodes('iframe');
      var m = $.searchScripts(/sessionId: "([\d\w]+)",/);
      if (m) {
        afterGotSessionId(m[1]);
        return;
      }
      var o = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          var m = $.searchScripts(/sessionId: "([\d\w]+)",/);
          if (m) {
            o.disconnect();
            afterGotSessionId(m[1]);
          }
        });
      });
      o.observe(document.body, {
        childList: true,
      });
    },
  });
})();

$.register({
  rule: {
    host: /^(www\.)?similarsites\.com$/,
    path: /^\/goto\/([^?]+)/
  },
  ready: function (m) {
    'use strict';
    var l = m.path[1];
    if (!/^https?:\/\//.test(l)) {
      l = 'http://' + l;
    }
    $.openLink(l);
  },
});

$.register({
  rule: {
    host: /^(www\.)?srelink\.com$/,
    path: /^\/i\/\w+$/,
  },
  ready: function (m) {
    'use strict';
    $.removeNodes('iframe');
    var matches = $.searchScripts(/href="([^"]+)">SKIP AD<\/a>/);
    $.openLink(matches[1]);
  },
});

$.register({
  rule: {
    host: /^stash-coins\.com$/,
  },
  start: function () {
    'use strict';
    var url = window.location.toString();
    var i = url.lastIndexOf('http');
    url = url.substr(i);
    $.openLink(url);
  },
});

$.register({
  rule: {
    host: /^steamcommunity\.com$/,
    path: /^\/linkfilter\/(.+)?$/,
    query: /^(?:\?url=(.+))?$/,
  },
  ready: function (m) {
    'use strict';
    var target = m.path[1]? m.path[1]+document.location.search : m.query[1];
    $.openLink(target);
  },
});

$.register({
  rule: {
    host: /^(www\.)?sylnk\.net$/,
    query: /link=([^&]+)/
  },
  ready: function (m) {
    'use strict';
    var rawLink = atob(m.query[1]);
    $.openLink(rawLink);
  },
});

$.register({
  rule: {
    host: /^thinfi\.com$/,
  },
  ready: function () {
    'use strict';
    var a = $('div p a');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /^tinyarrows\.com$/,
    path: /^\/preview\.php$/,
    query: /^\?page=([^&]+)/,
  },
  start: function (m) {
    'use strict';
    $.openLink(decodeURIComponent(m.query[1]));
  },
});

$.register({
  rule: {
    host: /^(www\.)?typ\.me$/,
  },
  ready: function (m) {
    'use strict';
    var a = $('#skipAdBtn');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /^(www\.)?ultshare\.com$/,
    path: /^\/(?:(?:\d-)?(\d+)|index\.php)$/,
    query: /^(?:\?a=\d&c=(\d+))?$/
  },
  ready: function (m) {
    'use strict';
    var linkId = m.path[1]?m.path[1]:m.query[1];
    var directLink = '/3-' + linkId;
    $.openLink(directLink);
  },
});

$.register({
  rule: {
    host: /^unfake\.it$/,
  },
  ready: function () {
    'use strict';
    var frame = $('frame');
    var i = frame.src.lastIndexOf('http://');
    $.openLink(frame.src.substr(i));
  },
});

$.register({
  rule: {
    host: /^(www\.)?(upan|gxp)\.so$/,
    path: /^\/\w+$/,
  },
  ready: function () {
    'use strict';
    var a = $('table.td_line a[onclick="down_process_s();"]');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /^url\.ie$/,
  },
  ready: function () {
    'use strict';
    var a = $('a[title="Link to original URL"]');
    $.openLink(a.href);
  },
});

$.register({
  rule: {
    host: /urlcash\.(com|net|org)|(bat5|detonating|celebclk|eightteen|smilinglinks|peekatmygirlfriend|pornyhost|clb1|urlgalleries)\.com|looble\.net|xxxs\.org$/,
  },
  ready: function () {
    'use strict';
    if (unsafeWindow && unsafeWindow.linkDestUrl) {
      $.openLink(unsafeWindow.linkDestUrl);
      return;
    }
    var matches = document.body.innerHTML.match(/linkDestUrl = '(.+)'/);
    if (matches) {
      $.openLink(matches[1]);
      return;
    }
  },
});

$.register({
  rule: {
    host: /^(www\.)?(urlcow|miniurl)\.com$/,
  },
  ready: function () {
    'use strict';
    var m = $.searchScripts(/window\.location = "([^"]+)"/);
    if (!m) {
      throw new _.AdsBypasserError('site changed');
    }
    $.openLink(m[1]);
  },
});

$.register({
  rule: {
    host: /^urlinn\.com$/,
  },
  ready: function () {
    'use strict';
    var m = $('META[HTTP-EQUIV=refresh]').getAttribute('CONTENT').match(/url='([^']+)'/);
    if (m) {
      $.openLink(m[1]);
    }
  },
});

$.register({
  rule: {
    host: /^urlms\.com$/,
  },
  ready: function () {
    'use strict';
    var iframe = $('#content');
    $.openLink(iframe.src);
  },
});

$.register({
  rule: 'http://urlz.so/l/*',
  ready: function () {
    'use strict';
    var i = $.$('td > a');
    if (i) {
      i = i.href;
      var m = i.match(/javascript:declocation\('(.+)'\);/);
      if (m) {
        i = atob(m[1]);
      }
      $.openLink(i);
      return;
    }
    i = $('img');
    $.captcha(i.src, function (a) {
      var b = $('input[name=captcha]');
      var c = $('input[name=submit]');
      b.value = a;
      c.click();
    });
  },
});

$.register({
  rule: {
    host: /^www\.viidii\.info$/,
  },
  ready: function () {
    'use strict';
    var o = $('#directlink');
    $.openLink(o.href);
  },
});

$.register({
  rule: {
    host: /^(www\.)?vir\.al$/,
  },
  ready: function () {
    'use strict';
    var m = $.searchScripts(/var target_url = '([^']+)';/);
    if (!m) {
      throw new _.AdsBypasserError('site changed');
    }
    $.openLink(m[1]);
  },
});

$.register({
  rule: {
    host: /^(www\.)?wzzq\.me$/,
  },
  ready: function () {
    'use strict';
    try {
      var l = $('#img_loading_table2  div.wz_img_hit a[target=_blank]').href;
      $.openLink(l);
    } catch (e) {
    }
  },
});

$.register({
  rule: {
    host: /^xlink.me$/
  },
  ready: function () {
    'use strict';
    var a = $('#main_form > center > a');
    if (!a) {return;}
    $.openLink(a.href);
  },
});

$.register({
  rule: 'http://yep.it/preview.php?p=*',
  ready: function () {
    'use strict';
    var link = $('font[color="grey"]').innerHTML;
    $.openLink(link);
  },
});

$.register({
  rule: 'http://www.yooclick.com/l/*',
  ready: function () {
    'use strict';
    $.removeNodes('iframe');
    var uniq = unsafeWindow.uniq || unsafeWindow.uniqi;
    if (!uniq) {return;}
    var path = window.location.pathname;
    var url = _.T('{0}?ajax=true&adblock=false&old=false&framed=false&uniq={1}')(path, uniq);
    var getURL = function() {
      $.get(url, {
      }, function (text) {
        var goodURL = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(text);
        if (goodURL) {
          $.openLink(text);
        } else {
          setTimeout(getURL, 500);
        }
      });
    }
    getURL();
  },
});

$.register({
  rule: 'http://zo.mu/redirector/process?link=*',
  ready: function () {
    'use strict';
    $.removeNodes('iframe');
    window.location.reload();
  },
});

$.register({
  rule: {
    host: /^zzz\.gl$/,
  },
  ready: function () {
    'use strict';
    var m = $.searchScripts(/var domainurl = '([^']+)';/);
    if (!m) {
      throw new _.AdsBypasserError('site changed');
    }
    $.openLink(m[1]);
  },
});

$.register({
  rule: {
    host: /^www\.4shared\.com$/,
    path: /^\/(mp3|get|rar|zip|file|android|software|program)\//,
  },
  ready: function () {
    'use strict';
    $.get('http://www.4server.info/find.php', {
      data: window.location.href,
    }, function (data) {
      var d = $.toDOM(data);
      var c = $('meta[http-equiv=refresh]', d);
      var b = c.content.match(/URL=(.+)$/);
      var a = b[1];
      $.openLink(a);
    });
  },
});

(function() {
  'use strict';
  $.register({
    rule: {
      host: /^(www\.)?dl-protect\.com$/,
      path: /\/[A-Z0-9]+/,
    },
    ready: function () {
      var f = $.$('form[name=ccerure]');
      if (f) {
        var observer = new MutationObserver(function (mutations) {
          var iIn = $('input[id=in]');
          for (var i = 0; i < mutations.length; i++) {
            if (mutations[i].target.value && mutations[i].attributeName === 'value') {
              observer.disconnect();
              iIn.value = "Tracking too much hurts users' privacy";
              if (!canFastRedirect()) {
                return;
              }
              setTimeout(function() {
                f.submit();
              }, 600);
              break;
            }
          }
        });
        var iIn = $('input[id=in]');
        if (iIn.value) {
          setTimeout(function() {
            f.submit();
          }, 600);
        } else {
          observer.observe(iIn, {
            attributes: true,
          });
        }
        return;
      }
      var l = $.$$('#slinks > a');
      if (l.size() === 1) {
        $.openLink(l.at(0).href);
      }
    },
  });
  function canFastRedirect () {
    return !$.$('form[name=ccerure]').onsubmit && !$.$('form[name=ccerure] input[name=pwd]');
  }
})();

$.register({
  rule: {
    host: /^(www\.)?embedupload\.com$/,
    path: /^\/$/,
    query: /^\?\w{2}=\w+$/
  },
  ready: function () {
    'use strict';
    var downloadPage = $('.categories a[target=_blank]');
    $.openLink(downloadPage);
  },
});

$.register({
  rule: {
    host: /^(www\.)?(firedrive|putlocker)\.com$/,
    path: /^\/file\/[0-9A-F]+$/,
  },
  ready: function () {
    'use strict';
    var c = $('#confirm_form');
    c.submit();
  },
});

$.register({
  rule: {
    host: /^(www\.)?jheberg\.net$/,
    path: /^\/captcha\//,
  },
  ready: function () {
    'use strict';
    $('.dl-button').click();
  },
});
$.register({
  rule: {
    host: /^(www\.)?jheberg\.net$/,
    path: /^\/redirect\//,
  },
  ready: function () {
    'use strict';
    var matches = $.searchScripts(/'slug':\s*'([^']+)',\s*'hoster':\s*'([^']+)'/);
    var slug = matches[1];
    var hoster = matches[2];
    $.post('/get/link/', {'slug': slug, 'hoster': hoster}, function(response) {
      var respJSON = JSON.parse(response);
      $.openLink(respJSON.url);
    });
  },
});

$.register({
  rule: {
    host: /^(www\.)?mirrorcreator\.com$/,
    path: /^\/showlink\.php$/,
  },
  ready: function () {
    'use strict';
    var a = $.$('#redirectlink a');
    if (a) {
      $.openLink(a.href);
      return;
    }
    a = $('#redirectlink > div.redirecturl');
    a = a.innerHTML;
    if (!a.match(/^http/)) {
      throw new _.AdsBypasserError('not a valid URL');
    }
    $.openLink(a);
  },
});

$.register({
  rule: {
    host: /^www.mirrorupload.net$/,
  },
  ready: function () {
    'use strict';
    var accessForm = $('form[name=form_upload]');
    var accessInput = document.createElement('input');
    accessInput.type = 'hidden';
    accessInput.name = 'access';
    accessInput.value = Math.random();
    accessForm.appendChild(accessInput);
    accessForm.submit();
  },
});

(function () {
  'use strict';
  var sUrl = '(\\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])';
  function isLink (text) {
    var rUrl = new RegExp(_.T('^{0}$')(sUrl), 'i');
    return rUrl.test(text);
  }
  function linkify (text) {
    var rUrl = new RegExp(sUrl, 'ig');
    return text.replace(rUrl, function(match) {
      return _.T("<a href='{0}'>{0}</a>")(match);
    });
  }
  $.register({
    rule: {
      host: /^(www\.)?([a-zA-Z0-9]+\.)?binbox\.io$/,
      path: /\/([a-zA-Z0-9]+)/,
      hash: /#([a-zA-Z0-9]+)/,
    },
    ready: function (m) {
      var sjcl = unsafeWindow.sjcl;
      var paste_id = m.path[1];
      var paste_salt = m.hash[1];
      var fake_user = 'binbox';
      var API_URL = _.T('https://{0}.binbox.io/{1}.json')(fake_user, paste_id);
      $.get(API_URL, "", function (pasteInfo) {
        pasteInfo = JSON.parse(pasteInfo);
        if (!pasteInfo.ok) {
          throw new _.AdsBypasserError("error when getting paste information");
        }
        var raw_paste = sjcl.decrypt(paste_salt, pasteInfo.paste.text);
        if (isLink(raw_paste)) {
          $.openLink(raw_paste);
          return;
        }
        var elm = document.createElement('pre');
        elm.id = 'paste-text';
        elm.innerHTML = linkify(raw_paste);
        var frame = $('#paste-frame, #captcha-page');
        frame.parentNode.replaceChild(elm, frame);
      });
    },
  });
})();

$._main();
