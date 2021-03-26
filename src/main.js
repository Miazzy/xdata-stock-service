import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from "@/plugins/axios";
import 'lib-flexible/flexible';
import icons from '@/icons'; // icon
import components from '@/components'; // icon
import Vant from 'vant';
import 'vant/lib/index.css'; // 全局引入样式
import './mock/mock';
import eventBus from './utils/eventBus';



const app = createApp(App);


try {
    app.use(store).use(router).mount('#app');
    app.use(axios)
    app.use(icons)
    app.use(components)
    app.use(eventBus);
    app.use(Vant);
    //FastClick.attach(document.body); //注册移动端快速点击功能
} catch (error) {
    console.log('fask click components regist error: ', error);
}