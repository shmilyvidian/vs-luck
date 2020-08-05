import React, { Component } from 'react'
import { css } from 'linaria'
import { View ,Image} from '@tarojs/components'
import {
    IndexTabBar
  }  from './indexSty'
import chat from '@/assets/images/chat.png'
import chatGray from '@/assets/images/chat-gray.png'
import activity from '@/assets/images/activity.png'
import activityGray from '@/assets/images/activity-gray.png'
import heart from '@/assets/images/heart.png'

const translateY800 = css`
  animation: translateY900 1s ease-in-out forwards;
  @keyframes translateY900 {
      from {
          transform: translate(0, 800px);
      }
      to {
          transform: translate(0, 0px);
      }
  }
`

type ITab = {
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
                { url: chatGray},
                { url: heart},
                { url: activityGray},
              ]
          }
      }

      onClickTab = (selectTabIndex: number) => {
        const { callback ,currentTabIndex} = this.props
        if(currentTabIndex === selectTabIndex )return
        const isIncludeGray = (val) => val.url.includes('gray')
        const { tabs} = this.state
        const tabIcons = [chat, heart,activity]
        const isHighlight = tabs.some(o=>isIncludeGray(o))
        if (isHighlight) {
            tabs.forEach((o,i)=> i === 1 ? o.url : (o.url = isIncludeGray(o) ? o.url : o.url.substring(0, (o.url.indexOf('.png')))+'-gray.png'))
            tabs[selectTabIndex].url =  tabIcons[selectTabIndex]
        }
        this.setState({tabs})
        typeof callback === 'function' && callback.call(null, selectTabIndex)
      }

      render(){
        const { isShow } = this.props
        const { tabs } = this.state
        return (
            !isShow ? null :
            (
                <IndexTabBar className={isNaN(Number(this.props.currentTabIndex)) ? translateY800 : ''}>
                    {
                        tabs.map((o,i)=>{
                        return (
                            <View
                                className="item-group-btn"
                                key={i}
                                onClick={this.onClickTab.bind(this, i)}
                            >
                                <Image className="item-group-btn-image" src={o.url} />
                            </View>
                        )
                        })
                    }
                </IndexTabBar>
            )
        )
    }
}