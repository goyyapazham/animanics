var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var cb = document.getElementById("circle");
var db = document.getElementById("dvd");
var sb = document.getElementById("stop");

var dvd = new Image();
dvd.src = "dvd.png";

ctx.fillStyle = "#428c33";

var rid = 0;

var animateCircle = function() {

    window.cancelAnimationFrame(rid);

    var rad = 0;
    var x = c.width/2; var y = c.height/2;

    var grow = true;
    var speed = 1; //<------ CHANGE SPEED HERE

    var draw = function() {

	ctx.clearRect(0, 0, c.width, c.height);

	ctx.beginPath();
	ctx.arc( x, y, rad, 0, 2 * Math.PI );
	ctx.fill();

	rad += speed;

	if( rad == y || rad == 0 )
	    speed = -speed;

	console.log(grow);
	console.log(rad);
	
	rid = window.requestAnimationFrame( draw );
	
    };

    draw();

};

var animateDVD = function() {

    window.cancelAnimationFrame( rid );

    var x = Math.random() * ( c.width - 150 ) + 75;
    var y = Math.random() * ( c.height - 90 ) + 45;
    var xspeed = 1; var yspeed = 1;

    var bounce = function() {

	ctx.clearRect(0, 0, c.width, c.height);
	ctx.drawImage(dvd, x, y, 50, 50);
	
	x += xspeed; y += yspeed;

	if( x + 50 > c.width || x < 0 )
	    xspeed = -xspeed;
	if( y + 50 > c.height || y < 0 )
	    yspeed = -yspeed;

	rid = window.requestAnimationFrame(bounce);

    }

    bounce();

}

var stopAnimation = function() {
    window.cancelAnimationFrame( rid );
};

cb.addEventListener( "click", animateCircle );
db.addEventListener( "click", animateDVD );
sb.addEventListener( "click", stopAnimation );
