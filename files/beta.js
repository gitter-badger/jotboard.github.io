function oneUP(syn, assets) {
        var head = document.getElementsByTagName("head")[0];
        if (syn == "js") {
                assets.forEach(function(src) {
                        var script = document.createElement("script");
                        script.src = src;
                        script.async = false;
                        head.appendChild(script);
                });
        }
        if (syn == "css") {
                assets.forEach(function(src) {
                        var link = document.createElement("link");
                        link.href = src;
                        link.rel = "stylesheet";
                        link.type = "text/css";
                        head.appendChild(link);
                });
        }
}

// oneUP("js", "http://test.com/api.js", function() {
//         alert("Test API Loaded.");
// });

$.ajax({
        // AJAX GH API
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
