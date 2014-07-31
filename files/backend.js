var DevMode = false;
head.load(["//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js", "files/ts.js"], function() {
        $(function() {
                $("iframe").attr({
                        "frameborder": "0",
                        "allowtransparency": "true"
                }).addClass("iframe");
                if (window.location.hash) document.title = "# Textnet";
                if (!window.location.hash) document.title = "Textnet";
                if (DevMode === false || DevMode == "false") sys("toggleBody");
                if (DevMode === true || DevMode == "true") if (sys("hash", "forceuse")) sys("toggleBody");
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
                $(".tn-save").click(function() { $(window).textnet("change", "save"); });
                $(".tn-load").click(function() { $(window).textnet("change", "load"); });
        });
        $(".tn-menu-btn").click(function() { sys("submenu"); });
        $(".tn-radio-textnet").click(function() { sys("radio"); });
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
                                                title: "A message to the odd Internet User",
                                                message: "The Internet really has become something to be proud of, especially for early Internet Adopters, it went from an idea trying to create an internationalized network of amazing communities, to a lifestyle that has changed the way live and work.<br /><br />" +
                                                "This message is to point out the current, past and future actions that have been taken to damage the Internets Integrity, whether it be mass censorship, mass spying or the way Net Neutrality presents itself as a money-related threat towards Cable Companies like Comcast, Verizon and Time Warner Cable and that it should never come to this again.<br /><br />" +
                                                "The way the Internet is is perfect, we wouldn't have it any other way, and regardless of what the implications are to the corporate side of things, we need to make sure these sort of things never happen again, by making how much of a positive impact the Internet has made upon us and our the world as clear as possible and make sure the corporate businesses of the world know what will happen if such things are to pass through Congress or Governments.<br /><br />" +
                                                "This message is aimed at Politicians, Families, Frequent Internet Users, and the odd Selfie Takers, please share this message to as many people as you possibly can so we all know what were up against!",
                                                buttons: {
                                                        battleforthenet: {
                                                                label: "Battle For The Net",
                                                                className: "btn-primary",
                                                                callback: function() {
                                                                        window.open("https://www.battleforthenet.com/", "_blank");
                                                                }
                                                        },
                                                        idl: {
                                                                label: "Internet Defence League",
                                                                className: "btn-primary",
                                                                callback: function() {
                                                                        window.open("https://internetdefenseleague.org/", "_blank");
                                                                }
                                                        },
                                                        techcrunch: {
                                                                label: "TechCrunch",
                                                                className: "btn-primary",
                                                                callback: function() {
                                                                        window.open("//sunlight-assets.s3.amazonaws.com/tcleaderboard/production/index.html", "_blank");
                                                                }
                                                        },
                                                        crikey: {
                                                                label: "Crikey",
                                                                className: "btn-primary",
                                                                callback: function() {
                                                                        window.open("//www.crikey.com.au/topic/war-on-the-internet/", "_blank");
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
                                if (sys("hash", "whatscookin")) window[whatscookin()];
                                $(".tn-wc").click(function() { window[whatscookin()]; });
                                if (sys("hash", "youtube")) window[youtube_srch()];
                                $(".tn-youtube").click(function() { window[youtube_srch()]; });
                        });
                });
        });
        head.load("//togetherjs.com/togetherjs-min.js", function() {
                $(".tn-groupies").click(function() { sys("groupies"); });
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
                                        width: 260,
                                        delay: 3500,
                                        allow_dismiss: false
                                })];
                        }
                };
                TogetherJSConfig_siteName = sys("SiteName");
                TogetherJSConfig_toolName = sys("CollabName");
                TogetherJSConfig_dontShowClicks = $(".navigation, .navigation *") || document.querySelector(".navigation, .navigation *");
                TogetherJSConfig_findRoom = {
                        prefix: "groupies",
                        max: 4
                };
                TogetherJSConfig_useMinimizedCode = true;
                TogetherJSConfig_ignoreMessages = true;
                TogetherJSConfig_suppressInvite = false;
                TogetherJSConfig_suppressJoinConfirmation = false;
        });
});
