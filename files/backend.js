// Notes: add secure + as a prefix when adding a external plugin.
DevMode = true;
head.load(["//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js", "files/ts.js"], function() {
        $(function() {
                var DevMode;
                if (DevMode == true) {
                        if (hashline("forceuse")) return false;
                        else window.location.replace("/closed");
                }
        });
        head.load("//cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js", function() {
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
        $("body").toggleClass("block");
        $(".tn-menu-btn").click(function() {
                $("#submenu").toggleClass("block");
                t.textnet("toggleHTML", "More", "Less");
                t.textnet("toggleAttr", "title", "Close Menu", "Open Menu");
        });
        $(".tn-event").click(function() {
                event();
        });
        $(".tn-save").click(function() {
                $(window).textnet("change", "save"); });
        $(".tn-load").click(function() { $(window).textnet("change", "load"); });
        $(".tn-youtube").click(function() { $(window).textnet("execute", "youtube"); });
        $(function() {
                // Checking whether #MODS are being used or not.
                if (window.location.hash) {
                        document.title = "# Textnet";
                        // Hashline
                        if (hashline("youtube") || hashline("yt")) {
                                $(window).textnet("execute", "youtube");
                        }
                } else {
                        document.title = "Textnet";
                }
        });
        head.load("//cdnjs.cloudflare.com/ajax/libs/store.js/1.3.14/store.min.js", function() {
                var form = document.getElementById("#form");
                var namespace = document.getElementById("#namespace");
                if (window.localStorage["_-Main"]) {
                        if (window.localStorage["_-Main"] == null) console.log("Main Textnet is empty.");
                        else document.getElementById("#form").value(store.get("_-Main"));
                }
        });
        head.load("//cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js", function() {
                head.load(["//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min.js", "//cdnjs.cloudflare.com/ajax/libs/bootstrap-growl/1.0.0/jquery.bootstrap-growl.min.js"], function() {
                        head.load("//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/css/bootstrap.min.css");
                        head.load("//textnet.github.io/files/bootbox.js", function() {
                                bootbox.setDefaults({
                                        locale: "en",
                                        backdrop: false,
                                        closeButton: true,
                                        animate: true
                                });
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
                });
        });
        head.load("//togetherjs.com/togetherjs-min.js", function() {
                $(".tn-groupies").click(function() {
                        TogetherJS(this);
                        return false;
                });
                // Groupies
                TogetherJSConfig_siteName = "Textnet";
                TogetherJSConfig_toolName = "Groupies";
                TogetherJSConfig_dontShowClicks = true;
                TogetherJSConfig_youtube = true;
                TogetherJSConfig_disableWebRTC = true;
                TogetherJSConfig_suppressInvite = false;
                TogetherJSConfig_suppressJoinConfirmation = true;
        });
});
