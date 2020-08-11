import { observable, action } from 'mobx'

class ChartStore{
  @observable chartName:string = '' // 用户名

  @action setChartName = (name:string) =>{
    this.chartName = name
  }
}
export { ChartStore }

export default new ChartStore