// Notes: add secure + as a prefix when adding a external plugin, Google Extensions apply.

$(window).load(function() {
        $(".tn-menu-btn").click(function() {
                $(this).tn("toggleHTML", "More", "Less");
                $(this).tn("toggleAttr", "title", "Close Menu", "Open Menu");
                $("#submenu").tn("toggleAttr", "style", "display: visible;", "display: none;");
        });
        $("body").tn("toggleAttr", "style", "display: visible;", "display: none;");
        $(".tn-save").click(function() { $(window).tn("change", "save"); });
        $(".tn-load").click(function() { $(window).tn("change", "load"); });
        $(".tn-groupies").click(function() { $(window).tn("execute", "groupies"); });
        $(".tn-youtube").click(function() { $(window).tn("execute", "youtube"); });
        $(".tn-autosave").click(function() { $(window).tn("execute", "autosave"); });
        $(".tn-protocol").click(function() { $(window).tn("execute", "toggleProtocol"); });
        $(function() {
                // Checking whether user is using #MODS or not.
                if (window.location.hash) {
                        document.title = "# Textnet";
                        // Pointers
                        if (hashline("yt")) {
                                $(window).tn("execute", "youtube");
                        }
                        if (hashline("new") || hashline("n")) {
                                event();
                        }
                } else {
                        document.title = "Textnet";
                }
        });
        $(function() {
                bootbox.setDefaults({
                        backdrop: false,
                        animate: true
                });
                $(window).keyup(function(tnL) {
                        if (tnL.keyCode == 27) {
                                bootbox.hideAll();
                        }
                });
        });
});

$(function() {
        $(".tn-event").click(function() { event(); });
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
                        message: "<iframe class='yt-player' width='100%' height='310' src='https://www.youtube.com/embed/?listType=playlist&list=PLXJjNJMpJQKqbpmhNOJNETiMbfZpLjIVb&autoplay=1&fs=1&loop=1&showinfo=0&autohide=1&theme=light' frameborder='0' allowfullscreen></iframe>",
                        title: "E3",
                        buttons: {
                                facebook: {
                                        label: "Facebook", className: "btn-primary",
                                        callback: function() {
                                                window.open("https://www.facebook.com/hashtag/E3", "_blank");
                                                return false;
                                        }
                                },
                                twitter: {
                                        label: "Twitter", className: "btn-info",
                                        callback: function() {
                                                window.open("https://twitter.com/search?q=%23E3", "_blank");
                                                return false;
                                        }
                                },
                                twitch: {
                                        label: "Twitch", className: "btn-link",
                                        callback: function() {
                                                window.open("http://www.twitch.tv/event/e3", "_blank");
                                                return false;
                                        }
                                },
                                official: {
                                        label: "Website", className: "btn-link",
                                        callback: function() {
                                                window.open("http://www.e3expo.com/", "_blank");
                                                return false;
                                        }
                                },
                                youtube: {
                                        label: "YouTube", className: "btn-danger",
                                        callback: function() {
                                                window.open("https://www.youtube.com/results?search_query=E3", "_blank");
                                                return false;
                                        }
                                }
                        }
                });
        };
});

$(window).tn("load", "js", [secure + "//cdnjs.cloudflare.com/ajax/libs/store.js/1.3.14/store.min.js"], function() {
        console.info("Store.js loaded.");
        var form = document.querySelectorAll("#form");
        var namespace = document.querySelectorAll("#namespace");
        if (window.localStorage["_-Main"]) {
                form.value = store.get("_-Main");
        }
});

$(window).tn("load", "js", [secure + "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css"], function() {
        console.info("Store.js loaded.");
        var form = document.querySelectorAll("#form");
        var namespace = document.querySelectorAll("#namespace");
});

$(window).tn("load", "js", [secure + "//cdnjs.cloudflare.com/ajax/libs/moment.js/2.6.0/moment.min.js"], function() {
        console.log("Moment.JS Loaded");
        var UT = function() {
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
        UT();
        setInterval(UT, 1);
});

$(function() {
        $(window).tn("load", "js", [secure + "//cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"], function() {
                console.info("Prefixfree Loaded");
        });
        $(window).tn("load", [
                secure + "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min.js",
                secure + "//cdnjs.cloudflare.com/ajax/libs/bootstrap-growl/1.0.0/jquery.bootstrap-growl.min.js",
                secure + "//cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.2.0/bootbox.min.js"
        ], function() {
                console.info("Bootstrap, Bootstrap Growl and Bootbox has been loaded.");
        });
});

$(window).tn("load", [secure + "//togetherjs.com/togetherjs-min.js"], function() {
        // Groupies
        TogetherJSConfig_siteName = "Textnet";
        TogetherJSConfig_toolName = "Groupies";
        TogetherJSConfig_dontShowClicks = true;
        TogetherJSConfig_youtube = true;
        TogetherJSConfig_disableWebRTC = true;
        TogetherJSConfig_suppressInvite = false;
        TogetherJSConfig_suppressJoinConfirmation = true;
});
