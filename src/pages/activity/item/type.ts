type propsType = {
  data: activityListDataType
}

// 列表中数据类型
interface activityListDataType {
  title: string
  date: string
}


type stateType = {
  activityListData: Array<activityListDataType>
}


export {propsType,stateType,activityListDataType}