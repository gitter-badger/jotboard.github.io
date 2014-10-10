// head.load("/files/social.js") to load Social API's with ease.

head.load('//connect.facebook.net/es_US/sdk.js', function() {
  FB.init({
    appId: '196947013668110',
    version: 'v2.1',
    status: true,
    xfbml: true
  });
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // Logged in and authenticicated.
      var fbShare = function() {
        FB.api('/me/feed', 'post', {
          title: $('#namespace').val(),
          message: $('#form').val()
        }, function(response) {
          if (!response || response.error) {
            bootbox.dialog({
              title: "Jotboard",
              message: "Share failed!",
              buttons: {
                openShare: {
                  label: "Retry",
                  className: "btn-link",
                  callback: function() {
                    window[fbShare()];
                  }
                }
              }
            });
          }
          else {
            bootbox.dialog({
              title: "Jotboard",
              message: "Share successful!",
              buttons: {
                openShare: {
                  label: "See Post",
                  className: "btn-link",
                  callback: function() {
                    window.open("//www.facebook.com/home.php?id=" + response.id, "_blank");
                  }
                }
              }
            });
          }
        });
      };
    }
    else if (response.status === 'not_authorized') {
      // the user is logged in to Facebook,
      // but has not authenticated your app
    } else {
      // the user isn't logged in to Facebook.
    }
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
