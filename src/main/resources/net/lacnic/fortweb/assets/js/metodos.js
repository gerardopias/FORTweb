$(document).ready(function() {

    //  Show nav + overlay-content
    $('.menu-open').click(function() {
        if($(this).hasClass('clic')){     
            closeNavigation();
        }else{
            openNavigation();
        }
        $(this).toggleClass('clic');
    });

    function openNavigation(){
        $('.navigation').fadeIn();
    }

    function closeNavigation(){
        $('.navigation').fadeOut();
    }

    // Header fixed    
    $(function(){        
        var shrinkHeader = 100;
        $(window).scroll(function() {
            var scroll = getCurrentScroll();
            if ( scroll >= shrinkHeader ) { 
                $('.site-header').addClass('small-header');
            }else {
                $('.site-header').removeClass('small-header');
            }    
        }); 
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    // Scroll Nav
    $(function() {
        $('a.item-menu').bind('click', function(event) {
            $('a.item-menu').removeClass("active");
            $(this).addClass("active");
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 120
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Active    
    $('.site-nav > ul > li  a[disabled=disabled]').addClass('active-item');

});
