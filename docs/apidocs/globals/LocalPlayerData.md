# LocalPlayerData
Represents the local player.

A LocalPlayerData usually has all of the properties of [PlayerData](PlayerData.md), and:

- `lastReportedPosX: Number`
- `lastReportedPosY: Number`
- `lastReportedPosZ: Number`
- `lastReportedYaw: Number`
- `lastReportedPitch: Number`
- `serverSneakState: Boolean`
- `serverSprintState: Boolean`
- `positionUpdateTicks: Integer`
- `hasValidHealth: Boolean`
- `clientBrand: String`
- `sprintToggleTimer: Integer`
- `sprintingTicksLeft: Integer`
- `renderArmYaw: Number`
- `renderArmPitch: Number`
- `prevRenderArmYaw: Number`
- `prevRenderArmPitch: Number`
- `horseJumpPower: Number`
- `horseJumpPowerCounter: Integer`

It has these methods:
- `mountEntity({entityIn: EntityRef}) : void`
- `dropOneItem({dropAll: Boolean}) : EntityData`
- `sendChatMessage({message: String}) : void`
- `respawnPlayer() : void`
- `closeScreen() : void`
- `closeScreenAndDropStack() : void`
- `setPlayerSPHealth({health: Number}) : void`
- `isUser() : Boolean`
- `sendHorseJump() : void`
- `sendHorseInventory() : void`
- `setClientBrand({brand: String}) : void`
- `getClientBrand() : String`
- `pushOutOfBlocks({x: Number, y: Number, z: Number}) : Boolean`
- `isOpenBlockSpace(pos: BlockPos) : Boolean`
- `setXPStats({currentXP: Number, maxXP: Integer, level: Integer}) : void`
- `playSound({name: String, volume: Number, pitch: Number}) : void`
- `isServerWorld() : Boolean`
- `isRidingHorse() : Boolean`
- `getHorseJumpPower() : Number`
- `isCurrentViewEntity() : Boolean`
- `isSpectator() : Boolean`