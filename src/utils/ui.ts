import Taro from "@tarojs/taro";

let systemInfo: any;

export const isIphoneX = () => {
  if (!systemInfo) {
    systemInfo = Taro.getSystemInfoSync();
  }
  if (systemInfo.screenHeight >= 812 && systemInfo.brand === "iPhone") {
    return true;
  }
  
  return false;
};
export const isAndroid =() =>{

  if (!systemInfo) {
    systemInfo = Taro.getSystemInfoSync();
  }
  if(systemInfo.system.startsWith('Android')){
    return true;

  }
  return false;
}

export const getWidth = () => {
  return Taro.getSystemInfoSync().windowWidth;
};
export const getWindowHeight = () => {
  return Taro.getSystemInfoSync().windowHeight;
};
