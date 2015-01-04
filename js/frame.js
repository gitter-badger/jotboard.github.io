var jotboard = function(main, _1, _2, _3, _4) {
  if (main == "nav") return ".navigation";
  if (main == "nav-toggle-btn") return ".jb-toggle";
  if (main == "toggle-nav") return $(function() {
    $(jotboard("nav-toggle-btn")).toggleClass("fa-bars").toggleClass("fa-close");
    $(jotboard("nav")).toggleClass("soft-block");
    $("#form").toggleClass("full-width");
  });
  if (main == "sitename") return "Jotboard";
  if (main == "hashmod") return "# Jotboard";
  if (main == "collab") return "Groupies";
  if (main == "FormInfoDay") return {
    "placeholder": moment(new Date()).format("[Hello, Welcome to Jotboard! it's currently ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, have an awesome day!]"),
  }; if (main == "FormInfoNight") return {
    "placeholder": moment(new Date()).format("[Hows it going? it's ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, CYA!]"),
  };
  if (main == "prefix") return "JB_-";
  if (main == "MainNamespace") return "Main";
  if (main == "toggleBody") {
    if ($("body").css("display", "none")) $("body").css("display", "visible");
    if ($("body").css("display", "visible")) $("body").css("display", "none");
  }
  if (main == "NamespaceValue") /* Returns Value of Hero Box */ return $("#namespace").val();
  if (main == "FormValue") /* Return Form Value */ return $("#form").val();
  if (main == "window") return window;
  if (main == "this") return this;
  if (main == "hash") /* Used for Hashmods */ return window.location.href.indexOf("#" + _1) != -1;
  if (main == "threshold") {
    // Returns current hour threshold (used for marquee)
    return _1 <= new Date().getHours() && new Date().getHours() < _2;
  }
  if (main == "groupies") {
    // Groupies: Collaborative text editing.
    TogetherJS(this);
    return false;
  }
  if (main == "change") {
    // jotboard("change", "save/load"): Used to get and set the values of Jotboard Data.
    if (_1 == "save") {
      if (!jotboard("NamespaceValue")) {
        store.set(jotboard("prefix") + jotboard("MainNamespace"), jotboard("FormValue"));
        console.info(jotboard("MainNamespace") + " > saved");
        $.bootstrapGrowl("The " + jotboard("MainNamespace") + " board has been saved.", {
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
        store.set(jotboard("prefix") + jotboard("NamespaceValue"), jotboard("FormValue"));
        console.info(jotboard("NamespaceValue") + " > saved");
        $.bootstrapGrowl(jotboard("NamespaceValue") + " has been saved.", {
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
    if (_1 == "load") {
      if (!jotboard("NamespaceValue")) {
        form.value = store.get(jotboard("prefix") + jotboard("MainNamespace"));
        console.info(jotboard("MainNamespace") + " > loaded");
        $.bootstrapGrowl("The " + jotboard("MainNamespace") + " board has been loaded.", {
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
        form.value = store.get(jotboard("prefix") + jotboard("NamespaceValue"));
        console.info(jotboard("NamespaceValue") + " > loaded");
        $.bootstrapGrowl(jotboard("NamespaceValue") + " has been loaded.", {
          ele: "body",
          type: "info",
          offset: {
            from: "bottom",
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
  }
};