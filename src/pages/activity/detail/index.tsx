import React, { Component } from 'react'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'

import activeImg from '@/assets/images/test.jpeg'
import qrcode from '@/assets/images/qrcode.png'

import './index.scss'

class Index extends Component {

  render() {
    return (
      <View className='detail-wrapper'>
        {/* title */}
        <View className="title-wrapper">
          <View className="title" >和你去旅行 | 去清远清凉一夏，体验激情峡谷漂流！</View>
          <View className="subtitle" >时间：7月27日 7:30-22:30</View>
          <View className="subtitle" >地点：深圳市龙岗区岳麓山庄</View>
          <View className="subtitle" >费用：免费</View>
          <View className="subtitle" >类型：旅行</View>
        </View>
        {/* end of title */}
        {/* swiper */}
        <View className="swiper-wrapper">
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            next-margin='108px'
            previous-margin='20px'
          >
            <SwiperItem>
              <Image className="swiper-img" src={activeImg}>1</Image>
            </SwiperItem>
            <SwiperItem>
              <Image className="swiper-img" src={activeImg}>1</Image>
            </SwiperItem>
            <SwiperItem>
              <Image className="swiper-img" src={activeImg}>1</Image>
            </SwiperItem>
          </Swiper>
        </View>
         {/* end of swiper */}
         {/* notice */}
         <View className='notice-wrapper'>
           <View className='section-title'>
             活动须知
           </View>
           <View className='section-content'>128元/人+30元/人往返快艇进鹿嘴山庄后再开始徒（含往返车、领队、冰袖、往返快艇，不含餐。</View>
         </View>
         {/* end of notice */}
         {/* detail */}
         <View className='notice-wrapper'>
           <View className='section-title'>
             活动详情
           </View>
           <View className='section-content'>这里有山，有海，还有风，最重要的是，想有你们全程12公里左右，爬升度700米，楼梯路段往返有大概5公里，难度一颗星，风景美爆。</View>
           <Image className="detail-img" src={activeImg}></Image>
           <View className='section-content'>这里有山，有海，还有风，最重要的是，想有你们全程12公里左右，爬升度700米，楼梯路段往返有大概5公里，难度一颗星，风景美爆。</View>
         </View>
         {/* end of detail */}
         {/* qrcode */}
         <View className='notice-wrapper'>
           <View className='section-title'>
             报名方式
           </View>
           <View className='section-content'>扫描下方二维码报名</View>
           <Image className="qrcode" src={qrcode}></Image>
         </View>
         {/* end of qrcode */}
      </View>
    )
  }
}

export default Index
