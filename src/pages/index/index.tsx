import React, { Component, useCallback, useState, useEffect, useReducer } from "react";
import Taro from "@tarojs/taro";
import { gennerateTaroNavigateParams } from "@/utils/urlParam";
import { observer, MobXProviderContext } from "mobx-react";
import biggerLogo from "@/assets/images/logo-bigger.png";

function useStores() {
  return React.useContext(MobXProviderContext)
}

function useStoreData() {
  const { store } = useStores()
  return {
    commonStore: store.commonStore,
    homeStore: store.homeStore,
  }
}
import {
  IndexMain,
  IndexLogo,
  NickNameInput,
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
import { SexSelect } from "@/components/SexSelect";

export enum EPageStatus {
  signStatus = "signStatus",
  matchStatus = "matchStatus",
  homeStatus = "homeStatus",
}


const Index  = observer(()=> {
  const store = useStoreData()
  const [pageStatus, setPageStatus] = useState<string>(EPageStatus.signStatus)
  const [startMatch, setStartMatch] = useState<boolean>(false)
  const [currentTabIndex, setTabIndex] = useState<number>()

  const onClickSelectSex = (index:number) => {
    store.homeStore.setChoices(index)
  }

  // 完成注册
  const onClickSign = () => {
    const { isDoneSign } = store.homeStore;
    // 匹配
    const isMatchView = pageStatus === EPageStatus.matchStatus;
    if (isMatchView) {
      setStartMatch(true)
      setPageStatus(EPageStatus.matchStatus)
    }
    // 开启好姻缘
    if (!isDoneSign) {
      Taro.showToast({ title: "信息未填写完成", icon: "none", duration: 1500 });
      return;
    }

    Taro.setNavigationBarTitle({
      title: "平安好姻缘",
    });
    setPageStatus(EPageStatus.matchStatus)
    setTabIndex(1)
  };

  // // 输入昵称
  const onInput = (e) => {
    const { setData } = store.commonStore
    setData("userInfo.nickname", e.target.value, store.homeStore)
  };

  const onClickTab = (currentTabIndex: number) => {
    const NavigationBarTitle = ["消息", "平安好姻缘", "活动"]

    setTabIndex(currentTabIndex)
    setPageStatus(currentTabIndex === 1
      ? EPageStatus.matchStatus
      : EPageStatus.homeStatus)

    if (currentTabIndex !== 1) {
      setStartMatch(false)
    }
    Taro.setNavigationBarTitle({
      title: NavigationBarTitle[currentTabIndex],
    });
  };

  // logo渲染
  const renderLogoView = () => {

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
  const renderBtn = () => {
    const { isDoneSign } = store.homeStore;
    const isMatchView = pageStatus === EPageStatus.matchStatus;
    if (pageStatus !== EPageStatus.homeStatus) {
      return (
        !startMatch && (
          <SignBtn
            active={isDoneSign}
            className={isMatchView ? matchBox : ""}
            onClick={onClickSign}
          >
            {isMatchView ? "匹配" : "开启好姻缘"}
          </SignBtn>
        )
      );
    }
  };

  // 名称和性别选择渲染
  function renderSignFrom ()  {
    switch (pageStatus) {
      case EPageStatus.signStatus:
        return  (
            <NickNameInput
              placeholder="请输入昵称"
              placeholderClass="nameInput-placeholder"
              onInput={onInput}
            />
          )
        break;
      default:
        return null;
    }
  };

  // tab内容区渲染
  const renderTabContent = () => {
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
  const renderTimeOutView = () => {
    return (
      startMatch && <TimeOutView callback={timeOutSuccess} />
    );
  };
  // 匹配完成
  const timeOutSuccess = () => {
    Taro.navigateTo(gennerateTaroNavigateParams("chart"));
    setStartMatch(false)
  }

    return (
      <IndexMain>
        {renderLogoView()}

        {renderSignFrom()}

        {pageStatus === EPageStatus.signStatus && <SexSelect callback={onClickSelectSex} />}

        {renderBtn()}

        {renderTimeOutView()}

        {
          ( pageStatus === EPageStatus.matchStatus ||
            pageStatus === EPageStatus.homeStatus) &&
            <TabBar
              currentTabIndex={currentTabIndex}
              callback={onClickTab}
            />
        }

        {renderTabContent()}

        {/* iphonex适配 */}
        <IphonexView />
      </IndexMain>
    );
})

export default Index