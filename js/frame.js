var jotboard = function(main, _1, _2, _3, _4) {
  // Meta
  if (main == "threshold") return _1 <= new Date().getHours() && new Date().getHours() < _2;
  if (main == "hash") /* Used for Hashmods */ return window.location.href.indexOf("#" + _1) != -1;
  if (main == "prefix") return "JB_-";
  if (main == "data") {
    // jotboard("data", "save/load"): Used to get and set the values of Jotboard Data.
    if (typeof(Storage) !== "undefined") {
      if (_1 == "save") {
        if (!$("#namespace").val()) {
          store.set(jotboard("prefix") + "Main", $("#main.main #form").val());
          console.info("Main > saved");
          toastr("The main board has been saved.");
        } else {
          store.set(jotboard("prefix") + $("#namespace").val(), $("#main.main #form").val());
          console.info($("#namespace").val() + " > saved");
          toastr($("#namespace").val() + " has been saved.");
        }
      }
      if (_1 == "load") {
        if (!$("#namespace").val()) {
          $("#main.main #form").val(store.get(jotboard("prefix") + "Main"));
          console.info("Main > loaded");
          toastr("The main board has been loaded.");
        } else {
          $("#main.main #form").val(store.get(jotboard("prefix") + $("#namespace").val()));
          console.info($("#namespace").val() + " > loaded");
          toastr($("#namespace").val() + " has been loaded.");
        }
      }
    } else {
      toastr["error"]("System Requirements were not met, and therefore cannot save or load the content, upgrade to a more modern web browser (preferably <a href='/chrome/'>Chrome</a>) so you can then be able to save and/or load content.");
    }
  }
};