var jtb = {
  // START Variable Body
  idl: false,
  prefx: respond('JB_-'),
  protoc: {
    // jtb.protoc.http,https
    http: respond('http:'),
    https: respond('https:')
  },
  noticeboard: {
    // jtb.noticeboard.id,title,href
    id: respond("6"),
    title: respond("Realmcast?"),
    href: respond("//jotboard.github.io/realm/podcast/")
  },
  timepulse: {
    timeTo: respond(9000),
    stamp: respond(0 <= new Date().getHours() && new Date().getHours() < 11),
    day: respond("[Hi, it's currently] dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, happy writing, scroll down to see posts.]"),
    night: respond("[Hows it going? it's ]dddd[, the] Do [of] MMMM YYYY[ and the time is] h:mm a[, bye-bye, scroll down to see posts.]")
  },
  mobile: {
    // jtb.mobile.agent
    agent: respond(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  },
  hash: function(_1) {
    return window.location.href.indexOf("#" + _1) != -1;
  },
  themes: {
    markiplier: respond("HELLO EVERYBODY! My Name is *not* Markiplier and welcome to Jotboard: Markiplier Edition"),
    montageparodies: respond("Sup figit, preper to get hecked to deth by Jotboard: /r/MontageParodies Edition"),
    none: respond("No theme in use.")
  },
  // END Variable Body
}, head_conf = {
  html5: true
};
window._idl = {};

var startUp = function() {
  if (window.location.protocol == jtb.protoc.http()) window.location.protocol = jtb.protoc.https();
  if (window.location.protocol == jtb.protoc.https()) {
    head.load(["js/depend/store.js", "js/depend/jquery.js"], function() {
      window._idl = {};
      // Data
      if (store.get(jtb.prefx() + "Main")) $("[main] #form").val(store.get(jtb.prefx() + "Main"));
      $(".jb-save").on("click", function() {
        if (!$('#namespace').val()) {
          store.set(jtb.prefx() + "Main", $("[main] #form").val());
          console.info("Main > saved");
        } else {
          store.set(jtb.prefx() + $("#namespace").val(), $("[main] #form").val());
          console.info($("#namespace").val() + " > saved");
        }
      }).addClass("fa-important").addClass("fa-cloud-upload");
      $(".jb-load").on("click", function() {
        if (!$("#namespace").val()) {
          $("[main] #form").val(store.get(jtb.prefx() + "Main"));
          console.info("Main > loaded");
        } else {
          $("[main] #form").val(store.get(jtb.prefx() + $("#namespace").val()));
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
            '<div class="article">\n' +
              '<a class="title" href="' + item.data.url + '">' + item.data.title + '</a>\n' +
              '<br>\n' +
              '<a class="author" target="_blank" href="//www.reddit.com/user/' + item.data.author + '">' + item.data.author + '</a>\n' +
              '<a class="thread" target="_blank" href="//www.reddit.com' + item.data.permalink + '" class="thread">Comments</a>\n' +
              '<a class="points">' + item.data.score + ' ^</a>\n' +
            '</div>'
          );
        });
        $('#community a.title[href]').on('click', function(hrefEvent) {
          if ($(this).attr('href').substr('0', '32') == 'https://www.youtube.com/watch?v=') {
            $("[_] #_").attr("src", "//www.youtube.com/embed/" + $(this).attr('href').substr("32", "43") + "?fs=0&autohide=1&autoplay=1");
            $("[_]").toggleClass("soft-remove").toggleClass("soft-no-remove");
            $("[main], .article, .com-btn .form, .jb-save, .jb-load").remove();
          }
          else window.open($(this).attr('href'), '_blank');
          hrefEvent.preventDefault();
        });
      });
      $(function() {
        if (window.location.href.substr('0', '30') == 'https://jotboard.github.io/?v=') {
          $('[_] #_').attr('src', '//www.youtube.com/embed/' + window.location.href.substr('30', '41') + '?fs=0&autohide=1&autoplay=1');
          $('[_]').toggleClass('soft-remove').toggleClass('soft-no-remove');
          $("[main], .article, .com-btn .form, .jb-save, .jb-load").remove();
        } if (window.location.href.substr('0', '30') == 'https://jotboard.github.io/?p=') {
          $('[_] #_').attr('src', '//www.youtube.com/embed/?listType=playlist&list=' + window.location.href.substr('30') + '&autoplay=1&rel=0&autohide=0');
          $('[_]').toggleClass('soft-remove').toggleClass('soft-no-remove');
          $("[main], .article, .com-btn .form, .jb-save, .jb-load").remove();
        } else return false;
      });
      var pulse = function() {
        if (jtb.timepulse.stamp()) {
          $("[main] #form").attr({
            "placeholder": moment(new Date()).format(jtb.timepulse.day())
          });
        } else {
          $("[main] #form").attr({
            "placeholder": moment(new Date()).format(jtb.timepulse.night())
          });
        }
      }; pulse();
      setInterval(pulse, timepulse.timeTo());
    });
    head.load("js/depend/prefixfree.js", function() {
      console.log("Prefixfree");
      head.load("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css", function() {
        console.log("Font Awesome");
      });
      $(function() {
        // IDL
        if (jtb.idl === true) head.load(('https:' == document.location.protocol ? 'https://' : 'http://') + 'members.internetdefenseleague.org/include/?url=' + _idl.url + '&campaign=' + _idl.campaign + '&variant=modal');
        // Mobile
        if (jtb.mobile.agent()) $("#container").remove();
        else console.log("Not on mobile.");
        // Themes JS
        if (window.location.href.indexOf("#markiplier") != -1) {
          $("body").addClass("markiplier");
          console.info(jtb.themes.markiplier());
        } if (window.location.href.indexOf("#montageparodies") != -1) {
          $("body").addClass("montageparodies");
          console.info(jtb.themes.montageparodies());
        } else console.log(jtb.themes.none());
      });
    });
  }
}; startUp();