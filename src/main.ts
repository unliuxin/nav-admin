import { createApp } from 'vue'
import App from './App.vue'

import 'uno.css'
import '@/styles/index.scss'

import { useStore } from '@/store'

// router
import { useRouter } from '@/router'

const app = createApp(App)

useStore(app)
useRouter(app)

app.mount('#app')
