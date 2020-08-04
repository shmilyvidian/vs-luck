import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { css } from 'linaria'
import { Image, View } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { HomeStore } from '@/store/homeStore'
import { CommonStore } from '@/store/commonStore'
import { gennerateTaroNavigateParams } from '@/utils/urlParam'
import biggerLogo from '@/assets/images/logo-bigger.png'
import female from '@/assets/images/female.png'
import femaleGray from '@/assets/images/female-gray.png'
import male from '@/assets/images/male.png'
import maleGray from '@/assets/images/male-gray.png'
import chat from '@/assets/images/chat.png'
import chatGray from '@/assets/images/chat-gray.png'
import activity from '@/assets/images/activity.png'
import activityGray from '@/assets/images/activity-gray.png'
import G from '@/assets/images/G.png'
import { IndexMain, IndexLogo, NickNameInput, SexChoiceView, SignBtn, IndexTabBar, IndexTabBarIcon } from './indexSty'
import { isIphoneX } from '@/utils/ui'
import { InfoCard } from '@/components/InfoCard'
const tabItem = css`
   width: 26px;
  height: 26px;
`
const tabItem_GBox = css`
  width: 68px;
  height: 68px;
  animation: r0 1.4s linear infinite;
    @keyframes r0 {
    0% {
        border-radius: 50%;
        box-shadow: 0 0 8px 8px rgba(247, 206, 43, 0.2), 0 0 8px 8p rgba(247, 206, 43, 0.2), 0 0 8px 8px rgba(247, 206, 43, 0.2);
    }
    100% {
        border-radius: 50%;
        box-shadow: 0 0 16px 16px rgba(247, 206, 43, 0.2), 0 0 16px 16px rgba(247, 206, 43, 0.2), 0 0 16px 16px rgba(247, 206, 43, 0.2);
    }
    100% {
        border-radius: 50%;
        box-shadow: 0 0 8px 8px rgba(247, 206, 43, 0.2), 0 0 8px 8px rgba(247, 206, 43, 0.2), 0 0 8px 8px rgba(247, 206, 43, 0.2);
    }
    }
`

const matchBox = css`
  margin-top: 108px;
`

const translateY60 = css`
  animation: translateY60 .5s linear forwards;
  padding-bottom: 80px;
  @keyframes translateY60 {
      from {
        transform:  translate(0, -152px);
        margin-top: 0
      }
      to {
          transform:  translate(0, 0);
          margin-top: 108px

      }
    }
`

const translateY90 = css`
  animation: translateY90 .5s linear forwards;
  margin-bottom: 208px;
  width: 272px;
  height: 64px;
  @keyframes translateY90 {
      from {
        transform:  translate(0, -152px);
        margin-top: 0
      }
      to {
          transform:  translate(0, 167px);
      }
    }
`

type propsType = {
  store: {
    homeStore,
  }
}
type ITab = {
  cls: string
  url: string
}

type stateType = {
  currentIndex: Number | undefined
  currentTabIndex: Number | undefined
  choices: any[]
  isNext: Boolean,
  tabs: Array<ITab>
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
      isNext: false,
      currentIndex: undefined,
      currentTabIndex: undefined,
      choices: [
        maleGray,
        femaleGray
      ],
      tabs: [
        {url: chatGray,cls: tabItem},
        {url: G, cls: tabItem_GBox},
        {url: activityGray, cls: tabItem}
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
        isNext: true
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
    if (currentTabIndex !== 1){
      const { tabs } = this.state
      const tabIcons = [chat, G,activity]
      const isHighlight = tabs.some(o=>o.url.includes('gray'))

      if (isHighlight) {
        tabs.forEach((o,i)=> i === 1 ? o.url : (o.url = o.url.includes('gray') ? o.url : o.url.substring(0, (o.url.indexOf('.png')))+'-gray.png'))
        tabs[currentTabIndex].url =  tabIcons[currentTabIndex]
      }
      this.setState({currentTabIndex, tabs}, ()=>{
        console.log(tabs)
      })
    }

    Taro.setNavigationBarTitle({
      title: NavigationBarTitle[currentTabIndex]
  })
  }
  render() {
    const { isDoneSign } = this.homeStore
    const { choices, isNext, tabs, currentTabIndex } = this.state
    const isHome =  !isNaN(Number(currentTabIndex))
    return (
      <IndexMain>
        {
          isHome ? null :
          <IndexLogo
            className={isNext ? translateY90 : translateY60}
            src={biggerLogo}
          />
        }
        {
          isNext || isHome ? null : [
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
        }
        {
          isHome ? null :
          <SignBtn
            active={isDoneSign}
            className={isNext && matchBox}
            onClick={this.onClickSign}
          >
            {isNext ? '匹配' : '开启好姻缘'}
          </SignBtn>
        }
        {
          isNext && (
            <IndexTabBar>
              {
                tabs.map((o,i)=><View key={i} onClick={this.onClickTab.bind(this, i)}><IndexTabBarIcon className={o.cls} src={o.url} /></View>)
              }
            </IndexTabBar>
          )
        }
        {
          isHome && (

            <InfoCard cardData={
              [
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
          } />
          )
        }
         <View
            style={{
              width: "100%",
              height: isIphoneX() ? "34px" : "0px",
              marginBottom: 0,
              backgroundColor: "#fff"
            }}
          />
      </IndexMain>
    )
  }
}

export default Index
