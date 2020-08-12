import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Input, Image, ScrollView } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { IphonexView } from "@/components/IphonexView";
import "./index.scss";

// 图片
import voice from "@/assets/images/voice.png";
import add from "@/assets/images/add.png";
import emoji from "@/assets/images/emoji.png";
import picImg from "@/assets/images/pic.png";
import shootImg from "@/assets/images/shoot.png";
import locationImg from "@/assets/images/location.png";
import store from "@/store/index";

type propsType = {
  store: {
    homeStore;
  };
  userName: string;
};

interface infoListType {
  date: string | null;
  info: any;
  type: string;
}

type stateType = {
  infoList: Array<infoListType>;
  inputString: string;
  scrollInfo: string;
  showAddInfo: boolean;
  chartMap: Array<any>
};

interface Index {
  props: propsType;
  state: stateType;
}

@inject("store")
@observer
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoList: [],
      inputString: "",
      scrollInfo: "",
      showAddInfo: false,
      chartMap:[
        '你好，我叫小明。',
        '很高兴认识你！',
        '茫茫人海里相遇是我们的缘分！',
        '现在是2077年。',
        '今天28度'
      ]
    };
  }

  componentDidMount(){
    // 根据外部传入切换顶部标题
    Taro.setNavigationBarTitle({
      title: store.chartStore.chartName ? store.chartStore.chartName : "聊天",
    });
  }

  // 输入文字
  onInputInfo = (e) => {
    console.log(e);

    const { infoList } = this.state;
    infoList.push({
      date: "",
      info: e.detail.value,
      type: "send",
    });

    infoList.push({
      date: "",
      info: this.state.chartMap[Math.floor(Math.random()*5)] ,
      type: "receive",
    });

    // 设置消息 滚动到底部
    this.setState({
      infoList,
      scrollInfo: "msg" + (infoList.length - 1),
    });
  };

  // 是否显示额外功能
  onAddInfo = () => {
    let { showAddInfo } = this.state;
    showAddInfo = !showAddInfo;

    const { infoList } = this.state;
    this.setState({
      showAddInfo,
      scrollInfo: "msg" + (infoList.length - 1),
    });
    // 点击加号 将聊天记录滚动到底部 避免遮挡
  };

  render() {
    const { infoList, inputString, scrollInfo, showAddInfo } = this.state;

    // 显示信息
    const infoListTpl = infoList.map((item, index) => {
      if (item.type === "receive") {
        return (
          <View className="info-item" key={index} id={"msg" + index}>
            {item.date ? <View className="date-item">{item.date}</View> : null}
            <View className="receive-msg">{item.info}</View>
          </View>
        );
      } else {
        return (
          <View className="info-item" key={index} id={"msg" + index}>
            {item.date ? <View className="date-item">{item.date}</View> : null}
            <View className="send-item">
              <View className="send-msg">{item.info}</View>
            </View>
          </View>
        );
      }
    });

    return (
      <View className="index">
        {/* 对话框 */}
        <ScrollView
          className={showAddInfo ? "fixed-show info-wrapper" : "info-wrapper"}
          scrollIntoView={scrollInfo}
          scrollWithAnimation
          scroll-y
        >
          {infoListTpl}
        </ScrollView>
        {/* end of 对话框 */}
        {/* 文字输入 */}
        <View className="fixed">
          <View className="input-wrapper">
            <Image className="voice" src={voice}></Image>
            <Input
              className="input"
              value={inputString}
              adjust-position
              onConfirm={this.onInputInfo}
            ></Input>
            <Image className="emoji" src={emoji}></Image>
            <Image className="add" src={add} onClick={this.onAddInfo}></Image>
          </View>

          {/* 判断是否显示功能 */}
          {showAddInfo ? (
            <View className="other-function">
              <Image className="function-icon" src={picImg}></Image>
              <Image className="function-icon" src={shootImg}></Image>
              <Image className="function-icon" src={locationImg}></Image>
            </View>
          ) : null}
        </View>
        {/* end of 文字输入 */}
        <IphonexView />
      </View>
    );
  }
}

export default Index;
