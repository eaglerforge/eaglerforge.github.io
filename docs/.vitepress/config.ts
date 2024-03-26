import { defineConfig } from 'vitepress';


// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'EaglerForge',
  description: 'Mod loader for eaglercraft',

  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'EaglerForge Guide', link: '/guide/' },
      { text: 'API Docs', link: '/apidocs/' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        text: 'Guide',
        collapsed: false,
        items: [
          { text: 'Compiling EaglerForge', link: '/guide/' },
          { text: 'How to Install Mods', link: '/guide/how-to-install-mods' },
          { text: 'Loading mods from eaglercraftxopts', link: '/guide/Loading-mods-from-eaglercraftxopts' },
          { text: 'Loading mods from the search bar', link: '/guide/Loading-mods-from-search-bar' },
        ],
      },
      {
        text: 'Getting started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/apidocs/' },
        ],
      },
      {
        text: 'Events',
        collapsed: false,
        items: [
          { text: 'ModAPI.addEventListener(String eventName, Function callback)', link: '/apidocs/events/addEventListener' },
          { text: 'ModAPI.removeEventListener(String eventName, Function callback, Boolean slow?)', link: '/apidocs/events/removeEventListener' },
          { text: 'Receiving packet events', link: '/apidocs/events/FromServerEvents' },
          { text: 'Sending packet events', link: '/apidocs/events/ToServerEvents' },
        ],
      },
      {
        text: 'Globals',
        collapsed: false,
        items: [
          { text: 'Data', link: '/apidocs/globals/Data' },
          { text: 'EntityData', link: '/apidocs/globals/EntityData' },
          { text: 'LivingEntityData', link: '/apidocs/globals/LivingEntityData' },
          { text: 'PlayerData', link: '/apidocs/globals/PlayerData' },
          { text: 'LocalPlayerData', link: '/apidocs/globals/LocalPlayerData' },
          { text: 'RemotePlayerData', link: '/apidocs/globals/RemotePlayerData' },
          { text: 'NetworkData', link: '/apidocs/globals/NetworkData' },
          { text: 'PlayerCapabilities', link: '/apidocs/globals/PlayerCapabilities' },
          { text: 'ModAPI.require(String componentName)', link: '/apidocs/globals/require' },
          { text: 'SingleplayerData', link: '/apidocs/globals/SingleplayerData' },
          { text: 'MultiPlayerData', link: '/apidocs/globals/MultiPlayerData' },
          { text: 'ScaledResolution', link: '/apidocs/globals/ScaledResolution' },
          { text: 'GlStateManager', link: '/apidocs/globals/GlStateManager' },
          { text: 'BlockData', link: '/apidocs/globals/BlockData' },
          { text: 'ChunkData', link: '/apidocs/globals/ChunkData' },
          { text: 'ContainerData', link: '/apidocs/globals/ContainerData' },
          { text: 'EnchantmentData', link: '/apidocs/globals/EnchantmentData' },
          { text: 'FishHookData', link: '/apidocs/globals/FishHookData' },
          { text: 'FoodStatsData', link: '/apidocs/globals/FoodStatsData' },
          { text: 'GameSettingsData', link: '/apidocs/globals/GameSettingsData' },
          { text: 'InventoryBasicData', link: '/apidocs/globals/InventoryBasicData' },
          { text: 'InventoryPlayerData', link: '/apidocs/globals/InventoryPlayerData' },
          { text: 'ItemData', link: '/apidocs/globals/ItemData' },
          { text: 'ItemStackData', link: '/apidocs/globals/ItemStackData' },
          { text: 'KeyBindingData', link: '/apidocs/globals/KeyBindingData' },
          { text: 'MapColor', link: '/apidocs/globals/MapColor' },
          { text: 'MaterialData', link: '/apidocs/globals/MaterialData' },
          { text: 'Vec3', link: '/apidocs/globals/Vec3' },
          { text: 'Vec3i', link: '/apidocs/globals/Vec3i' },
          { text: 'Vec4b', link: '/apidocs/globals/Vec4b' },
        ],
      },
    ],
  },
});
