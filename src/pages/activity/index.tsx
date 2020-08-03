import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { HomeStore } from '@/store/homeStore'

// 定义样式
import { IndexMain, ItemWrapper } from './indexSty'

// 定义数据类型
import { propsType, stateType, activityListDataType } from './type'

import ActivityItem from './item/index'


// 定义类型
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
    this.state = {
      activityListData: [
        {
          title: '和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！',
          date: '2020年7月13日'
        }
      ]
    }
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { activityListData } = this.state

    const activityList = activityListData.map((item: activityListDataType) => {
      return (
        <ActivityItem key="index" data={item}></ActivityItem>
      )
    })
    return (
      <IndexMain>
        {activityList}
      </IndexMain>
    )
  }
}

export default Index
