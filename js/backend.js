window._idl = {};
var DevMode = false, IDLCamp = false, head_conf = {
  html5: true
};

var startUp = function() {
  if (window.location.protocol == "http:") window.location.protocol = "https:";
  if (window.location.protocol == "https:") {
    head.load(["js/db.js", "js/jquery.js", "js/frame.js"], function() {
      console.log("Database, jQuery, Frame");
      if (db.get("JBNotes")) $("#notes").val(db.get("JBNotes"));
      $("#notes").attr({
        "placeholder": "Notes go here"
      }).on("keydown, keyup", function() {
        db.set("JBNotes", $(this).val());
      });
      var form = document.getElementById("form");
      var namespace = document.getElementById("namespace");
      $("jb-give .jb-save").click(function() {
        jotboard("change", "save");
      }); $("jb-give .jb-load").click(function() {
        jotboard("change", "load");
      });
      if (db.get(jotboard("prefix") + jotboard("MainNamespace"))) {
        form.value = db.get(jotboard("prefix") + jotboard("MainNamespace"));
        console.info("The " + jotboard("MainNamespace") + " board is avalible.");
      }
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
        $("body *:not(.body.container, .body.container *)").on('touchmove, touchend', function(nodeAB) {
          nodeAB.preventDefault();
        });
        $(".radio").attr("align", "center");
        $('iframe').attr({
          'frameborder': '0',
          'allowtransparency': 'true'
        }).addClass('iframe');
        if (window.location.hash) document.title = jotboard('hashmod');
        if (!window.location.hash) document.title = jotboard('sitename');
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
          if (0 <= new Date().getHours() && new Date().getHours() < 13) $("#form").attr({
            "placeholder": moment(new Date()).format("[Hello, it's currently ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, have an awesome day!]")
          });
          else $("#form").attr({
            "placeholder": moment(new Date()).format("[Hows it going? it's ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, see ya!]")
          });
        }; TimeShift();
        setInterval(TimeShift, 1);
      });
      head.load("js/prefixfree.js", function() {
        console.log("Prefixfree");
        head.load("//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css", function() {
          console.log("Font Awesome");
          $(".body.container").append("<div class='jb-toggle fa fa-close'>&nbsp;</div>");
          $(jotboard("nav-toggle-btn")).click(function() {
            jotboard("toggle-nav");
          }); if (jotboard("hash", "fullscreen")) {
            jotboard("toggle-nav");
          }
        });
        head.load(["js/bootstrap.js", "css/bootstrap.css"], function() {
          console.log("Bootstrap JS, Bootstrap CSS");
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) $("body").addClass("mobile");
          else console.log("Not on mobile, I see.");
          head.load("js/news.js", function() {
            console.log("News");
            if (jotboard("hash", "n") && jotboard("hash", "1")) window.location = news.one.href;
            if (jotboard("hash", "n") && jotboard("hash", "2")) window.location = news.two.href;
            if (jotboard("hash", "n") && jotboard("hash", "3")) window.location = news.three.href;
            // Headline #1
            $('#news .one').html(
              "<div class='news panel'>" +
                "<div class='panel-heading'>" +
                  "<h4 class='panel-title'>" +
                    "<a href='" + news.one.href + "'>" + news.one.title + "</a>" +
                  "</h4>" +
                "</div>" +
                "<div class='panel-body'>" + news.one.body + "</div>" +
              "</div>");
            // Headline #2
            $('#news .two').html(
              "<div class='news panel'>" +
                "<div class='panel-heading'>" +
                  "<h4 class='panel-title'>" +
                    "<a href='" + news.two.href + "'>" + news.two.title + "</a>" +
                  "</h4>" +
                "</div>" +
                "<div class='panel-body'>" + news.two.body + "</div>" +
              "</div>");
            // Headline #3
            $('#news .three').html(
              "<div class='news panel'>" +
                "<div class='panel-heading'>" +
                  "<h4 class='panel-title'>" +
                    "<a href='" + news.three.href + "'>" + news.three.title + "</a>" +
                  "</h4>" +
                "</div>" +
              "<div class='panel-body'>" + news.three.body + "</div>" +
            "</div>");
            // Statements to kill headlines if they are empty.
            if (news.one.title == "") $("#news div.one div.news div.panel-heading").remove();
            if (news.one.body == "") $("#news div.one div.news div.panel-body").remove();
            if (news.one.title == "" && news.one.body == "") $("#news div.one").remove();
            if (news.two.title == "") $("#news div.two div.news div.panel-heading").remove();
            if (news.two.body == "") $("#news div.two div.news div.panel-body").remove();
            if (news.two.title == "" && news.two.body == "") $("#news div.two").remove();
            if (news.three.title == "") $("#news div.three div.news div.panel-heading").remove();
            if (news.three.body == "") $("#news div.three div.news div.panel-body").remove();
            if (news.three.title == "" && news.three.body == "") $("#news div.three").remove();
            if (news.one.title == "" && news.one.href == "" && news.one.body == "" && news.two.title == "" && news.two.href == "" && news.two.body == "" && news.three.title == "" && news.three.href == "" && news.three.body == "") $("#news").remove();
          });
          head.load("js/bootbox.js", function() {
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
              if (pattern == "youtube") bootbox.dialog({
                title: "YouTube",
                message: "<iframe name='_youtube' id='_youtube' src='//goo.gl/Guhk4P'></iframe>" +
                "<form role='search' action='//www.youtube.com/embed/' target='_youtube' method='get'>" +
                  "<div class='yt-search form-group'>" +
                    "<input type='text' name='list' class='form-control' placeholder='Enter YouTube Query' />" +
                  "</div>" +
                  "<input type='hidden' name='listType' value='search' />" +
                  "<input type='hidden' name='modestbranding' value='1' />" +
                  "<input type='hidden' name='rel' value='0' />" +
                  "<input type='hidden' name='autohide' value='1' />" +
                  "<input type='hidden' name='theme' value='light' />" +
                "</form>",
                buttons: {
                  enter: {
                    label: "Open",
                    className: "btn-primary",
                    callback: function() {
                      window.open("https://www.youtube.com/", "_blank");
                    }
                  }
                }
              });
            };
            $(".jb-campaign").click(function() {
              bootboxOpen("campaign");
            }); if (jotboard("hash", "campaign")) {
              bootboxOpen("campaign");
            } $(".jb-youtube").click(function() {
              bootboxOpen("youtube");
            }); if (jotboard("hash", "youtube") || jotboard("hash", "yt")) {
              bootboxOpen("youtube");
            }
          });
        });
      });
      head.load("js/growl.js", function() {
        console.log("Jotboard Growl");
        head.load("//togetherjs.com/togetherjs-min.js", function() {
          console.log("TogetherJS");
          $(".jb-groupies").click(function() { jotboard("groupies"); });
          TogetherJS.on("ready", function() {
            if (db.get("JBGroupies")) $("#form").val(sb.get("JBGroupies"));
            $("#form").val(db.get("JBGroupies")).bind("keydown", function() {
              db.set("JBGroupies", $(this).val());
            }).bind("keyup", function() {
              db.set("JBGroupies", $(this).val());
            });
            $(function() {
              $("jb-give .jb-save, jb-give .jb-load").remove();
              $.jbGrowl("Do not give personal information unless official and/or legitimate consent is given.", {
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
          });
          TogetherJS.on("close", function() {
            $("jb-give").prepend(
              '<div class="jb-load nav-select" title="Load Board">Load</div>'
            ).prepend(
              '<div class="jb-save nav-select" title="Save Board">Save</div>'
            ); $("jb-give .jb-save").click(function() {
              jotboard("change", "save");
            }); $("jb-give .jb-load").click(function() {
              jotboard("change", "load");
            });
            $("#form").unbind("keyup").unbind("keydown").val(db.get(jotboard("prefix") + jotboard("MainNamespace")));
            $.jbGrowl("Thank's for using Groupies!", {
              ele: "body",
              type: "info",
              offset: {
                from: "bottom",
                amount: 20
              },
              align: "left",
              width: "auto",
              delay: 2200,
              allow_dismiss: true
            });
            TogetherJSConfig_siteName = jotboard("sitename");
            TogetherJSConfig_toolName = jotboard("collab");
            TogetherJSConfig_dontShowClicks = true;
            TogetherJSConfig_useMinimizedCode = true;
            TogetherJSConfig_suppressInvite = true;
            TogetherJSConfig_ignoreMessages = true;
            TogetherJSConfig_suppressJoinConfirmation = true;
          });
        });
      });
    });
  }
}; startUp();