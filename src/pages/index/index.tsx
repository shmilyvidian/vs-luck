import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { gennerateTaroNavigateParams } from "@/utils/urlParam";
import { Image } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { HomeStore } from "@/store/homeStore";
import { CommonStore } from "@/store/commonStore";
import biggerLogo from "@/assets/images/logo-bigger.png";
import female from "@/assets/images/female.png";
import femaleGray from "@/assets/images/female-gray.png";
import male from "@/assets/images/male.png";
import maleGray from "@/assets/images/male-gray.png";

import {
  IndexMain,
  IndexLogo,
  NickNameInput,
  SexChoiceView,
  SignBtn,
  translateY90,
  translateY60,
  matchBox,
} from "./indexSty";
import { InfoCard } from "@/components/InfoCard";
import { IphonexView } from "@/components/IphonexView";
import { TabBar } from "@/components/TabBar";
import { ActivityCard } from "@/components/ActivityCard";
import { TimeOutView } from "@/components/TimeOutView";

export enum EPageStatus {
  signStatus = "signStatus",
  matchStatus = "matchStatus",
  homeStatus = "homeStatus",
}

type IProps = {
  store: {
    homeStore;
  };
};

type IState = {
  currentTabIndex: Number | undefined; //0.消息视图。1.匹配视图。2.活动视图
  startMatch: Boolean; //开始匹配
  choices: any[];
  pageStatus: string;
};

@inject("store")
@observer
class Index extends Component<IProps, IState> {
  private homeStore: HomeStore;
  private commonStore: CommonStore;

  constructor(props) {
    super(props);
    this.homeStore = props.store.homeStore;
    this.commonStore = props.store.commonStore;
    this.state = {
      pageStatus: EPageStatus.signStatus,
      startMatch: false,
      currentTabIndex: undefined,
      choices: [maleGray, femaleGray],
    };
  }

  // 完成注册
  onClickSign = () => {
    const { isDoneSign } = this.homeStore;
    // 匹配
    const { pageStatus } = this.state;
    const isMatchView = pageStatus === EPageStatus.matchStatus;
    if (isMatchView) {
      this.setState({ startMatch: true, pageStatus: EPageStatus.matchStatus });
    }
    // 开启好姻缘
    if (!isDoneSign) {
      Taro.showToast({ title: "信息未填写完成", icon: "none", duration: 1500 });
      return;
    }

    Taro.setNavigationBarTitle({
      title: "平安好姻缘",
    });

    this.setState({
      pageStatus: EPageStatus.matchStatus,
      currentTabIndex: 1,
    });
    // Taro.navigateTo(gennerateTaroNavigateParams("home", { from: 'sign' }))
  };

  // 输入昵称
  onInput = (e) => {
    const { setData } = this.commonStore;
    setData("userInfo.nickname", e.target.value, this.homeStore);
  };

  // 选择性别
  onChoseSex = (index: number) => {
    const { setData } = this.commonStore;
    const { choices } = this.state;
    const activeChoices = [male, female];
    const grayChoices = [maleGray, femaleGray];

    choices.forEach((_, i) => (choices[i] = grayChoices[i]));
    choices[index] = activeChoices[index];

    this.setState({ choices });
    setData("userInfo.sex", index, this.homeStore);
  };

  onClickTab = (currentTabIndex: number) => {
    const NavigationBarTitle = ["消息", "平安好姻缘", "活动"];

    this.setState({
      currentTabIndex,
      pageStatus:
        currentTabIndex === 1
          ? EPageStatus.matchStatus
          : EPageStatus.homeStatus,
    });
    if (currentTabIndex !== 1) {
      this.setState({
        startMatch: false,
      });
    }
    Taro.setNavigationBarTitle({
      title: NavigationBarTitle[currentTabIndex],
    });
  };

