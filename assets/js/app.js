import axios from 'axios';
new WOW().init();
$(".find-one,.down").click(function() {
    $('html, body').animate({
        scrollTop: $("#intoduction").offset().top - 100
    }, 800);
});

$(window).on("load", function() {
    $('.box2,.box1,.box3').addClass('active-box')
});






VanillaTilt.init(document.querySelectorAll(".tilt"));

// document.getElementById("animate").onclick = function() {
//     tl.restart();
// }
// window.addEventListener('scroll', function(e) {
//     new WOW().init();
//     if ($(window).scrollTop() <= 50) {
//         $('.wow').removeClass('animated');
//     }
// });
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight() + 15,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });
menuItems.click(function(e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});
$(window).scroll(function() {
    var fromTop = $(this).scrollTop() + topMenuHeight;
    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
});