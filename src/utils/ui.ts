import Taro from "@tarojs/taro";

let systemInfo: any;

export const isIphoneX = () => {
  if (!systemInfo) {
    systemInfo = Taro.getSystemInfoSync();
  }
  console.log(systemInfo.brand,systemInfo.model)
  console.log(systemInfo.model.search('iPhone X') !== -1)
  return systemInfo.model.search('iPhone X') !== -1;
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
