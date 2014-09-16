var jotboard = function(main, _1, _2, _3, _4) {
  if (main == "SiteName") return "Jotboard";
  if (main == "CollabName") return "Groupies";
  if (main == "prefix") return "JB_-";
  if (main == "MainNamespace") return "Main";
  if (main == "toggleBody") {
    if ($("body").css("display", "none")) $("body").css("display", "visible");
    if ($("body").css("display", "visible")) $("body").css("display", "none");
  }
  if (main == "radio") /* Standard switch function for Radio Textnet */ $("#_radio, #_radio_insert").toggleClass("block");
  if (main == "NamespaceValue") /* Returns Value of Hero Box (Namespace's) */ return $("#namespace").val();
  if (main == "FormValue") /* Return Form Value */ return $("#form").val();
  if (main == "window") return window;
  if (main == "this") return this;
  if (main == "_radio_play") return window.open("//embed.spotify.com/?uri=" + _1, "_radio");
  if (main == "hash") /* Used for HashMods */ return window.location.href.indexOf("#" + _1) != -1;
  if (main == "threshold") {
    // Returns current hour threshold (used for marquee)
    return _1 <= new Date().getHours() && new Date().getHours() < _2;
  }
  if (main == "groupies") {
    // Groupies: Collaborative text editing.
    TogetherJS(this);
    return false;
  }
  if (main == "submenu") {
    // Submenu: Alternate Functions on Textnet that don't rely on the Local Data aspect of Textnet.
    $(".jb-menu-btn").toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
    $("#submenu").toggleClass("block");
  }
  if (main == "change") {
    // textnet("save or load"): Used to get and set Form Values and Textnet Data.
    if (_1 == "save") {
      if (!jotboard("NamespaceValue")) {
        store.set(jotboard("prefix") + jotboard("MainNamespace"), jotboard("FormValue"));
        console.info(jotboard("MainNamespace") + " > saved");
        $.bootstrapGrowl(jotboard("MainNamespace") + " has been saved.", {
          ele: "body",
          type: "success",
          offset: {
            from: "bottom",
            amount: 20
          },
          align: "right",
          width: 300,
          delay: 3100,
          allow_dismiss: true,
          stackup_spacing: 10
        });
      } else {
        store.set(jotboard("prefix") + jotboard("NamespaceValue"), jotboard("FormValue"));
        console.info(jotboard("NamespaceValue") + " > saved");
        $.bootstrapGrowl(jotboard("NamespaceValue") + " has been saved.", {
          ele: "body",
          type: "info",
          offset: {
          from: "bottom",
            amount: 20
          },
          align: "right",
          width: 300,
          delay: 3100,
          allow_dismiss: true,
          stackup_spacing: 10
        });
      }
    }
    if (_1 == "load") {
      if (!jotboard("NamespaceValue")) {
        form.value = store.get(jotboard("prefix") + jotboard("MainNamespace"));
        console.info(jotboard("MainNamespace") + " > loaded");
        $.bootstrapGrowl(jotboard("MainNamespace") + " has been loaded.", {
          ele: "body",
          type: "info",
          offset: {
            from: "bottom",
            amount: 20
          },
          align: "right",
          width: 290,
          delay: 3100,
          allow_dismiss: true,
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
          width: 290,
          delay: 3100,
          allow_dismiss: true,
          stackup_spacing: 10
        });
      }
    }
  }
};
