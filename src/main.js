import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import { createRouter, createWebHistory } from 'vue-router';
import ImageVue from './components/ImageVue.vue'
import CV from './components/CV.vue'
import CahierDesCharges from './components/CahierDesCharges.vue'

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
    {
        path:   '/CahierDesCharges' ,
        component: CahierDesCharges ,


    },
    // Define your routes here
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

app.use(router);
app.mount('#app')