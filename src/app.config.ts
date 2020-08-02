export default {
  pages: [
    'pages/index/index'
  ],
   // 分包
  subPackages: [
    {
      // 浏览器页
      root: 'pages/chart',
      pages: ['index']
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
