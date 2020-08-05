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

export function EmptyView(props:IProps){
    const {imgUrl, text} = props
    return (
        <View className={emptyView}>
            <Image className={empty_img} src={imgUrl || empty} />
            <Text className={empty_text}>{text}</Text>
        </View>
    )
}