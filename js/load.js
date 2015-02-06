/*
  * $load.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
*/

(function (name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition();
  else if (typeof define == 'function' && define.amd) define(definition);
  else this[name] = definition();
})('$load', function () {

  var doc = document,
    head = doc.getElementsByTagName('head')[0],
    s = 'string',
    f = false,
    push = 'push',
    readyState = 'readyState',
    onreadystatechange = 'onreadystatechange',
    list = {},
    ids = {},
    delay = {},
    scripts = {},
    scriptpath,
    urlArgs;

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f;
    return 1;
  }

  function each(ar, fn) {
    every(ar, function (el) {
      return !fn(el);
    });
  }

  function $load(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths];
    var idOrDoneIsDone = idOrDone && idOrDone.call,
      done = idOrDoneIsDone ? idOrDone : optDone,
      id = idOrDoneIsDone ? paths.join('') : idOrDone,
      queue = paths.length;
    function loopFn(item) {
      return item.call ? item() : list[item];
    }
    function callback() {
      if (!--queue) {
        list[id] = 1;
        done && done();
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = []);
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback();
        path = !force && path.indexOf('.js') === -1 && !/^https?:\/\//.test(path) && scriptpath ? scriptpath + path + '.js' : path;
        if (scripts[path]) {
          if (id) ids[id] = 1;
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0);
        }
        scripts[path] = 1;
        if (id) ids[id] = 1;
        create(path, callback);
      });
    }, 0);
    return $load;
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded;
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null;
      loaded = 1;
      scripts[path] = 2;
      fn();
    };
    el.async = 1;
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild);
  }

  $load.get = create;

  $load.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift();
      !scripts.length ? $load(s, id, done) : $load(s, callback);
    }());
  };

  $load.path = function (p) {
    scriptpath = p;
  };

  $load.urlArgs = function (str) {
    urlArgs = str;
  };

  $load.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps];
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || [];
      delay[key][push](ready);
      req && req(missing);
    }(deps.join('|'));
    return $load;
  };

  $load.done = function (idOrDone) {
    $load([null], idOrDone);
  };

  return $load;

});