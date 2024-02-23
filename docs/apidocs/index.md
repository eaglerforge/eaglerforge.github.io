# Mod API
The Mod API consists of a global JavaScript object on the window, called, very simply, `ModAPI`.


It has the following properties:
- `player: LocalPlayerData`
    - A [`LocalPlayerData`](globals/LocalPlayerData.md) made from `EntityPlayerSP`. Regenerated every time the `update` event is called.
- `settings: GameSettingsData`
    - A [`GameSettingsData`](globals/GameSettingsData.md) made from `GameSettings`. Regenerated every time the `update` event is called.
- `items: ItemData{}`
    - A [`ItemData`](globals/ItemData.md) dictionary of all item types, and block-item types. [Auto]
- `blocks: BlockData{}`
    - A [`BlockData`](globals/BlockData.md) dictionary of all block types. [Auto]
- `materials: MaterialData{}`
    - A [`MaterialData`](globals/MaterialData.md) dictionary of all the block materials. [Auto]
- `enchantments: EnchantmentData{}`
    - An [`EnchantmentData`](globals/EnchantmentData.md) dictionary of all the in-game enchantments. [Auto]
- `mcinstance: Object`
    - This is the `Minecraft` instance exposed to JavaScript. It has no wrapping, and so many properties will be illegible. To use it, I would recommend editing the `build.gradle` in the workspace to set `minifying: false;` [Auto]
- `version: String`
    - The version of the EaglerForge.
- `clientBrand: String`
    - The brand of the Eaglercraft client, taken from `ClientBrandRetriever.java`


It has the following methods:
- `addEventListener(eventName: String, callback: Function) : void`
    - Documentation [here](events/addEventListener.md)
- `require(componentName: String)`
    - Documentation [here](globals/require.md)
- `displayToChat({msg: String})`
    - Displays client-side message to user's ingame chat gui.
- `uwuify({string: String})`
    - uwuifys your string...
- `clickMouse()`
    - Triggers a left click ingame.
- `rightClickMouse()`
    - Triggers a right click ingame.
- `getFPS()`
  - returns the current fps
- `getdisplayHeight()`
  - returns screen height
- `getdisplayWidth()` 
  - returns screen width
- `drawStringWithShadow({msg: String, x: Integer, y: Integer, color: Integer})` 
  - draws your string to screen and needs to be ran when the `drawhud` event is called. the color parameter needs be hex but # is replaced with 0x
- `drawString({msg: String, x: Integer, y: Integer, color: Integer})`
  - same as drawStringWithShadow but dosnt draw the shadow
- `drawRect({left: Integer, top: Integer, right: Integer, bottom: Integer, color: Integer})`
  - draws a rect to screen and needs to be ran when the `drawhud` event is called. the color parameter needs be hex but # is replaced with 0x
- `update()`
    - Force triggers a Mod API update.

### Passing 'Ref' objects
Eg: `setCurrentItemOrArmor({slotIn: Integer, itemStack: ItemStackRef}) : void`
This method's itemStack parameter uses an 'ItemStackRef'. 'Refs' are short for 'references', as they are the root reference to a java object, not just a data wrapper. You can get a ref from a Data by using `getRef()`, as specified [here](globals/Data.md).

### Using non-auto properties
In order to use non-auto properties like `ModAPI.player` or `ModAPI.settings`, they must be [required](globals/require.md)

### Triggering data updates (`reload()`)
To trigger the game to read your updated values, call the `reload()` method on the object.

Eg: 
```
ModAPI.player.motionY += 1;
ModAPI.player.reload();
```

Frequent calls to `reload()` may cause lag, so try to limit them.

# Logger API
Allows you to access the Log4J library from javascript. you can access it from `ModAPI.logger.(method)`.

it has the following methods:

- `loginfo({string: String})`
- `logerror({string: String})`
- `logdebug({string: String})`
- `logwarn({string: String})`
- `logfatal({string: String})` 
- `logtrace({string: String})`

# Platform API
Allows you to shrimply access EagRuntime from javascript. you can access it from `ModAPI.platform.(method)`.

it has the following methods:

- `isOfflineDownload() : Boolean`
  - turns true if the client that loaded the mod is an offline download and turns false if the client is a website (using web folder)
- `freeMemory() : Integer`
  - returns free memory 
- `maxMemory() : Integer`
  - returns max memory 
- `totalMemory() : Integer`
  - returns total memory 
- `openLink({url: String})` 
  - opens a link in a new tab 
- `getClipboard() : String`
  - gets the user's clipboard 
- `recSupported() : Boolean`
  - checks if recording the screen is supported 
- `toggleRec() : Void`
  - toggles the screen recorder 
- `getUserAgentString() : Void`
  - returns the UserAgent
- `getGLRenderer() : Void`
  - self explanatory
- `getGLVersion() : Void`
  - returns the GL version


