window._idl = {};
var DevMode = false, IDLCamp = false, head_conf = {
  html5: true
};

var startUp = function() {
  if (window.location.protocol == "http:") window.location.protocol = "https:";
  if (window.location.protocol == "https:") {
    head.load(["js/db.js", "js/jquery.js", "js/frame.js"], function() {
      console.log("Database, jQuery, Frame");
      jotboard.init.openDB();
      head.load(['js/mousetrap.js'], function() {
        console.log('Mousetrap');
      });
      $(function() {
        (function(i, s, o, g, r, a, m) {
          i['GoogleAnalyticsObject'] = r;
          i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)}, i[r].l = 1*new Date();
            a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-37813397-5', 'auto');
        ga('send', 'pageview');
        jotboard.init.other();
        if (window.location.hash) document.title = jotboard.names.sitename_hashmod();
        if (!window.location.hash) document.title = jotboard.names.sitename();
        if (DevMode === false) $('body').css('display', 'block');
        if (IDLCamp === true) {
          head.load([('https:' == document.location.protocol ? 'https://' : 'http://') + 'members.internetdefenseleague.org/include/?url=' + _idl.url + '&campaign=' + _idl.campaign + '&variant=modal'], function() {
            console.log('Internet Defence League');
          });
        }
      });
      head.load("js/moment.js", function() {
        console.log("MomentJS");
        // TimeShift is used to simulate real-time activity and change
        // attributes in what seems to be real-time, its not actually
        // real-time, but its per 1 millisecond so its close enough.
        var TimeShift = function() {
          if (jotboard.threshold(0, 12)) jotboard.momentjs.dayFormPL();
          else jotboard.momentjs.nightFormPL();
        }; TimeShift();
        setInterval(TimeShift, 1);
      });
      head.load("js/prefixfree.js", function() {
        console.log("Prefixfree");
        head.load("//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css", function() {
          console.log("Font Awesome");
          $(".body.container").append("<div class='jb-toggle fa fa-close'>&nbsp;</div>");
          $(jotboard("nav-toggle-btn")).click(function() {
            jotboard.toggle("navigation");
          });
          if (jotboard.hashmod("fullscreen")) jotboard.toggle("navigation");
        });
        head.load(["js/bootstrap.js", "css/bootstrap.css"], function() {
          console.log("Bootstrap JS, Bootstrap CSS");
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) jotboard.conditional.mobile();
          else console.log("Not on mobile, I see.");
          // News
          jotboard.init.news();
          head.load("js/bootbox.js", function() {
            console.log("Bootbox");
            bootbox.setDefaults({
              locale: "en",
              backdrop: true,
              animate: false
            });
            // Campaign
            $(".jb-campaign").click(function() { jotboard.bootbox.campaign(); });
            if (jotboard.hashmod("campaign")) jotboard.bootbox.campaign();
            // YouTube
            $(".jb-youtube").click(function() { jotboard.bootbox.youtube(); });
            if (jotboard.hashmod("youtube") || jotboard.hashmod("yt")) jotboard.bootbox.youtube();
          });
        });
      });
      head.load("js/growl.js", function() {
        console.log("Jotboard Growl");
        head.load("//togetherjs.com/togetherjs-min.js", function() {
          console.log("TogetherJS");
          $(".jb-groupies").click(function() {
            jotboard.groupies.run();
          });
          TogetherJS.on("ready", function() {
            jotboard.groupies.enter();
          });
          TogetherJS.on("close", function() {
            jotboard.groupies.exit();
          });
        });
      });
    });
  }
}; startUp();