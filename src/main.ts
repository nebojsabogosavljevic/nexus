import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import i18n from './i18n'
import { useLanguageStore } from './stores/languageStore'

const app = createApp(App)
app.use(createPinia())
app.use(i18n)

const languageStore = useLanguageStore()
i18n.global.locale = languageStore.currentLanguage

app.mount('#app')

