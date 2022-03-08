/*jslint browser : true */
/*global $, window*/
$(window).ready(function () {
    "use strict";
    var defaultNum1 = 0,
        defaultNum2 = 0,
        defaultNum3 = 0,
        zindexValue = 0,
        ///////////////////////
        defaultNum4 = 0;
    window.setInterval(function () {

        var random = Math.floor(Math.random() * 3);
        $(".img").removeClass("active");
        $(".img").eq(random).addClass("active");
    }, 2000);
    ///////////////////////////////////
    //layers;
    $(".place-section .place").on("click", function () {

        $(this).animate({
            left: "30%",
            marginTop: "20px"
        }, 400, function () {
            zindexValue = zindexValue - 1;
            $(this).css("z-index", zindexValue);

        }).animate({
            left: $(this).css("left"),
            marginTop: 0

        }, 400);
        (".about-stories .item .text .number").val();
    });

    ///////////



    function timer() {

        if (window.document.getElementById("span1").innerHTML >= $(".about-stories .item .text .number1").data('number')) {
            window.clearInterval(timer);
        } else {
            defaultNum1 = defaultNum1 + 1;

            window.document.getElementById("span1").innerHTML = defaultNum1;
        }

        if (window.document.getElementById("span2").innerHTML >= $(".about-stories .item .text .number2").data('number')) {
            window.clearInterval(timer);
        } else {
            defaultNum2 = defaultNum2 + 1;

            window.document.getElementById("span2").innerHTML = defaultNum2;
        }
        if (window.document.getElementById("span3").innerHTML >= $(".about-stories .item .text .number3").data('number')) {
            window.clearInterval(timer);
        } else {
            defaultNum3 = defaultNum3 + 1;
            window.document.getElementById("span3").innerHTML = defaultNum3;
        }

        if (window.document.getElementById("span4").innerHTML >= $(".about-stories .item .text .number4").data('number')) {
            window.clearInterval(timer);
        } else {
            defaultNum4 = defaultNum4 + 1;

            window.document.getElementById("span4").innerHTML = defaultNum4;
        }
    }
    window.setInterval(timer, 20);
    //click on scroll tot top 
    $(".scroll-to-top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({

            scrollTop: 0

        }, 1000);

    });
    $(window).scroll(function () {

        if ($(window).scrollTop() >= 1000) {
            $(".scroll-to-top").fadeIn(500);
        } else {
            $(".scroll-to-top").fadeOut(500);
        }

    });
});
//////////////////////////// loader
$(window).load(function () {
    "use strict";
    $(".load").fadeOut(2000, function () {
         $("body").css("overflow", "auto");
    });

});
