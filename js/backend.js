var jtb = {
  // jtb.idl
  idl: false,
  // jtb.chunker
  chunker: false,
  noticeboard: {
    // jtb.noticeboard.id,title,href
    id: "6",
    title: "Realmcast?",
    href: "//jotboard.github.io/realm/podcast/"
  },
  // jtb.realm_request
  realm_request: function() {
    $("[realm]").empty();
    $.getJSON('//www.reddit.com/r/jotboard/new.json', function(data) {
      $.each(data.data.children, function(i, item) {
        $("[realm]").append(
          "<div class='article'>\n" +
            "<a class='title' load='" + item.data.url + "'>" + item.data.title + "</a>\n" +
            "<br>\n" +
            "<a class='points sub'>" + item.data.score + " ^</a>\n" +
            "<a class='author sub' href='https://www.reddit.com/u/" + item.data.author + "'>" + item.data.author + "</a>\n" +
            "<a class='thread sub' href='https://www.reddit.com" + item.data.permalink + "'>Comments</a>\n" +
          "</div>"
        );
      });
      $('[realm] .title[load]').click(function(event) {
        if ($(this).attr('load').substr('0', '32') === 'https://www.youtube.com/watch?v=') {
          if (jtb.chunker === false) {
            jtb.chunker = true;
            $("[_] #_").attr("src", "https://www.youtube.com/embed/" + $(this).attr('load').substr('32', '43') + "?fs=0&autohide=1&autoplay=1");
            $("[_], [main], .com-btn .form form, #namespace, .jb-save, .jb-load, .com-select").addClass("chunker");
          } if (jtb.chunker === true) {
            $("[_] #_").attr("src", "https://www.youtube.com/embed/" + $(this).attr('load').substr('32', '43') + "?fs=0&autohide=1&autoplay=1");
          }
        }
        if ($(this).attr('load').substr('0', '38') == 'https://www.youtube.com/playlist?list=') {
          if (jtb.chunker === false) {
            jtb.chunker = true;
            $("[_] #_").attr("src", "https://www.youtube.com/embed/?listType=playlist&list=" + $(this).attr('load').substr('38') + "&rel=0&showinfo=0");
            $("[_], [main], .com-btn .form form, #namespace, .jb-save, .jb-load, .com-select").addClass("chunker");
          } if (jtb.chunker === true) {
            $("[_] #_").attr("src", "https://www.youtube.com/embed/?listType=playlist&list=" + $(this).attr('load').substr('38') + "&rel=0&showinfo=0");
          }
        }
        if ($(this).attr('load').substr('0', '23') === 'https://www.reddit.com/') {
          window.open($(this).attr('load'), '_blank');
        }
        if ($(this).attr('load').substr('0', '22') === 'http://www.reddit.com/') {
          window.open($(this).attr('load'), '_blank');
        }
      });
    });
  }
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
      $(".jb-refresh").on("click", function() {
        jtb.realm_request();
      }).addClass("fa-important").addClass("fa-refresh");
      $(".jb-horn").on("click", function() {
        window.open("https://www.reddit.com/message/compose?to=/r/jotboard", "_blank");
      }).addClass("fa-important").addClass("fa-bullhorn");
    });
    head.load('js/depend/moment.js', function() {
      console.log('Moment.JS');
      if (!localStorage['pragma-' + jtb.noticeboard.id]) {
        $('[realm]').before(
          '<div class="pragma">' +
            '<a load="' + jtb.noticeboard.href + '">' + jtb.noticeboard.title + '</a>' +
          '</div>'
        );
        store.set('pragma-' + jtb.noticeboard.id, true);
      }
      $(function() {
        jtb.realm_request();
        if (window.location.href.substr('0', '30') === 'https://jotboard.github.io/?v=') {
          if (jtb.chunker === false) {
            jtb.chunker = true;
            $("[_] #_").attr("src", "https://www.youtube.com/embed/" + window.location.href.substr('30', '41') + "?fs=0&autohide=1&autoplay=1");
            $("[_], [main], .com-btn .form form, #namespace, .jb-save, .jb-load, .com-select").addClass("chunker");
          } if (jtb.chunker === true) {
            $("[_] #_").attr("src", "https://www.youtube.com/embed/" + window.location.href.substr('30', '41') + "?fs=0&autohide=1&autoplay=1");
          }
        }
        if (window.location.href.substr('0', '30') === 'https://jotboard.github.io/?p=') {
          if (jtb.chunker === false) {
            jtb.chunker = true;
            $("[_] #_").attr("src", "https://www.youtube.com/embed/?listType=playlist&list=" + window.location.href.substr('30') + "&rel=0&showinfo=0");
            $("[_], [main], .com-btn .form form, #namespace, .jb-save, .jb-load, .com-select").addClass("chunker");
          } if (jtb.chunker === true) {
            $("[_] #_").attr("src", "https://www.youtube.com/embed/?listType=playlist&list=" + window.location.href.substr('30') + "&rel=0&showinfo=0");
          }
          if (jtb.idl === true) {
            head.load(('https:' == document.location.protocol ? 'https://' : 'http://') + 'members.internetdefenseleague.org/include/?url=' + _idl.url + '&campaign=' + _idl.campaign + '&variant=modal');
          }
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
    });
  }
}; startUp();