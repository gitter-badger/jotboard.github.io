// Oh looook a working JSON API :3

// q.load.js("//test.com/test.js", function() {
//   console.log("");
// });
var q = {
  element: {
    specific: function(_1) {
      return document.querySelector(_1);
    },
    everybody: function(_1) {
      return document.querySelectorAll(_1);
    }
  },
  attr: {
    get: function(_1, _2) {
      document.querySelector(_1).getAttribute(_2);
    },
    set: function(_1, _2, _3) {
      document.querySelector(_1).setAttribute(_2, _3);
    }
  },
  prepend: function(_1, _2) {
    return _2.insertBefore(_1, _2.firstChild);
  },
  append: function(_1, _2) {
    return _1.appendChild(_2);
  },
  load: {
    js: function(_1, _2) {
      var head = document.getElementsByTagName("head")[0];
      _1.forEach(function(src) {
        var script = document.createElement("script");
        script.src = src;
        script.async = false;
        document.getElementsByTagName("head")[0].prependChild(script);
      });
      window[_2()];
    },
    css: function(_1, _2) {
      _1.forEach(function(src) {
        var link = document.createElement("link");
        link.href = src;
        link.rel = "stylesheet";
        link.type = "text/css";
        document.getElementsByTagName("head")[0].prependChild(link);
      });
      window[_2()];
    }
  }
};