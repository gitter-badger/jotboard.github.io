// Notes: add secure + as a prefix when adding a external plugin.
w.load(function() {
        $("body").textnet("toggleAttr", "style", "display: visible;", "display: none;");
        $(".tn-menu-btn").click(function() {
                $("#submenu").textnet("toggleAttr", "style", "display: visible;", "display: none;");
                t.textnet("toggleHTML", "More", "Less");
                t.textnet("toggleAttr", "title", "Close Menu", "Open Menu");
        });
        $(".tn-event").click(function() { event(); });
        $(".tn-save").click(function() { w.textnet("change", "save"); });
        $(".tn-load").click(function() { w.textnet("change", "load"); });
        $(".tn-groupies").click(function() { w.textnet("execute", "groupies"); });
        $(".tn-youtube").click(function() { w.textnet("execute", "youtube"); });
        $(function() {
                // Checking whether #MODS are being used or not.
                if (window.location.hash) {
                        document.title = "# Textnet";
                        // Hashline
                        if (hashline("youtube") || hashline("yt")) {
                                w.textnet("execute", "youtube");
                        }
                } else {
                        document.title = "Textnet";
                }
        });
});

$(function() {
        var event = function() {
                if (hashline("event")) {
                        if (window.location.protocol == "https:") {
                                event();
                                document.title = "Event Hub / Textnet";
                        }
                        if (window.location.protocol == "http:") {
                                event();
                                document.title = "(Unsecure) Event Hub / Textnet";
                        }
                }
                bootbox.dialog({
                        className: "block",
                        title: "#WhatsCookin",
                        message: "<iframe class='yt-player' width='100%' height='310' src='https://www.youtube.com/embed/?listType=playlist&list=PLXJjNJMpJQKqbpmhNOJNETiMbfZpLjIVb&fs=1&loop=1&showinfo=0&autohide=1&theme=light' frameborder='0' allowfullscreen></iframe>",
                        buttons: {
                                enter: {
                                        label: "Button",
                                        className: "btn-primary",
                                        callback: function() {
                                                window.open(window.location.href, "_top");
                                                return false;
                                        }
                                }
                        }
                });
        };
});

head.load([secure + "//cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"], function() {
        head.load([
                secure + "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min.js",
                secure + "//cdnjs.cloudflare.com/ajax/libs/bootstrap-growl/1.0.0/jquery.bootstrap-growl.min.js"
        ], function() {
                head.load([
                        secure + "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/css/bootstrap.min.css",
                        secure + "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css"
                ]);
        });
});

head.load([secure + "//cdnjs.cloudflare.com/ajax/libs/store.js/1.3.14/store.min.js"], function() {
        var form = document.querySelectorAll("#form");
        var namespace = document.querySelectorAll("#namespace");
        if (window.localStorage["_-Main"]) {
                form.value = store.get("_-Main");
        }
});

head.load([secure + "//cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js"], function() {
        var UT = function() {
                $("#form.day").attr("placeholder", moment(new Date()).format("[Hi, it's ]dddd[, the] Do [of] MMMM YYYY[ and time is] h:mm a[.]"));
                $("#form.night").attr("placeholder", moment(new Date()).format("[Hows it goin? it was a nice ]dddd, Do [of] MMMM YYYY[ and the time is] h:mm a[, goodnight.]"));
                if (0 <= new Date().getHours() && new Date().getHours() < 18) {
                        $("#form").addClass("day");
                } else {
                        $("#form").addClass("night");
                }
        };
        UT();
        setInterval(UT, 1);
});

head.load([secure + "//togetherjs.com/togetherjs-min.js"], function() {
        // Groupies
        TogetherJSConfig_siteName = "Textnet";
        TogetherJSConfig_toolName = "Groupies";
        TogetherJSConfig_dontShowClicks = true;
        TogetherJSConfig_youtube = true;
        TogetherJSConfig_disableWebRTC = true;
        TogetherJSConfig_suppressInvite = false;
        TogetherJSConfig_suppressJoinConfirmation = true;
});
