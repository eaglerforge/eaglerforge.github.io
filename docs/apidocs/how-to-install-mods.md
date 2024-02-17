# How to install mods

1. Open the compiled client
2. click the "Mods" button in the main menu or the pause menu
3. click "Add New" to install a mod from a url or click "Upload" to upload a Mod

heres a example mod to test this out with:

url : https://raw.githubusercontent.com/eaglerforge/eaglerforge.github.io/main/docs/example.js

the code inside of the example mod :
```
function runCode() {
	if (document.pointerLockElement != null){//if pointerlock is enabled (the player is in game)
		ModAPI.displayToChat({msg: "hello"})
		ModAPI.displayToChat({msg: "welcome to eaglerforge!"})
	}
}
var intervalId = setInterval(runCode, 50);//run the code in a loop
```