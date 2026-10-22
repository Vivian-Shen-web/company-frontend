import './styles/index.scss'

import { createApp } from 'vue'

import 'ant-design-vue/dist/reset.css'
import 'virtual:svg-icons-register'

import App from './App.vue'
import router from './router'
import stores from './stores'
import { i18n } from './locales'
import { setupIcons } from './components/basic/icon'

const app = createApp(App)

setupIcons()
app.use(i18n)
app.use(stores)
app.use(router)

app.mount('#xiehe')
