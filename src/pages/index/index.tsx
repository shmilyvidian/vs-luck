import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { HomeStore } from '@/store/homeStore'
import { gennerateTaroNavigateParams } from '../../utils/urlParam'

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

  onClickSign = () => {
      Taro.navigateTo(gennerateTaroNavigateParams("home", {from:'sign'}))
  }

  render () {
    const { name } = this.homeStore
    return (
      <View className='index'>
        <Text>{name}</Text>
      </View>
    )
  }
}

export default Index
