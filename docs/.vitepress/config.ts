import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Kient',
  description: 'A TypeScript-First Client Library for Kick.com',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Reference', link: '/reference/kient' },
    ],

    sidebar: {
      '/guide': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is Kient?', link: '/guide/what-is-kient' },
            { text: 'Getting Started', link: '/guide/getting-started' },
          ],
        },
        {
          text: 'Essentials',
          items: [
            { text: 'Response Instances', link: '/guide/response-instance' },
            { text: 'Authentication', link: '/guide/authentication' }
          ]
        }
      ],
      '/reference': [
        {
          text: 'Endpoints',
          items: [
            { text: 'Authentication', link: '/reference/authentication-endpoint' },
            { text: 'Channels', link: '/reference/channel-endpoint' },
            { text: 'Chat', link: '/reference/chat-endpoint' }
          ]
        },
        {
          text: 'Sockets',
          items: [
            { text: 'Chatroom', link: '/reference/chatroom-socket' }
          ]
        },
        {
          text: 'Instances',
          items: [
            { text: 'Channel', link: '/reference/channel-instance' },
            { text: 'Livestream', link: '/reference/livestream-instance' },
            { text: 'Chat Message', link: '/reference/chat-message-instance' }
          ]
        },
        {
          text: 'Reference',
          items: [
            { text: 'Kient', link: '/reference/kient' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zSoulweaver/kient' },
    ],
  },
})
