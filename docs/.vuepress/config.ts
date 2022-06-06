import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  base: '/vuepress-starter/',
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: 'contribute',
        link: '/contribute',
      },
      // NavbarGroup
      {
        text: 'guide',
        children: [
          {
            text: 'guide1',
            link: '/guide/guide-1',
          },
          {
            text: 'guide2',
            link: '/guide/guide-2',
          }
        ]
      },
      {
        text: 'help',
        children: [
          {
            text: 'help1',
            link: '/help/help-1',
          },
          {
            text: 'help2',
            link: '/help/help-2',
          },
          {
            text: 'text',
            children: [
              {
                text: 'text1',
                link: '/help/text/text-1',
              },
              {
                text: 'text2',
                link: '/help/text/text-2',
              },

            ]
          }
        ]
      },
    ],
    sidebar: 'auto',
    sidebarDepth: 2
  }),
})