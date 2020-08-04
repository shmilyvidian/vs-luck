import { View, Image } from '@tarojs/components';
import { css } from 'linaria'
import { styled } from 'linaria/react'


export const tabItem = css`
    width: 26px;
    height: 26px;
`

export const IndexTabBar = styled(View)`
    width: 270px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 32px;
    left: calc(100% - 270)/2 + 'px';
    box-shadow: 0 2px 20px 0 rgba(0,0,0,0.20);
    border-radius: 33px;
`

export const IndexTabBarIcon = styled(Image)`

}
`

export const tabItem_GBox = css`
  width: 68px;
  height: 68px;
  animation: r0 1.4s linear infinite;
    @keyframes r0 {
    0% {
        border-radius: 50%;
        box-shadow: 0 0 8px 8px rgba(247, 206, 43, 0.2), 0 0 8px 8p rgba(247, 206, 43, 0.2), 0 0 8px 8px rgba(247, 206, 43, 0.2);
    }
    100% {
        border-radius: 50%;
        box-shadow: 0 0 16px 16px rgba(247, 206, 43, 0.2), 0 0 16px 16px rgba(247, 206, 43, 0.2), 0 0 16px 16px rgba(247, 206, 43, 0.2);
    }
    100% {
        border-radius: 50%;
        box-shadow: 0 0 8px 8px rgba(247, 206, 43, 0.2), 0 0 8px 8px rgba(247, 206, 43, 0.2), 0 0 8px 8px rgba(247, 206, 43, 0.2);
    }
`
