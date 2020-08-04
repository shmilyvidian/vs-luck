import React, { Component } from 'react'
import { View } from '@tarojs/components'
import {
    tabItem,
    tabItem_GBox,
    IndexTabBar,
    IndexTabBarIcon
  }  from './indexSty'
import chat from '@/assets/images/chat.png'
import chatGray from '@/assets/images/chat-gray.png'
import activity from '@/assets/images/activity.png'
import activityGray from '@/assets/images/activity-gray.png'
import G from '@/assets/images/G.png'

type ITab = {
    cls: string
    url: string
}

interface IProps {
    pageStatus: string
    isShow: Boolean
    currentTabIndex: Number | undefined
    callback: (currentTabIndex: number) => void
}
interface IState {
    tabs: Array<ITab>
}

export class TabBar extends Component<IProps, IState>{
      constructor(props){
          super(props)
          this.state = {
            tabs: [
                { url: chatGray,cls: tabItem },
                { url: G, cls: tabItem_GBox },
                { url: activityGray, cls: tabItem }
              ]
          }
      }

      shouldComponentUpdate(nextProps){
        if(this.props.currentTabIndex === undefined && !isNaN(Number(nextProps.currentTabIndex))){
          return false
        }
        return true
      }

      onClickTab = (currentTabIndex: number) => {

        const { callback } = this.props
        const isIncludeGray = (val) => val.url.includes('gray')

        if (currentTabIndex !== 1){
          const { tabs } = this.state
          const tabIcons = [chat, G,activity]
          const isHighlight = tabs.some(o=>isIncludeGray(o))

          if (isHighlight) {
            tabs.forEach((o,i)=> i === 1 ? o.url : (o.url = isIncludeGray(o) ? o.url : o.url.substring(0, (o.url.indexOf('.png')))+'-gray.png'))
            tabs[currentTabIndex].url =  tabIcons[currentTabIndex]
          }
          this.setState({tabs}, ()=>{
            console.log(tabs)
          })
        }

        typeof callback && callback.call(null, currentTabIndex)
      }

      render(){
        const { isShow } = this.props
        const { tabs } = this.state
        return (
            !isShow ? null :
            (
                <IndexTabBar>
                    {
                        tabs.map((o,i)=>{
                        return (
                            <View
                                key={i}
                                onClick={this.onClickTab.bind(this, i)}
                            >
                                <IndexTabBarIcon className={o.cls} src={o.url} />
                            </View>
                        )
                        })
                    }
                </IndexTabBar>
            )
        )
    }
}