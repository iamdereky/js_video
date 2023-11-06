var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("video");
	video.autoplay = false;
	video.loop = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#slider").value = video.volume * 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	let newSpeed = video.playbackRate - (.1 * video.playbackRate);
	if (newSpeed > 0) {
		video.playbackRate = newSpeed;
	}
	console.log("The new video speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	let newSpeed = video.playbackRate + (.1 + video.playbackRate);
	if (newSpeed < 1) {
		video.playbackRate = newSpeed;
	}
	console.log("The new video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	let newTime = video.currentTime + 10;
	if (newTime > video.duration) {
		video.currentTime = 0;
	}
	else {
		video = newTime;
	}
	console.log("The new video time is " + video.currentTime);	
});

