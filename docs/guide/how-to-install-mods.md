# How to install mods

1. Open the compiled client
2. click the "Mods" button in the main menu or the pause menu
3. click "Add New" to install a mod from a url or click "Upload" to upload a Mod

heres a example mod to test this out with:

url : https://raw.githubusercontent.com/eaglerforge/eaglerforge.github.io/main/docs/example.js

the code inside of the example mod :
```
ModAPI.addEventListener("update", () => {
    ModAPI.displayToChat({msg: ModAPI.uwuify({string:"hello this is a example mod!"})})
});
```