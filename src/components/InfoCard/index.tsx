import React from 'react'
import { View, Text } from '@tarojs/components'
import { InfoCardBox, LeftIn } from './indexSty'
import { EmptyView } from '../EmptyView'

type Icard = {
  name: string
  time: string
  info: string
}

interface IProps {
  cardData: Icard[]
}

export function InfoCard(props: IProps) {

  const { cardData = [] } = props
  return (
    <View>
      {
        cardData.length ?
          cardData.map((o, i) =>
            <LeftIn key={i} left={-i}>
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
    </View>
  )
}