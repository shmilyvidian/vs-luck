import { View } from "@tarojs/components";
import { styled } from "linaria/react";

export const IndexTabBar = styled(View)`
  width: 270px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 10;
  bottom: 32px;
  left: calc(100% - 270) / 2 + "px";
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: 33px;
  transition: transform 1s ease-in-out;
  background: #fff;

  .item-group-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex: 1;
    height: 100%;
    &-image {
      width: 26px;
      height: 26px;
    }
  }

  .item-group-btn:nth-child(2) {
    ::before {
      content: "";
      display: inline-block;
      width: 68px;
      height: 68px;
      border: 8px solid #fdf5d5;
      background-color: #fbedb3;
      border-radius: 100%;
      position: absolute;
      z-index: 1;
      animation: inRipple 2s linear infinite;
      @keyframes inRipple {
        0% {
          border-width: 0px;
          transform: scale(1);
        }
        20% {
          border-width: 8px;
          transform: scale(1.2);
        }
        50% {
          border-width: 8px;
          transform: scale(1.2);
        }
        70% {
          border-width: 0px;
          transform: scale(1);
        }
        100% {
          border-width: 0px;
          transform: scale(1);
        }
      }
    }

    ::after {
      content: "";
      display: inline-block;
      width: 68px;
      height: 68px;
      position: absolute;
      z-index: 2;
      background-color: #f7ce2b;
      border-radius: 100%;
    }

    width: 68px;
    height: 68px;
    max-width: 68px;
    border-radius: 100%;
    background-color: #f7ce2b;
    .item-group-btn-image {
      position: relative;
      z-index: 3;
      width: 28px;
      height: 24px;
    }
  }
`;
