$("#menu-btn").click(function() {
        $(this).toggleText("More", "Less");
        $(this).toggleAttr("title", "Open Menu", "Close Menu");
        classToggle("#submenu", "block");
});

function feature() {
        bootbox.dialog({
                title: "Textnet Featurettes, a special unlisted selection for Textnet masters.",
                message: "<iframe class='yt-frame' src='https://www.youtube.com/embed/?listType=playlist&list=PLXJjNJMpJQKqbpmhNOJNETiMbfZpLjIVb&loop=1&rel=0&autohide=1&theme=light'></iframe>"
        });
        console.log("Wow you found me.");
}

function spotify() {
        player("spotify:user:1249813849:playlist:7gMrshUGhhYAKThn2RT8eQ");
        console.info("System.JS: Main player loaded.");
}

function mjxscape() {
        player("spotify:album:7pomP86PUhoJpY3fsC0WDQ");
        console.log("System.JS: I miss you.");
}

function newUpdate() {
        bootbox.dialog({
                title: "Update Notes:",
                message: "The new update features the new navagation made from the ground-up."
        });
}

function player(uri) {
        $(".tn-radio-frame").append("<div><iframe class='tn-radio' src='https://embed.spotify.com/?uri=" + uri + "'></iframe></div>");
        console.info("System.JS: Player function executed.");
}

function notify(l4, l4_1) {
        new Notify(l4, {
                body: l4_1,
                icon: "http://static4.wikia.nocookie.net/humble/images/1/18/TextnetFBPhoto.png"
        }).show();
}

function gamingcenter() { hashIt("gamingcenter"); }
function youtube() { hashIt("youtube"); }
function NetNeut() { hashIt("NetNeut"); }
function autosave() { hashIt("autosave"); }
function defence() { hashIt("defence"); }
function selectTextnet() { hashIt("selectTextnet"); }

function time() { console.info(moment(new Date()).format("h:mm A")); }
function day() { console.info(moment(new Date()).format("dddd")); }
function year() { console.info(moment(new Date()).format("YYYY")); }
function month() { console.info(moment(new Date()).format("MMMM")); }
function utc() { console.info(moment(new Date()).format()); }
