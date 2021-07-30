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

   $('.serviceArea .servicSwiper02 .slider').bxSlider({
        // pager:false,
        pagerCustom:'.servicSwiper01'
   });

   if($(window).width() < 1280){
        $('.serviceArea .servicSwiper01 .slider').bxSlider({
            pager:false,
            controls:false
        });
   }
    
    
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