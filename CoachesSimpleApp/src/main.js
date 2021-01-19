import { createApp } from 'vue';
import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseCard from './Globals/baseCard.vue';
import baseButton from './Globals/baseButton.vue';
import baseBadge from './Globals/BaseBadge.vue';

const app = createApp(App);
app.use(store);
app.use(router);
app.component('base-card', BaseCard);
app.component('base-button', baseButton);
app.component('base-badge', baseBadge);
app.mount('#app');
