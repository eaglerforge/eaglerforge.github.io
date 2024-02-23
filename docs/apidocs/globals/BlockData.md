# BlockData
Used to represent a block.

Has the following properties:
- `unlocalizedName`: String: equal to the block's `unlocalizedName`
- `slipperiness`: Number: equal to the block's `slipperiness`
- `blockParticleGravity`: Number: equal to the block's `blockParticleGravity`
- `minX`: Number: equal to the block's `minX`
- `minY`: Number: equal to the block's `minY`
- `minZ`: Number: equal to the block's `minZ`
- `maxX`: Number: equal to the block's `maxX`
- `maxY`: Number: equal to the block's `maxY`
- `maxZ`: Number: equal to the block's `maxZ`
- `blockMaterial`: [MaterialData](MaterialData.md): represents the blocks material.
- `enableStats`: Boolean: equal to the block's `enableStats`
- `needsRandomTick`: Boolean: equal to the block's `needsRandomTick`
- `isBlockContainer`: Boolean: equal to the block's `isBlockContainer`
- `useNeighborBrightness`: Boolean: equal to the block's `useNeighborBrightness`
- `translucent`: Boolean: equal to the block's `translucent`
- `fullBlock`: Boolean: equal to the block's `fullBlock`
- `lightOpacity`: Integer: equal to the block's `lightOpacity`
- `lightValue`: Integer: equal to the block's `lightValue`
- `blockHardness`: Integer: equal to the block's `blockHardness`
- `blockResistance`: Integer: equal to the block's `blockResistance`
- `noRender`: Boolean: equal to the block's `noRender`
- `forceRender`: Boolean: equal to the block's `forceRender`
- `fullCube`: Boolean: equal to the block's `fullCube`

It has the following methods:
- `getID() : Integer`