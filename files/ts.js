// Selectors
// Shrinking our need for adding the same sort of code.
var secure = window.location.protocol;
var hashline = function(u) { return window.location.href.indexOf("#" + u) != -1; };
var createThis = function(u) { return document.createElement(u); };
var grabSelector = function(u) { return document.querySelector(u); };
var grabSelectorAll = function(u) { return document.querySelectorAll(u); };
var w = $(window);
var t = $(this);
Node.prototype.prependChild = function(el) {
        this.childNodes[1] && this.insertBefore(el, this.childNodes[1]) || this.appendChild(el);
};

// w.grab
jQuery.fn.grab = function(syntax, url, success, fail) {
        var head = document.getElementsByTagName("head")[0];
        if (syntax == "js") {
                url.forEach(function(src) {
                        var script = createThis("script");
                        script.type = "text/javascript";
                        script.src = src;
                        script.onload = script.onsuccess = function() {
                                if (success) {
                                        window[success()];
                                        console.info("success > " + src);
                                }
                                if (!success) {
                                        console.info("success > " + src);
                                }
                        };
                        script.onerror = function() {
                                if (fail) {
                                        window[fail()];
                                        console.error("error > " + src);
                                }
                                if (!fail) {
                                        console.error("error > " + src);
                                }
                        };
                        head.prependChild(script);
                });
        }
        if (syntax == "css") {
                url.forEach(function(src) {
                        var link = createThis("link");
                        link.type = "text/css";
                        link.href = src;
                        link.onload = link.onsuccess = function() {
                                if (success) {
                                        window[success()];
                                        console.info("success > " + src);
                                }
                                if (!success) {
                                        console.info("success > " + src);
                                }
                        };
                        link.onerror = function() {
                                if (fail) {
                                        window[fail()];
                                        console.error("error > " + src);
                                }
                                if (!fail) {
                                        console.error("error > " + src);
                                }
                        };
                        head.prependChild(link);
                });
        }
};

// Universal Selector w.textnet
jQuery.fn.textnet = function(tn, tn1, tn2, tn3) {
        if (tn == "toggleAttr") {
                return this.each(function() {
                        if (t.attr(tn1) == tn2) t.attr(tn1, tn3);
                        else t.attr(tn1, tn2);
                });
        }
        if (tn == "toggleHTML") {
                return this.each(function() {
                        if (t.html() == tn1) t.html(tn2);
                        else t.html(tn1);
                });
        }
        if (tn == "change") {
                if (tn1 == "save") {
                        if (namespace.value.length === 0) {
                                store.set("_-Main", form.value);
                                console.info("Main > saved.");
                                $.bootstrapGrowl("Main > Saved", {
                                        ele: "body",
                                        type: "success",
                                        offset: {
                                                from: "bottom",
                                                amount: 20
                                        },
                                        align: "right",
                                        width: 290,
                                        delay: 4200,
                                        allow_dismiss: true,
                                        stackup_spacing: 10
                                });
                        } else {
                                store.set("_-" + namespace.value, form.value);
                                console.info(namespace.value + " > saved");
                                $.bootstrapGrowl(namespace.value + " > Saved", {
                                        ele: "body",
                                        type: "info",
                                        offset: {
                                                from: "bottom",
                                                amount: 20
                                        },
                                        align: "right",
                                        width: 270,
                                        delay: 4200,
                                        allow_dismiss: true,
                                        stackup_spacing: 10
                                });
                        }
                }
                if (tn1 == "load") {
                        if (namespace.value.length === 0) {
                                form.value = store.get("_-Main");
                                console.info("Main > loaded");
                                $.bootstrapGrowl("Main > Loaded", {
                                        ele: "body",
                                        type: "info",
                                        offset: {
                                                from: "bottom",
                                                amount: 20
                                        },
                                        align: "right",
                                        width: 300,
                                        delay: 4200,
                                        allow_dismiss: true,
                                        stackup_spacing: 10
                                });
                        } else {
                                form.value = store.get("_-" + namespace.value);
                                console.info(namespace.value + " > loaded.");
                                $.bootstrapGrowl(namespace.value + " > Loaded", {
                                        ele: "body",
                                        type: "info",
                                        offset: {
                                                from: "bottom",
                                                amount: 20
                                        },
                                        align: "right",
                                        width: 280,
                                        delay: 4200,
                                        allow_dismiss: true,
                                        stackup_spacing: 10
                                });
                        }
                }
        }
        if (tn == "execute") {
                if (tn1 == "youtube") {
                        bootbox.prompt("YouTube Search", function(srch) {
                                if (srch === null) {
                                        bootbox.hideAll();
                                } else {
                                        window.open("https://www.youtube.com/results?utm_source=opensearch&search_query=" + srch, "_blank");
                                }
                        });
                }
        }
};
