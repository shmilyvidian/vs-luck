import React from 'react'
import { View } from '@tarojs/components'
import { TitleWrapper, ItemWrapper, LeftItem, DateWrapper } from './activityItemSty'
import { activityListDataType } from './type'
import activeImg from '@/assets/images/active.png'

interface IProps {
    data: activityListDataType
    callback: () => void
}

export function ActivityItem({data, callback}: IProps) {
    // 跳详情页
    const onClickItem = () => {
        typeof callback === 'function' && callback.call(null)
    }

    return (
        <ItemWrapper onClick={onClickItem}>
            <LeftItem src={activeImg}></LeftItem>
            <View>
                <TitleWrapper>{data.title}</TitleWrapper>
                <DateWrapper>{data.date}</DateWrapper>
            </View>
        </ItemWrapper>
    )
}