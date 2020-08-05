import React from 'react'
import Taro from '@tarojs/taro'
import { IndexMain } from './indexSty'
import { ActivityItem } from './activityItem'
import { EmptyView } from '@/components/EmptyView'
import { gennerateTaroNavigateParams } from '@/utils/urlParam'
import { activityListDataType } from './type'

// 列表中数据类型
interface IProps {
    activityCardData: activityListDataType[]
}

export function ActivityCard (props:IProps) {
        const onGoDetail = () => {
            Taro.navigateTo(gennerateTaroNavigateParams("/pages/activity/detail/index", { from: 'activity' }))
        }
        const { activityCardData = [] } = props

        return (
            <IndexMain>
                {
                    activityCardData.length ?
                    activityCardData.map((item: activityListDataType,index:number) => {
                        return (
                            <ActivityItem key={index} data={item} callback={onGoDetail}/>
                        )
                    }) : <EmptyView text='啊哦，还没有活动快去匹配发现一下吧' />
                }
            </IndexMain>
        )
}
