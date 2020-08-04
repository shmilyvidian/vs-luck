import { styled } from 'linaria/react'
import { Image, Input, View } from '@tarojs/components'

const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

export const IndexMain = styled(View)`
    width: 375px;
    height:100%;
    padding-top: 20px;
    ${center}
`

export const ItemWrapper = styled(View)`
  width: 335px;
  height: 94px;
  background: #FFFFFF;
  box-shadow: 0 2px 20px 0 rgba(0,0,0,0.20);
  border-radius: 10px;
`