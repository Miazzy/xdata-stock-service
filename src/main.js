import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from "@/plugins/axios";
import 'lib-flexible/flexible';
import icons from '@/icons'; // icon
import components from '@/components'; // icon

import './mock/mock';
import eventBus from './utils/eventBus';

import Vant from 'vant';
import 'vant/lib/index.css'; // 全局引入样式

import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";

const app = createApp(App);

try {
    app.use(store).use(router).mount('#app');
    app.use(axios)
    app.use(icons)
    app.use(components)
    app.use(eventBus);
    app.use(Vant);
    app.use(NutUI);
} catch (error) {
    console.log('components regist error: ', error);
}

try {
    // window.vConsole = new VConsole();
} catch (error) {
    console.log(`vconsole run error:`, error);
}