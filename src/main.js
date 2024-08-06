import { createApp } from 'vue'
import "@/assets/css/variables.scss"
import "@/assets/css/minty.css"
import './style.css'
import App from './App.vue'
import * as bootstrap from 'bootstrap'

// 储存
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const store = createPinia()
store.use(piniaPluginPersistedstate)

import router from './router/index.js'

createApp(App).use(store).use(router).mount('#app')
