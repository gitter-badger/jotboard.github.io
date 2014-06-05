// Grabbers
var hashline = function(u) { return window.location.href.indexOf("#" + u) != -1; };
var grabSelector = function(u) { return document.querySelector(u); };
var grabSelectorAll = function(u) { return document.querySelectorAll(u); };
var grabID = function(u) { return document.getElementById(u); };
var grabClass = function(u) { return document.getElementsByClassName(u); };
var grabTag = function(u) { return document.getElementsByTagName(u); };

$(window).load(function() {
        jQuery.fn.toggleAttr = function(attr, attr1, attr2) {
                return this.each(function() {
                        if ($(this).attr(attr) == attr1) $(this).attr(attr, attr2);
                        else $(this).attr(attr, attr1);
                });
        };
        jQuery.fn.toggleHTML = function(attr1, attr2) {
                return this.each(function() {
                        if ($(this).html() == attr1) $(this).html(attr2);
                        else $(this).html(attr1);
                });
        };
        $("body").toggleAttr("style", "display: visible;", "display: none;");
        $("#menu-btn").click(function() {
                $(this).toggleHTML("More", "Less");
                $(this).toggleAttr("title", "Close Menu", "Open Menu");
                $("#submenu").toggleAttr("style", "display: visible;", "display: none;");
        });
        $("iframe").attr("scrolling", "no").attr("frameborder", "0").attr("allowtransparency", "true");
        // Exclusion list for #MODS.
        if (hashline("groupies") || hashline("hashIt") || hashline("fbShare") || hashline("twShare")) {
                return false;
        }
        // Using #MOD's as a defence shield, counts for #defence, #idl and #IDL.
        if (hashline("defence") || hashline("idl") || hashline("IDL")) {
                window._idl = {};
                _idl.variant = "modal";
                tnLoad("http://members.internetdefenseleague.org/include/?url=" + (_idl.url || "") + "&campaign=" + (_idl.campaign || "") + "&variant=" + (_idl.variant || "modal"), function() {
                        console.info("We will never give the Internet up: The Internet Defence League Script has been loaded.");
                });
        }
        // Checking whether user is using #MODS or not.
        if (window.location.hash) {
                document.title = "# Textnet";
        } else {
                document.title = "Textnet";
        }
});

tnLoad("https://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js", function() { console.info("Loaded Bootstrap (JS)"); });
tnLoad("https://cdn.rawgit.com/alexgibson/notify.js/master/notify.js", function() { console.info("Loaded Notify.JS"); });
tnLoad("//bootboxjs.com/bootbox.js", function() { console.info("Loaded Bootbox"); });
tnLoad("http://leaverou.github.io/prefixfree/prefixfree.min.js", function() { console.info("Loaded Prefixfree"); });

tnLoad("//momentjs.com/downloads/moment.min.js", function() {
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

tnLoad("https://marcuswestin.github.io/store.js/store.min.js", function() {
        console.info("Store.js loaded.");
        var form = document.querySelectorAll("#form");
        var namespace = document.querySelectorAll("#namespace");
        var initStore = function() {
                        if (window.localStorage["_-Main"]) {
                                form.value = store.get("_-Main");
                        } else {
                                return false;
                        }
                };
        initStore();
});

tnLoad("//cdn.craig.is/js/mousetrap/mousetrap.min.js", function() {
        // Keyboard Combos
        Mousetrap.bind("mod+a", hashIt("selectTextnet"));
        Mousetrap.bind("mod+m", change("save"));
        Mousetrap.bind("mod+n", change("load"));
        Mousetrap.bind("up up down down left right left right b a enter", function() {
                // Konami Code
                bootbox.dialog({
                        title: "THA KONAMI COOOODE!!",
                        message: "YOU BLOODY DID IT, WOOOO YEEEEAAAHHH!!!"
                });
        });
});

tnLoad("//togetherjs.com/togetherjs-min.js", function() {
        // Groupies
        TogetherJSConfig_siteName = "Textnet";
        TogetherJSConfig_toolName = "Groupies";
        TogetherJSConfig_dontShowClicks = true;
        TogetherJSConfig_youtube = true;
        TogetherJSConfig_disableWebRTC = false;
        TogetherJSConfig_suppressInvite = false;
        TogetherJSConfig_suppressJoinConfirmation = true;
});

tnLoad(("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/analytics.js", function() {
        var _gaq = _gaq || [];
        _gaq.push(["_setAccount", "UA-37813397-3"]);
        _gaq.push(["_trackPageview"]);
});

function hashIt(hash) {
        if (hash == "groupies") {
                TogetherJS(this);
                new Notify("Groupies", {
                        body: "Be sure not to expose personal/private infomation when in a public room.",
                        icon: "http://static4.wikia.nocookie.net/humble/images/1/18/TextnetFBPhoto.png"
                }).show();
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
        }
        if (hash == "fbShare") {
                FB.ui({
                        method: "share",
                        href: window.location.href
                });
        }
        if (hash == "twShare") {
                window.open("https://sociao.github.io/share/#textnet_twshare", "_blank");
        }
        if (hash == "youtube") {
                bootbox.prompt("YouTube Search", function(srch) {
                        if (srch === null) {
                                return false;
                        } else {
                                window.open("https://www.youtube.com/results?utm_source=opensearch&search_query=" + srch, "_blank");
                        }
                });
        }
        if (hash == "selectTextnet") {
                document.querySelectorAll("#form").focus();
                document.querySelectorAll("#form").select();
        }
        if (hash == "spotify") {
                player("spotify:user:1249813849:playlist:7gMrshUGhhYAKThn2RT8eQ");
                console.info("System.JS: Main player loaded.");
        } else {
                console.log("ping");
                console.error("ping");
                return false;
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

function player(uri) {
        $(".tn-radio-frame").append("<div><iframe class='tn-radio' src='https://embed.spotify.com/?uri=" + uri + "'></iframe></div>");
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
