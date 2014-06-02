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
