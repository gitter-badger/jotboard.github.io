window._idl = {};
var _IDL = false;
var pragma = {
  id: "6",
  title: "Realmcast?",
  href: "//jotboard.github.io/realm/podcast/",
};
head_conf = {
  html5: true
};

var startUp = function() {
  if (window.location.protocol == "http:") window.location.protocol = "https:";
  if (window.location.protocol == "https:") {
    head.load(["js/depend/store.js", "js/depend/jquery.js"], function() {
      // MOP
      var mop = function(_function, _1) {
        if (_function == 'hash') return window.location.href.indexOf("#" + _1) != -1;
        if (_function == 'prefix') return "JB_-";
      };
      // Realm
      $(".jb-btn .jb-home").on("click", function() {
        ga("send", "event", "Nav Button", "Home");
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
          $('[nav]').before(
            '<div class="pragma">' +
              '<a href="' + pragma.href + '">' + pragma.title + '</a>' +
            '</div>'
          );
          store.set('pragma-' + pragma.id, true);
        }
        $.each(data.data.children, function(i, item) {
          $("#community").append(
            '<div class="article">\n' +
              '<a class="title" href="' + item.data.url + '">' + item.data.title + '</a>\n' +
              '<br>\n' +
              '<a class="author" href="//www.reddit.com/user/' + item.data.author + '">' + item.data.author + '</a>\n' +
              '<a class="thread" href="//www.reddit.com' + item.data.permalink + '" class="thread">Comments</a>\n' +
              '<a class="points">' + item.data.score + '^</a>\n' +
            '</div>'
          );
        });
        $('#community a[href]').on('click', function(hrefEvent) {
          // Video (Pure YouTube)
          if ($(this).attr('href').substr('0', '31') == 'http://www.youtube.com/watch?v=') window.open('https://jotboard.github.io/?v=' + $(this).attr('href').substr('31', '42'), '_top');
          if ($(this).attr('href').substr('0', '32') == 'https://www.youtube.com/watch?v=') window.open('https://jotboard.github.io/?v=' + $(this).attr('href').substr('32', '43'), '_top');
          // Playlist (Pure YouTube)
          if ($(this).attr('href').substr('0', '37') == 'http://www.youtube.com/playlist?list=') window.open($(this).attr('href').substr('37'), '_blank');
          if ($(this).attr('href').substr('0', '38') == 'https://www.youtube.com/playlist?list=') window.open($(this).attr('href').substr('38'), '_blank');
          // Video (Chunker)
          if ($(this).attr('href').substr('0', '30') == 'http://jotboard.github.io/?v=') window.open($(this).attr('href').substr('30'), '_top');
          if ($(this).attr('href').substr('0', '31') == 'https://jotboard.github.io/?v=') window.open($(this).attr('href').substr('31'), '_top');
          // Playlist (Chunker)
          if ($(this).attr('href').substr('0', '30') == 'http://jotboard.github.io/?p=') window.open($(this).attr('href').substr('30'), '_top');
          if ($(this).attr('href').substr('0', '31') == 'https://jotboard.github.io/?p=') window.open($(this).attr('href').substr('31'), '_top');
          // Prevent average activity from href tag.
          hrefEvent.preventDefault();
        });
      });
      /* Chunker */
      var chunker = function() {
        if (_1 == "v") {
          if (window.location.href == 'https://jotboard.github.io/?v=') return false;
          $("[nav], [main], [_]").toggleClass("soft-remove").toggleClass("soft-no-remove");
          $("[_] #_").attr("src", "//www.youtube.com/embed/" + window.location.href.substr("30", "41") + "?fs=0&autohide=1&autoplay=1");
        } if (_1 == "p") {
          if (window.location.href == 'https://jotboard.github.io/?p=') return false;
          $("[nav], [main], [_]").toggleClass("soft-remove").toggleClass("soft-no-remove");
          $("[_] #_").attr("src", "//www.youtube.com/embed/?list=" + window.location.href.substr("30") + "&listType=playlist&fs=0&autohide=1&autoplay=0");
        } if (_1 == "u") {
          if (window.location.href == 'https://jotboard.github.io/?u=') return false;
          $("[nav], [main], [_]").toggleClass("soft-remove").toggleClass("soft-no-remove");
          $("[_] #_").attr("src", "//www.youtube.com/embed/?listType=user_uploads&list=" + window.location.href.substr("30") + "/popout/");
        }
      };
      // Chunker: Video (YouTube)
      if (window.location.href.substr('0', '30') == 'https://jotboard.github.io/?v=') chunker('v');
      // Chunker: Playlist (YouTube)
      if (window.location.href.substr('0', '30') == 'https://jotboard.github.io/?p=') chunker('p');
      // Chunker: Channel (YouTube)
      if (window.location.href.substr('0', '30') == 'https://jotboard.github.io/?u=') chunker('u');
      /* Chunker */
      var TimePulse = function() {
        if (0 <= new Date().getHours() && new Date().getHours() < 11) {
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
          console.log("No theme in use.");
        }
      });
    });
  }
}; startUp();