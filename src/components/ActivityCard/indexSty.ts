import { styled } from 'linaria/react'
import { View } from '@tarojs/components'

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

export const LeftIn = styled(View)<{left: any}>`
animation: leftIn 1s ease;

@keyframes leftIn {
  from {
    transform: translatex(${ props => ((props.left + 1)  * 1000)}px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity:1;
  }
}
`
