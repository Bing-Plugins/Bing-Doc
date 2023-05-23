import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chakra';

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
    settingPanelVisible: true,
    thumbBackground: true,
    code: 'prism',
  },
  locales: [
    { id: 'zh-CN', name: '简体中文' },
    { id: 'zh-TW', name: '繁體中文' },
    { id: 'en-US', name: 'English'}
  ],
  sitemap: {
    hostname: 'https://docs.yistars.net/'
  }
});
