import { createApp } from 'vue'
import App from './App.vue'

// Store vuex
import store from './store'

createApp(App).use(store).mount('#app')
