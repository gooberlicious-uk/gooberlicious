$( document ).ready(function() {

// jQuery onLoad:

/*
******************************************************************
SUPERSCROLLORAMA
******************************************************************
*/
var controller = $.superscrollorama({
	triggerAtCenter: false
});

/* Logo*/
controller.addTween(
	'#divWrapper',
	TweenMax.to($('#divTitle'), 1, {css:{top:380}, ease:Quad.easeOut, immediateRender:true}),
	600 // scroll duration of tween
); 

/* First arrow */
controller.addTween(
	'#divMain2',
	TweenMax.from($('#divMain2 .arrow'), 2, {css:{right:"-300",top:"-150"}, ease:Elastic.easeOut, immediateRender:true}),
	800, // scroll duration of tween
	-800
); 

/* Second arrow */
controller.addTween(
	'#divMain3',
	TweenMax.from($('#divMain3 .arrow'), 2, {css:{left:"-400",top:"-150"}, ease:Elastic.easeOut, immediateRender:true}),
	800, // scroll duration of tween
	-1000
);

/* Portfolio */
$('.project-item').each(function( index ) {
	controller.addTween(
		$(this),
		TweenMax.from($(this), 1, {css:{left:'-100',opacity:0}, ease:Quad.easeOut, immediateRender:true}),
		400, // scroll duration of tween
		-800
	); 

	
	
});

/*
controller.addTween(
	'.project-item',
	TweenMax.from($('.project-item'), 1, {css:{opacity:0}}),
	400, // scroll duration of tween
	-800
); 
*/




/* Contact icons */
controller.addTween(
	'#divMain3',
	TweenMax.from($('.email_icon'), 1.5, {css:{scale:2.5,opacity:0},ease:Elastic.easeOut}),
	0, // scroll duration of tween
	-600
); 
controller.addTween(
	'#divMain3',
	TweenMax.from($('.mobile_icon'), 1.5, {css:{scale:2.5,opacity:0},ease:Elastic.easeOut}),
	0, // scroll duration of tween
	-600
);

/*
******************************************************************
HIDE EMPTY AREAS
******************************************************************
*/
$('div.hide').closest('div.rowWrapper').css ('display','none');


/*
	-----------------------------------
	
	Open links in a new window
	
	Usage:
	Add a class to the anchor to open 
	links in a new window. set class 
	name below or leave as default
			
	-----------------------------------
*/
// Set class sttribute
var newWinClass = 'newWindow';
/*
	Add class to links beginning http:// or https://
*/
//$('#divContent').find('a[href^=http://]').addClass(newWinClass);
//$('#divContent').find('a[href^=https://]').addClass(newWinClass);
/*
	Open specific links in a new window
*/
$('a.'+newWinClass).each(function() {
	$(this).click ( function(event) {			
		window.open(this.href);
		return false;
	});
});


});

