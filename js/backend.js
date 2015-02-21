window._idl = {};
var _IDL = false, head_conf = {
  html5: true
};

var startUp = function() {
  if (window.location.protocol == "http:") window.location.protocol = "https:";
  if (window.location.protocol == "https:") {
    head.load(["js/store.js", "js/frame.js", "js/depend/jquery.js"], function() {
      // Form is $("#main.main #form");
      // Namespace is $("#namespace");
      if (store.get(jotboard("prefix") + "Main")) {
        $("#main.main #form").val(store.get(jotboard("prefix") + "Main"));
        console.info("The main board is avalible.");
      } if (_IDL === true) {
        head.load(('https:' == document.location.protocol ? 'https://' : 'http://') +
          'members.internetdefenseleague.org/include/?url=' + _idl.url + '&campaign=' +
          _idl.campaign + '&variant=modal');
      } $("jb-give .jb-save").on("click", function() {
        jotboard("data", "save");
      }); $("jb-give .jb-load").on("click", function() {
        jotboard("data", "load");
      });
    });
    head.load("js/depend/moment.js", function() {
      console.log("Moment.JS");
      $.getJSON("//www.reddit.com/r/jotboard/.json", function(data) {
        $.each(data.data.children, function(i, item) {
          $("#realm").append(
            '<div class="article">' +
              '<a class="title" href="' + item.data.url + '">' + item.data.title + '</a></br>' +
              '<a class="author" href="//www.reddit.com/user/' + item.data.author + '">' + item.data.author + '</a>' +
              '<a class="thread" href="//www.reddit.com' + item.data.permalink + '" class="thread">Comments</a>' +
              '<a class="points">(' + item.data.score + ' Point/s)</a>' +
            '</div>'
          );
        });
      });
      var TimePulse = function() {
        if (jotboard("threshold", 0, 12)) {
          $("#main.main #form").attr({
            "placeholder": moment(new Date()).format("[Hello, it's currently] dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, have an awesome day!]")
          });
        } else {
          $("#main.main #form").attr({
            "placeholder": moment(new Date()).format("[Hows it going? it's ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, bye-bye!]")
          });
        }
      }; TimePulse();
      setInterval(TimePulse, 200);
    });
    head.load("js/depend/prefixfree.js", function() {
      console.log("Prefixfree");
      head.load("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css", function() {
        console.log("Font Awesome");
        $(".jb-load").addClass("fa-important").addClass("fa-sign-out");
        $(".jb-save").addClass("fa-important").addClass("fa-sign-in");
        $(".jb-groupies").addClass("fa-important").addClass("fa-child");
      });
      document.getElementById('body').addEventListener('touchmove', function(nodeAB) {
      	nodeAB.preventDefault();
      }, false);
      head.load(["js/depend/bootstrap.js", "css/depend/bootstrap.css"], function() {
        console.log("Bootstrap CSS");
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          $("body").addClass("mobile");
        } else console.log("Not on mobile.");
      });
    });
    head.load(["js/depend/growl.js"], function() {
      console.log("Jotboard Growl");
      head.load(["//togetherjs.com/togetherjs-min.js"], function() {
        console.log("TogetherJS");
        $(".jb-groupies").on("click", function() {
          jotboard("groupies", "run");
        });
        TogetherJS.on("ready", function() {
          $("#main.main #form").val("");
          $("jb-give").toggleClass("remove");
          jotboard("toggle", "navigation");
          $.jbGrowl("Do not give out personal information unless official and/or legitimate consent is given.", {
            ele: "body",
            type: "info",
            offset: {
              from: "bottom",
              amount: 20
            },
            align: "left",
            width: "auto",
            delay: 3500,
            allow_dismiss: true
          });
        });
        TogetherJS.on("close", function() {
          $("jb-give").toggleClass('remove');
          $("#main.main #form").val(store.get(jotboard("prefix") + jotboard("value", "form")));
          $.jbGrowl("Thank's for using " + jotboard("groupies", "name") + "!", {
            ele: "body",
            type: "info",
            offset: {
              from: "bottom",
              amount: 20
            },
            align: "left",
            width: 225,
            delay: 2200,
            allow_dismiss: true
          });
          TogetherJSConfig_siteName = jotboard("sitename");
          TogetherJSConfig_toolName = jotboard("groupies", "name");
          TogetherJSConfig_dontShowClicks = true;
          TogetherJSConfig_useMinimizedCode = true;
          TogetherJSConfig_suppressInvite = true;
          TogetherJSConfig_ignoreMessages = true;
          TogetherJSConfig_suppressJoinConfirmation = true;
        });
      });
    });
  }
}; startUp();