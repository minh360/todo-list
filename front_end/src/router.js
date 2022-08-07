import HomePage from './Pages/HomePage'
import SignUp from './components/Auth/SignUp'
import SignIn from './components/Auth/SignIn'
import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/sign-up',
        component: SignUp
    },
    {
        path: '/sign-in',
        component: SignIn
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;