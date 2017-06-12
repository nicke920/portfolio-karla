$(function() {
	$('.main-carousel').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true
	});
	
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

	$('#home_link').on('click', () => {
			$('html, body').animate({
		        scrollTop: $('body').offset().top
		    }, 1500);
	})
	$('#about_link').on('click', () => {
			$('html, body').animate({
		        scrollTop: $('.aboutDiv').offset().top
		    }, 1500);
	})
	$('#arch_link').on('click', () => {
			$('html, body').animate({
		        scrollTop: $('body').offset().top
		    }, 1500);
	})
	$('#photo_link').on('click', () => {
			$('html, body').animate({
		        scrollTop: $('body').offset().top
		    }, 1500);
	})
	$('#contact_link').on('click', () => {
			$('html, body').animate({
		        scrollTop: $('body').offset().top
		    }, 1500);
	})

	// $('nav').on('scroll', () => {
	// 	$(this).css({
	// 		'background': 'white'
	// 	})
	// })

	//NAV BAR CHANGE ON SCROLL
	$(window).scroll(function() {
		if($(this).scrollTop() > 150) {
			$('nav').addClass('main-nav-scrolled')
		} else {
			$('nav').removeClass('main-nav-scrolled')
		}
	})

	$('.hamburgerMenu').click(() => {
		$('ul.nav-bar').slideToggle();
	})




	

	$('.carousel-cell-first').hover(function() {
		$(this).find('.carousel-description').toggleClass('description-hover');
		$(this).find('.carousel-image').toggleClass('description-hover');
		$(this).find('.carousel-photo-description').toggleClass('description-hover');
		console.log(this);
	})

	$('.read-more').click(function() {
		$('.moreCell').slideToggle('slow');
	})



	$('.fa-chevron-circle-right').click(function() {
		$('.row1').toggleClass('hidden');
		$('.row2').toggleClass('hidden');
	})
	$('.fa-chevron-circle-left').click(function() {
		$('.row1').toggleClass('hidden');
		$('.row2').toggleClass('hidden');
	})

	$('.carousel-cell').on('click', function() {
		console.log(this);

	})
})