// Grabbers
var hashline = function(u) { return window.location.href.indexOf("#" + u) != -1; };
var grabSelector = function(u) { return document.querySelector(u); };
var grabSelectorAll = function(u) { return document.querySelectorAll(u); };
var grabID = function(u) { return document.getElementById(u); };
var grabClass = function(u) { return document.getElementsByClassName(u); };
var grabTag = function(u) { return document.getElementsByTagName(u); };

// tnLoad
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

// Universal Selector
jQuery.fn.tn = function(tn, tn1, tn2, tn3) {
        if (tn == "toggleAttr") {
                return this.each(function() {
                        if ($(this).attr(tn1) == tn2) $(this).attr(tn1, tn3);
                        else $(this).attr(tn1, tn2);
                });
        }
        if (tn == "toggleHTML") {
                return this.each(function() {
                        if ($(this).html() == tn1) $(this).html(tn2);
                        else $(this).html(tn1);
                });
        }
        if (tn == "tnLoad" || tn == "tnload") {
                tnLoad(tn1, tn2);
        }
        if (tn == "execute") {
                if (tn1 == "autosave") {
                        classToggle("#save, #load, #autosave-btn", "block");
                        $.bootstrapGrowl("System Shift", {
                                ele: "body",
                                // which element to append to
                                type: "info",
                                offset: { from: "bottom", amount: 20 },
                                align: "right",
                                width: 270,
                                delay: 4200,
                                allow_dismiss: true,
                                stackup_spacing: 10
                        });
                        form.onkeydown = function() {
                                if (namespace.value.length === 0) {
                                        store.set("_-Main", form.value);
                                } else {
                                        store.set("_-" + namespace.value, form.value);
                                }
                        };
                        form.onkeyup = function() {
                                if (namespace.value.length === 0) {
                                        store.set("_-Main", form.value);
                                } else {
                                        store.set("_-" + namespace.value, form.value);
                                }
                        };
                }
                if (tn1 == "youtube") {
                        bootbox.prompt("YouTube Search", function(srch) {
                                if (srch === null) {
                                        return false;
                                } else {
                                        window.open("https://www.youtube.com/results?utm_source=opensearch&search_query=" + srch, "_blank");
                                }
                        });
                }
        }
        if (tn == "change") {
                if (tn1 == "save") {
                        if (namespace.value.length === 0) {
                                store.set("_-Main", form.value);
                                console.info("Main > saved.");
                                $.bootstrapGrowl("Main Textnet saved", {
                                        ele: "body",
                                        // which element to append to
                                        type: "success",
                                        offset: { from: "bottom", amount: 20 },
                                        align: "right",
                                        width: 270,
                                        delay: 4200,
                                        allow_dismiss: true,
                                        stackup_spacing: 10
                                });
                        } else {
                                store.set("_-" + namespace.value, form.value);
                                console.info(namespace.value + " > saved.");
                                $.bootstrapGrowl(namespace.value + " has been saved", {
                                        ele: "body",
                                        // which element to append to
                                        type: "info",
                                        offset: { from: "bottom", amount: 20 },
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
                                $.bootstrapGrowl("Your Main Textnet has been loaded.", {
                                        ele: "body",
                                        // which element to append to
                                        type: "info",
                                        offset: { from: "bottom", amount: 20 },
                                        align: "right",
                                        width: 270,
                                        delay: 4200,
                                        allow_dismiss: true,
                                        stackup_spacing: 10
                                });
                        } else {
                                form.value = store.get("_-" + namespace.value);
                                console.info(namespace.value + " > loaded.");
                                $.bootstrapGrowl(namespace.value + " has been loaded.", {
                                        ele: "body",
                                        // which element to append to
                                        type: "info",
                                        offset: { from: "bottom", amount: 20 },
                                        align: "right",
                                        width: 270,
                                        delay: 4200,
                                        allow_dismiss: true,
                                        stackup_spacing: 10
                                });
                        }
                }
        }
};
