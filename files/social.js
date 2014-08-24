// head.load("/files/social.js") to load Social API's with ease.

head.load('//connect.facebook.net/en_US/all.js', function() {
  $.ajaxSetup({
    cache: true
  });
  FB.init({
    appId: '196947013668110',
  });
});

!function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = '//platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
  twttr.events.bind('tweet', function(event) {
    // Do something there
  });
}(document, 'script', 'twitter-wjs');