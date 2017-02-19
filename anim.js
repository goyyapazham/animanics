var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var cb = document.getElementById("circle");
var db = document.getElementById("dvd");
var sb = document.getElementById("stop");

ctx.fillStyle = "#428c33";

var rid = 0;

var animateCircle = function() {

    window.cancelAnimationFrame(rid);

    var rad = 0;
    var x = c.width/2; var y = c.height/2;

    var grow = true;

    var draw = function() {

	ctx.clearRect(0, 0, c.width, c.height);

	ctx.beginPath();
	ctx.arc( x, y, rad, 0, 2 * Math.PI );
	ctx.fill();

	if( grow ) {
	    if( rad == y ) {
		grow = false; rad--;
	    }
	    else {
		rad++;
	    }
	};
	
	if( !grow ) {
	    if( rad == 0 ) {
		grow = true;
		rad++;
	    }
	    else {
		rad--;
	    }
	};

	console.log(grow);
	console.log(rad);
	
	rid = window.requestAnimationFrame( draw );
	
    };

    draw();

};

var stopAnimation = function() {
    window.cancelAnimationFrame( rid );
};

cb.addEventListener( "click", animateCircle );
//db.addEventListener( "click", animateDVD );
sb.addEventListener( "click", stopAnimation );
