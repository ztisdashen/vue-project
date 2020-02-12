module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375,  //视窗的高度，对应我们设计稿的宽度
      viewportHeight: 667, // 视窗的高度，对应我们设计稿的高度
      unitPrecision: 5, // 执行 `px`转化成视窗单位值的小数位数
      viewportUnit: 'vw', // 指定转化成视窗单位，建议为vw
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], //指定不需要转化的类
      minPixelValue: 1, // 不需要转化的最小单位
      mediaQuery: false,
      exclude: [/TabBar\.vue$/]
    }
  }
}
