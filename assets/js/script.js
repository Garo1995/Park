$(document).ready(function () {
    $('.open-menu').on('click', function (e) {
        e.stopPropagation();
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
    $(window).on('click', function (e) {
        $('.menu-content').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.menu-content').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    });
});


$('.open-search').on('click', function () {
    $('.head-search-form').toggleClass('search-form-act')
})

$('.close-search').on('click', function () {
    $('.head-search-form').removeClass('search-form-act')
})




$('.menu-scroll ').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});








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
    $('.shops-show-left').removeClass('shops-show-left-active');
    $('body').removeClass('body-fix');
});


$('.select-categories').on('click', function () {
     $('.shops-show-left').addClass('shops-show-left-active');
     $('body').addClass('body-fix');
    $('.filter-mobile').removeClass('filter-mobile-active');

});


$('.close-shops-show').on('click', function () {
     $('.shops-show-left').removeClass('shops-show-left-active');
    $('body').removeClass('body-fix');

});


$('.open-filter-mobile').on('click', function () {
     $('.filter-mobile').addClass('filter-mobile-active');
    $('body').addClass('body-fix');
    $('.shops-show-left').removeClass('shops-show-left-active');

});

$('.close-filter').on('click', function () {
     $('.filter-mobile').removeClass('filter-mobile-active');
    $('body').removeClass('body-fix');

});


$('.shops-show-btn').on('click', function () {
     $(this).toggleClass('shops-show-btn-none');
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



$('.open-floor-gloria').on('click', function (){
    $(this).toggleClass('open-floor-gloria-active');
    $('.floor-gloria-mod').toggleClass('floor-gloria-mod-active');
})




$('.floor-labora').on('click', function (){
    $(this).toggleClass('floor-labora-active');
    $('.floor-labora-mod').addClass('floor-labora-mod-active');
})


$('.floor-click').on('click', function (){
    $('.floor-labora').removeClass('floor-labora-active')
    $('.floor-labora-mod').removeClass('floor-labora-mod-active');
})


$('.choose-clothes').on('click', function (){
    $('.women-clothing').toggleClass('floor-clothes-active');
})

$('.floor-gloria-close').on('click', function (){
    $('.floor-gloria-mod').removeClass('floor-gloria-mod-active');
    $('.floor-labora-mod').removeClass('floor-labora-mod-active');
    $('.open-floor-gloria').removeClass('open-floor-gloria-active');
    $('.floor-labora').removeClass('floor-labora-active');
})



$(document).ready(function () {
    addActiveClass('floor-href-box', 'floor-href-act');
    changeCaseBlock(this, 'floor-href-box', 'floor-shops-min', 'floor-href-act', 'floor-click');
    $('.floor-click').on('click', function () {
        changeActiveClassWithClick(this, 'floor-href-box', 'floor-href-act')
        changeCaseBlock(this, 'floor-href-box', 'floor-shops-min', 'floor-href-act', 'floor-click');
    })
    function addActiveClass(parent_menu, active_class) {
        let prt = $('.' + parent_menu);
        let prt_childrens = $(prt).children();
        let prt_child_li = $(prt_childrens).children();
        let first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    function changeActiveClassWithClick($this, parent_block, active_class) {
        let prt = $($this).parents('.' + parent_block);
        let prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        let case_menu_block = $('.' + case_menu);
        let case_block_sub = $('.' + case_block);
        let case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({display: 'none', height: 0});
        })

        if ($($this).hasClass(menu_link)) {
            let this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })
        } else {
            let active_find = $(case_menu_block).find('.' + active_class);
            let active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })
        }
    }
});



