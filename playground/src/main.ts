import './assets/main.css'

import { createApp } from 'vue'
import ui from '@demo/ui-lib/src'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.use(ui)

app.mount('#app')
