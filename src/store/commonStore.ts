import { action } from 'mobx'

class CommonStore {
    @action public setData = (key, res, storeInstance,removeSpace = false) => {
        console.log(key,'res',res)
        const REG_EXP = /(^\s*)|(\s*$)/g
        let data = removeSpace ? (res).replace(REG_EXP,'') : res
        let keys = key.split('.')
        if (keys.length > 1) {
            for (let i in storeInstance) {
                if (i === keys[0]) {
                    storeInstance[i][keys[1]] =  data
                }
            }
        } else {
            storeInstance[keys[0]] = data
        }
    }

    @action public setDatas = (obj, storeInstance, fn?:any) => {
        const toString = Object.prototype.toString;
        if(toString.call(obj) !== "[object Array]" && typeof obj === 'object' ) {
            Object.keys(obj).forEach( key => {
                this.setData(key, obj[key], storeInstance)
            })
        }
        if(typeof fn === 'function') fn();
    }
}


export { CommonStore }

export default new CommonStore