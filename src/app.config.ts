export default {
  pages: [
    'pages/index/index',
    'pages/home/index',
    'pages/activity/detail/index'
  ],
   // 分包
  subPackages: [
    {
      // 聊天页
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
