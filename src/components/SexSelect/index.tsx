import { Image } from "@tarojs/components";
import { SexChoiceView } from "./indexSty";
import React, { useState, useEffect } from "react";
import female from "@/assets/images/female.png";
import femaleGray from "@/assets/images/female-gray.png";
import male from "@/assets/images/male.png";
import maleGray from "@/assets/images/male-gray.png";

type IProps = {
  callback: (sex: number) => void
}
export const SexSelect = ({ callback }: IProps) => {
  const activeSexs = [male, female]
  const graySexs = [maleGray, femaleGray]
  const [sexs, setSexs] = useState<string[]>(graySexs)
  const [currentSexIndex, setCurrentSexIndex] = useState<number | undefined>()


  useEffect(() => {
    sexs.forEach((_, i) => (sexs[i] = graySexs[i]))
    sexs[currentSexIndex] = activeSexs[currentSexIndex]
    typeof callback === 'function' && callback.call(null, currentSexIndex)
    setSexs(JSON.parse(JSON.stringify(sexs)))
  }, [currentSexIndex])

  return (
    <SexChoiceView>
      {
        sexs.map((o, i) => {
          return (
            <Image
              key={o}
              src={o}
              className="item-choice"
              onClick={() => setCurrentSexIndex(i)}
            />
          )
        })
      }
    </SexChoiceView>
  )
}