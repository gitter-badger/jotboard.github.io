window._idl = {};
var _IDL = true;
var pragma = {
  id: "5",
  title: "F***ING YOUNG/DEATHCAMP",
  href: "//jotboard.github.io/?v=SCcVrLcGD7k",
};
head_conf = {
  html5: true
};

var startUp = function() {
  if (window.location.protocol == "http:") window.location.protocol = "https:";
  if (window.location.protocol == "https:") {
    head.load(["js/depend/store.js", "js/depend/jquery.js"], function() {
      // Form is $("[main] #form");
      // Namespace is $("#namespace");
      var mop = function(_function, _1) {
        if (_function == 'hash') return window.location.href.indexOf("#" + _1) != -1;
        if (_function == 'prefix') return "JB_-";
      };
      // Realm
      $(".jb-btn .jb-home").on("click", function() {
        window.open("//www.reddit.com/r/jotboard/", "_blank");
      }).addClass("fa-important").addClass("fa-heart");
      $(".jb-btn .jb-new").on("click", function() {
        window.open("//www.reddit.com/r/jotboard/submit", "_blank");
      }).addClass("fa-important").addClass("fa-plus");
      // Data
      if (store.get(mop("prefix") + "Main")) $("[main] #form").val(store.get(mop("prefix") + "Main"));
      $(".jb-btn .jb-save").on("click", function() {
        if (!$('#namespace').val()) {
          store.set(mop("prefix") + "Main", $("[main] #form").val());
          console.info("Main > saved");
        } else {
          store.set(mop("prefix") + $("#namespace").val(), $("[main] #form").val());
          console.info($("#namespace").val() + " > saved");
        }
      }).addClass("fa-important").addClass("fa-cloud-upload");
      $(".jb-btn .jb-load").on("click", function() {
        if (!$("#namespace").val()) {
          $("[main] #form").val(store.get(mop("prefix") + "Main"));
          console.info("Main > loaded");
        } else {
          $("[main] #form").val(store.get(mop("prefix") + $("#namespace").val()));
          console.info($("#namespace").val() + " > loaded");
        }
      }).addClass("fa-important").addClass("fa-cloud-download");
    });
    head.load('js/depend/moment.js', function() {
      console.log('Moment.JS');
      $.getJSON('//www.reddit.com/r/jotboard/new.json', function(data) {
        if (!localStorage['pragma-' + pragma.id]) {
          $('.navigation').before(
            '<div class="pragma">' +
              '<a href="' + pragma.href + '">' + pragma.title + '</a>' +
            '</div>'
          );
          localStorage['pragma-' + pragma.id] = true;
        }
        $.each(data.data.children, function(i, item) {
          $("#community").append(
            '<div class="article">\n' +
              '<a class="title" href="' + item.data.url + '">' + item.data.title + '</a>\n' +
              '<br>\n' +
              '<a class="author" href="//www.reddit.com/user/' + item.data.author + '">' + item.data.author + '</a>\n' +
              '<a class="thread" href="//www.reddit.com' + item.data.permalink + '" class="thread">Comments</a>\n' +
              '<a class="points">' + item.data.score + '</a>\n' +
            '</div>'
          );
        });
        // Chunker: Video (YouTube)
        if (window.location.href.substr('0', '30') == 'https://jotboard.github.io/?v=') {
          $("#_").toggleClass("soft-remove").toggleClass("soft-no-remove");
          $(".navigation, [main]").remove();
          document.getElementById("_").setAttribute("src", "//www.youtube.com/embed/" + window.location.href.substr("30", "41") + "?fs=0&autohide=1&autoplay=1");
        }
        // Chunker: Playlist (YouTube)
        if (window.location.href.substr('0', '30') == 'https://jotboard.github.io/?p=') {
          $("#_").toggleClass("soft-remove").toggleClass("soft-no-remove");
          $(".navigation, [main]").remove();
          document.getElementById("_").setAttribute("src", "//www.youtube.com/embed/?list=" + window.location.href.substr("30") + "&listType=playlist&fs=0&autohide=1&autoplay=0");
        }
        // Chunker: Stream (Twitch)
        if (window.location.href.substr('0', '30') == 'https://jotboard.github.io/?s=') {
          $("#_").toggleClass("soft-remove").toggleClass("soft-no-remove");
          $(".navigation, [main]").remove();
          document.getElementById("_").setAttribute("src", "//www.twitch.tv/" + window.location.href.substr("30") + "/embed");
        }
        $('#community [href], .pragma a[href]').on('click', function(hrefEvent) {
          window.location.href = $(this).attr("href");
          hrefEvent.preventDefault();
        });
      });
      var TimePulse = function() {
        if (0 <= new Date().getHours() && new Date().getHours() < 12) {
          $("[main] #form").attr({
            "placeholder": moment(new Date()).format("[Hi, it's currently] dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, happy writing, scroll down to see posts.]")
          });
        } else {
          $("[main] #form").attr({
            "placeholder": moment(new Date()).format("[Hows it going? it's ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, bye-bye, scroll down to see posts.]")
          });
        }
      }; TimePulse();
      setInterval(TimePulse, 1000);
    });
    head.load("js/depend/prefixfree.js", function() {
      console.log("Prefixfree");
      head.load("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css", function() {
        console.log("Font Awesome");
      });
      $(function() {
        // IDL
        if (_IDL === true) head.load(('https:' == document.location.protocol ? 'https://' : 'http://') + 'members.internetdefenseleague.org/include/?url=' + _idl.url + '&campaign=' + _idl.campaign + '&variant=modal');
        // Mobile
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) $("#container").remove();
        else console.log("Not on mobile.");
        // Themes JS
        if (window.location.href.indexOf("#markiplier") != -1) {
          $("body").addClass("markiplier");
          console.info("HELLO EVERYBODY! My Name is *not* Markiplier and welcome to Jotboard: Markiplier Edition");
        } if (window.location.href.indexOf("#montageparodies") != -1) {
          $("body").addClass("montageparodies");
          console.info("Sup figit, preper to get hecked to deth by Jotboard: /r/MontageParodies Edition");
        } else {
          console.error("No theme activated.");
        }
      });
    });
  }
}; startUp();