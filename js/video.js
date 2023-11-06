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
	if (video.paused) {
		video.play();
		document.querySelector("#slider").value = video.volume * 100;
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	}
});

document.querySelector("#pause").addEventListener("click", function() {
	if (!video.paused) {
		video.pause();
	}
});

document.querySelector("#slower").addEventListener("click", function() {
	let newSpeed = video.playbackRate - .1;
	if (newSpeed > 0) {
		video.playbackRate = newSpeed;
	}
	console.log("The new video speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	let newSpeed = video.playbackRate + .1;
	video.playbackRate = newSpeed;
	console.log("The new video speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	let newTime = video.currentTime + 10;
	if (newTime > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = newTime;
	}
	console.log("The new video time is " + video.currentTime);	
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	if (video.muted) {
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("video").classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("video").classList.remove("oldSchool");
});