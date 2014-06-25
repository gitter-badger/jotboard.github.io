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
                        // Hashline
                        if (hashline("youtube")) {
                                $(window).tn("execute", "youtube");
                        }
                } else {
                        document.title = "Textnet";
                }
        });
});

$(function() {
        $(".tn-event").click(function() {
                event();
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
                        message: "<iframe class='block yt-player' width='100%' height='310' src='https://www.youtube.com/embed/?listType=playlist&list=PLXJjNJMpJQKqbpmhNOJNETiMbfZpLjIVb&fs=1&loop=1&showinfo=0&autohide=1&theme=light' frameborder='0' allowfullscreen></iframe>",
                        title: "E3",
                        buttons: {
                                facebook: {
                                        label: "Facebook", className: "block btn-primary",
                                        callback: function() {
                                                window.open("https://www.facebook.com/hashtag/E3", "_blank");
                                                return false;
                                        }
                                },
                                twitter: {
                                        label: "Twitter", className: "block btn-info",
                                        callback: function() {
                                                window.open("https://twitter.com/search?q=%23E3", "_blank");
                                                return false;
                                        }
                                },
                                twitch: {
                                        label: "Twitch", className: "block btn-link",
                                        callback: function() {
                                                window.open("http://www.twitch.tv/event/e3", "_blank");
                                                return false;
                                        }
                                },
                                official: {
                                        label: "Website", className: "block btn-link",
                                        callback: function() {
                                                window.open("http://www.e3expo.com/", "_blank");
                                                return false;
                                        }
                                },
                                youtube: {
                                        label: "YouTube", className: "block btn-danger",
                                        callback: function() {
                                                window.open("https://www.youtube.com/results?search_query=E3", "_blank");
                                                return false;
                                        }
                                }
                        }
                });
        };
});

$(window).load("js", [secure + "//cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js"], function() {
        var UT = function() {
                if (0 <= new Date().getHours() && new Date().getHours() < 18) {
                        $("#form").addClass("day");
                } else {
                        $("#form").addClass("night");
                }
                $("#form.day").attr("placeholder", moment(new Date()).format("[Hi, it's ]dddd[, the] Do [of] MMMM YYYY[ and time is] h:mm a[.]"));
                $("#form.night").attr("placeholder", moment(new Date()).format("[Hows it goin? it was a nice ]dddd, Do [of] MMMM YYYY[ and the time is] h:mm a[, goodnight.]"));
                setInterval(UT, 1);
        };
        window[UT()];
        console.info("MomentJS loaded");
});

$(window).load("js", [secure + "//cdnjs.cloudflare.com/ajax/libs/store.js/1.3.14/store.min.js"], function() {
        var form = document.querySelectorAll("#form");
        var namespace = document.querySelectorAll("#namespace");
        $(function() {
                if (window.localStorage["_-Main"]) {
                        form.value = store.get("_-Main");
                }
        });
        console.info("StoreJS loaded");
});

$(window).load("js", [secure + "//cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.2.0/bootbox.min.js"], function() {
        bootbox.setDefaults({
                onEscape: function() {
                        dialog.modal("hide");
                },
                backdrop: false,
                animate: true
        });
});

$(window).load("css", [secure + "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/css/bootstrap.min.css"], function() {
        console.info("Bootstrap (CSS) Loaded");
});

$(window).load("js", [secure + "//cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"], function() {
        console.info("Prefixfree Loaded");
        $(window).tn("load", "css", [secure + "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css"], function() {
                console.info("Font Awesome Loaded");
        });
});

$(window).load("js", [
        secure + "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min.js",
        secure + "//cdnjs.cloudflare.com/ajax/libs/bootstrap-growl/1.0.0/jquery.bootstrap-growl.min.js"
], function() {
        console.info("Bootstrap (JS) and Bootstrap Growl has been loaded.");
        $(window).tn("load", "js", [secure + "//togetherjs.com/togetherjs-min.js"], function() {
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
