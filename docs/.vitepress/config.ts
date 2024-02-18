import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'EaglerForge',
  description: 'Mod loader for eaglercraft',

  themeConfig: {
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
        ],
      },
    ],
  },
});
