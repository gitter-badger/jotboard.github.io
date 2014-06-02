LazyLoad.js("https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js", function() {
        $.fn.toggleAttr = function(attr, attr1, attr2) {
                return this.each(function() {
                        if ($(this).attr(attr) == attr1) $(this).attr(attr, attr2);
                        else $(this).attr(attr, attr1);
                });
        };
        $.fn.toggleText = function(attr, attr1, attr2) {
                return this.each(function() {
                        if ($(attr).text() === attr1) $(attr).text(attr2);
                        else $(attr).text(attr1);
                });
        };
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
                                console.error("Hash doesn't exist, hit us up on http://textnet.github.io/report/ to submit a new feature or bug to fix.");
                        }
                        // Thanks to @noahgelman from CSS-Tricks to help me out with this.
                }
        }
        // Exclusion list for #MODS.
        if (hashline("groupies") || hashline("hashIt") || hashline("fbShare") || hashline("twShare")) {
                return false;
        }
        // Checking whether user is using #MODS or not.
        if (window.location.hash) { document.title = "# Textnet"; }
        else { document.title = "Textnet"; }
        $("body").toggleAttr("style", "display: visible;", "display: none;");
        $("#menu-btn").click(function() {
                $(this).toggleText("More", "Less");
                $(this).toggleAttr("title", "Close Menu", "Open Menu");
                $("#submenu").toggleAttr("style", "display: visible;", "display: none;");
        });
        LazyLoad.js("//momentjs.com/downloads/moment.min.js", function() {
                var updateTime = function() {
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
                updateTime();
                setInterval(updateTime, 1);
        });
        $("iframe").attr("scrolling", "no").attr("frameborder", "0").attr("allowtransparency", "true");
});

// JS
LazyLoad.js("https://marcuswestin.github.io/store.js/store.min.js", function() {
        console.info("Backend.js: Store.js > loaded.");
        var form = grabSelectorAll("#form");
        var namespace = grabSelectorAll("#namespace");
        if (window.localStorage["_-Main"]) {
                form.value = store.get("_-Main");
        } else {
                return false;
        }
});

LazyLoad.js([
        "http://leaverou.github.io/prefixfree/prefixfree.min.js",
        "https://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js",
        "https://cdn.rawgit.com/alexgibson/notify.js/master/notify.js",
        "//bootboxjs.com/bootbox.js"
    ], function() {
        console.info("Loaded Bootbox, Prefixfree, Bootstrap (JS) and Notify.JS");
});

LazyLoad.js("//cdn.craig.is/js/mousetrap/mousetrap.min.js", function() {
        // Keyboard Combos
        Mousetrap.bind("mod+a", hashIt("selectTextnet"));
        Mousetrap.bind("mod+m", save);
        Mousetrap.bind("up up down down left right left right b a enter", function() {
                // Konami Code
                bootbox.dialog({
                        title: "THA KONAMI COOOODE!!",
                        message: "YOU BLOODY DID IT, WOOOO YEEEEAAAHHH!!!"
                });
        });
});

LazyLoad.js("//togetherjs.com/togetherjs-min.js", function() {
        // Groupies
        TogetherJSConfig_siteName = "Textnet";
        TogetherJSConfig_toolName = "Groupies";
        TogetherJSConfig_dontShowClicks = true;
        TogetherJSConfig_youtube = true;
        TogetherJSConfig_disableWebRTC = false;
        TogetherJSConfig_suppressInvite = false;
        TogetherJSConfig_suppressJoinConfirmation = true;
});

