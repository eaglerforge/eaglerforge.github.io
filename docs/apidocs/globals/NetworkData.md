# NetworkData
Represents the network handler. Has many built-in functions to easily send packets to the server..

Properties:
- `doneLoadingTerrain`: Boolean
- `currentServerMaxPlayers`: Integer

Methods:
- `sendPacketAnimation() : void`
- `sendPacketEntityAction({entityId: Integer, action: String, auxData: Integer}) : void`
    - `action` can be one of: `START_SNEAKING`, `STOP_SNEAKING`, `STOP_SLEEPING`, `START_SPRINTING`, `STOP_SPRINTING`, `RIDING_JUMP` or `OPEN_INVENTORY`
- `sendPacketInput({strafeSpeed: Number, forwardSpeed: Number, jumping: Boolean, sneaking: Boolean}) : void`
- `sendPacketCloseWindow({windowId: Integer}) : void`
- `sendPacketClickWindow({windowId: Integer, slotId: Integer, usedButton: Integer, mode: Integer, clickedItemRef: ItemStackRef?, actionNumber: Short}) : void`
- `sendPacketConfirmTransaction({windowId: Integer, uid: Short, accepted: Boolean}) : void`
- `sendPacketKeepAlive({key: Integer}) : void`
- `sendPacketChatMessage({messageIn: String}) : void`
- `sendPacketUseEntity({entityRef: EntityRef, hitVec: Vec3}) : void`
- `sendPacketUseEntity({entityRef: EntityRef, action: String}) : void`
    - `action` can be one of: `INTERACT`, `ATTACK` or `INTERACT_AT`
- `sendPacketUseEntity({entityId: Integer, hitVec: Vec3}) : void`
- `sendPacketUseEntity({entityId: Integer, action: String}) : void`
    - `action` can be one of: `INTERACT`, `ATTACK` or `INTERACT_AT`
- `sendPacketPlayer({isOnGround: Boolean}) : void`
- `sendPacketPlayerPosition({posX: Number, posY: Number, posZ: Number, isOnGround: Boolean}) : void`
- `sendPacketPlayerLook({playerYaw: Number, playerPitch: Number, isOnGround: Boolean}) : void`
- `sendPacketPlayerPosLook({playerX: Number, playerY: Number, playerZ: Number, playerYaw: Number, playerPitch: Number, isOnGround: Boolean}) : void`
- `sendPacketPlayerDigging({action: String, pos: BlockPos, facing: String}) : void`
    - `action` can be one of: `START_DESTROY_BLOCK`, `ABORT_DESTROY_BLOCK`, `STOP_DESTROY_BLOCK`, `DROP_ALL_ITEMS`, `DROP_ITEM` or `RELEASE_USE_ITEM`
    - `facing` can be one of: `UP`, `DOWN`, `NORTH`, `SOUTH`, `EAST` or `WEST`
- `sendPacketPlayerBlockPlacement({stackRef: ItemStackRef}) : void`
- `sendPacketPlayerBlockPlacement({posRef: BlockPosRef, placedBlockDirectionIn: Integer, stackRef: ItemStackRef, facingXIn: Number, facingYIn: Number, facingZIn: Number}) : void`
- `sendPacketHeldItemChange({slotId: Integer}) : void`
- `sendPacketCreativeInventoryAction({slotId: Integer, stackRef: ItemStackRef}) : void`
- `sendPacketEnchantItem({windowId: Integer, button: Integer}) : void`
- `sendPacketUpdateSign({pos: BlockPos, lines: String[]}) : void`
- `sendPacketPlayerAbilities({capabilitiesRef: PlayerCapabilitiesRef}) : void`
- `sendPacketTabComplete({msg: String}) : void`
- `sendPacketTabComplete({msg: String, target: BlockPos}) : void`
- `sendPacketClientSettings({lang: String, view: Integer, chatVisibility: String, enableColors: Boolean, modelPartFlags: Integer}) : void`
    - `chatVisibility` can be one of: `FULL`, `SYSTEM` or `HIDDEN`
- `sendPacketClientStatus({status: String}) : void`
    - `status` can be one of: `PERFORM_RESPAWN`, `REQUEST_STATS` or `OPEN_INVENTORY_ACHIEVEMENT`
- `sendPacketSpectate({uuid: String}) : void`
- `sendPacketResourcePackStatus({hash: String, status: String}) : void`
    - `status` can be one of: `SUCCESSFULLY_LOADED`, `DECLINED`, `FAILED_DOWNLOAD` or `ACCEPTED`