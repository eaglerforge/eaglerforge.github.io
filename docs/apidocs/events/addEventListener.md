# ModAPI.addEventListener(String eventName, Function callback)
This method is used to add event listeners to the event name specified.

## Arguments:

### (String) eventName
This argument is used to specify internally which listener array to add the callback to.
It has the following valid values:

- `event`
    Called when any event is called. Passes an object with properties:
    - `event`: String representing the type of event being fired.
    - `data`: Object representing the original arguments to be passed to the callback.

- `gui` Called when the Mod Manager GUI shows up. No arguments passed to callback.

- `load` Called when all mods have finished loading.

- `update` Called every client tick. No arguments passed to callback.

- `frame` Called every frame

- `render` Called every time a frame is done rendering. Passes an object with properties:
      - `partialTicks`: The partial ticks into the frame. Eg, if the frame was rendered when the in-game clock hit a quarter of a tick, this would be 0.25.

- `sendchatmessage`
    Called just before the player sends a chat message. Passes an object with properties:
    - `message`: String representing the chat message.
    - `preventDefault:` Boolean representing whether or not to cancel processing the chat message. Default is `false`.

- `postmotionupdate`
    Called after player motion is updated. No arguments passed to callback.

- `motionupdate`
    Called on motion update.
    - `preventDefault`: Boolean representing whether or not to cancel sending motion updates to the server.

- `premotionupdate`
    Called before player motion is updated. Passes an object with properties:
    - `yaw`: Number representing the player's yaw rotation.
    - `pitch`: Number representing the player's pitch rotation.
    - `onGround`: Boolean representing whether the player is on ground or not.

- `key`
    Called when a special keypress is detected. ie: not `esc` or `open chat`, like `f3` or the letter `J`.
    Passes an object with properties:
    - `key`: Integer representing the LWJGL key code.
    - `preventDefault`: Boolean representing whether or not to prevent the default action for this key (if any).

- `drawhud` Called when the hud is drawing. to make the methods that start with "draw" work you need to run them inside this event.
Eg: 
```
ModAPI.addEventListener("drawhud", () => {
    ModAPI.drawStringWithShadow({msg: "your text", x: 0, y: 0, color: -1}) // -1 is white
})
```

### (Function) Callback
The function to call when this event fires.

# lwjgl key codes for the key event :
Note: KEY_RETURN is the enter key

