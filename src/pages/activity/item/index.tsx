import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'


import { TitleWrapper, ItemWrapper } from './indexSty'

import { propsType, stateType } from './type'


// 定义类型
interface ActivityItem {
  props: propsType
  state: stateType
}

// @inject('store')
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
      <TitleWrapper>{data.title}</TitleWrapper>
    )
  }
}

export default ActivityItem
