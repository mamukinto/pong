var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x1 = 25;
var y1 = 0;
var w1 = 25;
var h1 = 150;
var x2 = canvas.width - 50;
var y2 = 0;
var w2 = 25;
var h2 = 150;
var playerOneDown = false;
var playerTwoDown = false;
var playerOneUp = false;
var playerTwoUp = false;
var speed = 10;
var ballx = 500;
var bally = 10;
var ballSpeedx = -5;
var ballSpeedy = -2;
var playerOneScore = 0;
var playerTwoScore = 0;
var rand;
var speedlvl = 1;


function start() {

function move() {
	///////////////////
	//first player move
	///////////////////
	if (playerOneUp) {
		y1 -= speed;
	}
	if (playerOneDown) {
		y1 += speed;
	}
	//////////////////////
	// second player move
	//////////////////////
	if (playerTwoUp) {
		y2 -= speed;
	}
	if (playerTwoDown) {
		y2 += speed;
	}

	////////////////////////
	//// first player borders
	////////////////////////
	if (y1 < 0) {
		y1 = 0;
	}

	if (y1 > canvas.height - h1) {
		y1 = canvas.height - h1;
	}

	////////////////////////
	//// second player borders
	////////////////////////
	if (y2 < 0) {
		y2 = 0;
	}

	if (y2 > canvas.height - h2) {
		y2 = canvas.height - h2;
	}
}




document.onkeydown = function(e) {
    switch (e.keyCode) {


    	case 86:
            addLevel();
            break;


    	case 32:
            alert("paused")
            break;

        case 38:
            playerTwoUp = true;
            break;

        case 40:
            playerTwoDown = true;
            break;

        case 87:
        	playerOneUp = true;
			break;

        case 83:
        	playerOneDown = true;
        	break;
    }
};


document.onkeyup = function(e) {
    switch (e.keyCode) {

        case 38:
            playerTwoUp = false;
            break;

        case 40:
            playerTwoDown = false;
            break;

        case 87:
        	playerOneUp = false;
        	break;

        case 83:
        	playerOneDown = false;
        	break;
    }
};


setInterval(draw() , 5)




function draw() {
ctx.fillStyle = "#FFF";
ctx.fillRect(0,0,canvas.width,canvas.height);


ctx.fillStyle = "black";
ctx.fillRect(x1,y1,w1,h1);
ctx.fillRect(x2,y2,w2,h2);



///////////////////
//// SCOREBOARD
////////////////////////
ctx.font = "90px arial";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText(playerOneScore + "                  " + playerTwoScore, canvas.width/2, 125); 
///////////////////////////
///////////////////////////
///////////////////////////


 ballx += ballSpeedx;
 bally += ballSpeedy;

//////////////////
//////// BALL
//////////////////
ctx.beginPath();
ctx.arc(ballx, bally, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
/////////////////////
///////////////////
//////////////////






///////////////
/////LEVEL/////
///////////////
ctx.font = "20px arial";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("Speed level : " + speedlvl,425,25); 
///////////////
/////LEVEL/////
///////////////





///////////////
/// MIDDLE LINE
///////////////
ctx.fillRect(500,0,10,50)
ctx.fillRect(500,100,10,50)
ctx.fillRect(500,200,10,50)
ctx.fillRect(500,300,10,50)
ctx.fillRect(500,400,10,50)
ctx.fillRect(500,500,10,50)
ctx.fillRect(500,600,10,50)
//////////////////
//////////////////
//////////////////


}


setInterval (update, 10);

function update() {


	ballBorders();
	collisionDetection();
	draw();
    move();

}

//////////////////////////////////////
//////////////////////////////
/// BALL PART ////////////
////////////////////////
////////////////
//////////
/////
///
//


function playerOneGoal() {
	playerOneScore += 1;
	ballSpeedx = -5;
	speedlvl = 1;

	rand = Math.floor(Math.random() * 680) + 10;


	ballx = 500;
	bally = rand;
	console.log("Player one: " + " " + playerOneScore + "Player two: " + " " + playerTwoScore)
}

function playerTwoGoal() {
	playerTwoScore += 1;
	ballSpeedx = 5;
	speedlvl = 1;

	rand = Math.floor(Math.random() * 680) + 10;


	ballx = 500;
	bally = rand;
	console.log("Player one: " + playerOneScore + "Player two: " + playerTwoScore)
}



function ballBorders() {
	if (ballx > canvas.width) {
		playerOneGoal();
	}
		if (ballx < 0) {
		playerTwoGoal();
	}
}


function collisionDetection() {









if (ballx  < x1 + w1  && (bally  > y1 && bally  < y1 + h1)) {
	console.log("collision 1")
	collisionOne();
}


if ((ballx > x2 && ballx < x2+w2) && (bally > y2 && bally < y2 +h2)) {
	collisionTwo(); 
	// alert("OPAA")
	console.log("collision 2")
}















if (bally < 0  ||  bally > canvas.height) {
	collisionBorder();
}







}

function collisionOne() {


	ballSpeedx = Math.abs(ballSpeedx);	
	console.log(ballSpeedx)

}


function collisionTwo() {
	if (ballSpeedx > 0) {
	ballSpeedx = - ballSpeedx;
}
	console.log(ballSpeedx)
}


function collisionBorder() {
	ballSpeedy = -ballSpeedy;

}




setInterval(addLevel , 10000);

function addLevel() {

	if (ballSpeedx > 0) {
		ballSpeedx += 1;
	}
	else {
		ballSpeedx -= 1;
	}
		console.log("ADDED SPEED!" + ballSpeedx)
		speedlvl++;
	}

}









 
document.onkeydown = function(e) {
    switch (e.keyCode) {

        case 32:
            start();
            break;
    }
};


ctx.font = "30px arial";
ctx.fillStyle = "#2b2b2b";
ctx.textAlign = "center";
ctx.fillText("Press space to start/pause....", canvas.width/2, canvas.height/2); 

ctx.font = "15px arial";
ctx.fillStyle = "#1b1b1b";
ctx.textAlign = "center";
ctx.fillText("Press (S)(W) for first player to move and arrow keys for second. V to add speed level", canvas.width/2, canvas.height/2 + 75);

window.onload = function() {

  var ctx = canvas.getContext("2d");
  var img = document.getElementById("pong");
  ctx.drawImage(img, canvas.width - 700, 80);
};


ctx.font = "30px arial";
ctx.fillStyle = "#2b2b2b";
ctx.textAlign = "center";
ctx.fillText("Press space to start/pause....", canvas.width/2, canvas.height/2); 



ctx.font = "10px arial";
ctx.fillStyle = "#2b2b2b";
ctx.textAlign = "center";
ctx.fillText("By mamukinto", 35, canvas.height - 5); 
