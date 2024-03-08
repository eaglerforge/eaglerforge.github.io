# GlStateManager
Allows you to access GlStateManager(please do some research before using this global. i have no idea what the methods/properties in this global do). `ModAPI.GlStateManager.(methods/properties)`

Has the following properties:
- `stateDepthMask : Boolean`
- `stateCull : Boolean`
- `stateFog : Boolean`
- `stateGlobalBlend : Boolean`
- `stateLighting : Boolean`

It has the following methods:
- `pushMatrix() : void`
- `popMatrix() : void`
- `recompileShaders() : void`
- `scale({x: Float, y: Float, z: Float})`
- `translate({x: Float, y: Float, z: Float})`
- `color({colorRed: Float, colorGreen: Float, colorBlue: Float, colorAlpha: Float})`
- `rotate({angle: Float, x: Float, y: Float, z: Float})`
- `matrixMode({mode: Integer})`
