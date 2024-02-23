# List of Globals

- `ModAPI.player`
    A [`LocalPlayerData`](LocalPlayerData.md) made from `EntityPlayerSP`.
- `ModAPI.items`
    An [`ItemData`](ItemData.md) array of all the in-game item types, and block-item types. [Auto]
- `ModAPI.blocks`
    A [`BlockData`](BlockData.md) array of all the in-game blocks. [Auto]
- `ModAPI.materials`
    A [`MaterialData`](MaterialData.md) array of all the block materials. [Auto]
- `ModAPI.enchantments`
    An [`EnchantmentData`](EnchantmentData.md) array of all the in-game enchantments. [Auto]

In order to use non auto globals, they must be [required](require.md).