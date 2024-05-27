# Compiling EaglerForge with a custom NoReflect config

## Prerequisites
1. EaglerForge repository clones locally
2. Working EaglerForge-Workspace folder.
---
## Compiling
  1. Open a web browser. Any modern browser should work fine.
  2. On a new tab, press `CTRL`+`O`
  3. Navigate to the EaglerForge repo, and open NoReflect/index.html
  4. On the page that opens, click `Choose File`
  5. Select the `EaglerForge-Workspace/src/main/java` folder, and press Upload.
  6. You should see around 2000 files uploaded.
  7. Press `Generate`
  8. The site will download a patch zip file for `EaglerForge-Workspace/src/main/java`, containing a modified NoReflect source that exposes the specified classes to ModAPI.


## Changing the Config
  The NoReflect Generator config lets you change the generated output:
  - `targetFiles`: The target classes to expose to javascript. By default it is `ItemStack` and `Minecraft`
  - `imports`: The classes to forcefully include as an import for the exposer class.
  - `managerFile`: The name of the exposer class.
  - `includeReadFiles`: Whether or not the patch zip file should include the target files. False by default to speed up generation.
  - `attemptAutoImport`: Should the compiler attempt to automatically import required classes based on context clues.
