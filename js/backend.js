window._idl = {}, _IDL = true, head_conf = {
  html5: true
};

var startUp = function() {
  if (window.location.protocol == "http:") window.location.protocol = "https:";
  if (window.location.protocol == "https:") {
    head.load(["js/depend/store.js", "js/depend/jquery.js"], function() {
      // Form is $("#main.main #form");
      // Namespace is $("#namespace");
      var mop = function(mop, _1) {
        if (mop == "hash") /* #Mods */ return window.location.href.indexOf("#" + _1) != -1;
        if (mop == "prefix") return "JB_-";
      };
      if (store.get(mop("prefix") + "Main")) {
        $("#main.main #form").val(store.get(mop("prefix") + "Main"));
        console.info("The main board is avalible.");
      }
      if (_IDL === true) {
        head.load(('https:' == document.location.protocol ? 'https://' : 'http://')
        + 'members.internetdefenseleague.org/include/?url=' + _idl.url + '&campaign=' + _idl.campaign
        + '&variant=modal');
      }
      $(".jb-give .jb-save").on("click", function() {
        if (!$("#namespace").val()) {
          store.set(mop("prefix") + "Main", $("#main.main #form").val());
          console.info("Main > saved");
          toastr['success']("The main board has been saved.");
        } else {
          store.set(mop("prefix") + $("#namespace").val(), $("#main.main #form").val());
          console.info($("#namespace").val() + " > saved");
          toastr['success']($("#namespace").val() + " has been saved.");
        }
      }).addClass("fa-important").addClass("fa-cloud-upload");
      $(".jb-give .jb-load").on("click", function() {
        if (!$("#namespace").val()) {
          $("#main.main #form").val(store.get(mop("prefix") + "Main"));
          console.info("Main > loaded");
          toastr['success']("The main board has been loaded.");
        } else {
          $("#main.main #form").val(store.get(mop("prefix") + $("#namespace").val()));
          console.info($("#namespace").val() + " > loaded");
          toastr['success']($("#namespace").val() + " has been loaded.");
        }
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
        if (0 <= new Date().getHours() && new Date().getHours() < 12) {
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
      head.load(["css/depend/toastr.css", "js/depend/toastr.js"], function() {
        console.log("Toastr CSS and JS");
        toastr.options = {
          "closeButton": true,
          "debug": false,
          "newestOnTop": true,
          "progressBar": true,
          "positionClass": "toast-bottom-center",
          "preventDuplicates": false,
          "onclick": null,
          "showDuration": "200",
          "hideDuration": "500",
          "timeOut": "2500",
          "extendedTimeOut": "700",
          "showEasing": "swing",
          "hideEasing": "swing",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        }
      });
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("body").addClass("mobile");
      } else console.log("Not on mobile.");
    });
  }
}; startUp();