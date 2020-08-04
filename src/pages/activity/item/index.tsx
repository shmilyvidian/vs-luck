import React, { Component } from 'react'
import { observer } from 'mobx-react'


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
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { data } = this.props

    return (
      <ItemWrapper>
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
