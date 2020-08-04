import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { observer } from 'mobx-react'
import { gennerateTaroNavigateParams } from '@/utils/urlParam'


import { TitleWrapper, ItemWrapper, LeftItem ,DateWrapper} from './indexSty'

import { propsType, stateType } from './type'
import { View } from '@tarojs/components'

import activeImg from '@/assets/images/active.png'


// 定义类型
interface ActivityItem {
  props: propsType
  state: stateType
}

@observer
class ActivityItem extends Component {
  constructor(props) {
    super(props)
  }

  // 跳详情页
  link(){
    Taro.navigateTo(gennerateTaroNavigateParams("/pages/activity/detail/index", { from: 'activity' }))
  }

  render() {
    const { data } = this.props

    return (
      <ItemWrapper onClick={this.link}>
        <LeftItem src={activeImg}></LeftItem>
        <View>
          <TitleWrapper>{data.title}</TitleWrapper>
          <DateWrapper>{data.date}</DateWrapper>
        </View>
      </ItemWrapper>
    )
  }
}

export default ActivityItem
