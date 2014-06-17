var scripts;
var stylesheets;

scripts = ["1.js", "2.js"];
stylesheets = ["1.css", "2.css"];

scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
});

stylesheets.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
});

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
