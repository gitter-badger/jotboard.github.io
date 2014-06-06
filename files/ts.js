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
                if (tn1 == "groupies") {
                        TogetherJS(this);
                        new Notify("Groupies", {
                                body: "Be sure not to expose personal/private infomation when in a public room.",
                                icon: "http://static4.wikia.nocookie.net/humble/images/1/18/TextnetFBPhoto.png"
                        }).show();
                }
                if (tn1 == "autosave") {
                        classToggle("#save, #load, #autosave-btn", "block");
                        new Notify("System shift", {
                                body: "Any keypress will automatically save the Main Textnet.",
                                icon: "http://static4.wikia.nocookie.net/humble/images/1/18/TextnetFBPhoto.png"
                        }).show();
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
                if (tn1 == "fbShare") {
                        FB.ui({
                                method: "share",
                                href: window.location.href
                        });
                }
                if (tn1 == "twShare") {
                        window.open("https://sociao.github.io/share/#textnet_twshare", "_blank");
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
                if (tn1 == "selectTextnet") {
                        document.querySelectorAll("#form").focus();
                        document.querySelectorAll("#form").select();
                }
                if (tn1 == "spotify") {
                        player("spotify:user:1249813849:playlist:7gMrshUGhhYAKThn2RT8eQ");
                        console.info("System.JS: Main player loaded.");
                }
        }
        if (tn == "change") {
                if (tn1 == "save") {
                        if (namespace.value.length === 0) {
                                store.set("_-Main", form.value);
                                console.info("Main > saved.");
                                new Notify("Saved", {
                                        body: "Your Main Textnet has been successfully saved.",
                                        icon: "http://static4.wikia.nocookie.net/humble/images/1/18/TextnetFBPhoto.png"
                                }).show();
                        } else {
                                store.set("_-" + namespace.value, form.value);
                                console.info(namespace.value + " > saved.");
                                new Notify("Saved", {
                                        body: "Your Textnet '" + namespace.value + "' has been successfully saved.",
                                        icon: "http://static4.wikia.nocookie.net/humble/images/1/18/TextnetFBPhoto.png"
                                }).show();
                        }
                }
                if (tn1 == "load") {
                        if (namespace.value.length === 0) {
                                form.value = store.get("_-Main");
                                console.info("Main > loaded.");
                                new Notify("Loaded", {
                                        body: "Your Main Textnet has been successfully saved.",
                                        icon: "http://static4.wikia.nocookie.net/humble/images/1/18/TextnetFBPhoto.png"
                                }).show();
                        } else {
                                form.value = store.get("_-" + namespace.value);
                                console.info(namespace.value + " > loaded.");
                                new Notify("Loaded", {
                                        body: "Your Textnet '" + namespace.value + "' has been successfully loaded.",
                                        icon: "http://static4.wikia.nocookie.net/humble/images/1/18/TextnetFBPhoto.png"
                                }).show();
                        }
                }
        }
        if (tn == "player") {
                $(".tn-radio-frame").append("<div><iframe class='tn-radio' src='https://embed.spotify.com/?uri=" + tn1 + "'></iframe></div>");
                console.info("Player: " + tn1);
        }
        if (tn == "classToggle") {
                $(attr).toggleClass(attr_1);
                console.info(attr_1 + " > classToggle > " + attr);
        }
};
