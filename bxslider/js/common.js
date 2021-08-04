$(document).ready(function(){
    mainSliderArea();
    serviceSlider();
    menu();
    mobileMenu();
    scrollEvent();
    customersImg();
})

function mainSliderArea(){
    $('.mainSliderArea .slider').bxSlider({
        pager:false,
        infiniteLoop:false,
        prevSelector:'.mainSliderArea .prev',
        prevText:'<span class="material-icons prev">arrow_back_ios</span>',
        nextSelector:'.mainSliderArea .next',
        nextText:'<span class="material-icons next">arrow_forward_ios</span>'
    });
}

function serviceSlider(){
    var serviceSlider = $('.serviceArea .slider').bxSlider({
        oneToOneTouch:false,
        // touchEnabled:false,
        infiniteLoop:false,
        pagerCustom:'.pagerArea',
        prevSelector:'.serviceArea .prev',
        prevText:'<span class="material-icons prev">arrow_back_ios_new</span>',
        nextSelector:'.serviceArea .next',
        nextText:'<span class="material-icons next">arrow_forward_ios</span>',
        onSlideAfter:function($slideElement,oldIndex,newIndex){
            $('.serviceArea .controls div a').removeClass('active')
            if(newIndex == 0){
                $('.serviceArea .controls div.prev a').addClass('active')
            }else if(newIndex == ($slideElement.prevObject.length - 1)){
                $('.serviceArea .controls div.next a').addClass('active')
            }
        },
        onSliderLoad:function(){
            $('.serviceArea .controls div.prev a').addClass('active')
        }
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
}

function menu(){
    $('header div nav ul li a').click(function(e){
        var menuIdx = $(this).parent().index();
        e.preventDefault();
        $('html,body').animate({scrollTop : $('[id]').eq(menuIdx).offset().top} )

    })

    $(window).scroll(function(){
        $('[id]').each(function(){
            if($(window).scrollTop() > $(this).offset().top - 1){
                $('header div nav ul li').removeClass('active')
                $('header div nav ul li').eq($('[id]').index(this)).addClass('active');
            };
        });
    });
}

function mobileMenu(){
    $('header div nav button').click(function(){
        if($(window).width() < 1280){
            $('header div nav ul').toggleClass('active');
        }
    })

    $('header div nav ul li a').click(function(){
        $('header div nav ul').removeClass('active');
    });

    $('header div nav ul').on('mousewheel',function(e){
        if($(window).width() < 1280){
            e.preventDefault();
        }
    })
}

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
        if($(window).scrollTop() > 0){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }

        $('[data-scroll]').each(function(){
            var dataScroll = $(this).attr('data-scroll');
            if($(window).scrollTop() > $(this).offset().top - ($(window).height() / 1.2)){
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
                if(dataScroll == 'bottomTop'){
                    $(this).css({
                        'transition-delay' : '0s'
                    })
                }else if(dataScroll == 'area'){
                    $(this).children().each(function(){
                        $(this).css({
                            'transition-delay' : '0s'
                        })
                    })
                }
                $(this).removeClass('active');
            }
        })
    })
}