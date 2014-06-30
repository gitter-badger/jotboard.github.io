// Selectors
// Shrinking our need for adding the same sort of code.
var secure = window.location.protocol;
var hashline = function(u) { return window.location.href.indexOf("#" + u) != -1; };
var createThis = function(u) { return document.createElement(u); };
var w = jQuery(document.getElementsByTagName("body"));
var t = document.querySelectorAll(this);
var grabSelector = function(u) { return document.querySelector(u); };
var grabSelectorAll = function(u) { return document.querySelectorAll(u); };
Node.prototype.prependChild = function(el) {
        this.childNodes[1] && this.insertBefore(el, this.childNodes[1]) || this.appendChild(el);
};

// Universal Selector w.textnet
jQuery.fn.textnet = function(tn, tn1, tn2, tn3, tn4) {
        if (tn == "toggleAttr") {
                return this.each(function() {
                        if (t.attr(tn1) == tn2) t.attr(tn1, tn3);
                        else t.attr(tn1, tn2);
                });
        }
        if (tn == "toggleHTML") {
                return this.each(function() {
                        if (t.html() == tn1) t.html(tn2);
                        else t.html(tn1);
                });
        }
        if (tn == "change") {
                if (tn1 == "save") {
                        if (namespace.value.length === 0) {
                                store.set("_-Main", form.value);
                                console.info("Main > saved.");
                                $.bootstrapGrowl("Main > Saved", {
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
                                $.bootstrapGrowl(namespace.value + " > Saved", {
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
                                $.bootstrapGrowl("Main > Loaded", {
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
                                console.info(namespace.value + " > loaded.");
                                $.bootstrapGrowl(namespace.value + " > Loaded", {
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
                if (tn1 == "youtube") {
                        bootbox.prompt("YouTube Search", function(srch) {
                                if (srch === null) {
                                        bootbox.hideAll();
                                } else {
                                        window.open("https://www.youtube.com/results?utm_source=opensearch&search_query=" + srch, "_blank");
                                }
                        });
                }
                if (tn1 == "groupies") {
                        TogetherJS(this);
                        $.bootstrapGrowl("Don't give out personal information unless consent is given.", {
                                ele: "body",
                                type: "info",
                                offset: {
                                        from: "bottom",
                                        amount: 10
                                },
                                align: "left",
                                width: 100,
                                delay: 3600,
                                allow_dismiss: false,
                                stackup_spacing: 10
                        });
                        return false;
                }
        }
};
