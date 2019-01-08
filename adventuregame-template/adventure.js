var delay1 = 0
var delay1time = 2500

var originaldelay = delay1
var originaldelaytime = delay1time

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

button1.onclick = s1button1clicked;
button2.onclick = introlevel;
button3.onclick = s1button3clicked;


document.getElementById('button1').style.visibility = 'hidden';
document.getElementById('button3').style.visibility = 'hidden';


function s1button1clicked(){

}

function introlevel(){
	document.getElementById('button2').style.visibility = 'hidden';
	document.getElementById("game-container").style.background = "url('img/scenes/scene-1/arrest-1.PNG')";
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-1/arrest-1.PNG')";}, delay1);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-1/arrest-2.PNG')";}, delay1+=delay1time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-1/arrest-3.PNG')";}, delay1+=delay1time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-1/arrest-4.PNG')";}, delay1+=delay1time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-1/arrest-5.PNG')";}, delay1+=delay1time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-1/arrest-6.PNG')";}, delay1+=delay1time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-1/arrest-7.PNG')";}, delay1+=delay1time);
	
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-empty.png')";}, delay1+=delay1time);

	document.getElementById('button2').id= 'button2pt2';

	button2pt2.onclick = courtlevel;

	setTimeout(function() {document.getElementById('button2pt2').style.visibility = 'visible';}, delay1+=delay1time);

}

function s1button3clicked() {

}
function courtlevel() {
	delay2 = originaldelay
	delay2time = originaldelaytime
	document.getElementById('button2pt2').style.visibility = 'hidden';
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-1.PNG')";}, delay2);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-2.PNG')";}, delay2+=delay2time);

	document.getElementById('button1').id= 'button1pt2';
	document.getElementById('button2pt2').id= 'button2pt02';
	document.getElementById('button3').id= 'button3pt2';

	setTimeout(function() {button1pt2.onclick = goprison;}, delay2+=delay2time);
	setTimeout(function() {button2pt02.onclick = stillgoprison;}, delay2+=delay2time);
	setTimeout(function() {button3pt2.onclick = goshooting;}, delay2+=delay2time);

	setTimeout(function() {document.getElementById('button1pt2').style.visibility = 'visible';}, delay2-=delay2time);
	setTimeout(function() {document.getElementById('button2pt02').style.visibility = 'visible';}, delay2);
	setTimeout(function() {document.getElementById('button3pt2').style.visibility = 'visible';}, delay2);
}


function goprison() {
	delay3 = originaldelay
	delay3time = originaldelaytime

	document.getElementById('button1pt2').style.visibility = 'hidden';
	document.getElementById('button2pt02').style.visibility = 'hidden';
	document.getElementById('button3pt2').style.visibility = 'hidden';
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-prison.png')";}, 0);
	setTimeout(function() {prisonlevel();}, delay3+=delay3time);
}
function stillgoprison() {
	delay3 = originaldelay
	delay3time = originaldelaytime

	document.getElementById('button1pt2').style.visibility = 'hidden';
	document.getElementById('button2pt02').style.visibility = 'hidden';
	document.getElementById('button3pt2').style.visibility = 'hidden';

	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-stillprison.png')";}, 0);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-stillprison-1.png')";}, delay3+=delay3time);

	setTimeout(function() {prisonlevel();}, delay3+=delay3time);
}
function goshooting() {

	delay3 = originaldelay
	delay3time = originaldelaytime

	document.getElementById('button1pt2').style.visibility = 'hidden';
	document.getElementById('button2pt02').style.visibility = 'hidden';
	document.getElementById('button3pt2').style.visibility = 'hidden';
																									
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-1.png')";}, 0);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-2.png')";}, delay3+=delay3time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-3.png')";}, delay3+=delay3time);	
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-4.png')";}, delay3+=delay3time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-5.png')";}, delay3+=delay3time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-6.png')";}, delay3+=delay3time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-6.5.png')";}, delay3+=delay3time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-7.png')";}, delay3+=delay3time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-2/court-choice-fight-8.png')";}, delay3+=delay3time);
	setTimeout(function() {defeat();}, delay3+=(delay3time*2));
}

function prisonlevel() {
	delay4 = originaldelay
	delay4time = originaldelaytime
	document.getElementById("game-container").style.background = "url('img/scenes/scene-3/prison-1.png')";
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-3/prison-1-1.png')";}, delay4);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-3/prison-1-2.png')";}, delay4+=delay4time);

	document.getElementById('button1pt2').id= 'btn1prison';
	document.getElementById('button2pt02').id= 'btn2prison';
	document.getElementById('button3pt2').id= 'btn3prison';

	setTimeout(function() {document.getElementById('btn1prison').style.visibility = 'visible';}, delay4);
	setTimeout(function() {document.getElementById('btn2prison').style.visibility = 'visible';}, delay4);
	setTimeout(function() {document.getElementById('btn3prison').style.visibility = 'visible';}, delay4);

	btn1prison.onclick = 
	btn2prison.onclick = 
	btn3prison.onclick = hguard
}

function hguard() {
	delay5 = originaldelay
	delay5time = originaldelaytime

	document.getElementById('btn1prison').style.visibility = 'hidden';
	document.getElementById('btn2prison').style.visibility = 'hidden';
	document.getElementById('btn3prison').style.visibility = 'hidden'; 

	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-3/hguard/prison-guard-1.png')";}, delay5);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-3/hguard/prison-guard-2.png')";}, delay5+=delay5time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-3/hguard/prison-guard-3.png')";}, delay5+=delay5time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-3/hguard/prison-guard-4.png')";}, delay5+=delay5time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-3/hguard/prison-guard-5.png')";}, delay5+=delay5time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-3/hguard/prison-guard-6.png')";}, delay5+=delay5time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-3/hguard/prison-guard-7.png')";}, delay5+=delay5time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-3/hguard/prison-guard-8.png')";}, delay5+=delay5time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-3/hguard/prison-guard-9.png')";}, delay5+=delay5time);
	setTimeout(function() {document.getElementById("game-container").style.background = "url('img/scenes/scene-3/hguard/prison-guard-10.png')";}, delay5+=delay5time);

	document.getElementById('btn1prison').id= 'btn1hguard';
	document.getElementById('btn2prison').id= 'btn2hguard';
	document.getElementById('btn3prison').id= 'btn3hguard';

	btn1hguard.onclick = btn1hguard
	btn2hguard.onclick = btn2hguard
	btn3hguard.onclick = btn3hguard

	document.getElementById('btn1hguard').style.visibility = 'visible';
	document.getElementById('btn2hguard').style.visibility = 'visible';
	document.getElementById('btn3hguard').style.visibility = 'visible';
}





	











function defeat() {
	document.getElementById("game-container").style.background = "url('img/scenes/defeat/defeat 1.0.png')";
	document.getElementById("button2pt02").style.background = "url('img/buttons/defeat-button.png')";
	document.getElementById('button2pt02').style.visibility = 'visible';
}


//document.getElementById('button1').style.visibility = 'visible';
//document.getElementById('button3').style.visibility = 'block';   //??


//document.getElementById("game-container").style.background = "url('img/scenes/intro-officer-stick-s2.PNG')";



