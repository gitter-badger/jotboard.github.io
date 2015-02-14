if (window.location.href.indexOf("#push") != -1) window.replace("//www.reddit.com/r/jotboard/");

head.load(["js/depend/jquery.js"], function() {
  console.log("jQuery");
  head.load("js/depend/bootstrap.js", function() {
    console.log("Bootstrap JS");
    head.load("css/depend/bootstrap.css", function() {
      head.load("css/baseline.css", function() {
        console.log("Baseline CSS");
        $.getJSON("//www.reddit.com/r/jotboard/new.json", function(data) {
          $("iframe").attr({
            "frameborder": "0"
          }).attr("allowfullscreen");
          $.each(data.data.children, function(i, item) {
            $("#reddit").append(
              '<div class="article">' +
                '<a class="headline" href="' + item.data.url + '">' + item.data.title + '</a><br />' +
                '<a class="thread" href="//www.reddit.com' + item.data.permalink + '">Realm Thread</a>' +
              '</div>'
            );
          });
        });
      });
    });
  });
});