import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { Image } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { HomeStore } from '@/store/homeStore'
import { CommonStore } from '@/store/commonStore'
import { gennerateTaroNavigateParams } from '@/utils/urlParam'
import biggerLogo from '@/assets/images/logo-bigger.png'
import female from '@/assets/images/female.png'
import femaleGray from '@/assets/images/female-gray.png'
import male from '@/assets/images/male.png'
import maleGray from '@/assets/images/male-gray.png'
import { IndexMain, IndexLogo, NickNameInput, SexChoiceView, SignBtn } from './indexSty'

type propsType = {
  store: {
    homeStore,
  }
}

type stateType = {
  currentIndex: Number | undefined,
  choices: any[]
}

interface Index {
  props: propsType
  state: stateType
}


@inject('store')
@observer
class Index extends Component {
  private homeStore: HomeStore
  private commonStore: CommonStore

  constructor(props) {
    super(props)
    this.homeStore = props.store.homeStore
    this.commonStore = props.store.commonStore
    this.state = {
      currentIndex: undefined,
      choices: [
        maleGray,
        femaleGray
      ]
    }
  }

  // 完成注册
  onClickSign = () => {
    const { isDoneSign } = this.homeStore
    if (!isDoneSign) {
      Taro.showToast({ title: '信息未填写完成', icon: 'none', duration: 1500 })
      return
    }

      Taro.setNavigationBarTitle({
          title: '平安好姻缘'
      })
    // Taro.navigateTo(gennerateTaroNavigateParams("home", { from: 'sign' }))
  }

  // 输入昵称
  onInput = (e) => {
    const { setData } = this.commonStore
    setData("userInfo.nickname", e.target.value, this.homeStore)
  }

  // 选择性别
  onChoseSex = (index: number) => {

    const { setData } = this.commonStore
    const { choices } = this.state
    const activeChoices = [male, female]
    const grayChoices = [maleGray, femaleGray]

    choices.forEach((_, i) => choices[i] = grayChoices[i])
    choices[index] = activeChoices[index]
    this.setState({ choices })

    setData("userInfo.sex", index, this.homeStore)
  }
  render() {
    const { isDoneSign } = this.homeStore
    const { choices } = this.state

    return (
      <IndexMain>
        <IndexLogo
          src={biggerLogo}
        />
        <NickNameInput
          placeholder="请输入昵称"
          placeholderClass="nameInput-placeholder"
          onInput={this.onInput}
        />
        <SexChoiceView>
          {
            Array.from({ length: 2 }, (_, i) => i).map(o => {
              return (
                [
                  <Image
                    key={o}
                    src={choices[o]}
                    className="item-choice"
                    onClick={this.onChoseSex.bind(this, o)}
                  />
                ]
              )
            })
          }
        </SexChoiceView>
        <SignBtn
          active={isDoneSign}
          onClick={this.onClickSign}
        >
          开启好姻缘
        </SignBtn>
      </IndexMain>
    )
  }
}

export default Index
