import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import { storeObject } from './store.js'

const store = createStore(storeObject);

createApp(App).use(store).mount('#app')


