jQuery.fn.toggleAttr = function(attr, attr_1, attr_2) {
        return this.each(function() {
                if ($(this).attr(attr) == attr_1) $(this).attr(attr, attr_2);
                else $(this).attr(attr, attr_1);
        });
};

jQuery.fn.toggleText = function(attr, attr_1) {
        return this.each(function() {
                if ($(this).text().indexOf(attr) > -1) $(this).text($(this).text().replace(attr, attr_1));
                else $(this).text($(this).text().replace(attr_1, attr));
        });
};

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
                                        $(this).toggleAttr("title", "Close Menu", "Open Menu");
                                        $("#submenu").toggleAttr("style", "display: visible;", "display: none;");
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
var loadScript = function(attr, attr_1, attr_2) { $.getScript(attr).done(attr_1).fail(attr_2); };
var hashline = function(u) { return window.location.href.indexOf("#" + u) != -1; };
var grabSelector = function(u) { return document.querySelector(u); };
var grabSelectorAll = function(u) { return document.querySelectorAll(u); };
var grabID = function(u) { return document.getElementById(u); };
var grabClass = function(u) { return document.getElementsByClassName(u); };
var grabTag = function(u) { return document.getElementsByTagName(u); };

function hashIt(hash) {
        if (hash == "spotify") {
                player("spotify:user:1249813849:playlist:7gMrshUGhhYAKThn2RT8eQ");
                console.info("System.JS: Main player loaded.");
        }
        if (hash == "groupies") {
                TogetherJS(this);
                notify("Groupies", "Be sure not to expose personal/private infomation when in a public room.");
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
        if (hash == "fbShare") {
                FB.ui({
                        method: "share",
                        href: window.location.href
                });
                return false;
        }
        if (hash == "twShare") {
                window.open("https://sociao.github.io/share/#textnet_twshare", "_blank");
                return false;
        }
        if (hash == "selectTextnet") {
                select("#form");
                return false;
        } else {
                window.location.href = "http://" + window.location.host + "/textnet/" + "#" + hash;
                location.reload(true);
        }
}

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

$(function() {
        loadScript(("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/analytics.js", function() {
                var _gaq = _gaq || [];
                _gaq.push(["_setAccount", "UA-37813397-3"]);
                _gaq.push(["_trackPageview"]);
        }, function() {
                console.error("Analytics loaded");
        });
        loadScript("https://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js", function() {
                console.info("Bootstrap loaded");
        }, function() {
                console.error("Bootstrap crashed");
        });
        loadScript("https://marcuswestin.github.io/store.js/store.min.js", function() {
                console.info("Backend.js: Store.js > loaded.");
                var form = grabSelectorAll("#form");
                var namespace = grabSelectorAll("#namespace");
                if (window.localStorage["_-Main"]) {
                        form.value = store.get("_-Main");
                        console.log("Hello, friend");
                } else {
                        console.log("Hello");
                }
        }, function() {
                console.error("Store.JS crashed");
        });
        loadScript("https://cdn.rawgit.com/alexgibson/notify.js/master/notify.js", function() {
                console.info("Notify.JS loaded");
        }, function() {
                console.error("Notify.JS crashed");
        });
        loadScript("http://leaverou.github.io/prefixfree/prefixfree.min.js", function() {
                console.info("Prefixfree loaded");
        }, function() {
                console.error("Prefixfree crashed");
        });
        loadScript("//cdn.craig.is/js/mousetrap/mousetrap.min.js", function() {
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
        }, function() {
                console.error("Mousetrap crashed");
        });
        loadScript("//momentjs.com/downloads/moment.min.js", function() {
                console.info("MomentJS loaded");
        }, function() {
                console.error("MomentJS crashed");
        });
        loadScript("//apis.google.com/js/platform.js", function() {
                console.info("Google Platform loaded");
        }, function() {
                console.error("Google Platform crashed");
        });
        loadScript("//togetherjs.com/togetherjs-min.js", function() {
                console.info("TogetherJS loaded");
        }, function() {
                console.error("TogetherJS crashed");
        });
        loadScript("//bootboxjs.com/bootbox.js", function() {
                console.info("Bootbox loaded");
        }, function() {
                console.error("Bootbox crashed");
        });
        loadScript(("https://members.internetdefenseleague.org/include/?url=" + (_idl.url || window.location.href) + "&campaign=" + (_idl.campaign || "") + "&variant=banner"), function() {
                console.info("Backend.js: Internet Defence League script > loaded.");
                // Internet Defence League
                window._idl = {};
                _idl.variant = "banner";
        }, function() {
                console.error("Internet Defence League script > crashed");
        });
});

function notify(attr, attr_1) {
        new Notify(attr, {
                body: attr_1,
                icon: "http://static4.wikia.nocookie.net/humble/images/1/18/TextnetFBPhoto.png"
        }).show();
}

function player(attr) {
        $(".tn-radio-frame").append("<div><iframe class='tn-radio' src='https://embed.spotify.com/?uri=" + attr + "'></iframe></div>");
        console.info("System.JS: Player function executed.");
}

function classToggle(attr, attr_1) {
        $(attr).toggleClass(attr_1);
        console.info("Backend.js: " + attr_1 + " > classToggle > " + attr);
}

function select(attr) {
        grabSelectorAll(attr).focus();
        grabSelectorAll(attr).select();
        console.info("Backend.js: " + attr + " > select");
}

function feature() {
        bootbox.dialog({
                title: "Textnet Featurettes, a special unlisted selection for Textnet masters.",
                message: "<iframe class='yt-frame' src='https://www.youtube.com/embed/?listType=playlist&list=PLXJjNJMpJQKqbpmhNOJNETiMbfZpLjIVb&loop=1&rel=0&autohide=1&theme=light'></iframe>"
        });
        console.log("Wow you found me.");
}

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
