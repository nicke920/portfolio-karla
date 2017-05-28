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

	jQuery.fn.extend({
		toggleText: function toggleText(a, b) {
			var isClicked = false;
			var that = this;
			this.click(function () {
				if (isClicked) {
					that.text(a);isClicked = false;
				} else {
					that.text(b);isClicked = true;
				}
			});
			return this;
		}
	});

	$('.carousel-cell').hover(function () {
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
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxFQUFFLFlBQVc7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQU8sRUFBUCxDQUFVLE1BQVYsQ0FBaUI7QUFDYixjQUFZLG9CQUFVLENBQVYsRUFBYSxDQUFiLEVBQWU7QUFDdkIsT0FBSSxZQUFZLEtBQWhCO0FBQ0EsT0FBSSxPQUFPLElBQVg7QUFDQSxRQUFLLEtBQUwsQ0FBVyxZQUFXO0FBQ2xCLFFBQUksU0FBSixFQUFlO0FBQUUsVUFBSyxJQUFMLENBQVUsQ0FBVixFQUFjLFlBQVksS0FBWjtBQUFvQixLQUFuRCxNQUNLO0FBQUUsVUFBSyxJQUFMLENBQVUsQ0FBVixFQUFjLFlBQVksSUFBWjtBQUFtQjtBQUMzQyxJQUhEO0FBSUEsVUFBTyxJQUFQO0FBQ0g7QUFUWSxFQUFqQjs7QUFjQSxHQUFFLGdCQUFGLEVBQW9CLEtBQXBCLENBQTBCLFlBQVc7QUFDcEMsSUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLHVCQUFiLEVBQXNDLFdBQXRDLENBQWtELG1CQUFsRDtBQUNBLElBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxpQkFBYixFQUFnQyxXQUFoQyxDQUE0QyxtQkFBNUM7QUFDQSxJQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsNkJBQWIsRUFBNEMsV0FBNUMsQ0FBd0QsbUJBQXhEO0FBQ0EsVUFBUSxHQUFSLENBQVksSUFBWjtBQUNBLEVBTEQ7O0FBT0EsR0FBRSxZQUFGLEVBQWdCLEtBQWhCLENBQXNCLFlBQVc7QUFDaEMsSUFBRSxXQUFGLEVBQWUsV0FBZixDQUEyQixNQUEzQjtBQUNBLEVBRkQ7O0FBTUEsR0FBRSwwQkFBRixFQUE4QixLQUE5QixDQUFvQyxZQUFXO0FBQzlDLElBQUUsT0FBRixFQUFXLFdBQVgsQ0FBdUIsUUFBdkI7QUFDQSxJQUFFLE9BQUYsRUFBVyxXQUFYLENBQXVCLFFBQXZCO0FBQ0EsRUFIRDtBQUlBLEdBQUUseUJBQUYsRUFBNkIsS0FBN0IsQ0FBbUMsWUFBVztBQUM3QyxJQUFFLE9BQUYsRUFBVyxXQUFYLENBQXVCLFFBQXZCO0FBQ0EsSUFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixRQUF2QjtBQUNBLEVBSEQ7QUFJQSxDQTFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBjb25zdCBwb3J0Zm9saW8gPSB7fTtcbi8vIHBvcnRmb2xpby5wcmV2aW91c051bXMgPSBbXTtcbi8vIHBvcnRmb2xpby5ldmVudHMgPSBmdW5jdGlvbigpIHtcbi8vIFx0JCgnLnNlZU1vcmVfX3NraWxscycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4vLyBcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vIFx0XHQvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG4vLyBcdFx0JCgnLm90aGVyU2tpbGxzJykuc2xpZGVUb2dnbGUoJ3Nsb3cnKTtcbi8vIFx0fSk7XG4vLyBcdCQoJ2FbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XG4vLyBcdFx0aWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbi8vIFx0XHRcdHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4vLyBcdFx0XHR0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XG4vLyBcdFx0XHRpZiAodGFyZ2V0Lmxlbmd0aCkge1xuLy8gXHRcdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4vLyBcdFx0XHRcdFx0c2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXG4vLyBcdFx0XHRcdH0sIDEwMDApO1xuLy8gXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG4vLyBcdFx0XHR9XG4vLyBcdFx0fVxuLy8gXHR9KTtcbi8vIFx0JCgnbmF2IGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4vLyBcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vIFx0XHQvKiBBY3Qgb24gdGhlIGV2ZW50ICovXG4vLyBcdFx0JCgnbmF2IHVsJykuc2xpZGVUb2dnbGUoJ2Zhc3QnKTtcbi8vIFx0fSk7XG4vLyB9XG5cblxuLy8gcG9ydGZvbGlvLmluaXQgPSBmdW5jdGlvbigpIHtcblx0XG4vLyBcdCQoJy5vdGhlclNraWxscycpLmhpZGUoKTtcbi8vIH1cblxuLy8gJChmdW5jdGlvbigpIHtcbi8vIFx0cG9ydGZvbGlvLmluaXQoKTtcbi8vIFx0cG9ydGZvbGlvLmV2ZW50cygpO1xuLy8gfSk7XG5cblxuJChmdW5jdGlvbigpIHtcblx0Ly8gJCgnLm1haW4tY2Fyb3VzZWwnKS5mbGlja2l0eSh7XG5cdC8vICAgLy8gb3B0aW9uc1xuXHQvLyAgIGNlbGxBbGlnbjogJ2xlZnQnLFxuXHQvLyAgIGNvbnRhaW46IHRydWVcblx0Ly8gfSk7XG5cblx0alF1ZXJ5LmZuLmV4dGVuZCh7XG5cdCAgICB0b2dnbGVUZXh0OiBmdW5jdGlvbiAoYSwgYil7XG5cdCAgICAgICAgdmFyIGlzQ2xpY2tlZCA9IGZhbHNlO1xuXHQgICAgICAgIHZhciB0aGF0ID0gdGhpcztcblx0ICAgICAgICB0aGlzLmNsaWNrKGZ1bmN0aW9uICgpe1xuXHQgICAgICAgICAgICBpZiAoaXNDbGlja2VkKSB7IHRoYXQudGV4dChhKTsgaXNDbGlja2VkID0gZmFsc2U7IH1cblx0ICAgICAgICAgICAgZWxzZSB7IHRoYXQudGV4dChiKTsgaXNDbGlja2VkID0gdHJ1ZTsgfVxuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgfVxuXHR9KTtcblxuXHRcblxuXHQkKCcuY2Fyb3VzZWwtY2VsbCcpLmhvdmVyKGZ1bmN0aW9uKCkge1xuXHRcdCQodGhpcykuZmluZCgnLmNhcm91c2VsLWRlc2NyaXB0aW9uJykudG9nZ2xlQ2xhc3MoJ2Rlc2NyaXB0aW9uLWhvdmVyJyk7XG5cdFx0JCh0aGlzKS5maW5kKCcuY2Fyb3VzZWwtaW1hZ2UnKS50b2dnbGVDbGFzcygnZGVzY3JpcHRpb24taG92ZXInKTtcblx0XHQkKHRoaXMpLmZpbmQoJy5jYXJvdXNlbC1waG90by1kZXNjcmlwdGlvbicpLnRvZ2dsZUNsYXNzKCdkZXNjcmlwdGlvbi1ob3ZlcicpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMpO1xuXHR9KVxuXG5cdCQoJy5yZWFkLW1vcmUnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHQkKCcubW9yZUNlbGwnKS5zbGlkZVRvZ2dsZSgnc2xvdycpO1xuXHR9KVxuXG5cblxuXHQkKCcuZmEtY2hldnJvbi1jaXJjbGUtcmlnaHQnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHQkKCcucm93MScpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcblx0XHQkKCcucm93MicpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcblx0fSlcblx0JCgnLmZhLWNoZXZyb24tY2lyY2xlLWxlZnQnKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHQkKCcucm93MScpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcblx0XHQkKCcucm93MicpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcblx0fSlcbn0pIl19
