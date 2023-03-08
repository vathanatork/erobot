import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import naive from 'naive-ui'
import './assets/css/global.css'


createApp(App).use(router).use(naive).mount('#app')

