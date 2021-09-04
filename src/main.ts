import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag'

createApp(App).use(VueGtag, {
  config: { id: 'G-6P7WN4YNZ6' }
}).mount('#app')
