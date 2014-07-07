// Selectors
// Shrinking our need for adding the same sort of code.
var hashline = function(u) { return window.location.href.indexOf("#" + u) != -1; };
var w = document.window || $(window);
var t = $(this);
Node.prototype.prependChild = function(el) {
        this.childNodes[1] && this.insertBefore(el, this.childNodes[1]) || this.appendChild(el);
};

// Universal Selector w.textnet
jQuery.fn.textnet = function(tn, tn1, tn2, tn3, tn4) {
        if (tn == "toggleAttr") {
                if ($(this).attr(tn1, tn2)) $(this).attr(tn1, tn3);
                if ($(this).attr(tn1, tn3)) $(this).attr(tn1, tn2);
        }
        if (tn == "toggleHTML") {
                if ($(this).html(tn1)) $(this).html(tn2);
                if ($(this).html(tn2)) $(this).html(tn1);
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
                if (tn1 == "youtube") {
                        bootbox.prompt("YouTube Search", function(srch) {
                                if (srch) {
                                        window.open("//www.youtube.com/results?utm_source=opensearch&search_query=" + srch, "_blank");
                                }
                                if (srch === null) bootbox.hideAll();
                        });
                }
                if (tn1 == "groupies") {
                        TogetherJS(this);
                        return false;
                }
        }
        if (tn == "intro") {
                if (tn1 == "hackernews") {
                        bootbox.dialog({
                                title: "Hai",
                                message: "I'm not all that good with talking, but since I am now, why bother stopping myself?<br />" +
                                "Hello, I'm Textnet, and I basically make taking notes, collaboration and access to entertainment a whole lot easier.<br />" +
                                "As you can see Textnet is still in early development stages and is run by one person, alongside a feedback-giving community and by making this product avalible to everyone, I can give out the oppurtunity to have live feedback, to make my services better.<br /><br />" +
                                "Well, thats about it, cya on the Hacking side of things.<br /><br />" +
                                "Sum luv, Chris :P",
                                buttons: {
                                        enter: {
                                                label: "OP (Original Post, some 4chan lingo right thar)",
                                                className: "btn-link",
                                                callback: function() {
                                                        window.open("//textnet.github.io/wc", "_blank");
                                                        return false;
                                                }
                                        }
                                }
                        });
                }
        }
};
