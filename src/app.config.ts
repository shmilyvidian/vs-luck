export default {
  pages: [
    'pages/index/index',
    'pages/home/index'
  ],
   // 分包
  subPackages: [
    {
      // 活动页
      root: 'pages/activity',
      pages: ['index']
    },
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
