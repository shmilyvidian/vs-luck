export default {
  pages: [
    'pages/index/index',
  ],
   // 分包
  subPackages: [
    {
      // 聊天页
      root: 'pages/chart',
      pages: ['index']
    },
    {
      // 活动详情页
      root: 'pages/activity/detail',
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
