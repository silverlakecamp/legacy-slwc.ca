/* ----------------------------------------------------
	JavaScript Document - CMS Template Buddy
	www.cmstemplatebuddy.com
-------------------------------------------------------- */

$(document).ready(function() {

    /* 
     * Dropdown menu based on Superfish 1.4.8 – jQuery menu plugin 
     * http://users.tpg.com.au/j_birch/plugins/superfish/
    -------------------------------------------------------- */
    $('ul.sf-menu').superfish({ 
            delay:       1000,                            // one second delay on mouseout 
            animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
            speed:       'fast'                         // faster animation speed 
        });
   

    /*  
     * Image/Content Slider initialization based on
     * jQuery FlexSlider v2.2.0
     * http://www.woothemes.com/flexslider/
     *
     * Copyright 2012 WooThemes
     * Free to use under the GPLv2 license.
     * http://www.gnu.org/licenses/gpl-2.0.html
     *
     * Contributing author: Tyler Smith (@mbmufffin)
    -------------------------------------------------------- */
    $('.flexslider').flexslider({
            animation: "slide",
            slideshowSpeed: 6000, //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,
            pauseOnAction: true,
            controlNav: true,     //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
            directionNav: true,
            slideshow: true
        });


    /*  
     * Smooth scroll for anchor links
    ---------------------------------------------------- */
    var scroll_timer;
        var displayed = false;
        var $totoplink = $('.totoplink a');
        var $window = $(window);
        var top = $(document.body).children(0).position().top;
    
        /* react to scroll event on window */
        $window.scroll(function () {
            window.clearTimeout(scroll_timer);
            scroll_timer = window.setTimeout(function () {
                if($window.scrollTop() <= top)
                {
                    displayed = false;
                    $totoplink.fadeOut(500);
                }
                else if(displayed == false)
                {
                    displayed = true;
                    $totoplink.stop(true, true).fadeIn(300).click(function () { $totoplink.fadeOut(300); });
                }
            }, 100);
        });


        /*
         * Magnific Popup - v0.9.9 - 2014-09-06
         * http://dimsemenov.com/plugins/magnific-popup/
         * Copyright (c) 2014 Dmitry Semenov; 
        ---------------------------------------------------- */
        $('.parent-container').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            titleSrc: 'title',
            gallery: {
                enabled: true
            }
        });

        $('.portfolio-gallery').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            titleSrc: 'title',
            gallery: {
                enabled: true
            }
        });


        /*
        *  jQuery OwlCarousel v1.3.3
        *
        *  Copyright (c) 2013 Bartosz Wojciechowski
        *  http://www.owlgraphic.com/owlcarousel/
        *
        *  Licensed under MIT
        ---------------------------------------------------- */
        var owl = $("#owl-example"); 

        $("#owl-example").owlCarousel({
            items : 3,
            pagination : false
        });

        owl.owlCarousel();
        // Custom Navigation Events
          $(".next").click(function(){
            owl.trigger('owl.next');
          });
          $(".prev").click(function(){
            owl.trigger('owl.prev');
          });


        /*
         * Search 
        ---------------------------------------------------- */
        $('.search-trigger').click(function(e) {
            e.preventDefault();
            $('html, body').scrollTop(0);
            $('section.mobile-navigation').hide();
            $('.mobile-nav-trigger').removeClass('active');
            $('body').toggleClass('show-search');
            $('.search-input input[type="text"]').focus();
        });


        /* 
         * Menu for Mobile
        ---------------------------------------------------- */ 
        $('.mobile-nav-trigger').click(function(e) {
            e.preventDefault();
            $('body').removeClass('show-search');
            $(this).toggleClass('active');
            $('section.mobile-navigation').slideToggle('fast');
        });

        $(".totoplink a").click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $("#top").offset().top -88
            }, 800);
        });

}); /*end doc ready */

/*
 * Stellar.js v0.6.2 
 * Copyright 2014, Mark Dalgleish 
 * http://markdalgleish.com/projects/stellar.js 
 * http://markdalgleish.mit-license.org
-------------------------------------------------------- */
    $(window).stellar({
        horizontalScrolling: false,
        responsive: true
    });

/*
 * Smaller header on scroll event
-------------------------------------------------------- */
    $(document).on("scroll",function(){
        if($(document).scrollTop()>300){
            $('header').addClass('smaller');
            $('body').removeClass('show-search');
        } else{
            $('header').removeClass('smaller');
        }
    });