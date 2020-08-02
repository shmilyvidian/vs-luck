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

const stores: storeTypes = {
    commonStore,
    homeStore,
    messageStore,
    chartStore,
    activityStore
}

export default stores

export {
    homeStore
}