import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import BaseButton from './components/ui/BaseButton.vue'
import BaseLoader from './components/ui/BaseLoader.vue'


const app = createApp(App);
app.component('base-button', BaseButton);
app.component('base-loader', BaseLoader)
app.use(store)
app.mount('#app')
