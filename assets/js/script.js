$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-content').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.menu-content').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-content').removeClass('transition-menu');
        }
    });
    $('.menu-content-href a').on('click', function () {
        $('.menu-content').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.menu-content').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});


$('.open-search').on('click', function () {
    $('.head-search-form').toggleClass('search-form-act')
})

$('.close-search').on('click', function () {
    $('.head-search-form').removeClass('search-form-act')
})












let pleasureSwiper = new Swiper(".pleasure-mobile-slider", {
    slidesPerView: 7,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    speed: 2000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
    breakpoints: {

        '767': {
            slidesPerView: 6,
            slidesPerGroup: 1,
        },
        '570': {
            slidesPerView: 6,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 6,
            slidesPerGroup: 1,
        },
    },
});







let shopsSwiper = new Swiper(".shops-mobile-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".shops-pagination",
        clickable: true,
    },
});






let promotionsSwiper = new Swiper(".promotions-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    breakpoints: {

        '767': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '670': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
    pagination: {
        el: ".promotions-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".promotions-button-next",
        prevEl: ".promotions-button-prev",
    },
});







$('.floor-name').on('click', function () {
     $('.floor-box').toggleClass('floor-drop-active');
});

$('.shops-show-href').on('click', function () {
     $(this).toggleClass('shops-show-active');
});


$('.select-categories').on('click', function () {
     $('.shops-show-left').addClass('shops-show-left-active');
});


$('.close-shops-show').on('click', function () {
     $('.shops-show-left').removeClass('shops-show-left-active');
});


$('.open-filter-mobile').on('click', function () {
     $('.filter-mobile').addClass('filter-mobile-active');
});

$('.close-filter').on('click', function () {
     $('.filter-mobile').removeClass('filter-mobile-active');
});


$('.shops-show-btn').on('click', function () {
     $('.shops-show-wrap').toggleClass('shops-show-wrap-open');
});



$('.shops-list').on('click', function () {
     $('.shops-list').removeClass('shops-list-act');
     $(this).addClass('shops-list-act');
});







let gallerySwiper = new Swiper(".gallery-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {

        '1020': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '670': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".gallery-button-next",
        prevEl: ".gallery-button-prev",
    },
});