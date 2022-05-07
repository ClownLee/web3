import { createApp } from 'vue'
import apis from './apis'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$axios = apis

app.use(router)
.mount('#app')
