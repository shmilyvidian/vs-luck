import commonStore, { CommonStore } from './commonStore'
import homeStore, { HomeStore } from './homeStore'
import messageStore, { MessageStore } from './messageStore'
import chartStore, { ChartStore } from './chartStore'
import activityStore, { ActivityStore } from './activityStore'

type storeTypes = {
    commonStore: CommonStore,
    homeStore: HomeStore,
    messageStore: MessageStore,
    chartStore: ChartStore,
    activityStore: ActivityStore,
}

const store: storeTypes = {
    commonStore,
    homeStore,
    messageStore,
    chartStore,
    activityStore
}
export default store

export {
    homeStore, storeTypes
}