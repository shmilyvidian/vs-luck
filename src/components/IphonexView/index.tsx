import React from 'react'
import { View } from '@tarojs/components'
import { isIphoneX } from '@/utils/ui'

export class IphonexView extends React.PureComponent {

    render(){
        const sty = {
            width: "100%",
            height: isIphoneX() ? "34px" : 0,
            marginBottom: 0,
            backgroundColor: "#fff"
        }
        return ( <View style={sty} /> )
    }
}