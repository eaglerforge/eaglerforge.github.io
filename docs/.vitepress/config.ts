import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'EaglerForge',
  description: 'Mod loader for eaglercraft',

  themeConfig: {
    nav: [
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
        text: 'Getting started',
        collapsed: false,
        items: [
          { text: 'How to Install Mods', link: '/apidocs/how-to-install-mods' },
          { text: 'Introduction', link: '/apidocs/' },
          // ...
        ],
      },
    ],
  },
});
