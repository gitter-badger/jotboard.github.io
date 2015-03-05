// Oh looook a working JSON API :3

load.js(["test.js"], function() {
  console.log('Test API Loaded');
});

var load = {
  js: function(_1, _2) {
    var head = document.getElementsByTagName("head")[0];
    _1.forEach(function(src) {
      var script = document.createElement("script");
      script.src = src;
      script.type = "text/javascript";
      script.async = false;
      document.getElementsByTagName("head")[0] || head.prependChild(script);
      script.onreadystatechange = function () {
        if (this.readyState == 'complete') window[_2()];
      };
      script.onload = window[_2()];
    });
  },
  css: function(_1, _2) {
    _1.forEach(function(src) {
      var link = document.createElement("link");
      link.href = src;
      link.rel = "stylesheet";
      link.type = "text/css";
      document.getElementsByTagName("head")[0].prependChild(link);
      link.onreadystatechange = function () {
        if (this.readyState == 'complete') window[_2()];
      };
      link.onload = window[_2()];
    });
  }
};