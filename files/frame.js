var textnet = function(main, _1, _2, _3, _4) {
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
        // textnet("change", "save/load")
        if (main == "change") {
                if (_1 == "save") {
                        if (!textnet("NamespaceValue")) {
                                store.set(textnet("prefix") + textnet("MainNamespace"), textnet("FormValue"));
                                console.info(textnet("MainNamespace") + " > saved");
                                $.bootstrapGrowl("The " + textnet("MainNamespace") + " Textnet has been saved.", {
                                        ele: "body",
                                        type: "success",
                                        offset: {
                                                from: "bottom",
                                                amount: 20
                                        },
                                        align: "right",
                                        width: 290,
                                        delay: 4200,
                                        allow_dismiss: true,
                                        stackup_spacing: 10
                                });
                        } else {
                                store.set(textnet("prefix") + textnet("NamespaceValue"), textnet("FormValue"));
                                console.info(textnet("NamespaceValue") + " > saved");
                                $.bootstrapGrowl(textnet("NamespaceValue") + " has been saved.", {
                                        ele: "body",
                                        type: "info",
                                        offset: {
                                                from: "bottom",
                                                amount: 20
                                        },
                                        align: "right",
                                        width: 290,
                                        delay: 4200,
                                        allow_dismiss: true,
                                        stackup_spacing: 10
                                });
                        }
                }
                if (_1 == "load") {
                        if (!textnet("NamespaceValue")) {
                                form.value = store.get(textnet("prefix") + textnet("MainNamespace"));
                                console.info(textnet("MainNamespace") + " > loaded");
                                $.bootstrapGrowl("The " + textnet("MainNamespace") + " Textnet has been loaded.", {
                                        ele: "body",
                                        type: "info",
                                        offset: {
                                                from: "bottom",
                                                amount: 20
                                        },
                                        align: "right",
                                        width: 290,
                                        delay: 4200,
                                        allow_dismiss: true,
                                        stackup_spacing: 10
                                });
                        } else {
                                form.value = store.get(textnet("prefix") + textnet("NamespaceValue"));
                                console.info(textnet("NamespaceValue") + " > loaded");
                                $.bootstrapGrowl(textnet("NamespaceValue") + " has been loaded.", {
                                        ele: "body",
                                        type: "info",
                                        offset: {
                                                from: "bottom",
                                                amount: 20
                                        },
                                        align: "right",
                                        width: 290,
                                        delay: 4200,
                                        allow_dismiss: true,
                                        stackup_spacing: 10
                                });
                        }
                }
        }
};