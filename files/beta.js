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
        // Upcoming Universal function 
        if (tn == "Attr") {
                return this.each(function() {
                        if ($(this).attr(tn1) == tn2) $(this).attr(tn1, tn3);
                        else $(this).attr(tn1, tn2);
                });
        }
        if (tn == "HTML") {
                return this.each(function() {
                        if ($(this).html() == tn1) $(this).html(tn2);
                        else $(this).html(tn1);
                });
        }
};
