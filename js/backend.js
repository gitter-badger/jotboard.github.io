window._idl = {};
var _IDL = false, head_conf = {
  html5: true
};

var startUp = function() {
  if (window.location.protocol == "http:") window.location.protocol = "https:";
  if (window.location.protocol == "https:") {
    head.load(["js/store.js", "js/frame.js", "js/depend/jquery.js"], function() {
      // Form is $("#main.main #form");
      // Namespace is $("#namespace");
      if (store.get(jotboard("prefix") + "Main")) {
        $("#main.main #form").val(store.get(jotboard("prefix") + "Main"));
        console.info("The main board is avalible.");
      }
      if (_IDL === true) {
        head.load(('https:' == document.location.protocol ? 'https://' : 'http://') +
          'members.internetdefenseleague.org/include/?url=' + _idl.url + '&campaign=' +
          _idl.campaign + '&variant=modal');
      }
      $("jb-give .jb-save").on("click", function() {
        jotboard("data", "save");
      }).addClass("fa-important").addClass("fa-cloud-upload");
      $("jb-give .jb-load").on("click", function() {
        jotboard("data", "load");
      }).addClass("fa-important").addClass("fa-cloud-download");
    });
    head.load("js/depend/moment.js", function() {
      console.log("Moment.JS");
      $.getJSON("//www.reddit.com/r/jotboard/.json", function(data) {
        $.each(data.data.children, function(i, item) {
          $("#community").append(
            '<div class="article">' +
              '<a class="title" href="' + item.data.url + '">' + item.data.title + '</a></br>' +
              '<a class="author" href="//www.reddit.com/user/' + item.data.author + '">' + item.data.author + '</a>' +
              '<a class="thread" href="//www.reddit.com' + item.data.permalink + '" class="thread">Comments</a>' +
              '<a class="points">' + item.data.score + ' Point/s</a>' +
            '</div>'
          );
        });
      });
      var TimePulse = function() {
        if (jotboard("threshold", 0, 12)) {
          $("#main.main #form").attr({
            "placeholder": moment(new Date()).format("[Hello, it's currently] dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, happy writing!]")
          });
        } else {
          $("#main.main #form").attr({
            "placeholder": moment(new Date()).format("[Hows it going? it's ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, bye-bye!]")
          });
        }
      }; TimePulse();
      setInterval(TimePulse, 200);
    });
    head.load("js/depend/prefixfree.js", function() {
      console.log("Prefixfree");
      head.load("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css", function() {
        console.log("Font Awesome");
      });
      head.load(["js/depend/bootstrap.js", "css/depend/bootstrap.css"], function() {
        console.log("Bootstrap CSS");
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          $("body").addClass("mobile");
        } else console.log("Not on mobile.");
      });
    });
    head.load(["js/depend/growl.js"], function() {
      console.log("Jotboard Growl");
    });
  }
}; startUp();