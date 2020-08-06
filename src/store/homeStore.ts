
import { observable, action, computed, toJS } from 'mobx'

type UserTypes = {
    nickname: String
    sex: number | undefined
}

class HomeStore {
    @observable userInfo: UserTypes = {
        nickname: '',
        sex: undefined
    }

    @action setChoices = (index:number) => {
        this.userInfo.sex = index
    }
    @action sign(){
        console.log('sign')
    }

    @computed get isDoneSign () {
        return Object.values(this.userInfo).every(o=>(o || o === 0))
    }
}

export { HomeStore }

export default new HomeStore