var delay1 = 0
var delay1time = 100

var originaldelay = delay1
var originaldelaytime = delay1time

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

button1.onclick = s1button1clicked;
button2.onclick = s1button2clicked;
button3.onclick = s1button3clicked;


document.getElementById('button1').style.visibility = 'hidden';
document.getElementById('button3').style.visibility = 'hidden';


function s1button1clicked(){

}

function s1button2clicked(){
	document.getElementById('button2').style.visibility = 'hidden';
	document.getElementById("game-container").style.background = "url('img/scenes/scene-1/arrest-1.PNG')";
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-1/arrest-1.PNG')";}, delay1+=delay1time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-1/arrest-2.PNG')";}, delay1+=delay1time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-1/arrest-3.PNG')";}, delay1+=delay1time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-1/arrest-4.PNG')";}, delay1+=delay1time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-1/arrest-5.PNG')";}, delay1+=delay1time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-1/arrest-6.PNG')";}, delay1+=delay1time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-1/arrest-7.PNG')";}, delay1+=delay1time);
	
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-empty.png')";}, delay1+=delay1time);

	document.getElementById('button2').id= 'button2pt2';

	button2pt2.onclick = s2button2clicked;

	setTimeout(function() {document.getElementById('button2pt2').style.visibility = 'visible';}, delay1+=delay1time);

}

function s1button3clicked() {

}
function s2button2clicked() {
	delay2 = originaldelay
	delay2time = originaldelaytime
	document.getElementById('button2pt2').style.visibility = 'hidden';
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-1.PNG')";}, delay2+=delay2time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-2.PNG')";}, delay2+=delay2time);

	document.getElementById('button1').id= 'button1pt2';
	document.getElementById('button2pt2').id= 'button2pt02';
	document.getElementById('button3').id= 'button3pt2';

	setTimeout(function() {button1pt2.onclick = s02button1clicked;}, delay2+=delay2time);
	setTimeout(function() {button2pt02.onclick = s02button2clicked;}, delay2+=delay2time);
	setTimeout(function() {button3pt2.onclick = s02button3clicked;}, delay2+=delay2time);

	setTimeout(function() {document.getElementById('button1pt2').style.visibility = 'visible';}, delay2-=delay2time);
	setTimeout(function() {document.getElementById('button2pt02').style.visibility = 'visible';}, delay2);
	setTimeout(function() {document.getElementById('button3pt2').style.visibility = 'visible';}, delay2);
}


function s02button1clicked() {
	delay3 = originaldelay
	delay3time = originaldelaytime
	alert("wrong button son!")
}
function s02button2clicked() {
	delay3 = originaldelay
	delay3time = originaldelaytime
	alert("wrong button son!")
}
function s02button3clicked() {

	delay3 = originaldelay
	delay3time = originaldelaytime

	setTimeout(function() {document.getElementById('button1pt2').style.visibility = 'hidden';}, delay3+=delay3time);
	setTimeout(function() {document.getElementById('button2pt02').style.visibility = 'hidden';}, delay3);
	setTimeout(function() {document.getElementById('button3pt2').style.visibility = 'hidden';}, delay3);

	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-1.png')";}, delay3+=delay3time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-2.png')";}, delay3+=delay3time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-3.png')";}, delay3+=delay3time);	
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-4.png')";}, delay3+=delay3time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-5.png')";}, delay3+=delay3time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-6.png')";}, delay3+=delay3time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-6.5.png')";}, delay3+=delay3time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-7.png')";}, delay3+=delay3time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-8.png')";}, delay3+=delay3time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/defeat/defeat 1.0.png')";}, delay3+=(delay3time*2));
	setTimeout(function() {document.getElementById('button2pt02').style.visibility = 'visible';}, delay3);
}


//document.getElementById('button1').style.visibility = 'visible';
//document.getElementById('button3').style.visibility = 'block';   //??


//document.getElementById("game-container").style.background = "url('img/scenes/intro-officer-stick-s2.PNG')";

