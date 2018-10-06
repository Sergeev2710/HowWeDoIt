$(function() {

    $('#my-menu').mmenu({
        extensions:['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
        navbar:{
            title:'<img src="img/HOWWEDOIT.svg">'
        },
        offCanvas: {
            position: 'right'
        }
    });

    var api = $('#my-menu').data('mmenu');
    api.bind('opened', function() {
        $('.hamburger').addClass('is-active');
    }).bind('closed', function() {
        $('.hamburger').removeClass('is-active');
    });


    $('.carousel-services').on('initialized.owl.carousel', function() {
        setTimeout(function() {
            carouselService()
        },100);

    })
    $('.carousel-services').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {items: 1},
            800: {items:2},
            1100: {items:3}
        }
    });



    function carouselService() {
        $('.carousel-services-item').each(function() {
            var ths = $(this),
                thsHeight = ths.find('.carousel-services-content').outerHeight();
                ths.find('.carousel-services-icon').css('min-height', thsHeight);
        });
    }carouselService();



    $('select').selectize()

    $('.reviews').owlCarousel({
            loop: true,
            items: 1,
            smartSpeed: 700,
            nav: false,
            autoHeight: true
        });
    $('.skills').owlCarousel({
        loop: true,
        smartSpeed: 700,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsiveClass: true,
        responsive: {
            320: {items: 1},
            480: {items: 1},
            768: {items:2},
            992: {items:3},
            1200: {items:4}
        }
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > $(this).height()) {
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        }
    });
    $('.top').click(function(){
        $('html,body').stop().animate({scrollTop:0}, 'slow', 'swing');
    })

//E-mail Ajax Send
	$("form.callback").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
		    $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
			    $(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});



    //Resize Window
    function onResize() {
        $('.carousel-services-content').equalHeights();
    } onResize();
    window.onResize = function() {onResize()};

});

$(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('slow')
})