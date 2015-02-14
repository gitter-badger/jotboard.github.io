head.load(["js/depend/bootstrap.js", "js/depend/jquery.js"], function() {
  console.log("jQuery, Baseline JS");
  head.load(["css/depend/bootstrap.css", "css/baseline.css"], function() {
    console.log("Baseline CSS");
  });
  $("iframe").attr({
    "frameborder": "0"
  }).attr("allowfullscreen");
  if (window.location.href.indexOf("#push") != -1) window.replace("//www.reddit.com/r/jotboard/");
  $.getJSON("//www.reddit.com/r/jotboard/new.json", function(data) {
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