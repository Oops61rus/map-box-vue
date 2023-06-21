import { createApp } from 'vue';
import { key, store } from './store';

import App from '@/App.vue';

import './assets/main.css';

const app = createApp(App);

app.use(store, key);

app.mount('#app');