// 全局组件
import OptionsTable from './options-table/index.vue'
import LvanLink from './link/index.vue'
import LvanButton from './button/index.vue'
import LvanCol from './layout/col.vue'
import LvanRow from './layout/row.vue'
import LvanRadio from './radio/index.vue'
import LvanRadioGroup from './radio-group/index.vue'
import LvanCard from './card/index.vue'

const components = [
  OptionsTable,
  LvanLink,
  LvanButton,
  LvanCol,
  LvanRow,
  LvanRadio,
  LvanRadioGroup,
  LvanCard
]

const install = (Vue: any): void => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof (<any>window) !== 'undefined' && (<any>window).Vue) {
  install((<any>window).Vue)
}

const LvanUI = {
  components,
  install
}

export default LvanUI
