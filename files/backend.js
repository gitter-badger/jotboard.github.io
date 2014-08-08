var DevMode = false;
head.load(["//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js", "files/frame.js"], function() {
  console.log("jQuery, Frame");
  $(function() {
    $("iframe").attr({
      "frameborder": "0",
      "allowtransparency": "true"
    }).addClass("iframe");
    $(".tn-menu-btn").click(function() {
      textnet("submenu");
    });
    if (window.location.hash) document.title = "# Textnet";
    if (!window.location.hash) document.title = "Textnet";
    if (DevMode === false || DevMode == "false") textnet("toggleBody");
    if (DevMode === true || DevMode == "true")
    if (textnet("hash", "forceuse")) textnet("toggleBody");
  });
  head.load("//cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js", function() {
    console.log("MomentJS");
    var UT = function() {
      if (textnet("threshold", 4, 19)) $("#form").addClass("day");
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
    console.log("Store.JS");
    var form = document.getElementById("form");
    var namespace = document.getElementById("namespace");
    $(".tn-save").click(function() { textnet("change", "save"); });
    $(".tn-load").click(function() { textnet("change", "load"); });
    if (window.localStorage[textnet("prefix") + textnet("MainNamespace")]) {
      form.value = store.get(textnet("prefix") + textnet("MainNamespace"));
      console.info("The " + textnet("MainNamespace") + " Textnet is avalible.");
    }
  });
  head.load("//cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js", function() {
    console.log("Prefix Free");
    head.load("//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css", function() {
      console.log("Font Awesome");
    });
    head.load(["//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/bootstrap.min.js", "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css"], function() {
      console.log("Bootstrap JS, Bootstrap CSS");
      head.load("//cdnjs.cloudflare.com/ajax/libs/bootstrap-growl/1.0.0/jquery.bootstrap-growl.min.js", function() {
        console.log("Bootstrap Growl");
      });
      head.load("//cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.2.0/bootbox.js", function() {
        console.log("Bootbox");
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
                label: "#WhatsCookin",
                className: "btn-link",
                callback: function() {
                  window.open("//www.youtube.com/playlist?list=PLXJjNJMpJQKqbpmhNOJNETiMbfZpLjIVb", "_blank");
                  return false;
                }
              }
            }
          });
        };
        if (textnet("hash", "campaign")) {
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
        if (textnet("hash", "radio")) textnet("radio");
        $(".tn-radio-textnet").click(function() { textnet("radio"); });
        if (textnet("hash", "whatscookin")) window[whatscookin()];
        $(".tn-wc").click(function() { window[whatscookin()]; });
        if (textnet("hash", "youtube")) window[youtube_srch()];
        $(".tn-youtube").click(function() { window[youtube_srch()]; });
      });
    });
  });
  head.load("//togetherjs.com/togetherjs-min.js", function() {
    console.log("TogetherJS");
    $(".tn-groupies").click(function() { textnet("groupies"); });
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
          width: "auto",
          delay: 3500,
          allow_dismiss: true
        })], window[function() {
          form.value = store.get(textnet("prefix") + "groupies");
        }];
      }
    };
    TogetherJSConfig_siteName = textnet("SiteName");
    TogetherJSConfig_toolName = textnet("CollabName");
    TogetherJSConfig_dontShowClicks = $(".navigation, .navigation *") || document.querySelector(".navigation, .navigation *");
    TogetherJSConfig_findRoom = {
      prefix: "groupies",
      max: 4
    };
    TogetherJSConfig_useMinimizedCode = true;
    TogetherJSConfig_suppressInvite = true;
    TogetherJSConfig_ignoreMessages = false;
    TogetherJSConfig_suppressJoinConfirmation = false;
  });
});