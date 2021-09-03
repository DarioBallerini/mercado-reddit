import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag'

const app = createApp(App)

app.use(VueGtag, {
  property: {
    id: 'G-6P7WN4YNZ6'
  }
})

app.mount('#app')
