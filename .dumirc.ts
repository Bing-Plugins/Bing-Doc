import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-chakra';
import { description, keywords, author } from './package.json';

export default defineConfig({
  resolve: {
    docDirs: ['i18n'],
  },
  themeConfig: {
    name: 'BingTang Docs',
    title: 'BingTang Docs',
    showLineNum: true,
    code: 'prism',
    ...defineThemeConfig({
      helmetIcon: '🍺',
      settingPanelVisible: true,
      thumbBackground: true,
      description,
      keywords,
      author,
      social: {
        github: {
          name: 'dumi-theme-chakra',
          link: 'https://github.com/Bing-Plugins/BingTang-Doc'
        }
      },
    }),
    footer: `Copyright © ${new Date().getFullYear()} BingTang Docs`,
  },
  locales: [
    { id: 'zh-CN', name: '简体中文' },
    { id: 'en-US', name: 'English'},
  ],
  sitemap: {
    hostname: 'https://docs.yistars.net/'
  },
});
