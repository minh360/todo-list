import HelloWorld from './components/HelloWorld'
import HomePage from './components/Pages/HomePage'
import SignUp from './components/Auth/SignUp'
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
    {
        path: '/sign_up',
        component: SignUp
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;