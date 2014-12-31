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
	if(window.innerWidth >= "800") {
		document.getElementById('title').style.top="30px"
		document.getElementById('titletransparent').style.top="110px"
		document.getElementById('navbar').style.top="120px"
		document.getElementById('main').style.top="160px"
		document.getElementById('main').style.width=window.innerWidth-"150"+"px";
		document.getElementById('main').style.left="60px";
		document.getElementById('navbar').style.width=window.innerWidth-"200"+"px";
		document.getElementById('navbar').style.left="60px";
		document.getElementById('titletransparent').style.width=window.innerWidth-"120"+"px";
		document.getElementById('titletransparent').style.left="60px";
		document.getElementById('title').style.width=window.innerWidth-"220"+"px";
		document.getElementById('title').style.left="60px";
		document.getElementById('title').style.fontSize="50px";
		document.getElementById('navbar').style.fontSize="30px";
		document.getElementById('arrow').style.visibility = "visible";
	} else if(window.innerWidth <= "799") {
		if(window.innerWidth <= "499") {
			document.getElementById('title').style.top="0px"
			document.getElementById('titletransparent').style.top="80px"
			document.getElementById('navbar').style.top="90px"
			document.getElementById('main').style.top="130px"
			document.getElementById('main').style.width=window.innerWidth-"30"+"px";
			document.getElementById('main').style.left="0px";
			document.getElementById('navbar').style.width=window.innerWidth-"80"+"px";
			document.getElementById('navbar').style.left="0px";
			document.getElementById('titletransparent').style.width=window.innerWidth+"px";
			document.getElementById('titletransparent').style.left="0px";
			document.getElementById('title').style.width=window.innerWidth-"100"+"px";
			document.getElementById('title').style.left="0px";
			document.getElementById('title').style.fontSize="30px";
			document.getElementById('navbar').style.fontSize="10px";
			document.getElementById('arrow').style.visibility = "hidden";
		} else {
			document.getElementById('title').style.top="0px"
			document.getElementById('titletransparent').style.top="80px"
			document.getElementById('navbar').style.top="90px"
			document.getElementById('main').style.top="130px"
			document.getElementById('main').style.width=window.innerWidth-"30"+"px";
			document.getElementById('main').style.left="0px";
			document.getElementById('navbar').style.width=window.innerWidth-"80"+"px";
			document.getElementById('navbar').style.left="0px";
			document.getElementById('titletransparent').style.width=window.innerWidth+"px";
			document.getElementById('titletransparent').style.left="0px";
			document.getElementById('title').style.width=window.innerWidth-"100"+"px";
			document.getElementById('title').style.left="0px";
			document.getElementById('title').style.fontSize="40px";
			document.getElementById('navbar').style.fontSize="20px";
			document.getElementById('arrow').style.visibility = "hidden";
		}
	}
}

window.onresize = function(event) {
	if(window.innerWidth >= "800") {
		document.getElementById('title').style.top="30px"
		document.getElementById('titletransparent').style.top="110px"
		document.getElementById('navbar').style.top="120px"
		document.getElementById('main').style.top="160px"
		document.getElementById('main').style.width=window.innerWidth-"150"+"px";
		document.getElementById('main').style.left="60px";
		document.getElementById('navbar').style.width=window.innerWidth-"200"+"px";
		document.getElementById('navbar').style.left="60px";
		document.getElementById('titletransparent').style.width=window.innerWidth-"120"+"px";
		document.getElementById('titletransparent').style.left="60px";
		document.getElementById('title').style.width=window.innerWidth-"220"+"px";
		document.getElementById('title').style.left="60px";
		document.getElementById('title').style.fontSize="50px";
		document.getElementById('navbar').style.fontSize="30px";
		document.getElementById('arrow').style.visibility = "visible";
	} else if(window.innerWidth <= "799") {
		if(window.innerWidth <= "499") {
			document.getElementById('title').style.top="0px"
			document.getElementById('titletransparent').style.top="80px"
			document.getElementById('navbar').style.top="90px"
			document.getElementById('main').style.top="130px"
			document.getElementById('main').style.width=window.innerWidth-"30"+"px";
			document.getElementById('main').style.left="0px";
			document.getElementById('navbar').style.width=window.innerWidth-"80"+"px";
			document.getElementById('navbar').style.left="0px";
			document.getElementById('titletransparent').style.width=window.innerWidth+"px";
			document.getElementById('titletransparent').style.left="0px";
			document.getElementById('title').style.width=window.innerWidth-"100"+"px";
			document.getElementById('title').style.left="0px";
			document.getElementById('title').style.fontSize="30px";
			document.getElementById('navbar').style.fontSize="10px";
			document.getElementById('arrow').style.visibility = "hidden";
		} else {
			document.getElementById('title').style.top="0px"
			document.getElementById('titletransparent').style.top="80px"
			document.getElementById('navbar').style.top="90px"
			document.getElementById('main').style.top="130px"
			document.getElementById('main').style.width=window.innerWidth-"30"+"px";
			document.getElementById('main').style.left="0px";
			document.getElementById('navbar').style.width=window.innerWidth-"80"+"px";
			document.getElementById('navbar').style.left="0px";
			document.getElementById('titletransparent').style.width=window.innerWidth+"px";
			document.getElementById('titletransparent').style.left="0px";
			document.getElementById('title').style.width=window.innerWidth-"100"+"px";
			document.getElementById('title').style.left="0px";
			document.getElementById('title').style.fontSize="40px";
			document.getElementById('navbar').style.fontSize="20px";
			document.getElementById('arrow').style.visibility = "hidden";
		}
	}
}
