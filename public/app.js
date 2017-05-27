(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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

$(function () {
	// $('.main-carousel').flickity({
	//   // options
	//   cellAlign: 'left',
	//   contain: true
	// });

	$('.carousel-cell').hover(function () {
		$(this).find('.carousel-description').toggleClass('description-hover');
		$(this).find('.carousel-image').toggleClass('description-hover');
		$(this).find('.carousel-photo-description').toggleClass('description-hover');
		console.log(this);
	});

	$('.read-more').click(function () {
		$('.moreCell').toggleClass('hidden');
	});

	$('.fa-chevron-circle-right').click(function () {
		$('.row1').toggleClass('hidden');
		$('.row2').toggleClass('hidden');
	});
	$('.fa-chevron-circle-left').click(function () {
		$('.row1').toggleClass('hidden');
		$('.row2').toggleClass('hidden');
	});
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsWUFBVztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRSxnQkFBRixFQUFvQixLQUFwQixDQUEwQixZQUFXO0FBQ3BDLElBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSx1QkFBYixFQUFzQyxXQUF0QyxDQUFrRCxtQkFBbEQ7QUFDQSxJQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsaUJBQWIsRUFBZ0MsV0FBaEMsQ0FBNEMsbUJBQTVDO0FBQ0EsSUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLDZCQUFiLEVBQTRDLFdBQTVDLENBQXdELG1CQUF4RDtBQUNBLFVBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxFQUxEOztBQU9BLEdBQUUsWUFBRixFQUFnQixLQUFoQixDQUFzQixZQUFXO0FBQ2hDLElBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsUUFBM0I7QUFDQSxFQUZEOztBQUlBLEdBQUUsMEJBQUYsRUFBOEIsS0FBOUIsQ0FBb0MsWUFBVztBQUM5QyxJQUFFLE9BQUYsRUFBVyxXQUFYLENBQXVCLFFBQXZCO0FBQ0EsSUFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixRQUF2QjtBQUNBLEVBSEQ7QUFJQSxHQUFFLHlCQUFGLEVBQTZCLEtBQTdCLENBQW1DLFlBQVc7QUFDN0MsSUFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixRQUF2QjtBQUNBLElBQUUsT0FBRixFQUFXLFdBQVgsQ0FBdUIsUUFBdkI7QUFDQSxFQUhEO0FBSUEsQ0ExQkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gY29uc3QgcG9ydGZvbGlvID0ge307XG4vLyBwb3J0Zm9saW8ucHJldmlvdXNOdW1zID0gW107XG4vLyBwb3J0Zm9saW8uZXZlbnRzID0gZnVuY3Rpb24oKSB7XG4vLyBcdCQoJy5zZWVNb3JlX19za2lsbHMnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuLy8gXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyBcdFx0LyogQWN0IG9uIHRoZSBldmVudCAqL1xuLy8gXHRcdCQoJy5vdGhlclNraWxscycpLnNsaWRlVG9nZ2xlKCdzbG93Jyk7XG4vLyBcdH0pO1xuLy8gXHQkKCdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuLy8gXHRcdGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG4vLyBcdFx0XHR2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuLy8gXHRcdFx0dGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyAnXScpO1xuLy8gXHRcdFx0aWYgKHRhcmdldC5sZW5ndGgpIHtcbi8vIFx0XHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuLy8gXHRcdFx0XHRcdHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxuLy8gXHRcdFx0XHR9LCAxMDAwKTtcbi8vIFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuLy8gXHRcdFx0fVxuLy8gXHRcdH1cbi8vIFx0fSk7XG4vLyBcdCQoJ25hdiBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuLy8gXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyBcdFx0LyogQWN0IG9uIHRoZSBldmVudCAqL1xuLy8gXHRcdCQoJ25hdiB1bCcpLnNsaWRlVG9nZ2xlKCdmYXN0Jyk7XG4vLyBcdH0pO1xuLy8gfVxuXG5cbi8vIHBvcnRmb2xpby5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdFxuLy8gXHQkKCcub3RoZXJTa2lsbHMnKS5oaWRlKCk7XG4vLyB9XG5cbi8vICQoZnVuY3Rpb24oKSB7XG4vLyBcdHBvcnRmb2xpby5pbml0KCk7XG4vLyBcdHBvcnRmb2xpby5ldmVudHMoKTtcbi8vIH0pO1xuXG4kKGZ1bmN0aW9uKCkge1xuXHQvLyAkKCcubWFpbi1jYXJvdXNlbCcpLmZsaWNraXR5KHtcblx0Ly8gICAvLyBvcHRpb25zXG5cdC8vICAgY2VsbEFsaWduOiAnbGVmdCcsXG5cdC8vICAgY29udGFpbjogdHJ1ZVxuXHQvLyB9KTtcblxuXHQkKCcuY2Fyb3VzZWwtY2VsbCcpLmhvdmVyKGZ1bmN0aW9uKCkge1xuXHRcdCQodGhpcykuZmluZCgnLmNhcm91c2VsLWRlc2NyaXB0aW9uJykudG9nZ2xlQ2xhc3MoJ2Rlc2NyaXB0aW9uLWhvdmVyJyk7XG5cdFx0JCh0aGlzKS5maW5kKCcuY2Fyb3VzZWwtaW1hZ2UnKS50b2dnbGVDbGFzcygnZGVzY3JpcHRpb24taG92ZXInKTtcblx0XHQkKHRoaXMpLmZpbmQoJy5jYXJvdXNlbC1waG90by1kZXNjcmlwdGlvbicpLnRvZ2dsZUNsYXNzKCdkZXNjcmlwdGlvbi1ob3ZlcicpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMpO1xuXHR9KVxuXG5cdCQoJy5yZWFkLW1vcmUnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHQkKCcubW9yZUNlbGwnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XG5cdH0pXG5cblx0JCgnLmZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0JykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0JCgnLnJvdzEnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XG5cdFx0JCgnLnJvdzInKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XG5cdH0pXG5cdCQoJy5mYS1jaGV2cm9uLWNpcmNsZS1sZWZ0JykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0JCgnLnJvdzEnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XG5cdFx0JCgnLnJvdzInKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XG5cdH0pXG59KSJdfQ==
