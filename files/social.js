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
  function twitter() {
    var wen = 400; var hen = 340;
    return window.open('//twitter.com/intent/tweet?hashtags=TextnetIsGoofy%2C&related=TextnetIsGoofy,SociaoEnt&text=...&url=https://textnet.github.io/', '_popup', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + 400 + ', height=' + hen + ', top=' + (screen.height / 2) - (hen / 2) + ', left=' + (screen.width / 2) - (wen / 2));
  }
}(document, 'script', 'twitter-wjs');