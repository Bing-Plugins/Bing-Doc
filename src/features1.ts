import { IFeature } from 'dumi-theme-antd-style';

export const featuresZh: IFeature[] = [
  {
    title: '现代化主题风格1',
    image: '💠',
    description:
      '本主题包采用了流动色、毛玻璃、光影质感、自然动效等现代化的设计表现手法，将界面以更加简约、美观的方式呈现，使得文档更加直观、易读、易用',
    row: 6,
  },
  {
    title: '精美的语法高亮',
    description:
      '本主题包提供准确、精美的语法高亮特性。底层采用了现代化的语法高亮库 Shiki 与 Prism，并提供了丰富的代码高亮方案，帮助用户更好地阅读代码 <quotient>后续会考虑支持代码块片段高亮、关键词高亮等特性</quotient>',
    link: '/guide/syntax-highlighter',
    image:
      'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*1qLNRrRGFsQAAAAAAAAAAAAADoN6AQ/original',
    imageType: 'primary',
    row: 9,
  },
  {
    title: '组件灵活复用',
    description:
      '本主题包为本地主题定制提供了很高的灵活度，默认导出了主题包中的精品组件，可以将组件作为独立的模块进行复用，开发者可以在 dumi 本地主题包中自由组合使用',
    image:
      'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*6sjjRa7lLhAAAAAAAAAAAAAADoN6AQ/original',
    imageType: 'primary',
    link: '/components',
    row: 8,
  },
  {
    title: '移动端适配良好',
    description:
      '本主题包对移动端适配良好，基于 CSSinJS 的灵活样式方案，多套布局实现轻而易举。用户多端操作体验一致且顺滑',
    image: '📱',
    imageType: 'light',
    row: 6,
    hero: true,
  },
];
