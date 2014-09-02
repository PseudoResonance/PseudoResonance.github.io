			//Global Variables
			var i = 0;
			var i2 = 0;
			var speed = 1200;
			var ScreenX = window.screen.availWidth;
			//Need +40 on the Y axis for true screen res.
			var ScreenY = window.screen.availHeight + 40;
			//Event Listeners
			document.getElementById("spoiler").addEventListener("click", joinCounter);
			document.getElementById("contactUs").addEventListener("mouseover", showEmail);
			document.getElementById("hideEmail").addEventListener("click", hideEmail);
			//Code
			function joinCounter(){
				if(i %2 == 0){
					document.getElementById("spoiler").innerHTML='<p>BeaconPride is a growing Minecraft server, with a great community, and some awesome completely custom plugins!<br /> <b>Click here to hide join information!</b></p>';
					$("#spoilerClosed").slideToggle(speed);
				}else{
					document.getElementById("spoiler").innerHTML='<p>BeaconPride is a growing Minecraft server, with a great community, and some awesome completely custom plugins!<br /> <b>Click here for join information!</b></p>';
					$("#spoilerClosed").slideToggle(speed);
				}
				i++;
				if(i == 10){
					i=0;
				}
				console.log("Variable 'i' is equal to "+ i+".");
			}
			function showEmail(){
				$('#Email').slideDown(speed);
			}
			function hideEmail(){
				$('#Email').slideUp(speed);
			}
			function copyToClipboard(text) {
				window.prompt("Please copy this text to your clipboard with Ctrl+C.", text);
			}
			$(document).ready(function(){
				if(ScreenX != 1920 && ScreenY != 1080){
					if(ScreenX == 1440 && ScreenY == 900){
						$("#Email").css("paddingRight","15px");
					}
				}
      });
