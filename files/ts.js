// Commons: Linear values in one function
var sys = function(main, _1, _2, _3) {
        if (main == "hash") return window.location.href.indexOf("#" + _1) != -1;
        if (main == "threshold") return _1 <= new Date().getHours() && new Date().getHours() < _2;
        if (main == "prefix") return "TN_-";
        if (main == "MainNamespace") return "Main";
        if (main == "NamespaceValue") return $("#namespace").val();
        if (main == "FormValue") return $("#form").val();
        if (main == "window") return window;
        if (main == "this") return this;
};

// Universal Selector $.textnet() or jQuery.textnet()
$.fn.textnet = function(tn, tn1, tn2, tn3, tn4) {
        // $().textnet("toggleAttr", "title", "More", "Less");
        if (tn == "toggleAttr") {
                $(this).attr(tn1) == ($(this).attr(tn1) == tn2) ? tn2 : tn3;
        }
        // $().textnet("toggleHTML", "More", "Less");
        if (tn == "toggleHTML") {
                $(this).html() == ($(this).html() == tn1) ? tn1 : tn2;
        }
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
                                        width: 290,
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
                                        width: 270,
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
                                        width: 280,
                                        delay: 4200,
                                        allow_dismiss: true,
                                        stackup_spacing: 10
                                });
                        }
                }
        }
        if (tn == "execute") {
                if (tn1 == "event") {
                        bootbox.dialog({
                                title: "#WhatsCookin",
                                message: "<iframe class='yt-player' width='100%' height='310' src='//www.youtube.com/embed/?listType=playlist&list=PLXJjNJMpJQKqbpmhNOJNETiMbfZpLjIVb&fs=1&loop=1&showinfo=0&autohide=1&theme=light' frameborder='0' allowfullscreen></iframe>",
                                buttons: {
                                        enter: {
                                                label: "What is WC?",
                                                className: "btn-primary",
                                                callback: function() {
                                                        window.open("//textnet.github.io/wc", "_top");
                                                        return false;
                                                }
                                        }
                                }
                        });
                }
        }
};
