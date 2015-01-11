head.load(['//jotboard.github.io/js/jquery.js'], function() {
  head.load([
    '//jotboard.github.io/css/bootstrap.css',
    '//jotboard.github.io/js/bootstrap.js'
  ], function() {
    head.load('//jotboard.github.io/blog/css/base.css', function() {
      console.log('System CSS');
      $('iframe#tumblr_controls').remove();
      $('iframe').attr('allowfullscreen', 'true');
      $('.pull-right').css('float', 'right');
      $('.pull-left').css('float', 'left');
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
});