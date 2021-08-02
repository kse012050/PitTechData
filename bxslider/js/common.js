$(document).ready(function(){
    $('.mainSlider .slider').bxSlider({
        pager:false,
        infiniteLoop:false,
        prevSelector:'.mainSlider .prev',
        prevText:'<span class="material-icons prev">arrow_back_ios</span>',
        nextSelector:'.mainSlider .next',
        nextText:'<span class="material-icons next">arrow_forward_ios</span>'
    });


    var serviceSlider = $('.serviceArea .slider').bxSlider({
        oneToOneTouch:false,
        // touchEnabled:false,
        infiniteLoop:false,
        pagerCustom:'.pagerArea',
        prevSelector:'.serviceArea .prev',
        prevText:'<span class="material-icons prev">arrow_back_ios</span>',
        nextSelector:'.serviceArea .next',
        nextText:'<span class="material-icons next">arrow_forward_ios</span>'
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
            var dataScroll = $(this).attr('data-scroll');
            if($(window).scrollTop() > $(this).offset().top - ($(window).height() / 1.5)){
                if(dataScroll == 'bottomTop'){
                    $(this).css({
                        'transition-delay' : 0.5 * $(this).index() + 's'
                    })
                }else if(dataScroll == 'area'){
                    $(this).children().each(function(){
                        $(this).css({
                            'transition-delay' : 0.5 * $(this).index() + 's'
                        })
                    })
                }
                $(this).addClass('active');
            }else if($(window).scrollTop() < $(this).offset().top - ($(window).height())){
                if(dataScroll == 'bottomTop' && dataScroll == 'area'){
                    $(this).css({
                        'transition-delay' : '0s'
                    })
                }
                $(this).removeClass('active');
            }
        })
    })
}