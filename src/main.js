import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';

// Import styling
import '@/style/style.scss';

const app = createApp(App);

app.use(router);
app.mount('#app');
