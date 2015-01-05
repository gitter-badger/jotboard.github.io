/* A Marcus Westin Project, redefined for Jotboard */
(function(e) {
  function s() {
    try {
      return r in e && e[r];
    } catch (t) {
      return !1;
    }
  }
  var t = {},
    n = e.document,
    r = "localStorage",
    i;
  t.disabled = !1,
    t.set = function(e, t) {},
    t.get = function(e) {},
    t.remove = function(e) {},
    t.clear = function() {},
    t.transact = function(e, n, r) {
      var i = t.get(e);
      r == null && (r = n, n = null), typeof i == "undefined" && (i = n || {}), r(i), t.set(e, i);
    }, t.getAll = function() {}, t.forEach = function() {}, t.serialize = function(e) {
      return JSON.stringify(e);
    }, t.deserialize = function(e) {
      if (typeof e != "string") return undefined;
      try {
        return JSON.parse(e);
      } catch (t) {
        return e || undefined;
      }
    };
  if (s()) i = e[r], t.set = function(e, n) {
    return n === undefined ? t.remove(e) : (i.setItem(e, t.serialize(n)), n);
  }, t.get = function(e) {
    return t.deserialize(i.getItem(e));
  }, t.remove = function(e) {
    i.removeItem(e);
  }, t.clear = function() {
    i.clear();
  }, t.getAll = function() {
    var e = {};
    return t.forEach(function(t, n) {
      e[t] = n;
    }), e;
  }, t.forEach = function(e) {
    for (var n = 0; n < i.length; n++) {
      var r = i.key(n);
      e(r, t.get(r));
    }
  };
  else if (n.documentElement.addBehavior) {
    var o, u;
    try {
      u = new ActiveXObject("htmlfile"), u.open(), u.write('<script>document.w=window</script><iframe src="/favicon.ico"></iframe>'), u.close(), o = u.w.frames[0].document, i = o.createElement("div");
    } catch (a) {
      i = n.createElement("div"), o = n.body;
    }
    function f(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments, 0);
        n.unshift(i), o.appendChild(i), i.addBehavior("#default#userData"), i.load(r);
        var s = e.apply(t, n);
        return o.removeChild(i), s;
      };
    }
    var l = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
    function c(e) {
      return e.replace(l, "___");
    }
    t.set = f(function(e, n, i) {
      return n = c(n), i === undefined ? t.remove(n) : (e.setAttribute(n, t.serialize(i)), e.save(r), i);
    }), t.get = f(function(e, n) {
      return n = c(n), t.deserialize(e.getAttribute(n));
    }), t.remove = f(function(e, t) {
      t = c(t), e.removeAttribute(t), e.save(r);
    }), t.clear = f(function(e) {
      var t = e.XMLDocument.documentElement.attributes;
      e.load(r);
      for (var n = 0, i; i = t[n]; n++) e.removeAttribute(i.name);
      e.save(r);
    }), t.getAll = function(e) {
      var n = {};
      return t.forEach(function(e, t) {
        n[e] = t;
      }), n;
    }, t.forEach = f(function(e, n) {
      var r = e.XMLDocument.documentElement.attributes;
      for (var i = 0, s; s = r[i]; ++i) n(s.name, t.deserialize(e.getAttribute(s.name)))
    });
  }
  try {
    var h = "__dbjs__";
    t.set(h, h), t.get(h) != h && (t.disabled = !0), t.remove(h);
  } catch (a) {
    t.disabled = !0;
  }
  t.enabled = !t.disabled, typeof module != "undefined" && module.exports ? module.exports = t : typeof define == "function" && define.amd ? define(t) : e.db = t;
})(this.window || global);