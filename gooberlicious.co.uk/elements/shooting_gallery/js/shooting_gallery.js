$( document ).ready(function() {
	


CSSPlugin.defaultTransformPerspective = -500;
pingSound = 'audio/ping.wav';
gunSound = 'audio/shot.wav';

$('body').mousedown ( function () {
	playGunSound ();
});

/*
	Ducks
*/
var totalDucks = 15;
var duckSpeed = 32;
var duckImages = 4;
var duckWidth = 2200;

for ( var i = 0 ; i < totalDucks ; i ++ ) {
	
	// Add divs and images
	var div = $(document.createElement( "div" )).attr({
		'id' : 'divDuck'+i,
		'class' : 'targetWrapper duck'
	});
	var img = $(document.createElement( "img" )).attr({
		'id': 'imgDuck'+i,
		'class': 'target duck',
		'src' : 'img/duck' + ((i%duckImages) + 1) + '.png'
	});
	$('#wrapperDucks').append (div);
	$(div).append (img);
	// add target
	addTarget (img);
	// Set start position and animate
	//$(div).css('left', duckSpacing * i);
	moveDuck (div, totalDucks, duckSpeed, duckWidth, img, i);
	
	
}
function moveDuck (mc, totalDucks, duckSpeed, duckWidth, img, i) {
	/*
	var _x = parseInt ($(mc).css('left'));
	if (_x <= 0- duckSpacing) {
		$(mc).css('left', ( (totalDucks -1) * duckSpacing) );
		TweenMax.set(img, {
			rotationX: -82,
			transformOrigin: 'left bottom'
		});
		resetTarget (img);
	}
	TweenMax.to(mc, 2, {
		left: "-="+duckSpacing,
		ease: Linear.easeNone,
		onComplete: moveDuck,
		onCompleteParams: [mc, totalDucks, duckSpacing, img]
	});
	*/
	var tl = new TimelineMax ({repeat:-1});
	
	tl.call (resetTarget,[img,false,true]);
	tl.add(
		TweenMax.set (mc, {
			left: duckWidth
		})
	);
	tl.add(
		TweenMax.to (mc, duckSpeed, {
			left: -150,
			ease: Linear.easeNone
		})
	);
	// stagger start
	tl.seek(i*(duckSpeed/totalDucks));
	
	
}

/*
	Bullseyes
*/


var totalBullseyes = 7;
var bullseyeSpeed = 10;
var bullseyeImages = 5;

for ( var i = 0 ; i < totalBullseyes ; i ++ ) {
	
	// Add divs and images
	var div = $(document.createElement( "div" )).attr({
		'id' : 'divBullseye'+i,
		'class' : 'targetWrapper bullseye'
	});
	var img = $(document.createElement( "img" )).attr({
		'id': 'imgBullseye'+i,
		'class': 'target bullseye',
		'src' : 'img/bullseye' + ((i%bullseyeImages) + 1) + '.png'
	});
	$('#wrapperBullseyes').append (div);
	$(div).append (img);
	// add target
	addTarget (img);
	// Set start position and animate
	moveBullseye (div, totalBullseyes, bullseyeSpeed, img, i);
	
	
}
function moveBullseye (mc, totalBullseyes, bullseyeSpeed, img, i) {

	var tl = new TimelineMax ({repeat:-1});
	
	tl.call (resetTarget,[img,true]);
	tl.add(
		TweenMax.set (mc, {
			rotation: -90,
			left: 120,
			transformOrigin: '50% 140px'
		})
	);
	tl.add(
		TweenMax.to (mc, bullseyeSpeed*0.1, {
			rotation: 0,
			transformOrigin: '50% 140px',
			ease: Linear.easeNone
		})
	);
	tl.add(
		TweenMax.to (mc, bullseyeSpeed*0.8, {
			left: 712,
			ease: Linear.easeNone
		})
	);
	tl.call (resetTarget,[img]);
	tl.add(
		TweenMax.to (mc, bullseyeSpeed*0.1, {
			rotation: 90,
			transformOrigin: '50% 140px',
			ease: Linear.easeNone
		})
	);
	
	// stagger start
	tl.seek(i*(bullseyeSpeed/totalBullseyes));
	
}

/*
	Wheel
*/



var wheelImages = 13;
var wheelSpeed = 20;

var divWheel = $(document.createElement( "div" )).attr({
	'id' : 'divWheel'
});
var divWheelHub = $(document.createElement( "div" )).attr({
	'id' : 'divWheelHub'
});
var wheelHubImg = $(document.createElement( "img" )).attr({
	'id' : 'wheelHubImg',
	'src' : 'img/wheel-centre.png'
});
$('#wrapperWheel').append (divWheel);
$('#divWheel').append (divWheelHub);
$('#divWheelHub').append (wheelHubImg);
	
for ( var i = 0 ; i < wheelImages ; i ++ ) {
	
	// Add divs and images
	var div = $(document.createElement( "div" )).attr({
		'id' : 'divWheelTarget'+i,
		'class' : 'targetWrapper wheel'
	});
	var img = $(document.createElement( "img" )).attr({
		'id': 'imgWheel'+i,
		'class': 'target wheel',
		'src' : 'img/goober' + (i + 1) + '.png'
	});
	$('#divWheel').append (div);
	$(div).append (img);
	// add target
	addTarget (img);
	// animate hub
	TweenMax.to ($('#divWheelHub'), wheelSpeed, {
		rotation: "-=360",
		repeat: -1,
		ease: Linear.easeNone
	});
	// Set start position and animate targets
	$(div).css('left', 211);
	TweenMax.set (div, {
		rotation: -80,
		transformOrigin: '50% 260px'
	});
	moveWheel (div, wheelImages, wheelSpeed, i, img);
	
}

function moveWheel (mc, wheelImages, wheelSpeed, i, img) {
	
	// rotate targets
	var tl = new TimelineMax ({repeat:-1});
	tl.call (resetTarget,[img]);
	tl.add(
		TweenMax.to (mc, wheelSpeed, {
			rotation: "-=360",
			transformOrigin: '50% 260px',
			ease: Linear.easeNone
		})
	);
	// stagger start
	tl.seek ((wheelImages - i)*(wheelSpeed/wheelImages));
	
}



});

function addTarget (t) {
	t.mousedown ( function () {
		hitTarget (t,true);
	});
}
function hitTarget (t,playSound) {
	if (playSound) playTargetSound ();
	TweenMax.to(t, 1, {
		rotationX: -82,
		transformOrigin: 'left bottom',
		ease: Bounce.easeOut
	});
}
function resetTarget (t,short,from) {
	if (from) {
		TweenMax.set(t, {
			rotationX: -82,
			transformOrigin: 'left bottom'
		});
	}
	if (short) {
		TweenMax.set(t, {
			rotationX: 0,
			transformOrigin: 'left bottom'
		});
	}else{
		TweenMax.to(t, 1.5, {
			rotationX: 0,
			transformOrigin: 'left bottom',
			ease: Quad.easeInOut
		});
	}
}
function playTargetSound () {
	var audio = new Audio(pingSound);
	TweenMax.delayedCall(0.2, function () {audio.play()});
}
function playGunSound () {
	var audio = new Audio(gunSound);
	audio.play();
}


/*
	MISC FUNCTIONS
*/

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}