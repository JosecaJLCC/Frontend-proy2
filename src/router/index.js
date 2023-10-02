import { createWebHistory, createRouter } from "vue-router";
import Persona from '../views/Persona.vue'
import Login from '../views/Login.vue'
import Menu from '../views/Menu.vue'
import Usuario from '../views/Usuario.vue'
import Lista from '../views/Lista.vue'

const routes = [
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/persona',
        name:'Persona',
        component:Persona
    },
    {
        path:'/menu',
        name:'Menu',
        component:Menu
    },
    {
        path:'/usuario',
        name:'Usuario',
        component:Usuario
    },
    {
        path:'/lista',
        name:'Lista',
        component:Lista
    }

]

const router=createRouter({
    history:createWebHistory(),
    routes

})

export default router;