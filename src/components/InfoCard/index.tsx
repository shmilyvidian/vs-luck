import React, { Component } from 'react'
import { InfoCardBox } from './indexSty'
import { View } from '@tarojs/components'

type Icard =  {
    name: string
    time: string
    info: string
}

type propsType = {
    cardData: Icard[]
}

interface InfoCard {
    props: propsType
}

export class InfoCard extends Component{

    render(){
        const { cardData = [] } = this.props
        return (
            <View>
                {
                    cardData.map((o,i)=>
                    <InfoCardBox key={i}>
                        <View className="card_top">
                            <View>{o.name}</View>
                            <View>{o.time}</View>
                        </View>
                        <View>
                            {
                                o.info
                            }
                        </View>
                    </InfoCardBox>
                    )}
            </View>
        )
    }
}