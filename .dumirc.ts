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
    rtl: true,
    hero: {
      'zh-CN': {
        title: '冰糖文档',
        description: '包含了冰糖有关的所有信息的资料库',
      },
      'en-US': {
        title: 'BingTang Docs',
        description: 'A library of information containing all the information about BingTang',
      },
      'zh-TW': {
        title: '冰糖文檔',
        description: '包含了冰糖有關的所有信息的資料庫',
      }
    },
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
