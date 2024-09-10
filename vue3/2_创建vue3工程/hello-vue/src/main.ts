// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//引入路由器
import router from './router'

// createApp(App).mount('#app')
const app = createApp(App)
//注册路由器
app.use(router)
//挂载到dom
app.mount('#app')