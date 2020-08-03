import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { HomeStore } from '@/store/homeStore'
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
  constructor(props){
    super(props)
    this.homeStore = props.store.homeStore
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>活动页</Text>
      </View>
    )
  }
}

export default Index
