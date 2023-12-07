import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import ImageVue from './components/ImageVue.vue'
import CV from './components/CV.vue'
const app = createApp(App);

const routes = [
    {
        path:   '/' ,
        component: ImageVue ,
        

    },
    {
        path:   '/CV' ,
        component: CV ,


    },
    // Define your routes here
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

app.use(router);
app.mount('#app')