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
	} else {
		elem.style.transform = "rotate("+degrees+"deg)";
	}
	document.getElementById("status").innerHTML = "rotate("+degrees+"deg)";
}
window.onload = pre_loader;
function pre_loader() {
	javascript:document.getElementById('main').style.visibility='hidden';
	javascript:document.getElementById('main').style.opacity=0;
}
