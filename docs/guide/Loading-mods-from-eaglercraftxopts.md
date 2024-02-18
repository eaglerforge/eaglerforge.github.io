# Loading mods from eaglercraftxopts
you can load mods from eaglercraftxopts by simply adding `Mods: ["your mod.js"],` to eaglercraftxopts like this example :
```javascript
// %%%%%%%%% launch options %%%%%%%%%%%%

window.eaglercraftXOpts = {
	container: "game_frame",
	worldsDB: "worlds",
	Mods: ["example.js", "an other mod.js"],
	relays: [
		{ addr: "wss://relay.deev.is/", comment: "lax1dude relay #1", primary: relayId == 0 },
		{ addr: "wss://relay.lax1dude.net/", comment: "lax1dude relay #2", primary: relayId == 1 },
		{ addr: "wss://relay.shhnowisnottheti.me/", comment: "ayunami relay #1", primary: relayId == 2 }
	]
};

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
```
