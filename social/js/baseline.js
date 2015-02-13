head.load([
    "js/depend/jquery.js",
    "js/baseline.js",
    "js/depend/bootstrap.js"
  ], function() {
  console.log("jQuery, Baseline JS");
  head.load([
    "css/baseline.css",
    "css/depend/bootstrap.css"
  ], function() {
    console.log("Baseline CSS");
  });
  if (window.location.href.indexOf("#push") != -1) {
    window.replace("//www.reddit.com/r/jotboard/");
  }
  $.getJSON("//www.reddit.com/r/pics/new.json", function(data) {
    $.each(data.data.children, function(i, item) {
      $("<img/>").attr({
        "class": "image",
        "src": item.data.url
      }).appendTo("#images");
    });
  });
  $.getJSON("//www.reddit.com/r/jotboard/new.json", function(data) {
    $.each(data.data.children, function(i, item) {
      $("#reddit").append('<div class="article">' +
        '<a class="headline" href="' + item.data.url + '">' + item.data.title + '</a><br />' +
        '<a class="thread" href="//www.reddit.com' + item.data.permalink + '">Realm Thread</a>' +
      '</div>');
    });
  });
});