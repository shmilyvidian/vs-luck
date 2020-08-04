import React from 'react'
import { View } from '@tarojs/components'
import { TitleWrapper, ItemWrapper, LeftItem, DateWrapper } from './activityItemSty'
import { activityListDataType } from './type'
import activeImg from '@/assets/images/active.png'

interface IProps{
    data: activityListDataType
    callback: () => void
}

export class ActivityItem extends React.PureComponent<IProps> {
    constructor(IProps){
        super(IProps)
    }

    // 跳详情页
    onClickItem = () => {
        const { callback } = this.props
        typeof callback === 'function' && callback.call(null)
    }

    render() {
        const { data } = this.props

        return (
        <ItemWrapper onClick={this.onClickItem}>
            <LeftItem src={activeImg}></LeftItem>
            <View>
            <TitleWrapper>{data.title}</TitleWrapper>
            <DateWrapper>{data.date}</DateWrapper>
            </View>
        </ItemWrapper>
        )
    }
}