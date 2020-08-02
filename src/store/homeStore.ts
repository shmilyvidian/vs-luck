
import { observable, action } from 'mobx'

class HomeStore {
    @observable name = 'HOME'
    @observable userInfo = {
        nickname: '',
        sex: ''
    }

    @action sign(){
        console.log('sign')
    }
}
export { HomeStore }

export default new HomeStore