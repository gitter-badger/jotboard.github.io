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
        $(".tn-autosave").click(function() { $(window).tn("execute", "autosave"); });
        $(".tn-youtube").click(function() { $(window).tn("execute", "youtube"); });
        // Exclusion list
        if (hashline("groupies") || hashline("execute") || hashline("autosave")) {
                return false;
        }
        $(function() {
                // Checking whether user is using #MODS or not.
                if (window.location.hash) {
                        document.title = "# Textnet";
                } else {
                        document.title = "Textnet";
                }
        });
        $(function() {
                // Checking if there is any data in the Main Textnet.
                if (window.localStorage["_-Main"]) {
                        form.value = store.get("_-Main");
                        console.info("Theres data in the Main Textnet.");
                } else {
                        console.info("No data in the Main Textnet.");
                }
        });
        $(function() {
                if (window.location.protocol == "http:") {
                        window.location.protocol = "https:";
                } else {
                        console.log("You're in HTTPS, good.");
                        return false;
                }
        });
});

$(window).tn("tnLoad", "https://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js", function() {
        console.info("Bootstrap (JS) Loaded");
});

$(window).tn("tnLoad", "https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js", function() {
        console.info("Prefixfree Loaded");
});

$(window).tn("tnLoad", "https://cdnjs.cloudflare.com/ajax/libs/store.js/1.3.14/store.min.js", function() {
        console.info("Store.js loaded.");
        var form = document.querySelectorAll("#form");
        var namespace = document.querySelectorAll("#namespace");
});

$(window).tn("tnLoad", "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.6.0/moment.min.js", function() {
        console.log("Moment.JS Loaded");
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

$(window).tn("tnLoad", "https://cdn.rawgit.com/alexgibson/notify.js/master/notify.js", function() {
        console.info("Notify.JS Loaded");
});

$(window).tn("tnLoad", "https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.2.0/bootbox.min.js", function() {
        console.log("Bootbox.JS Loaded");
});

$(window).tn("tnLoad", "//togetherjs.com/togetherjs-min.js", function() {
        // Groupies
        TogetherJSConfig_siteName = "Textnet";
        TogetherJSConfig_toolName = "Groupies";
        TogetherJSConfig_dontShowClicks = true;
        TogetherJSConfig_youtube = true;
        TogetherJSConfig_disableWebRTC = true;
        TogetherJSConfig_suppressInvite = false;
        TogetherJSConfig_suppressJoinConfirmation = true;
});
