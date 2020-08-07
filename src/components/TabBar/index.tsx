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
    animation: translateY800 1s ease-in-out forwards;
    @keyframes translateY800 {
      from {
        transform: translate(0, 800px);
      }
      to {
        transform: translate(0, 0);
      }
    }
`;

interface IProps {
  currentTabIndex: number;
  callback: (currentTabIndex: number) => void;
}

type ITabs = {
  url: string
}

export const TabBar = React.memo(({ currentTabIndex, callback }: IProps) => {
  const tab_arr = [{ url: chatGray }, { url: heart }, { url: activityGray }]
  const [tabs, setTabs] = useState<ITabs[]>(tab_arr)
  const [initTranslateY800, setTranslate] = useState<string>(translateY800)
  const [tabIndex, setTabIndex] = useState<number>(currentTabIndex)

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
    setTranslate('')
    typeof callback === "function" && callback.call(null, tabIndex);
  }, [tabIndex])
  return (
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