import React from 'react'
import Taro from "@tarojs/taro";
import { View, Text } from '@tarojs/components'
import { InfoCardBox, LeftIn,CardWrapper } from './indexSty'
import { EmptyView } from '../EmptyView'
import { gennerateTaroNavigateParams } from '@/utils/urlParam'
import { observer, MobXProviderContext } from "mobx-react";

function useStores() {
  return React.useContext(MobXProviderContext)
}

function useStoreData() {
  const { store } = useStores()
  return {
    commonStore: store.commonStore,
    homeStore: store.homeStore,
    chartStore: store.chartStore,
  }
}

type Icard = {
  name: string
  time: string
  info: string
}

interface IProps {
  cardData: Icard[]
}

export function InfoCard(props: IProps) {
  const store = useStoreData()

  // 跳转聊天页
  function goToChart(name) {
    store.chartStore.setChartName(name)
    Taro.navigateTo(gennerateTaroNavigateParams("chart", { name: name }));
  }

  const { cardData = [] } = props
  return (
    <CardWrapper>
      {
        cardData.length ?
          cardData.map((o, i) =>
            <LeftIn key={i} left={-i} onClick={goToChart.bind(this, o.name)}>
              <InfoCardBox>
                <View className="card_top">
                  <Text className="card_top_name">{o.name}</Text>
                  <Text className="card_top_time">{o.time}</Text>
                </View>
                <Text className="card_bottom">{o.info}
                </Text>
              </InfoCardBox>
            </LeftIn>
          ) :
          <EmptyView text="啊哦，还没有好姻缘快去匹配发现一下吧" />
      }
    </CardWrapper>
  )
}