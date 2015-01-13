head.load(['//jotboard.github.io/js/jquery.js'], function() {
  head.load([
    '//jotboard.github.io/css/bootstrap.css',
    '//jotboard.github.io/js/bootstrap.js'
  ], function() {
    head.load('//jotboard.github.io/blog/css/base.css', function() {
      console.log('System CSS');
      $('.pull-right').css('float', 'right');
      $('.pull-left').css('float', 'left');
      $('iframe').attr({
        'allowfullscreen': 'true',
        'frameborder': '0'
      });
      if (window.location.href == '//jotboard.tumblr.com/submit') $('div.details').remove();
      head.load('//jotboard.github.io/js/bootbox.js', function() {
        console.log('Bootbox');
      });
    });
  });
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=196947013668110&version=v2.1';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-37813397-6', 'auto');
  ga('require', 'linkid', 'linkid.js');
  ga('send', 'pageview');
  head.load("//jotboard.github.io/js/news.js", function() {
    console.log("News");
    // Headline #1
    $('#news .one').html(
      "<div class='news panel'>" +
        "<div class='panel-heading'>" +
          "<h4 class='panel-title'>" +
            "<a href='" + news.one.href + "'>" + news.one.title + "</a>" +
          "</h4>" +
        "</div>" +
        "<div class='panel-body'>" + news.one.body + "</div>" +
      "</div>");
    // Headline #2
    $('#news .two').html(
      "<div class='news panel'>" +
        "<div class='panel-heading'>" +
          "<h4 class='panel-title'>" +
            "<a href='" + news.two.href + "'>" + news.two.title + "</a>" +
          "</h4>" +
        "</div>" +
        "<div class='panel-body'>" + news.two.body + "</div>" +
      "</div>");
    // Headline #3
    $('#news .three').html(
      "<div class='news panel'>" +
        "<div class='panel-heading'>" +
          "<h4 class='panel-title'>" +
            "<a href='" + news.three.href + "'>" + news.three.title + "</a>" +
          "</h4>" +
        "</div>" +
        "<div class='panel-body'>" + news.three.body + "</div>" +
      "</div>");
    // Statements to kill headlines if they are empty.
    if (news.one.title == "") $("#news div.one div.news div.panel-heading").remove();
    if (news.one.body == "") $("#news div.one div.news div.panel-body").remove();
    if (news.one.title == "" && news.one.body == "") $("#news div.one").remove();
    if (news.two.title == "") $("#news div.two div.news div.panel-heading").remove();
    if (news.two.body == "") $("#news div.two div.news div.panel-body").remove();
    if (news.two.title == "" && news.two.body == "") $("#news div.two").remove();
    if (news.three.title == "") $("#news div.three div.news div.panel-heading").remove();
    if (news.three.body == "") $("#news div.three div.news div.panel-body").remove();
    if (news.three.title == "" && news.three.body == "") $("#news div.three").remove();
    if (news.one.title == "" && news.one.href == "" && news.one.body == "" && news.two.title == "" && news.two.href == "" && news.two.body == "" && news.three.title == "" && news.three.href == "" && news.three.body == "") {
      $("#news").remove();
    }
  });
});