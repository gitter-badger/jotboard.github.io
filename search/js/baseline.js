$("#search").keyup(function(e){
  var q = $("#search").val();
  var results = $("#results");
  $.getJSON("//jotboard.github.io/search/database.json/", {
    srsearch: q,
    action: "query",
    list: "search",
    format: "json"
  }, function(data) {
    results.empty().append("<p>Results for <b>" + q + "</b></p>");
    $.each(data.query.search, function(i, item) {
      results.append("<div><a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'>" + item.title + "</a><br>" + item.snippet + "<br><br></div>");
    });
  });
});