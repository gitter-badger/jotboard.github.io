$(window).load(function() {
        // Stream (constant)
        var streamFunction = function() {
                        // Making it work
                        $("#form.day").attr("placeholder", moment(new Date()).format("[Hi, it's ]dddd[, the] Do [of] MMMM YYYY[ and time is] h:mm a[.]"));
                        $("#form.night").attr("placeholder", moment(new Date()).format("[Hows it goin? it was a nice ]dddd, Do [of] MMMM YYYY[ and the time is] h:mm a[, goodnight.]"));
                        // Pushing the Marquee, the hard and only way.
                        if (0 <= new Date().getHours() && new Date().getHours() < 18) {
                                $("#form").addClass("day");
                        } else {
                                $("#form").addClass("night");
                        }
                };
        streamFunction();
        setInterval(streamFunction, 1);
        // Static
        var staticFunction = function() {
                        $(function() {
                                $("#menu-btn").click(function() {
                                        $(this).toggleText("More", "Less");
                                        $(this).toggleAttr("title", "Open Menu", "Close Menu");
                                        classToggle("#submenu", "block");
                                });
                                $("body").toggleAttr("style", "display: visible;", "display: none;");
                                $("iframe").attr("scrolling", "no").attr("frameborder", "0").attr("allowtransparency", "true");
                                $("[disabled]").addClass("disabled");
                                $(window).tooltip({
                                        selector: "[data-title]",
                                        trigger: "hover",
                                        animation: false
                                });
                        });
                        $(function() {
                                // Below the script get's the full url.
                                var bse_url = window.location.href;
                                // Create an array.
                                var hashes = bse_url.split("#");
                                // Check if the array is bigger 1 value.
                                if (hashes.length > 1) {
                                        // Set to 1 because the indentation needs to be set to a static number.
                                        for (var i = 1; i < hashes.length; i++) {
                                                // Run the function. We run the # value through the window to grab the function, hence the name #MODS.
                                                window[hashes[i]]();
                                                if (typeof hashes === "undefined") {
                                                        console.error("Hash doesn't exist, hit us up on http://textnet.github.io/report/ to submit a new feature.");
                                                }
                                                // Thanks to @noahgelman from CSS-Tricks to help me out with this.
                                        }
                                }
                                // Exclusion list for #MODS.
                                if (hashline("groupies") || hashline("fbShare") || hashline("twShare")) {
                                        return false;
                                }
                                // Checking whether user is using #MODS or not.
                                if (window.location.hash) {
                                        document.title = "# Textnet";
                                } else {
                                        document.title = "Textnet";
                                }
                        });
                };
        staticFunction();
});

// Grabbers
var hashline = function(u) { return window.location.href.indexOf("#" + u) != -1; };
var grabSelector = function(u) { return document.querySelector(u); };
var grabSelectorAll = function(u) { return document.querySelectorAll(u); };
var grabID = function(u) { return document.getElementById(u); };
var grabClass = function(u) { return document.getElementsByClassName(u); };
var grabTag = function(u) { return document.getElementsByTagName(u); };

jQuery.fn.toggleAttr = function(attr, attr1, attr2) {
        return this.each(function() {
                if ($(this).attr(attr) == attr1) $(this).attr(attr, attr2);
                else $(this).attr(attr, attr1);
        });
};

jQuery.fn.toggleText = function(_0, _1) {
        return this.each(function() {
                var text = $(this).text();
                if (text.indexOf(_0) > -1) $(this).text(text.replace(_0, _1));
                else $(this).text(text.replace(_1, _0));
        });
};

$.getScript("//cdn.craig.is/js/mousetrap/mousetrap.min.js").done(function() {
        console.info("Backend.js: Mousetrap > loaded.");
        // Keyboard Combos
        Mousetrap.bind("mod+a", selectTextnet);
        Mousetrap.bind("mod+m", save);
        Mousetrap.bind("up up down down left right left right b a enter", function() {
                // Konami Code
                bootbox.dialog({
                        title: "THA KONAMI COOOODE!!",
                        message: "YOU BLOODY DID IT, WOOOO YEEEEAAAHHH!!!"
                });
        });
}).fail(function() {
        console.error("Backend.js: Mousetrap > crashed");
});

$.getScript("https://marcuswestin.github.io/store.js/store.min.js").done(function() {
        console.info("Backend.js: Store.js > loaded.");
        var form = grabSelectorAll("#form");
        var namespace = grabSelectorAll("#namespace");
        if (window.localStorage["_-Main"]) {
                form.value = store.get("_-Main");
                console.log("Hello, friend");
        } else {
                console.log("Hello");
        }
}).fail(function() {
        console.error("Backend.js: Store.js > crashed.");
});

function save() {
        if (namespace.value.length === 0) {
                store.set("_-Main", form.value);
                notify("Saved", "Your Main Textnet has been successfully saved.");
                console.info("Backend.js: Main > saved.");
        } else {
                store.set("_-" + namespace.value, form.value);
                notify("Saved", "Your Textnet '" + namespace.value + "' has been successfully saved.");
                console.info("Backend.js: " + namespace.value + " > saved.");
        }
}

function load() {
        if (namespace.value.length === 0) {
                form.value = store.get("_-Main");
                notify("Loaded", "Your Main Textnet has been successfully loaded.");
                console.info("Backend.js: Main > loaded.");
        } else {
                form.value = store.get("_-" + namespace.value);
                notify("Loaded", "Your Textnet '" + namespace.value + "' has been successfully loaded.");
                console.info("Backend.js: " + namespace.value + " > loaded.");
        }
}

