$(document).ready(function () {

    $(".mobileMainMenu").hide();
    $(".mobileMenu").click(function() {
        $(".mobileMainMenu").slideToggle();
    });

    setTimeout(() => {
        $("#preLoader").remove();
    }, 2500);

    $("#sliderOne").owlCarousel({
        loop: true,
        animateIn: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            768: {
                items: 2,
                dots: true
            },
            992: {
                items: 3
            }
        }
    });

    $("#sliderTwo").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false,
        animateOut: 'fadeOut',
        dots: false,
        // margin: 10,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            768: {
                items: 2,
                dots: true
            },
            992: {
                items: 3
            }
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop()) {
            $(".header").addClass("blackScrollHeader");
            $(".goToTop").css({ "visibility": "visible", "opacity": "1" });
        }
        else {
            $(".header").removeClass("blackScrollHeader");
            $(".goToTop").css({ "visibility": "hidden", "opacity": "0" });
        }
    });

    $(".heroBG").ripples({
        dropRadius: 15,
        perturbance: 0.03,
        resolution: 400
    });

    $(".mobileMenu").click(function() {
        $(this).children().toggleClass("fa-xmark");
    });
    
});

let typed = new Typed("#autoType", {
    strings: ["John Doe"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

AOS.init({
    offset: 120,
    duration: 1500,
    once: false
});