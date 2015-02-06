// Oh looook a working JSON API :3

_load.js(["//test.com/test.js"], function() {
  console.log('Test API Loaded');
})

var _load = {
  js: function(_1, _2) {
    var head = document.getElementsByTagName("head")[0];
    _1.forEach(function(src) {
      var script = document.createElement("script");
      script.src = src;
      script.async = false;
      (document.getElementsByTagName("head")[0] || head).prependChild(script);
    });
    window[_2()];
  },
  css: function(_1, _2) {
    _1.forEach(function(src) {
      var link = document.createElement("link");
      link.href = src;
      link.rel = "stylesheet";
      link.type = "text/css";
      (document.getElementsByTagName("head")[0] || head).prependChild(link);
    });
    window[_2()];
  }
};