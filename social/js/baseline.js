head.load(["js/depend/jquery.js"], function() {
  console.log("jQuery");
  head.load("js/depend/bootstrap.js", function() {
    console.log("Bootstrap JS");
    head.load("css/depend/bootstrap.css", function() {
      head.load("css/baseline.css", function() {
        console.log("Baseline CSS");
        $("iframe").attr({
          "frameborder": "0"
        }).attr("allowfullscreen");
        $.getJSON("//www.reddit.com/r/jotboard/new.json", function(data) {
          $.each(data.data.children, function(i, item) {
            if (!data.data.subreddit("jotboard")) {
              $("#reddit").append(
                '<div class="article">' +
                  '<a class="headline" href="' + item.data.url + '">' + item.data.title + '</a><br />' +
                  '<a class="thread" href="//www.reddit.com' + item.data.permalink + '">Realm Thread</a>' +
                '</div>'
              );
            }
          });
        });
      });
    });
  });
});