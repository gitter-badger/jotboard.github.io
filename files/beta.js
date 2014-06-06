$.ajax({
        url: "https://api.github.com/gists",
        type: "POST",
        dataType: "json",
        data: JSON.stringify({
                "description": "Made using Gist",
                "public": true,
                "files": {
                        "test.json": {
                                "content": "" + form.value
                        }
                }
        })
}).success(function(e) {
        console.log(e);
}).error(function(e) {
        console.warn("Gist save error", e);
});

jQuery.fn.tn = function(tn, tn1, tn2, tn3) {
        if (tn == "toggleAttr") {
                return this.each(function() {
                        if ($(this).attr(tn1) == tn2) $(this).attr(tn1, tn3);
                        else $(this).attr(tn1, tn2);
                });
        }
        if (tn == "toggleHTML") {
                return this.each(function() {
                        if ($(this).html() == tn1) $(this).html(tn2);
                        else $(this).html(tn1);
                });
        }
        if (tn == "tnLoad") {
                return (function() {
                        tnLoad(tn1, tn2);
                });
        }
};

// $("a.object").click(function() {
//         $(this).tn("load", "//example.org/api.js", function() {
//                 console.log("It loaded.");
//         });
// });
