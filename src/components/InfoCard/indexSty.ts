import { styled } from 'linaria/react'
import { Image, Input, View } from '@tarojs/components'

export const InfoCardBox = styled(View)`
    width: 305px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    box-shadow: 0 2px 20px 0 rgba(0,0,0,0.20);
    border-radius: 10px;
    padding:12px 16px 6px 14px;
    margin-top: 12px;

    .card_top{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        &_name{
            font-family: PingFangSC-Semibold;
            font-size: 16px;
            color: #00162B;
            letter-spacing: 0;
        }
        &-time{
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #B9BBBE;
            letter-spacing: 0;
        }
    }
    .card_bottom{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #7B7F82;
        letter-spacing: 0;
    }
`

export const LeftIn = styled(View) <{ left: any }>`
animation: leftIn 1s ease;

@keyframes leftIn {
  from {
    transform: translatex(${ props => ((props.left - 1) * 1000)}px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity:1;
  }
}
`


export const CardWrapper = styled(View)`
  padding-bottom: 20px;
`



