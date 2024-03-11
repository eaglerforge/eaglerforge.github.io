# Sending packet events
Events called by packets being sent to the server by the client.

- `sendpacketanimation`
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketentityaction`
    - `entityID`: Integer
    - `auxData`: Integer
    - `action`: String
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketinput`
    - `strafeSpeed`: Number
    - `forwardSpeed`: Number
    - `jumping`: Boolean
    - `sneaking`: Boolean
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketclosewindow`
    - `windowId`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketclickwindow`
    - `windowId`: Integer
    - `slotId`: Integer
    - `usedButton`: Integer
    - `actionNumber`: Short
    - `mode`: Integer
    - `clickedItem`: [ItemStackData](../globals/ItemStackData.md)
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketconfirmtransaction`
    - `windowId`: Integer
    - `accepted`: Boolean
    - `uid`: Short
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketkeepalive`
    - `key`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketchatmessage`
    - `message`: String
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketuseentity`
    - `entityId`: Integer
    - `action`: String
        - Can be one of: `INTERACT`, `ATTACK`, `INTERACT_AT`
    - `hitVec`: [Vec3](../globals/Vec3.md)
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketplayerposition`
    - `x`: Number
    - `y`: Number
    - `z`: Number
    - `yaw`: Number
    - `pitch`: Number
    - `onGround`: Boolean
    - `moving`: Boolean
    - `rotating`: Boolean
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketplayerlook`
    - `x`: Number
    - `y`: Number
    - `z`: Number
    - `yaw`: Number
    - `pitch`: Number
    - `onGround`: Boolean
    - `moving`: Boolean
    - `rotating`: Boolean
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketplayerposlook`
    - `x`: Number
    - `y`: Number
    - `z`: Number
    - `yaw`: Number
    - `pitch`: Number
    - `onGround`: Boolean
    - `moving`: Boolean
    - `rotating`: Boolean
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketplayer`
    - `x`: Number
    - `y`: Number
    - `z`: Number
    - `yaw`: Number
    - `pitch`: Number
    - `onGround`: Boolean
    - `moving`: Boolean
    - `rotating`: Boolean
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketplayerdigging`
    - `position`: BlockPos
    - `facing`: String
        - Can be one of: `UP`, `DOWN`, `NORTH`, `SOUTH`, `EAST`, `WEST`
    - `status`: String
        - Can be one of: `START_DESTROY_BLOCK`, `ABORT_DESTROY_BLOCK`, `STOP_DESTROY_BLOCK`, `DROP_ALL_ITEMS`, `DROP_ITEM` or `RELEASE_USE_ITEM`
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketplayerdigging`
    - `position`: BlockPos
    - `facing`: String
        - Can be one of: `UP`, `DOWN`, `NORTH`, `SOUTH`, `EAST`, `WEST`
    - `status`: String
        - Can be one of: `START_DESTROY_BLOCK`, `ABORT_DESTROY_BLOCK`, `STOP_DESTROY_BLOCK`, `DROP_ALL_ITEMS`, `DROP_ITEM` or `RELEASE_USE_ITEM`
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketplayerblockplacement`
    - `position`: BlockPos
    - `placedBlockDirection`: Integer
    - `facingX`: Number
    - `facingY`: Number
    - `facingZ`: Number
    - `stack`: [ItemStackData](../globals/ItemStackData.md)
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpackethelditemchange`
    - `slotId`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketcreativeinventoryaction`
    - `slotId`: Integer
    - `stack`: [ItemStackData](../globals/ItemStackData.md)
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketenchantitem`
    - `windowId`: Integer
    - `button`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketupdatesign`
    - `pos`: BlockPos
    - `lines`: String[] [change-length]
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketplayerabilities`
    - `invulnerable`: Boolean
    - `flying`: Boolean
    - `allowFlying`: Boolean
    - `creativeMode`: Boolean
    - `flySpeed`: Number
    - `walkSpeed`: Number
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpackettabcomplete`
    - `message`: String
    - `targetBlock`: BlockPos
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketclientsettings`
    - `lang`: String
    - `view`: Integer
    - `chatVisibility`: String
        - Can be one of: `FULL`, `SYSTEM` or `HIDDEN`
    - `enableColors`: Boolean
    - `modelPartFlags`: Integer
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketclientstatus`
    - `status`: String
        - Can be one of: `PERFORM_RESPAWN`, `REQUEST_STATS` or `OPEN_INVENTORY_ACHIEVEMENT`
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketcustompayload`
    - `channel`: String
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketspectate`
    - `id`: String
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.

- `sendpacketresourcepackstatus`
    - `hash`: String
    - `status`: String
        - Can be one of: `SUCCESSFULLY_LOADED`, `DECLINED`, `FAILED_DOWNLOAD`, `ACCEPTED`
    - `preventDefault`: Boolean representing whether or not to cancel processing the packet. Default is `false`.