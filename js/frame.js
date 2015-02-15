var jotboard = function(main, _1, _2, _3, _4) {
  // Meta
  if (main == "social") return window.location.href = "//jotboard.github.io/social/";
  if (main == "threshold") return _1 <= new Date().getHours() && new Date().getHours() < _2;
  if (main == "hash") /* Used for Hashmods */ return window.location.href.indexOf("#" + _1) != -1;
  if (main == "prefix") return "JB_-";
  // Toggling
  if (main == "toggle") {
    if (_1 == "body") {
      if ($("body").css("display", "none")) $("body").css("display", "visible");
      if ($("body").css("display", "visible")) $("body").css("display", "none");
    } if (_1 == "navigation") {
      $(".below-top").toggleClass("remove");
    }
  }
  if (main == "groupies") {
    if (_1 == "run") {
      // Groupies: Collaborative text editing.
      TogetherJS(this);
      return false;
    }
    if (_1 == "name") return "Groupies";
  }
  if (main == "data") {
    // jotboard("data", "save/load"): Used to get and set the values of Jotboard Data Files.
    if (typeof(Storage) !== "undefined") {
      if (_1 == "save") {
        if (!$("#namespace").val()) {
          db.set(jotboard("prefix") + "Main", $("#main.main #form").val());
          console.info("Main > saved");
          $.jbGrowl("The main board has been saved.", {
            ele: "body",
            type: "success",
            offset: {
              from: "bottom",
              amount: 20
            },
            align: "left",
            width: 247,
            delay: 1900,
            allow_dismiss: false,
            stackup_spacing: 10
          });
        } else {
          db.set(jotboard("prefix") + $("#namespace").val(), $("#main.main #form").val());
          console.info($("#namespace").val() + " > saved");
          $.jbGrowl($("#namespace").val() + " has been saved.", {
            ele: "body",
            type: "info",
            offset: {
              from: "bottom",
              amount: 20
            },
            align: "left",
            width: 247,
            delay: 2800,
            allow_dismiss: false,
            stackup_spacing: 10
          });
        }
      }
      if (_1 == "load") {
        if ($("#namespace").val()) {
          $("#main.main #form").val(db.get(jotboard("prefix") + "Main"));
          console.info("Main > loaded");
          $.jbGrowl("The main board has been loaded.", {
            ele: "body",
            type: "info",
            offset: {
              from: "bottom",
              amount: 20
            },
            align: "left",
            width: 247,
            delay: 1350,
            allow_dismiss: false,
            stackup_spacing: 10
          });
        } else {
          $("#main.main #form").val(db.get(jotboard("prefix") + $("#namespace").val()));
          console.info($("#namespace").val() + " > loaded");
          $.jbGrowl($("#namespace").val() + " has been loaded.", {
            ele: "body",
            type: "info",
            offset: {
              from: "bottom",
              amount: 20
            },
            align: "left",
            width: 247,
            delay: 2850,
            allow_dismiss: false,
            stackup_spacing: 10
          });
        }
      }
    } else {
      $.jbGrowl("System Requirements were not met, and therefore cannot save or load, upgrade to a more modern web browser (preferably <a href='/chrome/'>Chrome</a>) to be able to resolve this issue.", {
        ele: "body",
        type: "danger",
        offset: {
          from: "bottom",
          amount: 20
        },
        align: "left",
        width: 320,
        delay: 3300,
        allow_dismiss: false,
        stackup_spacing: 10
      });
    }
  }
};