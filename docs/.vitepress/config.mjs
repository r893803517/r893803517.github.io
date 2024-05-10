import { defineConfig } from 'vitepress'
import { set_sidebar } from '../utils/side-bar-creator'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Robin's Blog",
  description: "Blog to record everything",

  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  
  srcDir: './src',

  themeConfig: {
    logo: './logo.png',

    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }，
      { text: '首页', link: '/' },
      {
        text: '知识整理', items: [
          { text: '前端', link: '/front-end/css/函数' },
          { text: '后端', link: '/back-end/nestjs/介绍' },
          { text: '通用', link: '/common/docker/基本概念' }
        ]
      },
      { text: '面试整理', link: '/interview/前端/vue2/源码' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //       { text: 'JS', link: '/JavaScript/guide' }
    //     ]
    //   }
    // ],


    sidebar: {
      '/front-end/': {
        text: 'front-end',
        activeMatch: '/front-end',
        items: set_sidebar('/src/front-end', '/front-end')
      },
      '/back-end/': {
        text: 'back-end',
        items: set_sidebar('/src/back-end', '/back-end')
      },
      '/common/': {
        text: 'common',
        items: set_sidebar('/src/common', '/common')
      },
      '/interview/': {
        text: 'interview',
        items: set_sidebar('/src/interview', '/interview')
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/r893803517' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present'
    }
  }
})