head.load(['//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js'], function() {
  head.load([
    '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.1/css/bootstrap.min.css',
    '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.1/js/bootstrap.min.js'
  ], function() {
    head.load('//lazzerat.github.io/css/system.css', function() {
      console.log('System CSS');
      $('iframe#tumblr_controls').remove();
      $('iframe').attr('allowfullscreen', 'true');
      $('.pull-right').css('float', 'right');
      $('.pull-left').css('float', 'left');
      if (window.location.href == '//lazzerat.tumblr.com/submit') $('div.details').remove();
      head.load('//cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.3.0/bootbox.js', function() {
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
  ga('create', 'UA-37813397-4', 'auto');
  ga('send', 'pageview');
});