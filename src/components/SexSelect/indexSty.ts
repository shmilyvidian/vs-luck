import { View } from '@tarojs/components';
import { styled } from 'linaria/react';
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