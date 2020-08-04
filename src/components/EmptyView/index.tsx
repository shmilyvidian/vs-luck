import React from 'react'
import { View, Image, Text } from '@tarojs/components'
import empty from '@/assets/images/empty.png'
import { css } from 'linaria'

const emptyView = css`
    width: 108px;
    margin-top: 192px;
    display: flex;
    justify-content:center;
    flex-direction: column;
`

const empty_img = css`
    width: 92px;
    height: 72px;
`

const empty_text = css`
    margin-top: 46px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #B9BBBE;
    letter-spacing: 0;
    text-align: center;
`

interface IProps {
    text: string
    imgUrl?: string
}

export class EmptyView extends React.PureComponent<IProps> {

    render(){
        return (
            <View className={emptyView}>
                <Image className={empty_img} src={this.props.imgUrl || empty} />
                <Text className={empty_text}>{this.props.text}</Text>
            </View>
        )
    }
}