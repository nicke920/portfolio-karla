(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {
	$('.main-carousel').flickity({
		// options
		cellAlign: 'left',
		contain: true
	});

	//SMOOTH SCROLL 
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	$('#home_link').on('click', function () {
		$('html, body').animate({
			scrollTop: $('body').offset().top
		}, 1500);
	});
	$('#about_link').on('click', function () {
		$('html, body').animate({
			scrollTop: $('.aboutDiv').offset().top
		}, 1500);
	});
	$('#arch_link').on('click', function () {
		$('html, body').animate({
			scrollTop: $('body').offset().top
		}, 1500);
	});
	$('#photo_link').on('click', function () {
		$('html, body').animate({
			scrollTop: $('body').offset().top
		}, 1500);
	});
	$('#contact_link').on('click', function () {
		$('html, body').animate({
			scrollTop: $('body').offset().top
		}, 1500);
	});

	// $('nav').on('scroll', () => {
	// 	$(this).css({
	// 		'background': 'white'
	// 	})
	// })

	//NAV BAR CHANGE ON SCROLL
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('nav').addClass('main-nav-scrolled');
		} else {
			$('nav').removeClass('main-nav-scrolled');
		}
	});

	$('.hamburgerMenu').click(function () {
		$('ul.nav-bar').slideToggle();
	});

	$('.carousel-cell-first').hover(function () {
		$(this).find('.carousel-description').toggleClass('description-hover');
		$(this).find('.carousel-image').toggleClass('description-hover');
		$(this).find('.carousel-photo-description').toggleClass('description-hover');
		console.log(this);
	});

	$('.read-more').click(function () {
		$('.moreCell').slideToggle('slow');
	});

	$('.fa-chevron-circle-right').click(function () {
		$('.row1').toggleClass('hidden');
		$('.row2').toggleClass('hidden');
	});
	$('.fa-chevron-circle-left').click(function () {
		$('.row1').toggleClass('hidden');
		$('.row2').toggleClass('hidden');
	});

	$('.carousel-cell').on('click', function () {
		console.log(this);
	});
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxFQUFFLFlBQVc7QUFDWixHQUFFLGdCQUFGLEVBQW9CLFFBQXBCLENBQTZCO0FBQzNCO0FBQ0EsYUFBVyxNQUZnQjtBQUczQixXQUFTO0FBSGtCLEVBQTdCOztBQU1BO0FBQ0EsR0FBRSw4QkFBRixFQUFrQyxLQUFsQyxDQUF3QyxZQUFXO0FBQ2pELE1BQUksU0FBUyxRQUFULENBQWtCLE9BQWxCLENBQTBCLEtBQTFCLEVBQWdDLEVBQWhDLEtBQXVDLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsS0FBdEIsRUFBNEIsRUFBNUIsQ0FBdkMsSUFBMEUsU0FBUyxRQUFULElBQXFCLEtBQUssUUFBeEcsRUFBa0g7QUFDaEgsT0FBSSxTQUFTLEVBQUUsS0FBSyxJQUFQLENBQWI7QUFDQSxZQUFTLE9BQU8sTUFBUCxHQUFnQixNQUFoQixHQUF5QixFQUFFLFdBQVcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixDQUFoQixDQUFYLEdBQStCLEdBQWpDLENBQWxDO0FBQ0EsT0FBSSxPQUFPLE1BQVgsRUFBbUI7QUFDakIsTUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ3RCLGdCQUFXLE9BQU8sTUFBUCxHQUFnQjtBQURMLEtBQXhCLEVBRUcsSUFGSDtBQUdBLFdBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRixFQVhEOztBQWFBLEdBQUUsWUFBRixFQUFnQixFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFNO0FBQ2hDLElBQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUNqQixjQUFXLEVBQUUsTUFBRixFQUFVLE1BQVYsR0FBbUI7QUFEYixHQUF4QixFQUVNLElBRk47QUFHRCxFQUpEO0FBS0EsR0FBRSxhQUFGLEVBQWlCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFlBQU07QUFDakMsSUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ2pCLGNBQVcsRUFBRSxXQUFGLEVBQWUsTUFBZixHQUF3QjtBQURsQixHQUF4QixFQUVNLElBRk47QUFHRCxFQUpEO0FBS0EsR0FBRSxZQUFGLEVBQWdCLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFlBQU07QUFDaEMsSUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ2pCLGNBQVcsRUFBRSxNQUFGLEVBQVUsTUFBVixHQUFtQjtBQURiLEdBQXhCLEVBRU0sSUFGTjtBQUdELEVBSkQ7QUFLQSxHQUFFLGFBQUYsRUFBaUIsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBTTtBQUNqQyxJQUFFLFlBQUYsRUFBZ0IsT0FBaEIsQ0FBd0I7QUFDakIsY0FBVyxFQUFFLE1BQUYsRUFBVSxNQUFWLEdBQW1CO0FBRGIsR0FBeEIsRUFFTSxJQUZOO0FBR0QsRUFKRDtBQUtBLEdBQUUsZUFBRixFQUFtQixFQUFuQixDQUFzQixPQUF0QixFQUErQixZQUFNO0FBQ25DLElBQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUNqQixjQUFXLEVBQUUsTUFBRixFQUFVLE1BQVYsR0FBbUI7QUFEYixHQUF4QixFQUVNLElBRk47QUFHRCxFQUpEOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVc7QUFDM0IsTUFBRyxFQUFFLElBQUYsRUFBUSxTQUFSLEtBQXNCLEdBQXpCLEVBQThCO0FBQzdCLEtBQUUsS0FBRixFQUFTLFFBQVQsQ0FBa0IsbUJBQWxCO0FBQ0EsR0FGRCxNQUVPO0FBQ04sS0FBRSxLQUFGLEVBQVMsV0FBVCxDQUFxQixtQkFBckI7QUFDQTtBQUNELEVBTkQ7O0FBUUEsR0FBRSxnQkFBRixFQUFvQixLQUFwQixDQUEwQixZQUFNO0FBQy9CLElBQUUsWUFBRixFQUFnQixXQUFoQjtBQUNBLEVBRkQ7O0FBU0EsR0FBRSxzQkFBRixFQUEwQixLQUExQixDQUFnQyxZQUFXO0FBQzFDLElBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSx1QkFBYixFQUFzQyxXQUF0QyxDQUFrRCxtQkFBbEQ7QUFDQSxJQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsaUJBQWIsRUFBZ0MsV0FBaEMsQ0FBNEMsbUJBQTVDO0FBQ0EsSUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLDZCQUFiLEVBQTRDLFdBQTVDLENBQXdELG1CQUF4RDtBQUNBLFVBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxFQUxEOztBQU9BLEdBQUUsWUFBRixFQUFnQixLQUFoQixDQUFzQixZQUFXO0FBQ2hDLElBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsTUFBM0I7QUFDQSxFQUZEOztBQU1BLEdBQUUsMEJBQUYsRUFBOEIsS0FBOUIsQ0FBb0MsWUFBVztBQUM5QyxJQUFFLE9BQUYsRUFBVyxXQUFYLENBQXVCLFFBQXZCO0FBQ0EsSUFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixRQUF2QjtBQUNBLEVBSEQ7QUFJQSxHQUFFLHlCQUFGLEVBQTZCLEtBQTdCLENBQW1DLFlBQVc7QUFDN0MsSUFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixRQUF2QjtBQUNBLElBQUUsT0FBRixFQUFXLFdBQVgsQ0FBdUIsUUFBdkI7QUFDQSxFQUhEOztBQUtBLEdBQUUsZ0JBQUYsRUFBb0IsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBVztBQUMxQyxVQUFRLEdBQVIsQ0FBWSxJQUFaO0FBRUEsRUFIRDtBQUlBLENBakdEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZnVuY3Rpb24oKSB7XG5cdCQoJy5tYWluLWNhcm91c2VsJykuZmxpY2tpdHkoe1xuXHQgIC8vIG9wdGlvbnNcblx0ICBjZWxsQWxpZ246ICdsZWZ0Jyxcblx0ICBjb250YWluOiB0cnVlXG5cdH0pO1xuXHRcblx0Ly9TTU9PVEggU0NST0xMIFxuXHQkKCdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHQgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xuXHQgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcblx0ICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xuXHQgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcblx0ICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuXHQgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxuXHQgICAgICB9LCAxMDAwKTtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfVxuXHQgIH1cblx0fSk7XG5cblx0JCgnI2hvbWVfbGluaycpLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcblx0XHQgICAgICAgIHNjcm9sbFRvcDogJCgnYm9keScpLm9mZnNldCgpLnRvcFxuXHRcdCAgICB9LCAxNTAwKTtcblx0fSlcblx0JCgnI2Fib3V0X2xpbmsnKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG5cdFx0ICAgICAgICBzY3JvbGxUb3A6ICQoJy5hYm91dERpdicpLm9mZnNldCgpLnRvcFxuXHRcdCAgICB9LCAxNTAwKTtcblx0fSlcblx0JCgnI2FyY2hfbGluaycpLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcblx0XHQgICAgICAgIHNjcm9sbFRvcDogJCgnYm9keScpLm9mZnNldCgpLnRvcFxuXHRcdCAgICB9LCAxNTAwKTtcblx0fSlcblx0JCgnI3Bob3RvX2xpbmsnKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG5cdFx0ICAgICAgICBzY3JvbGxUb3A6ICQoJ2JvZHknKS5vZmZzZXQoKS50b3Bcblx0XHQgICAgfSwgMTUwMCk7XG5cdH0pXG5cdCQoJyNjb250YWN0X2xpbmsnKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG5cdFx0ICAgICAgICBzY3JvbGxUb3A6ICQoJ2JvZHknKS5vZmZzZXQoKS50b3Bcblx0XHQgICAgfSwgMTUwMCk7XG5cdH0pXG5cblx0Ly8gJCgnbmF2Jykub24oJ3Njcm9sbCcsICgpID0+IHtcblx0Ly8gXHQkKHRoaXMpLmNzcyh7XG5cdC8vIFx0XHQnYmFja2dyb3VuZCc6ICd3aGl0ZSdcblx0Ly8gXHR9KVxuXHQvLyB9KVxuXG5cdC8vTkFWIEJBUiBDSEFOR0UgT04gU0NST0xMXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdFx0aWYoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDE1MCkge1xuXHRcdFx0JCgnbmF2JykuYWRkQ2xhc3MoJ21haW4tbmF2LXNjcm9sbGVkJylcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnbmF2JykucmVtb3ZlQ2xhc3MoJ21haW4tbmF2LXNjcm9sbGVkJylcblx0XHR9XG5cdH0pXG5cblx0JCgnLmhhbWJ1cmdlck1lbnUnKS5jbGljaygoKSA9PiB7XG5cdFx0JCgndWwubmF2LWJhcicpLnNsaWRlVG9nZ2xlKCk7XG5cdH0pXG5cblxuXG5cblx0XG5cblx0JCgnLmNhcm91c2VsLWNlbGwtZmlyc3QnKS5ob3ZlcihmdW5jdGlvbigpIHtcblx0XHQkKHRoaXMpLmZpbmQoJy5jYXJvdXNlbC1kZXNjcmlwdGlvbicpLnRvZ2dsZUNsYXNzKCdkZXNjcmlwdGlvbi1ob3ZlcicpO1xuXHRcdCQodGhpcykuZmluZCgnLmNhcm91c2VsLWltYWdlJykudG9nZ2xlQ2xhc3MoJ2Rlc2NyaXB0aW9uLWhvdmVyJyk7XG5cdFx0JCh0aGlzKS5maW5kKCcuY2Fyb3VzZWwtcGhvdG8tZGVzY3JpcHRpb24nKS50b2dnbGVDbGFzcygnZGVzY3JpcHRpb24taG92ZXInKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzKTtcblx0fSlcblxuXHQkKCcucmVhZC1tb3JlJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0JCgnLm1vcmVDZWxsJykuc2xpZGVUb2dnbGUoJ3Nsb3cnKTtcblx0fSlcblxuXG5cblx0JCgnLmZhLWNoZXZyb24tY2lyY2xlLXJpZ2h0JykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0JCgnLnJvdzEnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XG5cdFx0JCgnLnJvdzInKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XG5cdH0pXG5cdCQoJy5mYS1jaGV2cm9uLWNpcmNsZS1sZWZ0JykuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0JCgnLnJvdzEnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XG5cdFx0JCgnLnJvdzInKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XG5cdH0pXG5cblx0JCgnLmNhcm91c2VsLWNlbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzKTtcblxuXHR9KVxufSkiXX0=
