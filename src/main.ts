import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LvanUI from './components/index'
import Prism from 'prismjs'
import CodeWarp from './views/components/CodeWarp.vue'
import './assets/scss/global.scss'
import './assets/scss/main.scss'
import 'prismjs/themes/prism.css'
import './assets/font/iconfont.css'

const app = createApp(App)

app.use(LvanUI)
app.use(Prism)
app.component('CodeWarp', CodeWarp)

app.use(store).use(router).mount('#app')
