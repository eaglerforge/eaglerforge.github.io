# ItemStackData
Represents an itemstack.

### Constructor:
PluginAPI.contructors.ItemStack({itemId: Integer, amount: Integer, itemDamage: Integer})

Has the following properties:
- `amount : Integer`
- `animationsToGo : Integer`
- `itemId : Integer`
- `itemDamage : Integer`
- `itemFrame : [EntityData](EntityData.md)` (If existing)
- `canDestroyCacheBlock : BlockData`
- `canDestroyCacheResult : Boolean`
- `canPlaceOnCacheBlock : BlockData`
- `canPlaceOnCacheResult : Boolean`

Has the following methods:
- `getItem() : ItemData`
- `getMaxStackSize() : Integer`
- `isStackable() : Boolean`
- `isItemStackDamageable() : Boolean`
- `getHasSubtypes() : Boolean`
- `isItemDamaged() : Boolean`
- `getItemDamage() : Integer`
- `getMetadata() : Integer`
- `setItemDamage({meta: Integer}) : void`
- `getMaxDamage() : Integer`
- `copy() : ItemStackData`
- `getUnlocalizedName() : String`
- `toString() : String`
- `getMaxItemUseDuration() : Integer`
- `getDisplayName() : String`
- `setDisplayName({displayName: String}) : ItemStackData`
- `clearCustomName() : void`
- `hasDisplayName() : Boolean`
- `hasEffect() : Boolean`
- `isItemEnchantable() : Boolean`
- `addEnchantment({ench: EnchantmentRef, level: Integer}) : void`
- `isItemEnchanted() : Boolean`
- `canEditBlocks() : Boolean`
- `isOnItemFrame() : Boolean`
- `getRepairCost() : Integer`
- `setRepairCost({cost: Integer}) : void`
- `setItem(newItem: ItemRef) : void`
- `canDestroy({blockId: Integer}) : Boolean`
- `canPlaceOn({blockId: Integer}) : Boolean`
- `toNBT() : String`
- `fromNBT({nbt: String}) : void`
- `getLore() : String[]`
- `setLore({lore: String[]}) : void`