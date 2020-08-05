import React, { useState, useEffect } from "react";
import { css } from "linaria";
import { View, Image } from "@tarojs/components";
import { IndexTabBar } from "./indexSty";
import chat from "@/assets/images/chat.png";
import chatGray from "@/assets/images/chat-gray.png";
import activity from "@/assets/images/activity.png";
import activityGray from "@/assets/images/activity-gray.png";
import heart from "@/assets/images/heart.png";

const translateY800 = css`
  transform: translate(0, 800px);
`;

interface IProps {
  currentTabIndex: number;
  isShow: Boolean
  callback: (currentTabIndex: number) => void;
}

export const TabBar = React.memo(({ currentTabIndex, callback, isShow }: IProps) => {
  const tab_arr = [{ url: chatGray }, { url: heart }, { url: activityGray }]
  const [tabs, setTabs] = useState(tab_arr)
  const [initTranslateY800, setTranslate] = useState('')
  const [tabIndex, setTabIndex] = useState(currentTabIndex)

  useEffect(() => {
    setTranslate(translateY800)
    const timeId = setTimeout(() => {
      setTranslate('')
    }, 300)
    return () => {
      clearInterval(timeId)
    }
  }, [])

  useEffect(() => {
    if (currentTabIndex === tabIndex) return;
    const isIncludeGray = (val) => val.url.includes("gray");
    const tabIcons = [chat, heart, activity];
    const isHighlight = tabs.some((o) => isIncludeGray(o));
    if (isHighlight) {
      tabs.forEach((o, i) =>
        i === 1
          ? o.url
          : (o.url = isIncludeGray(o)
            ? o.url
            : o.url.substring(0, o.url.indexOf(".png")) + "-gray.png")
      );
      tabs[tabIndex].url = tabIcons[tabIndex];
    }
    setTabs(tabs)
    typeof callback === "function" && callback.call(null, tabIndex);
  }, [tabIndex])

  return (isShow &&
    <IndexTabBar className={initTranslateY800}>
      {
        tabs.map((o, i) => {
          return (
            <View
              className="item-group-btn"
              key={i}
              onClick={() => setTabIndex(i)}
            >
              <Image className="item-group-btn-image" src={o.url} />
            </View>
          );
        })
      }
    </IndexTabBar>
  )
})