|Code                                                                                                                   |Key                                                                      |
|-----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
|0                                                                                                                      |KEY_NONE                                                                 |
|1                                                                                                                      |KEY_ESCAPE                                                               |
|2                                                                                                                      |KEY_1                                                                    |
|3                                                                                                                      |KEY_2                                                                    |
|4                                                                                                                      |KEY_3                                                                    |
|5                                                                                                                      |KEY_4                                                                    |
|6                                                                                                                      |KEY_5                                                                    |
|7                                                                                                                      |KEY_6                                                                    |
|8                                                                                                                      |KEY_7                                                                    |
|9                                                                                                                      |KEY_8                                                                    |
|10                                                                                                                     |KEY_9                                                                    |
|11                                                                                                                     |KEY_0                                                                    |
|12                                                                                                                     |KEY_MINUS                                                                |
|13                                                                                                                     |KEY_EQUALS                                                               |
|14                                                                                                                     |KEY_BACK                                                                 |
|15                                                                                                                     |KEY_TAB                                                                  |
|16                                                                                                                     |KEY_Q                                                                    |
|17                                                                                                                     |KEY_W                                                                    |
|18                                                                                                                     |KEY_E                                                                    |
|19                                                                                                                     |KEY_R                                                                    |
|20                                                                                                                     |KEY_T                                                                    |
|21                                                                                                                     |KEY_Y                                                                    |
|22                                                                                                                     |KEY_U                                                                    |
|23                                                                                                                     |KEY_I                                                                    |
|24                                                                                                                     |KEY_O                                                                    |
|25                                                                                                                     |KEY_P                                                                    |
|26                                                                                                                     |KEY_LBRACKET                                                             |
|27                                                                                                                     |KEY_RBRACKET                                                             |
|28                                                                                                                     |KEY_RETURN                                                               |
|29                                                                                                                     |KEY_LCONTROL                                                             |
|30                                                                                                                     |KEY_A                                                                    |
|31                                                                                                                     |KEY_S                                                                    |
|32                                                                                                                     |KEY_D                                                                    |
|33                                                                                                                     |KEY_F                                                                    |
|34                                                                                                                     |KEY_G                                                                    |
|35                                                                                                                     |KEY_H                                                                    |
|36                                                                                                                     |KEY_J                                                                    |
|37                                                                                                                     |KEY_K                                                                    |
|38                                                                                                                     |KEY_L                                                                    |
|39                                                                                                                     |KEY_SEMICOLON                                                            |
|40                                                                                                                     |KEY_APOSTROPHE                                                           |
|41                                                                                                                     |KEY_GRAVE                                                                |
|42                                                                                                                     |KEY_LSHIFT                                                               |
|43                                                                                                                     |KEY_BACKSLASH                                                            |
|44                                                                                                                     |KEY_Z                                                                    |
|45                                                                                                                     |KEY_X                                                                    |
|46                                                                                                                     |KEY_C                                                                    |
|47                                                                                                                     |KEY_V                                                                    |
|48                                                                                                                     |KEY_B                                                                    |
|49                                                                                                                     |KEY_N                                                                    |
|50                                                                                                                     |KEY_M                                                                    |
|51                                                                                                                     |KEY_COMMA                                                                |
|52                                                                                                                     |KEY_PERIOD                                                               |
|53                                                                                                                     |KEY_SLASH                                                                |
|54                                                                                                                     |KEY_RSHIFT                                                               |
|55                                                                                                                     |KEY_MULTIPLY                                                             |
|56                                                                                                                     |KEY_LMENU                                                                |
|57                                                                                                                     |KEY_SPACE                                                                |
|58                                                                                                                     |KEY_CAPITAL                                                              |
|59                                                                                                                     |KEY_F1                                                                   |
|60                                                                                                                     |KEY_F2                                                                   |
|61                                                                                                                     |KEY_F3                                                                   |
|62                                                                                                                     |KEY_F4                                                                   |
|63                                                                                                                     |KEY_F5                                                                   |
|64                                                                                                                     |KEY_F6                                                                   |
|65                                                                                                                     |KEY_F7                                                                   |
|66                                                                                                                     |KEY_F8                                                                   |
|67                                                                                                                     |KEY_F9                                                                   |
|68                                                                                                                     |KEY_F10                                                                  |
|69                                                                                                                     |KEY_NUMLOCK                                                              |
|70                                                                                                                     |KEY_SCROLL                                                               |
|71                                                                                                                     |KEY_NUMPAD7                                                              |
|72                                                                                                                     |KEY_NUMPAD8                                                              |
|73                                                                                                                     |KEY_NUMPAD9                                                              |
|74                                                                                                                     |KEY_SUBTRACT                                                             |
|75                                                                                                                     |KEY_NUMPAD4                                                              |
|76                                                                                                                     |KEY_NUMPAD5                                                              |
|77                                                                                                                     |KEY_NUMPAD6                                                              |
|78                                                                                                                     |KEY_ADD                                                                  |
|79                                                                                                                     |KEY_NUMPAD1                                                              |
|80                                                                                                                     |KEY_NUMPAD2                                                              |
|81                                                                                                                     |KEY_NUMPAD3                                                              |
|82                                                                                                                     |KEY_NUMPAD0                                                              |
|83                                                                                                                     |KEY_DECIMAL                                                              |
|84                                                                                                                     |                                                                         |
|85                                                                                                                     |                                                                         |
|86                                                                                                                     |                                                                         |
|87                                                                                                                     |KEY_F11                                                                  |
|88                                                                                                                     |KEY_F12                                                                  |
|89                                                                                                                     |                                                                         |
|90                                                                                                                     |                                                                         |
|91                                                                                                                     |                                                                         |
|92                                                                                                                     |                                                                         |
|93                                                                                                                     |                                                                         |
|94                                                                                                                     |                                                                         |
|95                                                                                                                     |                                                                         |
|96                                                                                                                     |                                                                         |
|97                                                                                                                     |                                                                         |
|98                                                                                                                     |                                                                         |
|99                                                                                                                     |                                                                         |
|100                                                                                                                    |KEY_F13                                                                  |
|101                                                                                                                    |KEY_F14                                                                  |
|102                                                                                                                    |KEY_F15                                                                  |
|103                                                                                                                    |KEY_F16                                                                  |
|104                                                                                                                    |KEY_F17                                                                  |
|105                                                                                                                    |KEY_F18                                                                  |
|106                                                                                                                    |                                                                         |
|107                                                                                                                    |                                                                         |
|108                                                                                                                    |                                                                         |
|109                                                                                                                    |                                                                         |
|110                                                                                                                    |                                                                         |
|111                                                                                                                    |                                                                         |
|112                                                                                                                    |KEY_KANA                                                                 |
|113                                                                                                                    |KEY_F19                                                                  |
|114                                                                                                                    |                                                                         |
|115                                                                                                                    |                                                                         |
|116                                                                                                                    |                                                                         |
|117                                                                                                                    |                                                                         |
|118                                                                                                                    |                                                                         |
|119                                                                                                                    |                                                                         |
|120                                                                                                                    |                                                                         |
|121                                                                                                                    |KEY_CONVERT                                                              |
|122                                                                                                                    |                                                                         |
|123                                                                                                                    |KEY_NOCONVERT                                                            |
|124                                                                                                                    |                                                                         |
|125                                                                                                                    |KEY_YEN                                                                  |
|126                                                                                                                    |                                                                         |
|127                                                                                                                    |                                                                         |
|128                                                                                                                    |                                                                         |
|129                                                                                                                    |                                                                         |
|130                                                                                                                    |                                                                         |
|131                                                                                                                    |                                                                         |
|132                                                                                                                    |                                                                         |
|133                                                                                                                    |                                                                         |
|134                                                                                                                    |                                                                         |
|135                                                                                                                    |                                                                         |
|136                                                                                                                    |                                                                         |
|137                                                                                                                    |                                                                         |
|138                                                                                                                    |                                                                         |
|139                                                                                                                    |                                                                         |
|140                                                                                                                    |                                                                         |
|141                                                                                                                    |KEY_NUMPADEQUALS                                                         |
|142                                                                                                                    |                                                                         |
|143                                                                                                                    |                                                                         |
|144                                                                                                                    |KEY_CIRCUMFLEX                                                           |
|145                                                                                                                    |KEY_AT                                                                   |
|146                                                                                                                    |KEY_COLON                                                                |
|147                                                                                                                    |KEY_UNDERLINE                                                            |
|148                                                                                                                    |KEY_KANJI                                                                |
|149                                                                                                                    |KEY_STOP                                                                 |
|150                                                                                                                    |KEY_AX                                                                   |
|151                                                                                                                    |KEY_UNLABELED                                                            |
|152                                                                                                                    |                                                                         |
|153                                                                                                                    |                                                                         |
|154                                                                                                                    |                                                                         |
|155                                                                                                                    |                                                                         |
|156                                                                                                                    |KEY_NUMPADENTER                                                          |
|157                                                                                                                    |KEY_RCONTROL                                                             |
|158                                                                                                                    |                                                                         |
|159                                                                                                                    |                                                                         |
|160                                                                                                                    |                                                                         |
|161                                                                                                                    |                                                                         |
|162                                                                                                                    |                                                                         |
|163                                                                                                                    |                                                                         |
|164                                                                                                                    |                                                                         |
|165                                                                                                                    |                                                                         |
|166                                                                                                                    |                                                                         |
|167                                                                                                                    |KEY_SECTION                                                              |
|168                                                                                                                    |                                                                         |
|169                                                                                                                    |                                                                         |
|170                                                                                                                    |                                                                         |
|171                                                                                                                    |                                                                         |
|172                                                                                                                    |                                                                         |
|173                                                                                                                    |                                                                         |
|174                                                                                                                    |                                                                         |
|175                                                                                                                    |                                                                         |
|176                                                                                                                    |                                                                         |
|177                                                                                                                    |                                                                         |
|178                                                                                                                    |                                                                         |
|179                                                                                                                    |KEY_NUMPADCOMMA                                                          |
|180                                                                                                                    |                                                                         |
|181                                                                                                                    |KEY_DIVIDE                                                               |
|182                                                                                                                    |                                                                         |
|183                                                                                                                    |KEY_SYSRQ                                                                |
|184                                                                                                                    |KEY_RMENU                                                                |
|185                                                                                                                    |                                                                         |
|186                                                                                                                    |                                                                         |
|187                                                                                                                    |                                                                         |
|188                                                                                                                    |                                                                         |
|189                                                                                                                    |                                                                         |
|190                                                                                                                    |                                                                         |
|191                                                                                                                    |                                                                         |
|192                                                                                                                    |                                                                         |
|193                                                                                                                    |                                                                         |
|194                                                                                                                    |                                                                         |
|195                                                                                                                    |                                                                         |
|196                                                                                                                    |KEY_FUNCTION                                                             |
|197                                                                                                                    |KEY_PAUSE                                                                |
|198                                                                                                                    |                                                                         |
|199                                                                                                                    |KEY_HOME                                                                 |
|200                                                                                                                    |KEY_UP                                                                   |
|201                                                                                                                    |KEY_PRIOR                                                                |
|202                                                                                                                    |                                                                         |
|203                                                                                                                    |KEY_LEFT                                                                 |
|204                                                                                                                    |                                                                         |
|205                                                                                                                    |KEY_RIGHT                                                                |
|206                                                                                                                    |                                                                         |
|207                                                                                                                    |KEY_END                                                                  |
|208                                                                                                                    |KEY_DOWN                                                                 |
|209                                                                                                                    |KEY_NEXT                                                                 |
|210                                                                                                                    |KEY_INSERT                                                               |
|211                                                                                                                    |KEY_DELETE                                                               |
|212                                                                                                                    |                                                                         |
|213                                                                                                                    |                                                                         |
|214                                                                                                                    |                                                                         |
|215                                                                                                                    |                                                                         |
|216                                                                                                                    |                                                                         |
|217                                                                                                                    |                                                                         |
|218                                                                                                                    |KEY_CLEAR                                                                |
|219                                                                                                                    |KEY_LMETA                                                                |
|220                                                                                                                    |KEY_RMETA                                                                |
|221                                                                                                                    |KEY_APPS                                                                 |
|222                                                                                                                    |KEY_POWER                                                                |
|223                                                                                                                    |KEY_SLEEP                                                                |

