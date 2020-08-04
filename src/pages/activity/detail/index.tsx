import React, { Component } from 'react'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { HomeStore } from '@/store/homeStore'

import { TitleWrapper, ItemWrapper, LeftItem, DateWrapper } from './indexSty'

import activeImg from '@/assets/images/active.png'






import './index.scss'

type propsType = {
  store: {
    homeStore,
  }
}

type stateType = {

}

interface Index {
  props: propsType
  state: stateType
}

@inject('store')
@observer
class Index extends Component {
  private homeStore: HomeStore
  constructor(props) {
    super(props)
    this.homeStore = props.store.homeStore
  }

  render() {
    return (
      <View className='detail-wrapper'>
        <View className="title-wrapper">
          <View className="title" >和你去旅行 | 去清远清凉一夏，体验激情峡谷漂流！</View>
          <View className="subtitle" >时间：7月27日 7:30-22:30</View>
          <View className="subtitle" >地点：深圳市龙岗区岳麓山庄</View>
          <View className="subtitle" >费用：免费</View>
          <View className="subtitle" >类型：旅行</View>
        </View>
        <View className="swiper-wrapper">
          <Swiper
            className='test-h'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
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
      </View>
    )
  }
}

export default Index
