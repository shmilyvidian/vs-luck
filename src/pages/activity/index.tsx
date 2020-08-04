import React, { Component } from 'react'
import { observer } from 'mobx-react'

// 定义样式
import { IndexMain } from './indexSty'

// 定义数据类型
import { propsType, stateType, activityListDataType } from './type'

import ActivityItem from './item/index'


// 定义类型
interface Index {
  state: stateType
}

@observer
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activityListData: [
        {
          title: '和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！',
          date: '2020年7月13日'
        },
        {
          title: '和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！',
          date: '2020年7月13日'
        },{
          title: '和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！',
          date: '2020年7月13日'
        },{
          title: '和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！',
          date: '2020年7月13日'
        },{
          title: '和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！',
          date: '2020年7月13日'
        },{
          title: '和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！',
          date: '2020年7月13日'
        },{
          title: '和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！',
          date: '2020年7月13日'
        },{
          title: '和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！',
          date: '2020年7月13日'
        },{
          title: '和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！',
          date: '2020年7月13日'
        },{
          title: '和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！',
          date: '2020年7月13日'
        }
      ]
    }
  }

  render() {
    const { activityListData } = this.state

    const activityList = activityListData.map((item: activityListDataType,index:any) => {
      return (
        <ActivityItem key={index} data={item}></ActivityItem>
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
