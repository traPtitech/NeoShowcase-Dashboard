import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import store from './store'
import App from './App.vue'

import '/@/styles/index.scss'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
