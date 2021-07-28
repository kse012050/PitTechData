$(document).ready(function(){
    var mainSwiper = new Swiper(".mainSwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var servicSwiper02;
    var servicSwiper02Blooen;

    var servicSwiper01 = new Swiper(".servicSwiper01", {
        navigation: {
            nextEl: ".servicSwiper01_next",
            prevEl: ".servicSwiper01_prev",
        },
        
        breakpoints: {
        100: {
            slidesPerView: 1,
        },
        1280: {
            slidesPerView: 3,
            touchMoveStopPropagation:true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        }
    }
    });

    if($(window).width() > 1280){
        servicSwiper02 = new Swiper(".servicSwiper02", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: servicSwiper01,
            },
        });
        servicSwiper02Blooen = false;
    }else{
        servicSwiper02 = new Swiper(".servicSwiper02", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        servicSwiper01.controller.control = servicSwiper02;
        servicSwiper02.controller.control = servicSwiper01; 
        servicSwiper02Blooen = true;
    }

    $(window).resize(function(){
        if($(window).width() > 1280 && servicSwiper02Blooen){
            servicSwiper02.init()
            servicSwiper02 = new Swiper(".servicSwiper02", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                thumbs: {
                    swiper: servicSwiper01,
                },
            });
            servicSwiper02Blooen = false;
        }else if(!servicSwiper02Blooen){
            servicSwiper02.init()
            servicSwiper02 = new Swiper(".servicSwiper02", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
            servicSwiper01.controller.control = servicSwiper02;
            servicSwiper02.controller.control = servicSwiper01; 
            servicSwiper02Blooen = true;
        }
    });

    
    
    scrollEvent();
    customersImg();
})

function customersImg(){
    $('.customersArea > div ul li figure img').each(function(){
        $(this).css({
            'width' : $(this).width() / 16 + 'rem'
        })
    })
}

function scrollEvent(){
    // 메뉴
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height() - $('header').height()){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }

        $('[data-scroll]').each(function(){
            console.log($(this).index());
            var dataScroll = $(this).attr('data-scroll');
           /*  $(this).css({
                'transition-delay' : 1 + $(this).index() + 's'
            }) */
            if($(window).scrollTop() > $(this).offset().top - ($(window).height() / 2)){
                if(dataScroll == 'bottomTop'){
                    $(this).addClass('active');
                    $(this).delay($(this).index() * 500).animate({
                        opacity : 1,
                        transform:' translateY('+0+'px)'
                    },1000)
                }
            }
        })
    })
    $('[data-scroll]').each(function(){
        if($(window).scrollTop() > $(this).offset() - $(window).height()){
            $(this).delay($(this).index() * 500).animate({
                opacity : 1,
                transform:' translateY('+0+'px)'
            },1000)
        }
    })

    
}