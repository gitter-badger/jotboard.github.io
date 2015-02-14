window._idl = {};
var _IDL = false, head_conf = {
  html5: true
};

var startUp = function() {
  if (window.location.protocol == "http:") window.location.protocol = "https:";
  if (window.location.protocol == "https:") {
    head.load(["js/db.js", "js/frame.js", "js/depend/jquery.js"], function() {
      // Form is $("#main.main #form");
      // Namespace is $("#namespace");
      if ($("body").css("display", "block")) $("body").css("display", "none");
      if ($("body").css("display", "none")) $("body").css("display", "block");
      if (db.get(jotboard("prefix") + "Main")) {
        $("#main.main #form").val(db.get(jotboard("prefix") + "Main"));
        console.info("The main board is avalible.");
      } if (_IDL === true) {
        head.load(('https:' == document.location.protocol ? 'https://' : 'http://') +
          'members.internetdefenseleague.org/include/?url=' + _idl.url + '&campaign=' +
          _idl.campaign + '&variant=modal');
      }
      $("jb-give .jb-save").on("click", function() {
        jotboard("data", "save");
      });
      $("jb-give .jb-load").on("click", function() {
        jotboard("data", "load");
      });
    });
    head.load("js/depend/moment.js", function() {
      console.log("Moment.JS");
      var TimePulse = function() {
        if (jotboard("threshold", 0, 12)) {
          $("#main.main #form").attr({
            "placeholder": moment(new Date()).format("[Hello, it's currently] dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, have an awesome day!]")
          });
        } else {
          $("#main.main #form").attr({
            "placeholder": moment(new Date()).format("[Hows it going? it's ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, see ya!]")
          });
        }
      }; TimePulse();
      setInterval(TimePulse, 200);
    });
    head.load("js/depend/prefixfree.js", function() {
      console.log("Prefixfree");
      head.load("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css", function() {
        console.log("Font Awesome");
      });
      head.load(["js/depend/bootstrap.js", "css/depend/bootstrap.css"], function() {
        console.log("Bootstrap CSS");
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          $("body").addClass("mobile");
        } else console.log("Not on mobile.");
        head.load(["js/depend/bootbox.js"], function() {
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
            });
          };
          $(".jb-campaign").on("click", function() {
            bootboxOpen("campaign");
          }); if (jotboard("hash", "campaign")) bootboxOpen("campaign");
        });
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
          $("#main.main #form").val(db.get(jotboard("prefix") + jotboard("value", "form")));
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