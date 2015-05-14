// head.load("/js/social.js", function() {
//   Do some shit here I dunno.
// });

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

// !function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (!d.getElementById(id)) {
//     js = d.createElement(s);
//     js.id = id;
//     js.src = '//platform.twitter.com/widgets.js';
//     fjs.parentNode.insertBefore(js, fjs);
//   }
// }(document, 'script', 'twitter-wjs');