window._idl = {};
var _DevState = false, _IDL = false, head_conf = {
  html5: true
};

var startUp = function() {
  if (window.location.protocol == "http:") window.location.protocol = "https:";
  if (window.location.protocol == "https:") {
    toast("js/db.js", function() {
      var form = document.getElementById("form");
      var namespace = document.getElementById("namespace");
      if (db.get(jotboard("prefix") + jotboard("namespace/main"))) {
        form.value = db.get(jotboard("prefix") + jotboard("namespace/main"));
        console.info("The " + jotboard("namespace/main") + " board is avalible.");
      }
    }, "js/jquery.js", function() {
      $(".radio").attr("align", "center");
      $('iframe').attr({
        'frameborder': '0',
        'allowtransparency': 'true'
      }).addClass('iframe');
    }, "js/frame.js", function() {
      console.log("Frame");
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
      if (window.location.hash) document.title = jotboard('hashmod');
      if (!window.location.hash) document.title = jotboard('sitename');
      if (_DevState === false) $('body').css('display', 'block');
      if (_IDL === true) toast(('https:' == document.location.protocol ? 'https://' : 'http://') + 'members.internetdefenseleague.org/include/?url=' + _idl.url + '&campaign=' + _idl.campaign + '&variant=modal');
      $("jb-give .jb-save").on("click", function() {
        jotboard("data", "save");
      }); $("jb-give .jb-load").on("click", function() {
        jotboard("data", "load");
      }); $("jb-give .jb-toggle").on("click", function() {
        jotboard("toggle", "navigation");
      }); $(".jb-blog").on("click", function() {
        window.open("/blog/", "_blank");
      });
    }, "js/moment.js", function() {
      console.log("MomentJS");
      // TimeShift is used to simulate real-time activity and change
      // attributes in what seems to be real-time, its not actually
      // real-time, but its per 1 millisecond so its close enough.
      var TimeShift = function() {
        if (jotboard("threshold", 0, 13)) $("#form").attr({
          "placeholder": moment(new Date()).format("[Hello, it's currently] dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, have an awesome day!]")
        });
        else $("#form").attr({
          "placeholder": moment(new Date()).format("[Hows it going? it's ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, see ya!]")
        });
      }; TimeShift();
      setInterval(TimeShift, 1);
    }, "js/prefixfree.js", function() {
        console.log("Prefixfree");
        toast("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css", function() {
          console.log("Font Awesome");
          $(".jb-toggle").addClass("fa-important").addClass("fa-bolt");
        });
        toast("js/bootstrap.js", "css/bootstrap.css", function() {
          console.log("Bootstrap JS, Bootstrap CSS");
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $("*").addClass("mobile");
          } else console.log("Not on mobile.");
          toast("js/news.js", function() {
            console.log("News");
            if (jotboard("hash", "news") && jotboard("hash", "one")) window.location = news.one.href;
              if (jotboard("hash", "news") && jotboard("hash", "two")) window.location = news.two.href;
              if (jotboard("hash", "news") && jotboard("hash", "three")) window.location = news.three.href;
              if (jotboard("hash", "news") && jotboard("hash", "four")) window.location = news.four.href;
              // Headline #1
              $('#news .one').html(
                "<h4 class='title'>" +
                  "<a href='" + news.one.href + "'>" + news.one.title + "</a>" +
                "</h4>");
              // Headline #2
              $('#news .two').html(
                "<h4 class='title'>" +
                  "<a href='" + news.two.href + "'>" + news.two.title + "</a>" +
                "</h4>");
              // Headline #3
              $('#news .three').html(
                "<h4 class='title'>" +
                  "<a href='" + news.three.href + "'>" + news.three.title + "</a>" +
                "</h4>");
              // Headline #4
              $('#news .four').html(
                "<h4 class='title'>" +
                  "<a href='" + news.four.href + "'>" + news.four.title + "</a>" +
                "</h4>");
              // Statements to kill headlines entirely if they are ALL empty.
              if (news.one.title == "") $("#news div.one").remove();
              if (news.two.title == "") $("#news div.two").remove();
              if (news.three.title == "") $("#news div.three").remove();
              if (news.four.title == "") $("#news div.four").remove();
              if (news.one.title == "" && news.two.title == "" && news.three.title == "" && news.four.title == "") {
                $("#news").remove();
              }
            });
            toast("js/bootbox.js", function() {
              console.log("Bootbox");
              bootbox.setDefaults({
                locale: "en",
                backdrop: true,
                animate: false
              });
              var bootboxOpen = function(pattern) {
                if (pattern == "campaign") bootbox.dialog({
                  title: "Jotboard's Open Letter (Campaign)",
                  message: "The Internet really has become something to be proud of, especially for early Internet Adopters, it went from an idea trying to create an internationalized network of amazing communities, to a lifestyle that has changed the way we live and work.<br /><br />" +
                  "This message is to point out the current, past and future actions that have been taken to damage the Internet's Integrity, whether it be Mass Censorship, Illegal Spying or the way Net Neutrality presents itself as a money-related threat towards Cable Companies like Comcast, Verizon and Time Warner Cable and that it should never come to this again.<br /><br />" +
                  "The way the Internet is is perfect, we wouldn't have it any other way, and regardless of what the implications are to the corporate side of things, we need to make sure these sort of things never happen again, by making how much of a positive impact the Internet has made on us and our world as clear as possible to make sure the corporate businesses of the modern world know what will happen if such things are to be passed through Congress or Governments sanctions.<br /><br />" +
                  "This message is aimed at Politicians, Families, Frequent Internet Users, and the odd Selfie Takers, please share this message to as many people as you possibly can so we all know what were up against!",
                  buttons: {
                    enter: {
                      label: "Supporters of IDL",
                      className: "btn-primary",
                      callback: function() {
                        window.open("https://internetdefenseleague.org/", "_blank");
                      }
                    }
                  }
                });
              };
              $(".jb-campaign").click(function() {
                bootboxOpen("campaign");
              }); if (jotboard("hash", "campaign")) bootboxOpen("campaign");
            });
          });
        });
        toast("js/growl.js", function() {
          console.log("Jotboard Growl");
          toast("//togetherjs.com/togetherjs-min.js", function() {
          console.log("TogetherJS");
          $(".jb-groupies").click(function() {
            jotboard("groupies", "run");
          });
          TogetherJS.on("ready", function() {
            $("#form").val("");
            $("jb-give .jb-save, jb-give .jb-load, jb-give .jb-toggle").toggleClass("remove");
            $("div.container form").toggleClass("full-width");
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
            $("jb-give .jb-save, jb-give .jb-load, jb-give .jb-toggle").toggleClass('remove');
            $("div.container form").toggleClass("full-width");
            $("#form").val(db.get(jotboard("prefix") + jotboard("value", "form")));
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