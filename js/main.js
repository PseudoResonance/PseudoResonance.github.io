var degrees = 0;
function rotateAnimation(el) {
	var elem = document.getElementById(el);
	if(navigator.userAgent.match("Chrome")) {
		elem.stype.WebkitTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Firefox")) {
		elem.style.MozTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("MSIE")) {
		elem.style.msTransform = "rotate("+degrees+"deg)";
	} else if(navigator.userAgent.match("Opera")) {
		elem.style.OTransform = "rotate("+degrees+"deg)";
	} else if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		document["arrow"].src = "";
	} else {
		elem.style.transform = "rotate("+degrees+"deg)";
	}
	document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
}
window.onload = pre_loader;
function pre_loader() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		document.getElementById('main').style.width=window.innerWidth-"30"+"px";
	} else {
		document.getElementById('main').style.width=window.innerWidth-"150"+"px";
		document.getElementById('main').style.left="60px";
	}
}

window.onresize = function(event) {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		document.getElementById('main').style.width=window.innerWidth-"30"+"px";
	} else {
		document.getElementById('main').style.width=window.innerWidth-"80"+"px";
	}
}
