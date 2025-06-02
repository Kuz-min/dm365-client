import { createApp } from 'vue';
import App from './app.vue';
import { NewsService } from '@services/news-service';

const app = createApp(App);

const newsService = new NewsService();
app.provide('NewsService', newsService);

app.mount('#app');
