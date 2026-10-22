import './styles/index.scss'
import './styles/qsd.scss'

import { createApp } from 'vue'

import 'ant-design-vue/dist/reset.css'

import App from './App.vue'
import router from './router'
import stores from './stores'

const app = createApp(App)

app.use(stores)
app.use(router)

app.mount('#xiehe')
