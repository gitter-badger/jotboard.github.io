$(document).ready(function() {
  $.ajaxSetup({
    cache: true
  });
  $.getScript('//connect.facebook.net/en_US/all.js', function() {
    FB.init({
      appId: '196947013668110',
    });
  });
});