# ModAPI.removeEventListener(String eventName, Function callback, Boolean slow?)
This method is used to add event listeners to the event name specified.

## Arguments:

### (String) eventName
Type of event to remove the listener from. Types of events are listed [here](addEventListener.md)

### (Function) callback
The function to remove from the event listener array.

### [Optional] (Boolean) slow
Wether or not to use the functions definition rather than it's reference to look in the listener array. Much slower with it on, but still fast. Do not use if events need to be added and removed rapidly.

Example where it is not necessary:
```
function myListener() {
    // idk
}
ModAPI.addEventListener("update", myListener);
ModAPI.removeEventListener("update", myListener);
```

Example where it is necessary:
```
ModAPI.addEventListener("update", function myListener() {
    // idk
});
ModAPI.removeEventListener("update", function myListener() {
    // idk
});
```