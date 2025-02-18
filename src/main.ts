import './assets/styles/main.css'

import 'vuetify/styles'
import './assets/styles/changeVuetify.css'
import vuetify from './assets/plugins/vuetify.ts'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
