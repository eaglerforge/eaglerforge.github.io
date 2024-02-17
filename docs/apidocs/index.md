# Mod API
The Mod API consists of a global JavaScript object on the window, called, very simply, `ModAPI`.


It has the following properties:
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
- `update()`
    - Force triggers a Mod API update.

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
- `freeMemory() : Integer`
- `maxMemory() : Integer`
- `totalMemory() : Integer`
- `openLink({url: String})` 
- `getClipboard() : String`
- `recSupported() : Boolean`
- `toggleRec() : Void`