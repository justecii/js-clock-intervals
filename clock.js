document.addEventListener('DOMContentLoaded', function(){
 
	var el = document.getElementById("second");
	var dos = document.getElementById("minute");
	var ven = document.getElementById("hour");
	var degrees = 0;
	var minDegrees = 0;
	var hrDegrees = 0;

	var secHand = setInterval(function(){
		degrees= degrees+6;
		el.style.transform = "rotate(" + degrees + "deg)";
	},1000);

	var minHand = setInterval(function(){
		minDegrees= minDegrees+0.1;
		dos.style.transform = "rotate(" + minDegrees + "deg)";
	}, 1000);

	var hrHand = setInterval(function(){
		hrDegrees= hrDegrees+0.00833333333;
		ven.style.transform = "rotate(" + hrDegrees + "deg)";
	}, 1000);



});


