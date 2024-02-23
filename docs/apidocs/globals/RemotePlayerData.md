# RemotePlayerData
Represents a remote player.

A RemotePlayerData usually has all of the properties of [PlayerData](PlayerData.md), and:

- `otherPlayerMPPosRotationIncrements: Integer`
- `otherPlayerMPX: Number`
- `otherPlayerMPY: Number`
- `otherPlayerMPZ: Number`
- `otherPlayerMPYaw: Number`
- `otherPlayerMPPitch: Number`

It has these methods:
- `setCurrentItemOrArmor({slotIn: Integer, itemStack: ItemStackRef}) : void`
- `isSpectator() : Boolean`