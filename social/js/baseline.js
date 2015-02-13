head.load(["js/depend/jquery.js", "js/depend/bootstrap.js"], function() {
  console.log("jQuery, Baseline JS");
  head.load(["css/baseline.css", "css/depend/bootstrap.css"], function() {
    console.log("Baseline CSS");
  });
  $("iframe").attr({
    "frameborder": "0"
  }).attr("allowfullscreen");
  if (window.location.href.indexOf("#push") != -1) window.replace("//www.reddit.com/r/jotboard/");
  var gut = $("#reddit").append();
  $.getJSON("//www.reddit.com/r/jotboard/new.json", function(data) {
    $.each(data.data.children, function(i, item) {
      gut(
        '<div class="article">' +
          '<a class="headline" href="' + item.data.url + '">' + item.data.title + '</a><br />' +
          '<a class="thread" href="//www.reddit.com' + item.data.permalink + '">Realm Thread</a>' +
        '</div>'
      );
    });
  });
});