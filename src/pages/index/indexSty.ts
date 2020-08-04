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
    ${center}
`


export const IndexLogo = styled(Image)`
    display: block;
    width: 218px;
    height: 50px;
}
`

export const NickNameInput = styled(Input)`
    width: 140px;
    padding-left: 60px;
    padding-bottom: 6px;
    border-bottom: 1px solid #B9BBBE;
    animation: translateY900 1s ease-in-out forwards;

    @keyframes translateY900 {
        from {
            transform: translate(0, 900px);
        }
        to {
            transform: translate(0, 0px);
        }
    }
`

export const SexChoiceView = styled(View)`
    width: 200px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    margin: 36px auto 96px;
    animation: translateY1000 1s ease-in-out forwards;

    .item-choice{
       width: 70px;
       height: 70px;
    }
    @keyframes translateY1000 {
        from {
            transform: translate(0, 1000px);
        }
        to {
            transform: translate(0, 0px);
        }
    }
`


export const SignBtn = styled(View)`
    width: 180px;
    height: 40px;
    background-color: ${props => props.active ? '#F7CE2B' : '#B9BBBE'};
    border-radius: 20px;
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #fff;
    letter-spacing: 0;
    ${center};
    animation: fadeIn 1.2s linear forwards;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
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
    animation: translateY900 1s ease-in-out forwards;

    @keyframes translateY900 {
        from {
            transform: translate(0, 800px);
        }
        to {
            transform: translate(0, 0px);
        }
    }
`

export const IndexTabBarIcon = styled(Image)`
    
}
`