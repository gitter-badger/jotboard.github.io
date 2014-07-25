// Commons (sys): Basic values and Functions in one.
var sys = function(main, _1, _2, _3) {
        if (main == "SiteName") return "Textnet";
        if (main == "CollabName") return "Groupies";
        if (main == "prefix") return "TN_-";
        if (main == "MainNamespace") return "Main";
        if (main == "groupies") {
                TogetherJS(this);
                return false;
        }
        if (main == "toggleBody") return $("body").toggleClass("block");
        if (main == "radio") $("#_spotify, #_spotify_insert").toggleClass("block");
        if (main == "NamespaceValue") return $("#namespace").val();
        if (main == "FormValue") return $("#form").val();
        if (main == "window") return window;
        if (main == "this") return this;
        if (main == "hash") return window.location.href.indexOf("#" + _1) != -1;
        if (main == "threshold") return _1 <= new Date().getHours() && new Date().getHours() < _2;
        // Submenu
        if (main == "submenu") {
                $(".tn-menu-btn").toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
                $("#submenu").toggleClass("block");
        }
};

// Universal Selector $.textnet() or jQuery.textnet()
$.fn.textnet = function(tn, tn1, tn2, tn3, tn4) {
        // $.textnet("toggleAttr", "title", "More", "Less"); (currently being discussed)
        if (tn == "toggleAttr") $(this).attr(tn1, tn2) ? $(this).attr(tn1, tn3): $(this).attr(tn1, tn2);
        // $.textnet("toggleHTML", "More", "Less"); (currently being discussed)
        if (tn == "toggleHTML") $(this).html(tn1) ? $(this).html(tn2) : $(this).html(tn1);
        // $.textnet("change", "save/load")
        if (tn == "change") {
                if (tn1 == "save") {
                        if (!sys("NamespaceValue")) {
                                store.set(sys("prefix") + sys("MainNamespace"), sys("FormValue"));
                                console.info(sys("MainNamespace") + " > saved");
                                $.bootstrapGrowl("The " + sys("MainNamespace") + " Textnet has been saved.", {
                                        ele: "body",
                                        type: "success",
                                        offset: {
                                                from: "bottom",
                                                amount: 20
                                        },
                                        align: "right",
                                        width: 300,
                                        delay: 4200,
                                        allow_dismiss: true,
                                        stackup_spacing: 10
                                });
                        } else {
                                store.set(sys("prefix") + sys("NamespaceValue"), sys("FormValue"));
                                console.info(sys("NamespaceValue") + " > saved");
                                $.bootstrapGrowl(sys("NamespaceValue") + " has been saved.", {
                                        ele: "body",
                                        type: "info",
                                        offset: {
                                                from: "bottom",
                                                amount: 20
                                        },
                                        align: "right",
                                        width: 300,
                                        delay: 4200,
                                        allow_dismiss: true,
                                        stackup_spacing: 10
                                });
                        }
                }
                if (tn1 == "load") {
                        if (!sys("NamespaceValue")) {
                                form.value = store.get(sys("prefix") + sys("MainNamespace"));
                                console.info(sys("MainNamespace") + " > loaded");
                                $.bootstrapGrowl("The " + sys("MainNamespace") + " Textnet has been loaded.", {
                                        ele: "body",
                                        type: "info",
                                        offset: {
                                                from: "bottom",
                                                amount: 20
                                        },
                                        align: "right",
                                        width: 300,
                                        delay: 4200,
                                        allow_dismiss: true,
                                        stackup_spacing: 10
                                });
                        } else {
                                form.value = store.get(sys("prefix") + sys("NamespaceValue"));
                                console.info(sys("NamespaceValue") + " > loaded");
                                $.bootstrapGrowl(sys("NamespaceValue") + " has been loaded.", {
                                        ele: "body",
                                        type: "info",
                                        offset: {
                                                from: "bottom",
                                                amount: 20
                                        },
                                        align: "right",
                                        width: 300,
                                        delay: 4200,
                                        allow_dismiss: true,
                                        stackup_spacing: 10
                                });
                        }
                }
        }
};
