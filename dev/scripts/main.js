$(function()  {
	//SMOOTH SCROLL 
	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html, body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	      return false;
	    }
	  }
	});

	//NAV BAR CHANGE ON SCROLL
	$(window).scroll(function() {
		if($(this).scrollTop() > 550) {
			$('nav').addClass('main-nav-scrolled')
		} else {
			$('nav').removeClass('main-nav-scrolled')
		}
	})

	$('.res_menu').on('click', function() {
		$('.nav_menu').toggleClass('show');
		$('.res_menu').toggleClass('rotate');
		console.log('clickeddd')
	})
	$(window).on('resize', function(event){
		var windowSize = $(window).width();  
	    if(windowSize > 600){
	    	$('.nav_menu').show();
	    }
	});



})