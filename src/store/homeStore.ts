
import { observable, action, computed } from 'mobx'

type UserTypes = {
    nickname: String
    sex: String
}

class HomeStore {
    @observable userInfo: UserTypes = {
        nickname: '',
        sex: ''
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