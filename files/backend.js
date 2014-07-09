DevMode = false;
head.load(["//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js", "files/ts.js"], function() {
        $(function() {
                $("body").toggleClass("block");
                var DevMode;
                if (DevMode == true) {
                        if (hashline("forceuse")) return false;
                        else window.location.replace("/closed");
                }
        });
        head.load("//cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js", function() {
                var UT = function() {
                        $("#form.day").attr("placeholder", moment(new Date()).format("[Hi, it's ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[.]"));
                        $("#form.night").attr("placeholder", moment(new Date()).format("[Hows it goin? it was a nice ]dddd, Do [of] MMMM YYYY[ and the time is] h:mm a[, goodnight.]"));
                        if (threshold(4, 19)) $("#form").addClass("day");
                        else $("#form").addClass("night");
                };
                UT();
                setInterval(UT, 1);
        });
        $(".tn-menu-btn").click(function() {
                $(".tn-menu-btn").textnet("toggleHTML", "More", "Less");
                $("#submenu").toggleClass("block");
        });
        $(".tn-youtube").click(function() {
                bootbox.prompt("YouTube Search", function(srch) {
                        if (srch) {
                                window.open("//www.youtube.com/results?utm_source=opensearch&search_query=" + srch, "_blank");
                        }
                        if (srch === null) bootbox.hideAll();
                });
        });
        head.load("//cdnjs.cloudflare.com/ajax/libs/store.js/1.3.14/store.min.js", function() {
                var form = document.getElementById("form");
                var namespace = document.getElementById("namespace");
                if (window.localStorage["_-Main"]) {
                        form.value = store.get("_-Main");
                }
                $(".tn-save").click(function() {
                        $(window).textnet("change", "save");
                });
                $(".tn-load").click(function() {
                        $(window).textnet("change", "load");
                });
        });
        head.load("//cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js", function() {
                head.load(["//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min.js", "//cdnjs.cloudflare.com/ajax/libs/bootstrap-growl/1.0.0/jquery.bootstrap-growl.min.js"], function() {
                        head.load("//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/css/bootstrap.min.css");
                        head.load("//cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.2.0/bootbox.js", function() {
                                bootbox.setDefaults({
                                        locale: "en",
                                        backdrop: false,
                                        closeButton: true,
                                        animate: true
                                });
                                if (hashline("CISA") || hashline("CISPA")) {
                                        bootbox.dialog({
                                                title: "Stop CIS(P)A",
                                                message: "<img src='//fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xpa1/t1.0-9/10533259_786466921373436_2435169508624049648_n.png' width='100%' height='auto'><br />",
                                                buttons: {
                                                        enter: {
                                                                label: "Take Action",
                                                                className: "btn-danger",
                                                                callback: function() {
                                                                        window.open("//www.cispaisback.org/", "_blank");
                                                                        return false;
                                                                }
                                                        }
                                                }
                                        });
                                }
                                if (hashline("hackernews")) {
                                        bootbox.dialog({
                                                title: "Hai",
                                                message: "I'm not all that good with talking, but since I am now, why bother stopping myself?<br />" +
                                                "Hello, I'm Textnet, and I basically make taking notes, collaboration and access to entertainment a whole lot easier.<br />" +
                                                "As you can see Textnet is still in early development stages and is run by one person, alongside a feedback-giving community and by making this product avalible to everyone, I can give out the oppurtunity to have live feedback, to make my services better.<br /><br />" +
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
                                $(".tn-event").click(function() {
                                        $(window).textnet("execute", "event");
                                });
                                if (hashline("new")) $(window).textnet("execute", "event");
                                else return false;
                        });
                });
        });
        head.load("//togetherjs.com/togetherjs-min.js", function() {
                TogetherJS.on("ready", function() {
                        $.bootstrapGrowl("Don't give out personal information unless official consent has been given.", {
                                ele: "body",
                                type: "info",
                                offset: {
                                        from: "top",
                                        offset: 0
                                },
                                align: "right",
                                width: "auto",
                                delay: 4200,
                                allow_dismiss: false,
                                stackup_spacing: 10
                        });
                });
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
