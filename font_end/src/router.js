import HelloWorld from './components/HelloWorld'
import HomePage from './components/Pages/HomePage'
import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";

const routes = [
    {
        path: '/app',
        component: HelloWorld
    },
    {
        path: '/',
        component: HomePage
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;