(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {
	new WOW().init();
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

	$('#home_link').on('hover', function () {
		$(this).addClass('wow animated rollIn');
	});

	$('#home_link').on('click', function () {
		$('html, body').animate({
			scrollTop: $('body').offset().top
		}, 1000);
	});
	$('#about_link').on('click', function () {
		$('html, body').animate({
			scrollTop: $('.aboutMe').offset().top
		}, 1000);
	});
	$('#about_link2').on('click', function () {
		$('html, body').animate({
			scrollTop: $('.aboutMe').offset().top
		}, 1000);
	});
	$('#work_link').on('click', function () {
		$('html, body').animate({
			scrollTop: $('.work').offset().top
		}, 1000);
	});
	$('#skills_link').on('click', function () {
		$('html, body').animate({
			scrollTop: $('.skills').offset().top
		}, 1000);
	});
	$('#contact_link').on('click', function () {
		$('html, body').animate({
			scrollTop: $('footer').offset().top
		}, 1000);
	});

	//NAV BAR CHANGE ON SCROLL
	$(window).scroll(function () {
		if ($(this).scrollTop() > 550) {
			$('nav').addClass('main-nav-scrolled');
		} else {
			$('nav').removeClass('main-nav-scrolled');
		}
	});

	$('.res_menu').on('click', function () {
		$('.nav_menu').toggleClass('show');
		$('.res_menu').toggleClass('rotate');
		console.log('clickeddd');
	});
	$(window).on('resize', function (event) {
		var windowSize = $(window).width();
		if (windowSize > 600) {
			$('.nav_menu').show();
		}
	});
});

},{}]},{},[1]);
