// Commons: Linear values in one function
var sys = function(main, _1, _2, _3) {
        if (main == "hashline") return window.location.href.indexOf("#" + _1) != -1;
        if (main == "threshold") return _1 <= new Date().getHours() && new Date().getHours() < _2;
        if (main == "window") return window;
        if (main == "this") return this;
        if (main == "JQthis") return $(this);
};

// Universal Selector $.textnet() or jQuery.textnet()
jQuery.fn.textnet = function(tn, tn1, tn2, tn3, tn4) {
        // $().textnet("toggleAttr", "title", "More", "Less");
        if (tn == "toggleAttr") {
                $(this).attr((tn1, tn2) ? (tn1, tn2) : (tn1, tn3));
        }
        // $().textnet("toggleHTML", "More", "Less");
        if (tn == "toggleHTML") {
                $(this).html(tn1 ? tn1 : tn2);
        }
        if (tn == "change") {
                if (tn1 == "save") {
                        if (!$("#namespace").val()) {
                                store.set("_-Main", form.value);
                                console.info("Main > saved");
                                $.bootstrapGrowl("The Main Textnet has been saved.", {
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
                        } if ($("#namespace").val()) {
                                store.set("_-" + $("#namespace").val(), $("#form").val());
                                console.info(namespace.value + " > saved");
                                $.bootstrapGrowl(namespace.value + " has been saved.", {
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
                        if (!$("#namespace").val()) {
                                form.value = store.get("_-Main");
                                console.info("Main > loaded");
                                $.bootstrapGrowl("The Main Textnet has been loaded.", {
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
                        } if ($("#namespace").val()) {
                                form.value = store.get("_-" + $("#namespace").val());
                                console.info(namespace.value + " > loaded");
                                $.bootstrapGrowl(namespace.value + " has been loaded.", {
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
