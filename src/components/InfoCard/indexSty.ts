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
    }
    .card_bottom{
       
    }
`