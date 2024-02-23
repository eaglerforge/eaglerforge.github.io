# MaterialData
Represents a material.

Has the following properties:
- `canBurn` : Boolean
- `replaceable` : Boolean
- `isTranslucent` : Boolean
- `requiresNoTool` : Boolean
- `mobilityFlag` : Integer
- `isAdventureModeExempt` : Boolean
- `materialMapColor` : [MapColor](MapColor.md)

It has the following methods:
- `isLiquid() : Boolean`
- `isSolid() : Boolean`
- `isToolNotRequired() : Boolean`
- `isReplaceable() : Boolean`
- `isOpaque() : Boolean`
- `getCanBurn() : Boolean`
- `blocksLight() : Boolean`
- `blocksMovement() : Boolean`
- `setTranslucent() : [MaterialData](MaterialData.md)`
- `setRequiresTool() : [MaterialData](MaterialData.md)`
- `setBurning() : [MaterialData](MaterialData.md)`
- `setReplaceable() : [MaterialData](MaterialData.md)`
- `setNoPushMobility() : [MaterialData](MaterialData.md)`
- `getMaterialMobility() : Integer`
- `setImmovableMobility() : [MaterialData](MaterialData.md)`
- `setAdventureModeExempt() : [MaterialData](MaterialData.md)`