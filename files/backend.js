var DevMode = false;
head.load(["//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js", "files/ts.js"], function() {
        $(function() {
                $("iframe").attr({
                        "frameborder": "0",
                        "allowtransparency": "true"
                }).addClass("iframe");
                if (window.location.hash) document.title = "# Textnet";
                if (!window.location.hash) document.title = "Textnet";
                $("body").toggleClass("block");
                if (DevMode == true || DevMode == "true") {
                        if (sys("hash", "forceuse")) return false;
                        else window.location.replace("/closed");
                }
        });
        head.load("//cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js", function() {
                var UT = function() {
                        if (sys("threshold", 4, 19)) $("#form").addClass("day");
                        else $("#form").addClass("night");
                        $("#form.day").attr({
                                "placeholder": moment(new Date()).format("[Hi, it's ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[.]")
                        });
                        $("#form.night").attr({
                                "placeholder": moment(new Date()).format("[Hows it goin? it was a nice ]dddd, Do [of] MMMM YYYY[ and the time is] h:mm a[, goodnight.]")
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
                }
                if (!window.localStorage[sys("prefix") + sys("MainNamespace")] || store.get(sys("prefix") + sys("MainNamespace")) === "") {
                        console.info("The " + sys("MainNamespace") + " Textnet is empty.");
                }
                $(".tn-save").click(function() {
                        $(window).textnet("change", "save");
                });
                $(".tn-load").click(function() {
                        $(window).textnet("change", "load");
                });
        });
        $(".tn-menu-btn").click(function() { sys("submenu"); });
        $(".tn-radio-textnet").click(function() { sys("radio"); });
        head.load("//cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js", function() {
                head.load(["//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/bootstrap.min.js", "//cdnjs.cloudflare.com/ajax/libs/bootstrap-growl/1.0.0/jquery.bootstrap-growl.min.js"], function() {
                        head.load("//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css");
                        head.load("//cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.2.0/bootbox.js", function() {
                                bootbox.setDefaults({
                                        locale: "en",
                                        backdrop: false,
                                        closeButton: true,
                                        animate: false
                                });
                                if (sys("hash", "rtn")) $(".tn-radio-textnet").click();
                                if (sys("hash", "campaign")) {
                                        bootbox.dialog({
                                                title: "Save The Web",
                                                message: "<div align='center'><iframe src='//www.battleforthenet.com/embed.html' frameborder='0' scrolling='no' allowtransparency='true' style='width: 100%; height: 453px;'></iframe></div>",
                                                buttons: {
                                                        action: {
                                                                label: "Join The Battle!",
                                                                className: "btn-primary",
                                                                callback: function() {
                                                                        window.open("//www.battleforthenet.com/", "_blank");
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
                                if (sys("hash", "hackernews")) {
                                        bootbox.dialog({
                                                title: "Hai",
                                                message: "I'm not all that good with talking, but since I am now, why bother stopping myself?<br />" +
                                                "Hello, I'm Textnet, and I basically make taking notes, collaboration and access to entertainment a whole lot easier.<br />" +
                                                "As you can see Textnet is still in early development stages and is run by one person, alongside a feedback-giving community and by making this product avalible<div></div>" +
                                                "to everyone, I can give out the opportunity to have live feedback, to make my services better.<br /><br />" +
                                                "Well, thats about it, cya on the Hacking side of things.<br /><br />" +
                                                "Sum luv, Chris :P",
                                                buttons: {
                                                        enter: {
                                                                label: "Original Post",
                                                                className: "btn-primary",
                                                                callback: function() {
                                                                        window.open("//news.ycombinator.com/item?id=7999241", "_blank");
                                                                        return false;
                                                                }
                                                        },
                                                        gh_repo: {
                                                                label: "Source Code (textnet/textnet.github.io)",
                                                                className: "btn-primary",
                                                                callback: function() {
                                                                        window.open("https://github.com/textnet/textnet.github.io", "_blank");
                                                                        return false;
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
                                $(".tn-event").click(function() {
                                        $(window).textnet("execute", "event");
                                });
                                $(".tn-youtube").click(function() {
                                        window[youtube_srch()];
                                });
                                if (sys("hash", "youtube") || sys("hash", "yt")) $(".tn-youtube").click();
                                if (sys("hash", "new")) $(".tn-event").click();
                                else return false;
                        });
                });
        });
        head.load("//togetherjs.com/togetherjs-min.js", function() {
                $(".tn-groupies").click(function() {
                        TogetherJS(this);
                        return false;
                });
                TogetherJS.on("ready", function() {
                        window[$.bootstrapGrowl("Do not share personal information.", {
                                ele: "body",
                                type: "info",
                                offset: {
                                        from: "bottom",
                                        amount: 20
                                },
                                align: "right",
                                width: 290,
                                delay: 3500,
                                allow_dismiss: false
                        })];
                });
                // Groupies
                TogetherJSConfig_siteName = "Textnet";
                TogetherJSConfig_toolName = "Groupies";
                TogetherJSConfig_dontShowClicks = true;
                TogetherJSConfig_youtube = true;
                TogetherJSConfig_disableWebRTC = false;
                TogetherJSConfig_suppressInvite = false;
                TogetherJSConfig_suppressJoinConfirmation = true;
        });
});
