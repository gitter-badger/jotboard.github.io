// Selectors
// Shrinking our need for adding the same sort of code.
var hashline = function(_) { return window.location.href.indexOf("#" + _) != -1; };
var threshold = function(_1, _2) { return _1 <= new Date().getHours() && new Date().getHours() < _2; }
var w = document.window || $(window);
var t = $(this);
Node.prototype.prependChild = function(el) {
        this.childNodes[1] && this.insertBefore(el, this.childNodes[1]) || this.appendChild(el);
};

// Universal Selector w.textnet
jQuery.fn.textnet = function(tn, tn1, tn2, tn3, tn4) {
        if (tn == "toggleAttr") {
                if ($(this).attr(tn1) == tn2) $(this).attr(tn1, tn3);
                if ($(this).attr(tn1) == tn3) $(this).attr(tn1, tn2);
        }
        if (tn == "toggleHTML") {
                if ($(this).html() == tn1) $(this).html(tn2);
                if ($(this).html() == tn2) $(this).html(tn1);
        }
        if (tn == "change") {
                if (tn1 == "save") {
                        if (namespace.value.length === 0) {
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
                        } else {
                                store.set("_-" + namespace.value, form.value);
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
                        if (namespace.value.length === 0) {
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
                        } else {
                                form.value = store.get("_-" + namespace.value);
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
