import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'BingTang Docs',
    github: 'https://github.com/Bing-Plugins/BingTang-Doc',
  },
  locales: [
    { id: 'zh-CN', name: '简体中文' },
    { id: 'en-US', name: 'English'}
  ]
});