  // logo渲染
  renderLogoView = () => {
    const { pageStatus, startMatch } = this.state;

    switch (pageStatus) {
      case EPageStatus.signStatus:
      case EPageStatus.matchStatus:
        return (
          !startMatch && (
            <IndexLogo
              className={
                pageStatus === EPageStatus.signStatus
                  ? translateY60
                  : translateY90
              }
              src={biggerLogo}
            />
          )
        );
        break;
      default:
        return null;
    }
  };

  // button渲染
  renderBtn = () => {
    const { isDoneSign } = this.homeStore;
    const { pageStatus, startMatch } = this.state;
    const isMatchView = pageStatus === EPageStatus.matchStatus;
    if (pageStatus !== EPageStatus.homeStatus) {
      return (
        !startMatch && (
          <SignBtn
            active={isDoneSign}
            className={isMatchView ? matchBox : ""}
            onClick={this.onClickSign}
          >
            {isMatchView ? "匹配" : "开启好姻缘"}
          </SignBtn>
        )
      );
    }
  };

  // 名称和性别选择渲染
  renderSignFrom = () => {
    const { pageStatus, choices } = this.state;

    switch (pageStatus) {
      case EPageStatus.signStatus:
        return [
          <NickNameInput
            key={"isNext_0"}
            placeholder="请输入昵称"
            placeholderClass="nameInput-placeholder"
            onInput={this.onInput}
          />,
          <SexChoiceView key={"isNext_1"}>
            {Array.from({ length: 2 }, (_, i) => i).map((o) => {
              return [
                <Image
                  key={o}
                  src={choices[o]}
                  className="item-choice"
                  onClick={this.onChoseSex.bind(this, o)}
                />,
              ];
            })}
          </SexChoiceView>,
        ];
        break;
      default:
        return null;
    }
  };

  // tab内容区渲染
  renderTabContent = () => {
    const { pageStatus, currentTabIndex } = this.state;
    const cardData = [
      {
        name: "小可爱",
        time: "下午 4:23",
        info: "今晚一起加班啊",
      },
      {
        name: "cici",
        time: "昨天 14:30",
        info: "哈哈哈",
      },
    ];
    const activityCardData = [
      {
        title: "和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！",
        date: "2020年7月13日",
      },
      {
        title: "和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！",
        date: "2020年7月13日",
      },
      {
        title: "和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！",
        date: "2020年7月13日",
      },
      {
        title: "和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！",
        date: "2020年7月13日",
      },
      {
        title: "和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！",
        date: "2020年7月13日",
      },
      {
        title: "和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！",
        date: "2020年7月13日",
      },
      {
        title: "和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！",
        date: "2020年7月13日",
      },
      {
        title: "和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！",
        date: "2020年7月13日",
      },
      {
        title: "和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！",
        date: "2020年7月13日",
      },
      {
        title: "和你去旅行 | 去清远清凉一夏，叫上小伙伴体验激情峡谷漂流！",
        date: "2020年7月13日",
      },
    ];
    if (pageStatus === EPageStatus.homeStatus)
      if (currentTabIndex === 0) {
        return <InfoCard cardData={cardData} />;
      } else if (currentTabIndex === 2) {
        return <ActivityCard activityCardData={activityCardData} />;
      }
  };

  // 匹配中视图渲染
  renderTimeOutView = () => {
    const { startMatch } = this.state;
    return (
      startMatch && <TimeOutView callback={this.timeOutSuccess.bind(this)} />
    );
  };
  // 匹配完成
  timeOutSuccess() {
    Taro.navigateTo(gennerateTaroNavigateParams("chart"));
    this.setState({ startMatch: false });
  }
  render() {
    const { pageStatus, currentTabIndex } = this.state;
    return (
      <IndexMain>
        {this.renderLogoView()}

        {this.renderSignFrom()}

        {this.renderBtn()}

        {this.renderTimeOutView()}
        {typeof currentTabIndex === "number" && (
          <TabBar
            pageStatus={pageStatus}
            currentTabIndex={currentTabIndex}
            callback={this.onClickTab}
          />
        )}

        {this.renderTabContent()}

        {/* iphonex适配 */}
        <IphonexView />
      </IndexMain>
    );
  }
}

export default Index;
