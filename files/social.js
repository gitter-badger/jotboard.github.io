// head.load("/files/social.js") to load Social API's with ease.

head.load("//connect.facebook.net/en_US/all.js", function() {
  $.ajaxSetup({
    cache: true
  });
  FB.init({
    appId: '196947013668110',
  });
});

head.load("//twitter.com/api.js", function() {
  // I'm sure this isn't the url for the Twitter API,
  // but its a placeholder for now so yeah.
  $.ajaxSetup({
    cache: true
  });
});