var jtb = {
  // jtb.idl
  idl: false,
  noticeboard: {
    // jtb.noticeboard.id,title,href
    id: "6",
    title: "Realmcast?",
    href: "//jotboard.github.io/realm/podcast/"
  }
  // END Variable Body
}, head_conf = {
  html5: true
};
window._idl = {};

var startUp = function() {
  if (window.location.protocol == "http:") window.location.protocol = "https:";
  if (window.location.protocol == "https:") {
    head.load(["js/depend/store.js", "js/depend/jquery.js"], function() {
      var prefix = "JB_-";
      // Data
      if (store.get(prefix + "Main")) $("[main] #form").val(store.get(prefix + "Main"));
      $(".jb-save").on("click", function() {
        if (!$('#namespace').val()) {
          store.set(prefix + "Main", $("[main] #form").val());
          console.info("Main > saved");
        } else {
          store.set(prefix + $("#namespace").val(), $("[main] #form").val());
          console.info($("#namespace").val() + " > saved");
        }
      }).addClass("fa-important").addClass("fa-cloud-upload");
      $(".jb-load").on("click", function() {
        if (!$("#namespace").val()) {
          $("[main] #form").val(store.get(prefix + "Main"));
          console.info("Main > loaded");
        } else {
          $("[main] #form").val(store.get(prefix + $("#namespace").val()));
          console.info($("#namespace").val() + " > loaded");
        }
      }).addClass("fa-important").addClass("fa-cloud-download");
      // Buttons
      $(".jb-new-text").on("click", function() {
        window.open("//www.reddit.com/r/jotboard/submit?selftext=true", "_blank");
      }).addClass("fa-important").addClass("fa-file-text-o");
      $(".jb-new-link").on("click", function() {
        window.open("//www.reddit.com/r/jotboard/submit", "_blank");
      }).addClass("fa-important").addClass("fa-link");
      $(".jb-realm").on("click", function() {
        window.open("//www.reddit.com/r/jotboard/", "_blank");
      }).addClass("fa-important").addClass("fa-heart");
      $(".jb-reset").on("click", function() {
        window.open("/", "_top");
      }).addClass("fa-important").addClass("fa-refresh");
    });
    head.load('js/depend/moment.js', function() {
      console.log('Moment.JS');
      $.getJSON('//www.reddit.com/r/jotboard/new.json', function(data) {
        if (!localStorage['pragma-' + jtb.noticeboard.id]) {
          $('#community').before(
            '<div class="pragma">' +
              '<a href="' + jtb.noticeboard.href + '">' + jtb.noticeboard.title + '</a>' +
            '</div>'
          );
          store.set('pragma-' + jtb.noticeboard.id, true);
        }
        $.each(data.data.children, function(i, item) {
          $("#community").append(
            "<div class='article'>\n" +
              "<a class='title' onclick='realmOpen(&quot;" + item.data.url + "&quot;)'>" + item.data.title + "</a>\n" +
              "<br>\n" +
              "<a class='author' onclick='realmOpen(&quot;" + "https://www.reddit.com/u/" + item.data.author + "&quot;)'>" + item.data.author + "</a>\n" +
              "<a class='thread' onclick='realmOpen(&quot;" + item.data.permalink + "&quot;)'>Comments</a>\n" +
              "<a class='points'>" + item.data.score + " ^</a>\n" +
            "</div>"
          );
        });
        var realmOpen = function(_1) {
          if (_1.substr('0', '32') == 'https://www.youtube.com/watch?v=') {
            $("[_] #_").attr("src", "//www.youtube.com/embed/" + $(this).attr('href').substr('32', '43') + "?fs=0&autohide=1&autoplay=1");
            $("[_]").toggleClass("soft-remove").toggleClass("soft-no-remove");
            $("[main], .article, .com-btn .form, .jb-save, .jb-load").remove();
          }
          if (_1.substr('0', '30') == 'https://jotboard.github.io/?v=') {
            $("[_] #_").attr("src", "//www.youtube.com/embed/" + $(this).attr('href').substr('30', '41') + "?fs=0&autohide=1&autoplay=1");
            $("[_]").toggleClass("soft-remove").toggleClass("soft-no-remove");
            $("[main], .article, .com-btn .form, .jb-save, .jb-load").remove();
          }
          else window.open($(this).attr('href'), '_blank');
        };
        // $('#community a.title[onclick*=]').on('click', function(hrefEvent) {
        //   if ($(this).attr('href').substr('0', '32') == 'https://www.youtube.com/watch?v=') {
        //     $("[_] #_").attr("src", "//www.youtube.com/embed/" + $(this).attr('href').substr('32', '43') + "?fs=0&autohide=1&autoplay=1");
        //     $("[_]").toggleClass("soft-remove").toggleClass("soft-no-remove");
        //     $("[main], .article, .com-btn .form, .jb-save, .jb-load").remove();
        //   }
        //   if ($(this).attr('href').substr('0', '30') == 'https://jotboard.github.io/?v=') {
        //     $("[_] #_").attr("src", "//www.youtube.com/embed/" + $(this).attr('href').substr('30', '41') + "?fs=0&autohide=1&autoplay=1");
        //     $("[_]").toggleClass("soft-remove").toggleClass("soft-no-remove");
        //     $("[main], .article, .com-btn .form, .jb-save, .jb-load").remove();
        //   }
        //   else window.open($(this).attr('href'), '_blank');
        //   hrefEvent.preventDefault();
        // });
      });
      $(function() {
        if (window.location.href.substr('0', '30') == 'https://jotboard.github.io/?v=') {
          $('[_] #_').attr('src', '//www.youtube.com/embed/' + window.location.href.substr('30', '41') + '?fs=0&autohide=1&autoplay=1');
          $('[_]').toggleClass('soft-remove').toggleClass('soft-no-remove');
          $("[main], .article, .com-btn .form, .jb-save, .jb-load").remove();
        }
      });
      var pulse = function() {
        if (0 <= new Date().getHours() && new Date().getHours() < 11) {
          $("[main] #form").attr({
            "placeholder": moment(new Date()).format("[Hi, it's currently] dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, happy writing, scroll down to see posts.]")
          });
        } else {
          $("[main] #form").attr({
            "placeholder": moment(new Date()).format("[Hows it going? it's ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, bye-bye, scroll down to see posts.]")
          });
        }
      }; pulse();
      setInterval(pulse, 9000);
    });
    head.load("js/depend/prefixfree.js", function() {
      console.log("Prefixfree");
      head.load("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css", function() {
        console.log("Font Awesome");
        head.load("css/depend/font-draft.css", function() {
          console.log("Font Draft");
        });
      });
      $(function() {
        $(function() {
          // Mobile
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $("#container").remove();
          } else console.log("Not on mobile.");
        });
        // Themes JS
        if (window.location.href.indexOf("#markiplier") != -1) {
          $("body").addClass("markiplier");
          console.info("HELLO EVERYBODY! My Name is *not* Markiplier and welcome to Jotboard: Markiplier Edition");
        } if (window.location.href.indexOf("#montageparodies") != -1) {
          $("body").addClass("montageparodies");
          console.info("Sup figit, preper to get hecked to deth by Jotboard: /r/MontageParodies Edition");
        } else console.log("No themes being used.");
        // IDL
        if (jtb.idl !== true) {
          head.load(('https:' == document.location.protocol ? 'https://' : 'http://') +
          'members.internetdefenseleague.org/include/?url=' + _idl.url +
          '&campaign=' + _idl.campaign + '&variant=modal');
        }
      });
    });
  }
}; startUp();