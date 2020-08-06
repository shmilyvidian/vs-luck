import { styled } from 'linaria/react'
import { Image, View } from '@tarojs/components'


export const TitleWrapper = styled(View)`
  width: 213px;
  font-size: 14px;
  color: #00162B;
  font-weight: bold;
  letter-spacing: 0;
  margin-bottom: 12px;
`

export const LeftItem = styled(Image)`
  width: 90px;
  height: 70px;
  font-size: 14px;
  color: #00162B;
  margin-right: 10px;
  background: #B9BBBE;
  flex: 0 0 90px;
`

export const DateWrapper = styled(View)`
font-size: 12px;
color: #B9BBBE;
`

export const ItemWrapper = styled(View)`
  width: 335px;
  height: 94px;
  background: #FFFFFF;
  box-shadow: 0 2px 20px 0 rgba(0,0,0,0.20);
  border-radius: 10px;
  display: flex;
  box-sizing: border-box;
  padding: 12px;
  margin-bottom: 12px;
  
`