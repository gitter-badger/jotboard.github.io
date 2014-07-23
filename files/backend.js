var DevMode = false;
head.load(["//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js", "files/ts.js"], function() {
        $(function() {
                $("iframe").attr({
                        "frameborder": "0",
                        "allowtransparency": "true"
                }).addClass("iframe");
                if (window.location.hash) document.title = "# Textnet";
                if (!window.location.hash) document.title = "Textnet";
                if (DevMode == false || DevMode == "false") sys("toggleBody");
                if (DevMode == true || DevMode == "true") {
                        if (sys("hash", "forceuse")) sys("toggleBody");
                        else return false;
                }
        });
        head.load("//cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js", function() {
                var UT = function() {
                        if (sys("threshold", 4, 19)) $("#form").addClass("day");
                        else $("#form").addClass("night");
                        $("#form.day").attr({
                                "placeholder": moment(new Date()).format("[Hows it goin? It's ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, have fun :P.]")
                        });
                        $("#form.night").attr({
                                "placeholder": moment(new Date()).format("[Hi, its currently] dddd, Do [of] MMMM YYYY[ and the time is] h:mm a[, have fun.]")
                        });
                };
                UT();
                setInterval(UT, 1);
        });
        head.load("//cdnjs.cloudflare.com/ajax/libs/store.js/1.3.14/store.min.js", function() {
                var form = document.getElementById("form");
                var namespace = document.getElementById("namespace");
                if (window.localStorage[sys("prefix") + sys("MainNamespace")]) {
                        form.value = store.get(sys("prefix") + sys("MainNamespace"));
                        console.info("The " + sys("MainNamespace") + " Textnet is avalible.");
                }
                if (store.get(sys("prefix") + sys("MainNamespace")) === "") {
                        console.info("The " + sys("MainNamespace") + " Textnet is empty.");
                }
                $(".tn-save").click(function() {
                        $(window).textnet("change", "save");
                });
                $(".tn-load").click(function() {
                        $(window).textnet("change", "load");
                });
        });
        $(".tn-menu-btn").click(function() {
                sys("submenu");
        });
        $(".tn-radio-textnet").click(function() {
                sys("radio");
        });
        if (sys("hash", "radio")) sys("radio");
        head.load("//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css", function() {
                console.log("Font Awesome loaded.");
        });
        head.load("//cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js", function() {
                head.load(["//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/bootstrap.min.js", "//cdnjs.cloudflare.com/ajax/libs/bootstrap-growl/1.0.0/jquery.bootstrap-growl.min.js"], function() {
                        head.load("//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css");
                        head.load("//cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.2.0/bootbox.js", function() {
                                bootbox.setDefaults({
                                        locale: "en",
                                        backdrop: true,
                                        closeButton: true,
                                        animate: true
                                });
                                var whatscookin = function() {
                                        bootbox.dialog({
                                                title: "#WhatsCookin",
                                                message: "<iframe class='yt-player' width='100%' height='310' src='//www.youtube.com/embed/?listType=playlist&list=PLXJjNJMpJQKqbpmhNOJNETiMbfZpLjIVb&fs=1&loop=1&showinfo=0&autohide=1&theme=light' frameborder='0' allowfullscreen></iframe>",
                                                buttons: {
                                                        enter: {
                                                                label: "Mandatory Fun on iTunes",
                                                                className: "btn-primary",
                                                                callback: function() {
                                                                        window.open("//smarturl.it/weirdalfun", "_blank");
                                                                }
                                                        }
                                                }
                                        });
                                };
                                if (sys("hash", "campaign")) {
                                        bootbox.dialog({
                                                title: "Save The Web",
                                                message: "<div align='center'><iframe src='//www.battleforthenet.com/embed.html' frameborder='0' scrolling='no' allowtransparency='true' style='width: 100%; height: 453px;'></iframe></div>",
                                                buttons: {
                                                        action: {
                                                                label: "Join The Battle!",
                                                                className: "btn-primary",
                                                                callback: function() {
                                                                        window.open("https://www.battleforthenet.com/", "_blank");
                                                                }
                                                        },
                                                        donate: {
                                                                label: "Donate",
                                                                className: "btn-link",
                                                                callback: function() {
                                                                        window.open("https://act.freepress.net/donate/internet_15_15/", "_blank");
                                                                }
                                                        }
                                                }
                                        });
                                }
                                var youtube_srch = function() {
                                        bootbox.prompt("YouTube", function(srch) {
                                                if (srch) {
                                                        window.open("//www.youtube.com/results?search_query=" + srch, "_blank");
                                                }
                                                if (srch === null) bootbox.hideAll();
                                        });
                                };
                                if (sys("hash", "whatscookin")) {
                                        window[whatscookin()];
                                }
                                $(".tn-wc").click(function() {
                                        window[whatscookin()];
                                });
                                $(".tn-youtube").click(function() {
                                        window[youtube_srch()];
                                });
                        });
                });
        });
        head.load("//togetherjs.com/togetherjs-min.js", function() {
                $(".tn-groupies").click(function() {
                        TogetherJS(this);
                        return false;
                });
                TogetherJSConfig_on = {
                        ready: function() {
                                window[$.bootstrapGrowl("Do not share personal information unless official consent is given.", {
                                        ele: "body",
                                        type: "info",
                                        offset: {
                                                from: "bottom",
                                                amount: 20
                                        },
                                        align: "right",
                                        width: 240,
                                        delay: 3500,
                                        allow_dismiss: false
                                })];
                        },
                        close: function() {
                                console.info("Groupies Session closed.");
                        }
                };
                TogetherJSConfig_siteName = sys("SiteName");
                TogetherJSConfig_toolName = sys("CollabName");
                TogetherJSConfig_dontShowClicks = $(".navigation, .navigation *");
                TogetherJSConfig_useMinimizedCode = true;
                TogetherJSConfig_findRoom = {
                        prefix: "TN",
                        max: 6
                };
                TogetherJSConfig_suppressJoinConfirmation = true;
                TogetherJSConfig_inviteFromRoom = true;
                TogetherJSConfig_suppressInvite = false;
                TogetherJSConfig_ignoreMessages = true;
        });
});
