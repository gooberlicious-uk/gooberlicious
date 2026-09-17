$(function(){

	var $slides	= $(".slide");
	var currentSlide = 0;
	var width = 900;
	var speed = 0.2;
	
	resetButtons ();
	TweenLite.set($slides.filter(":gt(0)"), {left:"960px"});	

	function nextSlide(){					
		if (currentSlide < $slides.length - 1) {
			TweenLite.to( $slides.eq(currentSlide), speed, {left:0-width+'px',ease:Quad.easeOut} );
			currentSlide++;
			resetButtons ();
			TweenLite.fromTo( $slides.eq(currentSlide), speed, {left: width + 'px'}, {left:'0px',ease:Quad.easeIn} );
		}					
	}
	function prevSlide(){					
		if (currentSlide > 0) {
			TweenLite.to( $slides.eq(currentSlide), speed, {left:width+'px',ease:Quad.easeOut} );
			currentSlide--;
			resetButtons ();
			TweenLite.fromTo( $slides.eq(currentSlide), speed, {left: (0-width)+'px'}, {left:'0px',ease:Quad.easeIn} );
		}						
	}
	function resetButtons () {
		TweenLite.set($('.slider_button.next'), {opacity:1});
		TweenLite.set($('.slider_button.prev'), {opacity:1});
		if ( currentSlide > $slides.length - 2 ) {
			TweenLite.set($('.slider_button.next'), {opacity:0.3});
		}
		if ( currentSlide < 1 ) {
			TweenLite.set($('.slider_button.prev'), {opacity:0.3});
		}
	}
	$('.slider_button.next').click ( function () {
		nextSlide();
	});
	$('.slider_button.prev').click ( function () {
		prevSlide();
	});
	
	
});
