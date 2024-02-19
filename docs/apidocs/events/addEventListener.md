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


### (Function) Callback
The function to call when this event fires.