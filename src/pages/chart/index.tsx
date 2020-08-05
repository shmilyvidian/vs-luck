import React, { Component } from 'react'
import Taro from "@tarojs/taro";
import { View, Input, Image, ScrollView } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import './index.scss'

// 图片
import voice from '@/assets/images/voice.png'
import add from '@/assets/images/add.png'
import emoji from '@/assets/images/emoji.png'
import picImg from '@/assets/images/pic.png'
import shootImg from '@/assets/images/shoot.png'
import locationImg from '@/assets/images/location.png'


type propsType = {
  store: {
    homeStore,
  },
  userName: string
}

interface infoListType {
  date: string | null;
  info: any;
  type: string;
}

type stateType = {
  infoList: Array<infoListType>,
  inputString: string,
  scrollInfo: string,
  showAddInfo: boolean
}

interface Index {
  props: propsType
  state: stateType
}

@inject('store')
@observer
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      infoList: [{
        date: '12:00',
        info: '你好，认识一下好不好',
        type: 'receive'
      }, {
        date: '12:04',
        info: '好鸭好鸭，我叫小雅',
        type: 'send'
      }, {
        date: '',
        info: '晚上可以一起吃个饭吗？',
        type: 'receive'
      }],
      inputString: '',
      scrollInfo: '',
      showAddInfo: false
    }
  }

  componentDidMount(){
    // 根据外部传入切换顶部标题
    Taro.setNavigationBarTitle({
      title: this.props.userName ? this.props.userName: '聊天'
    })
  }

  // 输入文字
  onInputInfo = (e) => {

    console.log(e)

    const { infoList } = this.state
    infoList.push({
      date: '',
      info: e.detail.value,
      type: 'send'
    })

    infoList.push({
      date: '',
      info: (Math.random() * 100).toFixed(2),
      type: 'receive'
    })

    // 设置消息 滚动到底部
    this.setState({
      infoList,
      scrollInfo: 'msg' + (infoList.length - 1)
    })
  }

  // 是否显示额外功能
  onAddInfo = () => {
    let { showAddInfo } = this.state
    showAddInfo = !showAddInfo

    const { infoList } = this.state
    this.setState({
      showAddInfo,
      scrollInfo: 'msg' + (infoList.length - 1)
    })
    // 点击加号 将聊天记录滚动到底部 避免遮挡
  }

  render() {
    const { infoList, inputString, scrollInfo, showAddInfo } = this.state

    // 显示信息
    const infoListTpl = infoList.map((item, index) => {
      if (item.type === 'receive') {
        return (
          <View className="info-item" key={index} id={'msg' + index}>
            {item.date ? <View className="date-item">{item.date}</View> : null}
            <View className="receive-msg">
              {item.info}
            </View>
          </View>
        )
      } else {
        return (
          <View className="info-item" key={index} id={'msg' + index}>
            {item.date ? <View className="date-item">{item.date}</View> : null}
            <View className="send-item">
              <View className="send-msg">
                {item.info}
              </View>
            </View>
          </View>
        )
      }
    })

    return (
      <View className='index'>
        {/* 对话框 */}
        <ScrollView
          className={
            showAddInfo ? "fixed-show info-wrapper" : "info-wrapper"
          }

          scrollIntoView={scrollInfo}
          scrollWithAnimation
          scroll-y
        >
          {infoListTpl}
        </ScrollView>
        {/* end of 对话框 */}
        {/* 文字输入 */}
        <View className="fixed">
          <View className="input-wrapper">
            <Image className="voice" src={voice}></Image>
            <Input
              className="input"
              focus
              value={inputString}
              adjust-position
              onConfirm={this.onInputInfo}
            ></Input>
            <Image className="emoji" src={emoji}></Image>
            <Image className="add" src={add} onClick={this.onAddInfo}></Image>
          </View>

          {/* 判断是否显示功能 */}
          {showAddInfo ? <View className="other-function">
            <Image className="function-icon" src={picImg}></Image>
            <Image className="function-icon" src={shootImg}></Image>
            <Image className="function-icon" src={locationImg}></Image>
          </View> : null}
        </View>
        {/* end of 文字输入 */}

      </View >
    )
  }
}

export default Index
