// head.load("/files/social.js") to load Social API's with ease.

head.load('//connect.facebook.net/es_US/sdk.js', function(response) {
  FB.init({
    appId: '196947013668110',
    version: 'v2.1',
    status: true,
    xfbml: true
  });
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') console.log('Welcome, ' + response.name);
    if (response.status === 'connected') console.log('Logged in.');
    else FB.login();
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
    return window.open('//twitter.com/intent/tweet?hashtags=Jotboard%2C&related=Jotboard,ChrisLowles&text=...&url=' + window.location.href, '_popup', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + 400 + ', height=' + hen + ', top=' + (screen.height / 2) - (hen / 2) + ', left=' + (screen.width / 2) - (wen / 2));
  }
}(document, 'script', 'twitter-wjs');
