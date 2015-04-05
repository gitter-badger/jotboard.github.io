window._idl = {};
var _IDL = false;
head_conf = {
  html5: true
};

var startUp = function() {
  if (window.location.protocol == "http:") window.location.protocol = "https:";
  if (window.location.protocol == "https:") {
    head.load(["js/depend/store.js", "js/depend/jquery.js"], function() {
      // Form is $("#main.main #form");
      // Namespace is $("#namespace");
      $(function() {
        // Chunker: Video
        if (window.location.hash.substr('0', '3') == '#v:') {
          $('#_').toggleClass('soft-remove').toggleClass('soft-no-remove');
          document.getElementById('_').setAttribute('src', '//www.youtube.com/embed/' + window.location.hash.substr('4', '11') + '?fs=0&autohide=1');
        }
        // Chunker: Playlist
        if (window.location.hash.substr('0', '3') == '#p:') {
          $('#_').toggleClass('soft-remove').toggleClass('soft-no-remove');
          document.getElementById('_').setAttribute('src', '//www.youtube.com/embed/?list=' + window.location.hash.substr('4') + '&listType=playlist&fs=0&autohide=1');
        }
      });
      var mop = function(_function, _1) {
        if (_function == "hash") /* #Mods */ return window.location.href.indexOf("#" + _1) != -1;
        if (_function == "prefix") return "JB_-";
      };
      if (store.get(mop("prefix") + "Main")) {
        $("#main.main #form").val(store.get(mop("prefix") + "Main"));
        console.info("The main board is avalible.");
      } if (_IDL === true) {
        head.load(('https:' == document.location.protocol ? 'https://' : 'http://') + 'members.internetdefenseleague.org/include/?url=' + _idl.url + '&campaign=' + _idl.campaign + '&variant=modal');
      }
      $(".jb-give .jb-realm").on("click", function() {
        window.open("/r/realm.html/", "_blank");
      }).addClass("fa-important").addClass("fa-heart");
      $(".jb-give .jb-save").on("click", function() {
        if ($('#namespace').val('')) {
          store.set(mop("prefix") + "Main", $("#main.main #form").val());
          console.info("Main > saved");
          toastr['info']("The main board has been saved.");
        } else {
          store.set(mop("prefix") + $("#namespace").val(), $("#main.main #form").val());
          console.info($("#namespace").val() + " > saved");
          toastr['info']($("#namespace").val() + " has been saved.");
        }
      }).addClass("fa-important").addClass("fa-cloud-upload");
      $(".jb-give .jb-load").on("click", function() {
        if (!$("#namespace").val()) {
          $("#main.main #form").val(store.get(mop("prefix") + "Main"));
          console.info("Main > loaded");
          toastr['info']("The main board has been loaded.");
        } else {
          $("#main.main #form").val(store.get(mop("prefix") + $("#namespace").val()));
          console.info($("#namespace").val() + " > loaded");
          toastr['info']($("#namespace").val() + " has been loaded.");
        }
      }).addClass("fa-important").addClass("fa-cloud-download");
    });
    head.load("js/depend/moment.js", function() {
      console.log("Moment.JS");
      $.getJSON("//www.reddit.com/r/jotboard/new.json", function(data) {
        $.each(data.data.children, function(i, item) {
          $("#community").append(
            '<div class="article">\n' +
              '<a class="title" href="' + item.data.url + '">' + item.data.title + '</a>\n' +
              '<br>\n' +
              '<a class="author" href="//www.reddit.com/user/' + item.data.author + '">' + item.data.author + '</a>\n' +
              '<a class="thread" href="//www.reddit.com' + item.data.permalink + '" class="thread">Comments</a>\n' +
              '<a class="points">' + item.data.score + ' Point/s</a>\n' +
            '</div>'
          );
        });
      });
      var TimePulse = function() {
        if (0 <= new Date().getHours() && new Date().getHours() < 12) {
          $("#main.main #form").attr({
            "placeholder": moment(new Date()).format("[Hello, it's currently] dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, happy writing, scroll down further to see posts.]")
          });
        } else {
          $("#main.main #form").attr({
            "placeholder": moment(new Date()).format("[Hows it going? it's ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, bye-bye, scroll down further to see posts.]")
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
      head.load(["css/depend/toastr.css", "js/depend/toastr.js"], function() {
        console.log("Toastr CSS and JS");
        toastr.options = {
          "closeButton": false,
          "debug": false,
          "newestOnTop": false,
          "progressBar": true,
          "positionClass": "toast-bottom-left",
          "preventDuplicates": false,
          "onclick": null,
          "showDuration": "350",
          "hideDuration": "630",
          "timeOut": "2500",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "swing",
          "showMethod": "linear",
          "hideMethod": "linear"
        };
      });
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) $('#container').remove();
      else console.log("Not on mobile.");
      $(function() {
        /* Themes JS */
        if (window.location.href.indexOf("#markiplier") != -1) {
          $("body").addClass("markiplier");
          console.info("HELLO EVERYBODY! My Name is *not* Markiplier and welcome to Jotboard: Markiplier Edition");
        } if (window.location.href.indexOf("#montageparodies") != -1) {
          $("body").addClass("montageparodies");
          console.info("Sup figit, preper to get hecked to deth by Jotboard: /r/MontageParodies Edition");
        } else {
          console.error("No theme activated.");
        }
        /* Themes JS */
      });
    });
  }
}; startUp();