function hashIt(hash) {
        if (hash == "groupies") {
                TogetherJS(this);
                notify("Groupies", "Be sure not to expose personal infomation when in a public room.");
                return false;
        }
        // Open a webpage on Textnet, cleanly
        if (hash == "url" || hash == "URL") {
                bootbox.prompt("Open...", function(addr) {
                        if (addr === null) {
                                return false;
                        } else {
                                window.open(addr, "_blank");
                        }
                });
        }
        if (hash == "youtube") {
                bootbox.prompt("YouTube Search", function(srch) {
                        if (srch === null) {
                                return false;
                        } else {
                                window.open("https://www.youtube.com/results?utm_source=opensearch&search_query=" + srch, "_blank");
                        }
                });
                return false;
        }
        if (hash == "autosave") {
                classToggle("#save, #load, #autosave-btn", "block");
                notify("System shift", "Any keypress will automatically save the Main Textnet.");
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
                return false;
        }
        if (hash == "gamecenter") {
                window.location.replace("http://sociao.github.io/cdn/emph/?q=Flash+Games");
                notify("Done!!", "Textnet has opened Game Center.");
                return false;
        }
        if (hash == "selectTextnet") {
                select("#form");
                return false;
        }
        if (hash == "NetNeut") {
                window.location.replace("https://codepen.io/ChrisLolz/full/gKcxw");
                return false;
        }
        if (hash == "fbShare") {
                FB.ui({
                        method: "share",
                        href: "https://sociao.github.io/textnet/"
                });
                return false;
        }
        if (hash == "twShare") {
                window.open("https://sociao.github.io/share/#textnet_twshare", "_blank");
                return false;
        }
        if (hash == "defence") {
                window.location.replace("https://www.internetdefenseleague.org/");
                return false;
        } else {
                window.location.href = "http://" + window.location.host + "/textnet/" + "#" + hash;
                location.reload(true);
        }
}

function player(uri) {
        $(".tn-radio-frame").append("<div><iframe class='tn-radio' src='https://embed.spotify.com/?uri=" + uri + "'></iframe></div>");
        console.info("System.JS: Player function executed.");
}

function notify(l4, l4_1) {
        new Notify(l4, {
                body: l4_1,
                icon: "http://static4.wikia.nocookie.net/humble/images/1/18/TextnetFBPhoto.png"
        }).show();
}

$.getScript("https://cdn.rawgit.com/alexgibson/notify.js/master/notify.js").done(function() {
        console.info("Backend.js: Notify.js loaded.");
}).fail(function() {
        console.error("Backend.js: Mousetrap crashed");
});

$.getScript("//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js").done(function() {
        // Bootstrap (JS)
        console.info("Backend.js: Bootstrap (JS) > loaded.");
}).fail(function() {
        console.error("Backend.js: Bootstrap (JS) > crashed.");
});

$.getScript("https://leaverou.github.io/prefixfree/prefixfree.min.js").done(function() {
        console.info("Backend.js: Prefixfree > loaded.");
}).fail(function() {
        console.error("Backend.js: Prefixfree > crashed.");
});

$.getScript("//apis.google.com/js/platform.js").done(function() {
        console.info("Backend.js: Google Platform > loaded");
}).fail(function() {
        console.error("Backend.js: Google Platform > crashed");
});

$.getScript("//togetherjs.com/togetherjs-min.js").done(function() {
        // TogetherJS
        console.info("Backend.js: TogetherJS > loaded.");
}).fail(function() {
        console.error("Backend.js: TogetherJS > crashed.");
});

$.getScript(("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/analytics.js").done(function() {
        // Google Analytics
        console.info("Backend.js: Traffic Analytics > loaded");
        var _gaq = _gaq || [];
        _gaq.push(["_setAccount", "UA-37813397-3"]);
        _gaq.push(["_trackPageview"]);
}).fail(function() {
        console.error("Backend.js: Traffic Analytics > crashed");
});

function classToggle(l1, l1_1) {
        $(l1).toggleClass(l1_1);
        console.info("Backend.js: " + l1_1 + " > classToggle > " + l1);
}

function select(l3) {
        grabSelectorAll(l3).focus();
        grabSelectorAll(l3).select();
        console.info("Backend.js: " + l3 + " > select");
}

$.getScript("//momentjs.com/downloads/moment.min.js").done(function() {
        // MomentJS
        console.info("Backend.js: MomentJS > loaded.");
}).fail(function() {
        console.error("Backend.js: MomentJS > crashed.");
});

$.getScript("//bootboxjs.com/bootbox.js").done(function() {
        // TogetherJS
        console.info("Backend.js: Bootbox > loaded.");
}).fail(function() {
        console.error("Backend.js: Bootbox > crashed.");
});

$.getScript(("https://members.internetdefenseleague.org/include/?url=" + (_idl.url || window.location.href) + "&campaign=" + (_idl.campaign || "") + "&variant=banner")).done(function() {
        console.info("Backend.js: Internet Defence League script > loaded.");
        // Internet Defence League
        window._idl = {};
        _idl.variant = "banner";
}).fail(function() {
        console.error("Backend.js: Internet Defence League script > crashed.");
});

(function(d, s, id) {
        // Facebook
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=176413809071512&version=v2.0";
        fjs.parentNode.insertBefore(js, fjs);
}(document, "script", "facebook-jssdk"));

!function(d, s, id) {
        // Twitter
        var js, fjs = d.getElementsByTagName(s)[0],
                p = /^http:/.test(d.location) ? "http" : "https";
        if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
        }
}(document, "script", "twitter-wjs");
