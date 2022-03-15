import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Carpediem from 'carpediem-ui'
import 'carpediem-ui/lib/index.css'

createApp(App).use(store).use(router).use(Carpediem).mount('#app')
