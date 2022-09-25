window.onload = setInterval(function() {
	let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
	let day = today.getDate();
	let hour = today.getHours();
	let min = today.getMinutes();
	let sec = today.getSeconds();
	am_pm = "AM";

	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hour = 12;
		am_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;
	month = month < 10 ? "0" + month : month;
	day = day < 10 ? "0" + day : day;

	let currentDate = [year, month, day].join("-")
	let currentTime = hour + ":"
			+ min + ":" + sec + " " + am_pm;

	document.getElementById("app").innerHTML = currentTime;
    document.getElementById("app2").innerHTML = currentDate;
}, 1000)