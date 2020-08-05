import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { css } from 'linaria'


import G from '@/assets/images/G.png'

export const tipCss  = css`
    margin-top:20px;
    color:#f7ce2b
`

export const timeoutView  = css`
    display:flex;
    flex-direction: column;
    align-items:center;
    width:80%;
    margin:100px auto 0;
`

export const timeoutViewImage = css`
    position:relative;
    width:100px;
    height:100px;
    animation: scale12 1s linear infinite;

    @keyframes scale12 {
        33% {
            transform: scale(1);
        }
        66% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
`

export const timeoutViewImageTime = css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 2;
    color: #000;
    font-size: 44rpx;
    font-weight:700;

`

interface IProps {
    callback: () => void
}

type IState = {
    time: Number,
    timerID: number
}

export class TimeOutView extends Component<IProps,IState>{
    constructor(props) {
        super(props)
        this.state = {
            time:3,
            timerID:0
        }
    }
    componentWillMount(){
        let {callback} = this.props
        this.setState({
            timerID:setInterval(()=> {
                this.state.time--
                if( this.state.time === 0){
                    clearInterval(this.state.timerID)
                    typeof callback === 'function' && callback.call(null)
                }else{
                    this.setState({time:this.state.time})
                }
            },1000)
        })
    };
    componentWillUnmount(){
        clearInterval(this.state.timerID)
    }
    render(){
        const {time} = this.state
    return (
        <View className={timeoutView}>
           <Image className={timeoutViewImage} src={G}>
                <view className={timeoutViewImageTime}>{time}</view>
           </Image>
           <Text className={tipCss}>匹配中...</Text>
        </View>
    )
    }
}