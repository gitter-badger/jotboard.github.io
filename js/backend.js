window._idl = {};
var DevMode = false, IDLCamp = false, head_conf = {
  html5: true
};

var startUp = function() {
  if (window.location.protocol == "http:") window.location.protocol = "https:";
  if (window.location.protocol == "https:") {
    head.load(["//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js", "js/frame.js"], function() {
      console.log("jQuery, Frame");
      head.load(['//cdnjs.cloudflare.com/ajax/libs/mousetrap/1.4.6/mousetrap.min.js'], function() {
        console.log('Mousetrap');
      });
      $(function() {
        document.body.addEventListener('touchmove', function(BodNod) {
          BodNod.preventDefault();
        });
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
      head.load("//cdn.jsdelivr.net/momentjs/2.8.4/moment.min.js", function() {
        console.log("MomentJS");
        // TimeShift is used to simulate real-time activity, not actually
        // real-time, but its per 1 millisecond so its close enough.
        var TimeShift = function() {
          if (jotboard("threshold", 0, 13)) $("#form").attr(jotboard('FormInfoDay'));
          else $("#form").attr(jotboard('FormInfoNight'));
        }; TimeShift();
        setInterval(TimeShift, 1);
      });
      head.load("//cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js", function() {
        console.log("Prefixfree");
        head.load("//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css", function() {
          console.log("Font Awesome");
          $(".jb-toggle").click(function() {
            $(".navigation").toggleClass("soft-block");
            $("#form").toggleClass("full-width");
          });
        });
        head.load(["//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/bootstrap.min.js", "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css"], function() {
          console.log("Bootstrap JS, Bootstrap CSS");
          head.load("//cdnjs.cloudflare.com/ajax/libs/bootstrap-growl/1.0.0/jquery.bootstrap-growl.min.js", function() {
            console.log("Bootstrap Growl");
          });
          head.load("//cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.3.0/bootbox.js", function() {
            console.log("Bootbox");
            bootbox.setDefaults({
              locale: "en",
              backdrop: true,
              animate: true
            });
            var bootboxOpen = function(pattern) {
              if (pattern == "campaign") bootbox.dialog({
                title: "Jotboard's Open Letter",
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
            }; if (jotboard("hash", "campaign")) {
              window[bootboxOpen("campaign")];
            }
          });
        });
      });
      head.load("//cdnjs.cloudflare.com/ajax/libs/store.js/1.3.14/store.min.js", function() {
        console.log("Store.JS");
        $(function() {
          if (store.get("JBNotes")) $("textarea#notes").val(store.get("JBNotes"));
          $("textarea#notes").attr({
            "placeholder": "Notes go here"
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
              $.bootstrapGrowl("Do not give personal information unless official and/or legitimate consent is given.", {
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
            $("#form").unbind("keyup").unbind("keydown").val(store.get(jotboard("prefix") + jotboard("MainNamespace")));
            $.bootstrapGrowl("Thank You for using Groupies!", {
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
  }
}; startUp();