import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { Image } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { HomeStore } from '@/store/homeStore'
import { CommonStore } from '@/store/commonStore'
import biggerLogo from '@/assets/images/logo-bigger.png'
import female from '@/assets/images/female.png'
import femaleGray from '@/assets/images/female-gray.png'
import male from '@/assets/images/male.png'
import maleGray from '@/assets/images/male-gray.png'

import {
  IndexMain,
  IndexLogo,
  NickNameInput,
  SexChoiceView,
  SignBtn,
  translateY90,
  translateY60,
  matchBox
} from './indexSty'
import { InfoCard } from '@/components/InfoCard'
import { IphonexView } from '@/components/IphonexView'
import { TabBar } from '@/components/TabBar'
import { ActivityCard } from '@/components/ActivityCard'

export enum EPageStatus {
  signStatus = "signStatus",
  matchStatus = "matchStatus",
  homeStatus = "homeStatus",
}


type IProps = {
  store: {
    homeStore,
  }
}

type IState = {
  currentTabIndex: Number | undefined
  choices: any[]
  pageStatus: string
}


@inject('store')
@observer
class Index extends Component<IProps, IState> {
  private homeStore: HomeStore
  private commonStore: CommonStore

  constructor(props) {
    super(props)
    this.homeStore = props.store.homeStore
    this.commonStore = props.store.commonStore
    this.state = {
      pageStatus: EPageStatus.signStatus,
      currentTabIndex: undefined,
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

      this.setState({
        pageStatus: EPageStatus.matchStatus
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

  onClickTab = (currentTabIndex:number) => {
    const NavigationBarTitle = ['消息', '平安好姻缘','活动']

    this.setState({currentTabIndex, pageStatus: EPageStatus.homeStatus})

    Taro.setNavigationBarTitle({
      title: NavigationBarTitle[currentTabIndex]
    })
  }

  // logo渲染
  renderLogoView = () => {
    const { pageStatus } = this.state

    switch(pageStatus){
      case EPageStatus.signStatus:
      case EPageStatus.matchStatus:
        return (
          <IndexLogo
            className={pageStatus === EPageStatus.signStatus ? translateY60 : translateY90}
            src={biggerLogo}
          />
        )
        break
      default:
        return null
    }
  }

  // button渲染
  renderBtn = () => {
    const { isDoneSign } = this.homeStore
    const { pageStatus } = this.state
    const isMatchView = pageStatus === EPageStatus.matchStatus
    if(pageStatus !== EPageStatus.homeStatus) {
      return (
        <SignBtn
          active={isDoneSign}
          className={isMatchView ? matchBox : ''}
          onClick={this.onClickSign}
        >
          {isMatchView ? '匹配' : '开启好姻缘'}
        </SignBtn>
      )
    }
  }

  // 名称和性别选择渲染
  renderSignFrom = () => {
    const { pageStatus, choices } = this.state

    switch(pageStatus){
      case EPageStatus.signStatus:
        return (
          [
            <NickNameInput
              key={'isNext_0'}
              placeholder="请输入昵称"
              placeholderClass="nameInput-placeholder"
              onInput={this.onInput}
            />,
            <SexChoiceView
              key={'isNext_1'}
            >
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
          ]
        )
        break
      default:
        return null
    }
  }


  // tab内容区渲染
  renderTabContent = () => {
    const { pageStatus, currentTabIndex } = this.state
    const cardData = [
      {
        name: '小可爱',
        time: '下午 4:23',
        info: '今晚一起加班啊'
      },
      {
        name: 'cici',
        time: '昨天 14:30',
        info: '哈哈哈'
      }
    ]
    const activityCardData = [
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
    if( pageStatus === EPageStatus.homeStatus)
      if(currentTabIndex === 0){
        return (
          <InfoCard
            cardData = {cardData}
          />
        )
      } else if(currentTabIndex === 2){
        return (
          <ActivityCard activityCardData = {activityCardData}/>
        )
      }
  }

  render() {
    const { pageStatus, currentTabIndex } = this.state
    return (
      <IndexMain>
        { this.renderLogoView() }

        { this.renderSignFrom() }

        { this.renderBtn() }

        <TabBar
          pageStatus={pageStatus}
          currentTabIndex = {currentTabIndex}
          isShow = {
            pageStatus === EPageStatus.matchStatus ||
            pageStatus === EPageStatus.homeStatus
          }
          callback={this.onClickTab}
        />

        { this.renderTabContent() }

        {/* iphonex适配 */}
        <IphonexView />
      </IndexMain>
    )
  }
}

export default Index
