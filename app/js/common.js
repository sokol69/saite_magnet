"use strict";
/*Slick sliders*/
if ($('.js-events__slider').length > 0 ) {
	$('.js-events__slider').slick({ 
		centerMode: true, 
		centerPadding: '0',
		slidesToShow: 1,
		variableWidth: true,
		dots: false,
		arrows: false,
		draggable: true,
		centerMode: true,
		infinite: true,
	});
};

if ($('.js-anonceSlider').length > 0 ) {
		$('.js-anonceSlider').slick({ 
			centerMode: true, 
			centerPadding: '0',
			slidesToShow: 1,
			variableWidth: true,
			dots: false,
			arrows: true,
			draggable: true,
			centerMode: true,
			prevArrow: '<span class="anonce__btn anonce__btn--prev">&#8249;</span>',
			nextArrow: '<span class="anonce__btn anonce__btn--next">&#8250;</span>',
			infinite: true,
		});
};


/*Navigation scrol*/
var toScroll = function(id) {
	$(id).on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),

		top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 700);
	});
}

toScroll("#menu");