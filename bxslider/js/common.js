$(document).ready(function(){
    $('.mainSlider .slider').bxSlider({
        pager:false,
        infiniteLoop:false,
    });


    var serviceSlider = $('.serviceArea .slider').bxSlider({
        oneToOneTouch:true,
        infiniteLoop:false,
        pagerCustom:'.pagerArea',
    });

    var serviceBoolean = true;
    var servicePager = $('.serviceArea .pagerArea');
    service();
    $(window).resize(function(){
        service();
    })

    function service(){
        if($(window).width() <= 1280 && serviceBoolean){
            $('.serviceArea .slider > div').each(function(){
                $(this).prepend(servicePager.clone().children()[$(this).index()]);
            })
            servicePager.remove();
            serviceSlider.reloadSlider()
            serviceBoolean = false;
        }else if($(window).width() > 1280 && !serviceBoolean){
            console.log(11);
            $('.serviceArea .slider .pager').remove();
            $('.serviceContent').prepend(servicePager);
            serviceSlider.reloadSlider()
            serviceBoolean = true;
        }
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