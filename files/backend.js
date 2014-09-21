var DevMode = false, head_conf = {
  html5: true
};

window._idl = {
  url: '//humble.wikia.com/w/Thread:4687',
  position: 'bottomright',
  theme: 'light'
};

var startUp = function() {
  if (window.location.protocol == "http:") window.location.protocol = "https:";
  if (window.location.protocol == "https:") {
    head.load(["//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js", "files/frame.js"], function() {
      console.log("jQuery, Main Frame");
      head.load([('https:' == document.location.protocol ? 'https://' : 'http://') + 'members.internetdefenseleague.org/include/?url=' + _idl.url + '&campaign=' + _idl.campaign + '&variant=banner'], function() {
        console.log('Campaign for Net Neutrality');
      });
      $(function() {
        $("iframe").attr({
          "frameborder": "0",
          "allowtransparency": "true"
        }).addClass("iframe");
        jotboard("_radio_play", "user:1249813849:playlist:7gMrshUGhhYAKThn2RT8eQ");
        $(".jb-menu-btn").on("click", function() {
          jotboard("submenu");
        });
        if (window.location.hash) document.title = "# Jotboard";
        if (!window.location.hash) document.title = "Jotboard";
        if (DevMode === false) $("body").css({
          "display": "block"
        });
      });
      head.load("//cdn.jsdelivr.net/momentjs/2.8.3/moment.min.js", function() {
        console.log("MomentJS");
        var TimeShift = function() {
          if (jotboard("threshold", 0, 13)) $("#form").addClass("day");
          else $("#form").addClass("night");
          $("#form.day").attr({
            "placeholder": moment(new Date()).format("[Hows it goin? It's ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, have fun :)]")
          });
          $("#form.night").attr({
            "placeholder": moment(new Date()).format("[Hi, its currently] dddd, Do [of] MMMM YYYY[ and the time is] h:mm a[, have fun.]")
          });
        }; TimeShift();
        setInterval(TimeShift, 1);
      });
      head.load("//cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js", function() {
        console.log("Prefixfree");
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
              animate: false,
              onEscape: function() {
                bootbox.hideAll();
              }
            });
            var whatscookin = function() {
              bootbox.dialog({
                title: "#WC: Whats Cookin?",
                message: "<iframe id='_youtube' src='//www.youtube.com/embed/?listType=playlist&list=PLOSutk9k0C3ofKYoP447uBfibpuAUKCoP&fs=1&loop=1&showinfo=0&autohide=1&theme=light' frameborder='0' allowfullscreen></iframe>",
                buttons: {
                  enter: {
                    label: "Open Playlist in YouTube",
                    className: "btn-link",
                    callback: function() {
                      window.open("//www.youtube.com/playlist?list=PLOSutk9k0C3ofKYoP447uBfibpuAUKCoP", "_blank");
                      return false;
                    }
                  }
                }
              });
            };
            if (jotboard("hash", "whatscookin") || jotboard("hash", "wc")) window[whatscookin()];
            $(".jb-wc").click(function() { window[whatscookin()]; }); // End Whats Cookin? #JBWC
            if (jotboard("hash", "campaign")) {
              bootbox.dialog({
                title: "Jotboard's Open Letter",
                message: "The Internet really has become something to be proud of, especially for early Internet Adopters, it went from an idea trying to create an internationalized network of amazing communities, to a lifestyle that has changed the way we live and work.<br /><br />" +
                "This message is to point out the current, past and future actions that have been taken to damage the Internet's Integrity, whether it be Mass Censorship, Illegal Spying or the way Net Neutrality presents itself as a money-related threat towards Cable Companies like Comcast, Verizon and Time Warner Cable and that it should never come to this again.<br /><br />" +
                "The way the Internet is is perfect, we wouldn't have it any other way, and regardless of what the implications are to the corporate side of things, we need to make sure these sort of things never happen again, by making how much of a positive impact the Internet has made on us and our world as clear as possible to make sure the corporate businesses of the modern world know what will happen if such things are to be passed through Congress or Governments sanctions.<br /><br />" +
                "This message is aimed at Politicians, Families, Frequent Internet Users, and the odd Selfie Takers, please share this message to as many people as you possibly can so we all know what were up against!",
                buttons: {
                  action: {
                    label: "Supporters of IDL",
                    className: "btn-primary",
                    callback: function() {
                      window.open("https://internetdefenseleague.org/", "_blank");
                    }
                  }
                }
              });
            } // End Campaign
            var srch = function(pat) {
              if (pat == "youtube") bootbox.prompt("YouTube", function(srch) {
                if (srch) window.open("//www.youtube.com/results?search_query=" + srch, "_blank"), console.log("YouTube:" + srch);
                if (srch === null) bootbox.hideAll();
              });
              if (pat == "facebook") bootbox.prompt("Facebook", function(srch) {
                if (srch) window.open("//www.facebook.com/search/more/?q=" + srch, "_blank"), console.log("Facebook:" + srch);
                if (srch === null) bootbox.hideAll();
              });
            };
            if (jotboard("hash", "youtube")) window[srch("youtube")];
            $(".jb-youtube").click(function() { window[srch("youtube")]; });
            if (jotboard("hash", "facebook")) window[srch("facebook")];
            $(".jb-facebook").click(function() { window[srch("facebook")]; }); // End Search
            if (jotboard("hash", "radio")) jotboard("radio");
            $(".jb-radio").click(function() { jotboard("radio"); }); // End Radio
            if (jotboard("hash", "menu") || jotboard("hash", "submenu")) jotboard("submenu"); // End Menu
          });
        });
      });
      head.load("//cdnjs.cloudflare.com/ajax/libs/store.js/1.3.14/store.min.js", function() {
        console.log("Store.JS");
        $(function() {
          if (store.get("JBNotes")) $("textarea#notes").val(store.get("JBNotes"));
          $("textarea#notes").attr({
            "placeholder": "Make Some Notes"
          }).bind("keyup", function() {
            store.set("JBNotes", $(this).val());
          }).bind("keydown", function() {
            store.set("JBNotes", $(this).val());
          });
        });
        var form = document.getElementById("form");
        var namespace = document.getElementById("namespace");
        $("jb-give .jb-save").click(function() {
          jotboard("change", "save");
        });
        $("jb-give .jb-load").click(function() {
          jotboard("change", "load");
        });
        if (store.get(jotboard("prefix") + jotboard("MainNamespace"))) {
          form.value = store.get(jotboard("prefix") + jotboard("MainNamespace"));
          console.info("The " + jotboard("MainNamespace") + " board is avalible.");
        }
        head.load("//togetherjs.com/togetherjs-min.js", function() {
          console.log("TogetherJS");
          $(".jb-groupies").click(function() {
            jotboard("groupies");
          });
          TogetherJS.on("ready", function() {
            if (store.get("JBGroupies")) $("#form").val(store.get("JBGroupies"));
            $("#form").val(store.get("JBGroupies")).bind("keydown", function() {
              store.set("JBGroupies", $(this).val());
            }).bind("keyup", function() {
              store.set("JBGroupies", $(this).val());
            });
            $(function() {
              $("jb-give .jb-save, jb-give .jb-load").remove();
              $.bootstrapGrowl("Do not share personal information unless official consent is given.", {
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
              });
            });
          });
          TogetherJS.on("close", function() {
            $("jb-give .jb-save").click(function() {
              jotboard("change", "save");
            });
            $("jb-give .jb-load").click(function() {
              jotboard("change", "load");
            });
            $("jb-give").prepend(
              '<div class="jb-save nav-select" title="Save Board">Save</div>' +
              '<div class="jb-load nav-select" title="Load Board">Load</div>'
            );
            $("#form").unbind("keyup").unbind("keydown").val(store.get(jotboard("prefix") + jotboard("MainNamespace")));
            $.bootstrapGrowl("Thank You for using Groupies!", {
              ele: "body",
              type: "info",
              offset: {
                from: "bottom",
                amount: 20
              },
              align: "right",
              width: "auto",
              delay: 2500,
              allow_dismiss: true
            });
          });
          TogetherJSConfig_siteName = jotboard("SiteName");
          TogetherJSConfig_toolName = jotboard("CollabName");
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