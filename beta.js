var load = function(syntax, assets, callback) {
  //  load("js", ["https://test.com/api.js"], function() {
  //    alert("Test API Loaded.");
  //  });
  // Only use when all else fails, this still is in experimental status so yeah.
  var head = document.getElementsByTagName("head")[0];
  if (syntax) {
    if (syntax == "js") {
      assets.forEach(function(src) {
        var script = document.createElement("script");
        script.src = src;
        script.async = false;
        document.getElementsByTagName("head")[0].prependChild(script);
      });
      window[callback()];
    }
    if (syntax == "css") {
      assets.forEach(function(src) {
        var link = document.createElement("link");
        link.href = src;
        link.rel = "stylesheet";
        link.type = "text/css";
        document.getElementsByTagName("head")[0].prependChild(link);
      });
      window[callback()];
    }
  }
};