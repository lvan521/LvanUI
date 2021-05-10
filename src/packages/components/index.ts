// 全局组件
import LvanLink from './link/index.vue'
import LvanButton from './button/index.vue'
import LvanCol from './layout/col.vue'
import LvanRow from './layout/row.vue'
import LvanRadio from './radio/index.vue'
import LvanRadioGroup from './radio-group/index.vue'
import LvanCard from './card/index.vue'
import LvanIcon from './icon/index.vue'
import '../assets/font/iconfont.css'
import '../assets/scss/global.scss'

const components = [
  LvanLink,
  LvanButton,
  LvanCol,
  LvanRow,
  LvanRadio,
  LvanRadioGroup,
  LvanCard,
  LvanIcon
]
// 定义install组件的时候，注册的组件名字为compnents.name，编译过程中，组件名字会被压缩成别名，
// 解决办法，改成字符串，写死即可
const componentsName = [
  'LvanLink',
  'LvanButton',
  'LvanCol',
  'LvanRow',
  'LvanRadio',
  'LvanRadioGroup',
  'LvanCard',
  'LvanIcon'
]

const install = (vue: any): void => {
  components.map((component, index) => {
    vue.component(componentsName[index], component)
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
