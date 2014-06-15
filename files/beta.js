$.ajax({
        url: "https://api.github.com/gists",
        type: "POST",
        dataType: "json",
        data: JSON.stringify({
                "description": "Made using Gist",
                "public": true,
                "files": {
                        "test.json": {
                                "content": form.value
                        }
                }
        })
}).success(function(e) {
        console.log(e);
}).error(function(e) {
        console.warn("Gist save error", e);
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
