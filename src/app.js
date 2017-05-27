// const portfolio = {};
// portfolio.previousNums = [];
// portfolio.events = function() {
// 	$('.seeMore__skills').on('click', function(event) {
// 		event.preventDefault();
// 		/* Act on the event */
// 		$('.otherSkills').slideToggle('slow');
// 	});
// 	$('a[href*="#"]:not([href="#"])').click(function() {
// 		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
// 			var target = $(this.hash);
// 			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// 			if (target.length) {
// 				$('html, body').animate({
// 					scrollTop: target.offset().top
// 				}, 1000);
// 				return false;
// 			}
// 		}
// 	});
// 	$('nav button').on('click', function(event) {
// 		event.preventDefault();
// 		/* Act on the event */
// 		$('nav ul').slideToggle('fast');
// 	});
// }


// portfolio.init = function() {
	
// 	$('.otherSkills').hide();
// }

// $(function() {
// 	portfolio.init();
// 	portfolio.events();
// });

$(function() {
	// $('.main-carousel').flickity({
	//   // options
	//   cellAlign: 'left',
	//   contain: true
	// });

	$('.carousel-cell').hover(function() {
		$(this).find('.carousel-description').toggleClass('description-hover');
		$(this).find('.carousel-image').toggleClass('description-hover');
		$(this).find('.carousel-photo-description').toggleClass('description-hover');
		console.log(this);
	})

	$('.read-more').click(function() {
		$('.moreCell').toggleClass('hidden');
	})

	$('.fa-chevron-circle-right').click(function() {
		$('.row1').toggleClass('hidden');
		$('.row2').toggleClass('hidden');
	})
	$('.fa-chevron-circle-left').click(function() {
		$('.row1').toggleClass('hidden');
		$('.row2').toggleClass('hidden');
	})
})