LazyLoad.js(("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/analytics.js", function() {
        var _gaq = _gaq || [];
        _gaq.push(["_setAccount", "UA-37813397-3"]);
        _gaq.push(["_trackPageview"]);
});

// CSS
LazyLoad.css([
        "//textnet.github.io/files/system.css",
        "//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css",
        "https://fonts.googleapis.com/css?family=Raleway:300|Source+Code+Pro:400,700",
        "//fontawesome.io/assets/font-awesome/css/font-awesome.css"
    ], function() {
        console.info("Loaded System.CSS, Bootstrap (CSS), Google Webfonts and Font Awesome.");
});

// Grabbers
function loadScript(attr, attr_1, attr_2) { $.getScript(attr).done(attr_1).fail(attr_2); }
var hashline = function(u) { return window.location.href.indexOf("#" + u) != -1; };
var grabSelector = function(u) { return document.querySelector(u); };
var grabSelectorAll = function(u) { return document.querySelectorAll(u); };
var grabID = function(u) { return document.getElementById(u); };
var grabClass = function(u) { return document.getElementsByClassName(u); };
var grabTag = function(u) { return document.getElementsByTagName(u); };

function hashIt(hash) {
        if (hash == "groupies") {
                TogetherJS(this);
                new Notify("Groupies", {
                        body: "Be sure not to expose personal/private infomation when in a public room.",
                        icon: "http://static4.wikia.nocookie.net/humble/images/1/18/TextnetFBPhoto.png"
                }).show();
                return false;
        }
        if (hash == "autosave") {
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
        if (hash == "selectTextnet") {
                select("#form");
                return false;
        }
        if (hash == "spotify") {
                player("spotify:user:1249813849:playlist:7gMrshUGhhYAKThn2RT8eQ");
                console.info("System.JS: Main player loaded.");
        } else {
                window.location.href = "http://" + window.location.host + "/textnet/" + "#" + hash;
                location.reload(true);
        }
}

function change(type) {
        if (type == "save") {
                if (namespace.value.length === 0) {
                        store.set("_-Main", form.value);
                        console.info("Backend.js: Main > saved.");
                        new Notify("Saved", {
                                body: "Your Main Textnet has been successfully saved.",
                                icon: "http://static4.wikia.nocookie.net/humble/images/1/18/TextnetFBPhoto.png"
                        }).show();
                } else {
                        store.set("_-" + namespace.value, form.value);
                        console.info("Backend.js: " + namespace.value + " > saved.");
                        new Notify("Saved", {
                                body: "Your Textnet '" + namespace.value + "' has been successfully saved.",
                                icon: "http://static4.wikia.nocookie.net/humble/images/1/18/TextnetFBPhoto.png"
                        }).show();
                }
        }
        if (type == "load") {
                if (namespace.value.length === 0) {
                        form.value = store.get("_-Main");
                        console.info("Backend.js: Main > loaded.");
                        new Notify("Loaded", {
                                body: "Your Main Textnet has been successfully saved.",
                                icon: "http://static4.wikia.nocookie.net/humble/images/1/18/TextnetFBPhoto.png"
                        }).show();
                } else {
                        form.value = store.get("_-" + namespace.value);
                        console.info("Backend.js: " + namespace.value + " > loaded.");
                        new Notify("Loaded", {
                                body: "Your Textnet '" + namespace.value + "' has been successfully loaded.",
                                icon: "http://static4.wikia.nocookie.net/humble/images/1/18/TextnetFBPhoto.png"
                        }).show();
                }
        }
}

function select(attr) {
        if (typeof attr == "undefined") {
                console.error("Bad Response: Attr undefined");
        }
        document.querySelectorAll(attr).focus();
        document.querySelectorAll(attr).select();
        console.info("Backend.js: " + attr + " > select");
}

function classToggle(attr, attr_1) {
        $(attr).toggleClass(attr_1);
        console.info("Backend.js: " + attr_1 + " > classToggle > " + attr);
}

function feature() {
        bootbox.dialog({
                title: "Textnet Featurettes, a special unlisted selection for Textnet masters.",
                message: "<iframe class='yt-frame' src='https://www.youtube.com/embed/?listType=playlist&list=PLXJjNJMpJQKqbpmhNOJNETiMbfZpLjIVb&loop=1&rel=0&autohide=1&theme=light'></iframe>"
        });
        console.log("Wow you found me.");
}
