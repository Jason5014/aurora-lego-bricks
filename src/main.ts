import { createApp } from 'vue';
import App from './App.vue';

import './style/reset.css';

import testPlugin from './test.plugin';

const app = createApp(App);

app.use(testPlugin);

app.mount('#app');

