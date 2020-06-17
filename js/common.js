$(document).ready(function() {

     $('.popup').magnificPopup({type:'image'});

    $('.popup_c').magnificPopup()

    $.stellar({responsive:true,
              horizontalOffset:60});

$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    responsive : {
        0 : {
            item : 1,
            nav : true
        }
    }
 });



    function wResize() {
        $("header").css("height", $(window).height());
    }



    wResize();
    $(window).resize(function () {
        wResize()
    });

    $(".top_phone .wrapper .tab").click(function () {
        $(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

      $(".bottom_phone .wrapper .tab").click(function () {
        $(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".tabs_header .wrapper .tab").click(function () {
        $(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

  $(".contacts_top .tab").click(function() {
        $(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");



});

