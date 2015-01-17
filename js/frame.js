var jotboard = {
  init: function() {
    openDB: function() {
      if (db.get("JBNotes")) {
        $("#notes").val(db.get("JBNotes"));
      } $("#notes").attr({
        "placeholder": "Notes Go Here"
      }).on("keydown, keyup", function() {
        db.set("JBNotes", $(this).val());
      });
      var form = document.getElementById("form");
      var namespace = document.getElementById("namespace");
      $("jb-give .jb-save").click(function() { jotboard.data("save"); });
      $("jb-give .jb-load").click(function() { jotboard.data("load"); });
      if (db.get(jotboard._prefix() + jotboard.mainNSP())) {
        form.value = db.get(jotboard._prefix() + jotboard.mainNSP());
        console.info("The " + jotboard.mainNSP() + " board is avalible.");
      }
    },
    other: function() {
      $("body *:not(.body.container, .body.container *)").on('touchmove, touchend', function(nodeAB) {
        nodeAB.preventDefault();
      });
      $(".radio").attr("align", "center");
      $('iframe').attr({
        'frameborder': '0',
        'allowtransparency': 'true'
      }).addClass('iframe');
    }
    news: function() {
      if (jotboard.hashmod("n") && jotboard.hashmod("1")) window.location = jotboard.news.one.href;
      if (jotboard.hashmod("n") && jotboard.hashmod("2")) window.location = jotboard.news.two.href;
      if (jotboard.hashmod("n") && jotboard.hashmod("3")) window.location = jotboard.news.three.href;
      // Headline #1
      $('#news .one').html(
        "<div class='news panel'>" +
          "<div class='panel-heading'>" +
            "<h4 class='panel-title'>" +
              "<a href='" + jotboard.news.one.href + "'>" + jotboard.news.one.title + "</a>" +
            "</h4>" +
          "</div>" +
          "<div class='panel-body'>" + jotboard.news.one.body + "</div>" +
        "</div>");
      // Headline #2
      $('#news .two').html(
        "<div class='news panel'>" +
          "<div class='panel-heading'>" +
            "<h4 class='panel-title'>" +
              "<a href='" + jotboard.news.two.href + "'>" + jotboard.news.two.title + "</a>" +
            "</h4>" +
          "</div>" +
          "<div class='panel-body'>" + jotboard.news.two.body + "</div>" +
        "</div>");
        // Headline #3
        $('#news .three').html(
          "<div class='news panel'>" +
            "<div class='panel-heading'>" +
              "<h4 class='panel-title'>" +
                "<a href='" + jotboard.news.three.href + "'>" + jotboard.news.three.title + "</a>" +
              "</h4>" +
            "</div>" +
          "<div class='panel-body'>" + jotboard.news.three.body + "</div>" +
        "</div>");
        // Statements to kill headlines entirely if they're ALL empty.
        if (jotboard.news.one.title == "") $("#news div.one div.news div.panel-heading").remove();
        if (jotboard.news.one.body == "") $("#news div.one div.news div.panel-body").remove();
        if (jotboard.news.one.title == "" && jotboard.news.one.body == "") $("#news div.one").remove();
        if (jotboard.news.two.title == "") $("#news div.two div.news div.panel-heading").remove();
        if (jotboard.news.two.body == "") $("#news div.two div.news div.panel-body").remove();
        if (jotboard.news.two.title == "" && jotboard.news.two.body == "") $("#news div.two").remove();
        if (jotboard.news.three.title == "") $("#news div.three div.news div.panel-heading").remove();
        if (jotboard.news.three.body == "") $("#news div.three div.news div.panel-body").remove();
        if (jotboard.news.three.title == "" && jotboard.news.three.body == "") $("#news div.three").remove();
        if (jotboard.news.one.title == "" && jotboard.news.one.href == "" && jotboard.news.one.body == "" && jotboard.news.two.title == "" && jotboard.news.two.href == "" && jotboard.news.two.body == "" && jotboard.news.three.title == "" && jotboard.news.three.href == "" && jotboard.news.three.body == "") $("#news").remove();
      });
    }
  },
  classes: {
    nav: ".navigation",
    nav_toggle_btn: ".jb-toggle"
  },
  toggle: {
    navigation: function() {
      $(jotboard("nav-toggle-btn")).toggleClass("fa-bars").toggleClass("fa-close");
      $(jotboard("nav")).toggleClass("soft-block");
      $("#form").toggleClass("full-width");
    },
    body: function() {
      if ($("body").css("display", "none")) $("body").css("display", "visible");
      if ($("body").css("display", "visible")) $("body").css("display", "none");
    }
  },
  names: {
    sitename: "Jotboard",
    sitename_hashmod: "# Jotboard",
    groupies: "Groupies"
  },
  hashmod: function(attr_1) {
    window.location.href.indexOf("#" + attr_1) != -1;
  },
  _prefix: "JB_-",
  mainNSP: "Main",
  value: {
    namespace: $("#namespace").val(),
    form: $("#form").val()
  },
  data: function(attr_1) {
    // jotboard.data("save/load"): Used to get and set the values of Jotboard Data.
    if (attr_1 == "save") {
      if (!jotboard.value("namespace")) {
        db.set(jotboard._prefix() + jotboard.mainNSP(), jotboard.value("form"));
        console.info(jotboard.mainNSP() + " > saved");
        $.jbGrowl("The " + jotboard.mainNSP() + " board has been saved.", {
          ele: "body",
          type: "success",
          offset: {
            from: "top",
            amount: 20
          },
          align: "right",
          width: 247,
          delay: 1900,
          allow_dismiss: false,
          stackup_spacing: 10
        });
      } else {
        db.set(jotboard._prefix() + jotboard.value("namespace"), jotboard.value("form"));
        console.info(jotboard.value("namespace") + " > saved");
        $.jbGrowl(jotboard.value("namespace") + " has been saved.", {
          ele: "body",
          type: "info",
          offset: {
            from: "top",
            amount: 20
          },
          align: "right",
          width: 247,
          delay: 2800,
          allow_dismiss: false,
          stackup_spacing: 10
        });
      }
    }
    if (attr_1 == "load") {
      if (!jotboard.value("namespace")) {
        form.value = db.get(jotboard._prefix() + jotboard.mainNSP());
        console.info(jotboard.mainNSP() + " > loaded");
        $.jbGrowl("The " + jotboard.mainNSP() + " board has been loaded.", {
          ele: "body",
          type: "info",
          offset: {
            from: "top",
            amount: 20
          },
          align: "right",
          width: 247,
          delay: 1350,
          allow_dismiss: false,
          stackup_spacing: 10
        });
      } else {
        form.value = db.get(jotboard._prefix() + jotboard.value("namespace"));
        console.info(jotboard.value("namespace") + " > loaded");
        $.jbGrowl(jotboard.value("namespace") + " has been loaded.", {
          ele: "body",
          type: "info",
          offset: {
            from: "top",
            amount: 20
          },
          align: "right",
          width: 247,
          delay: 2850,
          allow_dismiss: false,
          stackup_spacing: 10
        });
      }
    }
  },
  groupies: {
    run: $(function() {
      // Groupies: Collaborative text editing.
      TogetherJS(this);
      return false;
    }),
    enter: $(function() {
      if (db.get("JBGroupies")) $("#form").val(sb.get("JBGroupies"));
      $("#form").val(db.get("JBGroupies")).on("keydown", function() {
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
    }),
    exit: $(function() {
      $("jb-give").prepend('<div class="jb-load nav-select" title="Load Board">Load</div>').prepend('<div class="jb-save nav-select" title="Save Board">Save</div>');
      $("jb-give .jb-save").click(function() {
        jotboard("change", "save");
      });
      $("jb-give .jb-load").click(function() {
        jotboard("change", "load");
      });
      $("#form").unbind("keyup").unbind("keydown").val(db.get(jotboard._prefix() + jotboard.mainNSP()));
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
    })
  },
  conditional: {
    mobile: $("body").addClass("mobile")
  },
  threshold: function(attr_1, attr_2) {
    attr_1 <= new Date().getHours() && new Date().getHours() < attr_2;
  },
  momentjs: {
    dayFormPL: $("#form").attr({
      "placeholder": moment(new Date()).format("[Hello, it's currently ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, have an awesome day!]")
    }),
    nightFormPL: $("#form").attr({
      "placeholder": moment(new Date()).format("[Hows it going? it's ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, see ya!]")
    })
  },
  news: {
    one: {
      title: "The Faceboooook!!",
      href: "https://www.facebook.com/Jotboard",
      body: "Since there is no limit, we can get alot more detailed and stuff :)"
    },
    two: {
      title: "We have a Twitter YO!!",
      href: "https://twitter.com/Jotboard",
      body: "The Official Twitter for Jotboard, usually contains the same content found on the blog but in 140 characters or less."
    },
    three: {
      title: "",
      href: "",
      body: ""
    }
  },
  bootbox: {
    campaign: bootbox.dialog({
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
    youtube: bootbox.dialog({
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
    }
  }
};