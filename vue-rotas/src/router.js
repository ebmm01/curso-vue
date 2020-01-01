import Vue from 'vue'
import VueRouter from 'vue-router'

import Contatos from './views/contatos/Contatos.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatoEditar from './views/contatos/ContatoEditar.vue'
import Erro404Contatos from './views/contatos/Erro404Contatos.vue'
import Erro404 from './views/404.vue'
import Home from './views/Home.vue'
import Login from './views/login/Login.vue'

import EventBus from '@/event-bus.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    { 
        path: '/contatos', 
        component: Contatos,
        props: (route) => {
            const busca = route.query.busca
            return busca ? { busca } : {}
        },
        children: [
            { 
                path: ':id(\\d+)', 
                component: ContatoDetalhes, 
                name: 'contato',
                props: route => {
                    return {
                        id: +route.params.id
                    }
                }
            },
            {
                path: ':id/editar',
                meta: {
                    requerAutenticacao: true
                },
                beforeEnter(to,from,next) {
                    console.log('beforeEnter')
                    next()
                },
                components: {
                    default: ContatoEditar,
                    'contato-detalhes': ContatoDetalhes
                },
                props: {
                    default: true,
                    'contato-detalhes': true
                }
            },
            { path: '', component: ContatosHome},
            { path: '*', component: Erro404Contatos},
        ]
    },
    { path: '/login', component: Login},
    { path: '/', component: Home},
    { path: '*', component: Erro404}
  ]
})

router.beforeEach((to,from,next) => {
    console.log('beforeEach')
    console.log('Requer autenticação?', to.meta.requerAutenticacao)
    const estaAutenticado = EventBus.autenticado
    if (to.matched.some(rota => rota.meta.requerAutenticacao)) {
        if (!estaAutenticado) {
            next({
                path: '/login',
                query: { redirecionar: to.fullPath}
            })
            return
        }
    }
    next()
})

router.beforeResolve((to,from,next) => {
    console.log('beforeResolve')
    next()
})

router.afterEach((to,from) => {
    console.log('afterEach')
})

export default router