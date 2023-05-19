import { defineConfig } from 'dumi';

export default defineConfig({
  resolve: {
    docDirs: ['i18n'],
  },
  themeConfig: {
    name: 'BingTang Docs',
    github: 'https://github.com/Bing-Plugins/BingTang-Doc',
    footer: false,
    showLineNum: true,
    rtl: true
  },
  locales: [
    { id: 'zh-CN', name: '简体中文' },
    { id: 'zh-TW', name: '繁体中文' },
    { id: 'en-US', name: 'English'}
  ],
  sitemap: {
    hostname: 'https://docs.yistars.net/'
  }
});
