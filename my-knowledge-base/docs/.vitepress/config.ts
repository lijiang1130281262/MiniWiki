import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的知识库',
  description: '个人学习笔记与知识管理',

  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '学习笔记', link: '/notes/' }
    ],

    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        }
      ],
      '/notes/': [
        {
          text: '学习笔记',
          items: [
            { text: '概述', link: '/notes/' },
            { text: '机器学习基础', link: '/notes/machine-learning' },
            { text: '深度学习入门', link: '/notes/deep-learning' }
          ]
        }
      ]
    },

    // 搜索功能
    search: {
      provider: 'local'
    },

    // 页脚
    footer: {
      message: '用 VitePress 搭建',
      copyright: '© 2024 我的知识库'
    }
  }
})
