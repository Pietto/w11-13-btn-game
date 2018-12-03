var click1 = 0
var click2 = 0
var click3 = 0

var button1= document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

button1.onclick = button1clicked;
button2.onclick = button2clicked;
button3.onclick = button3clicked;


function button1clicked() {
	click1 = click1 + 1;
	document.getElementById("button1").innerText = click1;						//click-counter

	document.getElementById("button1").style.backgroundColor = "red";			//change color to red
	document.getElementById("button2").style.backgroundColor = "green";
	document.getElementById("button3").style.backgroundColor = "green";
	document.getElementById("button1").disabled = true;							//prevents multiple clicks
	document.getElementById("button2").disabled = false;
	document.getElementById("button3").disabled = false;

	document.getElementById("tripleN").src="images/1.jpg";						//change image
	document.getElementById("div").className = "bg1";							//change background
}
function button2clicked() {
	click2 = click2 + 1;
	document.getElementById("button2").innerText = click2;						//click-counter

	document.getElementById("button2").style.backgroundColor = "red";			//change color to red
	document.getElementById("button1").style.backgroundColor = "green";
	document.getElementById("button3").style.backgroundColor = "green";
	document.getElementById("button1").disabled = false;						//prevents multiple clicks
	document.getElementById("button2").disabled = true;
	document.getElementById("button3").disabled = false;

	document.getElementById("tripleN").src="images/2.jpg";						//change image
	document.getElementById("div").className = "bg2";							//change background
}
function button3clicked() {
	click3 = click3 + 1;
	document.getElementById("button3").innerText = click3;						//click-counter

	document.getElementById("button3").style.backgroundColor = "red";			//change color to red
	document.getElementById("button1").style.backgroundColor = "green";
	document.getElementById("button2").style.backgroundColor = "green";
	document.getElementById("button1").disabled = false;						//prevents multiple clicks
	document.getElementById("button2").disabled = false;
	document.getElementById("button3").disabled = true;

	document.getElementById("tripleN").src="images/3.jpg";						//change image
	document.getElementById("div").className = "bg3";							//change background
}