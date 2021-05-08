import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LvanUI from '../packages/components/index'
import Prism from 'prismjs'
import CodeWarp from './components/CodeWarp.vue'
import OptionsTable from './components/OptionsTable.vue'
import './assets/scss/main.scss'
import 'prismjs/themes/prism.css'
import '../packages/assets/font/iconfont.css'

const app = createApp(App)

app.use(LvanUI)
app.use(Prism)
app.component('CodeWarp', CodeWarp)
app.component('OptionsTable', OptionsTable)

app.use(store).use(router).mount('#app')
