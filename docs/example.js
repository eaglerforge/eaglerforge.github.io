function runCode() {
	if (document.pointerLockElement != null){//if pointerlock is enabled (the player is in game)
		ModAPI.displayToChat({msg: "hello"})
		ModAPI.displayToChat({msg: "welcome to eaglerforge!"})
	}
}
var intervalId = setInterval(runCode, 50);//run the code in a loop