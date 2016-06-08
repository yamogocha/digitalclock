

function updateTime(){
	var clock = new Date()
	var hours = clock.getHours()
	var minutes = clock.getMinutes()
	var seconds = clock.getSeconds()
	var ap = "AM"

	if(hours>12){
		ap = "PM"
		hours -= 12
	}
	if(hours<10){
		hours = "0"+hours
	}
	if(minutes<10){
		minutes = "0"+minutes
	}
	if(seconds<10){
		seconds = "0"+seconds
	}

	var formattedTime = hours+":"+minutes+":"+seconds+" "+ap
	document.getElementById('clock').innerHTML=formattedTime
}

function showTime(){
	var myTimer
	myTimer = setInterval(updateTime, 1000)

}

var display = document.getElementById('clock')
display.addEventListener('onload', showTime())