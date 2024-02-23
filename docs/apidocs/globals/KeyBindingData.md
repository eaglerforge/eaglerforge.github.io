# KeyBindingData
Represents a in-game keybind.

Has the following properties:
- `keyCode: Integer`
- `pressTime: Integer`
- `pressed: Boolean`
- `keyDescription: String` [read-only]
- `keyCategory: String` [read-only]

Has the following methods:
- `isKeyDown() : Boolean`
- `getKeyCategory() : String`
- `isPressed() : Boolean`
- `unpressKey() : void`
- `getKeyDescription() : String`
- `getKeyCodeDefault() : Integer`
- `getKeyCode() : Integer`