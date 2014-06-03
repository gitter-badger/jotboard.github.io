// tnLoad: Derived from SSSL Syntax
// By using traditional JavaScript standards, learning
// tnLoad is as easy as knowing the tnLoad namespace.
(function() {
        var firstScript = document.getElementsByTagName("script")[0];
        var scriptHead = firstScript.parentNode;
        var re = /ded|co/;
        var onload = "onload";
        var onreadystatechange = "onreadystatechange";
        var readyState = "readyState";
        var load = function(src, fn) {
                        var script = document.createElement("script");
                        script[onload] = script[onreadystatechange] = function() {
                                if (!this[readyState] || re.test(this[readyState])) {
                                        script[onload] = script[onreadystatechange] = null;
                                        fn && fn(script);
                                        script = null;
                                }
                        };
                        script.async = true;
                        script.src = src;
                        scriptHead.insertBefore(script, firstScript);
                };
        window.tnLoad = function(srces, fn) {
                if (typeof srces == "string") {
                        load(srces, fn);
                        return;
                }
                var src = srces.shift();
                load(src, function() {
                        if (srces.length) {
                                window.tnLoad(srces, fn);
                        } else {
                                fn && fn();
                        }
                });
        };
})();
