import { styled } from 'linaria/react'
import { Image, Input, View } from '@tarojs/components'
import { css } from 'linaria'

export const tabItem = css`
   width: 26px;
  height: 26px;
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
    }
`

export const matchBox = css`
  margin-top: 108px;
`

export const translateY60 = css`
  animation: translateY60 .5s linear forwards;
  padding-bottom: 80px;
  @keyframes translateY60 {
      from {
        transform:  translate(0, -152px);
        margin-top: 0
      }
      to {
          transform:  translate(0, 0);
          margin-top: 108px

      }
    }
`

export const translateY90 = css`
  animation: translateY90 .5s linear forwards;
  margin-bottom: 208px;

  @keyframes translateY90 {
      from {
            transform:  translate(0, -152px);
            margin-top: 0
      }
      to {
            width: 272px;
            height: 64px;
            transform:  translate(0, 167px);
      }
    }
`

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
    padding-bottom: 6px;
    text-align: center;
    font-weight: bold;
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


export const SignBtn = styled(View)<{active}>`
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