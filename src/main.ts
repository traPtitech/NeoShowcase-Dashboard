import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import store from './store'
import App from './App.vue'

import 'element-plus/lib/theme-chalk/index.css'
import './index.scss'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
