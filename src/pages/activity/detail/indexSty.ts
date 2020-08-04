import { styled } from 'linaria/react'
import { Image, View } from '@tarojs/components'


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