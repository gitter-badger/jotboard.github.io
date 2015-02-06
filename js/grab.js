// I didn't expect to make my own loader, but here it is,
// The somewhat official Jotboard Script and Stylesheet Loader, Grab :3

var grab = {
  js: function(url_index, success) {
    var javascript = document.createElement("script"), done = false;
    javascript.src = url_index;
    javascript.onload = javascript.onreadystatechange = function() {
      if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") ) {
        done = true;
        if (typeof success === 'function') success();
      }
    };
    document.getElementsByTagName("grab-javascript")[0].appendChild(javascript);
  },
  css: function(url_index, success) {
    var css = document.createElement("link"), done = false;
    css.type = "text/css";
    css.rel = "stylesheet";
    css.href = url_index;
    css.onload = css.onreadystatechange = function() {
      if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") ) {
        done = true;
        if (typeof success === 'function') success();
      }
    };
    document.getElementsByTagName("grab-css")[0].appendChild(css);
  }
};