import { Image } from "@tarojs/components";
import { SexChoiceView } from "./indexSty";
import React, { useState, useEffect } from "react";
import female from "@/assets/images/female.png";
import femaleGray from "@/assets/images/female-gray.png";
import male from "@/assets/images/male.png";
import maleGray from "@/assets/images/male-gray.png";

type IProps = {
    callback: (sex:number) => void
}
export const SexSelect = ({callback}:IProps) =>{
    const activeSexs = [male, female]
    const graySexs = [maleGray, femaleGray]
    const [sexs, setSexs] = useState(graySexs)
    const [currentSexIndex, setCurrentSexIndex] = useState(undefined)

    useEffect(()=>{
        setSexs(graySexs)
        console.log(currentSexIndex,'v====1===s',sexs)
        sexs[currentSexIndex] = activeSexs[currentSexIndex];
        setSexs(sexs)
        console.log(currentSexIndex,'v====2===s',sexs)
        typeof callback === 'function' && callback.call(null, currentSexIndex)
    },[currentSexIndex])

    return (
        <SexChoiceView>
            {sexs.map((o, i)=> {
              return [
                <Image
                  key={o}
                  src={o}
                  className="item-choice"
                  onClick={() => setCurrentSexIndex(i)}
                />
              ];
            })}
          </SexChoiceView>
    )
}