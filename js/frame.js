var jotboard = function(main, _1, _2, _3, _4) {
  // Meta
  if (main == "sitename") return "Jotboard";
  if (main == "hashmod") return "# Jotboard";
  if (main == "threshold") return _1 <= new Date().getHours() && new Date().getHours() < _2;
  if (main == "hash") /* Used for Hashmods */ return window.location.href.indexOf("#" + _1) != -1;
  // Data
  if (main == "prefix") return "JB_-";
  if (main == "namespace/main") return "Main";
  // Toggling
  if (main == "toggle") {
    if (_1 == "body") {
      if ($("body").css("display", "none")) $("body").css("display", "visible");
      if ($("body").css("display", "visible")) $("body").css("display", "none");
    } if (_1 == "navigation") {
      $(".navigation").toggleClass("fullscreen");
      $("#form").toggleClass("block");
    }
  }
  // Values
  if (main == "value") {
    if (_1 == "namespace") /* Return Form Value */ return $("#namespace").val();
    if (_1 == "form") /* Return Form Value */ return $("#form").val();
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
    // jotboard("change", "save/load"): Used to get and set the values of Jotboard Data.
    if (typeof(Storage) !== "undefined") {
      if (_1 == "save") {
        if (!jotboard("value", "namespace")) {
          db.set(jotboard("prefix") + jotboard("namespace/main"), jotboard("value", "form"));
          console.info(jotboard("namespace/main") + " > saved");
          $.jbGrowl("The " + jotboard("namespace/main") + " board has been saved.", {
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
          db.set(jotboard("prefix") + jotboard("value", "namespace"), jotboard("value", "form"));
          console.info(jotboard("value", "namespace") + " > saved");
          $.jbGrowl(jotboard("value", "namespace") + " has been saved.", {
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
        if (!jotboard("value", "namespace")) {
          form.value = db.get(jotboard("prefix") + jotboard("namespace/main"));
          console.info(jotboard("namespace/main") + " > loaded");
          $.jbGrowl("The " + jotboard("namespace/main") + " board has been loaded.", {
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
          form.value = db.get(jotboard("prefix") + jotboard("value", "namespace"));
          console.info(jotboard("value", "namespace") + " > loaded");
          $.jbGrowl(jotboard("value", "namespace") + " has been loaded.", {
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
