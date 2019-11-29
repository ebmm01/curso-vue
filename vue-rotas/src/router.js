import Vue from 'vue'
import VueRouter from 'vue-router'

import Contatos from './views/contatos/Contatos.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatoEditar from './views/contatos/ContatoEditar.vue'
import Erro404Contatos from './views/contatos/Erro404Contatos.vue'
import Erro404 from './views/404.vue'
import Home from './views/Home.vue'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    { 
        path: '/contatos', 
        component: Contatos,
        children: [
            { path: ':id', component: ContatoDetalhes, name: 'contato'},
            {
                path: ':id/editar', 
                components: {
                    default: ContatoEditar,
                    'contato-detalhes': ContatoDetalhes
                }
            },
            { path: '', component: ContatosHome},
            { path: '*', component: Erro404Contatos},
        ]
    },
    { path: '/', component: Home},
    { path: '*', component: Erro404}
  ]
})