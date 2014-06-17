$.ajax({
        url: "https://api.github.com/gists",
        type: "POST",
        dataType: "json",
        data: JSON.stringify({
                "description": "Made with Textnet, saved onto Github Gists.",
                "public": true,
                "files": {
                        "tnFile.txt": {
                                "content": form.value
                        }
                }
        })
}).success(function(e) {
        console.info("Gist Save Success", "Tree: " + e);
}).error(function(e) {
        console.error("Gist Save Error", "Tree: " + e);
});

var scripts;
scripts = ["1.js", "2.js"];

scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
});

var elementMake1 = document.createElement("div");
var elementClass = elementMake1.className("inner-data");

var cogs = {
        items: ['item 1', 'item 2', 'item 3']
};

$(document).load(function() {
        $(cogs).each(function(index, item) {
                $("<div>").appendTo("body").append($(elementMake1).text(item));
        });
});
