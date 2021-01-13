import { createApp } from 'vue';
import App from './app.vue';
import cardComponent from './components/UI/cardComponent.vue';
import Buttons from './components/UI/Buttons.vue';
import baseModal from './components/UI/baseModal.vue';
const app = createApp(App);

app.component('card-component', cardComponent);
app.component('buttons', Buttons);
app.component('base-modal', baseModal);

app.mount('#app');
