~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 375 * 100 + "px";
}();
FastClick.attach(document.body);
var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener("canplay", function () {
        music.style.display = "block";
        music.className = "music move";
    }, false);
}, 1000);
music.addEventListener("click", function () {
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }
    musicAudio.pause();
    music.className = "music";
}, false);

new Swiper(".swiper-container", {
    loop: true,
    direction: "vertical",
    onSlidePrevEnd: changeEnd,
    onSlideNextEnd: changeEnd
});
function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;
    [].forEach.call(slideAry, function (slide, index) {
        if (n === index) {
            if (n == 0) {
                slide.id = "page5"
            } else if (n == 6) {
                slide.id = "page1"
            } else {
                slide.id = "page" + n;
            }
            return;
        }
        slide.id = null;
    });
}